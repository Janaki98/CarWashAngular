import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-washcontact',
  templateUrl: './washcontact.component.html',
  styleUrls: ['./washcontact.component.css']
})
export class WashcontactComponent implements OnInit {
  washerName: any;

  constructor() { }

  ngOnInit(): void {
    this.washerName=JSON.parse(localStorage.getItem('name'));
  }

}
