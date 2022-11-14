"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_register_register_module_ts"],{

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

/***/ 917:
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/register/register-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 19413);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 76029:
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 917);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 19413);
/* harmony import */ var _module_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../module/shared.module */ 86346);








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _module_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 19413:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 85250);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 54390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _validators_pw_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../validators/pw-validation */ 90131);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user.service */ 84981);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/settings.store */ 16322);
/* harmony import */ var _helper_settings_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helper/settings.helper */ 72941);
/* harmony import */ var _helper_pinpoint_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helper/pinpoint.helper */ 83002);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helper/parse.helper */ 4751);












let RegisterPage = class RegisterPage {
    constructor(router, formBuilder, userService, pinpointHelper, settingsStore, settingsHelper) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.pinpointHelper = pinpointHelper;
        this.settingsStore = settingsStore;
        this.settingsHelper = settingsHelper;
        this.registrationForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(6)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            shop: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            shopBrand: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
        }, {
            validators: [
                _validators_pw_validation__WEBPACK_IMPORTED_MODULE_2__.PasswordValidation.matchPassword
            ]
        });
        this.loaded = true;
        this.countries = [];
        this.cities = [];
        this.shops = [];
    }
    sanitizer(event) {
        console.log('event: ', event.data);
        this.registrationForm.get('email').setValue(event.target.value.trim());
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // await this.userService.anonymousLogin();
            yield this.settingsHelper.loadSettings();
            this.countries = this.settingsStore.countries;
            this.cities = [];
            this.shops = this.settingsStore.shops;
        });
    }
    onCountryChange(event) {
        console.log('Got event: ', event.detail.value);
    }
    onCityChange(event) {
        console.log('Got event: ', event.detail.value);
        this.shops = this.pinpointHelper.getShopsFromCity(event.detail.value);
    }
    formInputIsRequired(formInput) {
        if (this.registrationForm.controls[formInput]) {
            if (this.registrationForm.controls[formInput].hasError('required')) {
                return true;
            }
        }
        return false;
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.loaded = false;
                const delay = ms => new Promise(res => setTimeout(res, ms));
                yield delay(1000);
                const country = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_7__.ParseHelper.getParseObjectWithoutData('Country', this.registrationForm.value.country);
                const shopBrand = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_7__.ParseHelper.getParseObjectWithoutData('Shop', this.registrationForm.value.shopBrand);
                this.registerAttributes = {
                    firstName: this.registrationForm.value.firstName.trim(),
                    lastName: this.registrationForm.value.lastName.trim(),
                    email: this.registrationForm.value.email.toLowerCase().trim(),
                    country,
                    shopBrand,
                    city: this.registrationForm.value.city.trim(),
                    shop: this.registrationForm.value.shop.trim(),
                    phoneNumber: this.registrationForm.value.phoneNumber.trim()
                };
                const username = this.registrationForm.value.username.trim();
                const password = this.registrationForm.value.password.trim();
                console.log('attributes are: ', this.registerAttributes);
                this.errorMessage = yield this.userService.register(username, password, this.registerAttributes);
                this.loaded = true;
                console.log('Loaded: ', this.loaded);
                yield delay(1000);
                if (!this.errorMessage) {
                    yield this.router.navigate(['/login']);
                }
            }
            catch (e) {
                this.loaded = true;
                console.log('Error: ', e);
            }
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _helper_pinpoint_helper__WEBPACK_IMPORTED_MODULE_6__.PinpointHelper },
    { type: _store_settings_store__WEBPACK_IMPORTED_MODULE_4__.SettingsStore },
    { type: _helper_settings_helper__WEBPACK_IMPORTED_MODULE_5__.SettingsHelper }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 84981:
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/pagination.helper */ 11137);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/user.store */ 31518);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);






