import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AuthRequest} from "../models/auth-request";
import {catchError, Observable, retry, throwError} from "rxjs";
import {AuthResponse} from "../models/auth-response";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  apiUrl = environment.apiUrl;


  constructor(private httpClient: HttpClient) { }

  login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.apiUrl+'auth', authRequest).pipe(
      retry(1),
      catchError(this.handleLoginError)
    );
  }

  private handleLoginError(error: HttpErrorResponse) {
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
      return throwError(() => new ErrorEvent(error.error["message"]));
    }



}
