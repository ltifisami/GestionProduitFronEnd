import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from './services/authentification.service';
import {ProductService} from './services/product.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public productService:ProductService,
    private  router:Router,
    public authService:AuthentificationService){}

    ngOnInit(): void {
      this.authService.loadUser();
    }
    onLogin() {
      this.router.navigateByUrl('/login');
    }
  
    onLogout() {
      this.authService.logout();
      this.router.navigateByUrl('/login');
    }
    onCreateProduct(){
      this.router.navigateByUrl('/createProduct');
    }
    onSearchProduct()
    {
      this.router.navigateByUrl('/searchProduct');
    }
   
    getAllProducts()
    {
      this.router.navigateByUrl('/products');
    }
}
