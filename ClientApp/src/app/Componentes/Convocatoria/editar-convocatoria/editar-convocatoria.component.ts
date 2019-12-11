import { Component, OnInit } from '@angular/core';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';
import { Convocatoria } from '../../../models/convocatoria';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-convocatoria',
  templateUrl: './editar-convocatoria.component.html',
  styleUrls: ['./editar-convocatoria.component.css']
})
export class EditarConvocatoriaComponent implements OnInit {

  convocatoria: Convocatoria;

  constructor(private route: ActivatedRoute, private convocatoriaService: ConvocatoriaService, private location: Location) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id =
      +this.route.snapshot.paramMap.get('idConvocatoria');
    this.convocatoriaService.get(id)
      .subscribe(convocatoria => this.convocatoria = convocatoria);
  }
  update(): void {
    this.convocatoriaService.update(this.convocatoria)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.convocatoriaService.delete(this.convocatoria)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

}
