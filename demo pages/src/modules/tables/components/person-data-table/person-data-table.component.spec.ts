import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDataTableComponent } from './person-data-table.component';

describe('PersonDataTableComponent', () => {
    let component: PersonDataTableComponent;
    let fixture: ComponentFixture<PersonDataTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PersonDataTableComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PersonDataTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
