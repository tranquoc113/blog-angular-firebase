
import {PostService} from '../../../service/post.service';
import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import { Post } from 'src/app/model/post';
import { ToastrService } from 'ngx-toastr';
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
  p = 1;
  returnedArray: string[];
  constructor(private postService: PostService,
    private modalService: BsModalService,
    private toastr: ToastrService) { }

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
  openModal(template: TemplateRef<any>, data: Post) {
    this.post = data;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirmDelete(key: string): void {
    this.postService.deletePost(key).then(
      res => {
        this.modalRef.hide();
        this.toastr.success('You are delete It Successfully!');
      },error=>{
        this.toastr.error('You are delete Failure!');
      })
  }

  activeChange(item: Post): void {
    console.log(item);
    this.postService.updatePost(item).then(
      res => {
        this.toastr.success('You are active It Successfully!');
      }, error => {
        this.toastr.error('You are active failure!')
      })
  }
}
