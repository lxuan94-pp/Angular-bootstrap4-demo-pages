import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDataTableComponent } from './default-data-table.component';

describe('DefaultDataTableComponent', () => {
    let component: DefaultDataTableComponent;
    let fixture: ComponentFixture<DefaultDataTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DefaultDataTableComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DefaultDataTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
