import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-archivenote',
  templateUrl: './archivenote.component.html',
  styleUrls: ['./archivenote.component.scss']
})
export class ArchivenoteComponent implements OnInit {
  notes:any;
notesarchive:any

  constructor(private NotesService:NotesService) { }

  

  ngOnInit() {
    this.GetAllArchiveNotes()
  }
  getArchiveNotes(){
   
    
}
GetAllArchiveNotes(){
  this.NotesService.getarchivenotes().subscribe((Response:any)=>{
    this.notesarchive=Response.data.data;
    console.log(this.notesarchive);
    })
  }
  
  // ngOnInit(): void {
  // }
  getAllNotes() {
  
    this. NotesService.getAllNotes().subscribe((res:any)=>{
      
      console.log(res);
     this.notes=res
     
    })
  }

}
