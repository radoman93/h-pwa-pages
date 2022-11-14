"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sold-history_sold-history_module_ts"],{

/***/ 58061:
/*!*******************************************************************!*\
  !*** ./src/app/pages/sold-history/sold-history-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoldHistoryPageRoutingModule": () => (/* binding */ SoldHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sold_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sold-history.page */ 92673);




const routes = [
    {
        path: '',
        component: _sold_history_page__WEBPACK_IMPORTED_MODULE_0__.SoldHistoryPage
    }
];
let SoldHistoryPageRoutingModule = class SoldHistoryPageRoutingModule {
};
SoldHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SoldHistoryPageRoutingModule);



/***/ }),

/***/ 96225:
/*!***********************************************************!*\
  !*** ./src/app/pages/sold-history/sold-history.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoldHistoryPageModule": () => (/* binding */ SoldHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sold_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sold-history-routing.module */ 58061);
/* harmony import */ var _sold_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sold-history.page */ 92673);
/* harmony import */ var _module_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/shared.module */ 86346);








let SoldHistoryPageModule = class SoldHistoryPageModule {
};
SoldHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _sold_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.SoldHistoryPageRoutingModule,
            _module_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_sold_history_page__WEBPACK_IMPORTED_MODULE_1__.SoldHistoryPage]
    })
], SoldHistoryPageModule);



/***/ }),

/***/ 92673:
/*!*********************************************************!*\
  !*** ./src/app/pages/sold-history/sold-history.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoldHistoryPage": () => (/* binding */ SoldHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sold_history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sold-history.page.html?ngResource */ 75235);
/* harmony import */ var _sold_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sold-history.page.scss?ngResource */ 16160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _store_sold_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/sold.store */ 28951);





let SoldHistoryPage = class SoldHistoryPage {
    constructor(soldStore) {
        this.soldStore = soldStore;
    }
    ngOnInit() {
    }
};
SoldHistoryPage.ctorParameters = () => [
    { type: _store_sold_store__WEBPACK_IMPORTED_MODULE_2__["default"] }
];
SoldHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sold-history',
        template: _sold_history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sold_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SoldHistoryPage);



/***/ }),

/***/ 28951:
/*!*************************************!*\
  !*** ./src/app/store/sold.store.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-angular */ 42986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let SoldStore = class SoldStore {
    constructor() {
        this.sold = [];
        this.sold = [];
    }
    setSold(sold) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Setting sold requests: ', sold);
            this.sold.push(...sold);
        });
    }
    addSoldRequest(sold) {
        console.log('Setting sold request: ', sold);
        switch (sold.approved) {
            case 'TO_BE_APPROVED':
                sold.approved = 'Nije još odobreno';
                // code block
                break;
            case 'APPROVED':
                sold.approved = 'Odobreno';
                // code block
                break;
            default:
                sold.approved = 'Nije odobreno';
            // code block
        }
        this.sold.unshift(sold);
    }
};
SoldStore.ctorParameters = () => [];
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], SoldStore.prototype, "sold", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], SoldStore.prototype, "setSold", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], SoldStore.prototype, "addSoldRequest", null);
SoldStore = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], SoldStore);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SoldStore);


/***/ }),

/***/ 16160:
/*!**********************************************************************!*\
  !*** ./src/app/pages/sold-history/sold-history.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".noData {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  font-weight: bold;\n  font-size: 20px;\n  align-items: center;\n}\n\n.newsContainer {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.newsCardContent {\n  padding-top: 10px;\n  padding-bottom: 5px;\n  text-align: left;\n}\n\n.newsCard {\n  height: 500px !important;\n}\n\n.newsCardTitle {\n  font-size: 15pt;\n}\n\n.newsCardSubtitle {\n  font-size: 9pt;\n  padding-top: 5px;\n  height: 3em;\n  overflow: hidden;\n}\n\n.newsPhoto {\n  height: 400px !important;\n  object-fit: cover !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbGQtaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlBO0VBQ0Usd0JBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURGOztBQUtBO0VBQ0Usd0JBQUE7RUFFQSw0QkFBQTtBQUhGIiwiZmlsZSI6InNvbGQtaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9EYXRhe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmV3c0NvbnRhaW5lcntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5cclxuLm5ld3NDYXJkQ29udGVudHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4ubmV3c0NhcmQge1xyXG4gIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxuICAvL3dpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZXdzQ2FyZFRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTVwdDtcclxufVxyXG5cclxuLm5ld3NDYXJkU3VidGl0bGV7XHJcbiAgZm9udC1zaXplOiA5cHQ7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBoZWlnaHQ6IDNlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuLm5ld3NQaG90byB7XHJcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG4gIC8vd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 75235:
/*!**********************************************************************!*\
  !*** ./src/app/pages/sold-history/sold-history.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header translucent=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title style=\"background-color: #f5f5f3\">\r\n      Istorija Prodaja\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen=\"true\">\r\n  <app-sold-card *ngFor=\"let sold of soldStore.sold\" [sold]=\"sold\">\r\n  </app-sold-card>\r\n\r\n  <div class=\"noData\" *ngIf=\"soldStore.sold.length===0\">\r\n    <p>Nista još niste prodali</p>\r\n  </div>\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sold-history_sold-history_module_ts.js.map