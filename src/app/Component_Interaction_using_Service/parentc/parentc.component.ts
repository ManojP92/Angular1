import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-parentc',
  templateUrl: './parentc.component.html',
  styleUrls: ['./parentc.component.css']
})
export class ParentcComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  greetStudent(){
    this._interactionService.sendMessage('Good Morning!')
  }
  appreciateStudent(){
    this._interactionService.sendMessage('Well Done!')
  }
  ngOnInit(): void {
    this._interactionService._studMsg
    .subscribe(
      message =>{
        if(message==='Good Morning Teacher!'){
          alert('Good Morning! Now sit down.');
  }})}


}
