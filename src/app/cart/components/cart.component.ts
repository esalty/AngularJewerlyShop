import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products = this.geProducts();
  constructor(private cartService: CartService) { }
geProducts(): ProductModel[] {
    return this.cartService.getProducts();
  }

  ngOnInit(): void {
  }

}
