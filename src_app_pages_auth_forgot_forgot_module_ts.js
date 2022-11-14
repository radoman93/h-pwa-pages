"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_forgot_forgot_module_ts"],{

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

/***/ 33801:
/*!************************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPageRoutingModule": () => (/* binding */ ForgotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.page */ 21050);




const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPage
    }
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPageRoutingModule);



/***/ }),

/***/ 25849:
/*!****************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPageModule": () => (/* binding */ ForgotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-routing.module */ 33801);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.page */ 21050);
/* harmony import */ var _module_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../module/shared.module */ 86346);








let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _module_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPage]
    })
], ForgotPageModule);



/***/ }),

/***/ 21050:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPage": () => (/* binding */ ForgotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.page.html?ngResource */ 7382);
/* harmony import */ var _forgot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.page.scss?ngResource */ 96614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user.service */ 84981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);







let ForgotPage = class ForgotPage {
    constructor(userService, router, formBuilder) {
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.sending = false;
        this.sent = false;
        this.resetForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
        });
    }
    ngOnInit() {
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.sending = true;
            yield this.userService.resetPassword(this.resetForm.value.email);
            // await this.router.navigate(['/login']);
            this.sending = false;
            this.sent = true;
        });
    }
};
ForgotPage.ctorParameters = () => [
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
ForgotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forgot',
        template: _forgot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPage);



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

/***/ 96614:
/*!***************************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #f5f5f3;\n}\nion-toolbar ion-button {\n  text-transform: initial;\n  font-size: 17px;\n}\nion-content {\n  --background: #f5f5f3;\n}\nion-content h1 {\n  text-align: center;\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n  margin-bottom: 15%;\n}\nion-content #form {\n  margin-top: 15%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-button {\n  margin-top: 35px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n  --box-shadow: none;\n}\nion-content p {\n  text-align: center;\n  color: #b6b6b6;\n  margin-top: 40px;\n}\ninput.ng-invalid {\n  border-left: 5px solid red;\n}\ninput.ng-valid {\n  border-left: 5px solid green;\n}\n[alert] {\n  font-size: 0.9rem;\n  text-align: center;\n  padding: 0.4rem !important;\n  margin: 0 10% 1% 10%;\n  border: 1px solid transparent;\n  border-radius: 0.4rem;\n}\n[alert-success] {\n  color: #4ee554;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQkFBQTtBQUFGO0FBRUU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFBSjtBQUlBO0VBQ0UscUJBQUE7QUFERjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FBRk47QUFNRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSko7QUFPQTtFQUNFLDBCQUFBO0FBSkY7QUFNQTtFQUNFLDRCQUFBO0FBSEY7QUFNQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQUhGO0FBTUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUhGIiwiZmlsZSI6ImZvcmdvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcblxyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogIzAxMDEwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICB9XHJcblxyXG4gICNmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNiNmI2YjY7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxufVxyXG5pbnB1dC5uZy1pbnZhbGlke1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG59XHJcbmlucHV0Lm5nLXZhbGlke1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcblthbGVydF0ge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjRyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgMTAlIDElIDEwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbn1cclxuXHJcblthbGVydC1zdWNjZXNzXSB7XHJcbiAgY29sb3I6ICM0ZWU1NTQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcclxuICBib3JkZXItY29sb3I6ICNlYmNjZDE7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 7382:
/*!***************************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button routerLink=\"/login\" color=\"primary\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1>Reset Password</h1>\r\n\r\n  <form [formGroup]=\"resetForm\" id=\"form\">\r\n\r\n\r\n    <app-input formControlName=\"email\" placeholder=\"Email\"></app-input>\r\n    <app-form-input-error [form]=\"resetForm\" formInput='email'></app-form-input-error>\r\n    <ion-button (click)=\"test()\" [disabled]=\"!resetForm.valid\" type=\"submit\" expand=\"block\" shape=\"round\">\r\n      <app-button-loader name=\"Send\" [isLoading]=\"sending\"></app-button-loader>\r\n    </ion-button>\r\n    <ion-grid *ngIf=\"sent\">\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n          <p  alert class=\"ion-color-success\">\r\n            Ukoliko nalog postoji poslacemo vam na email instrukcije kako da restartujete password.\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_forgot_forgot_module_ts.js.map