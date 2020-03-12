import { Injectable } from '@angular/core';
import { ProductsModel } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    products: Array<ProductsModel> = [ new ProductsModel(1, 'braslet', 'hv-12', 12),
    new ProductsModel(2, 'braslet', 'hv-13', 15) ];
total: number;
  constructor() { }
  getProducts() {
    return this.products;
  }
  getCountProducts() {
return this.products.length;
  }
getTotalPrice() {
  for (const product of this.products) {
    this.total = + product.price;

  }
  return this.total;
}

}
