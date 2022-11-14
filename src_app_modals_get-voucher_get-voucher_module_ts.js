"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_get-voucher_get-voucher_module_ts"],{

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

/***/ 95917:
/*!******************************************************************!*\
  !*** ./src/app/modals/get-voucher/get-voucher-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetVoucherPageRoutingModule": () => (/* binding */ GetVoucherPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _get_voucher_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-voucher.page */ 11245);




const routes = [
    {
        path: '',
        component: _get_voucher_page__WEBPACK_IMPORTED_MODULE_0__.GetVoucherPage
    }
];
let GetVoucherPageRoutingModule = class GetVoucherPageRoutingModule {
};
GetVoucherPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GetVoucherPageRoutingModule);



/***/ }),

/***/ 42631:
/*!**********************************************************!*\
  !*** ./src/app/modals/get-voucher/get-voucher.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetVoucherPageModule": () => (/* binding */ GetVoucherPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _get_voucher_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-voucher-routing.module */ 95917);
/* harmony import */ var _get_voucher_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-voucher.page */ 11245);
/* harmony import */ var _module_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/shared.module */ 86346);








let GetVoucherPageModule = class GetVoucherPageModule {
};
GetVoucherPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _get_voucher_routing_module__WEBPACK_IMPORTED_MODULE_0__.GetVoucherPageRoutingModule,
            _module_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_get_voucher_page__WEBPACK_IMPORTED_MODULE_1__.GetVoucherPage]
    })
], GetVoucherPageModule);



/***/ }),

/***/ 11245:
/*!********************************************************!*\
  !*** ./src/app/modals/get-voucher/get-voucher.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetVoucherPage": () => (/* binding */ GetVoucherPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _get_voucher_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-voucher.page.html?ngResource */ 46615);
/* harmony import */ var _get_voucher_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-voucher.page.scss?ngResource */ 40817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _store_voucher_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/voucher.store */ 12545);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/parse.helper */ 4751);
/* harmony import */ var _service_voucher_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/voucher.service */ 66807);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/user.store */ 31518);
/* harmony import */ var _store_voucherBrand_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/voucherBrand.store */ 81869);











let GetVoucherPage = class GetVoucherPage {
    constructor(voucherBrandStore, userStore, voucherStore, modalController, voucherService) {
        this.voucherBrandStore = voucherBrandStore;
        this.userStore = userStore;
        this.voucherStore = voucherStore;
        this.modalController = modalController;
        this.voucherService = voucherService;
        this.step = 0;
        this.user = parse__WEBPACK_IMPORTED_MODULE_3__.User.current().toJSON();
        this.vouchers = this.voucherStore.vouchers.filter(v => v.brand.objectId === this.voucherBrandStore.selectedVoucherBrand.objectId);
    }
    ngOnInit() {
    }
    selectVoucher(voucher) {
        this.voucherStore.setSelectedVoucher(voucher);
        this.step++;
    }
    requestVoucher() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.uploaded = false;
                const voucher = yield _helper_parse_helper__WEBPACK_IMPORTED_MODULE_4__.ParseHelper.getParseObjectWithoutData('Voucher', this.voucherStore.selectedVoucher.objectId);
                // const voucherRequest: IVoucherRequestParse = {
                //   voucher,
                //   user: Parse.User.current()
                // };
                const voucherRequest = {
                    voucher: this.voucherStore.selectedVoucher,
                };
                yield this.voucherService.requestVoucher(voucherRequest);
                const delay = ms => new Promise(res => setTimeout(res, ms));
                yield delay(1000);
                this.uploaded = true;
                yield this.closeModal();
                // this.user =
            }
            catch (e) {
                const delay = ms => new Promise(res => setTimeout(res, ms));
                yield delay(1000);
                this.uploaded = true;
                console.log('Error:', e);
            }
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    previousPage() {
        if (this.step !== 0) {
            this.step--;
        }
    }
};
GetVoucherPage.ctorParameters = () => [
    { type: _store_voucherBrand_store__WEBPACK_IMPORTED_MODULE_7__["default"] },
    { type: _store_user_store__WEBPACK_IMPORTED_MODULE_6__.UserStore },
    { type: _store_voucher_store__WEBPACK_IMPORTED_MODULE_2__["default"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _service_voucher_service__WEBPACK_IMPORTED_MODULE_5__.VoucherService }
];
GetVoucherPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-get-voucher',
        template: _get_voucher_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_get_voucher_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GetVoucherPage);



