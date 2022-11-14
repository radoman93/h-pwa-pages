(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guard/auth.guard */ 55826);




const routes = [
    // {
    //   path: '',
    //   redirectTo: 'folder/Inbox',
    //   pathMatch: 'full'
    // },
    // {
    //   path: 'folder/:id',
    //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
    // },
    // {
    //   path: 'login',
    //   loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
    // },
    // {
    //   path: 'register',
    //   loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
    // }
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_module_shared_module_ts"), __webpack_require__.e("src_app_pages_auth_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/login/login.module */ 79456)).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_module_shared_module_ts"), __webpack_require__.e("default-src_app_helper_settings_helper_ts"), __webpack_require__.e("src_app_pages_auth_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/register/register.module */ 76029)).then(m => m.RegisterPageModule)
    },
    // {
    //   path: 'home',
    //   canActivate: [AuthGuard],
    //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    // },
    {
        path: 'sold',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_module_shared_module_ts"), __webpack_require__.e("default-src_app_pages_sold_sold_page_ts"), __webpack_require__.e("default-src_app_service_sold_service_ts"), __webpack_require__.e("src_app_pages_sold_sold_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sold/sold.module */ 26779)).then(m => m.SoldPageModule)
    },
    {
        path: '',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_service_sold_service_ts"), __webpack_require__.e("default-src_app_helper_settings_helper_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 5557)).then(m => m.TabsPageModule)
    },
    {
        path: 'edit-profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_module_shared_module_ts"), __webpack_require__.e("default-src_app_modals_edit-profile_edit-profile_page_ts"), __webpack_require__.e("src_app_helper_pagination_helper_ts-src_app_helper_parse_helper_ts-src_app_helper_pinpoint_he-2b587f")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/edit-profile/edit-profile.module */ 8556)).then(m => m.EditProfilePageModule)
    },
    {
        path: 'news',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_news_news_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/news/news.module */ 26331)).then(m => m.NewsPageModule)
    },
    {
        path: 'voucher',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_module_shared_module_ts"), __webpack_require__.e("default-src_app_pages_sold_sold_page_ts"), __webpack_require__.e("default-src_app_modals_edit-profile_edit-profile_page_ts"), __webpack_require__.e("default-src_app_helper_modal_helper_ts"), __webpack_require__.e("default-src_app_service_sold_service_ts"), __webpack_require__.e("default-src_app_pages_voucher_voucher_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_service_voucher_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/voucher/voucher.module */ 71861)).then(m => m.VoucherPageModule)
    },
    {
        path: 'get-voucher',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_module_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modals_get-voucher_get-voucher_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/get-voucher/get-voucher.module */ 42631)).then(m => m.GetVoucherPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_store_notification_store_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/notification.module */ 89770)).then(m => m.NotificationPageModule)
    },
    {
        path: 'training',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_sold_sold_page_ts"), __webpack_require__.e("default-src_app_modals_edit-profile_edit-profile_page_ts"), __webpack_require__.e("default-src_app_helper_modal_helper_ts"), __webpack_require__.e("default-src_app_service_sold_service_ts"), __webpack_require__.e("default-src_app_helper_settings_helper_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/training/training.module */ 4737)).then(m => m.TrainingPageModule)
    },
    {
        path: 'lesson',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_helper_pagination_helper_ts-src_app_helper_parse_helper_ts-src_app_pages_lesson_lesso-61bb47")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/lesson/lesson.module */ 85299)).then(m => m.LessonPageModule)
    },
    {
        path: 'question',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_question_question_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/question/question.module */ 49092)).then(m => m.QuestionPageModule)
    },
    {
        path: 'all-news',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_helper_pagination_helper_ts-src_app_helper_parse_helper_ts-src_app_pages_all-news_all-3d0f16")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/all-news/all-news.module */ 16920)).then(m => m.AllNewsPageModule)
    },
    {
        path: 'voucher-history',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_module_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_helper_pagination_helper_ts-src_app_helper_parse_helper_ts-src_app_pages_voucher-hist-4199c4")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/voucher-history/voucher-history.module */ 618)).then(m => m.VoucherHistoryPageModule)
    },
    {
        path: 'sold-history',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_module_shared_module_ts"), __webpack_require__.e("src_app_pages_sold-history_sold-history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sold-history/sold-history.module */ 96225)).then(m => m.SoldHistoryPageModule)
    },
    {
        path: 'forgot',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_module_shared_module_ts"), __webpack_require__.e("src_app_pages_auth_forgot_forgot_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/forgot/forgot.module */ 25849)).then(m => m.ForgotPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _config_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/parse */ 35805);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/user.store */ 31518);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_4__);








