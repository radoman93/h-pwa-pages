"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_helper_pagination_helper_ts-src_app_helper_parse_helper_ts-src_app_pages_lesson_lesso-61bb47"],{

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

/***/ 16615:
/*!*******************************************************!*\
  !*** ./src/app/pages/lesson/lesson-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LessonPageRoutingModule": () => (/* binding */ LessonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _lesson_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson.page */ 68936);




const routes = [
    {
        path: '',
        component: _lesson_page__WEBPACK_IMPORTED_MODULE_0__.LessonPage
    }
];
let LessonPageRoutingModule = class LessonPageRoutingModule {
};
LessonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LessonPageRoutingModule);



/***/ }),

/***/ 85299:
/*!***********************************************!*\
  !*** ./src/app/pages/lesson/lesson.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LessonPageModule": () => (/* binding */ LessonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _lesson_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson-routing.module */ 16615);
/* harmony import */ var _lesson_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lesson.page */ 68936);







let LessonPageModule = class LessonPageModule {
};
LessonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _lesson_routing_module__WEBPACK_IMPORTED_MODULE_0__.LessonPageRoutingModule
        ],
        declarations: [_lesson_page__WEBPACK_IMPORTED_MODULE_1__.LessonPage]
    })
], LessonPageModule);



/***/ }),

/***/ 68936:
/*!*********************************************!*\
  !*** ./src/app/pages/lesson/lesson.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LessonPage": () => (/* binding */ LessonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _lesson_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson.page.html?ngResource */ 76037);
/* harmony import */ var _lesson_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lesson.page.scss?ngResource */ 1141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _store_lesson_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/lesson.store */ 38678);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_lesson_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/lesson.service */ 73677);








let LessonPage = class LessonPage {
    constructor(lessonService, lessonStore, router, navCtrl) {
        this.lessonService = lessonService;
        this.lessonStore = lessonStore;
        this.router = router;
        this.navCtrl = navCtrl;
        this.pageType = 0;
        this.correctAnswers = 0;
        this.questionPage = 0;
        this.page = 0;
    }
    ngOnInit() {
    }
    incrementPage() {
        this.page++;
    }
    decrementPage() {
        this.page--;
    }
    answerQuestion(answer) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (answer === this.lessonStore.selectedLesson.questions[this.questionPage].correctAnswer) {
                this.correctAnswers++;
            }
            if (this.questionPage === this.lessonStore.selectedLesson.questions.length - 1) {
                this.pageType = 2;
                if (this.correctAnswers === this.lessonStore.selectedLesson.questions.length) {
                    yield this.lessonService.finishLesson(true);
                }
                else {
                    yield this.lessonService.finishLesson(false);
                }
            }
            else {
                this.questionPage++;
            }
        });
    }
    gotoQuestions() {
        // this.router.navigate(['/question']);
        this.pageType = 1;
    }
    goBack() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navCtrl.pop();
        });
    }
};
LessonPage.ctorParameters = () => [
    { type: _service_lesson_service__WEBPACK_IMPORTED_MODULE_3__.LessonService },
    { type: _store_lesson_store__WEBPACK_IMPORTED_MODULE_2__.LessonStore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
LessonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-lesson',
        template: _lesson_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_lesson_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LessonPage);



/***/ }),

/***/ 1141:
/*!**********************************************************!*\
  !*** ./src/app/pages/lesson/lesson.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".customHeader {\n  max-height: 350px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.questionName {\n  justify-content: center;\n}\n\n.congratsScreen {\n  justify-content: center;\n}\n\n.finalScreen {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.congratsText {\n  font-weight: bolder;\n}\n\n.finalPoints {\n  font-size: 50px;\n}\n\n.bottomNavigation {\n  display: flex;\n  font-size: 40px;\n  padding-bottom: 30px;\n  justify-content: space-evenly;\n}\n\nion-footer {\n  background-color: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlc3Nvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0YiLCJmaWxlIjoibGVzc29uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21IZWFkZXJ7XHJcbiAgbWF4LWhlaWdodDogMzUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5xdWVzdGlvbk5hbWV7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb25ncmF0c1NjcmVlbntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZpbmFsU2NyZWVue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb25ncmF0c1RleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5maW5hbFBvaW50cyB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG4uYm90dG9tTmF2aWdhdGlvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuaW9uLWZvb3RlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWYzO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 76037:
/*!**********************************************************!*\
  !*** ./src/app/pages/lesson/lesson.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div *ngIf=\"pageType===0\">\r\n    <img [src]=\"lessonStore.selectedLesson.lessonData[page].image\" class=\"customHeader\">\r\n\r\n    <div class=\"ion-padding\">\r\n      <p>{{lessonStore.selectedLesson.lessonData[page].text}}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ion-padding\" *ngIf=\"pageType===1\">\r\n    <ion-grid>\r\n      <ion-row class=\"questionName\">\r\n        <h2>{{lessonStore.selectedLesson.questions[questionPage].question}}</h2>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <div class=\"ion-padding finalScreen\" *ngIf=\"pageType===2\">\r\n    <ion-row class=\"questionName\">\r\n      <h2 class=\"finalPoints\">{{correctAnswers}}/{{lessonStore.selectedLesson.questions.length}}</h2>\r\n    </ion-row>\r\n    <ion-row class=\"congratsScreen\">\r\n      <p class=\"congratsText\" *ngIf=\"correctAnswers===lessonStore.selectedLesson.questions.length\">Cestitamo prosli ste ovaj test</p>\r\n      <p class=\"congratsText\" *ngIf=\"correctAnswers!==lessonStore.selectedLesson.questions.length\">Nazalost niste prosli ovaj test</p>\r\n    </ion-row>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\" style=\"margin: 0px;\">\r\n  <div class=\"row bottomNavigation\"  *ngIf=\"pageType === 0\">\r\n    <ion-icon name=\"arrow-back-outline\" *ngIf=\"page!==0\" (click)=\"decrementPage()\"></ion-icon>\r\n    <ion-icon name=\"arrow-back-outline\" *ngIf=\"page===0\"></ion-icon>\r\n    <ion-icon name=\"checkmark-outline\" *ngIf=\"page===lessonStore.selectedLesson.lessonData.length-1\" (click)=\"gotoQuestions()\"></ion-icon>\r\n    <ion-icon name=\"arrow-forward-outline\" *ngIf=\"page!==lessonStore.selectedLesson.lessonData.length-1\" (click)=\"incrementPage()\"></ion-icon>\r\n  </div>\r\n  <div *ngIf=\"pageType===1\">\r\n    <ion-button *ngFor=\"let answer of lessonStore.selectedLesson.questions[questionPage].answers\" expand=\"block\" (click)=\"answerQuestion(answer)\">{{answer}}</ion-button>\r\n  </div>\r\n\r\n  <div *ngIf=\"pageType === 2\">\r\n    <ion-button expand=\"block\" (click)=\"goBack()\">Finish</ion-button>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_helper_pagination_helper_ts-src_app_helper_parse_helper_ts-src_app_pages_lesson_lesso-61bb47.js.map