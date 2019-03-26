import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {Category} from '../../../model/category';
import {CategoryService} from '../../../service/category.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnInit {
  category = new Category();
  constructor(private categoryService: CategoryService,
              private location: Location,
              private route: ActivatedRoute,
              private toastr: ToastrService
             ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    if(id){
      this.categoryService.getCategory(id).valueChanges().subscribe(data => {
        this.category = data;
        this.category.$key = id;
      })
    }else{
      this.categoryService.getCategoryList();
    }
   
    
  }


  save(): void {
  
    if(this.category.$key){
      this.categoryService.updateCategory(this.category);
      setTimeout(() => {
        this.toastr.success('You are update It Successfully!');
      });
    }else{
      this.categoryService.addCategory(this.category);
      setTimeout(() => {
        this.toastr.success('You are add new It Successfully!');
      });
      this.category = new Category();
    }
    
  }
  back() {
    this.location.back();
  }

  showSuccess() {
    this.toastr.success('You are Got It Successfully!');
  }
}
