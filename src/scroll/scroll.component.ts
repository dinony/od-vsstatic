import {Component} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/reduce';

import {asap} from 'rxjs/scheduler/asap';

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
          <od-virtualscroll [vsData]="data$" [vsOptions]="options$" [vsResize]="resize$">
            <ng-template let-item let-row="row" let-column="column">
              <div class="tile">
                <div class="tile-info">
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
  data$: Observable<number[]> = Observable.range(0, 100000).reduce((acc, cur) => { acc.push(cur); return acc; }, []);
  options$ = Observable.of({itemWidth: 202, itemHeight: 202, numAdditionalRows: 1});
  resize$ = Observable.of('resize', asap); // flexbox
}
