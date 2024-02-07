import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrl: './ngstyle.component.css'
})

export class NgstyleComponent {
  public courses:String[];

  constructor(){
    this.courses = ["Java", "SpringBoot", "JSP", "Angular"];
  }

}

