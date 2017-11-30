webpackJsonp([1,4],{

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 180;


/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(218);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/NodeJS/Portfolio/angular/src/main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(378),
            styles: [__webpack_require__(376)]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=D:/NodeJS/Portfolio/angular/src/app.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MatExpansionModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MatExpansionModule */]],
        })
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=D:/NodeJS/Portfolio/angular/src/app.material-module.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_material_module__ = __webpack_require__(217);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_material_module__["a" /* MaterialModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=D:/NodeJS/Portfolio/angular/src/app.module.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.selectedIndex = 0;
        this.active = [true, false, false, false];
        this.activeNumber = 0;
    }
    HomeComponent.prototype.setActive = function (number) {
        for (var i = 0; i < this.active.length; ++i) {
            this.active[i] = false;
        }
        this.active[number] = true;
        this.activeNumber = number;
    };
    HomeComponent.prototype.getColNumber = function () {
        if (this.selectedIndex == 0) {
            return 3;
        }
        else {
            return 1;
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "imageThree", void 0);
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(379),
            styles: [__webpack_require__(377)]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=D:/NodeJS/Portfolio/angular/src/home.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/NodeJS/Portfolio/angular/src/environment.js.map

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports = "[class^=\"fa-\"], [class*=\" fa-\"] {\r\n  cursor: pointer;\r\n  color: #2e2e2e;\r\n}\r\nmat-toolbar p {\r\n  margin: 0 auto;\r\n  font-family: 'Amatic SC', cursive !important;\r\n  font-size: 24px;\r\n  text-shadow: 1px 1px 1px #aaa;\r\n  font-weight: bold;\r\n  cursor: default;\r\n}\r\nmat-expansion-panel p {\r\n  margin: 0 auto;\r\n  margin-left:0;\r\n  font-family: 'Amatic SC', sans-serif !important;\r\n  font-size: 20px;\r\n}\r\n#toolbar {\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 70px;\r\n  color: black;\r\n  background-image: url(\"../../../assets/img/toolbar.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-size: cover;\r\n  border-radius: 6px 6px 0 0;\r\n}\r\n#toolbar p {\r\n  margin: 0 auto;\r\n  font-family: 'Amatic SC', cursive !important;\r\n  font-size: 48px;\r\n  text-shadow: 4px 4px 4px #aaa;\r\n  font-weight: bold;\r\n  cursor: default;\r\n  margin-bottom: 6px;\r\n}\r\nhr {\r\n  background-color: grey;\r\n}\r\nmat-tab-group {\r\n  background-color: whitesmoke;\r\n  margin-bottom: 2%;\r\n  border-radius: 0 0 6px 6px;\r\n}\r\n.main-content {\r\n  color: darkslategrey;\r\n  padding-top: 2.4%;\r\n  padding-bottom: 1.6%;\r\n  border-radius: 0 0 6px 6px;\r\n}\r\n\r\n#scrollable {\r\n  height: 602px;\r\n  width: auto;\r\n\r\n}\r\n.img-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-flex-align: center;\r\n  -ms-flex-align: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding: 6px;\r\n  border: 1px solid grey;\r\n  border-left: none;\r\n  border-top: none;\r\n  background-color: lightgrey;\r\n  height: 150px;\r\n}\r\n.img-container img {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-flex-align: center;\r\n  -ms-flex-align: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.img-container:hover {\r\n  padding: 6px;\r\n  border: 1px solid grey;\r\n  border-top: none;\r\n  border-left: 0px;\r\n  background-color: whitesmoke;\r\n}\r\n.imgs-container:nth-child(even) {\r\n  border: 1px solid grey;\r\n  border-left: 0px;\r\n  border-bottom: none;\r\n}\r\n@-moz-document url-prefix() {\r\n  @media all and (max-width: 990px) {\r\n    .portfolio-cat {\r\n      height:432px;\r\n    }\r\n  }\r\n  @media all and (max-width: 768px) {\r\n    .portfolio-cat {\r\n      height:312px;\r\n    }\r\n  }\r\n  @media all and (min-width: 990px) {\r\n    .portfolio-cat {\r\n      height:600px;\r\n    }\r\n  }\r\n  @media all and (min-width: 1120px) {\r\n    .portfolio-cat {\r\n      height:720px;\r\n    }\r\n  }\r\n}\r\n@media all and (min-width: 1120px) {\r\n  #scrollable {\r\n    height: 722px;\r\n  }\r\n  .img-container {\r\n    height: 180px;\r\n  }\r\n\r\n}\r\n@media all and (max-width: 990px) {\r\n  #scrollable {\r\n    height: 434px;\r\n  }\r\n  .img-container {\r\n    height: 108px;\r\n  }\r\n\r\n}\r\n@media all and (max-width: 768px) {\r\n  #scrollable {\r\n    height: 314px;\r\n  }\r\n  .img-container {\r\n    height: 78px;\r\n  }\r\n\r\n}\r\n.portfolio-cat {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-flex-align: start;\r\n  -ms-flex-align: start;\r\n  -webkit-box-align: start;\r\n          align-items: start;\r\n  padding:6px;\r\n  overflow-y: scroll;\r\n}\r\n.portfolio-cat::-webkit-scrollbar-track\r\n{\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n  border-radius: 0px;\r\n  background-color: #F5F5F5;\r\n}\r\n\r\n\r\n\r\n\r\n.portfolio-cat::-webkit-scrollbar\r\n{\r\n  width: 10px;\r\n  background-color: #F5F5F5;\r\n}\r\n\r\n.portfolio-cat::-webkit-scrollbar-thumb\r\n{\r\n  border-radius: 6px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n  background-color: #555;\r\n}\r\n.portfolio-content {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\n.resume-content {\r\n  border-radius:5px;\r\n  border: 1px solid grey;\r\n  border-left: none;\r\n}\r\n.secondary-content {\r\n  background-color: whitesmoke;\r\n  margin-top: 2%;\r\n  border-radius: 6px 6px 6px 6px;\r\n}\r\n.grid-image-w {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n.grid-image-h {\r\n  max-height: 100%;\r\n  width: auto;\r\n}\r\n.mat-list-item {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nul {\r\n  margin-top: 10px;\r\n}\r\nli {\r\n  margin-top: 6px;\r\n}\r\nmat-ink-bar .mat-ink-bar {\r\n  background-color: white !important;\r\n  color: white !important;\r\n}\r\nmat-ink-bar {\r\n  background-color: white !important;\r\n  color: white !important;\r\n}\r\n.mat-tab-labels .mat-ink-bar {\r\n  background-color: white !important;\r\n  color: white !important;\r\n}\r\n"

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar> -->\n<div class=\"container\" style=\"margin-top: 3%;   margin-bottom: 3%;\">\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

module.exports = "<body>\n<mat-toolbar id=\"toolbar\">\n  <p>Adam programuje</p>\n</mat-toolbar>\n<mat-tab-group class=\"rounded-bottom\" [(selectedIndex)]=\"selectedIndex\">\n  <div></div>\n  <mat-tab label=\"Portfolio\">\n    <div class=\"m-t-m m-b-m\">\n\n      <div id=\"scrollable\" class=\"row rounded\" style=\"border: 1px solid black;margin: 0px 10px 0px 10px;\">\n        <div class=\"col-2 imgs-container\" style=\"padding-right:0px; padding-left:0px;\">\n          <div class=\"img-container\"\n               [ngStyle]=\"active[0] ? {'border-right':'none','border-radius':'6px 0 0 0','background-color':'whitesmoke'}:{'border-radius':'6px 0 0 0'}\"\n               (click)=\"setActive(0)\">\n            <img style=\"cursor: pointer; height: auto;width: 100%;\" src=\"../../../assets/img/angular.png\"\n                 alt=\"angular\"/>\n          </div>\n          <div class=\"img-container\" [ngStyle]=\"active[1] ? {'border-right':'none','background-color':'whitesmoke'}:{}\"\n               (click)=\"setActive(1)\">\n            <img style=\"cursor: pointer; height: auto;width: 100%;\" src=\"../../../assets/img/python.png\" alt=\"python\"/>\n          </div>\n          <div class=\"img-container\" [ngStyle]=\"active[2] ? {'border-right':'none','background-color':'whitesmoke'}:{}\"\n               (click)=\"setActive(2)\">\n            <img style=\"cursor: pointer; height: auto;width: 100%;\" src=\"../../../assets/img/android.png\"\n                 alt=\"android\"/>\n          </div>\n          <div class=\"img-container\"\n               [ngStyle]=\"active[3] ? {'border-right':'none','border-bottom':'none','background-color':'whitesmoke','border-radius':'0 0 0 6px'}:{'border-radius':'0 0 0 6px','border-bottom':'none'}\"\n               (click)=\"setActive(3)\">\n            <img style=\"cursor: pointer;height: auto;width: 100%;\" src=\"../../../assets/img/nodejs.png\" alt=\"socketio\"/>\n          </div>\n          <div style=\"width:100%;height:auto;background-color: lightgrey;border-right:1px solid grey;\"></div>\n        </div>\n        <!--display: flex;align-items:start;justify-content:start;padding:6px; -->\n\n        <div *ngIf=\"activeNumber==0\" class=\"col-10 portfolio-cat\">\n          <div class=\"m-b-l portfolio-content\">\n            <mat-toolbar><p>JavaScript - Angular</p></mat-toolbar>\n\n            <mat-expansion-panel expanded=\"true\">\n              <mat-expansion-panel-header>\n                <p>Asynch. wyszukiwarka</p>\n              </mat-expansion-panel-header>\n              <div class=\"m-t-m\">\n                Skromna aplikacja wykorzystująca asynchroniczne zapytania do komunikacji z bazą danych zawierającą\n                przykładowe dane firmy, funkcje:\n                <ul>\n                  <li>\n                    walidacja wpisanego numeru,\n                  </li>\n                  <li>\n                    dynamiczne zapytania oraz feedback,\n                  </li>\n                  <li>\n                    gromadzenie w bazie szczególów zapytań.\n                  </li>\n                </ul>\n                <div class=\"btn-group\">\n                  <a class=\"btn btn-info\" href=\"http://numberseeker.herokuapp.com/\" target=\"_blank\">Strona</a>\n                  <a class=\"btn btn-success\" href=\"https://gitlab.com/adampolczynski/nip-task-aveneo\" target=\"_blank\">Repo</a>\n                </div>\n\n              </div>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <p>Material portfolio</p>\n              </mat-expansion-panel-header>\n              <div class=\"m-t-m\">\n                Jest to strona, którą aktualnie przeglądasz, krótka charakterystyka:\n                <ul>\n                  <li>\n                    wykorzystanie komponentów Material.io,\n                  </li>\n                  <li>\n                    prostota oraz przejrzystość wynikająca z niedużej ilości treści,\n                  </li>\n                  <li>\n                    pozycjonowanie tła daje wrażenie dynamiczności.\n                  </li>\n\n                </ul>\n                <div class=\"btn-group\">\n                  <a class=\"btn btn-info\" href=\"#\">-</a>\n                  <a class=\"btn btn-success\" href=\"https://github.com/adampolczynski/AngularPortfolio\" target=\"_blank\">Repo</a>\n                </div>\n              </div>\n            </mat-expansion-panel>\n          </div>\n        </div>\n        <div *ngIf=\"activeNumber==1\" class=\"col-10 portfolio-cat\">\n          <div class=\"m-b-l portfolio-content\">\n            <mat-toolbar><p>Python - Django</p></mat-toolbar>\n            <mat-expansion-panel expanded=\"true\">\n              <mat-expansion-panel-header>\n                <p>Zarządzalny blog</p>\n              </mat-expansion-panel-header>\n              <div class=\"m-t-m\">\n                Jedno z wykonanych przeze mnie zadań rekrutacyjnych, funkcje:\n                <ul>\n                  <li>\n                    system administracyjny (admin, admin-suit),\n                  </li>\n                  <li>\n                    logowanie poprzez FB, Twitter (allauth),\n                  </li>\n                  <li>\n                    dynamiczne wyszukiwanie zindeksowanych pól modeli (haystack, solr),\n                  </li>\n                  <li>\n                    zadanie liczenia komentarzy wykonywane przez zewnętrzny modul (celery),\n                  </li>\n                  <li>\n                    koszyk wykonany przy pomocy jQuery.\n                  </li>\n                </ul>\n                <i class=\"text-info\">Solr oraz Celery nie są podpięte pod publiczną wersję.</i><br><br>\n                <div class=\"btn-group\">\n                  <a class=\"btn btn-info\" href=\"https://djangoblogmerix.herokuapp.com/\" target=\"_blank\">Strona</a>\n                  <a class=\"btn btn-success\" href=\"https://github.com/adampolczynski/DjangoBlog\"\n                     target=\"_blank\">Repo</a>\n                </div>\n              </div>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <p>Ankieta socj.</p>\n              </mat-expansion-panel-header>\n              <div class=\"m-t-m\">\n                Ankieta mająca na celu określenie cech osobowości, cechy:\n                <ul>\n                  <li>\n                    back-end wykonany w Django + mongoDB engine,\n                  </li>\n                  <li>\n                    prosty front złożony z modali,\n                  </li>\n                  <li>\n                    dynamiczna 'wymiana' treści (jQuery),\n                  </li>\n                  <li>\n                    wyświetlanie statystyk w przyjemny sposób (chart.js).\n                  </li>\n                </ul>\n                <div class=\"btn-group\">\n                  <a class=\"btn btn-info\" href=\"https://questions4u.herokuapp.com/\" target=\"_blank\">Strona</a>\n                  <a class=\"btn btn-success\" href=\"#\">-</a>\n                </div>\n              </div>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <p>ToiletQuotes Web</p>\n              </mat-expansion-panel-header>\n              <div class=\"m-t-m\">\n                Skromny panel umożliwiający zarządzanie cytatami aplikacji mobilnej.\n                <ul>\n                  <li>\n                    dodanie nowego cytatu przez użytkownika,\n                  </li>\n                  <li>\n                    usuwanie oraz weryfikacja cytatów.\n                  </li>\n                </ul>\n                <div class=\"\">\n                  <div class=\"btn-group\">\n                    <a class=\"btn btn-info\" href=\"https://toiletquotes.herokuapp.com/\" target=\"_blank\">Strona</a>\n                    <a class=\"btn btn-success\" href=\"https://github.com/adampolczynski/ToiletQuotesWebPart\"\n                       target=\"_blank\">Repo</a>\n                  </div>\n                </div>\n\n              </div>\n            </mat-expansion-panel>\n\n          </div>\n        </div>\n        <div *ngIf=\"activeNumber==2\" class=\"col-10 portfolio-cat\">\n          <div class=\"m-b-l portfolio-content\">\n            <mat-toolbar><p>Java - Android</p></mat-toolbar>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <p>GPS tracker</p>\n              </mat-expansion-panel-header>\n              <div class=\"m-t-m\">\n                Jedna z pierwszych stworzonych przeze mnie aplikacji, charakterystyka:\n                <ul>\n                  <li>\n                    śledzi lokalizację zapisując koordynaty w kolekcji,\n                  </li>\n                  <li>\n                    prezentuje trasę na mapie Google'a, korzystając z GoogleMaps Api,\n                  </li>\n                  <li>\n                    pozwala na dodanie znacznika na mapie, zapis tras w bazie danych,\n                  </li>\n                  <li>\n                    umożliwia logowanie się przy pomocy Facebook.\n                  </li>\n                </ul>\n                <div class=\"btn-group\">\n                  <a class=\"btn btn-info\" href=\"#\">-</a>\n                  <a class=\"btn btn-success\" href=\"https://github.com/adampolczynski/AndroidGPSTracker\" target=\"_blank\">Repo</a>\n                </div>\n\n              </div>\n            </mat-expansion-panel>\n            <mat-expansion-panel expanded=\"true\">\n              <mat-expansion-panel-header>\n                <p>ToiletQuotes Android</p>\n              </mat-expansion-panel-header>\n              <div class=\"m-t-m\">\n                Skromna aplikacja wyświetlająca cytaty.\n                <ul>\n                  <li>\n                    oryginalny layout prezentujący kibel,\n                  </li>\n                  <li>\n                    pobieranie losowego cytatu z bazy danych,\n                  </li>\n                  <li>\n                    aplikacja wspiera orientacje ekranu horyzontalną jak i wertykalną.\n                  </li>\n                </ul>\n                <i class=\"text-info\">Klikając 'strona' przejdziesz do play.google.com, tam możesz pobrać\n                  aplikację</i><br><br>\n                <div class=\"btn-group\">\n                  <a class=\"btn btn-info\"\n                     href=\"https://play.google.com/store/apps/details?id=com.hitech.apolczynski.toi_toy\">Strona</a>\n                  <a class=\"btn btn-success\" href=\"https://github.com/adampolczynski/ToiletQuotes\"\n                     target=\"_blank\">Repo</a>\n                </div>\n\n              </div>\n            </mat-expansion-panel>\n\n          </div>\n        </div>\n        <div *ngIf=\"activeNumber==3\" class=\"col-10 portfolio-cat\">\n          <div class=\"m-b-l portfolio-content\">\n            <mat-toolbar><p>JavaScript - SocketIO</p></mat-toolbar>\n            <mat-expansion-panel expanded=\"true\">\n              <mat-expansion-panel-header>\n                <p>Gra multiplayer</p>\n              </mat-expansion-panel-header>\n              <div class=\"m-t-m\">\n                Gra przeglądarkowa - jeszcze w wersji beta, co i jak:\n                <ul>\n                  <li>\n                    gra rozpoczyna się w momencie, gdy dostępnych jest min. 2 graczy i któryś z nich wciśnie 'start',\n                  </li>\n                  <li>\n                    na planszy pojawia się gwiazdka, którą każdy z graczy ma możliwość złapać, za co naliczane są\n                    punkty,\n                  </li>\n                  <li>\n                    dzięki socket.io komuniacja między graczami jest zsynchronizowana.\n                  </li>\n                </ul>\n                <div class=\"btn-group\">\n                  <a class=\"btn btn-info\" href=\"https://catch-a-star-socketio.herokuapp.com/\"\n                     target=\"_blank\">Strona</a>\n                  <a class=\"btn btn-success\" href=\"https://github.com/adampolczynski/SocketIOMultiplayer\"\n                     target=\"_blank\">Repo</a>\n\n                </div>\n              </div>\n            </mat-expansion-panel>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </mat-tab>\n  <mat-tab id=\"tab\" label=\"Aplikacje mobilne\">\n    <div class=\"main-content container-fluid rounded\">\n      <div class=\"container m-t-s\">\n        <h3 style=\"text-align: center\">Apki na wyciągniecie łapki!</h3>\n        <hr style=\"width:70%;\">\n        <p class=\"text-center\">Myślałeś kiedyś o tym, jak łatwo dotrzeć do ludzi przy pomocy\n          nowoczesnej aplikacji na telefon? Każdy używa telefonu opartego na systemie Android czy iOS -\n          ogranicza nas jedynie wyobraźnia jeśli chodzi o wygląd i funkcje takiego mobilnego programu.</p>\n        <p class=\"text-center text-success\" style=\"font-style: italic;\">\"Programowanie to nie sztuka, sztuką jest\n          finalizować projekty\"</p>\n      </div>\n    </div>\n\n  </mat-tab>\n  <mat-tab label=\"Strony internetowe\">\n    <div class=\"main-content container-fluid\">\n      <div class=\"container m-t-s\">\n        <h3 class=\"text-center\">Front-end, back-end, full-service!</h3>\n        <hr style=\"width:70%;\">\n        <p class=\"text-center\">Mamy rok 2017 i mnóstwo dostępnych technologii, ktore umożliwiają szybkie\n          tworzenie w pełni funkcjonalnych, estetycznych i bezpiecznych aplikacji webowych, błędem byłoby ich nie\n          wykorzystać!</p>\n        <p class=\"text-center text-success\" style=\"font-style: italic;\">\"Dobry programista to przede wszystkim\n          jakość jego produktów\"</p>\n      </div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Bazy danych\">\n    <div class=\"main-content container-fluid\">\n      <div class=\"container m-t-s\">\n        <h3 class=\"text-center\">Operacje na bazach danych</h3>\n        <hr style=\"width:70%;\">\n        <p class=\"text-center\">Każda szanująca sie aplikacja internetowa\n          dysponuje 'podłączona' do siebie bazą danych, o ile takiej wymaga, na ktorej wykonywane są operacje.</p>\n        <p class=\"text-center\">Pozwala to na przechowywanie, filtrowanie, uzyskiwanie, sortowanie danyhch i zachowywanie\n          między nimi określonych relacji.</p>\n        <p class=\"text-center\">Osobiście jestem fanem stosunkowo nowego MongoDB - z racji bazowania na foracie JSON.</p>\n      </div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"O mnie\">\n    <div class=\"main-content container-fluid\">\n      <h3 class=\"text-center\">Kim to ja jestem?</h3>\n      <hr style=\"width:70%;\">\n      <p class=\"text-center\">\n        Pasjonuje się programowaniem, projektowaniem aplikacji, zarządzaniem danymi (bazy danych), diagnostyką\n        komputerową oraz sieciami.\n        Koduję amatorsko od czasów gimnazjum, dopiero z końcem roku 2016 zacząłem skupiać się na konkretnych projektach.\n      </p>\n      <p class=\"text-center\">\n        Mieszkam w Poznaniu, aktualnie uczę się technologii pokazanych w portfolio oraz oczywiście poznaje nowe w miarę\n        potrzeb.\n    </div>\n  </mat-tab>\n</mat-tab-group>\n\n<div>\n  <div class=\"row\" *ngIf=\"selectedIndex==4\">\n    <div class=\"col-12\">\n      <img style=\"max-width: 380px;\" class=\"w-50 img-thumbnail mx-auto d-block\" src=\"../../../assets/img/wybrane.jpg\"\n           alt=\"tracker\">\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"selectedIndex==3\">\n    <div class=\"col-12\">\n      <img class=\"grid-image-w img-thumbnail mx-auto d-block\" src=\"../../../assets/img/databases.png\" alt=\"tracker\">\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"selectedIndex==2\">\n    <div class=\"col-12\">\n      <img class=\"grid-image-w img-thumbnail mx-auto d-block\" src=\"../../../assets/img/frameworks.png\" alt=\"tracker\">\n    </div>\n  </div>\n  <div class=\"row\" style=\"height: auto;\" *ngIf=\"selectedIndex==1\">\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-4\">\n      <img class=\"w-50 img-thumbnail mx-auto d-block\" src=\"../../../assets/img/tracker.png\" alt=\"tracker\">\n    </div>\n\n    <div class=\"hidden-sm-down col-md-6 col-lg-4\">\n      <img class=\"w-50 img-thumbnail mx-auto d-block\" src=\"../../../assets/img/calendar.png\" alt=\"tracker\">\n    </div>\n    <div class=\"hidden-md-down col-lg-4\">\n      <img class=\"w-50 img-thumbnail mx-auto d-block\" src=\"../../../assets/img/fryzjerska.png\" alt=\"tracker\">\n    </div>\n  </div>\n</div>\n\n<div class=\"main-content secondary-content container-fluid rounded\">\n  <div class=\"container text-center m-t-m\">\n    <h3 style=\"text-align: center\">Porozmawiamy?</h3>\n    <hr style=\"width:70%;\">\n    <p style=\"text-align: center; margin-top: 10px;\">Chcesz stworzyć projekt, lecz szukasz kogoś do jego realizacji?\n      <br>Prezentujesz firmę i szukasz pracownika?\n      <br>A może też interesujesz się programowaniem?\n      <br><br>Poniżej znajdziesz mój email, pisz śmiało.</p>\n    <p class=\"text-success\">adam_polczynski@yahoo.com</p>\n  </div>\n</div>\n</body>\n"

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(181);


/***/ })

},[445]);
//# sourceMappingURL=main.bundle.map