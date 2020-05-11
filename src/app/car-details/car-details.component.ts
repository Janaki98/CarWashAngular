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
  custDetails: CustomerDetails;
  custName1: any;
  
  custCarDetails: CustCarDetails= new CustCarDetails("","","","","","");
  email1: any;
  list: any;
  

  constructor(private service:UserLoginService, public router: Router
    ) { }

  ngOnInit(): void {
    this.custName1=localStorage.getItem("name");
    this.email1=JSON.parse(localStorage.getItem('email'));
  }

  public saveDetails(){
    this.custCarDetails.email=this.email1;
    this.custCarDetails.custName=this.custName1;
    console.log("1234"+this.custName1);
    console.log("qwe"+this.custCarDetails.email);
    this.service.addDetails(this.custCarDetails).subscribe(
      data =>{
        this.message=data;
        this.router.navigate(['/success']);
      },
      error =>{
      
        alert("Please fill ALL Details  or 1request at a time ");
      }
    )
  }

  public viewDetails(){
    this.custCarDetails.email=this.email1;
    this.list=[];
    this.service.view(this.custCarDetails).subscribe(
      data =>{
        // this.list=this.list.push(data);
        this.list=data;
      }
        
        // localStorage.setItem('carName',JSON.stringify(this.list.carName));
        // JSON.parse(localStorage.getItem('carName'));
        // localStorage.setItem('paymentDetails',JSON.stringify(this.list.paymentDetails));
        // JSON.parse(localStorage.getItem('paymentDetails'));
        // localStorage.setItem('packAge',JSON.stringify(this.list.packAge));
        // JSON.parse(localStorage.getItem('packAge'));
        // localStorage.setItem('date',JSON.stringify(this.list.date));
        // JSON.parse(localStorage.getItem('date'));
        // localStorage.setItem('time',JSON.stringify(this.list.time));
        // JSON.parse(localStorage.getItem('time'));
        // this.router.navigate(['/view']);
      ,error =>{
        alert("no records found");
      }
    )
  }
  }
