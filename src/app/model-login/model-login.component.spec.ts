import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelLoginComponent } from './model-login.component';

describe('ModelLoginComponent', () => {
  let component: ModelLoginComponent;
  let fixture: ComponentFixture<ModelLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
