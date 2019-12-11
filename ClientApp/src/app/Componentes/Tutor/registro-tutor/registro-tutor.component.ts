import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/services/tutor.service';
import { Tutor } from '../../../models/tutor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-tutor',
  templateUrl: './registro-tutor.component.html',
  styleUrls: ['./registro-tutor.component.css']
})
export class RegistroTutorComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private tutorService: TutorService, private formBuilder: FormBuilder) { }
  tutor: Tutor;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      tipoDocumento: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.maxLength(12)]],
      primerNombre: ['', Validators.required],
      segundoNombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      genero: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.maxLength(15)]],
      email_Personal: ['', [Validators.required, Validators.email]],
      fechaIngreso: ['', Validators.required],
      programa: ['', Validators.required],
      email_Institucional: ['', [Validators.required, Validators.email]],
      cvlac: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    //this.tutor = new Tutor();
  }

  add() {
    this.tutor = this.registerForm.value;
    this.tutorService.addTutor(this.tutor)
      .subscribe(tutor => {
        alert('Se agrego un nuevo tutor')
      });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.add();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
