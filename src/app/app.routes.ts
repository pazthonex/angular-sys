import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404Component } from './includes/page404/page404.component';
// import { NotFoundComponent } from './includes/page404/page404.component';

export const routes: Routes = [
    { path : 'dashboard' , component : DashboardComponent , title : 'Dashboard'},
    { path : 'products' , component : ProductsComponent , title : 'Products'},
    { path: '', redirectTo: '/dashboard',  pathMatch: 'full' },
    { path: '**', component: Page404Component },
];
