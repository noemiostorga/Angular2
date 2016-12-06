import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component2',
  templateUrl: './component2.component.html',
  styleUrls: [`
		p{
			color: blue;
		}
  `]
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
