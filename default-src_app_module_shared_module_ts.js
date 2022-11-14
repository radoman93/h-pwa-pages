"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_module_shared_module_ts"],{

/***/ 73310:
/*!*********************************************************************!*\
  !*** ./src/app/components/button-loader/button-loader.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonLoaderComponent": () => (/* binding */ ButtonLoaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _button_loader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-loader.component.html?ngResource */ 35927);
/* harmony import */ var _button_loader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-loader.component.scss?ngResource */ 90527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ButtonLoaderComponent = class ButtonLoaderComponent {
    constructor() { }
    ngOnInit() { }
};
ButtonLoaderComponent.ctorParameters = () => [];
ButtonLoaderComponent.propDecorators = {
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ButtonLoaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-button-loader',
        template: _button_loader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_button_loader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ButtonLoaderComponent);



/***/ }),

/***/ 10563:
/*!*********************************************************************!*\
  !*** ./src/app/components/error-message/error-message.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorMessageComponent": () => (/* binding */ ErrorMessageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _error_message_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-message.component.html?ngResource */ 46035);
/* harmony import */ var _error_message_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-message.component.scss?ngResource */ 13949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ErrorMessageComponent = class ErrorMessageComponent {
    constructor() {
        this.message = '';
    }
    ngOnInit() { }
};
ErrorMessageComponent.ctorParameters = () => [];
ErrorMessageComponent.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ErrorMessageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-error-message',
        template: _error_message_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_error_message_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ErrorMessageComponent);



/***/ }),

/***/ 56161:
/*!***************************************************************************!*\
  !*** ./src/app/components/form-input-error/form-input-error.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputErrorComponent": () => (/* binding */ FormInputErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_input_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-input-error.component.html?ngResource */ 86950);
/* harmony import */ var _form_input_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-input-error.component.scss?ngResource */ 94749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let FormInputErrorComponent = class FormInputErrorComponent {
    get formInputError() {
        if (this.form.controls[this.formInput]) {
            const errors = this.form.controls[this.formInput].errors;
            for (const errorName in errors) {
                if (errors[errorName]) {
                    switch (errorName) {
                        case 'required':
                            return null;
                        case 'minlength':
                            return `Must be at least ${this.form.controls[this.formInput].errors.minlength.requiredLength} characters long.`;
                        case 'email':
                            return 'Please enter an email address';
                        default:
                            return this.form.controls[this.formInput].errors[errorName];
                    }
                }
            }
            return null;
        }
    }
};
FormInputErrorComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    formInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
FormInputErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-form-input-error',
        template: _form_input_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_form_input_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormInputErrorComponent);



/***/ }),

/***/ 52187:
/*!*****************************************************!*\
  !*** ./src/app/components/input/input.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.component.html?ngResource */ 11375);
/* harmony import */ var _input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.component.scss?ngResource */ 98540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);





let InputComponent = class InputComponent {
    constructor() {
        this.onChange = (_) => {
        };
        this.onTouched = () => {
        };
    }
    get myValue() {
        return this._value;
    }
    set myValue(v) {
        let value = v;
        if (this.trim) {
            console.log('Removing white space');
            value = value.trim();
        }
        if (value !== this._value) {
            this._value = value;
            this.onChange(value);
        }
    }
    writeValue(value) {
        if (this.trim) {
            this.myValue = value.trim();
        }
        else {
            this.myValue = value;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        throw new Error('Method not implemented.');
    }
};
InputComponent.ctorParameters = () => [];
InputComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    trim: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
InputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-input',
        template: _input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
                useExisting: InputComponent,
                multi: true
            }],
        styles: [_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InputComponent);



/***/ }),

/***/ 85426:
/*!*******************************************************************!*\
  !*** ./src/app/components/kroba-loader/kroba-loader.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KrobaLoaderComponent": () => (/* binding */ KrobaLoaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _kroba_loader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kroba-loader.component.html?ngResource */ 87269);
/* harmony import */ var _kroba_loader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kroba-loader.component.scss?ngResource */ 26460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);





