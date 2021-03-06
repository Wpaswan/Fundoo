import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatHint} from '@angular/material/form-field';
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
// practice
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { TakenoteComponent } from './components/takenote/takenote.component';
import { NoteiconsComponent } from './components/noteicons/noteicons.component';
import {MatMenuModule} from '@angular/material/menu';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AuthgaurdService } from './services/authgaurd.service';
import {MatDialogModule} from '@angular/material/dialog';
import { TrashnoteComponent } from './components/trashnote/trashnote.component';
import { ArchivenoteComponent } from './components/archivenote/archivenote.component';
import {MatDatepickerModule} from '@angular/material/datepicker';  // used for reminder pick date and time 
import {MatNativeDateModule} from '@angular/material/core';
import { ReminderComponent } from './components/reminder/reminder.component';

import { SearchfilterPipe } from './pipe/search-pipe/searchfilter.pipe'  ;       // used for reminder pick date and time 






@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    TakenoteComponent,
    NoteiconsComponent,
    DisplaynoteComponent,
    GetAllNotesComponent,
    UpdateNoteComponent,
    TrashnoteComponent,
    ArchivenoteComponent,
    ReminderComponent,
  
    SearchfilterPipe
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    //practice
    MatCardModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    // NoteiconsComponent,
    MatButtonModule,
    MatExpansionModule,
       MatMenuModule,
       MatDialogModule,
       MatDatepickerModule,
       MatNativeDateModule
       
       
    
    
    
  ],
  providers: [
    AuthgaurdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
