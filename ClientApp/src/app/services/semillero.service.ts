import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleErrorService } from '../errores/services/handle-error.service';
import { Semillero } from '../models/semillero';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SemilleroService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) { }

  /** POST: add a new tutor to the server */
  addTutor(semillero: Semillero): Observable<Semillero> {
    return this.http.post<Semillero>(this.baseUrl + 'api/Semillero', semillero, httpOptions).pipe(
      tap((newSemillero: Semillero) => this.handleErrorService.log(`added NewSemillero w/ id=${newSemillero.idGrupo}`)),
      catchError(this.handleErrorService.handleError<Semillero>('addSemillero'))
    );
  }

  /** GET Tutor from the server */
  getAll(): Observable<Semillero[]> {
    return this.http.get<Semillero[]>(this.baseUrl + 'api/Semillero').pipe(
      tap(_ => this.handleErrorService.log('Se Consulta la información')),
      catchError(this.handleErrorService.handleError<Semillero[]>('getAll', []))
    );
  }

  /** GET tutor by cedula. Will 404 if id not found */
  get(id: number): Observable<Semillero> {
    const url = `${this.baseUrl + 'api/Semillero'}/${id}`;
    return this.http.get<Semillero>(url).pipe(
      tap(_ => this.handleErrorService.log(`fetched semillero id=${id}`)),
      catchError(this.handleErrorService.handleError<Semillero>(`getSemillero id=${id}`))
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
  update(semillero: Semillero): Observable<any> {
    const url = `${this.baseUrl + 'api/Semillero'}/${semillero.idGrupo}`;
    return this.http.put(url, semillero, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`updated semillero id=${semillero.idGrupo}`)),
      catchError(this.handleErrorService.handleError<any>('semillero'))
    );
  }

  /** DELETE: delete the tutor from the server */
  delete(semillero: Semillero | number): Observable<Semillero> {
    const id = typeof semillero === 'number' ? semillero : semillero.idGrupo;
    const url = `${this.baseUrl + 'api/Semillero'}/${id}`;
    return this.http.delete<Semillero>(url, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`deleted semillero id=${id}`)),
      catchError(this.handleErrorService.handleError<Semillero>('deleteSemillero'))
    );
  }
}
