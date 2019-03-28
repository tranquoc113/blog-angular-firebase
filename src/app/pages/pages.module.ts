import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { SinglePostComponent } from './single-post/single-post.component';
import {CategoryService} from '../service/category.service';
import {PostService} from '../service/post.service';
import {CommentService} from '../service/comment.service';
import {HttpClientModule} from '@angular/common/http';
import { CommentPostComponent } from './comment-post/comment-post.component';
import {FormsModule} from '@angular/forms';
import { PagePostComponent } from './page-post/page-post.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [PagesComponent,
    PageHomeComponent,
    SinglePostComponent,
    CommentPostComponent,
    PagePostComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule  // NGX pagination module
  ],
  providers: [
    CategoryService,
    PostService,
    CommentService]
})
export class PagesModule { }
