"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 54863:
/*!*******************************************************************!*\
  !*** ./src/app/pages/notification/notification-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageRoutingModule": () => (/* binding */ NotificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page */ 95259);




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ 89770:
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageModule": () => (/* binding */ NotificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-routing.module */ 54863);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page */ 95259);







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage]
    })
], NotificationPageModule);



/***/ }),

/***/ 95259:
/*!*********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPage": () => (/* binding */ NotificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page.html?ngResource */ 45816);
/* harmony import */ var _notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page.scss?ngResource */ 15116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _store_notification_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notification.store */ 79830);





let NotificationPage = class NotificationPage {
    constructor(notificationStore) {
        this.notificationStore = notificationStore;
    }
    ngOnInit() {
    }
};
NotificationPage.ctorParameters = () => [
    { type: _store_notification_store__WEBPACK_IMPORTED_MODULE_2__.NotificationStore }
];
NotificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-notification',
        template: _notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationPage);



/***/ }),

/***/ 33371:
/*!***********************************************************!*\
  !*** ./src/app/pages/training/training-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingPageRoutingModule": () => (/* binding */ TrainingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _training_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training.page */ 54894);




const routes = [
    {
        path: '',
        component: _training_page__WEBPACK_IMPORTED_MODULE_0__.TrainingPage
    }
];
let TrainingPageRoutingModule = class TrainingPageRoutingModule {
};
TrainingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrainingPageRoutingModule);



/***/ }),

/***/ 4737:
/*!***************************************************!*\
  !*** ./src/app/pages/training/training.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingPageModule": () => (/* binding */ TrainingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-routing.module */ 33371);
/* harmony import */ var _training_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training.page */ 54894);







let TrainingPageModule = class TrainingPageModule {
};
TrainingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _training_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainingPageRoutingModule
        ],
        declarations: [_training_page__WEBPACK_IMPORTED_MODULE_1__.TrainingPage]
    })
], TrainingPageModule);



/***/ }),

/***/ 54894:
/*!*************************************************!*\
  !*** ./src/app/pages/training/training.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingPage": () => (/* binding */ TrainingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _training_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training.page.html?ngResource */ 1396);
/* harmony import */ var _training_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training.page.scss?ngResource */ 44863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/user.store */ 31518);
/* harmony import */ var _helper_modal_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/modal.helper */ 15304);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/settings.store */ 16322);
/* harmony import */ var _helper_settings_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helper/settings.helper */ 72941);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _store_lesson_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/lesson.store */ 38678);











let TrainingPage = class TrainingPage {
    constructor(lessonStore, userStore, modalHelper, settingsStore, settingsHelper, router) {
        this.lessonStore = lessonStore;
        this.userStore = userStore;
        this.modalHelper = modalHelper;
        this.settingsStore = settingsStore;
        this.settingsHelper = settingsHelper;
        this.router = router;
        this.user = parse__WEBPACK_IMPORTED_MODULE_2__.User.current();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    selectLesson(lesson) {
        this.lessonStore.setSelectedLesson(lesson);
        this.router.navigate(['/lesson']);
    }
};
TrainingPage.ctorParameters = () => [
    { type: _store_lesson_store__WEBPACK_IMPORTED_MODULE_7__.LessonStore },
    { type: _store_user_store__WEBPACK_IMPORTED_MODULE_3__.UserStore },
    { type: _helper_modal_helper__WEBPACK_IMPORTED_MODULE_4__.ModalHelper },
    { type: _store_settings_store__WEBPACK_IMPORTED_MODULE_5__.SettingsStore },
    { type: _helper_settings_helper__WEBPACK_IMPORTED_MODULE_6__.SettingsHelper },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
TrainingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-training',
        template: _training_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_training_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrainingPage);



/***/ }),

/***/ 73677:
/*!*******************************************!*\
  !*** ./src/app/service/lesson.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LessonService": () => (/* binding */ LessonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/pagination.helper */ 11137);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/parse.helper */ 4751);
/* harmony import */ var _store_lesson_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/lesson.store */ 38678);






