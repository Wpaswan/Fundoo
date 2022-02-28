import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!:FormGroup;
  submitted =false;
  
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
   

  }
  onResetSubmit() {
    this.submitted=true
    if (this.resetPasswordForm.valid) {
      console.log("Reset password method calling", this.resetPasswordForm.value);
      let req={
        
        password:this.resetPasswordForm.value.password,
        confirmPassword:this.resetPasswordForm.value.confirmPassword
        
      }
      
    }
    
    else {
      console.log("Password is not valid", this.resetPasswordForm.value);
      return;
    }
  }

}
