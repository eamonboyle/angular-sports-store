import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({ 
    templateUrl: './cart-details.component.html'
})
export class CartDetailComponent {
    constructor(public cart: Cart) {

    }
}