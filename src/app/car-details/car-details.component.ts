import { Component, OnInit } from '@angular/core';
import { CustCarDetails } from '../custCarDetails';
import { UserLoginService } from '../user-login.service';
import { CustomerDetails } from '../customerDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  message: any;
  enableButton: boolean=true;
  custDetails: CustomerDetails= new CustomerDetails("","");
  custName1: any;
  
  custCarDetails: CustCarDetails= new CustCarDetails("","","","","","");
  email1: any;
  

  constructor(private service:UserLoginService, public router: Router
    ) { }

  ngOnInit(): void {
    this.custName1=sessionStorage.getItem("name");
    this.email1=sessionStorage.getItem("email");
  }

  public saveDetails(){
    console.log("bef"+this.custCarDetails.email);
    this.custCarDetails.email=this.email1;
    console.log(this.custCarDetails.email);

    console.log("shffiuefh");
    this.custCarDetails.custName=this.custName1;

    alert("dsdg"+this.custCarDetails.email);

    this.service.addDetails(this.custCarDetails).subscribe(
      data =>{
        this.message=data;
        this.router.navigate(['/success']);
      },
      error =>{
        alert("Please fill ALL Details");
      }
    )
  }
  }
