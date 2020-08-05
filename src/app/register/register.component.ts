import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../customerDetails';
import { UserLoginService } from '../user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  custDetails: CustomerDetails= new CustomerDetails("","","");
  message: any;
  public errorMsg;
  errorcontrol: boolean=false;
  constructor(private service:UserLoginService, public router:Router){}

  // custDetails=new CustomerDetails(this.custDetails.name,this.custDetails.password);
  ngOnInit(): void {
  }

  public submitNow(){

    if(this.custDetails.role==="customer"){
      this.service.register(this.custDetails).subscribe(
        data =>{
          // console.log(data);
          this.message=data;
          this.router.navigate(['/login']);
        },
        error =>{
          this.errorMsg = error.error.message;
          this.errorcontrol = true;
          // alert(this.errorMsg);
        }
      )
    }else{
      alert("you DO NOT have permissions for ADMIN REGISTRATION");
      this.router.navigate(['/login']);
    }
  }
}
