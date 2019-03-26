import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCommentComponent} from './list-comment/list-comment.component';
import {DetailCommentComponent} from './detail-comment/detail-comment.component';
const routes: Routes = [
    {
        path: '',
        component: ListCommentComponent,
        children: [
            {
                path: 'detail',
                component: DetailCommentComponent,
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class CommentRoutingModule {
}
