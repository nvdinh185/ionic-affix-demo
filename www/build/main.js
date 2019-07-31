webpackJsonp([0],{

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cards/cards.module": [
		177
	],
	"../pages/dividers/dividers.module": [
		199
	],
	"../pages/headers/headers.module": [
		200
	],
	"../pages/refresher/refresher.module": [
		202
	],
	"../pages/scroll/scroll.module": [
		203
	],
	"../pages/segment/segments.module": [
		204
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 176;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPageModule", function() { return CardsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion_affix__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CardsPageModule = (function () {
    function CardsPageModule() {
    }
    CardsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cards__["a" /* CardsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cards__["a" /* CardsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ion_affix__["a" /* IonAffixModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__cards__["a" /* CardsPage */]
            ]
        })
    ], CardsPageModule);
    return CardsPageModule;
}());

//# sourceMappingURL=cards.module.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividersPageModule", function() { return DividersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion_affix__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dividers__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DividersPageModule = (function () {
    function DividersPageModule() {
    }
    DividersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dividers__["a" /* DividersPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__dividers__["a" /* DividersPage */]),
                __WEBPACK_IMPORTED_MODULE_2_ion_affix__["a" /* IonAffixModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__dividers__["a" /* DividersPage */]
            ]
        })
    ], DividersPageModule);
    return DividersPageModule;
}());

//# sourceMappingURL=dividers.module.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersPageModule", function() { return HeadersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__headers__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion_affix__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeadersPageModule = (function () {
    function HeadersPageModule() {
    }
    HeadersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__headers__["a" /* HeadersPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__headers__["a" /* HeadersPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ion_affix__["a" /* IonAffixModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__headers__["a" /* HeadersPage */]
            ]
        })
    ], HeadersPageModule);
    return HeadersPageModule;
}());

//# sourceMappingURL=headers.module.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeadersPage = (function () {
    function HeadersPage() {
        this.items = Array.from({ length: 15 }, function (value, key) { return key; });
    }
    HeadersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC\ion-affix-demo\src\pages\headers\headers.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>\n\n            Sticky ion-list-header\n\n        </ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding #content>\n\n    <ion-list>\n\n        <ion-list-header ion-affix [content]="content">Header 1</ion-list-header>\n\n        <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n        <ion-list-header ion-affix [content]="content">Header 2</ion-list-header>\n\n        <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n        <ion-list-header ion-affix [content]="content">Header 3</ion-list-header>\n\n        <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n        <ion-list-header ion-affix [content]="content">Header 4</ion-list-header>\n\n        <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC\ion-affix-demo\src\pages\headers\headers.html"*/
        })
    ], HeadersPage);
    return HeadersPage;
}());

//# sourceMappingURL=headers.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefresherPageModule", function() { return RefresherPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion_affix__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__refresher__ = __webpack_require__(387);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RefresherPageModule = (function () {
    function RefresherPageModule() {
    }
    RefresherPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__refresher__["a" /* RefresherPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__refresher__["a" /* RefresherPage */]),
                __WEBPACK_IMPORTED_MODULE_2_ion_affix__["a" /* IonAffixModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__refresher__["a" /* RefresherPage */]
            ]
        })
    ], RefresherPageModule);
    return RefresherPageModule;
}());

//# sourceMappingURL=refresher.module.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollPageModule", function() { return ScrollPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion_affix__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scroll__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ScrollPageModule = (function () {
    function ScrollPageModule() {
    }
    ScrollPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__scroll__["a" /* ScrollPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__scroll__["a" /* ScrollPage */]),
                __WEBPACK_IMPORTED_MODULE_2_ion_affix__["a" /* IonAffixModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__scroll__["a" /* ScrollPage */]
            ]
        })
    ], ScrollPageModule);
    return ScrollPageModule;
}());

//# sourceMappingURL=scroll.module.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentsPageModule", function() { return SegmentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__segments__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion_affix__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SegmentsPageModule = (function () {
    function SegmentsPageModule() {
    }
    SegmentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__segments__["a" /* SegmentsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__segments__["a" /* SegmentsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ion_affix__["a" /* IonAffixModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__segments__["a" /* SegmentsPage */]
            ]
        })
    ], SegmentsPageModule);
    return SegmentsPageModule;
}());

