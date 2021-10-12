import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search = ""
  searchField = "title"

  posts:Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво в мире'},
    {title: 'Bread', text: 'The best Bread in the world'},
    {title: 'JavaScript', text: 'The best lang in framework'}
  ]

  AddPost() {
    this.posts.push({title: 'Angular 8', text: 'Work angular top'})
  }
}
