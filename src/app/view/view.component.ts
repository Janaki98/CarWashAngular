import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import { CustCarDetails } from '../custCarDetails';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  custCarDetails: CustCarDetails= new CustCarDetails("","","","","","","","","");
 userName1: any;
  list: any;
  url="";
  display: boolean=false;
  message: String;

  constructor(private service:UserLoginService) { }

  ngOnInit(): void {
  }

  public viewDetails(){
    // this.custCarDetails.userName=this.custName1;
    // alert(this.custName1);
    this.message=null;
    this.list=[];
    this.service.viewToAdmin(this.custCarDetails).subscribe(
      data =>{
        this.display=true;
        this.list=data;
        
      }
      ,error =>{
        alert("no records found");
      }
    )
  }

}
