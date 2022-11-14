"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sold_sold_module_ts"],{

/***/ 40912:
/*!***************************************************!*\
  !*** ./src/app/pages/sold/sold-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoldPageRoutingModule": () => (/* binding */ SoldPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sold_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sold.page */ 4325);




const routes = [
    {
        path: '',
        component: _sold_page__WEBPACK_IMPORTED_MODULE_0__.SoldPage
    }
];
let SoldPageRoutingModule = class SoldPageRoutingModule {
};
SoldPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SoldPageRoutingModule);



/***/ }),

/***/ 26779:
/*!*******************************************!*\
  !*** ./src/app/pages/sold/sold.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoldPageModule": () => (/* binding */ SoldPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sold_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sold-routing.module */ 40912);
/* harmony import */ var _sold_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sold.page */ 4325);
/* harmony import */ var _module_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/shared.module */ 86346);








let SoldPageModule = class SoldPageModule {
};
SoldPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _sold_routing_module__WEBPACK_IMPORTED_MODULE_0__.SoldPageRoutingModule,
            _module_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        exports: [
            _sold_page__WEBPACK_IMPORTED_MODULE_1__.SoldPage
        ],
        declarations: [_sold_page__WEBPACK_IMPORTED_MODULE_1__.SoldPage]
    })
], SoldPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_sold_sold_module_ts.js.map