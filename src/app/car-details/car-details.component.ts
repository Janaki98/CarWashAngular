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
        this.list=data;
      }
      ,error =>{
        alert("no records found");
      }
    )
  }

  public delete(){
    alert('By selecting the particulr ID delete the request');
    this.router.navigate(['/delete']);
    // this.service.delete(this.custCarDetails).subscribe(
    //   data=>{
    //     this.message=data
    //   },
    //   error=>{
    //     alert("please provide valid CAR ID");
    //   }
    // )
  }
  }
