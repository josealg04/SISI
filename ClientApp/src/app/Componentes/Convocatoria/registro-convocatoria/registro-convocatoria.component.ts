import { Component, OnInit } from '@angular/core';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';
import { Convocatoria } from '../../../models/convocatoria';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-convocatoria',
  templateUrl: './registro-convocatoria.component.html',
  styleUrls: ['./registro-convocatoria.component.css']
})
export class RegistroConvocatoriaComponent implements OnInit {

  convocatoriaForm: FormGroup;
  submitted = false;

  constructor(private convocatoriaService: ConvocatoriaService, private formBuilder: FormBuilder) { }
  convocatoria: Convocatoria;

  ngOnInit() {
    this.convocatoriaForm = this.formBuilder.group({
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
    });
    //this.tutor = new Tutor();
  }

  add() {
    this.convocatoria = this.convocatoriaForm.value;
    this.convocatoriaService.addTutor(this.convocatoria)
      .subscribe(tutor => {
        alert('Se agrego un nuevo convocatoria')
      });
  }

  get f() { return this.convocatoriaForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.convocatoriaForm.invalid) {
      return;
    }
    this.add();
  }

  onReset() {
    this.submitted = false;
    this.convocatoriaForm.reset();
  }

}
