import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCategoryComponent} from './list-category/list-category.component';
import {DetailCategoryComponent} from './detail-category/detail-category.component';
const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: ListCategoryComponent},
    {path: 'create', component: DetailCategoryComponent},
    {path: 'detail/:id', component: DetailCategoryComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class CategoryRoutingModule {
}
