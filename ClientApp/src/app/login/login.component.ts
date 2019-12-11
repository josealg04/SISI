import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { TutorService } from '../services/tutor.service';
import { Tutor } from '../models/tutor';
import { Administrador } from '../models/administrador';
import { isUndefined } from 'util';
import { ToastrService } from 'ngx-toastr';
import { AdministradorService } from '../services/administrador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private tutorService: TutorService,
    private admService: AdministradorService,
    private toastr: ToastrService
  ) {
    // redirigir a home si ya inició sesión
    /*if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }*/
  }

  tutor: Tutor;
  administrador: Administrador;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rol: ['', Validators.required]
    });

    // Obtener URL de retorno de los parámetros de ruta o por defecto a '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.ValidarLogin();
    this.loading = true;
    /*this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });*/
  }

  ValidarLogin() {
    var tipoCargo = this.f.rol.value;
    if (tipoCargo == "Tutor") {
      this.ValidarLoginTutor();
    } else {
      if (tipoCargo == "Administrador") {
        this.ValidarLoginAdministrador()
      } else {
        return alert("Elija un rol");
      }
      //alert("Elija un Rol");

      /* if (tipoCargo == "Administrador") {
         //this.ValidarLoginJefe();
       }else{
         alert("Elija un Rol")
       }*/
    }
  }

  ValidarLoginTutor() {
    var username = this.f.username.value;
    this.tutorService.getTutorByUser(username).subscribe(tutor => {
      this.tutor = tutor;
      if (!isUndefined(this.tutor)) {
        this.ValidarTutor(this.tutor.username, this.tutor.password);
        this.tutorService.AddTutorLS(this.tutor);

      }
    });
  }

  ValidarLoginAdministrador() {
    var user = this.f.username.value;
    this.admService.getAdministradorByUser(user).subscribe(administrador => {
      this.administrador = administrador;
      if (!isUndefined(this.administrador)) {
        this.ValidarAdministrador(this.administrador.username, this.administrador.password);
        this.admService.AddAdministradorLS(this.administrador);

      }
    });
  }

  ValidarTutor(usuario: string, password: string) {
    var user = this.f.username.value;
    var pass = this.f.password.value;
    console.log("usuario html", user)
    console.log("contraseña html", pass)
    console.log("usuario recibido", usuario)
    console.log("password recibido", password)
    if (usuario == user && password == pass) {
      this.tutorService.setTutorLoggedIn();
      this.router.navigate(['/home']);
    } else {
      alert('Contraseña incorrecta');
    }
  }
  ValidarAdministrador(usuario: string, password: string) {
    var user = this.f.username.value;
    var pass = this.f.password.value;
    console.log("usuario html", user)
    console.log("contraseña html", pass)
    console.log("usuario recibido", usuario)
    console.log("password recibido", password)
    if (usuario == user && password == pass) {
      this.admService.setAdministradorLoggedIn();
      this.router.navigate(['/home']);
    } else {
      alert("Contraseña incorrecta")
    }
  }



}