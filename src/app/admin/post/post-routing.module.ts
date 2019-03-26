import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPostComponent} from './list-post/list-post.component';
import {DetailPostComponent} from './detail-post/detail-post.component';
const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: ListPostComponent},
    {path: 'create', component: DetailPostComponent},
    {path: 'detail/:id', component: DetailPostComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class PostRoutingModule {
}