//# sourceMappingURL=segments.module.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(257);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion_affix__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dividers_dividers_module__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cards_cards_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_headers_headers_module__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_segment_segments_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_refresher_refresher_module__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_scroll_scroll_module__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    mode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'cards', segment: 'cards', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/dividers/dividers.module#DividersPageModule', name: 'dividers', segment: 'dividers', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/headers/headers.module#HeadersPageModule', name: 'headers', segment: 'headers', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/refresher/refresher.module#RefresherPageModule', name: 'refresher', segment: 'refresher', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/scroll/scroll.module#ScrollPageModule', name: 'scroll', segment: 'scroll', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/segment/segments.module#SegmentsPageModule', name: 'segments', segment: 'segments', priority: 'high', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_ion_affix__["a" /* IonAffixModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dividers_dividers_module__["DividersPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_cards_cards_module__["CardsPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_headers_headers_module__["HeadersPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_segment_segments_module__["SegmentsPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_refresher_refresher_module__["RefresherPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_scroll_scroll_module__["ScrollPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardsPage = (function () {
    function CardsPage() {
    }
    CardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC\ion-affix-demo\src\pages\cards\cards.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>\n\n            Sticky ion-card\n\n        </ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding #content class="cards-bg social-cards">\n\n    <ion-card>\n\n\n\n        <ion-item ion-affix [content]="content" no-lines>\n\n            <ion-avatar item-start>\n\n                <img src="assets/img/marty-avatar.png">\n\n            </ion-avatar>\n\n            <h2>Marty McFly</h2>\n\n            <p>November 5, 1955</p>\n\n        </ion-item>\n\n\n\n        <img src="assets/img/advance-card-bttf.png">\n\n\n\n        <ion-card-content>\n\n            <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n\n        </ion-card-content>\n\n\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button color="primary" clear small icon-start>\n\n                    <ion-icon name=\'thumbs-up\'></ion-icon>\n\n                    12 Likes\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button color="primary" clear small icon-start>\n\n                    <ion-icon name=\'text\'></ion-icon>\n\n                    4 Comments\n\n                </button>\n\n            </ion-col>\n\n            <ion-col align-self-center text-center>\n\n                <ion-note>\n\n                    11h ago\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n    </ion-card>\n\n\n\n\n\n    <ion-card>\n\n\n\n        <ion-item ion-affix [content]="content" no-lines>\n\n            <ion-avatar item-start>\n\n                <img src="assets/img/sarah-avatar.png.jpg">\n\n            </ion-avatar>\n\n            <h2>Sarah Connor</h2>\n\n            <p>May 12, 1984</p>\n\n        </ion-item>\n\n\n\n        <img src="assets/img/advance-card-tmntr.jpg">\n\n\n\n        <ion-card-content>\n\n            <p>I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.</p>\n\n        </ion-card-content>\n\n\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button color="primary" clear small icon-start>\n\n                    <ion-icon name=\'thumbs-up\'></ion-icon>\n\n                    30 Likes\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button color="primary" clear small icon-start>\n\n                    <ion-icon name=\'text\'></ion-icon>\n\n                    64 Comments\n\n                </button>\n\n            </ion-col>\n\n            <ion-col align-self-center text-center>\n\n                <ion-note>\n\n                    30yr ago\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n    </ion-card>\n\n\n\n\n\n    <ion-card>\n\n\n\n        <ion-item ion-affix [content]="content" no-lines>\n\n            <ion-avatar item-start>\n\n                <img src="assets/img/ian-avatar.png">\n\n            </ion-avatar>\n\n            <h2>Dr. Ian Malcolm</h2>\n\n            <p>June 28, 1990</p>\n\n        </ion-item>\n\n\n\n        <img src="assets/img/advance-card-jp.jpg">\n\n\n\n        <ion-card-content>\n\n            <p>Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.</p>\n\n        </ion-card-content>\n\n\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button color="primary" clear small icon-start>\n\n                    <ion-icon name=\'thumbs-up\'></ion-icon>\n\n                    46 Likes\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button color="primary" clear small icon-start>\n\n                    <ion-icon name=\'text\'></ion-icon>\n\n                    66 Comments\n\n                </button>\n\n            </ion-col>\n\n            <ion-col align-self-center text-center>\n\n                <ion-note>\n\n                    2d ago\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n    </ion-card>\n\n</ion-content>\n\n<style>\n\n    .social-cards ion-col {\n\n        padding: 0;\n\n    }\n\n</style>\n\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC\ion-affix-demo\src\pages\cards\cards.html"*/
        })
    ], CardsPage);
    return CardsPage;
}());

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DividersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DividersPage = (function () {
    function DividersPage() {
        this.items = Array.from({ length: 15 }, function (value, key) { return key; });
    }
    DividersPage.prototype.test = function () {
        alert('Click handler works!');
    };
    DividersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC\ion-affix-demo\src\pages\dividers\dividers.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>\n\n            Sticky ion-item-divider\n\n        </ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding #content>\n\n    <ion-item-group>\n\n        <ion-item-divider ion-affix [content]="content" (click)="test()">Group 1 (click me!)</ion-item-divider>\n\n        <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n    </ion-item-group>\n\n    <ion-item-group>\n\n        <ion-item-divider ion-affix [content]="content">Group 2</ion-item-divider>\n\n        <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n    </ion-item-group>\n\n    <ion-list>\n\n        <ion-item-divider>Group 3 (non sticky)</ion-item-divider>\n\n        <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n    </ion-list>\n\n    <ion-item-group>\n\n        <ion-item-divider ion-affix [content]="content">Group 4</ion-item-divider>\n\n        <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n    </ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC\ion-affix-demo\src\pages\dividers\dividers.html"*/
        })
    ], DividersPage);
    return DividersPage;
}());

