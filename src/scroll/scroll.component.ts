import {Component} from '@angular/core';

import {Observable, of, range} from 'rxjs';
import {reduce} from 'rxjs/operators';

@Component({
  selector: 'od-scroll',
  styleUrls: ['src/scroll/scroll.component.css'],
  template: `
    <div class="outer-container">
      <div class="inner-container">
        <div class="header">
          <h1>od-virtualscroll</h1>
          <a routerLink="/about">about &#187;</a>
        </div>
        <div class="border-wrapper">
          <od-virtualscroll [vsData]="data$" [vsOptions]="options$">
            <ng-template let-item let-row="row" let-column="column">
              <div class="cell">
                <div class="cell-info">
                  <span>Row: {{row}}</span><br>
                  <span>Column: {{column}}</span>
                </div>
                {{item}}
              </div>
            </ng-template>
          </od-virtualscroll>
        <div>
      </div>
    </div>`
})
export class ScrollComponent {
  data$: Observable<number[]> = range(0, 100000).pipe(reduce((acc, cur) => { acc.push(cur); return acc; }, []));
  options$ = of({itemWidth: 202, itemHeight: 202, numAdditionalRows: 1});
}
