import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import {Observable} from "rxjs";
import {observable } from "rxjs";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  userData$!: Observable<any>;
  exclusive:boolean=false;
  employeeList: any;

  constructor(private userdataService : UserdataService) { }

  ngOnInit(): void {
    this.userdataService.exclusive.subscribe(res=>{
      this.exclusive = res
    })
    this.userdataService.getUserData().subscribe((response:any) => {
      console.log(response);
      this.employeeList = response.emp1;
    },err => {
      console.log(err)
    });
   // this.userData$ = this.userdataService.getUserData();

  }

  // this.userData$ = this.userdataService.getUserData();

}
