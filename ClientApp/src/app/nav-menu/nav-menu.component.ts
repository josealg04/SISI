import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { Rol } from '../models/rol';
import { UserService } from '../services/user.service';
import { TutorService } from '../services/tutor.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  //currentUser: User;

  constructor(private router: Router, private tutorService: TutorService) {
    //this.authorizeService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  /* get isAdmin() {
     return this.currentUser && this.currentUser.rol === Rol.Admin;
   }*/

  logout() {
    this.tutorService.logoutTutor();
    this.router.navigate(['/']);
  }

  userName(): string {
    return this.tutorService.getUserName();
  }

  public isAuthenticated(): boolean {
    return this.tutorService.isAuthenticatedTutor();
  }
}
