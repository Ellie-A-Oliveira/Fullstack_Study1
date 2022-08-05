import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  createPostForm = this.formBuilder.group({
    title: '',
    body: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private handler: PostsService
  ) { }

  ngOnInit(): void {
  }

  collapseForm() {
    const formDiv = document.querySelector('#create-post-form');
    formDiv?.classList.toggle('show');
  }

  submitPost() {
    this.handler.createPost({
      _id: '',
      title: this.createPostForm.value.title as string,
      body: this.createPostForm.value.body as string,
    })
    .subscribe((res) => {
      console.log(res);
    });
  }
}
