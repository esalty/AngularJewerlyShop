import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartlistComponent } from './components/cartlist/cartlist.component';
import { CartitemComponent } from './components/cartitem/cartitem.component';



@NgModule({
  declarations: [ CartComponent, CartlistComponent, CartitemComponent ],
  imports: [
    CommonModule ],
  exports: [
    CartComponent ]
})
export class CartModule { }
