import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-path-not-found',
  templateUrl: './path-not-found.component.html',
  styleUrls: ['./path-not-found.component.css']
})
export class PathNotFoundComponent implements OnInit {

  exclusive:boolean=true

  constructor(private userdata: UserdataService) { }
  ngOnInit(): void {
    this.userdata.exclusive.next(true)
  }
  // ngOnDestroy(): void {
  //   this.userdata.exclusive.next(false)
  // }
}
