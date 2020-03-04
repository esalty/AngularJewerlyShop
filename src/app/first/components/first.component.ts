import { Component, OnInit } from '@angular/core';
import { ProductCategory } from './product-category-enum';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name = 'JohnComponent';
  description = 'Super component';
  price = 12;
  category: ProductCategory = ProductCategory.braslet; // https://www.typescriptlang.org/docs/handbook/enums.html
  isAvailable = false;
  products = [ 'golden ring', 'silver braslet' ];
  constructor() { }

  ngOnInit(): void {
  }

}
