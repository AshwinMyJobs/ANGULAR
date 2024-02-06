import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit{

  public namesArray:Object[];

  constructor(){
    this.namesArray = ["Ashwin","Rajesh","Varun","Jack","Ganesh"];
  }
  
  public getProducts(){
    return this.namesArray;
  }

  ngOnInit(): void {
    
  }
}
