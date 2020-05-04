import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../customerDetails';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  custDetails: CustomerDetails= new CustomerDetails("","");
  message: any;
  constructor(private service:UserLoginService){}

  ngOnInit(): void {
  }

  public submitNow(){
    console.log("uyyftfkf");
  }
}
