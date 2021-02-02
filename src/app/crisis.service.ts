import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Crisis } from './crisis';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private crisesUrl = 'api/crises';  // URL to web api

  private log(message: string) {
    this.messageService.add(`CrisisService: ${message}`);
  }

  getCrises(): Observable<Crisis[]> {
    return this.http.get<Crisis[]>(this.crisesUrl)
      .pipe(
        tap(_ => this.log('fetched crises')),
        catchError(this.handleError<Crisis[]>('getCrises', []))
      );
  }

  getCrisis(id: number) {
    return this.http.get<Crisis>(`${this.crisesUrl}/${id}`)
      .pipe(
        tap(_ => this.log(`fetched crisis ${id}`)),
        catchError(this.handleError<Crisis>('getCrisis'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
