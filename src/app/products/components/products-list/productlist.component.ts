import { Component, OnInit } from '@angular/core';
import { ProductsModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
products = this.getProducts();
  constructor(private productService: ProductsService) { }
getProducts(): ProductsModel[] {
    return this.productService.getProducts();
  }

  ngOnInit(): void {
  }

}
