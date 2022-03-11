import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes/notes.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { Input } from '@angular/core';
import { DataService } from 'src/app/services/dataservice/data.service';


@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  // @Output() trashNoteToRefresh = new EventEmitter<any>();
  @Input() allnotes: any;
  title: any
  description: any
  public searchWord: any

  @Output() changeColorOfNote = new EventEmitter<any>();
  @Output() updateNoteToRefresh = new EventEmitter<any>();
  @Output() trashNoteToRefresh = new EventEmitter<any>();
  @Output() archiveNoteToRefresh = new EventEmitter<any>();





  constructor(private note: NotesService, private dialog: MatDialog, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.receivedData.subscribe((response: any) => {
      console.log("searched", response);
      this.searchWord = response

    }
    )
  }



  openDialog(note: any) {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '600px',
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      this.updateNoteToRefresh.emit('hii')
    });
  }
  message(e: any) {
    console.log(e);
    this.changeColorOfNote.emit("colour")


  }
  trash(data: any) {
    console.log(data);
    this.trashNoteToRefresh.emit("hello")
  }
  archive(data: any) {
    console.log(data);
    this.archiveNoteToRefresh.emit("hello")
  }



}
