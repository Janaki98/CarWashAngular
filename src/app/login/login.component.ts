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

  custDetails: CustomerDetails= new CustomerDetails("","","");
  message: any;
  cuDetail: any;
  errorMsg: any;
  errorcontrol: boolean=false;
  
  constructor(private service:UserLoginService, public router:Router){}
  ngOnInit(): void {
  }

  public loginNow(){
    let response;
    console.log("entered");

  if(this.custDetails.role==="customer"){
    this.service.login(this.custDetails).subscribe(
      data =>{
        this.cuDetail=data;
        localStorage.setItem('name',JSON.stringify(this.cuDetail.name));
        localStorage.setItem('email',JSON.stringify(this.cuDetail.email));
       console.log(JSON.parse(localStorage.getItem("name")));
       console.log(JSON.parse(localStorage.getItem('email')));
        this.router.navigate(['/addDetails']);
      },
      error =>{
        // alert("error occurred");
        this.errorMsg = this.service;
        this.errorcontrol = true;
      }
    )
  }else{
    this.service.admin(this.custDetails).subscribe(
      data =>{
        this.cuDetail=data;
        localStorage.setItem('name',JSON.stringify(this.cuDetail.userName));
       console.log(JSON.parse(localStorage.getItem("name")));
        console.log(data);
        this.router.navigate(['/admin']);
      },
      error =>{
      alert("enter correct credentials");
        this.errorMsg = this.service;
        this.errorcontrol = true;
      }
    )

  }
  
}
}
