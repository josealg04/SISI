import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTutorComponent } from './editar-tutor.component';

describe('EditarTutorComponent', () => {
  let component: EditarTutorComponent;
  let fixture: ComponentFixture<EditarTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
