import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  constructor(private http: HttpClient) { }

  getEmployees(){
    const Url = "assets/mock.json";
    return this.http.get(Url, {});

  }
}
