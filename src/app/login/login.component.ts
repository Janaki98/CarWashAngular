import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import { CustomerDetails } from '../customerDetails';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  custDetails: CustomerDetails= new CustomerDetails("","");
  message: any;
  cuDetail: any;
  errorMsg: any;
  errorcontrol: boolean=false;
  // uName: any;
  // id: any;
  // public redirectUrl: 'login/addDetails';
  
  constructor(private service:UserLoginService, public router:Router){}
  ngOnInit(): void {
  }

  public loginNow(){
    let response;
    console.log("entered");

    this.service.login(this.custDetails).subscribe(
      data =>{
        this.cuDetail=data;
        sessionStorage.setItem('name',JSON.stringify(this.cuDetail.name));
        sessionStorage.setItem('email',JSON.stringify(this.cuDetail.email));
       console.log(JSON.parse(sessionStorage.getItem("name")));
       console.log(JSON.parse(sessionStorage.getItem("email")));
        this.router.navigate(['/addDetails']);
      },
      error =>{
        // alert("error occurred");
        this.errorMsg = this.service;
        this.errorcontrol = true;
      }
    )
  }
  // private handleError(errorresponse: HttpErrorResponse) {
  //   if (errorresponse.error instanceof ErrorEvent) {
  //    return  console.log("error : ", errorresponse.error.message);
  //   }
  //   return console.log("server side error : ", errorresponse); 
  // }
}
