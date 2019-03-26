import { PipeModule } from './../../pipe/pipe.module';
import { GrdFilterPipe } from './../../pipe/grd-filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './list-category/list-category.component';
import {CategoryService} from '../../service/category.service';
import {CategoryRoutingModule} from './category-routing.module';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';
// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    ListCategoryComponent,
    DetailCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    PipeModule,
    NgxPaginationModule  // NGX pagination module
  
   
  ],
  providers: [CategoryService]
})
export class CategoryModule { }
