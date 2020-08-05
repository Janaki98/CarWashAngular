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
    return this.http.post("http://localhost:8083/customer/login", custDetails);
  }

  public register(custDetails) {
    return this.http.post("http://localhost:8083/customer/register", custDetails, { responseType: 'text' as 'json' });
  }
  public addDetails(custCarDetails) {
    console.log("123456");
    return this.http.post("http://localhost:8083/customer/details", custCarDetails, { responseType: 'text' as 'json' })
  }

  public view(custCarDetails){
    return this.http.post("http://localhost:8083/customer/view", custCarDetails);
  }

  public delete(custCarDetails){
    return this.http.post("http://localhost:8083/customer/delete", custCarDetails, {responseType:  'text' as 'json'});
  }

  public admin(customerDetails){
    return  this.http.post("http://localhost:8083/admin/login",customerDetails);
  }

  public viewToAdmin(custCarDetails){
    return  this.http.post("http://localhost:8083/admin/view",custCarDetails);
  }

  public washer(customerDetails){
    return  this.http.post("http://localhost:8083/washer/login",customerDetails);
  }

  public viewToWasher(custCarDetails){
    return  this.http.post("http://localhost:8083/washer/view",custCarDetails);
  }

  public statusChange(custCarDetails){
    return this.http.post("http://localhost:8083/washer/change",custCarDetails);
  }

}
