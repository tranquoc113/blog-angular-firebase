import { CommentService } from './../../service/comment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  countComment = 0;
  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

}
