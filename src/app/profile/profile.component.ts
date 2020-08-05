import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email1: any;

  constructor() { }

  ngOnInit(): void {
    this.email1=JSON.parse(localStorage.getItem('email'));
  }

  public data(){
    alert(this.email1);
  }
}
