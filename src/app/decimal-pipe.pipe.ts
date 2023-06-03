import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalPipe'
})
export class DecimalPipePipe implements PipeTransform {

  constructor(private decimalPipe: DecimalPipe) { }

  transform(value: number, roundRules: string): string | null {
    return this.decimalPipe.transform(value,roundRules);
  }

}
