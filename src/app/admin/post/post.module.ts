import { PipeModule } from 'src/app/pipe/pipe.module';
import { CategoryService } from './../../service/category.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostComponent } from './list-post/list-post.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import {PostService} from '../../service/post.service';
import {PostRoutingModule} from './post-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ModalModule, PaginationModule} from 'ngx-bootstrap';
import { NgxEditorModule } from 'ngx-editor';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [ListPostComponent, DetailPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    PipeModule,
    PaginationModule.forRoot(),
    NgxEditorModule,
    NgxPaginationModule  // NGX pagination module
  ],
  providers: [PostService, CategoryService]
})
export class PostModule { }
