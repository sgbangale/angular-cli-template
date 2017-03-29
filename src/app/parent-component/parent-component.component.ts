import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  
names : String [];
  constructor() { }

  ngOnInit() {
    this.names = ['suraj','pritesh','sunil']
  }


  clickbtn(name)
  {
    console.log(name);
  }

}
