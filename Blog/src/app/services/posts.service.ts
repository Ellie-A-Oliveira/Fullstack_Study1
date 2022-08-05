import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = 'http://127.0.0.1:3000/'
  postsUrl = 'posts/'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[] | null> {
    return this.http
      .get(this.baseUrl + this.postsUrl, { observe: 'response', responseType: 'json' })
      .pipe(
        map((res) => res.body)
      ) as Observable<IPost[] | null>;
  }
}
