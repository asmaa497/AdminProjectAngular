import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit ,AfterViewInit{
  private currPrdID:number=0;
  currPrd:IProduct|undefined=undefined;
  @Input() public PRODUCTID:number=0;
  constructor(private activatedRoute:ActivatedRoute
    
    , private prdService:ProductService,
    private dialogRef: MatDialogRef<ProductDetailsComponent>,
    ) { }
  ngAfterViewInit(): void {
    this.currPrdID=this.PRODUCTID;
  }

  ngOnInit(): void {
    this.currPrdID=this.PRODUCTID;
    this.prdService.getProductByID(this.currPrdID).subscribe(prd=>{
      this.currPrd=prd;
    });
  }
  public  CreateImgPath(ServerPath:string|undefined)
    {
       return `http://localhost:4319/${ServerPath}`;   
    }
    close() {
      this.dialogRef.close();
  }

}
