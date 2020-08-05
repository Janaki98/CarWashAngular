import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.css']
})
export class SuccessfulComponent implements OnInit {
  washerName: any;

  constructor() { }

  ngOnInit(): void {
    this.washerName=JSON.parse(localStorage.getItem('name'));
  }

}
