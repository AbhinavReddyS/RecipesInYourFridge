import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class AppService {

    constructor(private http: HttpClient) {
    }

    SERVICE_API = 'http://127.0.0.1:5000/';
    public get_data() : any{
      return this.http.get(this.SERVICE_API + 'getData');
    }
}