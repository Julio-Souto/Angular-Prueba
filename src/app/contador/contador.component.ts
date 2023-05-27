import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'starter-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  @Input() valorContador: number = 0;
  @Output() eventoContador = new EventEmitter();

  incrementar():void{
    this.valorContador++;
    this.eventoContador.emit(this.valorContador);
  }

  decrementar():void{
    this.valorContador--;
    this.eventoContador.emit(this.valorContador);
  }

  change(event:any){
    this.valorContador=event.target.value;
    this.eventoContador.emit(this.valorContador);
  }
}
