import { Component, OnInit } from '@angular/core';
import { CustCarDetails } from '../custCarDetails';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  message: any;
  custCarDetails: CustCarDetails= new CustCarDetails("","","","","","");

  constructor(private service:UserLoginService) { }

  ngOnInit(): void {
  }

  public deleteDetails(){
    this.service.delete(this.custCarDetails).subscribe(
      data=>{
        this.message=data
      },
      error=>{
        alert("please provide valid CAR ID");
      }
    )
  }
}
