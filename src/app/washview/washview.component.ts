import { Component, OnInit } from '@angular/core';
import { CustCarDetails } from '../custCarDetails';
import { UserLoginService } from '../user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-washview',
  templateUrl: './washview.component.html',
  styleUrls: ['./washview.component.css']
})
export class WashviewComponent implements OnInit {

  cuDetail: any;
  washerName: string;
  list: any;
  display: boolean;
  custCarDetails: CustCarDetails= new CustCarDetails("","","","","","","","","");
  message: string;
  constructor(private service:UserLoginService,public router: Router) { }

  ngOnInit(): void {
    this.washerName=JSON.parse(localStorage.getItem('name'));
    // this.email1=JSON.parse(localStorage.getItem('email'));
  }

  public viewDetails(){
    this.message=null;
    this.list=[];
    this.custCarDetails.name=this.washerName;
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
    this.message=null;
    // this.custCarDetails.status=this.custCarDetails.status;
    // this.custCarDetails._id=this.custCarDetails._id;
    // alert(this.custCarDetails.status);
    if(this.custCarDetails.status===undefined||this.custCarDetails._id===undefined){
      alert("please select status or enter ID")
    }
    else{

      this.service.statusChange(this.custCarDetails).subscribe(
        data =>{
          // alert("entered");
          this.list=data;
          this.router.navigate(['/success']);
        },
        error =>{
          alert("Please enter proper ID");
        }
      )
    }
    
  }

}
