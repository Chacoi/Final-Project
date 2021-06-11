import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComunidadesComponent } from './lista-comunidades.component';

describe('ListaComunidadesComponent', () => {
  let component: ListaComunidadesComponent;
  let fixture: ComponentFixture<ListaComunidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaComunidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