let AppComponent = class AppComponent {
    // public appPages = [
    //   { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    //   { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    //   { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    //   { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    //   { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    //   { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    // ];
    // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    constructor(platform, userStore) {
        this.platform = platform;
        this.userStore = userStore;
        // window.screen.orientation.lock('portrait').then(r=>{
        this.initializeApp();
        // });
    }
    initializeApp() {
        console.log('platform: ', this.platform);
        (0,_config_parse__WEBPACK_IMPORTED_MODULE_2__.initParse)().finally(() => {
            this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (parse__WEBPACK_IMPORTED_MODULE_4__.User.current()) {
                    this.userStore.setUser(parse__WEBPACK_IMPORTED_MODULE_4__.User.current().toJSON());
                }
            }));
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _store_user_store__WEBPACK_IMPORTED_MODULE_3__.UserStore }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/settings.store */ 16322);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/user.store */ 31518);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 19107);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ 64933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ 92340);













let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot({
                mode: 'ios'
            }), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production,
                // Register the ServiceWorker as soon as the application is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })],
        providers: [
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__.ImagePicker,
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera,
            _store_settings_store__WEBPACK_IMPORTED_MODULE_2__.SettingsStore,
            _store_user_store__WEBPACK_IMPORTED_MODULE_3__.UserStore,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 35805:
/*!*********************************!*\
  !*** ./src/app/config/parse.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initParse": () => (/* binding */ initParse)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);


function initParse() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
        try {
            parse__WEBPACK_IMPORTED_MODULE_0__.initialize('Candy', 'ISdfhasdaisdjiASdiasdoas');
            parse__WEBPACK_IMPORTED_MODULE_0__.serverURL = 'http://94.127.2.67:1337/parse';
            parse__WEBPACK_IMPORTED_MODULE_0__.publicServerURL = 'http://94.127.2.67:1337/parse';
            parse__WEBPACK_IMPORTED_MODULE_0__.CoreManager.set('IDEMPOTENCY', true);
            console.log("CHECK PARSE", parse__WEBPACK_IMPORTED_MODULE_0__.User.current());
        }
        catch (e) {
            console.log('Parse init error:', e);
        }
    });
}


/***/ }),

/***/ 55826:
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);




let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        console.log(route);
        console.log(parse__WEBPACK_IMPORTED_MODULE_0__.User.current());
        const authInfo = {
            authenticated: parse__WEBPACK_IMPORTED_MODULE_0__.User.current()
        };
        if (!authInfo.authenticated || !authInfo.authenticated.get('approved')) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 16322:
