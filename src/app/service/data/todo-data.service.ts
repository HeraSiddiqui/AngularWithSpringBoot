import { API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos/`);
    //console.log("Execute Hello World Bean Service")
  }

  deleteTodo(username: string, id: any){
    return this.http.delete(`${API_URL}/${username}/todos/${id}`);
  }

  retrieveTodo(username: any, id: any){
    return this.http.get<Todo>(`${API_URL}/${username}/todos/${id}`);
  }

  updateTodo(username: any, id: any, todo: any){
    return this.http.put(
      `${API_URL}/${username}/todos/${id}`
                , todo);
  }

  createTodo(username: any, todo: any){
    return this.http.post(
              `${API_URL}/${username}/todos`
                , todo);
  }

}