import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';
import { Convocatoria } from '../../../models/convocatoria';

@Component({
  selector: 'app-consulta-convocatoria',
  templateUrl: './consulta-convocatoria.component.html',
  styleUrls: ['./consulta-convocatoria.component.css']
})
export class ConsultaConvocatoriaComponent implements OnInit {

  convocatorias: Convocatoria[];

  constructor(private convocatoriaService: ConvocatoriaService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.convocatoriaService.getAll().subscribe(convocatorias => this.convocatorias = convocatorias);
  }

}
