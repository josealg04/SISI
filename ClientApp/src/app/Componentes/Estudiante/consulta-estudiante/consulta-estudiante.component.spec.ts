import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEstudianteComponent } from './consulta-estudiante.component';

describe('ConsultaEstudianteComponent', () => {
  let component: ConsultaEstudianteComponent;
  let fixture: ComponentFixture<ConsultaEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
