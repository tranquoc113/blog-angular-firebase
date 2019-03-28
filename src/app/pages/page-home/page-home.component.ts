import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  posts = [];
  p =1;
  constructor(private postService: PostService,
              ) { }

  ngOnInit() {
    this.postService.getPostList().snapshotChanges().subscribe(data => {
      this.posts = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.posts.push(a as Post);
      })
    });
  }
}
