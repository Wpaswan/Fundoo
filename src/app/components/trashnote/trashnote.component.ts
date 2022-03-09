import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-trashnote',
  templateUrl: './trashnote.component.html',
  styleUrls: ['./trashnote.component.scss']
})
export class TrashnoteComponent implements OnInit {
  notes: any;
  notestrash:any
  constructor(private NotesService: NotesService) { }

  ngOnInit(): void {
    this.GetTrashNotes()
  }
  GetTrashNotes(){
    this.NotesService.getTrashNotes().subscribe((res:any)=>{
      this.notestrash=res.data.data;
      console.log(this.notestrash);
      })
    }
  getAllNotes() {

    this.NotesService.getAllNotes().subscribe((res: any) => {

      console.log(res);
      this.notes = res

    })
  }

}
