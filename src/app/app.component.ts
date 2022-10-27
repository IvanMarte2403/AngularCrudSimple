import { Component } from '@angular/core';
import {Employed} from './models/employed';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employedArray: Employed[] = [
  { id: 1, name: 'Ivan', country: 'México' }
  ]
}
