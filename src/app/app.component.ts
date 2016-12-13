import { Component } from '@angular/core';

@Component({
  selector: 'fa-app',
  template: `
      <h1>{{title}}</h1>
      <app-databinding></app-databinding>
  `,
  styles: [`
	h1{
		color: red;
	}
  `]
})
export class AppComponent {
  title = 'Binding Methods';
}
