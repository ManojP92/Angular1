import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindingex',
  templateUrl: './data-bindingex.component.html',
  styleUrls: ['./data-bindingex.component.css']
})
export class DataBindingexComponent implements OnInit {

  fname="Manoj";
  lname="Parab";
  username="";
  showalert(){
    alert("Hello there!");
  }
  getName(){
    alert("Manoj is here!");
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
