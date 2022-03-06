import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-noteicons',
  templateUrl: './noteicons.component.html',
  styleUrls: ['./noteicons.component.scss']
})
export class NoteiconsComponent implements OnInit {
  @Input() CardObject: any
  token:any;
  
  
  constructor(private NotesService:NotesService) { }

  ngOnInit()
   {
     this.token=localStorage.getItem('token');
     console.log(this.CardObject);
  }
   
  trashNotes(){
    console.log(this.CardObject.noteId);
    let req = { id: this.CardObject.noteId }
    // this.NotesService.trashNotes(req,this.token).subscribe((res: any) => {
    //   console.log(res);
    // })
  }
  archiveNote(){
    console.log(this.CardObject.noteId);
    let req = { id: this.CardObject.noteId }
    // this.NotesService.archiveNote(req,this.token).subscribe((res: any) => {
    //   console.log(res);
    // })
  }

}
