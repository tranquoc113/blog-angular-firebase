import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
          {path: '', component: DashboardComponent},
          {path: 'dashboard', component: DashboardComponent},
          {path: 'category', loadChildren: './category/category.module#CategoryModule'},
          {path: 'post', loadChildren: './post/post.module#PostModule'},
          {path: 'comment', loadChildren: './comment/comment.module#CommentModule'}
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AdminRoutingModule {
}
