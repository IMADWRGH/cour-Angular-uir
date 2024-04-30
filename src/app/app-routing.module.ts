import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { FormProductComponent } from './form-product/form-product.component';

const routes: Routes = [
  { path: "", component: ListProductComponent },
  { path: "list", component: ListProductComponent },
  { path: "add", component: FormProductComponent },
  { path: 'edit', component: FormProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
