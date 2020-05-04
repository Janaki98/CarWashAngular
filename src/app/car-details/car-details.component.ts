import { Component, OnInit } from '@angular/core';
import { CustCarDetails } from '../custCarDetails';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  
  custCarDetails: CustCarDetails= new CustCarDetails("","","","","");
  message: any;

  constructor(private service:UserLoginService) { }

  ngOnInit(): void {
  }

  public loginNow(){
    let response=this.service.addDetails(this.custCarDetails);

    response.subscribe((data)=>this.message=data);
  }

}
