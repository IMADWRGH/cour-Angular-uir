import { Component, booleanAttribute } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
})
export class FormProductComponent {
  productForm!: FormGroup;
  isEditMode: boolean = false;
  constructor(private fb: FormBuilder, private service: ProductServiceService, private router: Router, private activateRouter: ActivatedRoute) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      color: ['', Validators.required]
    });
  }
  ngOnInit() {
    let EditMode = new Boolean(this.activateRouter.snapshot.paramMap.get("isEditMode"));
    // localStorage.setItem("isEditMode", JSON.stringify(EditMode));
    if (EditMode) {
      const name = this.activateRouter.snapshot.paramMap.get("name");
      const price = this.activateRouter.snapshot.paramMap.get("price");
      const description = this.activateRouter.snapshot.paramMap.get("description");
      const color = this.activateRouter.snapshot.paramMap.get("color");

      this.productForm = this.fb.group({
        name: [name, Validators.required],
        price: [price, Validators.required],
        description: [description, Validators.required],
        color: [color, Validators.required]
      });
      this.isEditMode = EditMode.valueOf();
      // console.log(EditMode);
    }
    // console.log(this.isEditMode);
  }

  onSubmit() {
    let result = this.service.addProduct(this.productForm.value);
    this.router.navigate(['list'])
    console.log(result);

  }
}
