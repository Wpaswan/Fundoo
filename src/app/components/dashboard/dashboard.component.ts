import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef, OnDestroy}from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  isMenuOpen=true;
  contentMargin=200;
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 5}, (_, i) => `Notes`);
  fillerContent = Array.from(
    {length: 5},
    () =>
      ``,
  );


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  toggle(){
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen)
    {
      this.contentMargin=50;
    }
    else{
      this.contentMargin=400;
    }
  }

}
