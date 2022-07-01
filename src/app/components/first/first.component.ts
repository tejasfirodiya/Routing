import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  products!:Product[];
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
