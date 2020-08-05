import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import { CustCarDetails } from '../custCarDetails';

@Component({
  selector: 'app-washer',
  templateUrl: './washer.component.html',
  styleUrls: ['./washer.component.css']
})
export class WasherComponent implements OnInit {
  cuDetail: any;
  washerName: string;
  list: any;
  display: boolean;
  custCarDetails: CustCarDetails= new CustCarDetails("","","","","","","","","");
  constructor(private service:UserLoginService) { }

  ngOnInit(): void {
    this.washerName=JSON.parse(localStorage.getItem('name'));
    // this.email1=JSON.parse(localStorage.getItem('email'));
  }

  public viewDetails(){
    // alert(this.washerName
    this.list=[];
    // alert("hello  "+this.custCarDetails.name);
    // alert(this.washerName);
    this.custCarDetails.name=this.washerName;
    // alert(this.custCarDetails.name);
    this.service.viewToWasher(this.custCarDetails).subscribe(
      data =>{
        this.display=true;
        this.list=data;
      }
      ,error =>{
        alert("no records found");
      }
    )
  }

  public changeStatus(){
    alert(this.custCarDetails.status);
    alert(this.custCarDetails._id);
    this.custCarDetails.status=this.custCarDetails.status;
    this.custCarDetails._id=this.custCarDetails._id;
    this.service.statusChange(this.custCarDetails).subscribe(
      data =>{
        alert("entered");
        this.list=data;
      },
      error =>{
        alert("somethig went wrong");
      }
    )
  }
}
