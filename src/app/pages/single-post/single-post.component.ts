import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../service/post.service';
import {Post} from '../../model/post';
import {CommentService} from '../../service/comment.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  post = new Post();
  comments = [];
  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private commentService: CommentService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    if(id){
      this.postService.getPost(id).valueChanges().subscribe(data => {
        this.post = data;
        console.log(this.post);
      })
    }
    
  }

}
