import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'products'},
    {
      path: 'home',
      component: HomeComponent,

    },
    {
      path: 'products',
       component: ProductsComponent,
    },
    {
        path: 'cart',
       component: CartComponent,
    },
  
    {path: '**', component: PageNotFoundComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
