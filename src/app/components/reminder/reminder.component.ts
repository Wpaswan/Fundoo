import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  reminderNotes:any;

  constructor(private note: NotesService) { }

  ngOnInit(): void {
    // this.getallremindernotes();
  }
  // getallremindernotes(){
   
  //   this.note.usergetallreminder().subscribe((response:any) => {
  //     console.log(response.data.data);
      
  //     this.reminderNotes = response.data.data
  //     this.reminderNotes.reverse()
  //   })
  // }

}
