import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['../../../styles/components/shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  get products() {
    return this.productService.shopProducts;
  }

  selectProduct(product) {
    this.productService.storeSelectedProduct(product);
  }
}
