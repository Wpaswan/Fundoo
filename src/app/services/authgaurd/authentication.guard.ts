import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthgaurdService } from '../authgaurd.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authguardService:AuthgaurdService, private router: Router) {}
  canActivate():boolean
  {
    if (!this.authguardService.gettoken()) {  
     this.router.navigateByUrl("/login");  
    }  
    return this.authguardService.gettoken();  
  
  }
  
}
