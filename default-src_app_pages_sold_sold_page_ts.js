"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_sold_sold_page_ts"],{

/***/ 56535:
/*!*********************************************!*\
  !*** ./src/app/helper/permission.helper.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionHelper": () => (/* binding */ PermissionHelper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 19107);



let PermissionHelper = class PermissionHelper {
    constructor(imagePicker) {
        this.imagePicker = imagePicker;
    }
    hasReadPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield this.imagePicker.hasReadPermission();
                if (result) {
                    return true;
                }
                yield this.requestReadPermission();
                return false;
            }
            catch (e) {
                console.log('Error:', e);
                return false;
            }
        });
    }
    requestReadPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield this.imagePicker.requestReadPermission();
                return result;
            }
            catch (e) {
                console.log('Error:', e);
            }
            // no callbacks required as this opens a popup which returns async
        });
    }
};
PermissionHelper.ctorParameters = () => [
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_0__.ImagePicker }
];
PermissionHelper = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PermissionHelper);



/***/ }),

/***/ 61832:
/*!****************************************!*\
  !*** ./src/app/helper/photo.helper.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoHelper": () => (/* binding */ PhotoHelper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 19107);
/* harmony import */ var _permission_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission.helper */ 56535);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);




// import {Camera} from '@ionic-native/camera/ngx';

let PhotoHelper = class PhotoHelper {
    constructor(permissionHelper, imagePicker) {
        this.permissionHelper = permissionHelper;
        this.imagePicker = imagePicker;
    }
    addPhoto(limit, type, video) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const imgArr = [];
            if (yield this.permissionHelper.hasReadPermission()) {
                yield this.imagePicker.getPictures({
                    maximumImagesCount: limit,
                    outputType: type,
                    allow_video: video,
                }).then((results) => {
                    for (const r of results) {
                        imgArr.push(r);
                    }
                }, (err) => {
                    console.log('Error: ', err);
                });
                if (imgArr) {
                    return imgArr[0];
                }
            }
            //console.log('Img arr is:', imgArr);
        });
    }
    takePhoto(quality) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                quality: quality,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt,
                webUseInput: true
            });
            console.log(result);
            const reader = new FileReader();
            // reader.readAsDataURL(result.webPath)
            return result.base64String;
        });
    }
};
PhotoHelper.ctorParameters = () => [
    { type: _permission_helper__WEBPACK_IMPORTED_MODULE_1__.PermissionHelper },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_0__.ImagePicker }
];
PhotoHelper = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], PhotoHelper);



/***/ }),

/***/ 83002:
/*!*******************************************!*\
  !*** ./src/app/helper/pinpoint.helper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PinpointHelper": () => (/* binding */ PinpointHelper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/settings.store */ 16322);



let PinpointHelper = class PinpointHelper {
    constructor(settingsStore) {
        this.settingsStore = settingsStore;
    }
    getCitiesFromCountry(id) {
        const result = this.settingsStore.cities.filter(city => city.country.objectId === id);
        console.log('Got result: ', result);
        return result;
    }
    getShopsFromCity(id) {
        // const result = this.settingsStore.shops.filter(shop => shop.city.objectId === id);
        // console.log('Got result: ', result);
        return null;
    }
    // getCategoriesFromBrand(id: string){
    //   const result = this.settingsStore.categories.filter(category => category.brand.objectId === id);
    //   console.log('Got result: ', result);
    //   return result;
    // }
    getCategoriesFromModel(brand) {
        console.log('Checking models: ', this.settingsStore.models);
        const categories = [];
        for (const model of this.settingsStore.models) {
            if (model.brand.objectId === brand && !categories.includes(model.category)) {
                categories.push(model.category);
            }
        }
        console.log('Got cat: ', categories);
        return categories;
    }
    getModelsFromCategory(id, brandId, shopId) {
        const models = this.settingsStore.models.filter(model => model.category.objectId === id);
        const result = models.filter((model) => {
            if (model.brand.objectId === brandId) {
                for (const shop of model.shopBrands) {
                    if (shop.objectId === shopId) {
                        return model;
                    }
                }
            }
        });
        console.log('Got result: ', result);
        return result;
    }
};
PinpointHelper.ctorParameters = () => [
    { type: _store_settings_store__WEBPACK_IMPORTED_MODULE_0__.SettingsStore }
];
PinpointHelper = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PinpointHelper);



/***/ }),

/***/ 4325:
/*!*****************************************!*\
  !*** ./src/app/pages/sold/sold.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoldPage": () => (/* binding */ SoldPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sold_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sold.page.html?ngResource */ 57018);
