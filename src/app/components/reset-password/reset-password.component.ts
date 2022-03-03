import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!:FormGroup;
  submitted =false;
  token:any;
  constructor(private formBuilder: FormBuilder,private UserService:UserService,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    this.resetPasswordForm = this.formBuilder.group({
      
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
   

  }
  onResetSubmit() {
    this.submitted=true
    if (this.resetPasswordForm.valid) {
     
      let req={
        newPassword:this.resetPasswordForm.value.password,
        // password:this.resetPasswordForm.value.password,
        // confirmPassword:this.resetPasswordForm.value.confirmPassword
        
      }
      console.log("Reset password method calling", this.resetPasswordForm.value);
      console.log(req);
      this.UserService.resetPassword(req,this.token).subscribe((res:any)=>{
        console.log(res);
      },error =>{
          console.log(error);
        }) 
      
      
    }
    
    else {
      console.log("Password is not valid", this.resetPasswordForm.value);
      return;
    }
  }

}
