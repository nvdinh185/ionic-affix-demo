import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { IonAffixModule} from 'ion-affix'

import { MyApp } from './app.component';
import { DividersPageModule } from '../pages/dividers/dividers.module';
import { CardsPageModule } from '../pages/cards/cards.module';
import { HeadersPageModule } from '../pages/headers/headers.module';
import { SegmentsPageModule } from '../pages/segment/segments.module';
import { RefresherPageModule } from '../pages/refresher/refresher.module';
import { ScrollPageModule } from '../pages/scroll/scroll.module';

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        IonAffixModule,
        DividersPageModule,
        CardsPageModule,
        HeadersPageModule,
        SegmentsPageModule,
        RefresherPageModule,
        ScrollPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: []
})
export class AppModule {
}
