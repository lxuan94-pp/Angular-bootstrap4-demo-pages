import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceDataTableComponent } from './instance-data-table.component';

describe('InstanceDataTableComponent', () => {
    let component: InstanceDataTableComponent;
    let fixture: ComponentFixture<InstanceDataTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InstanceDataTableComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InstanceDataTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
