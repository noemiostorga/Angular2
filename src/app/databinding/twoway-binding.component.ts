import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  template: `
    <input [(ngModel)]="person.name">
    <input [(ngModel)]="person.name">
  `,
  styles: []
})
export class TwowayBindingComponent {

  person ={
    name: "noemi";
    age: "21";
  };

}
