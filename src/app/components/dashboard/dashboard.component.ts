import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes/notes.service';
import { DataService } from 'src/app/services/dataservice/data.service';

import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  isShow = false;
  
  

  private _mobileQueryListener: () => void;
  constructor(private noteService:NotesService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router,private dataService:DataService) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  Archive(){
    this.router.navigateByUrl('dashboard/archivenote')
  }
  Trash(){
    this.router.navigateByUrl('dashboard/trashnote') 
  }
 
  logout() {    
    localStorage.removeItem('token')
    this.router.navigateByUrl('login');
  }
  search(event:any){
    console.log( event.target.value);
    this.dataService.sendData(event.target.value)

  }

}
