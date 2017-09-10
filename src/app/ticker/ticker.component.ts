import { Component, Input, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css'],
  animations: [
    trigger('slideOut', [
      transition(':leave', [
        style({
          marginLeft: 0,
          opacity: 1
        }),
        animate('1000ms ease-in-out', style({
          marginLeft: '-324px',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class TickerComponent implements OnInit {
  @Input('stocks') _stocks: any = [];
  stocks: any = [];
  interval: any;
  page: number = 0;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.nextStock();
    }, 3000);
  }

  ngOnChanges(): void {
    if (this._stocks.length && this.stocks.length < 30) {
      if (this.page * 100 > this._stocks.length) {
        this.page = 0;
      }
      let additions = this._stocks.slice(this.page * 100, (this.page + 1) * 100);
      this.stocks.push(...additions);
      this.page++;
    }
  }

  private nextStock(): void {
    this.stocks.splice(0, 1);
  }
}
