import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

   userLoggedIn: boolean= false;

childDataReceived: string= "";
  constructor() { }

  ngOnInit(): void {
  }
  ReceivedData(event: string){
    console.log(event);
    this.childDataReceived= event;
  }
  doToggle(){
    this.userLoggedIn=!this.userLoggedIn;
  }
}
