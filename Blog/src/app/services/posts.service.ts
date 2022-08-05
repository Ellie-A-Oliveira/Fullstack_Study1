import { Injectable } from '@angular/core';

import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(): IPost[] {
    return [
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
  }
}
