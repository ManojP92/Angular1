import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.css']
})
export class DemoChildComponent implements OnInit, OnDestroy,OnChanges {

  counter=0;
  interval: any;
  @Input()
  channelName ="";
  constructor() {
    console.log("child constructor is called");
   }

  ngOnInit(): void {
    console.log("child OnInit is called");
  //  this.interval= setInterval(()=>{
  //     this.counter= this.counter+1;
  //     console.log("counter:", this.counter);
  //   },500);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("Child OnChanges is called")
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.interval);
    console.log("Child OnDestroy is called");
  }


}
