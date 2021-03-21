(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tej\Desktop\riyf\RecipesInYourFridge\ui-angular\src\main.ts */"zUnb");


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
    ingredientSearch(data) {
        return this.http.post(this.SERVICE_API + 'ISearch', data);
    }
    titleSearch(data) {
        return this.http.post(this.SERVICE_API + 'TSearch', data);
    }
    fetchIngredients() {
        return this.http.get(this.SERVICE_API + 'getIngredients');
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Kqu2":
/*!************************************************************!*\
  !*** ./src/app/speech-to-text/speech-to-text.component.ts ***!
  \************************************************************/
/*! exports provided: SpeechToTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechToTextComponent", function() { return SpeechToTextComponent; });
/* harmony import */ var _service_voice_recognition_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/voice-recognition.service */ "wEh7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SpeechToTextComponent {
    constructor(service) {
        this.service = service;
        this.service.init();
    }
    ngOnInit() {
    }
    startService() {
        this.service.start();
    }
    stopService() {
        this.service.stop();
    }
}
SpeechToTextComponent.ɵfac = function SpeechToTextComponent_Factory(t) { return new (t || SpeechToTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_voice_recognition_service__WEBPACK_IMPORTED_MODULE_0__["VoiceRecognitionService"])); };
SpeechToTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SpeechToTextComponent, selectors: [["app-speech-to-text"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_service_voice_recognition_service__WEBPACK_IMPORTED_MODULE_0__["VoiceRecognitionService"]])], decls: 2, vars: 0, template: function SpeechToTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "speech-to-text works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGVlY2gtdG8tdGV4dC5jb21wb25lbnQuY3NzIn0= */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(appService) {
        this.appService = appService;
        this.ing_query = '';
        this.title_query = '';
    }
    ngOnInit() {
    }
    ingredientSearch() {
        this.appService.ingredientSearch(this.ing_query).subscribe((response) => {
            this.ingQueryResponse = response;
        });
    }
    titleSearch() {
        this.appService.titleSearch(this.title_query).subscribe((response) => {
            this.titleQueryResponse = response;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _speech_to_text_speech_to_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./speech-to-text/speech-to-text.component */ "Kqu2");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
        _speech_to_text_speech_to_text_component__WEBPACK_IMPORTED_MODULE_8__["SpeechToTextComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"]] }); })();


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _service_voice_recognition_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/voice-recognition.service */ "wEh7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "F5nt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SearchComponent_mat_grid_tile_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_mat_grid_tile_24_Template_mat_grid_tile_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const recipe_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.redirect(recipe_r2.recipe_url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipe_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + recipe_r2.photo_url + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colspan", 1)("rowspan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", recipe_r2.photo_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipe_r2.title);
} }
class SearchComponent {
    constructor(appService, service) {
        this.appService = appService;
        this.service = service;
        this.ing_query = '';
        this.tiles = [
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
            { text: 'recipe', cols: 1, rows: 1, color: '#F3F3F3' },
        ];
        this.service.init();
    }
    ngOnInit() {
    }
    ingredientSearch() {
        this.appService.ingredientSearch(this.ing_query).subscribe((response) => {
            this.lstRecipes = response;
        });
    }
    fetchIngredients() {
        this.appService.fetchIngredients().subscribe((response) => {
            this.ingredients = response;
            console.log(this.ingredients);
        });
    }
    toggle() {
    }
    redirect(url) {
        window.open(url, "_blank");
    }
    startService() {
        this.service.start();
    }
    stopService() {
        this.service.stop();
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_voice_recognition_service__WEBPACK_IMPORTED_MODULE_0__["VoiceRecognitionService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_service_voice_recognition_service__WEBPACK_IMPORTED_MODULE_0__["VoiceRecognitionService"]])], decls: 25, vars: 3, consts: [["id", "header"], ["id", "topbar"], ["id", "searchbarimage", "src", "assets/images/RIYF.png"], ["id", "searchbar", "type", "text"], ["id", "searchbartext", "type", "text", "name", "ingredientSearchText", "type", "text", "placeholder", "Search...", 3, "ngModel", "value", "ngModelChange"], ["reference", ""], [1, "cancel", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"], [1, "vertical"], [1, "mic", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-microphone"], ["type", "submit", 1, "search", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "toggle"], [3, "click"], ["id", "results"], ["cols", "4", "rowHeight", "200px", "gutterSize", "50px"], ["class", "tile", 3, "colspan", "rowspan", "backgroundImage", "click", 4, "ngFor", "ngForOf"], [1, "tile", 3, "colspan", "rowspan", "click"], [1, "tile_content"], ["alt", "Avatar", 1, "image", 3, "src"], [1, "overlay"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_9_listener($event) { return ctx.ing_query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); return _r0.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_14_listener() { return ctx.startService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_16_listener() { ctx.ingredientSearch(); return ctx.stopService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-slide-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_mat_slide_toggle_click_19_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Ingredient Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-grid-list", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SearchComponent_mat_grid_tile_24_Template, 5, 6, "mat-grid-tile", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.service.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ing_query);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.lstRecipes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"]], styles: ["body[_ngcontent-%COMP%] {\r\n    min-height: 100%;\r\n    position: relative;\r\n}\r\n\r\n#topbar[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 80px;\r\n    width: 100%;\r\n    align-items: flex-end;\r\n    position: fixed;\r\n    background-color: #fcfcfc;\r\n    padding:10px;\r\n     z-index: 900;\r\n}\r\n\r\n#results[_ngcontent-%COMP%] {\r\npadding: 150px 50px 50px 50px;\r\nz-index: 800;\r\n\r\n}\r\n\r\n#searchbarimage[_ngcontent-%COMP%] {\r\n    height: 57px;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: auto;\r\n}\r\n\r\n#searchbarbutton[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n    width: 55px;\r\n    position: relative;\r\n    margin-right: -2px;\r\n    background-color: white;\r\n}\r\n\r\n#searchbarbutton[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    height: 25px;\r\n    width: 35px;\r\n    position: relative;\r\n    left: -3px;\r\n}\r\n\r\n#searchbarbutton[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: #4285F4\r\n}\r\n\r\n#searchbar[_ngcontent-%COMP%] {\r\n    width: 625px;\r\n    height: 45px;\r\n    border-radius: 100px;\r\n    border-color: lightgray;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    font-size: 16px;\r\n    position: relative;\r\n    bottom: 5px;\r\n    overflow: hidden;\r\n    display: flex;\r\n    z-index: 100;\r\n}\r\n\r\n#searchbar[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);\r\n}\r\n\r\n#searchbar[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n    border-style: none;\r\n    font-size: 16px;\r\n    line-height: 45px;\r\n    padding-left: 20px;\r\n    flex: 1;\r\n}\r\n\r\n#searchbar[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\n#searchbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n#searchbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\n#boxesicon[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n    height: 25px;\r\n    opacity: 0.6;\r\n    background-size: 26px;\r\n    position: absolute;\r\n    right: 130px;\r\n    bottom: 14px;\r\n}\r\n\r\n#optionsmenuactive[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 3px;\r\n    background-color: #4285F4;\r\n    left: 5px;\r\n    bottom: 0px;\r\n}\r\n\r\n#optionsmenu2[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    margin-left: 100px;\r\n}\r\n\r\n#optionsmenu2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 0px 10px 15px 20px;\r\n}\r\n\r\n#searchresultsarea[_ngcontent-%COMP%] {\r\n    margin-left: 150px;\r\n    font-family: 'Arial';\r\n}\r\n\r\n#searchresultsnumber[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n    color: gray;\r\n}\r\n\r\n.searchresult[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n}\r\n\r\n.searchresult[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 19px;\r\n    line-height: 18px;\r\n    font-weight: normal;\r\n    color: rgb(29, 1, 189);\r\n    margin-bottom: 0px;\r\n    margin-top: 25px;\r\n}\r\n\r\n.searchresult[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    line-height: 14px;\r\n    color: green;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.mic[_ngcontent-%COMP%] {\r\ncolor:#ecac54;\r\nbackground: #ffffff ;\r\n    cursor: pointer;\r\n}\r\n\r\n.cancel[_ngcontent-%COMP%]\r\n{\r\n\r\npadding-right: 20px;\r\ncolor:\t#BEBEBE;\r\nbackground: #ffffff ;\r\n    cursor: pointer;\r\n}\r\n\r\n.vertical[_ngcontent-%COMP%] {\r\n            border-left: 1px solid #BEBEBE;\r\n            height: 30px;\r\n            padding:50px 10px 10px 10px;\r\n        }\r\n\r\n.fa-microphone[_ngcontent-%COMP%]:hover::after{\r\ncolour: #ffffff\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  border-bottom: 1px dotted black;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n\r\n  \r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\r\n\r\n.toggle[_ngcontent-%COMP%]{\r\n\r\ncolor:\t#C8C8C8;\r\npadding :15px;}\r\n\r\n.text[_ngcontent-%COMP%]{\r\nfont-weight: normal;\r\nmargin: 11px;\r\n}\r\n\r\n.search[_ngcontent-%COMP%]{\r\n    padding-right: 15px;\r\n    padding-left:10px;\r\n    color:#4cc094;\r\n    background: #ffffff ;\r\n\r\n}\r\n\r\n.searchresult[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    line-height: 14px;\r\n    color: green;\r\n    margin-bottom: 0px;\r\n    padding: 0px;\r\n    border-width: 0px;\r\n    background-color: white;\r\n}\r\n\r\n#bellicon[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: rgb(105, 105, 105);\r\n    background-size: 12px;\r\n    background-position: 50% 50%;\r\n    background-repeat: no-repeat;\r\n    border-radius: 30px;\r\n    position: absolute;\r\n    right: 90px;\r\n    bottom: 18px;\r\n}\r\n\r\n#profileimage[_ngcontent-%COMP%] {\r\n    border-radius: 50px;\r\n    width: 32px;\r\n    height: 32px;\r\n    position: absolute;\r\n    right: 40px;\r\n    bottom: 12px;\r\n}\r\n\r\n#optionsbar[_ngcontent-%COMP%] {\r\n    padding: 100px;\r\n    width: 100%;\r\n    height: 50px;\r\n    border-width: 0px;\r\n    border-bottom: 1px;\r\n    border-color: lightgray;\r\n    border-style: solid;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    font-family: 'Arial';\r\n    font-size: 13px;\r\n    color: rgb(112, 112, 112);\r\n    padding-top: 64px;\r\n}\r\n\r\n#optionsmenu1[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    margin-left: 150px;\r\n}\r\n\r\n#optionsmenu1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 0px 10px 15px 20px;\r\n}\r\n\r\n#optionsmenuactive[_ngcontent-%COMP%] {\r\n    color: #4285F4;\r\n    font-weight: bold;\r\n    position: relative;\r\n    z-index: -1;\r\n}\r\n\r\n.searchresult[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    width: 625px;\r\n    font-size: 13px;\r\n    margin-top: 0px;\r\n    color: rgb(82, 82, 82);\r\n}\r\n\r\n.relatedsearches[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-weight: normal;\r\n    font-size: 19px;\r\n    margin-top: 40px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.relatedlists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    color: rgb(29, 1, 189);\r\n    padding-left: 0px;\r\n    font-size: 14px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.relatedlists[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    width: 300px;\r\n}\r\n\r\n.relatedlists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.pagelist[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    color: rgb(29, 135, 255);\r\n    display: flex;\r\n    flex-direction: row;\r\n    font-size: 12px;\r\n    margin-bottom: 30px;\r\n    margin-left: 100px;\r\n}\r\n\r\n.pagelistprevious[_ngcontent-%COMP%]::before {\r\n    content: '<';\r\n    display: block;\r\n    position: absolute;\r\n    right: 12px;\r\n    top: -35px;\r\n    color: rgb(29, 135, 255);\r\n    font-size: 20px;\r\n    transform: scale(0.7, 1.2);\r\n}\r\n\r\n.pagelistprevious[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    right: -40px;\r\n    top: -35px;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-repeat: no-repeat;\r\n    background-size: 28px;\r\n}\r\n\r\n.pagelistfirst[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n    font-size: 13px;\r\n}\r\n\r\n.pagelistnumber[_ngcontent-%COMP%]::before, .pagelistfirst[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    left: -2px;\r\n    top: -21px;\r\n    border-radius: 50px;\r\n    width: 10px;\r\n    height: 10px;\r\n    background-color: white;\r\n    z-index: 3;\r\n}\r\n\r\n.pagelistnumber[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    left: -6px;\r\n    top: -25px;\r\n    border-radius: 50px;\r\n    width: 18px;\r\n    height: 18px;\r\n    background-color: rgb(255, 196, 0);\r\n    z-index: 2;\r\n}\r\n\r\n.pagelistfirst[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    left: -6px;\r\n    top: -25px;\r\n    border-radius: 50px;\r\n    width: 18px;\r\n    height: 18px;\r\n    background-color: red;\r\n    z-index: 2;\r\n}\r\n\r\n.pagelist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-right: 15px;\r\n    position: relative;\r\n}\r\n\r\n.pagelistnext[_ngcontent-%COMP%] {\r\n    margin-left: 40px;\r\n    font-size: 13px;\r\n}\r\n\r\n.pagelistnext[_ngcontent-%COMP%]::before {\r\n    content: '>';\r\n    display: block;\r\n    position: absolute;\r\n    left: 5px;\r\n    top: -35px;\r\n    color: rgb(29, 135, 255);\r\n    font-size: 20px;\r\n    transform: scale(0.7, 1.2);\r\n}\r\n\r\n.pagelistnext[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    left: -55px;\r\n    top: -37px;\r\n    width: 50px;\r\n    height: 50px;\r\n    background-repeat: no-repeat;\r\n    background-size: 48px;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%] {\r\n    background-color: rgb(238, 238, 238);\r\n    position: relative;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n    font-size: 13px;\r\n    font-family: 'arial';\r\n    color: rgb(85, 85, 85);\r\n}\r\n\r\n#footermenu[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-top: 0px;\r\n    margin-left: 135px;\r\n    margin-bottom: 0px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n#footermenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding-right: 30px;\r\n}\r\n\r\n#footerlocation[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    direction: row;\r\n    margin-left: 175px;\r\n    position: relative;\r\n    top: -5px;\r\n}\r\n\r\n#footerlocation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(1) {\r\n    font-weight: bold;\r\n}\r\n\r\n.tile_title[_ngcontent-%COMP%] {\r\n    \r\n    position: absolute;\r\n    top: 75%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: lightgrey;\r\n    text-align: center;\r\n}\r\n\r\n.tile[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n.tile_content[_ngcontent-%COMP%] {\r\n    \r\n  }\r\n\r\n.image[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    background: rgb(0, 0, 0);\r\n    background: rgba(0, 0, 0, 0.5); \r\n    color: #f1f1f1;\r\n    width: 100%;\r\n    transition: .5s ease;\r\n    opacity:0;\r\n    color: white;\r\n    font-size: 20px;\r\n    padding: 20px;\r\n    text-align: center;\r\n  }\r\n\r\n.tile_content[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFlBQVk7S0FDWCxZQUFZO0FBQ2pCOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCLFlBQVk7O0FBRVo7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBS0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsT0FBTztBQUNYOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lB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V0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBR0E7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTs7dUJBRW1CO0VBQ3JCOztBQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULHdCQUF3QjtJQUN4Qiw4QkFBOEIsRUFBRSxzQkFBc0I7SUFDdEQsY0FBYztJQUNkLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsU0FBUztJQUNULFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLFVBQVU7RUFDWiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI3RvcGJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgIHotaW5kZXg6IDkwMDtcclxufVxyXG5cclxuI3Jlc3VsdHMge1xyXG5wYWRkaW5nOiAxNTBweCA1MHB4IDUwcHggNTBweDtcclxuei1pbmRleDogODAwO1xyXG5cclxufVxyXG5cclxuI3NlYXJjaGJhcmltYWdlIHtcclxuICAgIGhlaWdodDogNTdweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4jc2VhcmNoYmFyYnV0dG9uIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNzZWFyY2hiYXJidXR0b24gc3ZnIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTNweDtcclxufVxyXG5cclxuI3NlYXJjaGJhcmJ1dHRvbiBzdmcgcGF0aCB7XHJcbiAgICBmaWxsOiAjNDI4NUY0XHJcbn1cclxuXHJcbiNzZWFyY2hiYXIge1xyXG4gICAgd2lkdGg6IDYyNXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbiNzZWFyY2hiYXI6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4jc2VhcmNoYmFyID4gaW5wdXQge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4jc2VhcmNoYmFyID4gaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI3NlYXJjaGJhciBidXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jc2VhcmNoYmFyIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jYm94ZXNpY29uIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEzMHB4O1xyXG4gICAgYm90dG9tOiAxNHB4O1xyXG59XHJcblxyXG4jb3B0aW9uc21lbnVhY3RpdmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVGNDtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4jb3B0aW9uc21lbnUyIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcblxyXG4jb3B0aW9uc21lbnUyIGxpIHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDE1cHggMjBweDtcclxufVxyXG5cclxuI3NlYXJjaHJlc3VsdHNhcmVhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG59XHJcblxyXG4jc2VhcmNocmVzdWx0c251bWJlciB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uc2VhcmNocmVzdWx0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hyZXN1bHQgaDIge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6IHJnYigyOSwgMSwgMTg5KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hyZXN1bHQgYSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLm1pYyB7XHJcbmNvbG9yOiNlY2FjNTQ7XHJcbmJhY2tncm91bmQ6ICNmZmZmZmYgO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FuY2VsXHJcbntcclxuXHJcbnBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbmNvbG9yOlx0I0JFQkVCRTtcclxuYmFja2dyb3VuZDogI2ZmZmZmZiA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiAudmVydGljYWwge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNCRUJFQkU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZzo1MHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbi5mYS1taWNyb3Bob25lOmhvdmVyOjphZnRlcntcclxuY29sb3VyOiAjZmZmZmZmXHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG5cclxuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi50b2dnbGV7XHJcblxyXG5jb2xvcjpcdCNDOEM4Qzg7XHJcbnBhZGRpbmcgOjE1cHg7fVxyXG5cclxuLnRleHR7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbm1hcmdpbjogMTFweDtcclxufVxyXG5cclxuLnNlYXJjaHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIGNvbG9yOiM0Y2MwOTQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDtcclxuXHJcbn1cclxuXHJcbi5zZWFyY2hyZXN1bHQgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2JlbGxpY29uIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDkwcHg7XHJcbiAgICBib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbiNwcm9maWxlaW1hZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbiAgICBib3R0b206IDEycHg7XHJcbn1cclxuXHJcbiNvcHRpb25zYmFyIHtcclxuICAgIHBhZGRpbmc6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweDtcclxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiByZ2IoMTEyLCAxMTIsIDExMik7XHJcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcclxufVxyXG5cclxuI29wdGlvbnNtZW51MSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxufVxyXG5cclxuI29wdGlvbnNtZW51MSBsaSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweCAxNXB4IDIwcHg7XHJcbn1cclxuXHJcbiNvcHRpb25zbWVudWFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzQyODVGNDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5zZWFyY2hyZXN1bHQgcCB7XHJcbiAgICB3aWR0aDogNjI1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBjb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG59XHJcblxyXG4ucmVsYXRlZHNlYXJjaGVzIGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnJlbGF0ZWRsaXN0cyB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigyOSwgMSwgMTg5KTtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnJlbGF0ZWRsaXN0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnJlbGF0ZWRsaXN0cyB1bCBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5wYWdlbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigyOSwgMTM1LCAyNTUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcblxyXG4ucGFnZWxpc3RwcmV2aW91czo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICc8JztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEycHg7XHJcbiAgICB0b3A6IC0zNXB4O1xyXG4gICAgY29sb3I6IHJnYigyOSwgMTM1LCAyNTUpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDEuMik7XHJcbn1cclxuXHJcbi5wYWdlbGlzdHByZXZpb3VzOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC00MHB4O1xyXG4gICAgdG9wOiAtMzVweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLnBhZ2VsaXN0Zmlyc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5wYWdlbGlzdG51bWJlcjo6YmVmb3JlLCAucGFnZWxpc3RmaXJzdDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMnB4O1xyXG4gICAgdG9wOiAtMjFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMztcclxufVxyXG5cclxuLnBhZ2VsaXN0bnVtYmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTZweDtcclxuICAgIHRvcDogLTI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnBhZ2VsaXN0Zmlyc3Q6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtNnB4O1xyXG4gICAgdG9wOiAtMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5wYWdlbGlzdCBsaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wYWdlbGlzdG5leHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5wYWdlbGlzdG5leHQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnPic7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIHRvcDogLTM1cHg7XHJcbiAgICBjb2xvcjogcmdiKDI5LCAxMzUsIDI1NSk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNywgMS4yKTtcclxufVxyXG5cclxuLnBhZ2VsaXN0bmV4dDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC01NXB4O1xyXG4gICAgdG9wOiAtMzdweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDhweDtcclxufVxyXG5cclxuXHJcbiNmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnYXJpYWwnO1xyXG4gICAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcclxufVxyXG5cclxuI2Zvb3Rlcm1lbnUge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiNmb290ZXJtZW51IGxpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbiNmb290ZXJsb2NhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tbGVmdDogMTc1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC01cHg7XHJcbn1cclxuXHJcbiNmb290ZXJsb2NhdGlvbiBwOm50aC1vZi10eXBlKDEpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGlsZV90aXRsZSB7XHJcbiAgICAvKiBvcGFjaXR5OiAwLjg7ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDc1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aWxle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGlsZV9jb250ZW50IHtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4OyAqL1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEJsYWNrIHNlZS10aHJvdWdoICovXHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRpbGVfY29udGVudDpob3ZlciAub3ZlcmxheSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuIl19 */"] });


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
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wEh7":
/*!******************************************************!*\
  !*** ./src/app/service/voice-recognition.service.ts ***!
  \******************************************************/
/*! exports provided: VoiceRecognitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceRecognitionService", function() { return VoiceRecognitionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class VoiceRecognitionService {
    constructor() {
        this.recognition = new webkitSpeechRecognition();
        this.isStoppedSpeechRecog = false;
        this.text = '';
    }
    init() {
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';
        this.recognition.addEventListener('result', (e) => {
            const transcript = Array.from(e.results)
                .map((result) => result[0])
                .map((result) => result.transcript)
                .join('');
            this.tempWords = transcript;
            console.log(transcript);
        });
    }
    start() {
        this.isStoppedSpeechRecog = false;
        this.recognition.start();
        console.log("Speech recognition started");
        this.recognition.addEventListener('end', (condition) => {
            if (this.isStoppedSpeechRecog) {
                this.recognition.stop();
                console.log("End speech recognition");
            }
            else {
                this.wordConcat();
                this.recognition.start();
            }
        });
    }
    stop() {
        this.isStoppedSpeechRecog = true;
        this.wordConcat();
        this.recognition.stop();
        console.log("End speech recognition");
    }
    wordConcat() {
        this.text = this.text + ' ' + this.tempWords + '.';
        this.tempWords = '';
    }
}
VoiceRecognitionService.ɵfac = function VoiceRecognitionService_Factory(t) { return new (t || VoiceRecognitionService)(); };
VoiceRecognitionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VoiceRecognitionService, factory: VoiceRecognitionService.ɵfac, providedIn: 'root' });


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