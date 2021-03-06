import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  @Output() createNoteToRefresh= new EventEmitter<any>();
  title: any;
  description: any;
  submitted = false;

    
  constructor( private notesService:NotesService) { }

  ngOnInit(): void {    
  }
  isShow: boolean=false;

  takeanote() {    
    console.log(this.isShow);
    return this.isShow==true ? (this.isShow = false) : (this.isShow = true);
  }
  close() {
    let reqData = {
      title: this.title,
      description: this.description

      
    }    
    console.log(reqData)
    if (this.title && this.description) {
      this.notesService.takenotes(reqData).subscribe((Response: any) => {
        console.log(Response);
        
        this.createNoteToRefresh.emit(Response)
        localStorage.setItem("token", Response.id)
      }, error => { console.log(error); })
    }
    else {
      console.log("Form is not valid. Please Fill the form correctly");
    }
  }
  
}


  

