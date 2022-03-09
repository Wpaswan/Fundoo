import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
    window.location.host
  );
  archive()
  {
    this.router.navigateByUrl('dashboard/archivenote')
  }
  trash()
  {
    this.router.navigateByUrl('dashboard/trashnote')
  }
  Logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/signin')
  }


}
