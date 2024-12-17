import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Directive({
  selector: '[appMoneyFormat]',
  standalone: true,
  providers: [CurrencyPipe]  // Injetando o CurrencyPipe
})
export class MoneyFormatDirective implements OnChanges {

  @Input('appMoneyFormat') value!: number;  // Valor do tipo double a ser formatado

  constructor(private el: ElementRef, private currencyPipe: CurrencyPipe) {}

  ngOnChanges(): void {
    this.formatMoney();
  }

  formatMoney() {
    // Usando CurrencyPipe para formatar o valor em reais (R$)
    const formattedValue = this.currencyPipe.transform(this.value, 'BRL', 'symbol', '1.2-2');
    if (formattedValue) {
      this.el.nativeElement.innerText = formattedValue;  // Exibe o valor formatado no elemento
    }
  }
}
