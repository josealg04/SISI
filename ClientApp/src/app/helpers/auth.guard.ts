import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      // verifica si la ruta está restringida por algun rol
      if (route.data.roles && route.data.roles.indexOf(currentUser.rol) === -1) {
        // rol no autorizado, así que redirige a la página de inicio
        this.router.navigate(['/home']);
        return false;
      }

      // autorizado así que retorne true
      return true;
    }

    // no ha iniciado sesión, así que redirija a la página de inicio de sesión con la URL de retorno
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
