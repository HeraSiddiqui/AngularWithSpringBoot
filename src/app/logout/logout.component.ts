import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  invalidLogin: boolean = false;
  username: any;
  router: any;
  password: any;

  constructor(
    private hardcodedAuthenticationService :HardcodedAuthenticationService,
    private basicAuthenticationService : BasicAuthenticationService)
     { }

  ngOnInit(): void {
    
  }
  handleLogin() {

    //console.log(this.username);
   // if(this.username==="in28minutes" && this.password ==='dummy') {
      //Redirect to Welcome Page
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      //Redirect to Welcome Page
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

  handleBasicAuthLogin() {

    //console.log(this.username);
   // if(this.username==="in28minutes" && this.password ==='dummy') {
      //Redirect to Welcome Page
      this.basicAuthenticationService.executeAuthenticationService (this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome',this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )

      }
    }
