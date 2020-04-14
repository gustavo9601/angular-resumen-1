import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaVaciaComponent } from './ruta-vacia.component';

describe('RutaVaciaComponent', () => {
  let component: RutaVaciaComponent;
  let fixture: ComponentFixture<RutaVaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaVaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaVaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
