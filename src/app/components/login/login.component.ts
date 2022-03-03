import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';










@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router,private userService:UserService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onLoginSubmit() {
    this.submitted=true;
    if (this.loginForm.valid) {
      
      let req={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password,
        
      }
      console.log(this.loginForm.value);
       this.userService.login(req).subscribe((response:any)=>{
        console.log("login successfully",response);
        localStorage.setItem('token',response.id)

      },error =>{
        console.log(error);
      
       
      });
       

    
      
      
    }
    
    
    else {
      console.log("form is not completely fill", this.loginForm.value);
      return;
    }
    
  }
 
  
  


}