let UserService = class UserService {
    constructor(paginationHelper, userStore, router) {
        this.paginationHelper = paginationHelper;
        this.userStore = userStore;
        this.router = router;
    }
    anonymousLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // await Parse.User.logInWith('anonymous', {authData: {
                //     id: '1'
                //   }});
                const user = yield parse__WEBPACK_IMPORTED_MODULE_0__.AnonymousUtils.logIn();
                console.log('User: ', user);
            }
            catch (e) {
                console.log('Error: ', e);
            }
        });
    }
    login(username, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield parse__WEBPACK_IMPORTED_MODULE_0__.User.logIn(username, password);
                // if (Parse.User.current().get('customer_token'))
                return '';
            }
            catch (e) {
                console.log(e);
                return 'Invalid email or password';
            }
        });
    }
    register(email, password, attributes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield parse__WEBPACK_IMPORTED_MODULE_0__.User.signUp(email, password, attributes);
                return null;
            }
            catch (e) {
                console.log('Error:', e.message);
                return e.message;
            }
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield parse__WEBPACK_IMPORTED_MODULE_0__.User.logOut();
                yield this.router.navigate(['/login']);
            }
            catch (e) {
                console.log('Error:', e);
            }
        });
    }
    // async changePoints(){
    //   try {
    //     await
    //   }catch (e) {
    //     console.log('Error: ', e);
    //   }
    // }
    editUserRequest(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const editTable = parse__WEBPACK_IMPORTED_MODULE_0__.Object.extend('Edit_User_Request');
                const edit = new editTable();
                console.log('Saving request data');
                yield edit.save(data);
                console.log('Request Data saved');
            }
            catch (e) {
                console.log('Error: ', e);
            }
        });
    }
    updateUser(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield parse__WEBPACK_IMPORTED_MODULE_0__.User.current().save(data);
            }
            catch (e) {
                console.log('Error', e);
            }
        });
    }
    saveUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield parse__WEBPACK_IMPORTED_MODULE_0__.User.current().save();
            }
            catch (e) {
                console.log('Error: ', e);
            }
        });
    }
    // async setUserCity(city: string) {
    //     try {
    //         await Parse.User.current().set('city', city);
    //         await Parse.User.current().save();
    //     } catch (e) {
    //         console.log('Error: ', e);
    //     }
    // }
    resetPassword(email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield parse__WEBPACK_IMPORTED_MODULE_0__.User.requestPasswordReset(email);
                return true;
            }
            catch (e) {
                console.log('Error:', e);
                return false;
            }
        });
    }
};
UserService.ctorParameters = () => [
    { type: _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_1__.PaginationHelper },
    { type: _store_user_store__WEBPACK_IMPORTED_MODULE_2__.UserStore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 90131:
/*!*********************************************!*\
  !*** ./src/app/validators/pw-validation.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordValidation": () => (/* binding */ PasswordValidation)
/* harmony export */ });
class PasswordValidation {
    static matchPassword(control) {
        const password = control.get('password').value;
        const confirmPassword = control.get('confirmPassword').value;
        if (password !== confirmPassword) {
            let errors = control.get('confirmPassword').errors;
            if (errors && typeof errors === 'object') {
                Object.assign(errors, {
                    matchPassword: `Passwords don't match`
                });
            }
            else {
                errors = {
                    matchPassword: `Passwords don't match`
                };
            }
            control.get('confirmPassword').setErrors(errors);
        }
        else {
            return null;
        }
    }
}


/***/ }),

