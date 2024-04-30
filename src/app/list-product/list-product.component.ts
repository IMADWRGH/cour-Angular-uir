import { Component } from '@angular/core';
import { Product } from '../model/product.module';
import { ProductServiceService } from '../Services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {


  constructor(private service: ProductServiceService, private router: Router) { }
  products?: Product[];
  ngOnInit() {
    this.products = this.service.getProducts();
    console.log(this.service.getProducts());
  }

  getForm(): void {
    console.log("test");
    this.router.navigate(['add']);
  }
  deleteP(id: number) {
    this.service.deleteProduct(id);
    this.products = this.service.getProducts();
  }

  UpdateProduct(product: Product) {
    let productObj = { ...product, isEditMode: true }
    this.router.navigate(['/edit', productObj]);
  }

}
