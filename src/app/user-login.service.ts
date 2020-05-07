import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  public redirectUrl: '/addDetails';

  constructor(private http: HttpClient) { }

  public login(custDetails): Observable<any> {
    return this.http.post("http://localhost:8081/customer/login", custDetails);
  }

  public register(custDetails) {
    return this.http.post("http://localhost:8081/customer/register", custDetails, { responseType: 'text' as 'json' });
  }
  public addDetails(custCarDetails) {
    console.log("123456");
    return this.http.post("http://localhost:8081/customer/details", custCarDetails, { responseType: 'text' as 'json' })
  }

}
