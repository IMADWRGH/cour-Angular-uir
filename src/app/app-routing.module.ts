import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { FormProductComponent } from './form-product/form-product.component';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent },
  { path: "list", component: ListProductComponent, canActivate: [authGuard] },
  { path: "add", component: FormProductComponent, canActivate: [authGuard] },
  { path: 'edit', component: FormProductComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
