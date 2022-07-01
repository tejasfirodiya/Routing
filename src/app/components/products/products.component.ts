import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private productService: ProductService) { }

  p!:Product;
  price!:number;
  name!:string;
  id!:number;

  ngOnInit(): void {
    console.log("ngOnit Called");

    this.route.params.subscribe(
      (parameters:any) => {
        console.log("Now resetting id " + parameters['id']);
        console.log("Now resetting name " + parameters['name']);
        console.log();
        this.p = this.productService.findProduct(parameters['id']) || new Product (0, "product_name", 0);
      }
    )
  }

}
