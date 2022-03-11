import { Component, OnInit,Inject, InjectionToken } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title:any
  description:any
 noteId:any

  constructor(private notesService:NotesService,public dialogRef:MatDialogRef<UpdateNoteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.title=this.data.title,
    this.description=this.data.description,
    this.noteId=this.data.id
  }
  
  close() {
    let reqData = {
      title: this.title,
      description: this.description,
      noteId:this.noteId
    } 
    this.dialogRef.close();
    console.log(reqData)
    if (this.title && this.description) {
      this.notesService.editnotes(reqData).subscribe((Response: any) => {
        console.log(Response);
        localStorage.setItem("token", Response.id)
      }, error => { console.log(error); })
    }
    else {
      console.log("Form is not valid. Please Fill the form correctly");
    }  
  
  }

}
