import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
// *need to implement a specific interface before the router can be used
export class RouteGuardService implements CanActivate{

// check if user is logged in and to route the user into another page
  constructor(
    private hardcodedAuthenticationService:HardcodedAuthenticationService,
    private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;

      // route the user to the login page
    this.router.navigate(['login']);

      return false;

  }

}
