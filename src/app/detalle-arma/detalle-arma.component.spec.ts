import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleArmaComponent } from './detalle-arma.component';

describe('DetalleArmaComponent', () => {
  let component: DetalleArmaComponent;
  let fixture: ComponentFixture<DetalleArmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleArmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
