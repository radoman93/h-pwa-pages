"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_helper_pagination_helper_ts-src_app_helper_parse_helper_ts-src_app_pages_all-news_all-3d0f16"],{

/***/ 11137:
/*!*********************************************!*\
  !*** ./src/app/helper/pagination.helper.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationHelper": () => (/* binding */ PaginationHelper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let PaginationHelper = class PaginationHelper {
    constructor() {
    }
    static loadData(event, service, store, limit) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (store.shouldLoadMore) {
                    const result = yield service.loadMore();
                    event.target.complete();
                    store.incrementPage();
                    if (result.length < limit) {
                        store.setShouldLoadMore(false);
                        event.target.disabled = true;
                    }
                }
                else {
                    event.target.disabled = true;
                }
            }
            catch (e) {
                console.log('Error:', e);
            }
        });
    }
    static checkExisting(newEl, arr) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const resultArray = arr.filter((item) => item.objectId === newEl.objectId);
                if (resultArray.length > 0) {
                    return true;
                }
                return false;
            }
            catch (e) {
                console.log('Error:', e);
            }
        });
    }
};
PaginationHelper.ctorParameters = () => [];
PaginationHelper = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], PaginationHelper);



/***/ }),

/***/ 4751:
/*!****************************************!*\
  !*** ./src/app/helper/parse.helper.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParseHelper": () => (/* binding */ ParseHelper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);



let ParseHelper = class ParseHelper {
    constructor() {
    }
    static arrayToJSON(parseArray) {
        const jsonArray = [];
        for (const parseObject of parseArray) {
            jsonArray.push(parseObject.toJSON());
        }
        return jsonArray;
    }
    static getParseObjectWithoutData(className, id) {
        try {
            const ObjectTable = parse__WEBPACK_IMPORTED_MODULE_0__.Object.extend(className);
            const object = ObjectTable.createWithoutData(id);
            return object;
        }
        catch (e) {
            console.log('Error: ', e);
            return null;
        }
    }
};
ParseHelper.ctorParameters = () => [];
ParseHelper = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ParseHelper);



/***/ }),

/***/ 63389:
/*!***********************************************************!*\
  !*** ./src/app/pages/all-news/all-news-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllNewsPageRoutingModule": () => (/* binding */ AllNewsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _all_news_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-news.page */ 11468);




const routes = [
    {
        path: '',
        component: _all_news_page__WEBPACK_IMPORTED_MODULE_0__.AllNewsPage
    }
];
let AllNewsPageRoutingModule = class AllNewsPageRoutingModule {
};
AllNewsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AllNewsPageRoutingModule);



/***/ }),

/***/ 16920:
/*!***************************************************!*\
  !*** ./src/app/pages/all-news/all-news.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllNewsPageModule": () => (/* binding */ AllNewsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _all_news_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-news-routing.module */ 63389);
/* harmony import */ var _all_news_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-news.page */ 11468);







let AllNewsPageModule = class AllNewsPageModule {
};
AllNewsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _all_news_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllNewsPageRoutingModule
        ],
        declarations: [_all_news_page__WEBPACK_IMPORTED_MODULE_1__.AllNewsPage]
    })
], AllNewsPageModule);



/***/ }),

/***/ 11468:
/*!*************************************************!*\
  !*** ./src/app/pages/all-news/all-news.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllNewsPage": () => (/* binding */ AllNewsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _all_news_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-news.page.html?ngResource */ 9443);
/* harmony import */ var _all_news_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-news.page.scss?ngResource */ 75763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _store_news_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/news.store */ 35862);
/* harmony import */ var _service_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/news.service */ 25549);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);







let AllNewsPage = class AllNewsPage {
    // loading = false;
    constructor(newsStore, newsService, router) {
        this.newsStore = newsStore;
        this.newsService = newsService;
        this.router = router;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.newsService.getAllNews();
        });
    }
    selectNews(news) {
        this.newsStore.setSelectedNews(news);
        this.router.navigate(['/news']);
    }
};
AllNewsPage.ctorParameters = () => [
    { type: _store_news_store__WEBPACK_IMPORTED_MODULE_2__.NewsStore },
    { type: _service_news_service__WEBPACK_IMPORTED_MODULE_3__.NewsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AllNewsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-all-news',
        template: _all_news_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_all_news_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AllNewsPage);



/***/ }),

/***/ 75763:
/*!**************************************************************!*\
  !*** ./src/app/pages/all-news/all-news.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".noData {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  font-weight: bold;\n  font-size: 20px;\n  align-items: center;\n}\n\n.newsContainer {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.newsCardContent {\n  padding-top: 10px;\n  padding-bottom: 5px;\n  text-align: left;\n}\n\n.newsCard {\n  height: 500px !important;\n}\n\n.newsCardTitle {\n  font-size: 15pt;\n}\n\n.newsCardSubtitle {\n  font-size: 9pt;\n  padding-top: 5px;\n  height: 3em;\n  overflow: hidden;\n}\n\n.newsPhoto {\n  height: 400px !important;\n  object-fit: cover !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1uZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBSUE7RUFDRSx3QkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBS0E7RUFDRSx3QkFBQTtFQUVBLDRCQUFBO0FBSEYiLCJmaWxlIjoiYWxsLW5ld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vRGF0YXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5ld3NDb250YWluZXJ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcbi5uZXdzQ2FyZENvbnRlbnR7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLm5ld3NDYXJkIHtcclxuICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy93aWR0aDogMzUwcHggIWltcG9ydGFudDtcclxufVxyXG4ubmV3c0NhcmRUaXRsZXtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbn1cclxuXHJcbi5uZXdzQ2FyZFN1YnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogOXB0O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgaGVpZ2h0OiAzZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbi5uZXdzUGhvdG8ge1xyXG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcclxuICAvL3dpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 9443:
/*!**************************************************************!*\
  !*** ./src/app/pages/all-news/all-news.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header translucent=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title style=\"background-color: #f5f5f3\">\r\n      All News\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <ion-card *ngFor=\"let news of newsStore.news\" class=\"newsCard\" (click)=\"selectNews(news)\">\r\n    <img class=\"newsPhoto\" [src]=\"news.photos[0]\">\r\n    <ion-card-content class=\"newsCardContent\">\r\n      <ion-card-title class=\"newsCardTitle\">{{news.title}}</ion-card-title>\r\n      <ion-card-subtitle><p class=\"newsCardSubtitle\">{{(news.description|slice:0:55) + '..'}}</p>\r\n      </ion-card-subtitle>\r\n    </ion-card-content>\r\n    <br>\r\n  </ion-card>\r\n\r\n  <div class=\"noData\" *ngIf=\"newsStore.news.length===0\">\r\n    <p>There are currently no news</p>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_helper_pagination_helper_ts-src_app_helper_parse_helper_ts-src_app_pages_all-news_all-3d0f16.js.map