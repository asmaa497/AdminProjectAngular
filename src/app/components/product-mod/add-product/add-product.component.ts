import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  newPrd: IProduct={} as IProduct;
  ProUpdateId:number=0
  catList: ICategory[]=[];
  response:{dbpath:''}|undefined
  constructor(private prdService: ProductService
    , private router: Router
    ,private CatService:CategoryService,
    private activatedRoute:ActivatedRoute ) {

      this.CatService.getAllCateogories().subscribe(CatLst=>{
        this.catList=CatLst;
      
      })
     }

  ngOnInit(): void {
    this.ProUpdateId=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    if(this.ProUpdateId!=0)
    {
      this.prdService.getProductByID(this.ProUpdateId).subscribe(prd=>{
        this.newPrd=prd;
        this.newPrd.img=prd.img;
      });
    }
  }

  saveProduct()
  {
    
    this.ProUpdateId=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    if(this.ProUpdateId!=0)
    {

      console.log("ProUpdateId "+this.ProUpdateId);
      this.prdService.updatePro(this.newPrd,+this.ProUpdateId).subscribe(P=>{
        this.router.navigate(['/Pro/Products']);
      });
      
    }
    else
    {
      this.prdService.addNewProduct(this.newPrd).subscribe(prd=>{
        this.router.navigate(['/Pro/Products']);
      });
    }
  
  
    
  }

public  uploadFinished(event:any)
  {
    this.response= event.dbPath;
    if(this.response)
       this.newPrd.img= this.response.toString() ;

    console.log("response  "+this.response);   
    
    
  }
  public  CreateImgPath(ServerPath:string)
  {
    console.log("server Path  "+ServerPath);
     return `http://localhost:4319/${ServerPath}`;
  }

}
