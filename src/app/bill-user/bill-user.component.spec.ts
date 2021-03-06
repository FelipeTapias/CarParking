import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillUserComponent } from './bill-user.component';

describe('BillUserComponent', () => {
  let component: BillUserComponent;
  let fixture: ComponentFixture<BillUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
