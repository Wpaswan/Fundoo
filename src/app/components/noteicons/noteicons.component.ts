import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';
import { DataService } from 'src/app/services/dataservice/data.service';

@Component({
  selector: 'app-noteicons',
  templateUrl: './noteicons.component.html',
  styleUrls: ['./noteicons.component.scss']
})
export class NoteiconsComponent implements OnInit {
  @Output() changeColorOfNote = new EventEmitter<any>();  // this o/p decorator is coming from displaynotes.html
  @Input() cardObject: any
  token:any;
  showIcons: boolean = true;
  
  colors = [
    {
      name: 'Red', bgColorValue: '#f28b82'
    },  
    // {
    //   name: 'Pink', bgColorValue: '#FFEBCC'
    // },
    {
      name: 'Yellow', bgColorValue: '#FFFEA9'
    },
    {
      name: 'Light Green', bgColorValue: '#E4E978'
    },
    {
      name: 'Lime', bgColorValue: '#B3E283'
    },
    {
      name: 'Teal', bgColorValue: '#CDF0EA'
    },
    {
      name: 'white', bgColorValue: '#ffffff'
    }
  ];
 
  
  
  constructor(private NotesService:NotesService,private dataservice:DataService) { }

  ngOnInit()
   {
    
     
  }
  trashNotes() {
    let reqdata = {
      noteIdList: [this.cardObject.id],
      isDeleted: true,
    }
    this.NotesService.trashNotes(reqdata).subscribe((response: any) => {
      console.log(response);
    })
  
  }
  archiveNote(){
    let reqdata = {
      noteIdList: [this.cardObject.id],
      isArchived: true,
    }
    this.NotesService.archiveNotes(reqdata).subscribe((response: any) => {
      console.log(response);
    })
    
  }
  changeColor(noteColor:any){
    
    this.cardObject.noteColor= noteColor;
    let reqdata={
      
      noteIdList: [this.cardObject .id],  
      color: noteColor
    }

    this.NotesService.usercolor(reqdata).subscribe((response:any) =>{
      console.log(response);

      this.changeColorOfNote.emit(noteColor)
      

    })
    window.location.reload();
  }
  reminder(){
    let reqdata= {
      
      noteIdList: [this.cardObject.id],  //this notecard is coming from display.html - <app-icons & this noteIdlist is taken as a assumption by ourselves for taking id of notes
      reminder: "string",  // it is coming from backend 
    }
    this.NotesService.useraddreminder(reqdata).subscribe((response:any) =>{
      console.log("reminder is added");
      
      console.log(response)

      
    })
    window.location.reload();
  }
  deletePermanently(){
    
    let reqdata= {
      
      noteIdList: [this.cardObject.id],  //this notecard is coming from display.html - <app-icons & this noteIdlist is taken as a assumption by ourselves for taking id of notes
      isDeleted: true,  // it is coming from backend 
    }
    this.NotesService.userpermanentdelete(reqdata).subscribe((response:any) =>{
      console.log("Note is deleted permanently");
      
      console.log(response)

      this.dataservice.sendData(response)  // this is coming from data service.ts used for unrelated data sharing as our icons.ts and getall notes dont have any relationship
    })
    window.location.reload();
  }
  restorenote(){
    let reqdata= {
      
      noteIdList: [this.cardObject.id],  //this notecard is coming from display.html - <app-icons & this noteIdlist is taken as a assumption by ourselves for taking id of notes
      isDeleted: false,  // it is coming from backend 
    }
    this.NotesService.trashNotes(reqdata).subscribe((response:any) =>{
      console.log("Note is restored");
      
      console.log(response)

      this.dataservice.sendData(response)  // this is coming from data service.ts used for unrelated data sharing as our icons.ts and getall notes dont have any relationship
    })
    // window.location.reload();
  }

}

