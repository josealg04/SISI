import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTutorComponent } from './consulta-tutor.component';

describe('ConsultaTutorComponent', () => {
  let component: ConsultaTutorComponent;
  let fixture: ComponentFixture<ConsultaTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
