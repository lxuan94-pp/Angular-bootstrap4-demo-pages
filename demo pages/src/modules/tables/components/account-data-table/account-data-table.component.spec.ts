import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDataTableComponent } from './account-data-table.component';

describe('AccountDataTableComponent', () => {
  let component: AccountDataTableComponent;
  let fixture: ComponentFixture<AccountDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
