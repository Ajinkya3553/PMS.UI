import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = [];

  constructor(private productSerive : ProductsService, private router : Router) { }

  ngOnInit(): void {
    this.productSerive.getAllProducts()
      .subscribe({
        next: (products) => {
          this.products = products;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }


}