/***/ }),

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


/***/ }),

/***/ 40817:
/*!*********************************************************************!*\
  !*** ./src/app/modals/get-voucher/get-voucher.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".cardSubtitle {\n  font-size: 9pt;\n  text-align: center;\n}\n\n.cardTitle {\n  font-size: 10pt;\n  text-align: center;\n}\n\n.cardArrowCol {\n  text-align: right;\n  align-self: center;\n  font-size: 15pt;\n}\n\n.stepTitle {\n  text-align: center;\n  font-size: 20pt;\n  font-weight: bold;\n}\n\n.image-container {\n  min-height: 200px;\n  background-size: cover;\n}\n\n.one-image {\n  margin: 2px;\n}\n\n.error {\n  text-align: center;\n  color: #aa0505;\n  font-family: Roboto-Bold;\n  font-size: 10pt;\n}\n\n.thumbnail {\n  width: 300px;\n  height: 300px;\n  object-fit: cover;\n}\n\n.addPhotoButton {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.rowCenter {\n  justify-content: center;\n}\n\n.voucherImg {\n  height: 85px;\n}\n\n.gridSpaceAround {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.chosenCardDiv {\n  height: 100%;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC12b3VjaGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUlGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUlGOztBQURBO0VBQ0UsdUJBQUE7QUFJRjs7QUFEQTtFQUNFLFlBQUE7QUFJRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBSUYiLCJmaWxlIjoiZ2V0LXZvdWNoZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRTdWJ0aXRsZXtcclxuICBmb250LXNpemU6IDlwdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5jYXJkVGl0bGV7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZEFycm93Q29se1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbn1cclxuLnN0ZXBUaXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ub25lLWltYWdlIHtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNhYTA1MDU7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90by1Cb2xkO1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG4udGh1bWJuYWlsIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmFkZFBob3RvQnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnJvd0NlbnRlcntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnZvdWNoZXJJbWcge1xyXG4gIGhlaWdodDogODVweDtcclxufVxyXG5cclxuLmdyaWRTcGFjZUFyb3VuZHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5jaG9zZW5DYXJkRGl2e1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 46615:
/*!*********************************************************************!*\
  !*** ./src/app/modals/get-voucher/get-voucher.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"closeModal()\">\r\n        <ion-icon id=\"toolbarBack\" name=\"close-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Request Voucher</ion-title>\r\n    <ion-buttons *ngIf=\"step!==0\" slot=\"start\">\r\n      <ion-button (click)=\"previousPage()\">\r\n        <ion-icon id=\"toolbarBack\" name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"step===0\">\r\n    <app-voucher-card [voucher]=\"voucher\" (click)=\"selectVoucher(voucher)\" *ngFor=\"let voucher of vouchers\">\r\n    </app-voucher-card>\r\n  </div>\r\n  <div class=\"chosenCardDiv\" *ngIf=\"step===1\">\r\n    <app-voucher-card style=\"width: 100%\" [voucher]=\"voucherStore.selectedVoucher\">\r\n    </app-voucher-card>\r\n\r\n  </div>\r\n  <app-kroba-loader [loaded]=\"uploaded\"></app-kroba-loader>\r\n\r\n</ion-content>\r\n<ion-footer *ngIf=\"step===1\" class=\"ion-no-border\" style=\"margin: 0px;\">\r\n  <ion-button *ngIf=\"userStore.user.points>=voucherStore.selectedVoucher.points\" expand=\"block\" (click)=\"requestVoucher()\">Request Voucher</ion-button>\r\n  <ion-button *ngIf=\"userStore.user.points<voucherStore.selectedVoucher.points\" expand=\"block\" disabled=\"true\">Insufficient points</ion-button>\r\n\r\n</ion-footer>\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modals_get-voucher_get-voucher_module_ts.js.map