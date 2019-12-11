import { Pipe, PipeTransform } from '@angular/core';
import { Tutor } from '../models/tutor';

@Pipe({
  name: 'filtrotutor'
})
export class FiltrotutorPipe implements PipeTransform {

  transform(tutores: Tutor[], searchText: string): any {
    if (searchText == null) return tutores;
    return tutores.filter(tutor =>
      tutor.cedula.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      ||
      tutor.primerNombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      ||
      tutor.primerApellido.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      ||
      tutor.telefono.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
  }

}
