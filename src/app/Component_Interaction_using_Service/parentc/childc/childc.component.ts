import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../interaction.service';

@Component({
  selector: 'app-childc',
  templateUrl: './childc.component.html',
  styleUrls: ['./childc.component.css']
})
export class ChildcComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
    this._interactionService._teacherMessage$
    .subscribe(
      message =>{
        if(message==="Good Morning!"){
          alert('Good Morning Teacher');
        } else if (message==="Well Done!"){
          alert('Thank You Teacher');
        }
      }
    )
  }

  greetTeacher(){
    this._interactionService.sendMessage1('Good Morning Teacher!')
  }
}
