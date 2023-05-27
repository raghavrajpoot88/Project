import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {
  private productUrl:string="/assets/data/productDetail.json"

  constructor(private http : HttpClient) { }

  getProductDetail():Observable<IProduct>{
    return this.http.get<IProduct>(this.productUrl);
  }
}
