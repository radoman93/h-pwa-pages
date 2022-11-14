"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_login_login_module_ts"],{

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

/***/ 65221:
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 47412);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 79456:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 65221);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 47412);
/* harmony import */ var _module_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../module/shared.module */ 86346);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _module_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 47412:
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 46579);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 61191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user.service */ 84981);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);








let LoginPage = class LoginPage {
    constructor(router, formBuilder, userService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.isLoading = false;
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]),
        });
        this.errorMessage = '';
    }
    sanitizer(event) {
        this.loginForm.get('username').setValue(event.target.value.trim());
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const username = this.loginForm.value.username.trim();
            const password = this.loginForm.value.password.trim();
            this.isLoading = true;
            yield Promise.all([
                this.errorMessage = yield this.userService.login(username, password),
            ]);
            if (parse__WEBPACK_IMPORTED_MODULE_3__.User.current()) {
                if (parse__WEBPACK_IMPORTED_MODULE_3__.User.current() && parse__WEBPACK_IMPORTED_MODULE_3__.User.current().get('approved')) {
                    // await initNotifications();
                    this.isLoading = false;
                    yield this.router.navigate(['']);
                }
                else if (!parse__WEBPACK_IMPORTED_MODULE_3__.User.current().get('approved')) {
                    yield parse__WEBPACK_IMPORTED_MODULE_3__.User.logOut();
                    this.errorMessage = 'Awaiting approval';
                }
            }
            console.log('Set loading to false');
            this.isLoading = false;
        });
    }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



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

/***/ 61191:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #f5f5f3;\n}\nion-toolbar ion-button {\n  text-transform: initial;\n  font-size: 17px;\n}\nion-content {\n  --background: #f5f5f3;\n}\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-content #header h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n  margin-bottom: 15%;\n}\nion-content #header img {\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  border: 8px solid #ffffff;\n}\nion-content #form {\n  margin-top: 15%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-button {\n  margin-top: 35px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n  --box-shadow: none;\n}\n.required {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFCQUFBO0FBQUY7QUFFRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBSUE7RUFDRSxxQkFBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUlJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRk47QUFNRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSko7QUFNSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtBQUpOO0FBUUE7RUFDRSxVQUFBO0FBTEYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG5cclxuICAjaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgY29sb3I6ICMwMTAxMDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiA4cHggc29saWQgI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnJlcXVpcmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 46579:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/register\">Sign up</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"header\">\r\n    <h1>Login</h1>\r\n    <img src=\"assets/haier.svg\" />\r\n  </div>\r\n  <form [formGroup]=\"loginForm\" id=\"form\">\r\n    <app-input formControlName=\"username\" placeholder=\"Username\"></app-input>\r\n    <app-form-input-error  [form]=\"loginForm\" formInput='username'></app-form-input-error>\r\n    <app-input formControlName=\"password\" type=\"password\" placeholder=\"Password\"></app-input>\r\n    <app-form-input-error [form]=\"loginForm\" formInput='password'></app-form-input-error>\r\n    <ion-button (click)=\"login()\" [disabled]=\"!loginForm.valid\" type=\"submit\" expand=\"block\">\r\n      <app-button-loader name=\"Login\" [isLoading]=\"isLoading\"></app-button-loader>\r\n    </ion-button>\r\n    <ion-button routerLink=\"/forgot\"  fill=\"outline\" expand=\"block\">Reset Password</ion-button>\r\n    <app-error-message [message]=\"errorMessage\"></app-error-message>\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_login_login_module_ts.js.map