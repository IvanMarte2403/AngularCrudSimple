import { Component } from '@angular/core';
import {Employed} from './models/employed';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employedArray: Employed[] = [
  { id: 1, name: 'Ivan', country: 'México' },
  { id: 2, name: 'Angelica ', country: 'México' },
  { id: 3, name: 'Joe', country: 'México' },
  ];
  selectedEmployed: Employed = new Employed();

}
