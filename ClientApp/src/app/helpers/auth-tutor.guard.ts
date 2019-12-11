import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TutorService } from '../services/tutor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTutorGuard implements CanActivate {

  constructor(private tutorService: TutorService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tutorService.getTutorLoggedIn() == false) {
      this.router.navigate(["/"]);
    } else {
      return this.tutorService.getTutorLoggedIn();
    }
  }

}
