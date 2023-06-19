import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterLoginService } from '../shared/service/register-login.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private readonly Router:Router,private UserRegisterLoginService:RegisterLoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.UserRegisterLoginService.checkUser2Login()) {
        this.Router.navigate(['/managment-module/user-login']);
        return false;
      } else {
        return true;
      }
  }
  
}
