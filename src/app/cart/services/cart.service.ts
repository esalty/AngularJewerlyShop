import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    products = [ new ProductModel(1, 'braslet', 'hv-12', 12) ];

  constructor() { }
  getProducts() {
    return this.products;
  }
}