//# sourceMappingURL=dividers.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefresherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RefresherPage = (function () {
    function RefresherPage() {
        this.items = Array.from({ length: 15 }, function (value, key) { return key; });
    }
    RefresherPage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    RefresherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC\ion-affix-demo\src\pages\refresher\refresher.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>\n\n            Sticky ion-list-header\n\n        </ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content #content>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingText="Pull to refresh" refreshingText="Refreshing..."></ion-refresher-content>\n\n    </ion-refresher>\n\n    <ion-list>\n\n        <ion-list-header ion-affix [content]="content">Header 1 (pull down to refresh)</ion-list-header>\n\n        <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n        <ion-list-header ion-affix [content]="content">Header 2</ion-list-header>\n\n        <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n        <ion-list-header>Header 3 (non sticky)</ion-list-header>\n\n        <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n        <ion-list-header ion-affix [content]="content">Header 4</ion-list-header>\n\n        <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC\ion-affix-demo\src\pages\refresher\refresher.html"*/
        })
    ], RefresherPage);
    return RefresherPage;
}());

//# sourceMappingURL=refresher.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ScrollPage = (function () {
    function ScrollPage() {
        this.items = Array.from({ length: 15 }, function (value, key) { return key; });
    }
    ScrollPage.prototype.test = function () {
        alert('Click handler works!');
    };
    ScrollPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC\ion-affix-demo\src\pages\scroll\scroll.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>\n\n            Sticky w/ ion-scroll\n\n        </ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-scroll scrollY="true" style="width: 100%; height: 50%; overflow: hidden" #content>\n\n        <ion-list>\n\n            <ion-list-header ion-affix [content]="content" (click)="test()">Header 1 (click me!)</ion-list-header>\n\n            <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n        </ion-list>\n\n        <ion-list>\n\n            <ion-list-header #header ion-affix [content]="content">Header 2</ion-list-header>\n\n            <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n        </ion-list>\n\n        <ion-list>\n\n            <ion-list-header>Header 3 (non sticky)</ion-list-header>\n\n            <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n        </ion-list>\n\n        <ion-list>\n\n            <ion-list-header>Header 4</ion-list-header>\n\n            <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n        </ion-list>\n\n    </ion-scroll>\n\n    <ion-slides style="height: 50%">\n\n        <ion-slide>\n\n            <h1>Slide 1</h1>\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <h1>Slide 2</h1>\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <h1>Slide 3</h1>\n\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC\ion-affix-demo\src\pages\scroll\scroll.html"*/
        })
    ], ScrollPage);
    return ScrollPage;
}());