let KrobaLoaderComponent = class KrobaLoaderComponent {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    ngOnChanges(changes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loading) {
                const delay = ms => new Promise(res => setTimeout(res, ms));
                yield delay(1000);
                console.log('Dismissing');
            }
            this.checkLoaded(this.loaded).then(r => { }).catch(e => {
                this.loading.dismiss();
                console.log('Error:', e);
            });
        });
    }
    checkLoaded(loaded) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (loaded === true && this.loading) {
                console.log('Dissmising loading: ', loaded);
                this.loading.dismiss();
                this.loading = null;
            }
            else if (loaded === false) {
                yield this.presentLoading();
            }
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 50000,
            });
            yield loading.present();
            this.loading = loading;
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    ngOnInit() {
    }
};
KrobaLoaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
KrobaLoaderComponent.propDecorators = {
    loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
KrobaLoaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-kroba-loader',
        template: _kroba_loader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_kroba_loader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], KrobaLoaderComponent);



/***/ }),

/***/ 63560:
/*!*************************************************************!*\
  !*** ./src/app/components/sold-card/sold-card.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoldCardComponent": () => (/* binding */ SoldCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sold_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sold-card.component.html?ngResource */ 39985);
/* harmony import */ var _sold_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sold-card.component.scss?ngResource */ 92111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let SoldCardComponent = class SoldCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
SoldCardComponent.ctorParameters = () => [];
SoldCardComponent.propDecorators = {
    sold: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
SoldCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-sold-card',
        template: _sold_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sold_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SoldCardComponent);



/***/ }),

/***/ 45977:
/*!*******************************************************************!*\
  !*** ./src/app/components/voucher-card/voucher-card.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherCardComponent": () => (/* binding */ VoucherCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _voucher_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-card.component.html?ngResource */ 26097);
/* harmony import */ var _voucher_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucher-card.component.scss?ngResource */ 19890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let VoucherCardComponent = class VoucherCardComponent {
    constructor() { }
    ngOnInit() { }
};
VoucherCardComponent.ctorParameters = () => [];
VoucherCardComponent.propDecorators = {
    voucher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
VoucherCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-voucher-card',
        template: _voucher_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_voucher_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VoucherCardComponent);



/***/ }),

/***/ 49450:
/*!***********************************************************************************!*\
  !*** ./src/app/components/voucher-request-card/voucher-request-card.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherRequestCardComponent": () => (/* binding */ VoucherRequestCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _voucher_request_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-request-card.component.html?ngResource */ 35220);
/* harmony import */ var _voucher_request_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucher-request-card.component.scss?ngResource */ 38042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let VoucherRequestCardComponent = class VoucherRequestCardComponent {
    constructor() { }
    ngOnInit() { }
};
VoucherRequestCardComponent.ctorParameters = () => [];
VoucherRequestCardComponent.propDecorators = {
    voucher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
VoucherRequestCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-voucher-request-card',
        template: _voucher_request_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_voucher_request_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VoucherRequestCardComponent);



/***/ }),

/***/ 86346:
/*!*****************************************!*\
  !*** ./src/app/module/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _components_form_input_error_form_input_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/form-input-error/form-input-error.component */ 56161);
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/input/input.component */ 52187);
/* harmony import */ var _components_button_loader_button_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/button-loader/button-loader.component */ 73310);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/error-message/error-message.component */ 10563);
/* harmony import */ var _components_kroba_loader_kroba_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/kroba-loader/kroba-loader.component */ 85426);
/* harmony import */ var _components_voucher_card_voucher_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/voucher-card/voucher-card.component */ 45977);
/* harmony import */ var _components_voucher_request_card_voucher_request_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/voucher-request-card/voucher-request-card.component */ 49450);
/* harmony import */ var ngx_trim_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-trim-directive */ 43041);
/* harmony import */ var _components_sold_card_sold_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sold-card/sold-card.component */ 63560);














let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, ngx_trim_directive__WEBPACK_IMPORTED_MODULE_13__.NgxTrimDirectiveModule],
        declarations: [_components_sold_card_sold_card_component__WEBPACK_IMPORTED_MODULE_7__.SoldCardComponent, _components_kroba_loader_kroba_loader_component__WEBPACK_IMPORTED_MODULE_4__.KrobaLoaderComponent, _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_3__.ErrorMessageComponent, _components_form_input_error_form_input_error_component__WEBPACK_IMPORTED_MODULE_0__.FormInputErrorComponent, _components_input_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent, _components_button_loader_button_loader_component__WEBPACK_IMPORTED_MODULE_2__.ButtonLoaderComponent, _components_voucher_card_voucher_card_component__WEBPACK_IMPORTED_MODULE_5__.VoucherCardComponent, _components_voucher_request_card_voucher_request_card_component__WEBPACK_IMPORTED_MODULE_6__.VoucherRequestCardComponent],
        exports: [_components_sold_card_sold_card_component__WEBPACK_IMPORTED_MODULE_7__.SoldCardComponent, _components_kroba_loader_kroba_loader_component__WEBPACK_IMPORTED_MODULE_4__.KrobaLoaderComponent, _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_3__.ErrorMessageComponent, _components_form_input_error_form_input_error_component__WEBPACK_IMPORTED_MODULE_0__.FormInputErrorComponent, _components_input_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent, _components_button_loader_button_loader_component__WEBPACK_IMPORTED_MODULE_2__.ButtonLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _components_voucher_card_voucher_card_component__WEBPACK_IMPORTED_MODULE_5__.VoucherCardComponent, _components_voucher_request_card_voucher_request_card_component__WEBPACK_IMPORTED_MODULE_6__.VoucherRequestCardComponent]
    })
], SharedModule);



