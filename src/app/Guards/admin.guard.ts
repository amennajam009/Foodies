import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterLoginService } from '../shared/service/register-login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private readonly Router:Router,private AdminRegisterLoginService:RegisterLoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.AdminRegisterLoginService.checkUserLogin()) {
        this.Router.navigate(['/managment-module/admin-login']);
        return false;
      } else {
        return true;
      }
  }
  
}


