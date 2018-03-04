import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent, HomeComponent } from './features';

const routes: Route[] = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'not-found',
        redirectTo: '/login',
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    // catch all route
    {
        path: '**',
        redirectTo: '/not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }