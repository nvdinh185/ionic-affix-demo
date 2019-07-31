import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
    name: 'headers',
    priority: 'high'
})
@Component({
    templateUrl: 'headers.html'
})
export class HeadersPage {

    items = Array.from({length: 15}, (value, key) => key);

}
