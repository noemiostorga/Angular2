import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent{
	stringInterpolation = "this string  interpolation works";

	onTest(){
		return true;
	}
}
