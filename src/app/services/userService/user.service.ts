import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;

  constructor(private httpService:HttpService) {
    this.token= localStorage.getItem("token")
 }
  SignUp(data:any)
  {
    let header = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
   }
    console.log("SignUp called in user service",data);
  //  return this.httpService.postService('User/register',data,false,header)
  return this.httpService.postService('user/userSignUp',data,false,header)
   

  }
  login(data:any)
  {
    let header = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
   }
    console.log("login called in user service",data);
    return this.httpService.postService('user/login',data,false,header)
   
  //  return this.httpService.postService('User/login',data,false,header)
   
  }
  forgetPassword(data:any){
    
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'token'
      })

    }
    console.log("user payload",data);
    return this.httpService.postService('user/reset',data,false,header)
    // return this.httpService.postService('Users/ForgetPassword?email='+data.email,{},false,header)
  }
  resetPassword(data:any,token:any) {
    let headersObject={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':token
      })
    }
    console.log("forgot called")
    return this.httpService.postService('/user/reset-password',data,true,headersObject)
  }
}
