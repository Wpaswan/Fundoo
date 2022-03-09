import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
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
 
    console.log("Notes data", this.token,req);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
        
      })
    }
    return this.http.postService('notes/addNotes', req,true,  options)
  }
  getAllNotes() {
    console.log("Notes data");
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.getService('notes/getNotesList',true,header);
  }
  userUpdateNotes(req:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      })
    }
    return this.http.postService('notes/updateNotes', req,true,header);
    
  }
  trashNotes(data: any){
    let headersObject={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
    console.log("delete called in service notes")
    return this.http.postService('/notes/trashNotes',data,true,headersObject)
  }
  archiveNotes(data: any){
    let headersObject={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
    console.log("Archieve called in service notes")
    return this.http.postService('/notes/archiveNotes',data,true,headersObject)
  }
  getarchivenotes() {
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
    console.log("Get ArchievedList called")
    return this.http.getService('notes/getArchiveNotesList',true,header)
  }
  getTrashNotes() {
    console.log("Notes data");
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("Get trashList called")
    return this.http.getService('notes/getTrashNotesList',true,header);
  }
  usercolor(data:any){   // for postmethod we are sending data to the backend thats why we are taking data:any inside method
     
    let header= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
    return this.http.postService('notes/changesColorNotes',data,true,header)
   }
   useraddreminder(data:any){
      
    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token

      })
    }
    console.log("Reminder is called")
    return this.http.postService('notes/addUpdateReminderNotes',data,true,header)
   }
   userpermanentdelete(data:any){
     
    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.http.postService('notes/deleteForeverNotes',data,true,header)

   }
  
 
}