/***/ }),

/***/ 43041:
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-trim-directive/__ivy_ngcc__/fesm2015/ngx-trim-directive.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxTrimDirective": () => (/* binding */ NgxTrimDirective),
/* harmony export */   "NgxTrimDirectiveModule": () => (/* binding */ NgxTrimDirectiveModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


class NgxTrimDirective {
  /**
   * @param {?} elementRef
   * @param {?} ngControl
   */
  constructor(elementRef, ngControl) {
    this.elementRef = elementRef;
    this.ngControl = ngControl;
    this.trimOnWriteValue = true;
  }
  /**
   * @param {?} trimOption
   * @return {?}
   */
  set trim(trimOption) {
    if (trimOption !== '' && trimOption !== 'blur' && trimOption !== false) {
      console.warn(`Note: The value ${JSON.stringify(trimOption)} is not assignable to the trim attribute.
        Only blank string (""), "blur" or false is allowed.`);
      this._trim = false;
      return;
    }
    this._trim = trimOption;
    /** @type {?} */
    const elem = this.elementRef.nativeElement;
    /** @type {?} */
    const eleValue = elem.value;
    if (trimOption !== false && eleValue !== eleValue.trim()) {
      // initially trim the value if needed
      NgxTrimDirective.dispatchEvent(elem, 'blur');
    }
  }
  /**
   * @return {?}
   */
  get trim() {
    return this._trim;
  }
  /**
   * @private
   * @param {?} el
   * @return {?}
   */
  static getCaret(el) {
    return {
      start: el.selectionStart,
      end: el.selectionEnd
    };
  }
  /**
   * @private
   * @param {?} el
   * @param {?} start
   * @param {?} end
   * @return {?}
   */
  static setCaret(el, start, end) {
    el.selectionStart = start;
    el.selectionEnd = end;
    el.focus();
  }
  /**
   * @private
   * @param {?} el
   * @param {?} eventType
   * @return {?}
   */
  static dispatchEvent(el, eventType) {
    /** @type {?} */
    const event = document.createEvent('Event');
    event.initEvent(eventType, false, false);
    el.dispatchEvent(event);
  }
  /**
   * @private
   * @param {?} el
   * @param {?} value
   * @return {?}
   */
  static trimValue(el, value) {
    el.value = value.trim();
    NgxTrimDirective.dispatchEvent(el, 'input');
  }
  /**
   * @return {?}
   */
  ngOnInit() {
    if (!this.ngControl) {
      console.warn('Note: The trim directive should be used with one of ngModel, formControl or formControlName directives.');
      return;
    }
    this._valueAccessor = this.ngControl.valueAccessor;
    this._writeValue = this._valueAccessor.writeValue;
    this._valueAccessor.writeValue =
    /**
    * @param {?} value
    * @return {?}
    */
    value => {
      /** @type {?} */
      const _value = this.trim === false || !value || 'function' !== typeof value.trim || !this.trimOnWriteValue ? value : value.trim();
      if (this._writeValue) {
        this._writeValue.call(this._valueAccessor, _value);
      }
      if (value !== _value) {
        if (this._valueAccessor['onChange']) {
          this._valueAccessor['onChange'](_value);
        }
        if (this._valueAccessor['onTouched']) {
          this._valueAccessor['onTouched']();
        }
      }
    };
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    if (this._valueAccessor && this._writeValue) {
      this._valueAccessor.writeValue = this._writeValue;
    }
  }
  /**
   * @param {?} el
   * @param {?} value
   * @return {?}
   */
  onBlur(el, value) {
    if (this.trim === false) {
      return;
    }
    if ((this.trim === '' || 'blur' === this.trim) && 'function' === typeof value.trim && value.trim() !== value) {
      NgxTrimDirective.trimValue(el, value);
      NgxTrimDirective.dispatchEvent(el, 'blur'); // in case updateOn is set to blur
    }
  }
  /**
   * @param {?} el
   * @param {?} value
   * @return {?}
   */
  onInput(el, value) {
    if (this.trim === false) {
      return;
    }
    if (this.trim === '' && 'function' === typeof value.trim && value.trim() !== value) {
      let {
        start,
        end
      } = NgxTrimDirective.getCaret(el);
      if (value[0] === ' ' && start === 1 && end === 1) {
        start = 0;
        end = 0;
      }
      NgxTrimDirective.trimValue(el, value);
      NgxTrimDirective.setCaret(el, start, end);
    }
  }
}
NgxTrimDirective.ɵfac = function NgxTrimDirective_Factory(t) {
  return new (t || NgxTrimDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 8));
};
NgxTrimDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgxTrimDirective,
  selectors: [["input", "trim", ""], ["textarea", "trim", ""]],
  hostBindings: function NgxTrimDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NgxTrimDirective_blur_HostBindingHandler($event) {
        return ctx.onBlur($event.target, $event.target.value);
      })("input", function NgxTrimDirective_input_HostBindingHandler($event) {
        return ctx.onInput($event.target, $event.target.value);
      });
    }
  },
  inputs: {
    trimOnWriteValue: "trimOnWriteValue",
    trim: "trim"
  }
});
/** @nocollapse */
NgxTrimDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
  }]
}];
NgxTrimDirective.propDecorators = {
  trim: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['trim']
  }],
  trimOnWriteValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  onBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['blur', ['$event.target', '$event.target.value']]
  }],
  onInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['input', ['$event.target', '$event.target.value']]
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxTrimDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[trim],textarea[trim]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    trimOnWriteValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trim: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['trim']
    }],
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['blur', ['$event.target', '$event.target.value']]
    }],
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['input', ['$event.target', '$event.target.value']]
    }]
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxTrimDirectiveModule {}
NgxTrimDirectiveModule.ɵfac = function NgxTrimDirectiveModule_Factory(t) {
  return new (t || NgxTrimDirectiveModule)();
};
NgxTrimDirectiveModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxTrimDirectiveModule
});
NgxTrimDirectiveModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxTrimDirectiveModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [],
      declarations: [NgxTrimDirective],
      exports: [NgxTrimDirective]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxTrimDirectiveModule, {
    declarations: [NgxTrimDirective],
    exports: [NgxTrimDirective]
  });
})();


