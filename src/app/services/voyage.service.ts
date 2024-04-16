import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Voyage} from "../models/voyage";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  apiUrl  = environment.apiUrl+"voyages";


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Voyage[]>{
    return this.httpClient.get<Voyage[]>(this.apiUrl+".json").pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getOne(id: number): Observable<Voyage>{
    return this.httpClient.get<Voyage>(this.apiUrl+"/"+id+'.json').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  removeVoyage(id: number): Observable<Voyage> {
    return this.httpClient.delete(this.apiUrl+"/"+id+'.json').pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  postVoyage(voyage: Voyage): Observable<Voyage> {
    return this.httpClient.post<Voyage>(this.apiUrl+".json", voyage).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  putVoyage(voyage: Voyage): Observable<Voyage>{
    return this.httpClient.put<Voyage>(this.apiUrl+"/"+voyage.id+'.json', voyage).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    // Return an observable with a user-facing error message.
    return throwError(() => new ErrorEvent('Something bad happened; please try again later.'));
  }

}
