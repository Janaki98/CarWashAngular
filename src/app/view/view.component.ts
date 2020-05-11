import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  carName1: any;
  paymentDetails1: any;
  packAge1: any;
  date1: any;
  time1: any;

  constructor() { }

  ngOnInit(): void {
    this.carName1=JSON.parse(localStorage.getItem('carName'));
    this.paymentDetails1=JSON.parse(localStorage.getItem('paymentDetails'));
    this.packAge1=JSON.parse(localStorage.getItem('packAge'));
    this.date1=JSON.parse(localStorage.getItem('date'));
    this.time1=JSON.parse(localStorage.getItem('time'));
  }

}
