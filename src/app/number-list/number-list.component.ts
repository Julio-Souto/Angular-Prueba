import { Component } from '@angular/core';

@Component({
  selector: 'starter-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent {
  number: string = '612345894';
  date = new Date();
}
