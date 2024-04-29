import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: "", component: HomeComponent },
  // { path: "home", component: HomeComponent },
  // { path: "user", component: UserComponent },
  // { path: "product", component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
