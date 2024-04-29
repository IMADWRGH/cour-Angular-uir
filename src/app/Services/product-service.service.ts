import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  data = [
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

  getProducts(): Product[] {
    return this.data;
  }
}
