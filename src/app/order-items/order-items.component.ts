import { Component, OnInit } from '@angular/core';

import { products } from '../products';

import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  items:any

  checkoutForm:any

  constructor(private cartService:CartService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name:'',
      address:''
    })
  }

  onSubmit(userdata:any){

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
