import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-consulta-estudiante',
  templateUrl: './consulta-estudiante.component.html',
  styleUrls: ['./consulta-estudiante.component.css']
})
export class ConsultaEstudianteComponent implements OnInit {

  estudiantes: Estudiante[];
  searchText: string;
  @Output() seleccionado = new EventEmitter<Estudiante>();

  constructor(private estudianteservice: EstudianteService) { }

  ngOnInit() {
    //this.getAll();
    this.estudianteservice.getAll().subscribe(result => {
      this.estudiantes = result;
      this.searchText = '';
  });
  }

  seleccionar(estudiante: Estudiante) {
    this.seleccionado.emit(estudiante);
}

  /*getAll() {
    this.estudianteservice.getAll().subscribe(estudiantes => this.estudiantes = estudiantes);
  }*/

}
