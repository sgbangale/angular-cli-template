import {Input,Output,EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }
  @Output() childparent: EventEmitter<any> = new EventEmitter();
  @Input("childdata")  child: string;  
  ngOnInit() {
  }
callback(event)
{
  console.log(event);
}
  testclick()
  {
    this.childparent.emit('test button clicked');
  }

 

}
