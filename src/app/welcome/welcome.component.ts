import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


message='Some Welcome Message'
name=''
//String message="SomeWelcome Message"
//public SpringBootFirstWebApplication() {}

//Activate Route
  constructor(private route:ActivatedRoute) {

   }
//void init() {}
  ngOnInit(){
    //COMPILATION ERROR THIS.MESSAGE=5
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
   this. name =this.route.snapshot.params['name'];
  }
  
  

}
