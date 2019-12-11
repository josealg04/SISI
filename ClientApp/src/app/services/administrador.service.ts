import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleErrorService } from '../errores/services/handle-error.service';
import { Administrador } from '../models/administrador';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private isAdministradorLoggedIn;
  public username;
  isAdministrador = new Subject<boolean>();

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) { }

  /** POST: add a new tutor to the server */
  addAdministrador(administrador: Administrador): Observable<Administrador> {
    return this.http.post<Administrador>(this.baseUrl + 'api/Administrador', administrador, httpOptions).pipe(
      tap((newAdministrador: Administrador) => this.handleErrorService.log(`added NewAdministrador w/ id=${newAdministrador.id}`)),
      catchError(this.handleErrorService.handleError<Administrador>('addAdministrador'))
    );
  }

  /** GET Tutor from the server */
  getAll(): Observable<Administrador[]> {
    return this.http.get<Administrador[]>(this.baseUrl + 'api/Administrador').pipe(
      tap(_ => this.handleErrorService.log('Se Consulta la información')),
      catchError(this.handleErrorService.handleError<Administrador[]>('getAll', []))
    );
  }

  /** GET tutor by cedula. Will 404 if id not found */
  get(id: number): Observable<Administrador> {
    const url = `${this.baseUrl + 'api/Administrador'}/${id}`;
    return this.http.get<Administrador>(url).pipe(
      tap(_ => this.handleErrorService.log(`fetched administrador id=${id}`)),
      catchError(this.handleErrorService.handleError<Administrador>(`getAdministrador id=${id}`))
    );
  }

  /*get(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(this.baseUrl + 'api/Tutor')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Tutor[]>('Consulta Tutores', null))
      );
  }

  getByIdentificacion(cedula: string): Observable<Tutor> {
    return this.http.get<Tutor>(this.baseUrl + 'api/Tutor/' + cedula)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Tutor>('Consulta de Tutores', null))
      );
  }*/

  /** PUT: update the Tutor on the server */
  update(administrador: Administrador): Observable<any> {
    const url = `${this.baseUrl + 'api/Administrador'}/${administrador.id}`;
    return this.http.put(url, administrador, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`updated administrador cedula=${administrador.id}`)),
      catchError(this.handleErrorService.handleError<any>('administrador'))
    );
  }

  /** DELETE: delete the tutor from the server */
  delete(administrador: Administrador | number): Observable<Administrador> {
    const id = typeof administrador === 'number' ? administrador : administrador.id;
    const url = `${this.baseUrl + 'api/Administrador'}/${id}`;
    return this.http.delete<Administrador>(url, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`deleted administrador id=${id}`)),
      catchError(this.handleErrorService.handleError<Administrador>('deleteAdministrador'))
    );
  }


  /* private handleError<T>(operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {
       console.error(error);
       this.log(`${operation} failed: ${error.message}`);
       return of(result as T);
     };
   }
   /** Log a HeroService message with the MessageService */
  /*private log(message: string) {
    alert(`TutorService: ${message}`);
  }*/

  //LOGIN

  setAdministradorLoggedIn() {
    localStorage.setItem(
      "AdministradorLoggedIn",
      JSON.stringify((this.isAdministradorLoggedIn = true))
    );
    this.isAdministrador.next(true);
    /*
    this.isDocenteLoggedIn=true;
    this.username = 'Docente';*/
  }

  getAdministradorLoggedIn(): boolean {
    if (JSON.parse(localStorage.getItem("AdministradorLoggedIn")) != null) {
      this.isAdministrador.next(JSON.parse(localStorage.getItem("AdministradorLoggedIn")));
      return JSON.parse(localStorage.getItem("AdministradorLoggedIn"));
    } else {
      this.isAdministrador.next(false);
      return false;
    }
    /*
return this.isDocenteLoggedIn;
  }*/
  }
  getAdministradorByUser(user: string): Observable<Administrador> {
    const url = `${this.baseUrl + 'api/Administrador'}/user=${user}`;
    return this.http.get<Administrador>(url).pipe(
      tap(_ => this.handleErrorService.log(`Consultado administrador user=${user}`)),
      catchError(err => {
        this.handleErrorService.log('usuario incorrecto');
        return of(undefined);
      })
    );
  }

  AddAdministradorLS(administrador: Administrador) {
    localStorage.setItem("administrador", JSON.stringify(administrador));
  }

  getAdministradorLS(): Administrador {
    return JSON.parse(localStorage.getItem("administrador"));
  }

  logoutAdministrador() {
    this.isAdministrador.next(false);
    localStorage.clear();
  }

  getUserName(): string {
    var tutor = JSON.parse(localStorage.getItem('administrador'));
    return tutor.username;
  }

  isAuthenticatedAdministrador(): boolean {
    return localStorage.getItem('administrador') != null;
  }
}
