import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  updateProductRequest: Product = {
    id: '',
    name: '',
    type: '',
    colour: '',
    price: 0
  };

  constructor(private productService: ProductsService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id) {
          this.productService.getProduct(id)
          .subscribe({
            next: (response) => {
              this.updateProductRequest = response;
            }
          });
        }
      }
    });
  }

  updateProduct() {

  }


}
