import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTaxiComponent } from './gestion-taxi.component';

describe('GestionTaxiComponent', () => {
  let component: GestionTaxiComponent;
  let fixture: ComponentFixture<GestionTaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionTaxiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
