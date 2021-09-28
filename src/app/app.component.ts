import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 posts: Post[] = [
   {title: 'Хочу выучить Ангуляр компоненты', text: 'Я все еще учу компоненты', id: 1},
   {title: 'Следуюший блок ', text: 'Будет про директивы и еще про пайпы', id: 2}
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
    // console.log('Post', post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter (p => p.id !== id)
  }
}
