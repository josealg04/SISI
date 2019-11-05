import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Tutor } from '../models/tutor';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  /** POST: add a new tutor to the server */
  addTutor(tutor: Tutor): Observable<Tutor> {
    return this.http.post<Tutor>(this.baseUrl + 'api/Tutor', tutor, httpOptions).pipe(
      tap((newTutor: Tutor) => this.log(`added NewTutor w/ id=${newTutor.cedula}`)),
      catchError(this.handleError<Tutor>('addTutor'))
    );
  }

  /** GET Tutor from the server */
  getAll(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(this.baseUrl + 'api/Tutor').pipe(
      tap(_ => this.log('Se Consulta la información')),
      catchError(this.handleError<Tutor[]>('getAll', []))
    );
  }

  /** GET tutor by cedula. Will 404 if id not found */
  get(cedula: number): Observable<Tutor> {
    const url = `${this.baseUrl + 'api/Tutor'}/${cedula}`;
    return this.http.get<Tutor>(url).pipe(
      tap(_ => this.log(`fetched tutor cedula=${cedula}`)),
      catchError(this.handleError<Tutor>(`getTutor cedula=${cedula}`))
    );
  }

  /** PUT: update the Tutor on the server */
  update(tutor: Tutor): Observable<any> {
    const url = `${this.baseUrl + 'api/Tutor'}/${tutor.cedula}`;
    return this.http.put(url, tutor, httpOptions).pipe(
      tap(_ => this.log(`updated tutor cedula=${tutor.cedula}`)),
      catchError(this.handleError<any>('tutor'))
    );
  }

  /** DELETE: delete the tutor from the server */
  delete(tutor: Tutor | number): Observable<Tutor> {
    const cedula = typeof tutor === 'number' ? tutor : tutor.cedula;
    const url = `${this.baseUrl + 'api/Tutor'}/${cedula}`;
    return this.http.delete<Tutor>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted tutor cedula=${cedula}`)),
      catchError(this.handleError<Tutor>('deleteTutor'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    alert(`TutorService: ${message}`);
  }

}
