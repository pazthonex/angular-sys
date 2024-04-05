import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path : '' , component : DashboardComponent , title : 'Dashboard'},
    { path : 'products' , component : ProductsComponent , title : 'Products'},
    { path: '', redirectTo: '/home',  pathMatch: 'full' }
];
