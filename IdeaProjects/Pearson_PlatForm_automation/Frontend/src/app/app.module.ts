import { AppproductComponent } from './appproduct/appproduct.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { MatTableModule } from '@angular/material/table';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MatButtonModule} from '@angular/material/button';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    EditproductComponent,
    ViewproductComponent,
    AddproductComponent,
    AppproductComponent


    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    CdkTableModule,
    CdkTreeModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule
    
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
