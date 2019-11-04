import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTutorComponent } from './registro-tutor.component';

describe('RegistroTutorComponent', () => {
  let component: RegistroTutorComponent;
  let fixture: ComponentFixture<RegistroTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
