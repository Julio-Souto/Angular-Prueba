import { Component } from '@angular/core';

@Component({
  selector: 'starter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starter';
  numero: number = 5;
  name:string = 'Antonio';

  eventListener(event:number):void{
    this.numero=event;
  }
}
