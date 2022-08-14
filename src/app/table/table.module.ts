import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List1Component } from './list1/list1.component';



@NgModule({
  declarations: [
    List1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[ List1Component ]
})
export class TableModule {
  constructor(){
    console.log("table module works");
  }
}
