import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleErrorService } from '../errores/services/handle-error.service';
import { Evaluador } from '../models/evaluador';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EvaluadorService {

  private isEvaluadorLoggedIn;
  public username;
  isEvaluador = new Subject<boolean>();


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) { }

  /** POST: add a new tutor to the server */
  addEvaluador(evaluador: Evaluador): Observable<Evaluador> {
    return this.http.post<Evaluador>(this.baseUrl + 'api/Evaluador', evaluador, httpOptions).pipe(
      tap((newEvaluador: Evaluador) => this.handleErrorService.log(`added NewEvaluador w/ id=${newEvaluador.cedula}`)),
      catchError(this.handleErrorService.handleError<Evaluador>('addEvaluador'))
    );
  }

  /** GET Tutor from the server */
  getAll(): Observable<Evaluador[]> {
    return this.http.get<Evaluador[]>(this.baseUrl + 'api/Evaluador').pipe(
      tap(_ => this.handleErrorService.log('Se Consulta la información')),
      catchError(this.handleErrorService.handleError<Evaluador[]>('getAll', []))
    );
  }

  /** GET tutor by cedula. Will 404 if id not found */
  get(cedula: string): Observable<Evaluador> {
    const url = `${this.baseUrl + 'api/Evaluador'}/${cedula}`;
    return this.http.get<Evaluador>(url).pipe(
      tap(_ => this.handleErrorService.log(`fetched evaluador cedula=${cedula}`)),
      catchError(this.handleErrorService.handleError<Evaluador>(`getEvaluador cedula=${cedula}`))
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
  update(evaluador: Evaluador): Observable<any> {
    const url = `${this.baseUrl + 'api/Tutor'}/${evaluador.cedula}`;
    return this.http.put(url, evaluador, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`updated evaluador cedula=${evaluador.cedula}`)),
      catchError(this.handleErrorService.handleError<any>('evaluador'))
    );
  }

  /** DELETE: delete the tutor from the server */
  delete(evaluador: Evaluador | string): Observable<Evaluador> {
    const cedula = typeof evaluador === 'string' ? evaluador : evaluador.cedula;
    const url = `${this.baseUrl + 'api/Evaluador'}/${cedula}`;
    return this.http.delete<Evaluador>(url, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`deleted evaluador cedula=${cedula}`)),
      catchError(this.handleErrorService.handleError<Evaluador>('deleteEvaluador'))
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

  setEvaluadorLoggedIn() {
    localStorage.setItem(
      "EvaluadorLoggedIn",
      JSON.stringify((this.isEvaluadorLoggedIn = true))
    );
    this.isEvaluador.next(true);
    /*
    this.isDocenteLoggedIn=true;
    this.username = 'Docente';*/
  }

  getEvaluadorLoggedIn(): boolean {
    if (JSON.parse(localStorage.getItem("EvaluadorLoggedIn")) != null) {
      this.isEvaluador.next(JSON.parse(localStorage.getItem("EvaluadorLoggedIn")));
      return JSON.parse(sessionStorage.getItem("EvaluadorLoggedIn"));
    } else {
      this.isEvaluador.next(false);
      return false;
    }
    /*
return this.isDocenteLoggedIn;
  }*/
  }
  getEvaluadorByUser(user: string): Observable<Evaluador> {
    const url = `${this.baseUrl + 'api/Evaluador'}/user=${user}`;
    return this.http.get<Evaluador>(url).pipe(
      tap(_ => this.handleErrorService.log(`Consultado evaluador user=${user}`)),
      catchError(err => {
        this.handleErrorService.log('usuario incorrecto');
        return of(undefined);
      })
    );
  }

  AddEvaluadorLS(evaluador: Evaluador) {
    localStorage.setItem("evaluador", JSON.stringify(evaluador));
  }

  getEvaluadorLS(): Evaluador {
    return JSON.parse(localStorage.getItem("evaluador"));
  }

  logoutEvaluador() {
    this.isEvaluador.next(false);
    localStorage.clear();
  }

  getUserName(): string {
    var evaluador= JSON.parse(localStorage.getItem('evaluador'));
    return evaluador.username;
  }

  isAuthenticatedEvaluador(): boolean {
    return localStorage.getItem('evaluador') != null;
  }
}