/***/ }),

/***/ 90527:
/*!**********************************************************************************!*\
  !*** ./src/app/components/button-loader/button-loader.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tbG9hZGVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 13949:
/*!**********************************************************************************!*\
  !*** ./src/app/components/error-message/error-message.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "[alert] {\n  font-size: 0.9rem;\n  text-align: center;\n  padding: 0.4rem !important;\n  margin: 0 10% 1% 10%;\n  border: 1px solid transparent;\n  border-radius: 0.4rem;\n}\n\n[alert-danger] {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0YiLCJmaWxlIjoiZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlthbGVydF0ge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjRyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgMTAlIDElIDEwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbn1cclxuXHJcblthbGVydC1kYW5nZXJdIHtcclxuICBjb2xvcjogI2E5NDQ0MjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xyXG4gIGJvcmRlci1jb2xvcjogI2ViY2NkMTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 94749:
/*!****************************************************************************************!*\
  !*** ./src/app/components/form-input-error/form-input-error.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "[alert] {\n  font-size: 0.9rem;\n  text-align: center;\n  padding: 0.4rem !important;\n  margin: 0 10% 1% 10%;\n  border: 1px solid transparent;\n  border-radius: 0.4rem;\n}\n\n[alert-danger] {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0taW5wdXQtZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0YiLCJmaWxlIjoiZm9ybS1pbnB1dC1lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlthbGVydF0ge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjRyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgMTAlIDElIDEwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbn1cclxuXHJcblthbGVydC1kYW5nZXJdIHtcclxuICBjb2xvcjogI2E5NDQ0MjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xyXG4gIGJvcmRlci1jb2xvcjogI2ViY2NkMTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 98540:
/*!******************************************************************!*\
  !*** ./src/app/components/input/input.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  border-radius: 10px;\n  height: 55px;\n}\nion-item ion-input {\n  font-size: 18px;\n  --padding-top: 20px;\n  --padding-bottom: 15px;\n  --padding-start: 5px;\n}\nion-item a {\n  font-size: 17px;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFESiIsImZpbGUiOiJpbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuXHJcblxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 26460:
/*!********************************************************************************!*\
  !*** ./src/app/components/kroba-loader/kroba-loader.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrcm9iYS1sb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 92111:
/*!**************************************************************************!*\
  !*** ./src/app/components/sold-card/sold-card.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "img {\n  height: 70px;\n  width: 70px;\n  object-fit: cover;\n  border-radius: 40px;\n}\n\n.cardDetails {\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  text-align: right;\n}\n\n.voucherName {\n  color: white;\n  font-weight: bold;\n  font-size: 14pt;\n}\n\n.voucherBrand {\n  color: lightgray;\n}\n\n.cardTopHalf {\n  background-color: #48697A;\n  padding: 10px;\n}\n\n.bottomDescription {\n  font-size: 12pt;\n  display: flex;\n  height: 70px;\n  justify-content: space-evenly;\n  flex-direction: column;\n}\n\n.bottomDescriptionRow {\n  display: flex;\n  align-items: center;\n}\n\n.bottomDescriptionRow span {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbGQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQUU7RUFDRSxpQkFBQTtBQUVKIiwiZmlsZSI6InNvbGQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG5cclxuLmNhcmREZXRhaWxze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi52b3VjaGVyTmFtZXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG59XHJcblxyXG4udm91Y2hlckJyYW5ke1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5jYXJkVG9wSGFsZntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg2OTdBO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5ib3R0b21EZXNjcmlwdGlvbntcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJvdHRvbURlc2NyaXB0aW9uUm93e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBzcGFue1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 19890:
/*!********************************************************************************!*\
  !*** ./src/app/components/voucher-card/voucher-card.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "img {\n  height: 70px;\n  width: 70px;\n  object-fit: cover;\n  border-radius: 40px;\n}\n\n.cardDetails {\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  text-align: right;\n}\n\n.voucherName {\n  color: white;\n  font-weight: bold;\n  font-size: 14pt;\n}\n\n.voucherBrand {\n  color: lightgray;\n}\n\n.cardTopHalf {\n  background-color: #48697A;\n  padding: 10px;\n}\n\n.bottomDescription {\n  font-size: 12pt;\n  display: flex;\n  height: 70px;\n  justify-content: space-evenly;\n  flex-direction: column;\n}\n\n.bottomDescriptionRow {\n  display: flex;\n  align-items: center;\n}\n\n.bottomDescriptionRow span {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdWNoZXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQUU7RUFDRSxpQkFBQTtBQUVKIiwiZmlsZSI6InZvdWNoZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG5cclxuLmNhcmREZXRhaWxze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi52b3VjaGVyTmFtZXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG59XHJcblxyXG4udm91Y2hlckJyYW5ke1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5jYXJkVG9wSGFsZntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg2OTdBO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5ib3R0b21EZXNjcmlwdGlvbntcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJvdHRvbURlc2NyaXB0aW9uUm93e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBzcGFue1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 38042:
/*!************************************************************************************************!*\
  !*** ./src/app/components/voucher-request-card/voucher-request-card.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "img {\n  height: 70px;\n  width: 70px;\n  object-fit: cover;\n  border-radius: 40px;\n}\n\n.cardDetails {\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  text-align: right;\n}\n\n.voucherName {\n  color: white;\n  font-weight: bold;\n  font-size: 14pt;\n}\n\n.voucherBrand {\n  color: lightgray;\n}\n\n.cardTopHalf {\n  background-color: #48697A;\n  padding: 10px;\n}\n\n.bottomDescription {\n  font-size: 12pt;\n  display: flex;\n  height: 70px;\n  justify-content: space-evenly;\n  flex-direction: column;\n}\n\n.bottomDescriptionRow {\n  display: flex;\n  align-items: center;\n}\n\n.bottomDescriptionRow span {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdWNoZXItcmVxdWVzdC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFBRTtFQUNFLGlCQUFBO0FBRUoiLCJmaWxlIjoidm91Y2hlci1yZXF1ZXN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJkRGV0YWlsc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udm91Y2hlck5hbWV7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRwdDtcclxufVxyXG5cclxuLnZvdWNoZXJCcmFuZHtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4uY2FyZFRvcEhhbGZ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4Njk3QTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYm90dG9tRGVzY3JpcHRpb257XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5ib3R0b21EZXNjcmlwdGlvblJvd3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgc3BhbntcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 35927:
/*!**********************************************************************************!*\
  !*** ./src/app/components/button-loader/button-loader.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-label style=\"display: flex; align-items: center; justify-content: space-around\">\r\n  <ion-spinner *ngIf=\"isLoading\"></ion-spinner>\r\n  {{name}}\r\n</ion-label>\r\n";

/***/ }),

