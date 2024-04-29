import { Component } from '@angular/core';
import { Product } from '../model/product.module';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  products!: Product[];
}
