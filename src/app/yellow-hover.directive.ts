import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[starterYellowHover]'
})
export class YellowHoverDirective {

  constructor(private el: ElementRef){}

  @Input() backgroundColor = '#fff';

  @HostListener('mouseover')
  onMouseOver() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.el.nativeElement.style.backgroundColor =  '#fff';
  }

}
