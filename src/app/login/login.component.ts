import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import { CustomerDetails } from '../customerDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  custDetails: CustomerDetails= new CustomerDetails("","");
  message: any;

  constructor(private service:UserLoginService) { }

  ngOnInit(): void {
  }

  public loginNow(){
    let response=this.service.login(this.custDetails);

    response.subscribe((data)=>this.message=data);
  }

}
