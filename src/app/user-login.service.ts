import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http:HttpClient) { }

  public login(custDetails){
    return this.http.post("http://localhost:8082/customer/login",custDetails,{responseType:'text' as 'json'});
  }
}
