import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { SBSortableHeaderDirective, SortEvent } from '@modules/tables/directives';
import { User } from '@modules/tables/models';
import { UserService } from '@modules/tables/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-ng-search-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './search-table.component.html',
    styleUrls: ['search-table.component.scss'],
})
export class SearchTableComponent implements OnInit {
    @Input() pageSize = 6;
    initialList!: User[];
    users$!: Observable<User[]>;
    total$!: Observable<number>;
    sortedColumn!: string;
    sortedDirection!: string;
    arrayList!: User[];

    @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

    constructor(public userService: UserService, public changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit() {
        this.userService.pageSize = this.pageSize;
        this.users$ = this.userService.users$;
        this.total$ = this.userService.total$;
    }

    onSort({ column, direction }: SortEvent) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this.userService.sortColumn = column;
        this.userService.sortDirection = direction;
        this.changeDetectorRef.detectChanges();
    }

    router(index: number) {
        this.users$.subscribe(value => {
            this.arrayList = value;
        });
        localStorage.setItem('id', this.arrayList[index].riceID);
    }
}
