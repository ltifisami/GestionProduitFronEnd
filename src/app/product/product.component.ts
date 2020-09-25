import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import {AuthentificationService} from '../services/authentification.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  currentProduct ;
  private currentTime: number;
  private mode: number=0;

  constructor(private router:Router, private route:ActivatedRoute,
              public productService:ProductService,
              public authService:AuthentificationService
              ) { }

  ngOnInit()  {
    let id=this.route.snapshot.params.id;
    this.productService.getResource(this.productService.host+"/product/"+id)
      .subscribe(data =>{
        this.currentProduct=data;
      },err=>{
        console.log(err);
      })
  }

}
