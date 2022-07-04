import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  basicAuthenticationService: any;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }


  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    //if(this.username==="in28minutes" && this.password === 'dummy') {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

  handleBasicAuthLogin() {
    // console.log(this.username);
    //if(this.username==="in28minutes" && this.password === 'dummy') {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          (          data: any) => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false      
          },
          (          error: any) => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }

  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          (          data: any) => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false      
          },
          (          error: any) => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }

}