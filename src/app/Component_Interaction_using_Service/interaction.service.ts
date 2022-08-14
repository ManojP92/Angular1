import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _teacherMessageSource= new Subject<string>();
  _teacherMessage$= this._teacherMessageSource.asObservable();

  private _studentsMsgSource=new Subject<string>();
  _studMsg= this._studentsMsgSource.asObservable();

  constructor() { }

  sendMessage(message: string){
    this._teacherMessageSource.next(message);
  }

  sendMessage1(message1:string){
    this._studentsMsgSource.next(message1);
  }
}
