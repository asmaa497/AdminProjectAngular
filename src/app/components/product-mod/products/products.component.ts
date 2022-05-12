import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { ProductDetailsComponent } from '../product-details/product-details.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prdList:IProduct[]=[];
  displayedColumns: string[] = ['action','name', 'quantity', 'price','img','view'];
  constructor(private ProService:ProductService,private router:Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    
    this.ProService.getAllProducts().subscribe(prdList=>{
      this.prdList=prdList;
    });
  }
  openDialog(id:number) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const modalRef= this.dialog.open(ProductDetailsComponent, dialogConfig);
    modalRef.componentInstance.PRODUCTID=Number(id);
}

  public  CreateImgPath(ServerPath:string)
  {
    console.log("server Path  "+ServerPath);
     return `http://localhost:4319/${ServerPath}`;
  }
 
  deletePro(id:number|undefined)
  {
    let confirmation=confirm("Are You Sure to delete this product ?")
    if(confirmation)
    {
      this.ProService.DeletePro(id).subscribe(P=>{
        console.log(P);
        window.location.reload();
      })

    }
    
  }

}
