import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreDemandeComponent } from './offre-demande.component';

describe('OffreDemandeComponent', () => {
  let component: OffreDemandeComponent;
  let fixture: ComponentFixture<OffreDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
