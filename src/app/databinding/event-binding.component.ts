import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="func()">Click Me</button>
  `,
  styles: []
})
export class EventBindingComponent {

  @Output() theProp = new EventEmitter<number>();

  func(){
    this.theProp.emit(3);
  }
}
