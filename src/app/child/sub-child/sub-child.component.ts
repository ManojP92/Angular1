import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.css']
})
export class SubChildComponent implements OnInit {

  @Input() loggedIn: boolean | undefined;

  childData: string= "Data from child component.";
  @Output() childStringData : EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
   SendData(){          //method for event emitter
     this.childStringData.emit(this.childData);
   }
}
