import { HttpClientModule } from '@angular/common/http';
import { CommentService } from './../service/comment.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import {PostService} from '../service/post.service';
import {CategoryService} from '../service/category.service';
@NgModule({
  declarations: [
      AdminComponent,
      DashboardComponent,
      AdminMenuComponent,
      AdminSidebarComponent],
  imports: [
    CommonModule,
      AdminRoutingModule,
      HttpClientModule
  ],
  providers: [
    CommentService,
    PostService,
    CategoryService]
})
export class AdminModule { }
