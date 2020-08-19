import { DecimalPipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
    let userService: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService, DecimalPipe],
        });
        userService = TestBed.inject(UserService);
    });

    it('should get users$', () => {
        userService.users$.subscribe(response => {
            expect(response).toBeDefined();
        });
    });
    it('should get total$', () => {
        userService.total$.subscribe(response => {
            expect(response).toBeDefined();
        });
    });
    it('should get loading$', () => {
        userService.loading$.subscribe(response => {
            expect(response).toBeDefined();
        });
    });
    it('should set page', () => {
        userService.page = 3;
        expect(userService.page).toBe(3);
    });
    it('should set pageSize', () => {
        userService.pageSize = 3;
        expect(userService.pageSize).toBe(3);
    });
    it('should set SearchTerm', () => {
        userService.searchTerm = 'TEST';
        expect(userService.searchTerm).toBe('TEST');
    });
    it('should search for Xuan', done => {
        userService.searchTerm = 'Xuan';
        userService.users$.subscribe(users => {
            if (users.length === 0) {
                return;
            }
            expect(users[0].lastName).toBe('Xuan');
            done();
        });
    });
    it('should sort ascending', done => {
        userService.sortColumn = 'lastName';
        userService.sortDirection = 'asc';
        userService.users$.subscribe(users => {
            if (users.length === 0) {
                return;
            }
            expect(users[0].name).toBe('Xuan');
            done();
        });
    });
    it('should sort descending', done => {
        userService.sortColumn = 'lastName';
        userService.sortDirection = 'desc';
        userService.users$.subscribe(users => {
            if (users.length === 0) {
                return;
            }
            expect(users[0].lastName).toBe('Xuan');
            done();
        });
    });
});
