import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  title: any;
  description: any;
  isExpand=false;
  // @Output() createNoteNew = new EventEmitter<any>();
  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
  }
  main()
  {
    return this.isExpand === true ? (this.isExpand = false) : (this.isExpand = true);
  }

  add() {
    let reqdata = {
      title: this.title,
      description: this.description
    }
    console.log(reqdata)
    if (this.title || this.description) {
      this.noteService.createNotes(reqdata).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token", response.id)
        this.title.reset
      }, error => {
        console.log(error);
      })
      //  this.createNoteNew.emit(reqdata)
    }
    else{
      console.log("Error");
    }
  }
  
}


  

