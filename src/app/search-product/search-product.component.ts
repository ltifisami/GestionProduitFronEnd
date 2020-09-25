import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

produit;
selectedValue:string='';
descProd:string='';

  constructor(private productService : ProductService,
    private router : Router) { }

  ngOnInit(): void {

  }
  onSubmit(searchform:any){
    let id=searchform.value.selectedValue;
   
    if( id == 'Name')
    {
    this.productService.getResource(this.productService.host+"/product/search/findByName?name="+searchform.value.descProd)
      .subscribe(data=>{
        this.produit=data;
      },err=>{
        console.log(err);
      })
    }else if( id == 'Code' )
    {
      this.productService.getResource(this.productService.host+"/product/search/findByCode?code="+searchform.value.descProd)
      .subscribe(data =>{
        this.produit = data;
      },err=>{
        console.log(err);
      })
    }

    
  }

}
