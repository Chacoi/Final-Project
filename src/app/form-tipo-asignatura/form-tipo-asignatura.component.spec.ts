import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipoAsignaturaComponent } from './form-tipo-asignatura.component';

describe('FormTipoAsignaturaComponent', () => {
  let component: FormTipoAsignaturaComponent;
  let fixture: ComponentFixture<FormTipoAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTipoAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTipoAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
