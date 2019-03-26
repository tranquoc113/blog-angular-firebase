import {Component, OnInit, TemplateRef} from '@angular/core';
import {Category} from '../../../model/category';
import {CategoryService} from '../../../service/category.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categories : Category[];
  modalRef: BsModalRef;
  category = new Category();
  public searchText = '';
  p = 1;

  constructor(private categoryService: CategoryService,
              private modalService: BsModalService) {
  }
  ngOnInit() {
    this.categoryService.getCategoryList().snapshotChanges().subscribe(data => {
      this.categories = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.categories.push(a as Category);
      })
    });
  }


  openModal(template: TemplateRef<any>, data: Category) {
    this.category = data;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirmDelete(key: string): void {
    this.categoryService.deleteCategory(key);
    this.modalRef.hide();
  }


}
