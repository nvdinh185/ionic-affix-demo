import { Component } from '@angular/core';

@Component({
    selector: 'page-headers',
    templateUrl: 'headers.html'
})

export class HeadersPage {
    items = Array.from({length: 15}, (value, key) => key);
}
