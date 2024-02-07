import { Component } from '@angular/core';

@Component({
  selector: 'app-nonbindable',
  templateUrl: './nonbindable.component.html',
  styleUrl: './nonbindable.component.css'
})

export class NonbindableComponent {
  public courses:String[];

  constructor(){
    this.courses = ["Java", "SpringBoot", "JSP", "Angular"];
  }

  public getCources(){
    return this.courses;
  }
}
