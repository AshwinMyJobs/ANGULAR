import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  
  id:number;
  name:string;
  price:number;

  constructor(){
    this.id = 1;
    this.name = "Mac Book Pro";
    this.price = 1300;
  }

  getID():number{
    return this.id;
  }

  getName():string{
    return this.name;
  }

  getPrice():number{
    return this.price; 
  }

}
