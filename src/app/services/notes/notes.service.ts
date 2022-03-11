import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  
  providedIn: 'root'
})
export class NotesService {
  noteId:any
  token:any
   
  constructor(private httpService:HttpService) { 
    this.token= localStorage.getItem("token")
  }
  
takenotes(data:any){
    let header = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': this.token
      })
   }
    console.log("take Notes called");
    return this.httpService.postService('notes/addNotes',data,true,header)
  }
getnotes() {
  let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':this.token
    })
  }
  console.log("Get Notes called")
  return this.httpService.getService('notes/getNotesList',header)
}
editnotes(data:any){
  let header = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': this.token
    })
 }
  console.log("update Notes called");
  return this.httpService.postService('notes/updateNotes',data,true,header)
}
delete(data: any){
  let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':this.token
    })
  }
  console.log("delete note called")
  return this.httpService.postService('notes/trashNotes',data,true,header)
}
deleteperm(data: any){
  let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':this.token
    })
  }
  console.log("delete note called")
  return this.httpService.postService('notes/deleteForeverNotes',data,true,header)
}
archive(data: any){
  let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':this.token
    })
  }
  console.log("archive note called")
  return this.httpService.postService('notes/archiveNotes',data,true,header)
}
getarchivenotes() {
  let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':this.token
    })
  }
  console.log("Get Notes called")
  return this.httpService.getService('notes/getArchiveNotesList',header)
}
gettrashnotes() {
  let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':this.token
    })
  }
  console.log("Get Notes called")
  return this.httpService.getService('notes/getTrashNotesList',header)
}
usercolor(data:any){ 

  let header= {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':this.token
    })
  }
  return this.httpService.postService('notes/changesColorNotes',data,true,header)
 }
  
 
}
