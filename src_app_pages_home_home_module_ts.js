"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 96610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 10678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 57994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 96610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 10678);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 10678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 12260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helper_modal_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/modal.helper */ 15304);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/settings.store */ 16322);
/* harmony import */ var _helper_settings_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/settings.helper */ 72941);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/user.store */ 31518);
/* harmony import */ var _service_news_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/news.service */ 25549);
/* harmony import */ var _store_news_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/news.store */ 35862);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _service_lesson_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/lesson.service */ 73677);













let HomePage = class HomePage {
    constructor(lessonService, newsService, newsStore, userStore, modalHelper, settingsStore, settingsHelper, router) {
        this.lessonService = lessonService;
        this.newsService = newsService;
        this.newsStore = newsStore;
        this.userStore = userStore;
        this.modalHelper = modalHelper;
        this.settingsStore = settingsStore;
        this.settingsHelper = settingsHelper;
        this.router = router;
        this.user = parse__WEBPACK_IMPORTED_MODULE_5__.User.current();
        this.sliderOptions = {
            initialSlide: 0,
            slidesPerView: 1.2,
            spaceBetween: 2.5
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.userStore.setUser(this.user.toJSON());
            yield this.settingsHelper.loadSettings();
            yield this.newsService.getAllNews();
            yield this.lessonService.getAllLessons();
        });
    }
    selectNews(news) {
        this.newsStore.setSelectedNews(news);
        this.router.navigate(['/news']);
    }
};
HomePage.ctorParameters = () => [
    { type: _service_lesson_service__WEBPACK_IMPORTED_MODULE_9__.LessonService },
    { type: _service_news_service__WEBPACK_IMPORTED_MODULE_7__.NewsService },
    { type: _store_news_store__WEBPACK_IMPORTED_MODULE_8__.NewsStore },
    { type: _store_user_store__WEBPACK_IMPORTED_MODULE_6__.UserStore },
    { type: _helper_modal_helper__WEBPACK_IMPORTED_MODULE_2__.ModalHelper },
    { type: _store_settings_store__WEBPACK_IMPORTED_MODULE_3__.SettingsStore },
    { type: _helper_settings_helper__WEBPACK_IMPORTED_MODULE_4__.SettingsHelper },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 12260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".cardSubtitle {\n  font-size: 9pt;\n}\n\n.cardTitle {\n  font-size: 10pt;\n}\n\n.cardArrowCol {\n  text-align: right;\n  align-self: center;\n  font-size: 15pt;\n}\n\n.customHeader {\n  border-radius: 0px 0px 20px 20px;\n  background-color: #48BCFA;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.headerLogo {\n  font-size: 30pt;\n  color: white;\n  font-weight: bold;\n}\n\n.headerGrid {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  place-content: space-between;\n}\n\n.headerVoucherButton {\n  width: 90%;\n}\n\n.headerVoucherRow {\n  justify-content: center;\n}\n\n.primaryButton {\n  color: white;\n  --background: #48697A;\n  font-weight: bolder;\n}\n\n.headerRowSettings {\n  justify-content: flex-end;\n}\n\n.headerSettings {\n  color: white;\n  font-size: 15pt;\n}\n\n.headerMoney {\n  color: white;\n  font-weight: bold;\n}\n\n.headerText {\n  font-size: 15pt;\n  color: white;\n  font-weight: bolder;\n}\n\n.newsCardContent {\n  padding-top: 10px;\n  padding-bottom: 5px;\n  text-align: left;\n}\n\n.newsCard {\n  height: 390px !important;\n}\n\n.newsCardTitle {\n  font-size: 15pt;\n}\n\n.newsCardSubtitle {\n  font-size: 9pt;\n  padding-top: 5px;\n  height: 3em;\n  overflow: hidden;\n}\n\n.newsPhoto {\n  width: 100%;\n  height: 75% !important;\n  object-fit: cover !important;\n}\n\n.subtitleDiv {\n  padding-left: 15px;\n  padding-right: 15px;\n  display: flex;\n  justify-content: space-between;\n  padding-top: 15px;\n  align-items: center;\n}\n\n.subtitle {\n  font-weight: 900;\n  font-size: 20pt;\n}\n\n.seeAll {\n  font-weight: 900;\n  color: #45B6F1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFHQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFKRjs7QUFZQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQVRGOztBQVlBO0VBQ0UsVUFBQTtBQVRGOztBQVlBO0VBQ0UsdUJBQUE7QUFURjs7QUFZQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBVEY7O0FBWUE7RUFDRSx5QkFBQTtBQVRGOztBQVlBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFURjs7QUFZQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQVRGOztBQVlBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVRGOztBQW1CQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWhCRjs7QUFvQkE7RUFDRSx3QkFBQTtBQWpCRjs7QUF1QkE7RUFDRSxlQUFBO0FBcEJGOztBQXVCQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXBCRjs7QUF3QkE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFFQSw0QkFBQTtBQXRCRjs7QUF5QkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBdEJGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRTdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiA5cHQ7XHJcbn1cclxuXHJcbi5jYXJkVGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG5cclxuLmNhcmRBcnJvd0NvbCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVwdDtcclxufVxyXG5cclxuXHJcbi5jdXN0b21IZWFkZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OEJDRkE7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXJUaXRsZSB7XHJcblxyXG59XHJcblxyXG4uaGVhZGVyTG9nbyB7XHJcbiAgZm9udC1zaXplOiAzMHB0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG4gIC8vZm9udC1mYW1pbHk6IHBhZG1hYS1Cb2xkLjEuMTtcclxufVxyXG5cclxuLmhlYWRlclJvdyB7XHJcbiAgLy9qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlckdyaWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGxhY2UtY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmhlYWRlclZvdWNoZXJCdXR0b24ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5oZWFkZXJWb3VjaGVyUm93IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnByaW1hcnlCdXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6ICM0ODY5N0E7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmhlYWRlclJvd1NldHRpbmdzIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uaGVhZGVyU2V0dGluZ3Mge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbn1cclxuXHJcbi5oZWFkZXJNb25leSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuXHJcbi5oZWFkZXJUZXh0IHtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXJcclxufVxyXG5cclxuLm5ld3NDb250YWluZXIge1xyXG4gIC8vaGVpZ2h0OiA5MCU7XHJcbiAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gIC8vZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcbi5uZXdzQ2FyZENvbnRlbnQge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuXHJcbi5uZXdzQ2FyZCB7XHJcbiAgaGVpZ2h0OiAzOTBweCAhaW1wb3J0YW50O1xyXG4gIC8vaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAvL3dpZHRoOiAxMDAlO1xyXG4gIC8vd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZXdzQ2FyZFRpdGxlIHtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbn1cclxuXHJcbi5uZXdzQ2FyZFN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDlwdDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGhlaWdodDogM2VtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4ubmV3c1Bob3RvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDc1JSAhaW1wb3J0YW50O1xyXG4gIC8vd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1YnRpdGxlRGl2IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiAyMHB0O1xyXG59XHJcblxyXG4uc2VlQWxsIHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiAjNDVCNkYxO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<!--<ion-header class=\"customHeader\" mode=\"ios\">-->\r\n<!--</ion-header>-->\r\n<ion-header style=\"background-color: #f5f5f3\">\r\n  <div class=\"customHeader ion-padding\">\r\n    <ion-grid class=\"headerGrid\">\r\n      <ion-row class=\"headerRowSettings\">\r\n<!--        <ion-icon class=\"headerSettings\" name=\"settings\"></ion-icon>-->\r\n      </ion-row>\r\n      <ion-row class=\"headerRow\">\r\n        <span class=\"headerText\">Dostupni Bilans</span>\r\n      </ion-row>\r\n      <ion-row class=\"headerRow\">\r\n        <span class=\"headerText\">{{user.attributes.points}} Poena</span>\r\n      </ion-row>\r\n      <ion-row class=\"headerVoucherRow\">\r\n        <ion-button (click)=\"modalHelper.openSoldModal()\" class=\"primaryButton headerVoucherButton\" expand=\"block\">Prijavi prodaju\r\n          <ion-icon style=\"padding-left: 5px\" name=\"clipboard-outline\"></ion-icon>\r\n        </ion-button>\r\n        <!--        <span class=\"headerText\">Prijavi vaucere da povecas balans</span>-->\r\n\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n  <div class=\"newsContainer\">\r\n    <div class=\"subtitleDiv\">\r\n      <span class=\"subtitle\">Vesti</span>\r\n      <span routerLink=\"/all-news\" class=\"seeAll\" style=\"float: right\">Prikaži Sve</span>\r\n    </div>\r\n    <ion-slides [options]=\"sliderOptions\" pager=\"false\">\r\n      <ion-slide *ngFor=\"let news of newsStore.news\">\r\n        <ion-card class=\"newsCard\" (click)=\"selectNews(news)\">\r\n          <img class=\"newsPhoto\" [src]=\"news.photos[0]\">\r\n          <ion-card-content class=\"newsCardContent\">\r\n            <ion-card-title class=\"newsCardTitle\">{{news.title}}</ion-card-title>\r\n            <ion-card-subtitle><p class=\"newsCardSubtitle\">{{(news.description|slice:0:35) + '..'}}</p>\r\n            </ion-card-subtitle>\r\n          </ion-card-content>\r\n          <br>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n<ion-footer>\r\n\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map