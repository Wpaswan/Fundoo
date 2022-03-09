import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  token:any;
  title:any;
  description:any;
  notes:any;
  constructor(private NotesService:NotesService) { }

  ngOnInit() {
    this.getAllNotes();
    console.log(this.notes)
  }
  autoRefresh(data:any)
  {
     console.log("refreshed",data);
     this.getAllNotes()
  }
  getAllNotes() {
  
    this. NotesService.getAllNotes().subscribe((res:any)=>{
      
      console.log(res);
     this.notes=res.data.data
     console.log(this.notes)
     this.notes = this.notes.filter((data: any) => {
      console.log(data.isDeleted)
      return data.isDeleted === false && data.isArchived === false;
    })
    })
  
  
   
  }
  

}
