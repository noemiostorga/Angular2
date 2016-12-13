import { Component} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">click me</button>
  `,
  styles: []
})
export class EventBindingComponent {

  onClicked(){
    console.log("this event worked!");

  }

}
