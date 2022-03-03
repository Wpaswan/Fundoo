import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  Title: any;
  Message:any;
  showDescription: boolean=false;
  card: boolean = false;
  // @Output() createNoteNew = new EventEmitter<any>();
  
  constructor(private NotesService:NotesService) {}

   ngOnInit(){
  }
  show(){
    this.showDescription=!this.showDescription
  }
  createNotes() {
 
    let req={
      
        "title":this.Title ,
        "message": this.Message,
        "remainder": "2022-02-17T06:04:07.648Z",
        "color": "null",
        "image": "string",
        "isArchive": true,
        "isPin": true,
        "isTrash": true,
        "createat": "2022-02-17T06:04:07.648Z",
        "modifiedat": "2022-02-17T06:04:07.648Z"
      
    };
    console.log(req)
    this.NotesService.createNotes(req).subscribe((res:any)=>{
      console.log(res);
    })
    // set the model values to '' again
    
    // this.createNoteNew.emit(req)
  }
  
  cardSwap() {
    console.log(this.card);
    return this.card === true ? (this.card = false) : (this.card = true);
  
  }

}
