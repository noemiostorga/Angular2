import { Component } from '@angular/core';

@Component({
  selector: 'hey',
  template: `
	<h1> testing inline templating </h1>
	<component2></component2>
  `,
  styles: [`
	h1{
		color: red;
	}
  `]
})
export class AppComponent {
  title = 'app works!';
}
