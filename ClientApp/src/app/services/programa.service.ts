import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleErrorService } from '../errores/services/handle-error.service';
import { Programa } from '../models/programa';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) { }

  /** POST: add a new tutor to the server */
  addTutor(programa: Programa): Observable<Programa> {
    return this.http.post<Programa>(this.baseUrl + 'api/Programa', programa, httpOptions).pipe(
      tap((newPrograma: Programa) => this.handleErrorService.log(`added NewPrograma w/ id=${newPrograma.idPrograma}`)),
      catchError(this.handleErrorService.handleError<Programa>('addPrograma'))
    );
  }

  /** GET Tutor from the server */
  getAll(): Observable<Programa[]> {
    return this.http.get<Programa[]>(this.baseUrl + 'api/Programa').pipe(
      tap(_ => this.handleErrorService.log('Se Consulta la información')),
      catchError(this.handleErrorService.handleError<Programa[]>('getAll', []))
    );
  }

  /** GET tutor by cedula. Will 404 if id not found */
  get(id: number): Observable<Programa> {
    const url = `${this.baseUrl + 'api/Programa'}/${id}`;
    return this.http.get<Programa>(url).pipe(
      tap(_ => this.handleErrorService.log(`fetched programa cedula=${id}`)),
      catchError(this.handleErrorService.handleError<Programa>(`getPrograma id=${id}`))
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
  update(programa: Programa): Observable<any> {
    const url = `${this.baseUrl + 'api/Programa'}/${programa.idPrograma}`;
    return this.http.put(url, programa, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`updated programa cedula=${programa.idPrograma}`)),
      catchError(this.handleErrorService.handleError<any>('programa'))
    );
  }

  /** DELETE: delete the tutor from the server */
  delete(programa: Programa | number): Observable<Programa> {
    const id = typeof programa === 'number' ? programa : programa.idPrograma;
    const url = `${this.baseUrl + 'api/Programa'}/${id}`;
    return this.http.delete<Programa>(url, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`deleted programa id=${id}`)),
      catchError(this.handleErrorService.handleError<Programa>('deletePrograma'))
    );
  }
}
