import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableRowComponent } from './users-table-row.component';

describe('UsersTableRowComponent', () => {
  let component: UsersTableRowComponent;
  let fixture: ComponentFixture<UsersTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
