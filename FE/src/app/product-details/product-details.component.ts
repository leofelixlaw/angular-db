import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
  id: any;
  product: any;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { }
  
  ngOnInit() {

    this.id = this.route.snapshot.paramMap?.get("id");

    // get an item details by id
    if (this.id) {
      this.productService.getData(this.id).subscribe((result) => {
        this.product = result;
        console.log(result)
      })
    }

  }
}
