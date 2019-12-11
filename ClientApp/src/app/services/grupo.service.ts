import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleErrorService } from '../errores/services/handle-error.service';
import { Grupo } from '../models/grupo';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) { }

  /** POST: add a new tutor to the server */
  addTutor(grupo: Grupo): Observable<Grupo> {
    return this.http.post<Grupo>(this.baseUrl + 'api/Grupo', grupo, httpOptions).pipe(
      tap((newGrupo: Grupo) => this.handleErrorService.log(`added NewGrupo w/ id=${newGrupo.idGrupo}`)),
      catchError(this.handleErrorService.handleError<Grupo>('addGrupo'))
    );
  }

  /** GET Tutor from the server */
  getAll(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.baseUrl + 'api/Grupo').pipe(
      tap(_ => this.handleErrorService.log('Se Consulta la información')),
      catchError(this.handleErrorService.handleError<Grupo[]>('getAll', []))
    );
  }

  /** GET tutor by cedula. Will 404 if id not found */
  get(id: number): Observable<Grupo> {
    const url = `${this.baseUrl + 'api/Grupo'}/${id}`;
    return this.http.get<Grupo>(url).pipe(
      tap(_ => this.handleErrorService.log(`fetched grupo cedula=${id}`)),
      catchError(this.handleErrorService.handleError<Grupo>(`getGrupo id=${id}`))
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
  update(grupo: Grupo): Observable<any> {
    const url = `${this.baseUrl + 'api/Grupo'}/${grupo.idGrupo}`;
    return this.http.put(url, grupo, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`updated grupo id=${grupo.idGrupo}`)),
      catchError(this.handleErrorService.handleError<any>('grupo'))
    );
  }

  /** DELETE: delete the tutor from the server */
  delete(grupo: Grupo | number): Observable<Grupo> {
    const id = typeof grupo === 'number' ? grupo : grupo.idGrupo;
    const url = `${this.baseUrl + 'api/Grupo'}/${id}`;
    return this.http.delete<Grupo>(url, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`deleted facultad id=${id}`)),
      catchError(this.handleErrorService.handleError<Grupo>('deleteGrupo'))
    );
  }
}
