import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleErrorService } from '../errores/services/handle-error.service';
import { Tutor } from '../models/tutor';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  private isTutorLoggedIn;
  public username;
  isTutor = new Subject<boolean>();

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) { }

  /** POST: add a new tutor to the server */
  addTutor(tutor: Tutor): Observable<Tutor> {
    return this.http.post<Tutor>(this.baseUrl + 'api/Tutor', tutor, httpOptions).pipe(
      tap((newTutor: Tutor) => this.handleErrorService.log(`added NewTutor w/ id=${newTutor.cedula}`)),
      catchError(this.handleErrorService.handleError<Tutor>('addTutor'))
    );
  }

  /** GET Tutor from the server */
  getAll(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(this.baseUrl + 'api/Tutor').pipe(
      tap(_ => this.handleErrorService.log('Se Consulta la información')),
      catchError(this.handleErrorService.handleError<Tutor[]>('getAll', []))
    );
  }

  /** GET tutor by cedula. Will 404 if id not found */
  get(cedula: number): Observable<Tutor> {
    const url = `${this.baseUrl + 'api/Tutor'}/${cedula}`;
    return this.http.get<Tutor>(url).pipe(
      tap(_ => this.handleErrorService.log(`fetched tutor cedula=${cedula}`)),
      catchError(this.handleErrorService.handleError<Tutor>(`getTutor cedula=${cedula}`))
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
  update(tutor: Tutor): Observable<any> {
    const url = `${this.baseUrl + 'api/Tutor'}/${tutor.cedula}`;
    return this.http.put(url, tutor, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`updated tutor cedula=${tutor.cedula}`)),
      catchError(this.handleErrorService.handleError<any>('tutor'))
    );
  }

  /** DELETE: delete the tutor from the server */
  delete(tutor: Tutor | string): Observable<Tutor> {
    const cedula = typeof tutor === 'string' ? tutor : tutor.cedula;
    const url = `${this.baseUrl + 'api/Tutor'}/${cedula}`;
    return this.http.delete<Tutor>(url, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`deleted tutor cedula=${cedula}`)),
      catchError(this.handleErrorService.handleError<Tutor>('deleteTutor'))
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

  setTutorLoggedIn() {
    localStorage.setItem(
      "TutorLoggedIn",
      JSON.stringify((this.isTutorLoggedIn = true))
    );
    this.isTutor.next(true);
    /*
    this.isDocenteLoggedIn=true;
    this.username = 'Docente';*/
  }

  getTutorLoggedIn(): boolean {
    if (JSON.parse(localStorage.getItem("TutorLoggedIn")) != null) {
      this.isTutor.next(JSON.parse(localStorage.getItem("TutorLoggedIn")));
      return JSON.parse(localStorage.getItem("TutorLoggedIn"));
    } else {
      this.isTutor.next(false);
      return false;
    }
    /*
return this.isDocenteLoggedIn;
  }*/
  }
  getTutorByUser(user: string): Observable<Tutor> {
    const url = `${this.baseUrl + 'api/Tutor'}/user=${user}`;
    return this.http.get<Tutor>(url).pipe(
      tap(_ => this.handleErrorService.log(`Consultado tutor user=${user}`)),
      catchError(err => {
        this.handleErrorService.log('usuario incorrecto');
        return of(undefined);
      })
    );
  }

  AddTutorLS(tutor: Tutor) {
    localStorage.setItem("tutor", JSON.stringify(tutor));
  }

  getTutorLS(): Tutor {
    return JSON.parse(localStorage.getItem("tutor"));
  }

  logoutTutor() {
    this.isTutor.next(false);
    localStorage.clear();
  }

  getUserName(): string {
    var tutor= JSON.parse(localStorage.getItem('tutor'));
    return tutor.username;
  }

  isAuthenticatedTutor(): boolean {
    return localStorage.getItem('tutor') != null;
  }

}
