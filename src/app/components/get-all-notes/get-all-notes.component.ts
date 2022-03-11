import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  token: any;
  notesarray:any;
  noteId:any
  
  
  constructor(private notesService:NotesService) { }

  ngOnInit(): void {
    this.GetAllNotes()
    }
    
  GetAllNotes(){
    this.notesService.getnotes().subscribe((Response:any)=>{
      this.notesarray=Response.data.data;
      this.notesarray.reverse();
      console.log(this.notesarray);
      this.notesarray = this.notesarray.filter((data: any) => {
        console.log(data.isDeleted)
        return data.isDeleted === false && data.isArchived === false;
      })
    },(error)=>{console.log(error)});
   
  }
  autoRefresh(data:any)
  {
     console.log("refreshed",data);
     this.GetAllNotes();
  }
  colourchanged(e:any){
    console.log(e);
    this.GetAllNotes();
  }
  update(e:any){
    console.log(e);
    this.GetAllNotes();
  }
  trash(data:any)
  {
     console.log("refreshed",data);
     this.GetAllNotes();
  }
  archive(data:any)
  {
     console.log("refreshed",data);
     this.GetAllNotes();
  }
  // unarchivenote(data:any)
  // {
  //   console.log("refreshed",data);
  //    this.GetAllNotes();

  // }

}