let LessonService = class LessonService {
    constructor(lessonStore) {
        this.lessonStore = lessonStore;
    }
    getAllLessons() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const query = new parse__WEBPACK_IMPORTED_MODULE_0__.Query('Lesson');
                const results = yield query.findAll();
                const lessons = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_2__.ParseHelper.arrayToJSON(results);
                console.log('Got lessons: ', lessons);
                for (let el of lessons) {
                    if (!(yield _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_1__.PaginationHelper.checkExisting(el, this.lessonStore.lessons))) {
                        this.lessonStore.addLesson(el);
                    }
                }
                // this.lessonStore.setLessons(lessons);
            }
            catch (e) {
                console.log(e);
                return 'Cant get categories';
            }
        });
    }
    finishLesson(status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const testData = {
                    id: this.lessonStore.selectedLesson.objectId,
                    status,
                };
                yield parse__WEBPACK_IMPORTED_MODULE_0__.Cloud.run('finishTest', { testData });
            }
            catch (e) {
                console.log('Error: ', e);
            }
        });
    }
};
LessonService.ctorParameters = () => [
    { type: _store_lesson_store__WEBPACK_IMPORTED_MODULE_3__.LessonStore }
];
LessonService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], LessonService);



/***/ }),

/***/ 25549:
/*!*****************************************!*\
  !*** ./src/app/service/news.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsService": () => (/* binding */ NewsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/parse.helper */ 4751);
/* harmony import */ var _store_news_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/news.store */ 35862);
/* harmony import */ var _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/pagination.helper */ 11137);






let NewsService = class NewsService {
    constructor(newsStore) {
        this.newsStore = newsStore;
    }
    getAllNews() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const query = new parse__WEBPACK_IMPORTED_MODULE_0__.Query('News');
                const results = yield query.descending('createdAt').find();
                const news = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_1__.ParseHelper.arrayToJSON(results);
                console.log('Got News: ', news);
                for (let el of news.slice().reverse()) {
                    if (!(yield _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_3__.PaginationHelper.checkExisting(el, this.newsStore.news))) {
                        this.newsStore.addNews(el);
                    }
                }
                // this.newsStore.setNews(news);
            }
            catch (e) {
                console.log(e);
                return 'Cant get news';
            }
        });
    }
    getHomeNews() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const query = new parse__WEBPACK_IMPORTED_MODULE_0__.Query('News');
                const results = yield query.limit(3).descending('createdAt').find();
                const news = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_1__.ParseHelper.arrayToJSON(results);
                console.log('Got News: ', news);
                for (let el of news.slice().reverse()) {
                    if (!(yield _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_3__.PaginationHelper.checkExisting(el, this.newsStore.news))) {
                        this.newsStore.addNews(el);
                    }
                }
                // this.newsStore.setNews(news);
            }
            catch (e) {
                console.log(e);
                return 'Cant get news';
            }
        });
    }
};
NewsService.ctorParameters = () => [
    { type: _store_news_store__WEBPACK_IMPORTED_MODULE_2__.NewsStore }
];
NewsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], NewsService);



/***/ }),

/***/ 360:
/*!****************************************************!*\
  !*** ./src/app/service/voucher-request.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherRequestService": () => (/* binding */ VoucherRequestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/pagination.helper */ 11137);
/* harmony import */ var _store_voucherRequest_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/voucherRequest.store */ 40583);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/parse.helper */ 4751);






let VoucherRequestService = class VoucherRequestService {
    constructor(vouchersRequestStore) {
        this.vouchersRequestStore = vouchersRequestStore;
    }
    getAllVoucherRequests() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const query = new parse__WEBPACK_IMPORTED_MODULE_0__.Query('Voucher_Request');
                const results = yield query.equalTo('user', parse__WEBPACK_IMPORTED_MODULE_0__.User.current()).include('voucher').include('voucher.brand').descending('createdAt').find();
                const vouchers = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_3__.ParseHelper.arrayToJSON(results);
                console.log('Got request vouchers: ', vouchers);
                for (const el of vouchers.slice().reverse()) {
                    if (!(yield _helper_pagination_helper__WEBPACK_IMPORTED_MODULE_1__.PaginationHelper.checkExisting(el, this.vouchersRequestStore.voucherRequests))) {
                        this.vouchersRequestStore.addVoucherRequest(el);
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
VoucherRequestService.ctorParameters = () => [
    { type: _store_voucherRequest_store__WEBPACK_IMPORTED_MODULE_2__["default"] }
];
VoucherRequestService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], VoucherRequestService);



/***/ }),

