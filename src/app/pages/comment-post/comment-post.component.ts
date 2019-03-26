import { Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../model/comment';
import {Post} from '../../model/post';
import {CommentService} from '../../service/comment.service';

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.css']
})
export class CommentPostComponent implements OnInit {
  comment = new Comment();
  @Input() comments: Array<Comment>;
  @Input() dataPost: Post;
  constructor(private commentService: CommentService) { }

  ngOnInit() {

  }
  sendComment(): void {
  }
}
