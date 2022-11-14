"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_helper_settings_helper_ts"],{

/***/ 72941:
/*!*******************************************!*\
  !*** ./src/app/helper/settings.helper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsHelper": () => (/* binding */ SettingsHelper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_country_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/country.service */ 17173);
/* harmony import */ var _service_city_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/city.service */ 70754);
/* harmony import */ var _service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/shop.service */ 92976);
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/category.service */ 28641);
/* harmony import */ var _service_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/model.service */ 58398);
/* harmony import */ var _service_brand_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/brand.service */ 23477);
/* harmony import */ var _service_voucher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/voucher.service */ 66807);
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/notification.service */ 47320);










let SettingsHelper = class SettingsHelper {
    constructor(modelService, brandService, categoryService, countryService, cityService, shopService, voucherService, notificationService) {
        this.modelService = modelService;
        this.brandService = brandService;
        this.categoryService = categoryService;
        this.countryService = countryService;
        this.cityService = cityService;
        this.shopService = shopService;
        this.voucherService = voucherService;
        this.notificationService = notificationService;
    }
    loadSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield Promise.all([
                this.countryService.getAllCountries(),
                this.cityService.getAllCities(),
                this.shopService.getAllShops(),
                this.categoryService.getAllCategories(),
                // this.brandService.getAllBrands(),
                this.modelService.getAllModels(),
                // this.voucherService.getAllVouchers(),
                // this.notificationService.getAllNotifications()
            ]);
            yield this.brandService.getAllBrands();
        });
    }
};
SettingsHelper.ctorParameters = () => [
    { type: _service_model_service__WEBPACK_IMPORTED_MODULE_4__.ModelService },
    { type: _service_brand_service__WEBPACK_IMPORTED_MODULE_5__.BrandService },
    { type: _service_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService },
    { type: _service_country_service__WEBPACK_IMPORTED_MODULE_0__.CountryService },
    { type: _service_city_service__WEBPACK_IMPORTED_MODULE_1__.CityService },
    { type: _service_shop_service__WEBPACK_IMPORTED_MODULE_2__.ShopService },
    { type: _service_voucher_service__WEBPACK_IMPORTED_MODULE_6__.VoucherService },
    { type: _service_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService }
];
SettingsHelper = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
    })
], SettingsHelper);



/***/ }),

/***/ 23477:
/*!******************************************!*\
  !*** ./src/app/service/brand.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandService": () => (/* binding */ BrandService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/pagination.helper */ 11137);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/settings.store */ 16322);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/parse.helper */ 4751);






let BrandService = class BrandService {
    constructor(settingsStore) {
        this.settingsStore = settingsStore;
    }
    // async getAllBrands() {
    //     try {
    //         const query = new Parse.Query('Brand');
    //         const results: any[] = await query.findAll();
    //         const brands: IBrand[] = ParseHelper.arrayToJSON(results);
    //         console.log('Got brands: ', brands);
    //         // this.settingsStore.setBrands(brands);
    //       for(let el of brands){
    //         if(!await PaginationHelper.checkExisting(el,this.settingsStore.brands)){
    //           this.settingsStore.addBrand(el);
    //         }
    //       }
    //     } catch (e) {
    //         console.log(e);
    //         return 'Cant get brands';
    //     }
    // }
    getAllBrands() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = parse__WEBPACK_IMPORTED_MODULE_0__.User.current();
                yield user.fetchWithInclude(['shopBrand', 'shopBrand.brand']);
                const brands = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_3__.ParseHelper.arrayToJSON(user.get('shopBrand').get('brand'));
                for (let el of brands) {
                    if (!(yield _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_1__.PaginationHelper.checkExisting(el, this.settingsStore.brands))) {
                        this.settingsStore.addBrand(el);
                    }
                }
            }
            catch (e) {
                console.log(e);
                return 'Cant get brands';
            }
        });
    }
};
BrandService.ctorParameters = () => [
    { type: _store_settings_store__WEBPACK_IMPORTED_MODULE_2__.SettingsStore }
];
BrandService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], BrandService);



