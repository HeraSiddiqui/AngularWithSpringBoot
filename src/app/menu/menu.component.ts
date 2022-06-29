import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn: boolean= false;

  constructor(public hardcodedAuthenticationService
    : HardcodedAuthenticationService) { }

  ngOnInit() {
   this.isUserLoggedIn= this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
