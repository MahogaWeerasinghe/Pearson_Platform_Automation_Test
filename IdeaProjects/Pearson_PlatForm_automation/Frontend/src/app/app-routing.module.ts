
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  {path: 'countries', component: ProductlistComponent},
  {path: '', redirectTo: 'countries', pathMatch: 'full'},
  {path : 'updatecountry/:id', component:EditproductComponent},
  {path: 'addcountry', component: AddproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
