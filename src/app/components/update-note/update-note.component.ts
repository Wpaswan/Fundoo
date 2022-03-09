import { Component, OnInit,Inject, InjectionToken } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title:any;
  description:any;
  token:any;
  noteId:any;
  constructor(private NotesService:NotesService,public dialogRef: MatDialogRef<UpdateNoteComponent>, 
    @Inject(MAT_DIALOG_DATA) public note: any) { }

  ngOnInit() {
    console.log('data from dialog',this.note)
    this.noteId=this.note.id
    
    this.title=this.note.title
    this.description=this.note.description
  }
  Update() {
    let req = {
     
      // tokenId : localStorage.getItem("Token"),
      noteId: this.noteId,
      title: this.title,
      description: this.description,
  
    }
    this.NotesService.userUpdateNotes(req).subscribe((res:any)=>{
      console.log("Note is updated")
      console.log(res)
      
    })
    
    this.dialogRef.close();
  }



}