/***/ 38678:
/*!***************************************!*\
  !*** ./src/app/store/lesson.store.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LessonStore": () => (/* binding */ LessonStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-angular */ 42986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let LessonStore = class LessonStore {
    constructor() {
        this.lessons = [];
    }
    setSelectedLesson(lesson) {
        this.selectedLesson = lesson;
    }
    setLessons(lessons) {
        // this.countries.push(...countries);
        this.lessons = lessons;
    }
    addLesson(lesson) {
        this.lessons.push(lesson);
    }
};
LessonStore.ctorParameters = () => [];
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], LessonStore.prototype, "lessons", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], LessonStore.prototype, "selectedLesson", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], LessonStore.prototype, "loaded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], LessonStore.prototype, "setSelectedLesson", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], LessonStore.prototype, "setLessons", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], LessonStore.prototype, "addLesson", null);
LessonStore = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LessonStore);



/***/ }),

/***/ 35862:
/*!*************************************!*\
  !*** ./src/app/store/news.store.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsStore": () => (/* binding */ NewsStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-angular */ 42986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let NewsStore = class NewsStore {
    constructor() {
        this.news = [];
    }
    setSelectedNews(news) {
        this.selectedNews = news;
    }
    setNews(news) {
        // this.countries.push(...countries);
        this.news = news;
    }
    addNews(news) {
        this.news.unshift(news);
    }
};
NewsStore.ctorParameters = () => [];
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], NewsStore.prototype, "news", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], NewsStore.prototype, "selectedNews", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], NewsStore.prototype, "loaded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], NewsStore.prototype, "setSelectedNews", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], NewsStore.prototype, "setNews", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], NewsStore.prototype, "addNews", null);
NewsStore = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], NewsStore);



/***/ }),

/***/ 81869:
/*!*********************************************!*\
  !*** ./src/app/store/voucherBrand.store.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-angular */ 42986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let VoucherBrandStore = class VoucherBrandStore {
    constructor() {
        this.voucherBrands = [];
        this.voucherBrands = [];
        this.selectedVoucherBrand = null;
    }
    setVoucherBrands(vouchers) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Setting vouchers: ', vouchers);
            this.voucherBrands.push(...vouchers);
        });
    }
    setSelectedVoucherBrand(voucher) {
        console.log('Setting voucher: ', voucher);
        this.selectedVoucherBrand = voucher;
    }
    addVoucherBrand(voucher) {
        this.voucherBrands.push(voucher);
    }
};
VoucherBrandStore.ctorParameters = () => [];
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], VoucherBrandStore.prototype, "voucherBrands", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], VoucherBrandStore.prototype, "selectedVoucherBrand", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], VoucherBrandStore.prototype, "setVoucherBrands", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], VoucherBrandStore.prototype, "setSelectedVoucherBrand", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], VoucherBrandStore.prototype, "addVoucherBrand", null);
VoucherBrandStore = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], VoucherBrandStore);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VoucherBrandStore);


/***/ }),

/***/ 72943:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-8251f533.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 12815);
/* harmony import */ var _index_f8d8aa5a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f8d8aa5a.js */ 69286);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_f8d8aa5a_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};


/***/ }),

/***/ 17481:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};


/***/ }),

/***/ 55777:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-096cf6fd.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = rootEl => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;
  const setFocus = elements => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = ev => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = ev => {
    if (keyboardMode && ev.composedPath !== undefined) {
      const toFocus = ev.composedPath().filter(el => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};


/***/ }),

/***/ 65921:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-073a0b65.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CoreDelegate),
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Pavle_WebstormProjects_candy_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,C_Users_Pavle_WebstormProjects_candy_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (delegate, container, component, cssClasses, componentProps, inline) {
    var _a;
    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (!inline && typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }
    const el = typeof component === 'string' ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;
    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
      Object.assign(el, componentProps);
    }
    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });
  return function attachComponent(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};
