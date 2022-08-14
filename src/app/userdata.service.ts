import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
exclusive= new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getUserData(){
    const Url = "assets/mock.json";
    return this.http.get(Url, {});

  }
}
