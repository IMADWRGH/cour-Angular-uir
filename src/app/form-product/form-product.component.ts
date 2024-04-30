import { Component } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
  productForm: any;
  constructor(private fb: FormBuilder, private service: ProductServiceService, private router: Router) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      color: ['', Validators.required]
    });
  }
  ngOnInit() {

  }
  onSubmit() {
    let result = this.service.addProduct(this.productForm.value);
    this.router.navigate(['list'])
    console.log(result);

  }
}
