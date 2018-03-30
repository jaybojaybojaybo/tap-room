import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Keg } from './keg';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class KegService {

  private kegsUrl = 'api/kegs';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET kegs from the server */
  getKegs (): Observable<Keg[]> {
    return this.http.get<Keg[]>(this.kegsUrl)
      .pipe(
        tap(kegs => this.log(`fetched kegs`)),
        catchError(this.handleError('getKegs', []))
      );
  }

  /** GET keg by id. Return `undefined` when id not found */
  getKegNo404<Data>(id: number): Observable<Keg> {
    const url = `${this.kegsUrl}/?id=${id}`;
    return this.http.get<Keg[]>(url)
      .pipe(
        map(kegs => kegs[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} keg id=${id}`);
        }),
        catchError(this.handleError<Keg>(`getKeg id=${id}`))
      );
  }

  /** GET keg by id. Will 404 if id not found */
  getKeg(id: number): Observable<Keg> {
    const url = `${this.kegsUrl}/${id}`;
    return this.http.get<Keg>(url).pipe(
      tap(_ => this.log(`fetched keg id=${id}`)),
      catchError(this.handleError<Keg>(`getKeg id=${id}`))
    );
  }

  /* GET kegs whose name contains search term */
  searchKegs(term: string): Observable<Keg[]> {
    if (!term.trim()) {
      // if not search term, return empty keg array.
      return of([]);
    }
    return this.http.get<Keg[]>(`api/kegs/?name=${term}`).pipe(
      tap(_ => this.log(`found kegs matching "${term}"`)),
      catchError(this.handleError<Keg[]>('searchKegs', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new keg to the server */
  addKeg (keg: Keg): Observable<Keg> {
    return this.http.post<Keg>(this.kegsUrl, keg, httpOptions).pipe(
      tap((keg: Keg) => this.log(`added keg w/ id=${keg.id}`)),
      catchError(this.handleError<Keg>('addKeg'))
    );
  }

  /** DELETE: delete the keg from the server */
  deleteKeg (keg: Keg | number): Observable<Keg> {
    const id = typeof keg === 'number' ? keg : keg.id;
    const url = `${this.kegsUrl}/${id}`;

    return this.http.delete<Keg>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted keg id=${id}`)),
      catchError(this.handleError<Keg>('deleteKeg'))
    );
  }

  /** PUT: update the keg on the server */
  updateKeg (keg: Keg): Observable<any> {
    return this.http.put(this.kegsUrl, keg, httpOptions).pipe(
      tap(_ => this.log(`updated keg id=${keg.id}`)),
      catchError(this.handleError<any>('updateKeg'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a KegService message with the MessageService */
  private log(message: string) {
    this.messageService.add('KegService: ' + message);
  }
}
