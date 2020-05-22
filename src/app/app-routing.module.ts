import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { ProductComponent } from './core/product/product.component';
import { ProductAddComponent } from './core/product/product-add/product-add.component';


const routes: Routes = [
  {
    path:'',
    component:CoreComponent
  },
  {
    path: 'product',
    component:ProductComponent
  },
  {
    path: 'product/add',
    component: ProductAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
