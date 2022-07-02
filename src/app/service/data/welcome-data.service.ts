import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message:string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  executeHelloWorldServiceWithPathVariable(_name: string) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService() {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders( {
    //   Authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(
      'http://localhost:8080/hello-world/path-variable/${name}' ,
     // {headers}
      ) ;
   // console.log("Hello World Bean Service")
  }
  
  executeHelloWorldBeanServiceWithPathVariable(name: any) {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world/path-variable/{hera}' ,);
   // console.log("Hello World Bean Service")
}
//  createBasicAuthenticationHttpHeader() {
//   let username = 'in28minutes'
//   let password = 'dummy'
//   let basicAuthHeaderString = 'Basic' +  window.btoa(username + ':' + password);
//   return basicAuthHeaderString;
// }

}
