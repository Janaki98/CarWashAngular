import { Component, OnInit } from '@angular/core';
import { CustCarDetails } from '../custCarDetails';
import { UserLoginService } from '../user-login.service';
import { CustomerDetails } from '../customerDetails';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  
  custCarDetails: CustCarDetails= new CustCarDetails("","","","","");
  message: any;
  custDetails: CustomerDetails= new CustomerDetails("","");
  

  constructor(private service:UserLoginService) { }

  ngOnInit(): void {
  }

  public saveDetails(){
    console.log("shffiuefh");
    this.service.addDetails(this.custCarDetails).subscribe(
      data =>{
        console.log(data);
      },
      error =>{
        alert("error occurred");
      }
    )
  }
  }
