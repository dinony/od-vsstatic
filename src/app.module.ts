import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {ScrollComponent} from './scroll/scroll.component';

import {VirtualScrollModule} from 'od-virtualscroll';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ScrollComponent, AboutComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ScrollComponent},
      {path: 'about', component: AboutComponent}
    ], {useHash: true}),

    VirtualScrollModule
  ]
})
export class AppModule {}