/* harmony import */ var _sold_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sold.page.scss?ngResource */ 93309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/settings.store */ 16322);
/* harmony import */ var _helper_pinpoint_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/pinpoint.helper */ 83002);
/* harmony import */ var _helper_photo_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/photo.helper */ 61832);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helper_parse_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helper/parse.helper */ 4751);
/* harmony import */ var _service_photo_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/photo.services */ 75260);
/* harmony import */ var _service_sold_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/sold.service */ 85298);












let SoldPage = class SoldPage {
    constructor(soldService, photoService, photoHelper, modalController, settingsStore, pinpointHelper, alertController) {
        this.soldService = soldService;
        this.photoService = photoService;
        this.photoHelper = photoHelper;
        this.modalController = modalController;
        this.settingsStore = settingsStore;
        this.pinpointHelper = pinpointHelper;
        this.alertController = alertController;
        // @ts-ignore
        this.sold = {
            billNumber: null,
            soldDate: null,
            brand: null,
            model: null,
            billPhotos: [],
            category: null,
            user: parse__WEBPACK_IMPORTED_MODULE_5__.User.current()
        };
    }
    ngOnInit() {
        this.imgArr = [];
        this.step = 0;
        this.categories = this.settingsStore.categories;
        this.models = [];
        this.brands = this.settingsStore.brands;
    }
    selectBrand(brand) {
        console.log('Checking brand: ', brand);
        this.sold.brand = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_6__.ParseHelper.getParseObjectWithoutData('Brand', brand);
        this.categories = this.pinpointHelper.getCategoriesFromModel(brand);
        console.log('Categroies are: ', this.categories);
        this.step++;
    }
    selectCategory(id) {
        this.sold.category = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_6__.ParseHelper.getParseObjectWithoutData('Category', id);
        this.models = this.pinpointHelper.getModelsFromCategory(id, this.sold.brand.id, parse__WEBPACK_IMPORTED_MODULE_5__.User.current().get('shopBrand').id);
        this.step++;
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    selectModel(id) {
        this.sold.model = _helper_parse_helper__WEBPACK_IMPORTED_MODULE_6__.ParseHelper.getParseObjectWithoutData('Model', id);
        this.step++;
    }
    addPhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (this.imgArr.length >= 1) {
                return;
            }
            const result = yield this.photoHelper.takePhoto(75);
            this.imgArr[0] = result;
            console.log(this.imgArr.length);
            const allowedPics = 1 - this.imgArr.length;
            // const alert = await this.alertController.create({
            //   header: 'Add listing photo',
            //   message: 'Would you like to add your photo from the camera or library?',
            //   buttons: [
            //     {
            //       text: 'Camera',
            //       cssClass: 'primary',
            //       handler: async () => {
            //         const result = await this.photoHelper.takePhoto(75);
            //         this.imgArr[0] = result;
            //       }
            //     }, {
            //       text: 'Library',
            //       cssClass: 'primary',
            //       handler: async () => {
            //         const result = await this.photoHelper.addPhoto(allowedPics, 1, false);
            //         if(result){
            //           this.imgArr[0] = result;
            //         }
            //       }
            //     }
            //   ]
            // });
            //
            // await alert.present();
        });
    }
    removePhoto(i) {
        this.imgArr.splice(i, 1);
    }
    finishUpload() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                console.log(' Got data: ', this.sold);
                this.uploaded = false;
                if (this.imgArr.length === 1) {
                    this.sold.billPhotos[0] = yield this.photoService.savePhoto(this.imgArr[0]);
                    // @ts-ignore
                    this.sold.soldDate = new Date(this.sold.soldDate);
                    yield this.soldService.saveSold(this.sold);
                    const delay = ms => new Promise(res => setTimeout(res, ms));
                    yield delay(1000);
                    this.uploaded = true;
                    console.log("UPLOADED");
                    this.closeModal();
                }
                else {
                    this.imgArr = [];
                    this.sold.billPhotos = [];
                    this.uploaded = true;
                    const alert = yield this.alertController.create({
                        header: 'Create Listing',
                        message: 'Fix error before submitting the listing.',
                        buttons: ['OK']
                    });
                    yield alert.present();
                }
            }
            catch (e) {
                this.imgArr = [];
                this.sold.billPhotos = [];
                const delay = ms => new Promise(res => setTimeout(res, ms));
                yield delay(1000);
                this.uploaded = true;
                const alert = yield this.alertController.create({
                    header: 'Sold',
                    message: 'An error has occurred please try again later.',
                    buttons: ['OK']
                });
                yield alert.present();
                console.log('Error: ', e);
            }
        });
    }
    previousPage() {
        if (this.step !== 0) {
            this.step--;
        }
    }
};
SoldPage.ctorParameters = () => [
    { type: _service_sold_service__WEBPACK_IMPORTED_MODULE_8__.SoldService },
    { type: _service_photo_services__WEBPACK_IMPORTED_MODULE_7__.PhotoServices },
    { type: _helper_photo_helper__WEBPACK_IMPORTED_MODULE_4__.PhotoHelper },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _store_settings_store__WEBPACK_IMPORTED_MODULE_2__.SettingsStore },
    { type: _helper_pinpoint_helper__WEBPACK_IMPORTED_MODULE_3__.PinpointHelper },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController }
];
SoldPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-sold',
        template: _sold_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sold_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SoldPage);



