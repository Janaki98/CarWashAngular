import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-washplan',
  templateUrl: './washplan.component.html',
  styleUrls: ['./washplan.component.css']
})
export class WashplanComponent implements OnInit {
  washerName: any;

  constructor() { }

  ngOnInit(): void {
    this.washerName=JSON.parse(localStorage.getItem('name'));
  }

}
