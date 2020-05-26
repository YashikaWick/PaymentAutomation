import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { ProductComponent } from './core/product/product.component';
import { ProductAddComponent } from './core/product/product-add/product-add.component';
import { ProductSearchComponent } from './core/product/product-search/product-search.component';
import { ProductUpdateComponent } from './core/product/product-update/product-update.component';
import { ProductListComponent } from './core/product/product-list/product-list.component';


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
  },
  {
    path: 'product/search',
    component: ProductSearchComponent
  },
  {
    path: 'product/update',
    component: ProductUpdateComponent
  },
  {
    path: 'product/list',
    component: ProductListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