/***/ }),

/***/ 75260:
/*!*******************************************!*\
  !*** ./src/app/service/photo.services.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoServices": () => (/* binding */ PhotoServices)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse */ 66782);
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_0__);



let PhotoServices = class PhotoServices {
    constructor() {
    }
    b64toBlob(base64Data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const base64Response = yield fetch(`data:image/jpeg;base64,${base64Data}`);
            const blob = yield base64Response.blob();
            return blob;
        });
    }
    savePhoto(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                console.log('Saving photo');
                console.log('Photo is: ', data);
                const final = yield this.b64toBlob(data);
                const myPhoto = new parse__WEBPACK_IMPORTED_MODULE_0__.File('location.jpg', final);
                const savedPhoto = yield myPhoto.save();
                return savedPhoto.url();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
};
PhotoServices.ctorParameters = () => [];
PhotoServices = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PhotoServices);



/***/ }),

/***/ 34830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */
  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */
  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 34830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 71327)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var C_Users_Pavle_WebstormProjects_candy_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);

/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };
  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };
  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };
  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};
const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const setPlatform = CapacitorPlatforms.setPlatform;
const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;
  const config = webPlugin.config;
  const Plugins = cap.Plugins;
  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  }
  // TODO: add link to upgrade guide
  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};
var ExceptionCode;
(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */
  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
class CapacitorException extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }
}
const getPlatformId = win => {
  var _a, _b;
  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};
const createCapacitor = win => {
  var _a, _b, _c, _d, _e;
  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */
  const capPlatforms = win.CapacitorPlatforms;
  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };
  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
  const defaultIsNativePlatform = () => getPlatform() !== 'web';
  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);
    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }
    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }
    return false;
  };
  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;
  const defaultGetPluginHeader = pluginName => {
    var _a;
    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };
  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
  const handleError = err => win.console.error(err);
  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };
  const registeredPlugins = new Map();
  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);
    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }
    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;
    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,C_Users_Pavle_WebstormProjects_candy_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }
        return jsImplementation;
      });
      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();
    const createPluginMethod = (impl, prop) => {
      var _a, _b;
      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };
    const createPluginMethodWrapper = prop => {
      let remove;
      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);
          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });
        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,C_Users_Pavle_WebstormProjects_candy_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }
        return p;
      };
      // Some flair ✨
      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };
    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');
    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);
      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_Pavle_WebstormProjects_candy_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });
        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();
      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,C_Users_Pavle_WebstormProjects_candy_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };
    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;
          case 'toJSON':
            return () => ({});
          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;
          case 'removeListener':
            return removeListener;
          default:
            return createPluginMethodWrapper(prop);
        }
      }
    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };
  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
  // Add in convertFileSrc for web, it will already be available in native context
  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }
  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled;
  // Deprecated props
  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};
const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);
const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};
    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }
  addListener(eventName, listenerFunc) {
    var _this = this;
    const listeners = this.listeners[eventName];
    if (!listeners) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(listenerFunc);
    // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it
    const windowListener = this.windowListeners[eventName];
    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }
    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,C_Users_Pavle_WebstormProjects_candy_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });
      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();
    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,C_Users_Pavle_WebstormProjects_candy_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });
        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }
  removeAllListeners() {
    var _this2 = this;
    return (0,C_Users_Pavle_WebstormProjects_candy_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};
      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }
      _this2.windowListeners = {};
    })();
  }
  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];
    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }
  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }
  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }
  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }
  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }
  removeListener(eventName, listenerFunc) {
    var _this3 = this;
    return (0,C_Users_Pavle_WebstormProjects_candy_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listenerFunc);
      _this3.listeners[eventName].splice(index, 1);
      // If there are no more listeners for this type of event,
      // remove the window listener
      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }
  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }
  removeWindowListener(handle) {
    if (!handle) {
      return;
    }
    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }
}
const WebView = /*#__PURE__*/registerPlugin('WebView');


/***/ }),

