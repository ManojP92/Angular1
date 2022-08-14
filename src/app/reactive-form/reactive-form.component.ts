import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb:FormBuilder){

  }

  registrationForm=this.fb.group({
      userName:['abc@mail.com',[ Validators.required, Validators.minLength(3)]],
      password:['password']
  });

  ngOnInit(): void {
  }

  loadData(){
    //this.registrationForm.setValue({
      //  userName:'Manoj',
     //   password:'qwerty'
    // });
     this.registrationForm.patchValue({
       userName:'Manoj',
     //  password:''
   });

  // If we want to set all values then use setValue if we want to set
  // few values then use patchValue
  }
}
