import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo-parent',
  templateUrl: './demo-parent.component.html',
  styleUrls: ['./demo-parent.component.css']
})
export class DemoParentComponent implements OnInit, OnChanges {

  isChild= true;
  channelName='';

  constructor() {
    console.log("parent constructor is called")
  }

  ngOnInit(): void {

    console.log("parent OnInit is called")
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("parent OnChanges is called")

  }

  toggleChild(){
    this.isChild=!this.isChild;
  }
}
