import { EventEmitter,Output,ViewChild,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
   @Output() parentchild: EventEmitter<any> = new EventEmitter();
names : String [];
sendToChild : string;

  constructor() { }

  ngOnInit() {
    this.names = ['suraj','pritesh','sunil']
  }

clickbtn(name)
  {
    this.sendToChild =name; 
   
  }
 
 change(event)
 {
   alert(event);
 }

  

}
