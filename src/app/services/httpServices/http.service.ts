import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl=environment.BaseUrl

  constructor(private  Http:HttpClient) { }
  postService(url: string, req: any={}, token: boolean= false, httpOptions: any={} )
  {
    console.log(req)
   return this.Http.post(this.BaseUrl+url,req,token &&httpOptions)

  }
  getService(url: string, httpOptions: any={})
  {
    
    return this.Http.get(this.BaseUrl+url,httpOptions)
 

  }
  putService(){
   
  }
  
  deleteService()
  {

  }
}
