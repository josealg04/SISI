import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Estudiante } from '../models/estudiante';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  /** POST: add a new estudiante to the server */
  addEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.baseUrl + 'api/Estudiante', estudiante, httpOptions).pipe(
      tap((newEstudiante: Estudiante) => this.log(`added NewEstudiante w/ id=${newEstudiante.cedula}`)),
      catchError(this.handleError<Estudiante>('addEstudiante'))
    );
  }

  /** GET Estudiante from the server */
  getAll(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.baseUrl + 'api/Estudiante').pipe(
      tap(_ => this.log('Se Consulta la información')),
      catchError(this.handleError<Estudiante[]>('getAll', []))
    );
  }

  /** GET estudiante by cedula. Will 404 if id not found */
  get(cedula: number): Observable<Estudiante> {
    const url = `${this.baseUrl + 'api/Estudiante'}/${cedula}`;
    return this.http.get<Estudiante>(url).pipe(
      tap(_ => this.log(`fetched estudiante cedula=${cedula}`)),
      catchError(this.handleError<Estudiante>(`getEstudiante cedula=${cedula}`))
    );
  }

  /** PUT: update the Estudiante on the server */
  update(estudiante: Estudiante): Observable<any> {
    const url = `${this.baseUrl + 'api/Estudiante'}/${estudiante.cedula}`;
    return this.http.put(url, estudiante, httpOptions).pipe(
      tap(_ => this.log(`updated estudiante cedula=${estudiante.cedula}`)),
      catchError(this.handleError<any>('estudiante'))
    );
  }

  /** DELETE: delete the estudiante from the server */
  delete(estudiante: Estudiante | number): Observable<Estudiante> {
    const cedula = typeof estudiante === 'number' ? estudiante : estudiante.cedula;
    const url = `${this.baseUrl + 'api/Estudiante'}/${cedula}`;
    return this.http.delete<Estudiante>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted estudiante cedula=${cedula}`)),
      catchError(this.handleError<Estudiante>('deleteEstudiante'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  /** Log a EstudianteService message with the MessageService */
  private log(message: string) {
    alert(`EstudianteService: ${message}`);
  }

}