/***/ }),

/***/ 28641:
/*!*********************************************!*\
  !*** ./src/app/service/category.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/pagination.helper */ 11137);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/settings.store */ 16322);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/parse.helper */ 4751);






let CategoryService = class CategoryService {
    constructor(settingsStore) {
        this.settingsStore = settingsStore;
    }
    getAllCategories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const query = new parse__WEBPACK_IMPORTED_MODULE_0__.Query('Category');
                const results = yield query.findAll();
                const countries = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_3__.ParseHelper.arrayToJSON(results);
                console.log('Got categories: ', countries);
                for (let el of countries) {
                    if (!(yield _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_1__.PaginationHelper.checkExisting(el, this.settingsStore.categories))) {
                        this.settingsStore.addCategory(el);
                    }
                }
                // this.settingsStore.setCategories(countries);
            }
            catch (e) {
                console.log(e);
                return 'Cant get categories';
            }
        });
    }
};
CategoryService.ctorParameters = () => [
    { type: _store_settings_store__WEBPACK_IMPORTED_MODULE_2__.SettingsStore }
];
CategoryService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ 70754:
/*!*****************************************!*\
  !*** ./src/app/service/city.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityService": () => (/* binding */ CityService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/settings.store */ 16322);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/parse.helper */ 4751);
/* harmony import */ var _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/pagination.helper */ 11137);






let CityService = class CityService {
    constructor(settingsStore) {
        this.settingsStore = settingsStore;
    }
    getAllCities() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const query = new parse__WEBPACK_IMPORTED_MODULE_0__.Query('City');
                const results = yield query.findAll();
                const cities = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_2__.ParseHelper.arrayToJSON(results);
                console.log('Got cities: ', cities);
                for (let el of cities) {
                    if (!(yield _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_3__.PaginationHelper.checkExisting(el, this.settingsStore.cities))) {
                        this.settingsStore.addCity(el);
                    }
                }
                // this.settingsStore.setCities(cities);
            }
            catch (e) {
                console.log(e);
                return 'Cant get cities';
            }
        });
    }
};
CityService.ctorParameters = () => [
    { type: _store_settings_store__WEBPACK_IMPORTED_MODULE_1__.SettingsStore }
];
CityService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], CityService);



/***/ }),

/***/ 17173:
/*!********************************************!*\
  !*** ./src/app/service/country.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryService": () => (/* binding */ CountryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/pagination.helper */ 11137);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/settings.store */ 16322);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/parse.helper */ 4751);






let CountryService = class CountryService {
    constructor(settingsStore) {
        this.settingsStore = settingsStore;
    }
    getAllCountries() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const query = new parse__WEBPACK_IMPORTED_MODULE_0__.Query('Country');
                const results = yield query.findAll();
                const countries = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_3__.ParseHelper.arrayToJSON(results);
                for (let el of countries) {
                    if (!(yield _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_1__.PaginationHelper.checkExisting(el, this.settingsStore.countries))) {
                        if (el.name !== 'No Country') {
                            this.settingsStore.addCountry(el);
                        }
                    }
                }
                console.log('Got countries: ', countries);
                // this.settingsStore.setCountries(countries);
            }
            catch (e) {
                console.log(e);
                return 'Cant get countries';
            }
        });
    }
};
CountryService.ctorParameters = () => [
    { type: _store_settings_store__WEBPACK_IMPORTED_MODULE_2__.SettingsStore }
];
CountryService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], CountryService);



/***/ }),

/***/ 58398:
/*!******************************************!*\
  !*** ./src/app/service/model.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelService": () => (/* binding */ ModelService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/settings.store */ 16322);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/parse.helper */ 4751);
/* harmony import */ var _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/pagination.helper */ 11137);






