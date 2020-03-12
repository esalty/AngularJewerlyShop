import { Component, OnInit, Input } from '@angular/core';
import { ProductsModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() products: Array<ProductsModel>;
 constructor( private productService: ProductsService) { }

  ngOnInit(): void {
  }

  getProduct() {
    return this.productService.getProduct();
  }
onBuy() {
    console.log('You buy product');
  }

}
