import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes/notes.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  @Input() noteList:any;
  notes:any;
  token: any;
  title: any;
  description: any;
  tokenId = localStorage.getItem("Token");

  constructor(private NotesService:NotesService, public dialog: MatDialog) { }
   
  openDialog(noteObjet: any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '650px',
      data: noteObjet,
    })

    dialogRef.afterClosed().subscribe((res:any) => {

      this.title = res;
      this.description = res;
    });
  }
  ngOnInit(){
    console.log(this.noteList,this.tokenId);
  }
  

}
