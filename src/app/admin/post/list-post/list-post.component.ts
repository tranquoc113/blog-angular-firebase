
import {PostService} from '../../../service/post.service';
import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import { Post } from 'src/app/model/post';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  modalRef: BsModalRef;
  post = new Post();
  posts = [];
  searchText = '';
  returnedArray: string[];
  constructor(private postService: PostService,
    private modalService: BsModalService) { }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>, data: Post) {
    this.post = data;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirmDelete(): void {

  }

  activeChange(item: Post): void {
  }
}
