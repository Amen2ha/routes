import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  prodects : Array<any> = [
    {code:392001,name:"Cola",price: 14},
    {code:392002,name:"Bread",price: 10},
    {code:392003,name:"Bisk zman",price: 7},
    {code:392004,name:"Fairy lemon",price: 12},
    {code:392005,name:"Crispy waffle",price: 14},
    {code:392006,name:"Golden bread",price: 18},
     ]
     getprodect()
     {
      return this.prodects
     }
  constructor() { }
}
