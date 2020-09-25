import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {LoginComponent} from './login/login.component';
import {ProductComponent} from './product/product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import { SearchProductComponent } from './search-product/search-product.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'product/:id', component:ProductComponent},
  {path:'createProduct', component:CreateProductComponent},
  {path:'searchProduct', component:SearchProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
