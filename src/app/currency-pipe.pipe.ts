import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) { }

  transform(value: number, digits:string): string | null {
    return this.currencyPipe.transform(value,'EUR','',digits,'en-US');
  }

}