const CoreDelegate = () => {
  let BaseComponent;
  let Reference;
  const attachViewToDom = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Pavle_WebstormProjects_candy_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parentElement, userComponent, userComponentProps = {}, cssClasses = []) {
      var _a, _b;
      BaseComponent = parentElement;
      /**
       * If passing in a component via the `component` props
       * we need to append it inside of our overlay component.
       */
      if (userComponent) {
        /**
         * If passing in the tag name, create
         * the element otherwise just get a reference
         * to the component.
         */
        const el = typeof userComponent === 'string' ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
        /**
         * Add any css classes passed in
         * via the cssClasses prop on the overlay.
         */
        cssClasses.forEach(c => el.classList.add(c));
        /**
         * Add any props passed in
         * via the componentProps prop on the overlay.
         */
        Object.assign(el, userComponentProps);
        /**
         * Finally, append the component
         * inside of the overlay component.
         */
        BaseComponent.appendChild(el);
        yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      } else if (BaseComponent.children.length > 0) {
        const root = BaseComponent.children[0];
        if (!root.classList.contains('ion-delegate-host')) {
          /**
           * If the root element is not a delegate host, it means
           * that the overlay has not been presented yet and we need
           * to create the containing element with the specified classes.
           */
          const el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement('div');
          // Add a class to track if the root element was created by the delegate.
          el.classList.add('ion-delegate-host');
          cssClasses.forEach(c => el.classList.add(c));
          // Move each child from the original template to the new parent element.
          el.append(...BaseComponent.children);
          // Append the new parent element to the original parent element.
          BaseComponent.appendChild(el);
        }
      }
      /**
       * Get the root of the app and
       * add the overlay there.
       */
      const app = document.querySelector('ion-app') || document.body;
      /**
       * Create a placeholder comment so that
       * we can return this component to where
       * it was previously.
       */
      Reference = document.createComment('ionic teleport');
      BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
      app.appendChild(BaseComponent);
      return BaseComponent;
    });
    return function attachViewToDom(_x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();
  const removeViewFromDom = () => {
    /**
     * Return component to where it was previously in the DOM.
     */
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }
    return Promise.resolve();
  };
  return {
    attachViewToDom,
    removeViewFromDom
  };
};


/***/ }),

/***/ 12815:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-029a46f6.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const HapticEngine = {
  getEngine() {
    var _a;
    const win = window;
    return win.TapticEngine || ((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Haptics')) && win.Capacitor.Plugins.Haptics;
  },
  available() {
    var _a;
    const win = window;
    const engine = this.getEngine();
    if (!engine) {
      return false;
    }
    /**
     * Developers can manually import the
     * Haptics plugin in their app which will cause
     * getEngine to return the Haptics engine. However,
     * the Haptics engine will throw an error if
     * used in a web browser that does not support
     * the Vibrate API. This check avoids that error
     * if the browser does not support the Vibrate API.
     */
    if (((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.getPlatform()) === 'web') {
      return typeof navigator !== 'undefined' && navigator.vibrate !== undefined;
    }
    return true;
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style
    });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style
    });
  },
  selection() {
    this.impact({
      style: 'light'
    });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
const hapticAvailable = () => {
  return HapticEngine.available();
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  hapticAvailable() && HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  hapticAvailable() && HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  hapticAvailable() && HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  hapticAvailable() && HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = options => {
  hapticAvailable() && HapticEngine.impact(options);
};


/***/ }),

