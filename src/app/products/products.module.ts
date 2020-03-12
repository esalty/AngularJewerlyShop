import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductlistComponent } from './components/products-list/productlist.component';


@NgModule({
  declarations: [ProductComponent, ProductlistComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent, ProductlistComponent
  ]
})
export class ProductsModule { }
