import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products = [
    {
      id: 1,
      name: 'Bamboo Watch',
      description: 'Product Description',
      price: 65,
      color: 'red'
    },
    {
      id: 2,
      name: 'Bamboo Watch',
      description: 'Product Description',
      price: 65,
      color: 'red'
    },
    {
      id: 3,
      name: 'Bamboo Watch',
      description: 'Product Description',
      price: 65,
      color: 'red'
    },
    {
      id: 4,
      name: 'Bamboo Watch',
      description: 'Product Description',
      price: 65,
      color: 'red'
    },

  ]
  constructor() { }

  addProduct(product: Product) {
    this.products.push(product);
  }

  getProducts(): Product[] {
    return this.products;
  }

  deleteProduct(id: number): Boolean {
    this.products = this.products.filter((p) => {
      return p.id !== id;
    });
    console.log(this.products);

    return true;
  }


  updateProduct(id: number, p: Product): Product {
    return this.products[1];
  }
}
