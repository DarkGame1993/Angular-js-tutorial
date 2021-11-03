import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Todo, TodosService } from './todos.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  loading = false;
  todos: Todo[] = [];
  todoTittle = ''
  error = ''

  constructor(private todosService: TodosService) {}

  ngOnInit () {
    this.fetchTodos()
  }

  addTodo () {
    if(!this.todoTittle.trim()) {
      return
    } 

    this.todosService.addTodo({
      title: this.todoTittle,
      completed: false
    }).subscribe(todo => {
      console.log(todo, 'todo')
      this.todos.push(todo)
      this.todoTittle = ''
    })
  }

  fetchTodos() {
    this.loading = true;

    this.todosService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos
        this.loading = false;
      }, error => {
        this.error = error.message;
      })
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }

  completedTodo(id: number) {
      this.todosService.completedTodo(id).subscribe(todo => {
          this.todos.find(t=> t.id === todo.id).completed = true;
      })
  }
}