/***/ 46035:
/*!**********************************************************************************!*\
  !*** ./src/app/components/error-message/error-message.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid *ngIf=\"message!=''\">\r\n  <ion-row>\r\n    <ion-col text-center size=\"12\">\r\n      <p alert alert-danger>\r\n        {{message}}\r\n      </p>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n";

/***/ }),

/***/ 86950:
/*!****************************************************************************************!*\
  !*** ./src/app/components/form-input-error/form-input-error.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid *ngIf=\"formInputError\">\r\n  <ion-row>\r\n    <ion-col text-center size=\"12\">\r\n      <p alert alert-danger>\r\n        {{formInputError}}\r\n      </p>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n";

/***/ }),

/***/ 11375:
/*!******************************************************************!*\
  !*** ./src/app/components/input/input.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-item class=\"ion-margin-bottom\">\r\n  <ion-input [(ngModel)]=\"myValue\" [type]=\"type\" [placeholder]=\"placeholder\"></ion-input>\r\n</ion-item>\r\n";

/***/ }),

/***/ 87269:
/*!********************************************************************************!*\
  !*** ./src/app/components/kroba-loader/kroba-loader.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "";

/***/ }),

/***/ 39985:
/*!**************************************************************************!*\
  !*** ./src/app/components/sold-card/sold-card.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card>\r\n  <ion-grid style=\"padding: 0px\">\r\n    <ion-row class=\"cardTopHalf\">\r\n      <ion-col>\r\n        <img [src]=\"sold.billPhotos[0]\">\r\n      </ion-col>\r\n      <ion-col class=\"cardDetails\">\r\n        <span class=\"voucherName\">{{sold.approved}}</span>\r\n        <span class=\"voucherBrand\">{{sold.brand.name}}</span>\r\n        <span class=\"voucherBrand\">{{sold.category.name}}</span>\r\n        <span class=\"voucherBrand\">{{sold.model.name}}</span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"bottomDescription\">\r\n        <div class=\"bottomDescriptionRow\"><ion-icon name=\"time-outline\"></ion-icon> <span>{{sold.createdAt|date}}</span></div>\r\n        <div class=\"bottomDescriptionRow\"><ion-icon name=\"pricetag-outline\"></ion-icon> <span>{{sold.billNumber}} broj računa</span></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-card>\r\n";

/***/ }),

