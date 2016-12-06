import { Component } from '@angular/core';

@Component({
  selector: 'hey',
  template: `
	<h1> testing inline templating </h1>
	<component2></component2>
  <app-another>
    <div>
      <p>hello</p>
      <h1>world</h1>
    </div>
  </app-another>
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
