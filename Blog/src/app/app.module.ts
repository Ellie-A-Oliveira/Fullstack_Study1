import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Services
import { PostsService } from './services/posts.service'; // Maybe not needed as a singleton?

// Components
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PostsService, // Maybe not needed as singleton?
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
