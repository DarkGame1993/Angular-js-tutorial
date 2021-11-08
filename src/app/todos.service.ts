import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, delay } from "rxjs/operators";

export interface Todo {
    title: string,
    completed: boolean,
    userId?: number
}

@Injectable({providedIn: 'root'})

export class TodosService {
  constructor(private http: HttpClient) {}

  addTodo (todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({'MyCustom-Header': Math.random().toString()})
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
        headers
    })
  }

  fetchTodos(): Observable<Todo[]>{
      let params = new HttpParams();
      params = params.append('_limit', '10');
      params = params.append('custom', 'anything')
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
        params
    })
        .pipe(delay(500),
            catchError(err => {
                console.error('Error: ', err.message);
                return throwError(err)
            })
        )  
  }
  removeTodo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  completedTodo(id: number): Observable<Todo> {
      return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        completed: true
      })
  }
}