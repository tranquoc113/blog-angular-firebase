import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageHomeComponent} from './page-home/page-home.component';
import {PagesComponent} from './pages.component';
import {SinglePostComponent} from './single-post/single-post.component';
import {PagePostComponent} from './page-post/page-post.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', component: PageHomeComponent},
      {path: 'detail/:id', component: SinglePostComponent},
      {path: 'page/:id', component: PagePostComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule {
}
