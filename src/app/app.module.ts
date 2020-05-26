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

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    ProductComponent,
    ProductAddComponent,
    ProductSearchComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
