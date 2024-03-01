import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsservice:ProductsService, private cartservice:CartService) {
  
   }
  products: any [] = []
  
  ngOnInit(): void {
    this.products=this.productsservice.getprodect();
  }
  addproduct(product:any)
    {
      this.cartservice.addProductToCart(product)
    }

}
