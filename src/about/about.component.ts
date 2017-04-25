import {Component} from '@angular/core';

@Component({
  selector: 'od-about',
  styleUrls: ['src/about/about.component.css'],
  template: `
    <div class="container">
      <div class="panel">
        <div class="github">
          <span class="npm-cmd">npm i -S od-virtualscroll</span><br>
          <a class="github-btn" href="https://github.com/dinony/od-virtualscroll">GitHub</a>
        </div>

        <a class="twitter-btn" href="https://twitter.com/dinonysaur">@dinonysaur</a>
      </div>
      <a class="back-btn" routerLink="/">&#171; demo</a>
    </div>
  `
})
export class AboutComponent {}
