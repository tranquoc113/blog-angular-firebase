import { Comment } from './../../../model/comment';
import { CommentService } from './../../../service/comment.service';
import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {
  modalRef: BsModalRef;
  comments = [];
  comment = new Comment();
  searchText = '';
  returnedArray: string[];
  constructor(private commentService: CommentService,
    private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>, data: Comment) {
    this.comment = data;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirmDelete(): void {
  }
  activeChange(item: Comment): void {

  }

  view(template: TemplateRef<any>, comment: Comment): void {
    this.comment = comment;
    this.modalRef = this.modalService.show(template);
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.comments.slice(startItem, endItem);
  }
}
