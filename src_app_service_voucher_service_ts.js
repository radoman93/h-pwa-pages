"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_service_voucher_service_ts"],{

/***/ 66807:
/*!********************************************!*\
  !*** ./src/app/service/voucher.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherService": () => (/* binding */ VoucherService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_voucher_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/voucher.store */ 12545);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/parse.helper */ 4751);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/user.store */ 31518);
/* harmony import */ var _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/pagination.helper */ 11137);
/* harmony import */ var _store_chart_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/chart.store */ 64852);
/* harmony import */ var _store_voucherRequest_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/voucherRequest.store */ 40583);









let VoucherService = class VoucherService {
    constructor(voucherRequestStore, voucherStore, userStore, chartStore) {
        this.voucherRequestStore = voucherRequestStore;
        this.voucherStore = voucherStore;
        this.userStore = userStore;
        this.chartStore = chartStore;
    }
    getSpecificVouchers(brandID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // const query = new Parse.Query('Voucher');
                // const results: any[] = await query.
            }
            catch (e) {
                console.log('Error: ', e);
            }
        });
    }
    getAllVouchers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const query = new parse__WEBPACK_IMPORTED_MODULE_0__.Query('Voucher');
                const results = yield query.include('brand').findAll();
                const vouchers = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_2__.ParseHelper.arrayToJSON(results);
                console.log('Got vouchers: ', vouchers);
                for (let el of vouchers) {
                    if (!(yield _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_4__.PaginationHelper.checkExisting(el, this.voucherStore.vouchers))) {
                        this.voucherStore.addVoucher(el);
                    }
                }
                // await this.voucherStore.setVouchers(vouchers);
            }
            catch (e) {
                console.log(e);
                return 'Cant get vouchers';
            }
        });
    }
    requestVoucher(voucherRequestData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield parse__WEBPACK_IMPORTED_MODULE_0__.Cloud.run('requestVoucher', { voucherRequestData });
                console.log('Result: ', result);
                this.userStore.changeUserPoints(-voucherRequestData.voucher.points);
                this.userStore.changeUserReservedPoints(voucherRequestData.voucher.points);
                this.chartStore.updateChart();
                // this.voucherRequestStore.addVoucherRequest(voucherRequestData);
                parse__WEBPACK_IMPORTED_MODULE_0__.User.current().fetch();
                // const voucherRequestTable = Parse.Object.extend('Voucher_Request');
                // const voucherRequest = new voucherRequestTable();
                // await voucherRequest.save(voucherRequestData);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
};
VoucherService.ctorParameters = () => [
    { type: _store_voucherRequest_store__WEBPACK_IMPORTED_MODULE_6__["default"] },
    { type: _store_voucher_store__WEBPACK_IMPORTED_MODULE_1__["default"] },
    { type: _store_user_store__WEBPACK_IMPORTED_MODULE_3__.UserStore },
    { type: _store_chart_store__WEBPACK_IMPORTED_MODULE_5__["default"] }
];
VoucherService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], VoucherService);



/***/ }),

/***/ 64852:
/*!**************************************!*\
  !*** ./src/app/store/chart.store.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-angular */ 42986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.store */ 31518);




let ChartStore = class ChartStore {
    constructor(userStore) {
        this.userStore = userStore;
        this.chart = null;
    }
    setChart(chart) {
        this.chart = chart;
    }
    updateChart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (this.chart !== null) {
                this.chart.data.datasets[0].data = [this.userStore.user.points, this.userStore.user.reserved_points];
                this.chart.update();
            }
        });
    }
};
ChartStore.ctorParameters = () => [
    { type: _user_store__WEBPACK_IMPORTED_MODULE_0__.UserStore }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__.observable
], ChartStore.prototype, "chart", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__.action
], ChartStore.prototype, "setChart", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__.action
], ChartStore.prototype, "updateChart", null);
ChartStore = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], ChartStore);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartStore);


/***/ }),

/***/ 12545:
/*!****************************************!*\
  !*** ./src/app/store/voucher.store.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-angular */ 42986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let VoucherStore = class VoucherStore {
    constructor() {
        this.vouchers = [];
        this.vouchers = [];
    }
    setVouchers(vouchers) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Setting vouchers: ', vouchers);
            this.vouchers.push(...vouchers);
        });
    }
    setSelectedVoucher(voucher) {
        console.log('Setting voucher: ', voucher);
        this.selectedVoucher = voucher;
    }
    addVoucher(voucher) {
        this.vouchers.push(voucher);
    }
};
VoucherStore.ctorParameters = () => [];
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], VoucherStore.prototype, "vouchers", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], VoucherStore.prototype, "selectedVoucher", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], VoucherStore.prototype, "setVouchers", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], VoucherStore.prototype, "setSelectedVoucher", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], VoucherStore.prototype, "addVoucher", null);
VoucherStore = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], VoucherStore);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VoucherStore);


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


/***/ })

}]);
//# sourceMappingURL=src_app_service_voucher_service_ts.js.map