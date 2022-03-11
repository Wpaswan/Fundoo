import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-archivenote',
  templateUrl: './archivenote.component.html',
  styleUrls: ['./archivenote.component.scss']
})
export class ArchivenoteComponent implements OnInit {
  notesarchive:any
  constructor(private notesService:NotesService) { }

  ngOnInit(): void {
    this.GetAllArchiveNotes()
  }
  GetAllArchiveNotes(){
    this.notesService.getarchivenotes().subscribe((Response:any)=>{
      this.notesarchive=Response.data.data;
      console.log(this.notesarchive);
      })
     
      
    
  
}
unarchive(e:any){
  this.GetAllArchiveNotes();
}

}