/***/ 2002:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-40bb69ee.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowBackSharp),
/* harmony export */   "b": () => (/* binding */ closeCircle),
/* harmony export */   "c": () => (/* binding */ chevronBack),
/* harmony export */   "d": () => (/* binding */ closeSharp),
/* harmony export */   "e": () => (/* binding */ searchSharp),
/* harmony export */   "f": () => (/* binding */ checkmarkOutline),
/* harmony export */   "g": () => (/* binding */ ellipseOutline),
/* harmony export */   "h": () => (/* binding */ caretBackSharp),
/* harmony export */   "i": () => (/* binding */ arrowDown),
/* harmony export */   "j": () => (/* binding */ reorderThreeOutline),
/* harmony export */   "k": () => (/* binding */ reorderTwoSharp),
/* harmony export */   "l": () => (/* binding */ chevronDown),
/* harmony export */   "m": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "n": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "o": () => (/* binding */ chevronForward),
/* harmony export */   "p": () => (/* binding */ caretUpSharp),
/* harmony export */   "q": () => (/* binding */ caretDownSharp),
/* harmony export */   "r": () => (/* binding */ removeOutline),
/* harmony export */   "s": () => (/* binding */ searchOutline),
/* harmony export */   "t": () => (/* binding */ close),
/* harmony export */   "u": () => (/* binding */ menuOutline),
/* harmony export */   "v": () => (/* binding */ menuSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v6.0.3, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 33081:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-5d0c8232.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ION_CONTENT_ELEMENT_SELECTOR),
/* harmony export */   "a": () => (/* binding */ findIonContent),
/* harmony export */   "b": () => (/* binding */ ION_CONTENT_CLASS_SELECTOR),
/* harmony export */   "c": () => (/* binding */ scrollByPoint),
/* harmony export */   "d": () => (/* binding */ disableContentScrollY),
/* harmony export */   "f": () => (/* binding */ findClosestIonContent),
/* harmony export */   "g": () => (/* binding */ getScrollElement),
/* harmony export */   "i": () => (/* binding */ isIonContent),
/* harmony export */   "p": () => (/* binding */ printIonContentErrorMsg),
/* harmony export */   "r": () => (/* binding */ resetContentScrollY),
/* harmony export */   "s": () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var C_Users_Pavle_WebstormProjects_candy_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-c4b11676.js */ 99273);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const ION_CONTENT_TAG_NAME = 'ION-CONTENT';
const ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
const ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */
const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;
const isIonContent = el => el.tagName === ION_CONTENT_TAG_NAME;
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */
const getScrollElement = /*#__PURE__*/function () {
  var _ref = (0,C_Users_Pavle_WebstormProjects_candy_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      return el.getScrollElement();
    }
    return el;
  });
  return function getScrollElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */
const findIonContent = el => {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);
  if (customContentHost) {
    return customContentHost;
  }
  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */
const findClosestIonContent = el => {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */
const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }
  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */
const scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }
  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */
const printIonContentErrorMsg = el => {
  return (0,_index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__.a)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */
const disableContentScrollY = contentEl => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */
    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};
const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};


/***/ }),

/***/ 96524:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-4d5544a0.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_DID_CLOSE": () => (/* binding */ KEYBOARD_DID_CLOSE),
/* harmony export */   "KEYBOARD_DID_OPEN": () => (/* binding */ KEYBOARD_DID_OPEN),
/* harmony export */   "copyVisualViewport": () => (/* binding */ copyVisualViewport),
/* harmony export */   "keyboardDidClose": () => (/* binding */ keyboardDidClose),
/* harmony export */   "keyboardDidOpen": () => (/* binding */ keyboardDidOpen),
/* harmony export */   "keyboardDidResize": () => (/* binding */ keyboardDidResize),
/* harmony export */   "resetKeyboardAssist": () => (/* binding */ resetKeyboardAssist),
/* harmony export */   "setKeyboardClose": () => (/* binding */ setKeyboardClose),
/* harmony export */   "setKeyboardOpen": () => (/* binding */ setKeyboardOpen),
/* harmony export */   "startKeyboardAssist": () => (/* binding */ startKeyboardAssist),
/* harmony export */   "trackViewportChanges": () => (/* binding */ trackViewportChanges)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
const KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
const KEYBOARD_THRESHOLD = 150;
let previousVisualViewport = {};
let currentVisualViewport = {};
let keyboardOpen = false;
/**
 * This is only used for tests
 */
const resetKeyboardAssist = () => {
  previousVisualViewport = {};
  currentVisualViewport = {};
  keyboardOpen = false;
};
const startKeyboardAssist = win => {
  startNativeListeners(win);
  if (!win.visualViewport) {
    return;
  }
  currentVisualViewport = copyVisualViewport(win.visualViewport);
  win.visualViewport.onresize = () => {
    trackViewportChanges(win);
    if (keyboardDidOpen() || keyboardDidResize(win)) {
      setKeyboardOpen(win);
    } else if (keyboardDidClose(win)) {
      setKeyboardClose(win);
    }
  };
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */
const startNativeListeners = win => {
  win.addEventListener('keyboardDidShow', ev => setKeyboardOpen(win, ev));
  win.addEventListener('keyboardDidHide', () => setKeyboardClose(win));
};
const setKeyboardOpen = (win, ev) => {
  fireKeyboardOpenEvent(win, ev);
  keyboardOpen = true;
};
const setKeyboardClose = win => {
  fireKeyboardCloseEvent(win);
  keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accommodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */
const keyboardDidOpen = () => {
  const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
  return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */
const keyboardDidResize = win => {
  return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */
const keyboardDidClose = win => {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Dispatch a keyboard open event
 */
const fireKeyboardOpenEvent = (win, nativeEv) => {
  const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
  const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: {
      keyboardHeight
    }
  });
  win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */
const fireKeyboardCloseEvent = win => {
  const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
  win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */
const trackViewportChanges = win => {
  previousVisualViewport = Object.assign({}, currentVisualViewport);
  currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */
const copyVisualViewport = visualViewport => {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  };
};


/***/ }),

/***/ 23963:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-73af62b2.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createKeyboardController)
/* harmony export */ });
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-33ffec25.js */ 42286);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */
const createKeyboardController = keyboardChangeCallback => {
  let keyboardWillShowHandler;
  let keyboardWillHideHandler;
  let keyboardVisible;
  const init = () => {
    keyboardWillShowHandler = () => {
      keyboardVisible = true;
      if (keyboardChangeCallback) keyboardChangeCallback(true);
    };
    keyboardWillHideHandler = () => {
      keyboardVisible = false;
      if (keyboardChangeCallback) keyboardChangeCallback(false);
    };
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
  };
  const destroy = () => {
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
    keyboardWillShowHandler = keyboardWillHideHandler = undefined;
  };
  const isKeyboardVisible = () => keyboardVisible;
  init();
  return {
    init,
    destroy,
    isKeyboardVisible
  };
};


/***/ }),

