import { Component, OnInit } from '@angular/core';

export class todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[
    new todo(1,'Learn to Cook',false,new Date()),
    new todo(2,'Become an Expert at Angular', false, new Date()),
    new todo(3,'Visit India', false, new Date())
    // {id: 1, description:'Learn to Cook'},
    // {id: 2, description:'Become an Expert at Angular'},
    // {id: 3, description:'Visit India'}
  ]
// todo={
//   id: 1,
//   description: 'Learn To Code'
// }

  constructor() { }

  ngOnInit(): void {
  }

}
