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
  getAllNotes() {
  
    this. NotesService.getAllNotes().subscribe((res:any)=>{
      
      console.log(res);
     this.notes=res.data.data
     console.log(this.notes)
     
    })
  
  
   
  }
  //use filter method here
  filterTrash(){
   let req = this.notes.filter((res:any)=>
    {
       return !res.active;
    })
  }

}
