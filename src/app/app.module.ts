import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/components/first.component';
import { CartComponent } from './cart/components/cart.component';
import { ProductComponent } from './product/components/product/product.component';
import { ProductlistComponent } from './product/components/products-list/productlist.component';
import { ProductsService } from './product/services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CartComponent,
    ProductComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers: [ProductsService, CartComponent], // Зачем тут ProductsService, CartComponent?
  bootstrap: [AppComponent]
})
export class AppModule { }
