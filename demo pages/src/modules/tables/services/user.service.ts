import { DecimalPipe } from '@angular/common';
import { Injectable, PipeTransform } from '@angular/core';
import { USERS } from '@modules/tables/data/users';
import { SortDirection } from '@modules/tables/directives';
import { User } from '@modules/tables/models';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';

interface SearchResult {
    users: User[];
    total: number;
}

interface State {
    page: number;
    pageSize: number;
    searchTerm: string;
    sortColumn: string;
    sortDirection: SortDirection;
}

function compare(v1: number | string | boolean, v2: number | string | boolean) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(users: User[], column: string, direction: string): User[] {
    if (direction === '') {
        return users;
    } else {
        // if (typeof users[column] === 'array') return users;
        return [...users].sort((a, b) => {
            // @ts-ignore
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}

function matches(user: User, term: string, pipe: PipeTransform) {
    // return user.lastName.toLowerCase().includes(term.toLowerCase());
    // // ||
    // // pipe.transform(country.area).includes(term) ||
    // // pipe.transform(country.population).includes(term)
    return (
        user.lastName.toLowerCase().includes(term.toLowerCase()) ||
        user.middleName.toLowerCase().includes(term.toLocaleLowerCase()) ||
        user.firstName.toLowerCase().includes(term.toLocaleLowerCase()) ||
        user.relationCode.toLowerCase().includes(term.toLowerCase()) ||
        user.riceID.toLowerCase().includes(term.toLowerCase())
    );
}

function match(user: User, term: string, pipe: PipeTransform) {
    // return user.lastName.toLowerCase().includes(term.toLowerCase());
    // // ||
    // // pipe.transform(country.area).includes(term) ||
    // // pipe.transform(country.population).includes(term)
    return user.riceID.toLowerCase().includes(term.toLowerCase());
}

@Injectable({ providedIn: 'root' })
export class UserService {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _search$ = new Subject<void>();
    private _users$ = new BehaviorSubject<User[]>([]);
    private _total$ = new BehaviorSubject<number>(0);

    private _state: State = {
        page: 1,
        pageSize: 4,
        searchTerm: '',
        sortColumn: '',
        sortDirection: '',
    };

    constructor(private pipe: DecimalPipe) {
        this._search$
            .pipe(
                tap(() => this._loading$.next(true)),
                debounceTime(120),
                switchMap(() => this._search()),
                delay(120),
                tap(() => this._loading$.next(false))
            )
            .subscribe(result => {
                this._users$.next(result.users);
                this._total$.next(result.total);
            });

        this._search$.next();
    }

    get users$() {
        return this._users$.asObservable();
    }
    get total$() {
        return this._total$.asObservable();
    }
    get loading$() {
        return this._loading$.asObservable();
    }
    get page() {
        return this._state.page;
    }
    set page(page: number) {
        this._set({ page });
    }
    get pageSize() {
        return this._state.pageSize;
    }
    set pageSize(pageSize: number) {
        this._set({ pageSize });
    }
    get searchTerm() {
        return this._state.searchTerm;
    }
    set searchTerm(searchTerm: string) {
        this._set({ searchTerm });
    }
    set sortColumn(sortColumn: string) {
        this._set({ sortColumn });
    }
    set sortDirection(sortDirection: SortDirection) {
        this._set({ sortDirection });
    }

    private _set(patch: Partial<State>) {
        Object.assign(this._state, patch);
        this._search$.next();
    }

    private _search(): Observable<SearchResult> {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

        // 1. sort
        let users = sort(USERS, sortColumn, sortDirection);

        // 2. filter
        users = users.filter(user => matches(user, searchTerm, this.pipe));
        const total = users.length;

        // 3. paginate
        users = users.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return of({ users, total });
    }
}
