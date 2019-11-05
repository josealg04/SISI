import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-consulta-estudiante',
  templateUrl: './consulta-estudiante.component.html',
  styleUrls: ['./consulta-estudiante.component.css']
})
export class ConsultaEstudianteComponent implements OnInit {

  estudiantes: Estudiante[];

  constructor(private estudianteservice: EstudianteService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.estudianteservice.getAll().subscribe(estudiantes => this.estudiantes = estudiantes);
  }

}
