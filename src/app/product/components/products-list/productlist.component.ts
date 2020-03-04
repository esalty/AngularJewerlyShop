import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
products = this.geProducts();
  constructor(private productService: ProductsService) { }
geProducts(): ProductModel[] {
    return this.productService.getProducts();
  }

  ngOnInit(): void {
  }

}
