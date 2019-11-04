import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/services/tutor.service';
import { Tutor } from '../../../models/tutor';

@Component({
  selector: 'app-registro-tutor',
  templateUrl: './registro-tutor.component.html',
  styleUrls: ['./registro-tutor.component.css']
})
export class RegistroTutorComponent implements OnInit {

  constructor(private tutorService: TutorService) { }
  tutor: Tutor;

  ngOnInit() {
    this.tutor = new Tutor();
  }

  add() {
    this.tutorService.addTutor(this.tutor)
      .subscribe(tutor => {
        alert('Se agrego un nuevo tutor')
    });
  }
}
