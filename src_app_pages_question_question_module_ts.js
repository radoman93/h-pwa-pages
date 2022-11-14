"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_question_question_module_ts"],{

/***/ 14870:
/*!***********************************************************!*\
  !*** ./src/app/pages/question/question-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionPageRoutingModule": () => (/* binding */ QuestionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _question_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.page */ 52521);




const routes = [
    {
        path: '',
        component: _question_page__WEBPACK_IMPORTED_MODULE_0__.QuestionPage
    }
];
let QuestionPageRoutingModule = class QuestionPageRoutingModule {
};
QuestionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuestionPageRoutingModule);



/***/ }),

/***/ 49092:
/*!***************************************************!*\
  !*** ./src/app/pages/question/question.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionPageModule": () => (/* binding */ QuestionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _question_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-routing.module */ 14870);
/* harmony import */ var _question_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question.page */ 52521);







let QuestionPageModule = class QuestionPageModule {
};
QuestionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _question_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionPageRoutingModule
        ],
        declarations: [_question_page__WEBPACK_IMPORTED_MODULE_1__.QuestionPage]
    })
], QuestionPageModule);



/***/ }),

/***/ 52521:
/*!*************************************************!*\
  !*** ./src/app/pages/question/question.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionPage": () => (/* binding */ QuestionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _question_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.page.html?ngResource */ 97798);
/* harmony import */ var _question_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question.page.scss?ngResource */ 61437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let QuestionPage = class QuestionPage {
    constructor() { }
    ngOnInit() {
    }
};
QuestionPage.ctorParameters = () => [];
QuestionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-question',
        template: _question_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_question_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionPage);



/***/ }),

/***/ 61437:
/*!**************************************************************!*\
  !*** ./src/app/pages/question/question.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 97798:
/*!**************************************************************!*\
  !*** ./src/app/pages/question/question.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>question</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_question_question_module_ts.js.map