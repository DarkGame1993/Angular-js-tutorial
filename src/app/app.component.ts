import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Todo {
  title: string,
  completed: boolean,
  userId?: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  
todos: Todo[] = [];

  ngOnInit () {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe(todos => {
        console.log('This response', todos)
        this.todos = todos
      })
  }
}
