import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private UserService:UserService) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      service: "advance"
    });
  }
  onSubmit() {
    this.submitted=true
    if (this.registerForm.valid) {
      console.log("Regestration method calling", this.registerForm.value);
      let req={
        // fName:this.registerForm.value.firstName,
        // lName:this.registerForm.value.lastName,
        // phoneNo:"9931569779",
        // address:"London",
        // email:this.registerForm.value.email,
        // password:this.registerForm.value.Password,
        
        // cPassword:this.registerForm.value. confirmPassword
        firstName:this.registerForm.value.firstName,
        lastName:this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.Password,
        service:this.registerForm.value.service
        


        
      }
      // console.log(req);
      // this.UserService.SignUp(req).subscribe((res:any)=>{
      //   console.log(res);
      console.log(this.registerForm.value);
        this.UserService.SignUp(req).subscribe((Response:any) =>{
          console.log(Response);
        },error =>{
          console.log(error);
        })
      
    }
     
  
    else {
      console.log("form is not completely fill", this.registerForm.value);
      return;
    }
  }

}
