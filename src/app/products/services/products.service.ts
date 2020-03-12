import { Injectable, Input } from '@angular/core';
import { ProductsModel } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    new ProductsModel(1, 'bracelet', 'hv-12', 12),
    new ProductsModel(2, 'ring', 'hv-13', 25)
];

constructor() { }
  getProducts() {
    return this.products;
  }
  getProduct() {
    return this.products[Math.floor(Math.random() * (1 - 0 + 1)) + 0];
  }
}
