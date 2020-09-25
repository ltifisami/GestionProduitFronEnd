import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   products;
   currentProduct: any;
   title:string;
   currentRequest:string;

  constructor(
    private route:ActivatedRoute,private router:Router,
    private authService:AuthentificationService,
    public productService:ProductService) { }

  ngOnInit() {
    this.products=this.getProducts('/product');
  }

   getProducts(url) {
    this.productService.getResource(this.productService.host+url)
      .subscribe(data=>{
        this.products=data;
      },err=>{
        console.log(err);
      })
  }
  
}
