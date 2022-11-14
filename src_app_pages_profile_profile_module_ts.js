"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 41474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 64629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 88558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 41474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 64629);
/* harmony import */ var _module_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/shared.module */ 86346);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _module_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 64629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 67364);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 62581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_modal_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/modal.helper */ 15304);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/user.service */ 84981);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/user.store */ 31518);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/settings.store */ 16322);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helper/parse.helper */ 4751);











let ProfilePage = class ProfilePage {
    constructor(settingsStore, userStore, modalHelper, userService, formBuilder) {
        this.settingsStore = settingsStore;
        this.userStore = userStore;
        this.modalHelper = modalHelper;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.registrationForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            shopBrand: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            shop: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
        });
        this.user = parse__WEBPACK_IMPORTED_MODULE_2__.User.current().toJSON();
        parse__WEBPACK_IMPORTED_MODULE_2__.User.current().fetchWithInclude(['shop', 'city', 'country', 'shopBrand']).then(r => {
            this.loadUserData();
        });
    }
    loadUserData() {
        // @ts-ignore
        this.registrationForm.setValue({
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            country: this.user.country.objectId,
            city: this.user.city,
            shop: this.user.shop,
            shopBrand: this.user.shopBrand,
            phoneNumber: this.user.phoneNumber
        });
    }
    openEditModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalHelper.openEditModal();
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.logout();
        });
    }
    editUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.uploaded = false;
                const country = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_7__.ParseHelper.getParseObjectWithoutData('Country', this.registrationForm.value.country);
                const shopBrand = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_7__.ParseHelper.getParseObjectWithoutData('Shop', this.registrationForm.value.shopBrand);
                const registerAttributes = {
                    email: this.user.email,
                    firstName: this.registrationForm.value.firstName.trim(),
                    lastName: this.registrationForm.value.lastName.trim(),
                    country,
                    shopBrand,
                    city: this.registrationForm.value.city.trim(),
                    shop: this.registrationForm.value.shop.trim(),
                    phoneNumber: this.registrationForm.value.phoneNumber.trim()
                };
                const editUser = {
                    newUser: registerAttributes,
                    user: parse__WEBPACK_IMPORTED_MODULE_2__.User.current()
                };
                console.log('Sending data to request');
                yield this.userService.editUserRequest(editUser);
                const delay = ms => new Promise(res => setTimeout(res, ms));
                yield delay(1000);
                this.uploaded = true;
            }
            catch (e) {
                const delay = ms => new Promise(res => setTimeout(res, ms));
                yield delay(1000);
                this.uploaded = true;
                console.log('Error: ', e);
            }
        });
    }
    ngOnInit() {
    }
    onCountryChange($event) {
    }
};
ProfilePage.ctorParameters = () => [
    { type: _store_settings_store__WEBPACK_IMPORTED_MODULE_6__.SettingsStore },
    { type: _store_user_store__WEBPACK_IMPORTED_MODULE_5__.UserStore },
    { type: _helper_modal_helper__WEBPACK_IMPORTED_MODULE_3__.ModalHelper },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 62581:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".cardSubtitle {\n  font-size: 9pt;\n}\n\n.cardTitle {\n  font-size: 10pt;\n}\n\n.cardArrowCol {\n  text-align: right;\n  align-self: center;\n  font-size: 15pt;\n}\n\n.customHeader {\n  background-color: #3498db;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.headerLogo {\n  font-size: 30pt;\n  color: white;\n  font-weight: bold;\n}\n\n.headerRow {\n  justify-content: center;\n}\n\n.headerMoney {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 30pt;\n  color: white;\n  font-weight: bold;\n}\n\n.headerText {\n  text-align: center;\n  font-size: 12pt;\n  color: white;\n  font-weight: bold;\n}\n\n.userName {\n  justify-content: center;\n}\n\nion-button {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.userData {\n  text-align: right;\n}\n\nion-item {\n  width: 100%;\n}\n\n.userInfoInput {\n  width: 100%;\n  border: 1px solid #48697A;\n  --background: white;\n  display: flex;\n  background-color: white;\n  border-radius: 10px;\n  height: 55px;\n}\n\n.userInfoInput ion-input {\n  font-size: 18px;\n  --padding-top: 20px;\n  --padding-bottom: 15px;\n  --padding-start: 5px;\n}\n\n.userInfoInput a {\n  font-size: 17px;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtBQUFGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQURKIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRTdWJ0aXRsZXtcclxuICBmb250LXNpemU6IDlwdDtcclxufVxyXG4uY2FyZFRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG4uY2FyZEFycm93Q29se1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbn1cclxuXHJcbi5jdXN0b21IZWFkZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcclxuICBoZWlnaHQ6MjUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyVGl0bGV7XHJcblxyXG59XHJcbi5oZWFkZXJMb2dve1xyXG4gIGZvbnQtc2l6ZTogMzBwdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxuICAvL2ZvbnQtZmFtaWx5OiBwYWRtYWEtQm9sZC4xLjE7XHJcbn1cclxuLmhlYWRlclJvd3tcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaGVhZGVyTW9uZXl7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBwdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG4uaGVhZGVyVGV4dHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG5cclxuLnVzZXJOYW1le1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmlvbi1jb2w+cHt9XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udXNlckRhdGF7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udXNlckluZm9JbnB1dHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDg2OTdBO1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgaW9uLWlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 67364:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"background-color: #f5f5f3\">\r\n      Personalne Informacije\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"registrationForm\">\r\n    <ion-grid>\r\n      <ion-row class=\"userName\">\r\n<!--        <h1>{{userStore.user.firstName}} {{userStore.user.lastName}}</h1>-->\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label position=\"stacked\">Ime</ion-label>\r\n        <ion-item class=\"ion-margin-bottom userInfoInput\" lines=\"none\">\r\n          <ion-input formControlName=\"firstName\"></ion-input>\r\n        </ion-item>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label position=\"stacked\">Prezime</ion-label>\r\n        <ion-item class=\"ion-margin-bottom userInfoInput\" lines=\"none\">\r\n          <ion-input formControlName=\"lastName\"></ion-input>\r\n        </ion-item>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label position=\"stacked\">Username</ion-label>\r\n        <ion-item class=\"ion-margin-bottom userInfoInput\" lines=\"none\">\r\n          <ion-input disabled=\"true\" [value]=\"userStore.user.username\"></ion-input>\r\n        </ion-item>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label position=\"stacked\">Email</ion-label>\r\n        <ion-item class=\"ion-margin-bottom userInfoInput\" lines=\"none\">\r\n          <ion-input disabled=\"true\" [value]=\"userStore.user.email\"></ion-input>\r\n        </ion-item>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label position=\"stacked\">Država</ion-label>\r\n        <ion-item class=\"ion-margin-bottom userInfoInput\" lines=\"none\">\r\n          <ion-select formControlName=\"country\" (ionChange)=\"onCountryChange($event)\" placeholder=\"Select One\">\r\n            <ion-select-option *ngFor=\"let country of settingsStore.countries\"\r\n                               [value]=\"country.objectId\">{{country.name}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label position=\"stacked\">Grad</ion-label>\r\n        <ion-item class=\"ion-margin-bottom userInfoInput\" lines=\"none\">\r\n          <ion-input formControlName=\"city\"></ion-input>\r\n        </ion-item>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label position=\"stacked\">Brand Prodavnice</ion-label>\r\n        <ion-item class=\"ion-margin-bottom userInfoInput\" lines=\"none\">\r\n          <ion-select formControlName=\"shopBrand\" placeholder=\"Select One\">\r\n            <ion-select-option *ngFor=\"let shop of settingsStore.shops\"\r\n                               [value]=\"shop.objectId\">{{shop.name}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label position=\"stacked\">Prodavnica</ion-label>\r\n        <ion-item class=\"ion-margin-bottom userInfoInput\" lines=\"none\">\r\n          <ion-input formControlName=\"shop\"></ion-input>\r\n        </ion-item>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label position=\"stacked\">Broj Telefona</ion-label>\r\n        <ion-item class=\"ion-margin-bottom userInfoInput\" lines=\"none\">\r\n          <ion-input formControlName=\"phoneNumber\"></ion-input>\r\n        </ion-item>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n  <ion-button [disabled]=\"!registrationForm.valid\" (click)=\"editUser()\" expand=\"block\">Sačuvaj</ion-button>\r\n  <br>\r\n  <ion-button (click)=\"logout() \" expand=\"block\">Logout</ion-button>\r\n  <app-kroba-loader [loaded]=\"uploaded\"></app-kroba-loader>\r\n\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map