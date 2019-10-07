import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {products} from '../products';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   
  product:any

  constructor(private route:ActivatedRoute,private cartService:CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(x=>{
      this.product = products[+x.get('productId')]
    })
  }

  addToCart(product){
    window.alert('the items have been add');
     this.cartService.addToCart(product)
  }
}
