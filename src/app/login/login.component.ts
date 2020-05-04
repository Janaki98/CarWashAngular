import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import { CustomerDetails } from '../customerDetails';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  custDetails: CustomerDetails= new CustomerDetails("","");
  message: any;
  // public redirectUrl: 'login/addDetails';
  
  constructor(private service:UserLoginService, public router:Router){}
  ngOnInit(): void {
  }

  public loginNow(){
    let response;
    console.log("entered");

    this.service.login(this.custDetails).subscribe(
      data =>{
        console.log(data);
        this.router.navigate(['/addDetails']);
      },
      error =>{
        alert("error occurred");
      }
    )
  }
}
