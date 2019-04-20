import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidInfoComponent } from './form-valid-info.component';

describe('FormValidInfoComponent', () => {
  let component: FormValidInfoComponent;
  let fixture: ComponentFixture<FormValidInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
