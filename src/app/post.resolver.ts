import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { Post, PostsService } from "./posts.service";
import {delay} from "rxjs/operators";

@Injectable({providedIn: 'root'})

export class PostResolver implements Resolve<any> {
    constructor(
        private postsService: PostsService
    ) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Post> | Promise<Post> | Post {
        return of(this.postsService.getById(+route.params['id']))
            .pipe(delay(1500))
    }
}