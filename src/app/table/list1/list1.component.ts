import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from 'src/app/employee-details.service';
@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {

  employeeList:any = [];

  constructor(private employeeService: EmployeeDetailsService) { }

  ngOnInit(): void {

    this.getEmployeeList();
  }

  getEmployeeList(){
  this.employeeService.getEmployees().subscribe((response:any) => {
      console.log(response);
      this.employeeList = response.emp1;
    },err => {
      console.log(err)
    });
  }
}
