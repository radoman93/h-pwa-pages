"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 15448:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 64101);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            { path: 'home', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_sold_sold_page_ts"), __webpack_require__.e("default-src_app_modals_edit-profile_edit-profile_page_ts"), __webpack_require__.e("default-src_app_helper_modal_helper_ts"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 57994)).then(m => m.HomePageModule) },
            { path: 'profile', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_module_shared_module_ts"), __webpack_require__.e("default-src_app_pages_sold_sold_page_ts"), __webpack_require__.e("default-src_app_modals_edit-profile_edit-profile_page_ts"), __webpack_require__.e("default-src_app_helper_modal_helper_ts"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 88558)).then(m => m.ProfilePageModule) },
            {
                path: 'notification',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../notification/notification.module */ 89770)).then(m => m.NotificationPageModule)
            },
            {
                path: 'voucher',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_module_shared_module_ts"), __webpack_require__.e("default-src_app_pages_sold_sold_page_ts"), __webpack_require__.e("default-src_app_modals_edit-profile_edit-profile_page_ts"), __webpack_require__.e("default-src_app_helper_modal_helper_ts"), __webpack_require__.e("default-src_app_pages_voucher_voucher_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../voucher/voucher.module */ 71861)).then(m => m.VoucherPageModule)
            },
            {
                path: 'training',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_sold_sold_page_ts"), __webpack_require__.e("default-src_app_modals_edit-profile_edit-profile_page_ts"), __webpack_require__.e("default-src_app_helper_modal_helper_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ../training/training.module */ 4737)).then(m => m.TrainingPageModule)
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5557:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 15448);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 64101);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 64101:
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 97867);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 74436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/notification.service */ 47320);
/* harmony import */ var _helper_settings_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/settings.helper */ 72941);
/* harmony import */ var _service_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/news.service */ 25549);
/* harmony import */ var _service_lesson_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/lesson.service */ 73677);
/* harmony import */ var _service_voucher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/voucher.service */ 66807);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/user.store */ 31518);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _service_voucherBrand_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/voucherBrand.service */ 14894);
/* harmony import */ var _store_chart_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/chart.store */ 64852);
/* harmony import */ var _service_voucher_request_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/voucher-request.service */ 360);
/* harmony import */ var _service_sold_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/sold.service */ 85298);















let TabsPage = class TabsPage {
    constructor(voucherRequestService, chartStore, voucherService, voucherBrandService, userStore, notificationService, settingsHelper, newsService, lessonService, soldService) {
        this.voucherRequestService = voucherRequestService;
        this.chartStore = chartStore;
        this.voucherService = voucherService;
        this.voucherBrandService = voucherBrandService;
        this.userStore = userStore;
        this.notificationService = notificationService;
        this.settingsHelper = settingsHelper;
        this.newsService = newsService;
        this.lessonService = lessonService;
        this.soldService = soldService;
        this.isHome = false;
        this.isNotification = false;
        this.isVoucher = false;
        this.isProfile = false;
        this.isTraining = false;
    }
    resetAllIcons() {
        this.isHome = false;
        this.isNotification = false;
        this.isVoucher = false;
        this.isProfile = false;
        this.isTraining = false;
    }
    changeTab(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Got event data: ', event);
            this.resetAllIcons();
            if (event.tab === 'notification') {
                this.notificationService.getAllNotifications();
                this.isNotification = true;
            }
            else if (event.tab === 'home') {
                this.isHome = true;
                this.settingsHelper.loadSettings();
                parse__WEBPACK_IMPORTED_MODULE_8__.User.current().fetch().then(r => {
                    this.userStore.setUser(parse__WEBPACK_IMPORTED_MODULE_8__.User.current().toJSON());
                });
                this.newsService.getHomeNews();
            }
            else if (event.tab === 'voucher') {
                this.isVoucher = true;
                this.voucherBrandService.getAllVoucherBrands();
                this.voucherService.getAllVouchers();
                this.chartStore.updateChart();
                this.voucherRequestService.getAllVoucherRequests();
                this.soldService.getAllSold();
            }
            else if (event.tab === 'profile') {
                this.isProfile = true;
            }
            else {
                this.isTraining = true;
                this.lessonService.getAllLessons();
            }
        });
    }
    ngOnInit() {
    }
};
TabsPage.ctorParameters = () => [
    { type: _service_voucher_request_service__WEBPACK_IMPORTED_MODULE_11__.VoucherRequestService },
    { type: _store_chart_store__WEBPACK_IMPORTED_MODULE_10__["default"] },
    { type: _service_voucher_service__WEBPACK_IMPORTED_MODULE_6__.VoucherService },
    { type: _service_voucherBrand_service__WEBPACK_IMPORTED_MODULE_9__.VoucherBrandService },
    { type: _store_user_store__WEBPACK_IMPORTED_MODULE_7__.UserStore },
    { type: _service_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService },
    { type: _helper_settings_helper__WEBPACK_IMPORTED_MODULE_3__.SettingsHelper },
    { type: _service_news_service__WEBPACK_IMPORTED_MODULE_4__.NewsService },
    { type: _service_lesson_service__WEBPACK_IMPORTED_MODULE_5__.LessonService },
    { type: _service_sold_service__WEBPACK_IMPORTED_MODULE_12__.SoldService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 14894:
/*!*************************************************!*\
  !*** ./src/app/service/voucherBrand.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherBrandService": () => (/* binding */ VoucherBrandService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/parse.helper */ 4751);
/* harmony import */ var _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/pagination.helper */ 11137);
/* harmony import */ var _store_voucherBrand_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/voucherBrand.store */ 81869);






