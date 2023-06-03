import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[starterConfirmationPanel]'
})
export class ConfirmationPanelDirective {

  @Input('confirm')
  execFunction!: Function;

  @HostListener('click',['$event'])
  onClick(){
    const confirmed = window.confirm('Seguro?')
    if(confirmed)
      this.execFunction()
  }

}
