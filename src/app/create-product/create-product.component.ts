import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
dateA = new Date();
dateV ;
submitted = false;
model = new Product('Dr IQ', 'ABCDEFGH', 1000.5,this.dateA);
  constructor( private productService : ProductService,
    private router : Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(form:any) { 
    this.dateV=new Date(form.value.validityDate);
    if(this.dateV > this.dateA )
    {this.submitted = true;}
    else{
      this.submitted = false;
    }
  }
  newProduct() {
    this.model = new Product('Dr IQ', 'ABCDEFGH', 1000.5,this.dateA);
  }

ajouterProduct() {
this.productService.addProduct(this.model).subscribe(res => {
console.log(res);
});
}
}
