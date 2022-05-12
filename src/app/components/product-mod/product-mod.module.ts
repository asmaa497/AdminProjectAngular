import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Guards/auth.guard';
import { UploadComponent } from '../upload/upload.component';

const routes:Routes=[
  
    {path:'Products',component:ProductsComponent,canActivate:[AuthGuard]},
    {path:'NewProduct/:pid',component:AddProductComponent,canActivate:[AuthGuard]},
    
]

@NgModule({
  declarations: [AddProductComponent,ProductDetailsComponent,ProductsComponent,UploadComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSliderModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule ,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModModule { }
