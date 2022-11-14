"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_helper_pagination_helper_ts-src_app_helper_parse_helper_ts-src_app_helper_pinpoint_he-2b587f"],{

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

/***/ 83002:
/*!*******************************************!*\
  !*** ./src/app/helper/pinpoint.helper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PinpointHelper": () => (/* binding */ PinpointHelper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/settings.store */ 16322);



let PinpointHelper = class PinpointHelper {
    constructor(settingsStore) {
        this.settingsStore = settingsStore;
    }
    getCitiesFromCountry(id) {
        const result = this.settingsStore.cities.filter(city => city.country.objectId === id);
        console.log('Got result: ', result);
        return result;
    }
    getShopsFromCity(id) {
        // const result = this.settingsStore.shops.filter(shop => shop.city.objectId === id);
        // console.log('Got result: ', result);
        return null;
    }
    // getCategoriesFromBrand(id: string){
    //   const result = this.settingsStore.categories.filter(category => category.brand.objectId === id);
    //   console.log('Got result: ', result);
    //   return result;
    // }
    getCategoriesFromModel(brand) {
        console.log('Checking models: ', this.settingsStore.models);
        const categories = [];
        for (const model of this.settingsStore.models) {
            if (model.brand.objectId === brand && !categories.includes(model.category)) {
                categories.push(model.category);
            }
        }
        console.log('Got cat: ', categories);
        return categories;
    }
    getModelsFromCategory(id, brandId, shopId) {
        const models = this.settingsStore.models.filter(model => model.category.objectId === id);
        const result = models.filter((model) => {
            if (model.brand.objectId === brandId) {
                for (const shop of model.shopBrands) {
                    if (shop.objectId === shopId) {
                        return model;
                    }
                }
            }
        });
        console.log('Got result: ', result);
        return result;
    }
};
PinpointHelper.ctorParameters = () => [
    { type: _store_settings_store__WEBPACK_IMPORTED_MODULE_0__.SettingsStore }
];
PinpointHelper = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PinpointHelper);



/***/ }),

/***/ 85901:
/*!********************************************************************!*\
  !*** ./src/app/modals/edit-profile/edit-profile-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageRoutingModule": () => (/* binding */ EditProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page */ 18224);




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__.EditProfilePage
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ 8556:
/*!************************************************************!*\
  !*** ./src/app/modals/edit-profile/edit-profile.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageModule": () => (/* binding */ EditProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-routing.module */ 85901);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page */ 18224);
/* harmony import */ var _module_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/shared.module */ 86346);








let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageRoutingModule,
            _module_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage]
    })
], EditProfilePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_helper_pagination_helper_ts-src_app_helper_parse_helper_ts-src_app_helper_pinpoint_he-2b587f.js.map