import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../service/category.service';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {


  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }
}
