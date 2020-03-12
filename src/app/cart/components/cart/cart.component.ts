import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/app/products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products = this.getProducts();
  clickMessage: string;

  constructor(private cartService: CartService) { }

  getProducts(): ProductsModel[] {
    return this.cartService.getProducts();
  }
onClick(): void {
  this.clickMessage = 'Product added to cart';
}
  ngOnInit(): void {
  }

}
