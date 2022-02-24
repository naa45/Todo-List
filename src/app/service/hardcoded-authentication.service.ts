import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {


  constructor() { }

  authenticate(username: string,password: string ){
    if(username === 'mabel' &&password ==='baby'){

      // checking if user already logged in,local storage to store and keep track of users logged in
      sessionStorage.setItem('authenticateUser', username);

        return true;
    }
    else{
      return false;
    }

  }

  // check if user logged in or not
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }
  // removing the authenticated user from session storsge
  logout() {
    sessionStorage.removeItem('authenticateUser')
  }

}
