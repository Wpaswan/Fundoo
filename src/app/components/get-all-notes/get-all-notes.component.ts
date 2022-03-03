import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  Title:any;
  Message:any;
  notes:any;
  constructor(private NotesService:NotesService) { }

  ngOnInit() {
    this.getAllNotes();
    console.log(this.notes)
  }
  getAllNotes() {
  
    // this. NotesService.getAllNotes().subscribe((res:any)=>{
      
    //   console.log(res);
    //  this.notes=res
     
    // })
  }
  //use filter method here
  filterTrash(){
   let req = this.notes.filter((res:any)=>
    {
       return !res.active;
    })
  }

}
