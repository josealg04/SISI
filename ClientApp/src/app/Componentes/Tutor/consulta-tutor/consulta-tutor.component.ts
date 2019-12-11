import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TutorService } from 'src/app/services/tutor.service';
import { Tutor } from '../../../models/tutor';

@Component({
  selector: 'app-consulta-tutor',
  templateUrl: './consulta-tutor.component.html',
  styleUrls: ['./consulta-tutor.component.css']
})
export class ConsultaTutorComponent implements OnInit {

  pageActual: number = 1;

  tutores: Tutor[];
  searchText: string;
  @Output() seleccionado = new EventEmitter<Tutor>();

  constructor(private tutorservice: TutorService) { }

  ngOnInit() {
    this.tutorservice.getAll().subscribe(result => {
      this.tutores = result;
      this.searchText = '';
  });
  }

  /*getAll() {
    this.tutorservice.getAll().subscribe(tutores => this.tutores = tutores);
  }*/
  seleccionar(tutor: Tutor) {
    this.seleccionado.emit(tutor);
}

}
