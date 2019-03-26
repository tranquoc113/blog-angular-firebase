import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  posts = [];
  constructor(private postService: PostService,
              ) { }

  ngOnInit() {
  }
}
