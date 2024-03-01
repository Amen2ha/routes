import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:any=[];
getcart(){
  return this.cart;
}
addProductToCart(product:any)
{
this.cart.push(product);
}
  constructor() { }
}
