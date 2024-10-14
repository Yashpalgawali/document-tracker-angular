import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private basicauthserv : BasicAuthenticationService,private router : Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.basicauthserv.isUserLoggedIn())
    {
      return true
    }
    else {
      sessionStorage.removeItem('authenticatedUser')
      sessionStorage.removeItem('token')
      localStorage.removeItem('authenticatedUser')
      localStorage.removeItem('token')
      this.router.navigate(['login']);
      return false
    }
     
  }
}