//# sourceMappingURL=scroll.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SegmentsPage = (function () {
    function SegmentsPage() {
        this.items = Array.from({ length: 15 }, function (value, key) { return key; });
        this.page = 'page1';
    }
    SegmentsPage.prototype.test = function () {
        alert('Click handler works!');
    };
    SegmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC\ion-affix-demo\src\pages\segment\segments.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Sticky w/ ion-segment\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n        <ion-segment [(ngModel)]="page">\n\n            <ion-segment-button value="page1">\n\n                Items\n\n            </ion-segment-button>\n\n            <ion-segment-button value="page2">\n\n                More items\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding #content>\n\n    <div [ngSwitch]="page">\n\n        <div *ngSwitchCase="\'page1\'">\n\n            <ion-list>\n\n                <ion-list-header ion-affix [content]="content" (click)="test()">Header 1 (click me!)</ion-list-header>\n\n                <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n            </ion-list>\n\n            <ion-list>\n\n                <ion-list-header ion-affix [content]="content">Header 2</ion-list-header>\n\n                <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n            </ion-list>\n\n            <ion-list>\n\n                <ion-list-header>Header 3 (non sticky)</ion-list-header>\n\n                <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n            </ion-list>\n\n            <ion-list>\n\n                <ion-list-header ion-affix [content]="content">Header 4</ion-list-header>\n\n                <ion-item *ngFor="let item of items">{{item}}</ion-item>\n\n            </ion-list>\n\n        </div>\n\n        <div *ngSwitchCase="\'page2\'">\n\n            <ion-list>\n\n                <ion-list-header ion-affix [content]="content">Other header</ion-list-header>\n\n                <ion-item>A</ion-item>\n\n                <ion-item>B</ion-item>\n\n                <ion-item>C</ion-item>\n\n                <ion-item>D</ion-item>\n\n                <ion-item>E</ion-item>\n\n                <ion-item>F</ion-item>\n\n                <ion-item>G</ion-item>\n\n                <ion-item>H</ion-item>\n\n                <ion-item>I</ion-item>\n\n                <ion-item>J</ion-item>\n\n                <ion-item>K</ion-item>\n\n            </ion-list>\n\n            <ion-list>\n\n                <ion-list-header ion-affix [content]="content">Header 2</ion-list-header>\n\n                <ion-item>Test 1</ion-item>\n\n                <ion-item>Test 2</ion-item>\n\n                <ion-item>Test 3</ion-item>\n\n                <ion-item>Test 4</ion-item>\n\n                <ion-item>Test 5</ion-item>\n\n                <ion-item>Test 6</ion-item>\n\n                <ion-item>Test 7</ion-item>\n\n                <ion-item>Test 8</ion-item>\n\n                <ion-item>Test 9</ion-item>\n\n                <ion-item>Test 10</ion-item>\n\n                <ion-item>Test 11</ion-item>\n\n                <ion-item>Test 12</ion-item>\n\n                <ion-item>Test 13</ion-item>\n\n                <ion-item>Test 14</ion-item>\n\n                <ion-item>Test 15</ion-item>\n\n                <ion-item>Test 16</ion-item>\n\n                <ion-item>Test 17</ion-item>\n\n            </ion-list>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC\ion-affix-demo\src\pages\segment\segments.html"*/
        })
    ], SegmentsPage);
    return SegmentsPage;
}());

//# sourceMappingURL=segments.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_headers_headers__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_headers_headers__["a" /* HeadersPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC\ion-affix-demo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC\ion-affix-demo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[248]);
//# sourceMappingURL=main.js.map