let VoucherBrandService = class VoucherBrandService {
    constructor(voucherBrandStore) {
        this.voucherBrandStore = voucherBrandStore;
    }
    getAllVoucherBrands() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const query = new parse__WEBPACK_IMPORTED_MODULE_0__.Query('Voucher_Brand');
                const results = yield query.findAll();
                const vouchers = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_1__.ParseHelper.arrayToJSON(results);
                console.log('Got voucher brands: ', vouchers);
                for (let el of vouchers) {
                    if (!(yield _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_2__.PaginationHelper.checkExisting(el, this.voucherBrandStore.voucherBrands))) {
                        this.voucherBrandStore.addVoucherBrand(el);
                    }
                }
            }
            catch (e) {
                console.log(e);
                return 'Cant get vouchers';
            }
        });
    }
};
VoucherBrandService.ctorParameters = () => [
    { type: _store_voucherBrand_store__WEBPACK_IMPORTED_MODULE_3__["default"] }
];
VoucherBrandService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], VoucherBrandService);



/***/ }),

/***/ 74436:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".customFooter {\n  height: 90px;\n  --color-selected: white;\n  --color: white;\n  --background: #48BCFA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUVBLHVCQUFBO0VBR0EsY0FBQTtFQUNBLHFCQUFBO0FBRkYiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tRm9vdGVye1xyXG4gIGhlaWdodDogOTBweDtcclxuICAvLy0tYmFja2dyb3VuZDogIzQ1QjZGMTtcclxuICAtLWNvbG9yLXNlbGVjdGVkOiB3aGl0ZTtcclxuICAvLy0taW9uLWNvbG9yLXRlcnRpYXJ5OiB3aGl0ZTtcclxuICAvLy0tY29sb3I6ICM0ODY5N0E7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNDhCQ0ZBO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 97867:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs (ionTabsDidChange)=\"changeTab($event)\">\r\n  <ion-tab-bar class=\"customFooter\" slot=\"bottom\">\r\n<!--    <ion-tab-button tab=\"history\">-->\r\n<!--      <ion-icon name=\"calendar\"></ion-icon>-->\r\n<!--      <ion-label>History</ion-label>-->\r\n<!--      &lt;!&ndash;        <ion-badge>6</ion-badge>&ndash;&gt;-->\r\n<!--    </ion-tab-button>-->\r\n    <ion-tab-button tab=\"home\">\r\n      <ion-icon *ngIf=\"isHome\" name=\"home\"></ion-icon>\r\n      <ion-icon *ngIf=\"!isHome\" name=\"home-outline\"></ion-icon>\r\n      <ion-label>Početna</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"voucher\">\r\n      <ion-icon *ngIf=\"isVoucher\" name=\"cash\"></ion-icon>\r\n      <ion-icon *ngIf=\"!isVoucher\" name=\"cash-outline\"></ion-icon>\r\n      <ion-label>Vaučeri</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"notification\">\r\n      <ion-icon *ngIf=\"isNotification\" name=\"notifications\"></ion-icon>\r\n      <ion-icon *ngIf=\"!isNotification\" name=\"notifications-outline\"></ion-icon>\r\n      <ion-label>Notifikacije</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"training\">\r\n      <ion-icon *ngIf=\"isTraining\" name=\"school\"></ion-icon>\r\n      <ion-icon *ngIf=\"!isTraining\" name=\"school-outline\"></ion-icon>\r\n      <ion-label>Trening</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"profile\">\r\n      <ion-icon *ngIf=\"isProfile\" name=\"person\"></ion-icon>\r\n      <ion-icon *ngIf=\"!isProfile\" name=\"person-outline\"></ion-icon>\r\n      <ion-label>Profil</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map