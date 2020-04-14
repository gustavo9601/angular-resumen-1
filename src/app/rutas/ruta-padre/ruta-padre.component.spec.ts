import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPadreComponent } from './ruta-padre.component';

describe('RutaPadreComponent', () => {
  let component: RutaPadreComponent;
  let fixture: ComponentFixture<RutaPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
