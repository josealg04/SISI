import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTutorComponent } from './modificar-tutor.component';

describe('ModificarTutorComponent', () => {
  let component: ModificarTutorComponent;
  let fixture: ComponentFixture<ModificarTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
