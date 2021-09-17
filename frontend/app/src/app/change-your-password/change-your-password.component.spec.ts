import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeYourPasswordComponent } from './change-your-password.component';

describe('ChangeYourPasswordComponent', () => {
  let component: ChangeYourPasswordComponent;
  let fixture: ComponentFixture<ChangeYourPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeYourPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeYourPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
