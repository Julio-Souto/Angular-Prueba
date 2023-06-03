import { Component } from '@angular/core';

@Component({
  selector: 'starter-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent {
  save(){
    console.log("Guardado")
  }
}
