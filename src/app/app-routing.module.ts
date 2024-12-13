import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {path:'product', component:ProductComponent , children:[
    { path:'add',component:ProductFormComponent},
    { path:'list',component:ProductListComponent},
  ]},
  { path:'order-form',component:OrderFormComponent},
  { path: 'orders', component: OrderListComponent },
  { path: '', pathMatch: 'full', redirectTo: '/product/add' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
