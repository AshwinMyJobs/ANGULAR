import { Component } from '@angular/core';

@Component({
  selector: 'app-output-event-binding',
  templateUrl: './output-event-binding.component.html',
  styleUrl: './output-event-binding.component.css'
})


export class OutputEventBindingComponent {

  public hide:boolean;

  constructor(){
    this.hide = false;
  }
}
