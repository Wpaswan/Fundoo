import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
      
    });
  }
  onForgetSubmit() {
    this.submitted=true;
    if (this.forgetPasswordForm.valid) {
      console.log("forgetpassword form calling", this.forgetPasswordForm.value);
      let req={
        email:this.forgetPasswordForm.value.email
        
        
      }
     
    }
    else {
      console.log("Email or phone number is necessory", this.forgetPasswordForm.value);
      return;
    }
  }

}
