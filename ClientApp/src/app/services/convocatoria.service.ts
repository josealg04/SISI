import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleErrorService } from '../errores/services/handle-error.service';
import { Convocatoria } from '../models/convocatoria';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) { }

  /** POST: add a new tutor to the server */
  addTutor(convocatoria: Convocatoria): Observable<Convocatoria> {
    return this.http.post<Convocatoria>(this.baseUrl + 'api/Convocatoria', convocatoria, httpOptions).pipe(
      tap((newConvocatoria: Convocatoria) => this.handleErrorService.log(`added NewConvocatoria w/ id=${newConvocatoria.idConvocatoria}`)),
      catchError(this.handleErrorService.handleError<Convocatoria>('addConvocatoria'))
    );
  }

  /** GET Tutor from the server */
  getAll(): Observable<Convocatoria[]> {
    return this.http.get<Convocatoria[]>(this.baseUrl + 'api/Convocatoria').pipe(
      tap(_ => this.handleErrorService.log('Se Consulta la información')),
      catchError(this.handleErrorService.handleError<Convocatoria[]>('getAll', []))
    );
  }

  /** GET tutor by cedula. Will 404 if id not found */
  get(id: number): Observable<Convocatoria> {
    const url = `${this.baseUrl + 'api/Convocatoria'}/${id}`;
    return this.http.get<Convocatoria>(url).pipe(
      tap(_ => this.handleErrorService.log(`fetched convocatoria cedula=${id}`)),
      catchError(this.handleErrorService.handleError<Convocatoria>(`getConvocatoria id=${id}`))
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
  update(convocatoria: Convocatoria): Observable<any> {
    const url = `${this.baseUrl + 'api/Convocatoria'}/${convocatoria.idConvocatoria}`;
    return this.http.put(url, convocatoria, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`updated convocatoria cedula=${convocatoria.idConvocatoria}`)),
      catchError(this.handleErrorService.handleError<any>('convocatoria'))
    );
  }

  /** DELETE: delete the tutor from the server */
  delete(convocatoria: Convocatoria | number): Observable<Convocatoria> {
    const id = typeof convocatoria === 'number' ? convocatoria : convocatoria.idConvocatoria;
    const url = `${this.baseUrl + 'api/Convocatoria'}/${id}`;
    return this.http.delete<Convocatoria>(url, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`deleted convocatoria id=${id}`)),
      catchError(this.handleErrorService.handleError<Convocatoria>('deleteConvocatoria'))
    );
  }
}
