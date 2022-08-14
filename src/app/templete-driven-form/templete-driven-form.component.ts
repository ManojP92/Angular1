import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-templete-driven-form',
  templateUrl: './templete-driven-form.component.html',
  styleUrls: ['./templete-driven-form.component.css']
})
export class TempleteDrivenFormComponent implements OnInit {

   topics = ['Full Power ','Bench only','Deadlift only'];
   gender = ['Male ','Female','Other'];
   wtclass= ['M-59kgs','M-66kgs','M-74kgs','M-83kgs','M-93kgs','M-105kgs','M-120kgs','M 120kgs+','F-49kgs','F-56kgs','F-63kgs','F-69kgs','F-76kgs','F-84kgs','F 84kgs+'];
  user=new User("First & Last name","abc@gmail.com",+91, "Select your gender","Select a meet","Select your weight catagory","Amature", true);

  constructor() { }


  ngOnInit(): void {
  }

  onSubmit(){
    alert(`Submitted successfully with name "${this.user.name}`)
    alert(JSON.stringify(this.user));
  }
}