/***/ 93309:
/*!******************************************************!*\
  !*** ./src/app/pages/sold/sold.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".cardSubtitle {\n  font-size: 9pt;\n  text-align: center;\n}\n\n.cardTitle {\n  font-size: 10pt;\n  text-align: center;\n}\n\n.cardArrowCol {\n  text-align: right;\n  align-self: center;\n  font-size: 15pt;\n}\n\n.stepTitle {\n  text-align: center;\n  font-size: 20pt;\n  font-weight: bold;\n}\n\n.image-container {\n  min-height: 200px;\n  background-size: cover;\n}\n\n.one-image {\n  margin: 2px;\n}\n\n.error {\n  text-align: center;\n  color: #aa0505;\n  font-family: Roboto-Bold;\n  font-size: 10pt;\n}\n\n.thumbnail {\n  width: 300px;\n  height: 300px;\n  object-fit: cover;\n}\n\n.addPhotoButton {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBSUY7O0FBREE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBSUYiLCJmaWxlIjoic29sZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFN1YnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogOXB0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLmNhcmRUaXRsZXtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jYXJkQXJyb3dDb2x7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVwdDtcclxufVxyXG4uc3RlcFRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5vbmUtaW1hZ2Uge1xyXG4gIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2FhMDUwNTtcclxuICBmb250LWZhbWlseTogUm9ib3RvLUJvbGQ7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcbi50aHVtYm5haWwge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uYWRkUGhvdG9CdXR0b257XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 57018:
/*!******************************************************!*\
  !*** ./src/app/pages/sold/sold.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"closeModal()\">\r\n        <ion-icon id=\"toolbarBack\" name=\"close-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Sold</ion-title>\r\n    <ion-buttons *ngIf=\"step!==0\" slot=\"start\">\r\n      <ion-button (click)=\"previousPage()\">\r\n        <ion-icon id=\"toolbarBack\" name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-kroba-loader [loaded]=\"uploaded\"></app-kroba-loader>\r\n\r\n  <div *ngIf=\"step===0\">\r\n    <p class=\"stepTitle\">Brend</p>\r\n\r\n    <ion-card *ngFor=\"let brand of brands\">\r\n      <ion-card-content>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-card-title (click)=\"selectBrand(brand.objectId)\" class=\"cardTitle\">{{brand.name}}</ion-card-title>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngIf=\"step===1\">\r\n    <p class=\"stepTitle\">Kategorija</p>\r\n\r\n    <ion-card (click)=\"selectCategory(category.objectId)\" *ngFor=\"let category of categories\">\r\n      <ion-card-content>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-card-title class=\"cardTitle\">{{category.name}}</ion-card-title>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngIf=\"step===2\">\r\n    <p class=\"stepTitle\">Modeli</p>\r\n\r\n    <ion-card (click)=\"selectModel(model.objectId)\" *ngFor=\"let model of models\">\r\n      <ion-card-content>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-card-title class=\"cardTitle\">{{model.name}}</ion-card-title>\r\n              <ion-card-subtitle class=\"cardSubtitle\">{{model.points}}</ion-card-subtitle>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngIf=\"step===3\">\r\n    <p class=\"stepTitle\">Detalji</p>\r\n    <ion-item>\r\n      <ion-label>Racun</ion-label>\r\n      <ion-input placeholder=\"0\" [(ngModel)]=\"sold.billNumber\" style=\"text-align: right;\" type=\"number\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Datum prodaje</ion-label>\r\n      <ion-datetime [(ngModel)]=\"sold.soldDate\"></ion-datetime>\r\n    </ion-item>\r\n\r\n    <br>\r\n\r\n\r\n    <ion-grid style=\"text-align: center\">\r\n\r\n      <ion-col class=\"one-image\" *ngFor=\"let image of imgArr;let i = index\">\r\n        <img class=\"thumbnail\" [src]=\"'data:image/jpeg;base64,'+image\"/>\r\n      </ion-col>\r\n    </ion-grid>\r\n\r\n\r\n    <ion-button *ngIf=\"imgArr.length<1\" (click)=\"addPhoto()\" class=\"addPhotoButton\" expand=\"block\" fill=\"outline\">Add Photo</ion-button>\r\n    <ion-button color=\"danger\" *ngIf=\"imgArr.length>=1\" (click)=\"removePhoto(0)\" class=\"addPhotoButton\" expand=\"block\" fill=\"outline\">Remove Photo</ion-button>\r\n\r\n    <div class=\"error ion-padding\" *ngIf=\"imgArr.length<1\">\r\n      1 photo required.\r\n    </div>\r\n\r\n\r\n  </div>\r\n<!--Add models-->\r\n\r\n</ion-content>\r\n<ion-footer *ngIf=\"step===3\" class=\"ion-no-border\" style=\"margin: 0px;\">\r\n  <ion-button [disabled]=\"imgArr.length<1||sold.soldDate === null||sold.billNumber === null\" expand=\"block\" (click)=\"finishUpload()\">Posalji</ion-button>\r\n</ion-footer>\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_sold_sold_page_ts.js.map