/***/ 43844:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-5d6b6fe7.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  bubbles: {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          left: `${9 - 9 * index}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
const SPINNERS = spinners;


/***/ }),

/***/ 64114:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-5351da01.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSwipeBackGesture": () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 17481);
/* harmony import */ var _index_f8d8aa5a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f8d8aa5a.js */ 69286);
/* harmony import */ var _gesture_controller_17060b7c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gesture-controller-17060b7c.js */ 56379);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  const rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
  /**
   * Determine if a gesture is near the edge
   * of the screen. If true, then the swipe
   * to go back gesture should proceed.
   */
  const isAtEdge = detail => {
    const threshold = 50;
    const {
      startX
    } = detail;
    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }
    return startX <= threshold;
  };
  const getDeltaX = detail => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };
  const getVelocityX = detail => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };
  const canStart = detail => {
    return isAtEdge(detail) && canStartHandler();
  };
  const onMove = detail => {
    // set the transition animation's progress
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };
  const onEnd = detail => {
    // the swipe back gesture has ended
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2.0;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;
    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    /**
     * TODO: stepValue can sometimes return negative values
     * or values greater than 1 which should not be possible.
     * Need to investigate more to find where the issue is.
     */
    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_0__.l)(0, stepValue, 0.9999), realDur);
  };
  return (0,_index_f8d8aa5a_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'goback-swipe',
    gesturePriority: 40,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};


/***/ }),

/***/ 15116:
/*!**********************************************************************!*\
  !*** ./src/app/pages/notification/notification.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".cardSubtitle {\n  font-size: 9pt;\n}\n\n.cardTitle {\n  font-size: 10pt;\n}\n\n.cardArrowCol {\n  text-align: right;\n  align-self: center;\n  font-size: 15pt;\n}\n\n.customHeader {\n  background-color: #3498db;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.headerLogo {\n  font-size: 30pt;\n  color: white;\n  font-weight: bold;\n}\n\n.headerRow {\n  justify-content: center;\n}\n\n.headerMoney {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 30pt;\n  color: white;\n  font-weight: bold;\n}\n\n.headerText {\n  text-align: center;\n  font-size: 12pt;\n  color: white;\n  font-weight: bold;\n}\n\n.noData {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  font-weight: bold;\n  font-size: 20px;\n  align-items: center;\n}\n\n.newsCard {\n  height: 300px !important;\n  width: 350px !important;\n}\n\n.newsPhoto {\n  height: 200px !important;\n  width: 350px !important;\n  object-fit: cover !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLHVCQUFBO0FBQUY7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBQ0YiLCJmaWxlIjoibm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkU3VidGl0bGV7XHJcbiAgZm9udC1zaXplOiA5cHQ7XHJcbn1cclxuLmNhcmRUaXRsZXtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuLmNhcmRBcnJvd0NvbHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNXB0O1xyXG59XHJcblxyXG4uY3VzdG9tSGVhZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XHJcbiAgaGVpZ2h0OjI1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlclRpdGxle1xyXG5cclxufVxyXG4uaGVhZGVyTG9nb3tcclxuICBmb250LXNpemU6IDMwcHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkXHJcbiAgLy9mb250LWZhbWlseTogcGFkbWFhLUJvbGQuMS4xO1xyXG59XHJcbi5oZWFkZXJSb3d7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmhlYWRlck1vbmV5e1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDMwcHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuLmhlYWRlclRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJwdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuLm5vRGF0YXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5uZXdzQ2FyZCB7XHJcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmV3c1Bob3RvIHtcclxuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 44863:
/*!**************************************************************!*\
  !*** ./src/app/pages/training/training.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".cardSubtitle {\n  font-size: 9pt;\n}\n\n.cardTitle {\n  font-size: 10pt;\n}\n\n.cardArrowCol {\n  text-align: right;\n  align-self: center;\n  font-size: 15pt;\n}\n\n.customHeader {\n  background-color: #3498db;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.headerLogo {\n  font-size: 30pt;\n  color: white;\n  font-weight: bold;\n}\n\n.headerRow {\n  justify-content: center;\n}\n\n.headerMoney {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 30pt;\n  color: white;\n  font-weight: bold;\n}\n\n.headerText {\n  text-align: center;\n  font-size: 12pt;\n  color: white;\n  font-weight: bold;\n}\n\n.newsCard {\n  height: 300px !important;\n  width: 350px !important;\n}\n\n.newsPhoto {\n  height: 200px !important;\n  width: 350px !important;\n  object-fit: cover !important;\n}\n\n.noData {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  font-weight: bold;\n  font-size: 20px;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsdUJBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBRiIsImZpbGUiOiJ0cmFpbmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFN1YnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogOXB0O1xyXG59XHJcbi5jYXJkVGl0bGV7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcbi5jYXJkQXJyb3dDb2x7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVwdDtcclxufVxyXG5cclxuLmN1c3RvbUhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gIGhlaWdodDoyNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXJUaXRsZXtcclxuXHJcbn1cclxuLmhlYWRlckxvZ297XHJcbiAgZm9udC1zaXplOiAzMHB0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG4gIC8vZm9udC1mYW1pbHk6IHBhZG1hYS1Cb2xkLjEuMTtcclxufVxyXG4uaGVhZGVyUm93e1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5oZWFkZXJNb25leXtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzMHB0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcbi5oZWFkZXJUZXh0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuXHJcblxyXG4ubmV3c0NhcmQge1xyXG4gIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMzUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5ld3NQaG90byB7XHJcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubm9EYXRhe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 45816:
/*!**********************************************************************!*\
  !*** ./src/app/pages/notification/notification.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"background-color: #f5f5f3\">\r\n      Notifikacije\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card *ngFor=\"let notification of notificationStore.notifications\">\r\n    <ion-card-content>\r\n      <ion-card-title class=\"cardTitle\">{{notification.text}}</ion-card-title>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div class=\"noData\" *ngIf=\"notificationStore.notifications.length===0\">\r\n    <p>Trenutno nemate notifikacije</p>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 1396:
/*!**************************************************************!*\
  !*** ./src/app/pages/training/training.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<!--<ion-header class=\"customHeader\" mode=\"ios\">-->\r\n<!--</ion-header>-->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"background-color: #f5f5f3\">\r\n      Trening\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen=\"true\">\r\n  <ion-card *ngFor=\"let lesson of lessonStore.lessons\" (click)=\"selectLesson(lesson)\">\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col style=\"display: flex; align-items: center;\">\r\n<!--            <ion-card-subtitle></ion-card-subtitle>-->\r\n            <ion-card-title class=\"cardTitle\">{{lesson.title}}</ion-card-title>\r\n          </ion-col>\r\n          <ion-col class=\"cardArrowCol\">\r\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div class=\"noData\" *ngIf=\"lessonStore.lessons.length===0\">\r\n    <p>Trenutno nema aktivnih treninga</p>\r\n  </div>\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=common.js.map