import { Component } from '@angular/core';
import { HeadersPage } from '../pages/headers/headers';
import { RefresherPage } from '../pages/refresher/refresher';
import { CardsPage } from '../pages/cards/cards';
import { DividersPage } from '../pages/dividers/dividers';
import { SegmentsPage } from '../pages/segment/segments';
import { ScrollPage } from '../pages/scroll/scroll';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HeadersPage;

  constructor() {}
}

