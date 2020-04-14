import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaHijaComponent } from './ruta-hija.component';

describe('RutaHijaComponent', () => {
  let component: RutaHijaComponent;
  let fixture: ComponentFixture<RutaHijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaHijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaHijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
