import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteNgContentComponent } from './componente-ng-content.component';

describe('ComponenteNgContentComponent', () => {
  let component: ComponenteNgContentComponent;
  let fixture: ComponentFixture<ComponenteNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
