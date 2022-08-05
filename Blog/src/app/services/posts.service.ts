import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(): Observable<IPost[]> {
    return new Observable((observer) => {
      let postArray = [
        {
          _id: 'abc',
          title: 'Post 1',
          body: 'This is post 1.'
        },
        {
          _id: 'dfg',
          title: 'Post 2',
          body: 'This is post 2.'
        },
      ];

      observer.next(postArray);
      observer.error(new Error("There was an error while getting posts."))
    });
  }
}
