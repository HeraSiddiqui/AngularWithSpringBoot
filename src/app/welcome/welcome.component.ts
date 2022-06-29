import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { any } from 'cypress/types/bluebird';
import { WelcomeDataService } from '../service/data/welcome-data.service';

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
  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) {

   }
//void init() {}
  ngOnInit(){
    //COMPILATION ERROR THIS.MESSAGE=5
    //console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
   this. name =this.route.snapshot.params['name'];
  }
  
  getWelcomeMessage() {
   console.log(this.service.executeHelloWorldBeanService());

   this.service.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccessfulResponse(response  )
   );
     
    console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }
  handleSuccessfulResponse(response: Object) {
    console.log(response);
  }
}
