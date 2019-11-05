import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/services/tutor.service';
import { Tutor } from '../../../models/tutor';

@Component({
  selector: 'app-consulta-tutor',
  templateUrl: './consulta-tutor.component.html',
  styleUrls: ['./consulta-tutor.component.css']
})
export class ConsultaTutorComponent implements OnInit {

  tutores: Tutor[];

  constructor(private tutorservice: TutorService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.tutorservice.getAll().subscribe(tutores => this.tutores = tutores);
  }

}
