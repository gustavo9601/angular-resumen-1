import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingClassComponent } from './binding-class.component';

describe('BindingClassComponent', () => {
  let component: BindingClassComponent;
  let fixture: ComponentFixture<BindingClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
