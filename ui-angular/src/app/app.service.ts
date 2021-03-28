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
    public ingredientSearch(data: any) : any{
      return this.http.post(this.SERVICE_API + 'ISearch', data);
    }

    public titleSearch(data: any) : any{
      return this.http.post(this.SERVICE_API + 'TSearch', data);
    }

    public fetchIngredients() : any{
      console.log("hi there")
      return this.http.get(this.SERVICE_API + 'getIngredients')
    }
}
