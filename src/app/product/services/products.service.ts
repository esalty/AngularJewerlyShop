import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    new ProductModel(1, 'braslet', 'hv-12', 12),
    new ProductModel(2, 'ring', 'hv-13', 25)
];

  constructor() { }
  getProducts() {
    return this.products;
  }
}
