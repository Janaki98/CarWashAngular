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
  
  custCarDetails: CustCarDetails= new CustCarDetails("","","","","","","","","");
  // file: File = this.custCarDetails.image.files[0];

  email1: any;
  list: any;
  url="";
  display: boolean=false;
  successDisplay: boolean=false;
  message1: any;

  constructor(private service:UserLoginService, public router: Router
    ) { }

  ngOnInit(): void {
    this.custName1=localStorage.getItem("name");
    this.email1=JSON.parse(localStorage.getItem('email'));
    // this.carId=JSON.parse(localStorage.getItem("_id"));
  }

selectFile(event){
  if(event.target.files){
    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0]);
    // alert(this.url);
    reader.onload = (event:any)=>{
      this.url=event.target.result
      // alert(this.url);
    }
  }
}

  public saveDetails(){
    this.message=null;
    this.message1=null;
    this.successDisplay=false;
    this.custCarDetails.email=this.email1;
    this.custCarDetails.custName=this.custName1;
    this.custCarDetails.image=this.url;
    this.custCarDetails.status= "pending";
    this.service.addDetails(this.custCarDetails).subscribe(
      data =>{
        this.message=data;
        // this.router.navigate(['/success']);
        this.successDisplay=true;
      },
      error =>{
      
        alert("Please fill ALL Details");
      }
    )
  }

  public viewDetails(){
    this.message=null;
    this.message1=null;
    this.successDisplay=false;
    this.custCarDetails.email=this.email1;
 
    this.list=[];
    this.service.view(this.custCarDetails).subscribe(
      data =>{
        this.display=true;
        this.list=data;
        // this.custCarDetails=null;
      }
      ,error =>{
        alert("no records found");
      }
    )
  }


  radioSelect(event:any){
    this.custCarDetails._id= event.target.value;
  }

  public delete(){
    
    this.successDisplay=false;
    alert(this.custCarDetails._id);
    this.service.delete(this.custCarDetails).subscribe(
      data=>{
        this.message1=data
      },
      error=>{
        this.message1="";
        alert("please provide valid CAR ID");
      }
    )
  }
  }
  
