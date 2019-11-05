import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/services/tutor.service';
import { Tutor } from '../../../models/tutor';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-tutor',
  templateUrl: './editar-tutor.component.html',
  styleUrls: ['./editar-tutor.component.css']
})
export class EditarTutorComponent implements OnInit {

  tutor: Tutor;

  constructor(private route: ActivatedRoute, private tutorService: TutorService, private location: Location) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const cedula =
      +this.route.snapshot.paramMap.get('cedula');
    this.tutorService.get(cedula)
      .subscribe(tutor => this.tutor = tutor);
  }
  update(): void {
    this.tutorService.update(this.tutor)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.tutorService.delete(this.tutor)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

}
