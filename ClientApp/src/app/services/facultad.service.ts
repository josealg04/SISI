import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleErrorService } from '../errores/services/handle-error.service';
import { Facultad } from '../models/facultad';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) { }

  /** POST: add a new tutor to the server */
  addTutor(facultad: Facultad): Observable<Facultad> {
    return this.http.post<Facultad>(this.baseUrl + 'api/Facultad', facultad, httpOptions).pipe(
      tap((newFacultad: Facultad) => this.handleErrorService.log(`added NewFacultad w/ id=${newFacultad.idFacultad}`)),
      catchError(this.handleErrorService.handleError<Facultad>('addFacultad'))
    );
  }

  /** GET Tutor from the server */
  getAll(): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(this.baseUrl + 'api/Facultad').pipe(
      tap(_ => this.handleErrorService.log('Se Consulta la información')),
      catchError(this.handleErrorService.handleError<Facultad[]>('getAll', []))
    );
  }

  /** GET tutor by cedula. Will 404 if id not found */
  get(id: number): Observable<Facultad> {
    const url = `${this.baseUrl + 'api/Facultad'}/${id}`;
    return this.http.get<Facultad>(url).pipe(
      tap(_ => this.handleErrorService.log(`fetched facultad cedula=${id}`)),
      catchError(this.handleErrorService.handleError<Facultad>(`getFacultad id=${id}`))
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
  update(facultad: Facultad): Observable<any> {
    const url = `${this.baseUrl + 'api/Facultad'}/${facultad.idFacultad}`;
    return this.http.put(url, facultad, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`updated facultad cedula=${facultad.idFacultad}`)),
      catchError(this.handleErrorService.handleError<any>('facultad'))
    );
  }

  /** DELETE: delete the tutor from the server */
  delete(facultad: Facultad | number): Observable<Facultad> {
    const id = typeof facultad === 'number' ? facultad : facultad.idFacultad;
    const url = `${this.baseUrl + 'api/Facultad'}/${id}`;
    return this.http.delete<Facultad>(url, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`deleted facultad id=${id}`)),
      catchError(this.handleErrorService.handleError<Facultad>('deleteFacultad'))
    );
  }
}