/***/ 26097:
/*!********************************************************************************!*\
  !*** ./src/app/components/voucher-card/voucher-card.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card>\r\n  <ion-grid style=\"padding: 0px\">\r\n    <ion-row class=\"cardTopHalf\">\r\n      <ion-col>\r\n        <img [src]=\"voucher.brand.logo\">\r\n      </ion-col>\r\n      <ion-col class=\"cardDetails\">\r\n        <span class=\"voucherName\">{{voucher.name}}</span>\r\n        <span class=\"voucherBrand\">{{voucher.brand.name}}</span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"bottomDescription\">\r\n        <div class=\"bottomDescriptionRow\"><ion-icon name=\"time-outline\"></ion-icon> <span>Vaucer ne istice</span></div>\r\n        <div class=\"bottomDescriptionRow\"><ion-icon name=\"pricetag-outline\"></ion-icon> <span>{{voucher.points}} poena</span></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-card>\r\n";

/***/ }),

/***/ 35220:
/*!************************************************************************************************!*\
  !*** ./src/app/components/voucher-request-card/voucher-request-card.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card>\r\n  <ion-grid style=\"padding: 0px\">\r\n    <ion-row class=\"cardTopHalf\">\r\n      <ion-col>\r\n        <img [src]=\"voucher.voucher.brand.logo\">\r\n      </ion-col>\r\n      <ion-col class=\"cardDetails\">\r\n        <span class=\"voucherName\">{{voucher.voucher.name}}</span>\r\n        <span class=\"voucherBrand\">{{voucher.voucher.brand.name}}</span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"bottomDescription\">\r\n        <div class=\"bottomDescriptionRow\"><ion-icon name=\"time-outline\"></ion-icon> <span>{{voucher.createdAt|date}}</span></div>\r\n        <div class=\"bottomDescriptionRow\"><ion-icon name=\"pricetag-outline\"></ion-icon> <span>{{voucher.voucher.points}} poena</span></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-card>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_module_shared_module_ts.js.map