import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {


  // isLoggedIn: boolean = false;    
  // store the URL so we can redirect after logging in
  public redirectUrl: '/addDetails';

  // constructor (
  //  private http: HttpClient,
  //  private router: Router
  // ) {}

  // login(custDetails): Observable<any> {
    // const postData ={
    //     userName: custDetails.userName,
    //     password: custDetails
    // };

  //   console.log("ghh");
  //   return this.http.post('http://localhost:8082/customer/login', 
  //   JSON.stringify(custDetails)).pipe(map((response) => {
  //     // do whatever with your response
  //     // this.isLoggedIn = true;
  //     console.log("1234");
  //     if (response==="LoggedIn Successfully") {
  //       this.router.navigate([this.redirectUrl]);
  //       this.redirectUrl = null;
  //     }
  //   }))
  // }

  // logout(): void {
  //   this.isLoggedIn = false;
  // }

  constructor(private http:HttpClient) { }

  public login(custDetails){
    return this.http.post("http://localhost:8082/customer/login",custDetails,{responseType:'text' as 'json'});
  }

  // public login(custDetails){

  //     this.http.post("http://localhost:8082/customer/login",custDetails).
  //     toPromise().then((data: any)=>{
  //       console.log(data);
  //       console.log(JSON.stringify(data.json.message));
  //     })
  // }

  public addDetails(custCarDetails){
    return this.http.post("http://localhost:8082/customer/details",custCarDetails,{responseType:'text' as 'json'})
  }
}
