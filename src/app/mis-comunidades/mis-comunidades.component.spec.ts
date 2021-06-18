import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisComunidadesComponent } from './mis-comunidades.component';

describe('MisComunidadesComponent', () => {
  let component: MisComunidadesComponent;
  let fixture: ComponentFixture<MisComunidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisComunidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisComunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
