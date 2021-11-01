import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
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
  
  loading = false;

  todos: Todo[] = [];
  todoTittle = ''

  ngOnInit () {
    this.fetchTodos()
  }

  addTodo () {
    if(!this.todoTittle.trim()) {
      return
    } 

    const newTodo: Todo = {
      title: this.todoTittle,
      completed: false
    }
    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
    .subscribe(todo => {
      console.log(todo, 'todo')
      this.todos.push(todo)
      this.todoTittle = ''
    })
  }

  fetchTodos() {
    this.loading = true;

    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
    .pipe(delay(1500))
    .subscribe(todos => {
      this.todos = todos
      this.loading = false;
    })
  }

  removeTodo(id: number) {
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .subscribe(() => {
      this.todos = this.todos.filter(t => t.id !== id)
    })
  }
}
