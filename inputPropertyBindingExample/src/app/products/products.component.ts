import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit{

  public productName:string;
  public hide:boolean;

  constructor(){
    this.productName = "This is productName sentence";
    this.hide = true;
  }

  ngOnInit(): void {
    
  }
}
