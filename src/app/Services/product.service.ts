import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] = [
    new Product(1, 'Mangoes', 1000),
    new Product(2, 'Apples', 2000),
    new Product(3, 'Papaya', 3000),
    new Product(4, 'WaterMelon', 4000),
    new Product(5, 'MuskMelon', 5000)
  ];

  constructor() { }

  public getProducts():Product[]{
    return this.products;
  }

  public findProduct(id:number):Product {
    let p: Product = new Product(0, '', 0);
    this.products.forEach(element => { if (element.id == id) p = element});

    console.log(p?.name);
    console.log("Inside findProduct of Product Service");

    return p;
  }
}
