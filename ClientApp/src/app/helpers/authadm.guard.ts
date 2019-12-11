import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { AdministradorService } from '../services/administrador.service';

@Injectable({
  providedIn: 'root'
})
export class AuthadmGuard implements CanActivate {

  constructor(private admService: AdministradorService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.admService.getAdministradorLoggedIn() == false) {
      this.router.navigate(["/"]);
    } else {
      return this.admService.getAdministradorLoggedIn();
    }
  }

}
