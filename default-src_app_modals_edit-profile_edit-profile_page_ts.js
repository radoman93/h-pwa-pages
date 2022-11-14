"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modals_edit-profile_edit-profile_page_ts"],{

/***/ 18224:
/*!**********************************************************!*\
  !*** ./src/app/modals/edit-profile/edit-profile.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePage": () => (/* binding */ EditProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page.html?ngResource */ 12876);
/* harmony import */ var _edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page.scss?ngResource */ 73287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/settings.store */ 16322);
/* harmony import */ var _helper_pinpoint_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/pinpoint.helper */ 83002);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper/parse.helper */ 4751);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/user.service */ 84981);










let EditProfilePage = class EditProfilePage {
    constructor(userService, pinpointHelper, modalController, settingsStore) {
        this.userService = userService;
        this.pinpointHelper = pinpointHelper;
        this.modalController = modalController;
        this.settingsStore = settingsStore;
        this.user = parse__WEBPACK_IMPORTED_MODULE_2__.User.current().toJSON();
        this.selectedCountry = this.user.country.objectId;
        this.countries = this.settingsStore.countries;
        this.shops = this.settingsStore.shops;
        console.log('Got user: ', this.settingsStore.countries);
    }
    ngOnInit() {
        console.log('Current user: ', parse__WEBPACK_IMPORTED_MODULE_2__.User.current().toJSON());
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    onCountryChange(event) {
        console.log('Got event: ', event.detail.value);
        this.cities = this.pinpointHelper.getCitiesFromCountry(event.detail.value);
        this.selectedCity = null;
        this.shops = [];
    }
    onCityChange(event) {
        console.log('Got event: ', event.detail.value);
        this.shops = this.pinpointHelper.getShopsFromCity(event.detail.value);
        this.selectedShop = null;
    }
    finishEdit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.uploaded = false;
                const country = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_5__.ParseHelper.getParseObjectWithoutData('Country', this.selectedCountry);
                // const city: Parse.Object = ParseHelper.getParseObjectWithoutData('City', this.selectedCity);
                const shopBrand = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_5__.ParseHelper.getParseObjectWithoutData('Shop', this.selectedShop);
                const registerAttributes = {
                    firstName: this.user.firstName.trim(),
                    lastName: this.user.lastName.trim(),
                    email: this.user.email.toLowerCase().trim(),
                    country,
                    shopBrand,
                    city: this.user.city.trim(),
                    shop: this.user.shop.trim(),
                    phoneNumber: this.user.phoneNumber.trim(),
                };
                const editUser = {
                    newUser: registerAttributes,
                    user: parse__WEBPACK_IMPORTED_MODULE_2__.User.current()
                };
                yield this.userService.editUserRequest(editUser);
                const delay = ms => new Promise(res => setTimeout(res, ms));
                yield delay(1000);
                this.uploaded = true;
                yield this.closeModal();
            }
            catch (e) {
                const delay = ms => new Promise(res => setTimeout(res, ms));
                yield delay(1000);
                this.uploaded = true;
                console.log('Error: ', e);
            }
        });
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _helper_pinpoint_helper__WEBPACK_IMPORTED_MODULE_4__.PinpointHelper },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _store_settings_store__WEBPACK_IMPORTED_MODULE_3__.SettingsStore }
];
EditProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-edit-profile',
        template: _edit_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditProfilePage);



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

/***/ 73287:
/*!***********************************************************************!*\
  !*** ./src/app/modals/edit-profile/edit-profile.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".cardSubtitle {\n  font-size: 9pt;\n  text-align: center;\n}\n\n.cardTitle {\n  font-size: 10pt;\n  text-align: center;\n}\n\n.cardArrowCol {\n  text-align: right;\n  align-self: center;\n  font-size: 15pt;\n}\n\n.stepTitle {\n  text-align: center;\n  font-size: 20pt;\n  font-weight: bold;\n}\n\n.image-container {\n  min-height: 200px;\n  background-size: cover;\n}\n\n.one-image {\n  margin: 2px;\n}\n\n.error {\n  text-align: center;\n  color: #aa0505;\n  font-family: Roboto-Bold;\n  font-size: 10pt;\n}\n\n.thumbnail {\n  width: 300px;\n  height: 300px;\n  object-fit: cover;\n}\n\n.addPhotoButton {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFJRiIsImZpbGUiOiJlZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRTdWJ0aXRsZXtcclxuICBmb250LXNpemU6IDlwdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5jYXJkVGl0bGV7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZEFycm93Q29se1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbn1cclxuLnN0ZXBUaXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ub25lLWltYWdlIHtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNhYTA1MDU7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90by1Cb2xkO1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG4udGh1bWJuYWlsIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmFkZFBob3RvQnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 12876:
/*!***********************************************************************!*\
  !*** ./src/app/modals/edit-profile/edit-profile.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModal()\">\r\n        <ion-icon id=\"toolbarBack\" name=\"close-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Edit</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-kroba-loader [loaded]=\"uploaded\"></app-kroba-loader>\r\n    <ion-item>\r\n      <ion-label>First Name</ion-label>\r\n      <ion-input style=\"text-align: right\" [(ngModel)]=\"user.firstName\"></ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item>\r\n      <ion-label>Last Name</ion-label>\r\n      <ion-input style=\"text-align: right\" [(ngModel)]=\"user.lastName\"></ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item>\r\n      <ion-label>Country</ion-label>\r\n      <ion-select [(ngModel)]=\"selectedCountry\" (ionChange)=\"onCountryChange($event)\" placeholder=\"Select One\">\r\n        <ion-select-option *ngFor=\"let country of countries\" [value]=\"country.objectId\">{{country.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  <ion-item>\r\n    <ion-label>Shop Brand</ion-label>\r\n    <ion-select [(ngModel)]=\"selectedShop\" placeholder=\"Select One\">\r\n      <ion-select-option *ngFor=\"let shop of shops\" [value]=\"shop.objectId\">{{shop.name}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n\r\n\r\n  <ion-item>\r\n    <ion-label>City</ion-label>\r\n    <ion-input style=\"text-align: right\" [(ngModel)]=\"user.city\"></ion-input>\r\n  </ion-item>\r\n\r\n\r\n\r\n  <ion-item>\r\n    <ion-label>Shop</ion-label>\r\n    <ion-input style=\"text-align: right\" [(ngModel)]=\"user.shop\"></ion-input>\r\n  </ion-item>\r\n\r\n\r\n  <ion-item>\r\n    <ion-label>Phone Number</ion-label>\r\n    <ion-input style=\"text-align: right\" type=\"tel\" [(ngModel)]=\"user.phoneNumber\"></ion-input>\r\n  </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!--Add models-->\r\n\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\" style=\"margin: 0px;\">\r\n  <ion-button expand=\"block\" (click)=\"finishEdit()\">Save</ion-button>\r\n</ion-footer>\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_edit-profile_edit-profile_page_ts.js.map