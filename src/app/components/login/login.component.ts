import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';









@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onLoginSubmit() {
    this.submitted=true;
    if (this.loginForm.valid) {
      console.log("Login form calling", this.loginForm.value);
      let req={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password,
        
      }
     
      
      
    }
    else {
      console.log("form is not completely fill", this.loginForm.value);
      return;
    }
    
  }
 
  
  


}
