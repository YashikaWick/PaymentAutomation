import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { ProductComponent } from './core/product/product.component';
import { ProductAddComponent } from './core/product/product-add/product-add.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ProductSearchComponent } from './core/product/product-search/product-search.component';
import { ProductUpdateComponent } from './core/product/product-update/product-update.component';
import { ProductService } from './core/product.service';
import { CoreService } from './core/core.service';
import { AppService } from './app.service';
import { ProductListComponent } from './core/product/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    ProductComponent,
    ProductAddComponent,
    ProductSearchComponent,
    ProductUpdateComponent,
    ProductListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [AppService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
