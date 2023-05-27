import { Component, OnInit } from '@angular/core';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  details:any;
  constructor(private info:ProductInfoService){}

  ngOnInit():void{
    this.info.getProductDetail()
      .subscribe(data =>this.details = data);
  }

}


