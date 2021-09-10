import { Component } from "@angular/core";

@Component ({
    selector: 'app-post1',
    template: `
    <div class="post-1">
        <p>Hello Ng</p>
    </div>
    `,
    styles: [`
        .post-1 {
            border: 1px solid red;
        }
    `]
})

export class Post1Component {}