import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: any, password: any) {
   // console.log('before ' + this.isUserLoggedIn());
    if(username==="in28minutes" && password === 'dummy') {
      sessionStorage.setItem('authenticateUser', username);
    //console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user= sessionStorage.getItem('authenticateUser')
    return ! (user===null)
  }

  logout(){
    let user= sessionStorage.removeItem('authenticateUser') 
     
  }
  }
   



