import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public host:string="http://localhost:8080";

  constructor(private http:HttpClient) {
  }

  public getResource(url){
      return this.http.get(url);
  }
  public patchResource(url,data){
    return this.http.patch(url,data);
  }
   addProduct(p :Product) : any {
    return this.http.post(this.host+'/addProduct', p);
    }
    
}
