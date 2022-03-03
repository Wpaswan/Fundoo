import { Injectable } from '@angular/core';
import { HttpService } from './httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any
  constructor(private http: HttpService) { 
    this.token= localStorage.getItem('token')
  }
  createNotes(req: any) {
    this.token= localStorage.getItem('token')
    console.log("Notes data", this.token,req);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization':'Bearer ' + this.token,
      })
    }
    return this.http.postService('Notes/CreateNotes', req,true,  options)
  }
  getAllNotes() {
    console.log("Notes data");
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    // return this.http.getService('Notes/getAllNotes',true, header)
  }
  trashNotes(req:any,token:any){
    this.token=localStorage.getItem('token');
    // console.log("Notes data",this.token,req);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    // return this.http.putService('Notes/TrashNotes?noteID='+req.id,{},true, header);
  }                                   
  archiveNote(req:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:'Bearer '+ this.token
        
      })
    }
    //   return this.http.putService('Notes/ArchieveNotes?noteID='+req.id,{},true,header);
    
  }
  userUpdateNotes(req:any,token:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:'Bearer '+ this.token
      })
    }
    // return this.http.putService('Notes/UpdateNotes?noteID=' +req.id,req,true,header);
    
  }
}
