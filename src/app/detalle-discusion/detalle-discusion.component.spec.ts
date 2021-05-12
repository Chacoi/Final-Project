import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDiscusionComponent } from './detalle-discusion.component';

describe('DetalleDiscusionComponent', () => {
  let component: DetalleDiscusionComponent;
  let fixture: ComponentFixture<DetalleDiscusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDiscusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDiscusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
