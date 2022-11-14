"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_helper_pagination_helper_ts-src_app_helper_parse_helper_ts-src_app_pages_voucher-hist-4199c4"],{

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

/***/ 31861:
/*!*************************************************************************!*\
  !*** ./src/app/pages/voucher-history/voucher-history-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherHistoryPageRoutingModule": () => (/* binding */ VoucherHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _voucher_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-history.page */ 31300);




const routes = [
    {
        path: '',
        component: _voucher_history_page__WEBPACK_IMPORTED_MODULE_0__.VoucherHistoryPage
    }
];
let VoucherHistoryPageRoutingModule = class VoucherHistoryPageRoutingModule {
};
VoucherHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VoucherHistoryPageRoutingModule);



/***/ }),

/***/ 618:
/*!*****************************************************************!*\
  !*** ./src/app/pages/voucher-history/voucher-history.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherHistoryPageModule": () => (/* binding */ VoucherHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _voucher_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-history-routing.module */ 31861);
/* harmony import */ var _voucher_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucher-history.page */ 31300);
/* harmony import */ var _module_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/shared.module */ 86346);








let VoucherHistoryPageModule = class VoucherHistoryPageModule {
};
VoucherHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _voucher_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoucherHistoryPageRoutingModule,
            _module_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_voucher_history_page__WEBPACK_IMPORTED_MODULE_1__.VoucherHistoryPage]
    })
], VoucherHistoryPageModule);



/***/ }),

/***/ 31300:
/*!***************************************************************!*\
  !*** ./src/app/pages/voucher-history/voucher-history.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherHistoryPage": () => (/* binding */ VoucherHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _voucher_history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-history.page.html?ngResource */ 1376);
/* harmony import */ var _voucher_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucher-history.page.scss?ngResource */ 63516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _store_voucherRequest_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/voucherRequest.store */ 40583);
/* harmony import */ var _service_voucher_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/voucher-request.service */ 360);






let VoucherHistoryPage = class VoucherHistoryPage {
    constructor(voucherRequestStore, voucherRequestService) {
        this.voucherRequestStore = voucherRequestStore;
        this.voucherRequestService = voucherRequestService;
    }
    ngOnInit() {
        this.voucherRequestService.getAllVoucherRequests();
    }
};
VoucherHistoryPage.ctorParameters = () => [
    { type: _store_voucherRequest_store__WEBPACK_IMPORTED_MODULE_2__["default"] },
    { type: _service_voucher_request_service__WEBPACK_IMPORTED_MODULE_3__.VoucherRequestService }
];
VoucherHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-voucher-history',
        template: _voucher_history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_voucher_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VoucherHistoryPage);



/***/ }),

/***/ 40583:
/*!***********************************************!*\
  !*** ./src/app/store/voucherRequest.store.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-angular */ 42986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let VoucherRequestStore = class VoucherRequestStore {
    constructor() {
        this.voucherRequests = [];
        this.voucherRequests = [];
    }
    setVoucherRequests(voucherRequests) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Setting voucher requests: ', voucherRequests);
            this.voucherRequests.push(...voucherRequests);
        });
    }
    addVoucherRequest(voucherRequest) {
        console.log('Setting voucher request: ', voucherRequest);
        this.voucherRequests.unshift(voucherRequest);
    }
};
VoucherRequestStore.ctorParameters = () => [];
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], VoucherRequestStore.prototype, "voucherRequests", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], VoucherRequestStore.prototype, "setVoucherRequests", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], VoucherRequestStore.prototype, "addVoucherRequest", null);
VoucherRequestStore = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], VoucherRequestStore);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VoucherRequestStore);


/***/ }),

/***/ 63516:
/*!****************************************************************************!*\
  !*** ./src/app/pages/voucher-history/voucher-history.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".noData {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  font-weight: bold;\n  font-size: 20px;\n  align-items: center;\n}\n\n.newsContainer {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.newsCardContent {\n  padding-top: 10px;\n  padding-bottom: 5px;\n  text-align: left;\n}\n\n.newsCard {\n  height: 500px !important;\n}\n\n.newsCardTitle {\n  font-size: 15pt;\n}\n\n.newsCardSubtitle {\n  font-size: 9pt;\n  padding-top: 5px;\n  height: 3em;\n  overflow: hidden;\n}\n\n.newsPhoto {\n  height: 400px !important;\n  object-fit: cover !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdWNoZXItaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlBO0VBQ0Usd0JBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURGOztBQUtBO0VBQ0Usd0JBQUE7RUFFQSw0QkFBQTtBQUhGIiwiZmlsZSI6InZvdWNoZXItaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9EYXRhe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmV3c0NvbnRhaW5lcntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5cclxuLm5ld3NDYXJkQ29udGVudHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4ubmV3c0NhcmQge1xyXG4gIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxuICAvL3dpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZXdzQ2FyZFRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTVwdDtcclxufVxyXG5cclxuLm5ld3NDYXJkU3VidGl0bGV7XHJcbiAgZm9udC1zaXplOiA5cHQ7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBoZWlnaHQ6IDNlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuLm5ld3NQaG90byB7XHJcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG4gIC8vd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 1376:
/*!****************************************************************************!*\
  !*** ./src/app/pages/voucher-history/voucher-history.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header translucent=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title style=\"background-color: #f5f5f3\">\r\n      Istorija Vaučera\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen=\"true\">\r\n  <app-voucher-request-card *ngFor=\"let voucher of voucherRequestStore.voucherRequests\" [voucher]=\"voucher\">\r\n  </app-voucher-request-card>\r\n\r\n  <div class=\"noData\" *ngIf=\"voucherRequestStore.voucherRequests.length===0\">\r\n    <p>Niste zatražili ni jedan vaučer</p>\r\n  </div>\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_helper_pagination_helper_ts-src_app_helper_parse_helper_ts-src_app_pages_voucher-hist-4199c4.js.map