let ModelService = class ModelService {
    constructor(settingsStore) {
        this.settingsStore = settingsStore;
    }
    getAllModels() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const query = new parse__WEBPACK_IMPORTED_MODULE_0__.Query('Model');
                const results = yield query.include('shopBrands').findAll();
                const models = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_2__.ParseHelper.arrayToJSON(results);
                console.log('Got models: ', models);
                for (let el of models) {
                    if (!(yield _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_3__.PaginationHelper.checkExisting(el, this.settingsStore.models))) {
                        this.settingsStore.addModel(el);
                    }
                }
            }
            catch (e) {
                console.log(e);
                return 'Cant get models';
            }
        });
    }
};
ModelService.ctorParameters = () => [
    { type: _store_settings_store__WEBPACK_IMPORTED_MODULE_1__.SettingsStore }
];
ModelService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ModelService);



/***/ }),

/***/ 47320:
/*!*************************************************!*\
  !*** ./src/app/service/notification.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/parse.helper */ 4751);
/* harmony import */ var _store_notification_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/notification.store */ 79830);
/* harmony import */ var _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/pagination.helper */ 11137);






let NotificationService = class NotificationService {
    constructor(notificationStore) {
        this.notificationStore = notificationStore;
    }
    getAllNotifications() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const query = new parse__WEBPACK_IMPORTED_MODULE_0__.Query('Notification');
                const results = yield query.equalTo('user', parse__WEBPACK_IMPORTED_MODULE_0__.User.current()).descending("createdAt").find();
                const notifications = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_1__.ParseHelper.arrayToJSON(results);
                console.log('Got notifications: ', notifications);
                // this.notificationStore.setNotifications(notifications);
                for (let el of notifications.slice().reverse()) {
                    if (!(yield _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_3__.PaginationHelper.checkExisting(el, this.notificationStore.notifications))) {
                        this.notificationStore.addNotification(el);
                    }
                }
            }
            catch (e) {
                console.log(e);
                return 'Cant get notifications';
            }
        });
    }
};
NotificationService.ctorParameters = () => [
    { type: _store_notification_store__WEBPACK_IMPORTED_MODULE_2__.NotificationStore }
];
NotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ 92976:
/*!*****************************************!*\
  !*** ./src/app/service/shop.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopService": () => (/* binding */ ShopService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/settings.store */ 16322);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/parse.helper */ 4751);
/* harmony import */ var _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/pagination.helper */ 11137);






let ShopService = class ShopService {
    constructor(settingsStore) {
        this.settingsStore = settingsStore;
    }
    getAllShops() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const query = new parse__WEBPACK_IMPORTED_MODULE_0__.Query('Shop');
                const results = yield query.include('brand').findAll();
                const shops = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_2__.ParseHelper.arrayToJSON(results).filter(shop => shop.name !== 'No Shop');
                ;
                console.log('Got shops: ', shops);
                for (let el of shops) {
                    if (!(yield _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_3__.PaginationHelper.checkExisting(el, this.settingsStore.shops))) {
                        this.settingsStore.addShop(el);
                    }
                }
                // this.settingsStore.setShops(shops);
            }
            catch (e) {
                console.log(e);
                return 'Cant get shops';
            }
        });
    }
};
ShopService.ctorParameters = () => [
    { type: _store_settings_store__WEBPACK_IMPORTED_MODULE_1__.SettingsStore }
];
ShopService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ShopService);



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

/***/ 79830:
/*!*********************************************!*\
  !*** ./src/app/store/notification.store.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationStore": () => (/* binding */ NotificationStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-angular */ 42986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let NotificationStore = class NotificationStore {
    constructor() {
        this.notifications = [];
    }
    setNotifications(notification) {
        this.notifications = notification;
    }
    addNotification(notification) {
        this.notifications.unshift(notification);
    }
};
NotificationStore.ctorParameters = () => [];
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], NotificationStore.prototype, "notifications", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], NotificationStore.prototype, "loaded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], NotificationStore.prototype, "setNotifications", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], NotificationStore.prototype, "addNotification", null);
NotificationStore = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], NotificationStore);



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
//# sourceMappingURL=default-src_app_helper_settings_helper_ts.js.map