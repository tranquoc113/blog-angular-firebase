import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
const routes: Routes = [
    { path: '', loadChildren: './pages/pages.module#PagesModule' },
    {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
    {path: 'login', component: LoginComponent}
    // {path: '', redirectTo: 'admin', pathMatch: 'full'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {
}