/***/ 54390:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #f5f5f3;\n}\nion-toolbar ion-button {\n  text-transform: initial;\n  font-size: 17px;\n}\nion-content {\n  --background: #f5f5f3;\n}\nion-content h1 {\n  text-align: center;\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n  margin-bottom: 15%;\n}\nion-content #form {\n  margin-top: 15%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-button {\n  margin-top: 35px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n  --box-shadow: none;\n}\nion-content p {\n  text-align: center;\n  color: #b6b6b6;\n  margin-top: 40px;\n}\ninput.ng-invalid {\n  border-left: 5px solid red;\n}\ninput.ng-valid {\n  border-left: 5px solid green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFCQUFBO0FBQUY7QUFFRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBSUE7RUFDRSxxQkFBQTtBQURGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZKO0FBSUk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU9BO0VBQ0UsMEJBQUE7QUFKRjtBQU1BO0VBQ0UsNEJBQUE7QUFIRiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcblxyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogIzAxMDEwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICB9XHJcblxyXG4gICNmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNiNmI2YjY7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxufVxyXG5pbnB1dC5uZy1pbnZhbGlke1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG59XHJcbmlucHV0Lm5nLXZhbGlke1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JlZW47XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 85250:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/login\">Log in</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1>Create your<br/>Account</h1>\r\n\r\n  <form [formGroup]=\"registrationForm\" id=\"form\">\r\n    <app-input formControlName=\"firstName\" placeholder=\"Ime\"></app-input>\r\n    <app-form-input-error [form]=\"registrationForm\" formInput='firstName'></app-form-input-error>\r\n    <app-input formControlName=\"lastName\" placeholder=\"Prezime\"></app-input>\r\n    <app-form-input-error [form]=\"registrationForm\" formInput='lastName'></app-form-input-error>\r\n\r\n    <app-input formControlName=\"username\" placeholder=\"Username\"></app-input>\r\n    <app-form-input-error [form]=\"registrationForm\" formInput='username'></app-form-input-error>\r\n\r\n    <app-input [trim]=\"true\" (keydown.space)=\"$event.preventDefault()\" formControlName=\"email\"\r\n               placeholder=\"Email\" email></app-input>\r\n    <app-form-input-error [form]=\"registrationForm\" formInput='email'></app-form-input-error>\r\n\r\n    <ion-item>\r\n      <ion-label>Država</ion-label>\r\n      <ion-select formControlName=\"country\" (ionChange)=\"onCountryChange($event)\" placeholder=\"Select One\">\r\n        <ion-select-option *ngFor=\"let country of countries\"\r\n                           [value]=\"country.objectId\">{{country.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <app-form-input-error [form]=\"registrationForm\" formInput='country'></app-form-input-error>\r\n\r\n\r\n    <app-input formControlName=\"city\" placeholder=\"Grad\"></app-input>\r\n    <app-form-input-error [form]=\"registrationForm\" formInput='city'></app-form-input-error>\r\n\r\n    <ion-item>\r\n      <ion-label>Brend Prodavnice</ion-label>\r\n      <ion-select formControlName=\"shopBrand\" placeholder=\"Select One\">\r\n        <ion-select-option *ngFor=\"let shop of shops\" [value]=\"shop.objectId\">{{shop.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <app-form-input-error [form]=\"registrationForm\" formInput='shopBrand'></app-form-input-error>\r\n\r\n\r\n    <app-input formControlName=\"shop\" placeholder=\"Prodavnica\"></app-input>\r\n    <app-form-input-error [form]=\"registrationForm\" formInput='shop'></app-form-input-error>\r\n\r\n\r\n    <app-input formControlName=\"phoneNumber\" type=\"tel\" placeholder=\"Broj Telefona\"></app-input>\r\n    <app-form-input-error [form]=\"registrationForm\" formInput='phoneNumber'></app-form-input-error>\r\n\r\n    <app-input formControlName=\"password\" type=\"password\" placeholder=\"Password\"></app-input>\r\n    <app-form-input-error [form]=\"registrationForm\" formInput='password'></app-form-input-error>\r\n    <app-input formControlName=\"confirmPassword\" type=\"password\" placeholder=\"Ponovi password\"></app-input>\r\n    <app-form-input-error [form]=\"registrationForm\" formInput='confirmPassword'></app-form-input-error>\r\n    <ion-button [disabled]=\"!registrationForm.valid\" (click)=\"register()\" type=\"submit\"\r\n                expand=\"block\">Join Us\r\n    </ion-button>\r\n  </form>\r\n\r\n  <p>By pressing 'Join Us' you agree to <br/>our terms & conditions.</p>\r\n  <app-kroba-loader [loaded]=\"loaded\"></app-kroba-loader>\r\n\r\n  <app-error-message *ngIf=\"errorMessage\" [message]=\"errorMessage\"></app-error-message>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_register_register_module_ts.js.map