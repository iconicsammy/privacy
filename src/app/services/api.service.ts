import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { handleHttpError } from "@lib/handleHttpError"
import { ConsentContent } from '@interfaces/interface-consent-content';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getConstentsList(): Promise<ConsentContent> {
    /*
    Get list of consents
    */
  
    return this.http
      .get('https://fast-lowlands-95849.herokuapp.com/api/common/getBanner')
      .pipe(catchError(handleHttpError))
      .toPromise();
  }
}
