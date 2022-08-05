import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts?: IPost[];

  constructor(private handler: PostsService) { }

  ngOnInit(): void {
    this.handler.getPosts()
      .subscribe((posts) => this.posts = posts);
  }

}
