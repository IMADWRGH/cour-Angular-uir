import { Component } from '@angular/core';
import { Product } from '../model/product.module';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  constructor(private service: ProductServiceService) { }
  products?: Product[];
  ngOnInit() {
    this.products = this.service.getProducts();
    console.log(this.service.getProducts());
  }
}
