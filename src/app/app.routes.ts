import { Routes } from '@angular/router';
import { CadProductComponent } from './cad-product/cad-product.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'cadastro', component: CadProductComponent },
    { path: 'home', component:HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
