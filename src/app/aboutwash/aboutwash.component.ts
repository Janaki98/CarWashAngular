import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutwash',
  templateUrl: './aboutwash.component.html',
  styleUrls: ['./aboutwash.component.css']
})
export class AboutwashComponent implements OnInit {
  washerName: any;

  constructor() { }

  ngOnInit(): void {
    this.washerName=JSON.parse(localStorage.getItem('name'));
  }

}