/*!*****************************************!*\
  !*** ./src/app/store/settings.store.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsStore": () => (/* binding */ SettingsStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-angular */ 42986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let SettingsStore = class SettingsStore {
    constructor() {
        this.countries = [];
        this.cities = [];
        this.shops = [];
        this.brands = [];
        this.categories = [];
        this.models = [];
    }
    setCountries(countries) {
        // this.countries.push(...countries);
        this.countries = countries;
    }
    addCountry(country) {
        this.countries.push(country);
    }
    setCities(cities) {
        // this.cities.push(...cities);
        this.cities = cities;
    }
    addCity(city) {
        this.cities.push(city);
    }
    setShops(shops) {
        // this.shops.push(...shops);
        this.shops = shops;
    }
    addShop(shop) {
        this.shops.push(shop);
    }
    setCategories(categories) {
        // this.shops.push(...shops);
        this.categories = categories;
    }
    addCategory(category) {
        this.categories.push(category);
    }
    setBrands(brands) {
        // this.shops.push(...shops);
        this.brands = brands;
    }
    addBrand(brand) {
        this.brands.push(brand);
    }
    setModels(models) {
        // this.shops.push(...shops);
        this.models = models;
    }
    addModel(model) {
        this.models.push(model);
    }
};
SettingsStore.ctorParameters = () => [];
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], SettingsStore.prototype, "countries", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], SettingsStore.prototype, "cities", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], SettingsStore.prototype, "shops", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], SettingsStore.prototype, "categories", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], SettingsStore.prototype, "brands", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], SettingsStore.prototype, "models", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], SettingsStore.prototype, "loaded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], SettingsStore.prototype, "setCountries", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], SettingsStore.prototype, "addCountry", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], SettingsStore.prototype, "setCities", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], SettingsStore.prototype, "addCity", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], SettingsStore.prototype, "setShops", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], SettingsStore.prototype, "addShop", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], SettingsStore.prototype, "setCategories", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], SettingsStore.prototype, "addCategory", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], SettingsStore.prototype, "setBrands", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], SettingsStore.prototype, "addBrand", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], SettingsStore.prototype, "setModels", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], SettingsStore.prototype, "addModel", null);
SettingsStore = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], SettingsStore);



/***/ }),

/***/ 31518:
/*!*************************************!*\
  !*** ./src/app/store/user.store.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserStore": () => (/* binding */ UserStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-angular */ 42986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let UserStore = class UserStore {
    constructor() {
    }
    setUser(user) {
        console.log('Setting user: ', user);
        this.user = user;
    }
    changeUserPoints(points) {
        this.user.points = this.user.points + points;
    }
    changeUserReservedPoints(points) {
        this.user.reserved_points = this.user.reserved_points + points;
    }
    changeUsername(username) {
        this.user.username = username;
    }
};
UserStore.ctorParameters = () => [];
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], UserStore.prototype, "user", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], UserStore.prototype, "loaded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], UserStore.prototype, "setUser", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], UserStore.prototype, "changeUserPoints", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], UserStore.prototype, "changeUserReservedPoints", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], UserStore.prototype, "changeUsername", null);
UserStore = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], UserStore);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 38763);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		79518,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		45464,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		68724,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		30527,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		44389,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG5cclxuICBjb2xvcjogIzc1NzU3NTtcclxuXHJcbiAgbWluLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBjb2xvcjogIzYxNmU3ZTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gIC0tbWluLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzczODQ5YTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW5vdGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufSJdfQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n\r\n  <ion-router-outlet></ion-router-outlet>\r\n<!--  <ion-split-pane contentId=\"main-content\">-->\r\n<!--    <ion-menu contentId=\"main-content\" type=\"overlay\">-->\r\n<!--      <ion-content>-->\r\n<!--        <ion-list id=\"inbox-list\">-->\r\n<!--          <ion-list-header>Inbox</ion-list-header>-->\r\n<!--          <ion-note>hi@ionicframework.com</ion-note>-->\r\n\r\n<!--          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">-->\r\n<!--            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">-->\r\n<!--              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>-->\r\n<!--              <ion-label>{{ p.title }}</ion-label>-->\r\n<!--            </ion-item>-->\r\n<!--          </ion-menu-toggle>-->\r\n<!--        </ion-list>-->\r\n\r\n<!--        <ion-list id=\"labels-list\">-->\r\n<!--          <ion-list-header>Labels</ion-list-header>-->\r\n\r\n<!--          <ion-item *ngFor=\"let label of labels\" lines=\"none\">-->\r\n<!--            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>-->\r\n<!--            <ion-label>{{ label }}</ion-label>-->\r\n<!--          </ion-item>-->\r\n<!--        </ion-list>-->\r\n<!--      </ion-content>-->\r\n<!--    </ion-menu>-->\r\n<!--    <ion-router-outlet id=\"main-content\"></ion-router-outlet>-->\r\n<!--  </ion-split-pane>-->\r\n</ion-app>\r\n";

/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map