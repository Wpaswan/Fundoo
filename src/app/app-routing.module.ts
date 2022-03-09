import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { CanActivate } from '@angular/router';
import { AuthenticationGuard } from './services/authgaurd/authentication.guard';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { ArchivenoteComponent } from './components/archivenote/archivenote.component';
import { TrashnoteComponent } from './components/trashnote/trashnote.component';




const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'signup' , component:SignupComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'resetpassword/:token',component:ResetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],

  children: [{ path: '', redirectTo: "notes", pathMatch: "full" },
  { path: 'notes', component: GetAllNotesComponent },
  { path: 'displaynote', component:DisplaynoteComponent },
  { path: 'archivenote', component:ArchivenoteComponent },
 
  { path: 'trashnote', component:TrashnoteComponent }

 

  
]
   },
 
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }