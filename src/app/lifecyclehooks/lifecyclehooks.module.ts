import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoParentComponent } from './demo-parent/demo-parent.component';
import { DemoChildComponent } from './demo-parent/demo-child/demo-child.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DemoParentComponent,
    DemoChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DemoParentComponent,
    DemoChildComponent
  ]
})
export class LifecyclehooksModule { }
