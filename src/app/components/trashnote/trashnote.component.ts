import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-trashnote',
  templateUrl: './trashnote.component.html',
  styleUrls: ['./trashnote.component.scss']
})
export class TrashnoteComponent implements OnInit {
  notestrash:any

  constructor(private notesService:NotesService) { }

  ngOnInit(): void {
    this.GetAllTrashNotes()
  }
  GetAllTrashNotes(){
    this.notesService.gettrashnotes().subscribe((Response:any)=>{
      this.notestrash=Response.data.data;
      console.log(this.notestrash);
      })
}
restoreNote(e:any){
  this.GetAllTrashNotes();


}
trash(e:any){
  this.GetAllTrashNotes();
}
}
