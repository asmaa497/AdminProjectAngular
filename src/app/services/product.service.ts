import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../ViewModels/iproduct';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private httpOptions;
  constructor(private httpClient: HttpClient) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
         , 'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    }
  }


  getAllProducts(): Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/product`)
  
  }
  getProductByID(prdID: number|undefined): Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.APIBaseURL}/product/${prdID}`);
  }

  addNewProduct(newPrd: IProduct): Observable<IProduct>
  {
    return this.httpClient.post<IProduct>(`${environment.APIBaseURL}/product`, JSON.stringify(newPrd),this.httpOptions);
  }
  DeletePro( id: number|undefined): Observable<IProduct> 
  {
    return this.httpClient.delete<IProduct>(`${environment.APIBaseURL}/product/${id}`,this.httpOptions);
  }
  updatePro(updatedPro: IProduct, id: number|undefined)
  {
    console.log("id is "+id);
    console.log("name "+updatedPro.name);
    console.log("quantity "+updatedPro.quantity);
    console.log("price "+updatedPro.price);
    console.log("immage "+updatedPro.img);
    console.log("catID "+updatedPro.catID);
    console.log("service called");
    return this.httpClient.patch<IProduct>(`${environment.APIBaseURL}/product/${id}`, JSON.stringify(updatedPro),this.httpOptions);
     
  }
}
