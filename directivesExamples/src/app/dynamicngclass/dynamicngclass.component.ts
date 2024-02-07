import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamicngclass',
  templateUrl: './dynamicngclass.component.html',
  styleUrl: './dynamicngclass.component.css'
})

export class DynamicngclassComponent {
  public courses:String[];
  useTdata:boolean;
  classObj:Object;

  constructor(){
    this.courses = ["Java", "SpringBoot", "JSP", "Angular"];
    this.useTdata = true;
    this.classObj = {tdata:this.useTdata}
  }
}
