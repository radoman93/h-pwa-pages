"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_news_news_module_ts"],{

/***/ 10806:
/*!***************************************************!*\
  !*** ./src/app/pages/news/news-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPageRoutingModule": () => (/* binding */ NewsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.page */ 12458);




const routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_0__.NewsPage
    }
];
let NewsPageRoutingModule = class NewsPageRoutingModule {
};
NewsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewsPageRoutingModule);



/***/ }),

/***/ 26331:
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPageModule": () => (/* binding */ NewsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-routing.module */ 10806);
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.page */ 12458);







let NewsPageModule = class NewsPageModule {
};
NewsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _news_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsPageRoutingModule
        ],
        declarations: [_news_page__WEBPACK_IMPORTED_MODULE_1__.NewsPage]
    })
], NewsPageModule);



/***/ }),

/***/ 12458:
/*!*****************************************!*\
  !*** ./src/app/pages/news/news.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPage": () => (/* binding */ NewsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _news_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.page.html?ngResource */ 64520);
/* harmony import */ var _news_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.page.scss?ngResource */ 20402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _store_news_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/news.store */ 35862);





let NewsPage = class NewsPage {
    constructor(newsStore) {
        this.newsStore = newsStore;
    }
    ngOnInit() {
    }
};
NewsPage.ctorParameters = () => [
    { type: _store_news_store__WEBPACK_IMPORTED_MODULE_2__.NewsStore }
];
NewsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-news',
        template: _news_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_news_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewsPage);



/***/ }),

/***/ 20402:
/*!******************************************************!*\
  !*** ./src/app/pages/news/news.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".customHeader {\n  max-height: 350px;\n  width: 100%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJuZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21IZWFkZXJ7XHJcbiAgbWF4LWhlaWdodDogMzUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 64520:
/*!******************************************************!*\
  !*** ./src/app/pages/news/news.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header translucent=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen=\"true\">\r\n  <img [src]=\"newsStore.selectedNews.photos[0]\" class=\"customHeader\">\r\n\r\n  <div class=\"ion-padding\">\r\n    <h1>{{newsStore.selectedNews.title}}</h1>\r\n    <p>{{newsStore.selectedNews.description}}</p>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_news_news_module_ts.js.map