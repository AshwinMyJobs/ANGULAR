import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  public courses:String[];

  constructor(){
    this.courses = ["Java", "SpringBoot", "JSP", "Angular"];
  }
}
