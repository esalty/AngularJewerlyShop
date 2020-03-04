import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/components/first.component';
import { CartComponent } from './cart/components/cart.component';
import { ProductComponent } from './product/components/product/product.component';
import { ProductlistComponent } from './product/components/products-list/productlist.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
