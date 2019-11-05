import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from '../../../models/estudiante';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {

  estudiante: Estudiante;

  constructor(private route: ActivatedRoute, private estudianteService: EstudianteService, private location: Location) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const cedula =
      +this.route.snapshot.paramMap.get('cedula');
    this.estudianteService.get(cedula)
      .subscribe(estudiante => this.estudiante = estudiante);
  }
  update(): void {
    this.estudianteService.update(this.estudiante)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.estudianteService.delete(this.estudiante)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

}
