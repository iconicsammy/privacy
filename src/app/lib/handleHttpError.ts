import { Observable } from "rxjs";
import { throwError } from 'rxjs'
import { HttpErrorResponse } from "@angular/common/http";
export function handleHttpError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = "Unknown error!";
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }