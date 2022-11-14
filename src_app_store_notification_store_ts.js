"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_store_notification_store_ts"],{

/***/ 79830:
/*!*********************************************!*\
  !*** ./src/app/store/notification.store.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationStore": () => (/* binding */ NotificationStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-angular */ 42986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let NotificationStore = class NotificationStore {
    constructor() {
        this.notifications = [];
    }
    setNotifications(notification) {
        this.notifications = notification;
    }
    addNotification(notification) {
        this.notifications.unshift(notification);
    }
};
NotificationStore.ctorParameters = () => [];
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], NotificationStore.prototype, "notifications", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.observable
], NotificationStore.prototype, "loaded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], NotificationStore.prototype, "setNotifications", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_1__.action
], NotificationStore.prototype, "addNotification", null);
NotificationStore = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], NotificationStore);



/***/ })

}]);
//# sourceMappingURL=src_app_store_notification_store_ts.js.map