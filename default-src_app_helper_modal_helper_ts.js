"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_helper_modal_helper_ts"],{

/***/ 15304:
/*!****************************************!*\
  !*** ./src/app/helper/modal.helper.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalHelper": () => (/* binding */ ModalHelper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _pages_sold_sold_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/sold/sold.page */ 4325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _modals_edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/edit-profile/edit-profile.page */ 18224);
/* harmony import */ var _modals_get_voucher_get_voucher_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/get-voucher/get-voucher.page */ 11245);






let ModalHelper = class ModalHelper {
    constructor(modalController) {
        this.modalController = modalController;
    }
    openSoldModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_sold_sold_page__WEBPACK_IMPORTED_MODULE_0__.SoldPage,
                cssClass: 'sold-modal',
                componentProps: {},
                backdropDismiss: true
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    // this.user = dataReturned.data;
                    // alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    openVoucherModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_get_voucher_get_voucher_page__WEBPACK_IMPORTED_MODULE_2__.GetVoucherPage,
                cssClass: 'voucher-modal',
                componentProps: {},
                backdropDismiss: true
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    // this.user = dataReturned.data;
                    // alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    openEditModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage,
                cssClass: 'edit-modal',
                componentProps: {},
                backdropDismiss: true
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    // this.user = dataReturned.data;
                    // alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
};
ModalHelper.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
ModalHelper = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ModalHelper);



/***/ }),

/***/ 11245:
/*!********************************************************!*\
  !*** ./src/app/modals/get-voucher/get-voucher.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetVoucherPage": () => (/* binding */ GetVoucherPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _get_voucher_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-voucher.page.html?ngResource */ 46615);
/* harmony import */ var _get_voucher_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-voucher.page.scss?ngResource */ 40817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _store_voucher_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/voucher.store */ 12545);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/parse.helper */ 4751);
/* harmony import */ var _service_voucher_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/voucher.service */ 66807);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/user.store */ 31518);
/* harmony import */ var _store_voucherBrand_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/voucherBrand.store */ 81869);











let GetVoucherPage = class GetVoucherPage {
    constructor(voucherBrandStore, userStore, voucherStore, modalController, voucherService) {
        this.voucherBrandStore = voucherBrandStore;
        this.userStore = userStore;
        this.voucherStore = voucherStore;
        this.modalController = modalController;
        this.voucherService = voucherService;
        this.step = 0;
        this.user = parse__WEBPACK_IMPORTED_MODULE_3__.User.current().toJSON();
        this.vouchers = this.voucherStore.vouchers.filter(v => v.brand.objectId === this.voucherBrandStore.selectedVoucherBrand.objectId);
    }
    ngOnInit() {
    }
    selectVoucher(voucher) {
        this.voucherStore.setSelectedVoucher(voucher);
        this.step++;
    }
    requestVoucher() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.uploaded = false;
                const voucher = yield _helper_parse_helper__WEBPACK_IMPORTED_MODULE_4__.ParseHelper.getParseObjectWithoutData('Voucher', this.voucherStore.selectedVoucher.objectId);
                // const voucherRequest: IVoucherRequestParse = {
                //   voucher,
                //   user: Parse.User.current()
                // };
                const voucherRequest = {
                    voucher: this.voucherStore.selectedVoucher,
                };
                yield this.voucherService.requestVoucher(voucherRequest);
                const delay = ms => new Promise(res => setTimeout(res, ms));
                yield delay(1000);
                this.uploaded = true;
                yield this.closeModal();
                // this.user =
            }
            catch (e) {
                const delay = ms => new Promise(res => setTimeout(res, ms));
                yield delay(1000);
                this.uploaded = true;
                console.log('Error:', e);
            }
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    previousPage() {
        if (this.step !== 0) {
            this.step--;
        }
    }
};
GetVoucherPage.ctorParameters = () => [
    { type: _store_voucherBrand_store__WEBPACK_IMPORTED_MODULE_7__["default"] },
    { type: _store_user_store__WEBPACK_IMPORTED_MODULE_6__.UserStore },
    { type: _store_voucher_store__WEBPACK_IMPORTED_MODULE_2__["default"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _service_voucher_service__WEBPACK_IMPORTED_MODULE_5__.VoucherService }
];
GetVoucherPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-get-voucher',
        template: _get_voucher_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_get_voucher_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GetVoucherPage);



/***/ }),

/***/ 40817:
/*!*********************************************************************!*\
  !*** ./src/app/modals/get-voucher/get-voucher.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".cardSubtitle {\n  font-size: 9pt;\n  text-align: center;\n}\n\n.cardTitle {\n  font-size: 10pt;\n  text-align: center;\n}\n\n.cardArrowCol {\n  text-align: right;\n  align-self: center;\n  font-size: 15pt;\n}\n\n.stepTitle {\n  text-align: center;\n  font-size: 20pt;\n  font-weight: bold;\n}\n\n.image-container {\n  min-height: 200px;\n  background-size: cover;\n}\n\n.one-image {\n  margin: 2px;\n}\n\n.error {\n  text-align: center;\n  color: #aa0505;\n  font-family: Roboto-Bold;\n  font-size: 10pt;\n}\n\n.thumbnail {\n  width: 300px;\n  height: 300px;\n  object-fit: cover;\n}\n\n.addPhotoButton {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.rowCenter {\n  justify-content: center;\n}\n\n.voucherImg {\n  height: 85px;\n}\n\n.gridSpaceAround {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.chosenCardDiv {\n  height: 100%;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC12b3VjaGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUlGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUlGOztBQURBO0VBQ0UsdUJBQUE7QUFJRjs7QUFEQTtFQUNFLFlBQUE7QUFJRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBSUYiLCJmaWxlIjoiZ2V0LXZvdWNoZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRTdWJ0aXRsZXtcclxuICBmb250LXNpemU6IDlwdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5jYXJkVGl0bGV7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZEFycm93Q29se1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbn1cclxuLnN0ZXBUaXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ub25lLWltYWdlIHtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNhYTA1MDU7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90by1Cb2xkO1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG4udGh1bWJuYWlsIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmFkZFBob3RvQnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnJvd0NlbnRlcntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnZvdWNoZXJJbWcge1xyXG4gIGhlaWdodDogODVweDtcclxufVxyXG5cclxuLmdyaWRTcGFjZUFyb3VuZHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5jaG9zZW5DYXJkRGl2e1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 46615:
/*!*********************************************************************!*\
  !*** ./src/app/modals/get-voucher/get-voucher.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"closeModal()\">\r\n        <ion-icon id=\"toolbarBack\" name=\"close-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Request Voucher</ion-title>\r\n    <ion-buttons *ngIf=\"step!==0\" slot=\"start\">\r\n      <ion-button (click)=\"previousPage()\">\r\n        <ion-icon id=\"toolbarBack\" name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"step===0\">\r\n    <app-voucher-card [voucher]=\"voucher\" (click)=\"selectVoucher(voucher)\" *ngFor=\"let voucher of vouchers\">\r\n    </app-voucher-card>\r\n  </div>\r\n  <div class=\"chosenCardDiv\" *ngIf=\"step===1\">\r\n    <app-voucher-card style=\"width: 100%\" [voucher]=\"voucherStore.selectedVoucher\">\r\n    </app-voucher-card>\r\n\r\n  </div>\r\n  <app-kroba-loader [loaded]=\"uploaded\"></app-kroba-loader>\r\n\r\n</ion-content>\r\n<ion-footer *ngIf=\"step===1\" class=\"ion-no-border\" style=\"margin: 0px;\">\r\n  <ion-button *ngIf=\"userStore.user.points>=voucherStore.selectedVoucher.points\" expand=\"block\" (click)=\"requestVoucher()\">Request Voucher</ion-button>\r\n  <ion-button *ngIf=\"userStore.user.points<voucherStore.selectedVoucher.points\" expand=\"block\" disabled=\"true\">Insufficient points</ion-button>\r\n\r\n</ion-footer>\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_helper_modal_helper_ts.js.map