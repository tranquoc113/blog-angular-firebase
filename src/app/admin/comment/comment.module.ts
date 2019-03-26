import { GrdFilterPipe } from './../../pipe/grd-filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCommentComponent } from './list-comment/list-comment.component';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import {CommentRoutingModule} from './comment-routing.module';
import {CommentService} from '../../service/comment.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ModalModule, PaginationModule } from 'ngx-bootstrap';
import { PipeModule } from 'src/app/pipe/pipe.module';

@NgModule({
  declarations: [ListCommentComponent, DetailCommentComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    PipeModule,
    PaginationModule.forRoot()
  ],
  providers: [CommentService]
})
export class CommentModule { }
