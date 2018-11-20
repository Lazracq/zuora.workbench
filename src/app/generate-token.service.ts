import { Injectable } from '@angular/core';
import { ApiLogin } from './apiLogin';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenerateTokenService {

  zuoraService = 'v1/describe/';
  constructor(private _http: HttpClient) { }

  getDescription(currentLogin: ApiLogin): Observable<string> {

    const httpOptions = {
      headers: new HttpHeaders({
        'apiAccessKeyId':  currentLogin.username,
        'apiSecretAccessKey': currentLogin.password
      })
    };
    const url = currentLogin.environment + this.zuoraService;

    // return ['access_token'];
    console.log('toto');
    // console.log(of(this._http.post(url, body)));
    // return of('totopppp');
    // get<string>(currentLogin.environment);
    // return of('pppp' + currentLogin.username);

    return this._http.get<string>(url, httpOptions)
      .pipe(
        catchError(this.handleError('DESCRIBE', 'string'))
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
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
