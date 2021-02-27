(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! d:\RecipesInYourFridge\ui-angular\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class AppService {
    constructor(http) {
        this.http = http;
        this.SERVICE_API = 'http://127.0.0.1:5000/';
    }
    ingredientSearch() {
        return this.http.get(this.SERVICE_API + 'ISearch');
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "F5nt");


class AppComponent {
    constructor(appService) {
        this.appService = appService;
        this.title = 'ui-angular';
        this.temp = 'Abhinav';
    }
    ngOnInit() {
    }
    ingredientSearch() {
        this.appService.ingredientSearch().subscribe((response) => {
            this.data = response.data;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 321, vars: 0, consts: [[1, "wrapper"], [1, "main-header", "navbar", "navbar-expand", "navbar-white", "navbar-light"], [1, "navbar-nav"], [1, "nav-item"], ["data-widget", "pushmenu", "href", "#", 1, "nav-link"], [1, "fa", "fa-bars"], [1, "nav-item", "d-none", "d-sm-inline-block"], ["href", "http://127.0.0.1:5000/", 1, "nav-link"], ["href", "#", 1, "nav-link"], [1, "form-inline", "ml-3"], [1, "input-group", "input-group-sm"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "form-control-navbar"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-navbar", 3, "click"], [1, "fa", "fa-search"], [1, "main-sidebar", "sidebar-dark-primary", "elevation-4"], ["href", "http://127.0.0.1:5000/", 1, "brand-link"], [1, "brand-text", "font-weight-light"], [1, "sidebar", "os-host", "os-theme-light", "os-host-overflow", "os-host-overflow-y", "os-host-resize-disabled", "os-host-scrollbar-horizontal-hidden", "os-host-transition"], [1, "os-resize-observer-host"], [1, "os-resize-observer", "observed", 2, "left", "0px", "right", "auto"], [1, "os-size-auto-observer", 2, "height", "calc(100% + 1px)", "float", "left"], [1, "os-resize-observer", "observed"], [1, "os-content-glue", 2, "margin", "0px -8px", "width", "249px", "height", "456px"], [1, "os-padding"], [1, "os-viewport", "os-viewport-native-scrollbars-invisible", 2, "overflow-y", "scroll", "right", "0px", "bottom", "0px"], [1, "os-content", 2, "padding", "0px 8px", "height", "100%", "width", "100%"], [1, "user-panel", "mt-3", "pb-3", "mb-3", "d-flex"], [1, "info"], ["href", "#", 1, "d-block"], [1, "mt-2"], ["data-widget", "treeview", "role", "menu", "data-accordion", "false", 1, "nav", "nav-pills", "nav-sidebar", "flex-column"], [1, "nav-item", "has-treeview", "menu-open"], ["href", "#", 1, "nav-link", "active"], [1, "nav-icon", "fa", "fa-tachometer-alt"], [1, "right", "fa", "fa-angle-left"], [1, "nav", "nav-treeview"], ["href", "./index2.html", 1, "nav-link", "active"], [1, "fa", "fa-circle", "nav-icon"], [1, "nav-item", "has-treeview"], [1, "nav-icon", "fa", "fa-chart-pie"], ["href", "pages/charts/chartjs.html", 1, "nav-link"], ["href", "pages/charts/flot.html", 1, "nav-link"], ["href", "pages/charts/inline.html", 1, "nav-link"], [1, "nav-icon", "fa", "fa-tree"], [1, "fa", "fa-angle-left", "right"], ["href", "pages/UI/general.html", 1, "nav-link"], ["href", "pages/UI/icons.html", 1, "nav-link"], ["href", "pages/UI/buttons.html", 1, "nav-link"], [1, "os-scrollbar", "os-scrollbar-horizontal", "os-scrollbar-unusable", "os-scrollbar-auto-hidden"], [1, "os-scrollbar-track"], [1, "os-scrollbar-handle", 2, "width", "100%", "transform", "translate(0px, 0px)"], [1, "os-scrollbar", "os-scrollbar-vertical", "os-scrollbar-auto-hidden"], [1, "os-scrollbar-handle", 2, "height", "40.8261%", "transform", "translate(0px, 0px)"], [1, "os-scrollbar-corner"], [1, "content-wrapper", 2, "min-height", "464px"], [1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "m-0", "text-dark"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "row"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "info-box"], [1, "info-box-icon", "bg-info", "elevation-1"], [1, "fa", "fa-cog"], [1, "info-box-content"], [1, "info-box-text"], [1, "info-box-number"], [1, "info-box", "mb-3"], [1, "info-box-icon", "bg-danger", "elevation-1"], [1, "fa", "fa-thumbs-up"], [1, "clearfix", "hidden-md-up"], [1, "info-box-icon", "bg-success", "elevation-1"], [1, "fa", "fa-shopping-cart"], [1, "info-box-icon", "bg-warning", "elevation-1"], [1, "fa", "fa-users"], [3, "click"], [1, "control-sidebar", "control-sidebar-dark"], [1, "p-3", "control-sidebar-content"], [1, "mb-2"], [1, "mb-1"], ["type", "checkbox", "value", "1", 1, "mr-1"], [1, "mb-4"], [1, "d-flex"], [1, "d-flex", "flex-wrap", "mb-3"], [1, "bg-primary", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-secondary", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-info", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-success", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-danger", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-indigo", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-purple", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-pink", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-teal", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-cyan", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-dark", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-gray-dark", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-gray", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-light", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-warning", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-white", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-orange", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-navy", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-fuchsia", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-maroon", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-lime", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], [1, "bg-olive", "elevation-2", 2, "width", "40px", "height", "20px", "border-radius", "25px", "margin-right", "10px", "margin-bottom", "10px", "opacity", "0.8", "cursor", "pointer"], ["href", "javascript:void(0)"], [1, "main-footer"], ["href", "http://127.0.0.1:5000/"], [1, "float-right", "d-none", "d-sm-inline-block"], ["id", "sidebar-overlay"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_16_listener() { return ctx.ingredientSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "aside", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "RIYF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Alexander Pierce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nav", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Dashboard v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Charts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "ChartJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Flot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " UI Elements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ul", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h1", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Dashboard v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "ol", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Dashboard v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "section", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "CPU Traffic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Likes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "41,410");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "760");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "New Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "2,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_157_listener() { return ctx.ingredientSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "aside", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Customize AdminLTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "hr", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "No Navbar border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Body small text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Navbar small text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Sidebar nav small text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Footer small text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Sidebar nav flat style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Sidebar nav legacy style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Sidebar nav compact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Sidebar nav child indent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Main Sidebar disable hover/focus auto expand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Brand small text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Navbar Variants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Accent Color Variants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Dark Sidebar Variants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Light Sidebar Variants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Brand Logo Variants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "footer", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Copyright \u00A9 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "RIYF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, " All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, " 1.0.0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map