import { Component, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit{
  products: any = [];
  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.getAllProdcutsData();
    if(!!window.history.state.id){
      console.log(window.history.state)
    }
  }

  // get all data 
  getAllProdcutsData(){
    this.productService.getAllProduct().subscribe((result)=>{
      this.products = result;
    })
  }

}
