import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from '../../../models/estudiante';

@Component({
  selector: 'app-registro-estudiante',
  templateUrl: './registro-estudiante.component.html',
  styleUrls: ['./registro-estudiante.component.css']
})
export class RegistroEstudianteComponent implements OnInit {

  constructor(private estudianteService: EstudianteService) { }
  estudiante: Estudiante;

  ngOnInit() {
    this.estudiante = new Estudiante();
  }

  add() {
    this.estudianteService.addEstudiante(this.estudiante)
      .subscribe(estudiante => {
        alert('Se agrego un nuevo estudiante')
    });
  }
}
