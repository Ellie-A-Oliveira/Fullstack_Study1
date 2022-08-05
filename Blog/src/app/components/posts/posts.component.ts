import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$?: Observable<IPost[] | null>;

  constructor(private handler: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.handler.getPosts();
  }

}
