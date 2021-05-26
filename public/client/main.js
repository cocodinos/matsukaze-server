(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cocodinos/Documents/Work/11-Aethon/00-Holdings/01-Projects/09-Matsukaze/01-Software/matsukaze/matsukaze/src/main.ts */"zUnb");


/***/ }),

/***/ "2a1E":
/*!*******************************************************************!*\
  !*** ./src/app/modules/cms/components/navbar/navbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_modules_user_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/user/services/user/user.service */ "rPFO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return ["/home"]; };
const _c1 = function (a0) { return { lang: a0 }; };
function NavbarComponent_a_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r0.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "navbar.account"));
} }
function NavbarComponent_a_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r1.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "navbar.login"));
} }
const _c2 = function () { return ["/"]; };
const _c3 = function () { return ["."]; };
const _c4 = function () { return { lang: "en" }; };
const _c5 = function () { return { lang: "el" }; };
const _c6 = function () { return ["/sample"]; };
const _c7 = function () { return ["/books"]; };
const _c8 = function () { return ["/contact"]; };
class NavbarComponent {
    constructor(activatedRoute, translate, authService, router) {
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.authService = authService;
        this.router = router;
        this.user = null;
        this.lang = null;
    }
    ngOnInit() {
        this.translate.setDefaultLang('en');
        this.activatedRoute.queryParamMap.subscribe(queryParamMap => {
            if (queryParamMap === null || queryParamMap === void 0 ? void 0 : queryParamMap.get("lang")) {
                this.lang = queryParamMap === null || queryParamMap === void 0 ? void 0 : queryParamMap.get("lang");
            }
            else {
                this.lang = this.translate.getBrowserLang();
            }
            this.translate.use(this.lang);
            ;
        });
        this.authService.getUser$().subscribe(user => { this.user = user; });
    }
    onChangeLang(lang) {
        this.lang = lang;
        this.activatedRoute.url.subscribe(url => {
            this.router.navigate(url, {
                queryParams: { lang: this.lang },
                queryParamsHandling: 'merge'
            });
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_user_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["matsukaze-navbar"]], inputs: { page: "page" }, decls: 32, vars: 48, consts: [["id", "mainNav", 1, "navbar", "navbar-expand-md", "fixed-top"], [1, "container-fluid"], ["type", "button", "data-toggle", "collapse", "data-target", "#navcol-1", 1, "navbar-toggler", "navbar-dark"], [1, "navbar-toggler-icon"], [1, "navbar-brand", 3, "routerLink", "queryParams"], ["src", "assets/img/artwork/eagle.png"], ["id", "navcol-1", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-expanded", "false", "href", "#", 1, "nav-link", "text-shadow", "dropdown-toggle"], ["role", "menu", 1, "dropdown-menu"], [1, "dropdown-item", "js-scroll-trigger", 3, "routerLink", "queryParams", "click"], [1, "nav-item"], [1, "nav-link", "text-shadow", 3, "routerLink", "queryParams"], ["class", "nav-link text-shadow", 3, "routerLink", "queryParams", 4, "ngIf"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_13_listener() { return ctx.onChangeLang("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_15_listener() { return ctx.onChangeLang("el"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03B1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NavbarComponent_a_30_Template, 3, 8, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NavbarComponent_a_31_Template, 3, 8, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c1, ctx.lang));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 20, "navbar.language"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c4))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c1, ctx.lang));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c5))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c1, ctx.lang));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c6))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c1, ctx.lang));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 22, "navbar.sample"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c7))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c1, ctx.lang));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 24, "navbar.books"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c8))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c1, ctx.lang));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 26, "navbar.contact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n  text-transform: uppercase;\n  font-weight: bold;\n  font-family: \"Caudex\", serif !important;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: rgba(255, 255, 255, 0.6);\n}\na[_ngcontent-%COMP%]:link {\n  color: rgba(255, 255, 255, 0.6);\n}\na[_ngcontent-%COMP%]:visited {\n  color: rgba(255, 255, 255, 0.4);\n}\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: rgba(255, 255, 255, 0.8);\n}\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 30px;\n  opacity: 0.5;\n}\n@media (max-width: 768px) {\n  .navbar-collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    height: 3em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSwrRUFBQTtBQUNBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7QUFERjtBQUlBO0VBQ0Usb0NBQUE7RUFDQSwrQkFBQTtBQURGO0FBSUE7RUFDRSwrQkFBQTtBQURGO0FBSUE7RUFDRSwrQkFBQTtBQURGO0FBSUE7RUFDRSwrQkFBQTtBQURGO0FBSUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFERjtBQUlBO0VBQ0U7SUFDRSxXQUFBO0VBREY7QUFDRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2Nzc1wiO1xuXG4vKiBOQVZCQVIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnQ2F1ZGV4Jywgc2VyaWYgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG59XG5cbmE6bGluayB7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG59XG5cbmE6dmlzaXRlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XG59XG5cbmE6aG92ZXIsIGE6YWN0aXZlIHtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbn1cblxuLm5hdmJhci1icmFuZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzMHB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLWNvbGxhcHNlIC5uYXYtaXRlbSB7XG4gICAgaGVpZ2h0OiAzZW07XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "38Xm":
/*!*************************************************!*\
  !*** ./src/app/modules/viewer/viewer.module.ts ***!
  \*************************************************/
/*! exports provided: ViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerModule", function() { return ViewerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/viewer/viewer.component */ "7D5s");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "oZWX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ViewerModule {
}
ViewerModule.ɵfac = function ViewerModule_Factory(t) { return new (t || ViewerModule)(); };
ViewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ViewerModule });
ViewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ViewerModule, { declarations: [_components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ViewerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ViewerComponent"]] }); })();


/***/ }),

/***/ "3y2Q":
/*!****************************************************************!*\
  !*** ./src/app/modules/user/components/home/home.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user/user.service */ "rPFO");


class HomeComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    onLogout() {
        this.authService.logout$().subscribe();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["matsukaze-home"]], decls: 4, vars: 0, consts: [["href", "/", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_2_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "7D5s":
/*!**********************************************************************!*\
  !*** ./src/app/modules/viewer/components/viewer/viewer.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerComponent", function() { return ViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modules_user_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/user/services/user/user.service */ "rPFO");


class ViewerComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
ViewerComponent.ɵfac = function ViewerComponent_Factory(t) { return new (t || ViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_user_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
ViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewerComponent, selectors: [["matsukaze-viewer"]], decls: 2, vars: 0, template: function ViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "viewer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "9N29":
/*!*********************************************!*\
  !*** ./src/app/modules/user/user.module.ts ***!
  \*********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routing/app-routing.module */ "rALe");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _components_flow_flow_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/flow/flow.component */ "krJI");
/* harmony import */ var _components_flowStates_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/flowStates/login/login.component */ "NEqr");
/* harmony import */ var _components_flowStates_create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/flowStates/create/create.component */ "fki3");
/* harmony import */ var _components_flowStates_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/flowStates/forgot/forgot.component */ "Gjkl");
/* harmony import */ var _components_flowStates_reset_reset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/flowStates/reset/reset.component */ "EhkM");
/* harmony import */ var _components_flowStates_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/flowStates/confirm/confirm.component */ "JoiE");
/* harmony import */ var _components_widgets_password_checker_password_checker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/widgets/password-checker/password-checker.component */ "b2vY");
/* harmony import */ var _components_widgets_username_username_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/widgets/username/username.component */ "MTFM");
/* harmony import */ var _components_widgets_password_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/widgets/password/password.component */ "NVMp");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "3y2Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_components_flowStates_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _components_flowStates_create_create_component__WEBPACK_IMPORTED_MODULE_7__["CreateComponent"],
        _components_flowStates_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"],
        _components_widgets_password_checker_password_checker_component__WEBPACK_IMPORTED_MODULE_11__["PasswordCheckerComponent"],
        _components_widgets_username_username_component__WEBPACK_IMPORTED_MODULE_12__["UsernameComponent"],
        _components_widgets_password_password_component__WEBPACK_IMPORTED_MODULE_13__["PasswordComponent"],
        _components_flowStates_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_8__["ForgotComponent"],
        _components_flowStates_reset_reset_component__WEBPACK_IMPORTED_MODULE_9__["ResetComponent"],
        _components_flow_flow_component__WEBPACK_IMPORTED_MODULE_5__["FlowComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]], exports: [_components_flow_flow_component__WEBPACK_IMPORTED_MODULE_5__["FlowComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]] }); })();


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

/***/ "EhkM":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user/components/flowStates/reset/reset.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/model */ "tUKl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user/user.service */ "rPFO");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _widgets_password_checker_password_checker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/password-checker/password-checker.component */ "b2vY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function ResetComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.error));
} }
class ResetComponent {
    constructor(route, userService, spinner) {
        this.route = route;
        this.userService = userService;
        this.spinner = spinner;
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.code = this.route.snapshot.queryParamMap.get("code");
        this.email = this.route.snapshot.queryParamMap.get("email");
    }
    onSubmit() {
        if (this.email && this.password && this.code) {
            this.spinner.show();
            this.userService.resetPassword$(this.email, this.password, this.code).subscribe(obj => {
                console.log(obj);
                if ((obj === null || obj === void 0 ? void 0 : obj.matsukazeObjectType) == src_app_model_model__WEBPACK_IMPORTED_MODULE_1__["MatsukazeObjectTypes"].error) {
                    this.error = obj.type;
                }
                else {
                    this.state.emit({ flow: 'reset', state: 'confirm' });
                }
                this.spinner.hide();
            });
        }
    }
}
ResetComponent.ɵfac = function ResetComponent_Factory(t) { return new (t || ResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
ResetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetComponent, selectors: [["matsukaze-reset"]], outputs: { state: "state" }, decls: 13, vars: 8, consts: [[1, "form-group"], [3, "password", "passwordChange"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-warning", 2, "width", "100%", 3, "click"], [1, "form-text"]], template: function ResetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "matsukaze-password-checker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("passwordChange", function ResetComponent_Template_matsukaze_password_checker_passwordChange_6_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResetComponent_div_8_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetComponent_Template_button_click_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "auth.flows.reset.reset.labels.reset"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("password", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, "auth.flows.reset.reset.labels.submit"));
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _widgets_password_checker_password_checker_component__WEBPACK_IMPORTED_MODULE_6__["PasswordCheckerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Gjkl":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/user/components/flowStates/forgot/forgot.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user/user.service */ "rPFO");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _widgets_username_username_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/username/username.component */ "MTFM");






class ForgotComponent {
    constructor(authService, translateService) {
        this.authService = authService;
        this.translateService = translateService;
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.email) {
            this.authService.requestPasswordReset$(this.email, this.translateService.currentLang).subscribe(result => {
                this.state.emit({ flow: "reset", state: "checkEmail" });
            });
        }
    }
    onChangeState(state) { this.state.emit(state); }
}
ForgotComponent.ɵfac = function ForgotComponent_Factory(t) { return new (t || ForgotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
ForgotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotComponent, selectors: [["matsukaze-forgot"]], outputs: { state: "state" }, decls: 18, vars: 13, consts: [[1, "form-group"], [1, "form-text"], [3, "email", "emailChange"], ["type", "submit", 1, "btn", "btn-warning", 2, "width", "100%", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "100%", 3, "click"]], template: function ForgotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "matsukaze-username", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emailChange", function ForgotComponent_Template_matsukaze_username_emailChange_9_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotComponent_Template_button_click_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotComponent_Template_button_click_15_listener() { return ctx.onChangeState({ flow: "login", state: "form" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "auth.flows.reset.forgot.labels.reset"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "auth.flows.reset.forgot.labels.instructions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("email", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, "auth.flows.reset.forgot.labels.submit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 11, "auth.flows.reset.forgot.labels.login"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _widgets_username_username_component__WEBPACK_IMPORTED_MODULE_4__["UsernameComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "JoiE":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/user/components/flowStates/confirm/confirm.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/model */ "tUKl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user/user.service */ "rPFO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







function ConfirmComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onChangeState({ flow: "login", state: "form" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "auth.flows.register.confirm.labels.createComplete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "auth.flows.register.confirm.labels.login"));
} }
function ConfirmComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.error);
} }
class ConfirmComponent {
    constructor(route, authService) {
        this.route = route;
        this.authService = authService;
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.activationCode = this.route.snapshot.queryParamMap.get("code");
        this.email = this.route.snapshot.queryParamMap.get("email");
        this.authService.confirm$({
            email: this.email,
            activationCode: this.activationCode
        }).subscribe(obj => {
            if (obj.matsukazeObjectType === src_app_model_model__WEBPACK_IMPORTED_MODULE_1__["MatsukazeObjectTypes"].error)
                this.error = obj.type;
        });
    }
    onChangeState(state) { this.state.emit(state); }
}
ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) { return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
ConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmComponent, selectors: [["matsukaze-confirm"]], outputs: { state: "state" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "form-group"], ["type", "button", 1, "btn", "btn-warning", 2, "width", "100%", 3, "click"]], template: function ConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmComponent_div_0_Template, 8, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmComponent_div_1_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "MTFM":
/*!********************************************************************************!*\
  !*** ./src/app/modules/user/components/widgets/username/username.component.ts ***!
  \********************************************************************************/
/*! exports provided: UsernameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameComponent", function() { return UsernameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function UsernameComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.error));
} }
class UsernameComponent {
    constructor() {
        this.emailChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    validateEmail() {
        if (this.emailTxtBox) {
            var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if (re.test(this.emailTxtBox)) {
                this.error = null;
                this.emailChange.emit(this.emailTxtBox.toLowerCase());
            }
            else {
                this.error = "auth.widgets.username.error.invalidEmail";
                this.emailChange.emit(null);
            }
            ;
        }
        else {
            this.error = null;
            this.emailChange.emit(null);
        }
    }
}
UsernameComponent.ɵfac = function UsernameComponent_Factory(t) { return new (t || UsernameComponent)(); };
UsernameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsernameComponent, selectors: [["matsukaze-username"]], inputs: { email: "email" }, outputs: { emailChange: "emailChange" }, decls: 5, vars: 5, consts: [[1, "form-group"], ["name", "email", "type", "email", "id", "email", "aria-describedby", "emailHelp", "autocomplete", "username", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange", "focusout"], [4, "ngIf"], [1, "form-text"]], template: function UsernameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsernameComponent_Template_input_ngModelChange_1_listener($event) { return ctx.emailTxtBox = $event; })("focusout", function UsernameComponent_Template_input_focusout_1_listener() { return ctx.validateEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsernameComponent_div_4_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "auth.widgets.username.labels.email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailTxtBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VybmFtZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "NEqr":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user/components/flowStates/login/login.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user/user.service */ "rPFO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _widgets_username_username_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/username/username.component */ "MTFM");
/* harmony import */ var _widgets_password_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/password/password.component */ "NVMp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.error));
} }
class LoginComponent {
    constructor(userService, router, spinner) {
        this.userService = userService;
        this.router = router;
        this.spinner = spinner;
        this.error = null;
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onLogin() {
        this.spinner.show();
        const params = { email: this.email, password: this.password };
        this.error = this.validateParams();
        if (!this.error) {
            this.userService.login$(this.email, this.password).subscribe(response => {
                if (response) {
                    this.router.navigateByUrl(this.userService.getRedirectUrl());
                }
                else {
                    this.error = "auth.flows.login.form.errors.invalidLogin";
                    this.password = null;
                }
            });
        }
        this.spinner.hide();
    }
    validateParams() {
        if (!this.email || !this.password)
            return "auth.flows.login.form.errors.noCredentials";
        return null;
    }
    onChangeState(state) { this.state.emit(state); }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["matsukaze-login"]], outputs: { state: "state" }, decls: 23, vars: 15, consts: [[1, "form-group"], [3, "email", "emailChange"], [3, "password", "passwordChange"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-warning", 2, "width", "100%", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "100%", 3, "click"], [2, "text-align", "center"], ["queryParamsHandling", "preserve", 3, "routerLink", "click"], [1, "form-text"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "matsukaze-username", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emailChange", function LoginComponent_Template_matsukaze_username_emailChange_6_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "matsukaze-password", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("passwordChange", function LoginComponent_Template_matsukaze_password_passwordChange_7_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_11_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() { return ctx.onChangeState({ "flow": "register", "state": "form" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_20_listener() { return ctx.onChangeState({ "flow": "reset", "state": "forgot" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, "auth.flows.login.form.labels.login"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("email", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("password", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, "auth.flows.login.form.labels.login"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 11, "auth.flows.login.form.labels.create"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 13, "auth.flows.login.form.labels.forgot"));
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _widgets_username_username_component__WEBPACK_IMPORTED_MODULE_5__["UsernameComponent"], _widgets_password_password_component__WEBPACK_IMPORTED_MODULE_6__["PasswordComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "NVMp":
/*!********************************************************************************!*\
  !*** ./src/app/modules/user/components/widgets/password/password.component.ts ***!
  \********************************************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class PasswordComponent {
    constructor() {
        this.passwordChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onChange($event) { this.passwordChange.emit(this.password); }
}
PasswordComponent.ɵfac = function PasswordComponent_Factory(t) { return new (t || PasswordComponent)(); };
PasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordComponent, selectors: [["matsukaze-password"]], inputs: { password: "password" }, outputs: { passwordChange: "passwordChange" }, decls: 3, vars: 4, consts: [[1, "form-group"], ["type", "password", "name", "password", "id", "password", "autocomplete", "current-password", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"]], template: function PasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PasswordComponent_Template_input_ngModelChange_1_listener($event) { return ctx.password = $event; })("ngModelChange", function PasswordComponent_Template_input_ngModelChange_1_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "auth.widgets.password.labels.password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "OvGx":
/*!*******************************************!*\
  !*** ./src/app/modules/cms/cms.module.ts ***!
  \*******************************************/
/*! exports provided: CmsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsModule", function() { return CmsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_root_root_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/root/root.component */ "Upv/");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "2a1E");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/auth.component */ "Plkk");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routing/app-routing.module */ "rALe");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.module */ "9N29");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/error/error.component */ "vNSa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










class CmsModule {
}
CmsModule.ɵfac = function CmsModule_Factory(t) { return new (t || CmsModule)(); };
CmsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CmsModule });
CmsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CmsModule, { declarations: [_components_root_root_component__WEBPACK_IMPORTED_MODULE_1__["RootComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"],
        _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"]], exports: [_components_root_root_component__WEBPACK_IMPORTED_MODULE_1__["RootComponent"]] }); })();


/***/ }),

/***/ "Plkk":
/*!***************************************************************!*\
  !*** ./src/app/modules/cms/components/auth/auth.component.ts ***!
  \***************************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "2a1E");
/* harmony import */ var _user_components_flow_flow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/components/flow/flow.component */ "krJI");



class AuthComponent {
    constructor() {
        this.state = "login";
    }
    ngOnInit() {
        // if(this.route.snapshot.url[0]?.path) {
        //   this.state=this.route.snapshot.url[0]?.path;
        // }
    }
    onChangeState($event) {
        // this.router.navigate(['auth', $event], { queryParamsHandling: "preserve" });
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["matsukaze-auth"]], decls: 4, vars: 0, consts: [[1, "auth"], [1, "form"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "matsukaze-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "matsukaze-flow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _user_components_flow_flow_component__WEBPACK_IMPORTED_MODULE_2__["FlowComponent"]], styles: [".auth[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url(\"/assets/img/aethon/aethon-background.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.logo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 0 2em 0;\n}\n\n.form[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n  width: 90%;\n  max-width: 400px;\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpRUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYWV0aG9uL2FldGhvbi1iYWNrZ3JvdW5kLnBuZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG59XG5cbi5mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "Upv/":
/*!***************************************************************!*\
  !*** ./src/app/modules/cms/components/root/root.component.ts ***!
  \***************************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "2a1E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




function RootComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", member_r1, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", member_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/img/photos/", member_r1, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", member_r1, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", member_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, "content.home.text.team.members." + member_r1 + ".name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", member_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 12, "content.home.text.team.members." + member_r1 + ".bio"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", member_r1, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", member_r1);
} }
class RootComponent {
    constructor() {
        this.team = ['konstantinos', 'kallia', 'avgi', 'dennis'];
    }
    ngOnInit() {
    }
}
RootComponent.ɵfac = function RootComponent_Factory(t) { return new (t || RootComponent)(); };
RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RootComponent, selectors: [["matsukaze-root"]], decls: 52, vars: 19, consts: [[1, "block", 2, "background", "#000 url('assets/img/artwork/splash-EN.jpg') no-repeat center center scroll", "-webkit-background-size", "cover", "-moz-background-size", "cover", "background-size", "cover"], [1, "digenes-font", 2, "height", "100%", "width", "100%", "position", "relative"], [1, "container-fluid", 2, "height", "100%"], [1, "row", "no-gutters", 2, "height", "100%"], [1, "col-lg-6"], [2, "height", "100%", "width", "100%", "background", "#000 url('/assets/img/artwork/digenes.jpg') no-repeat center center scroll", "-webkit-background-size", "cover", "-moz-background-size", "cover", "background-size", "cover"], [2, "height", "100%", "width", "100%", "background", "#000 url('/assets/img/artwork/bardas.jpg') no-repeat center center scroll", "-webkit-background-size", "cover", "-moz-background-size", "cover", "background-size", "cover"], [1, "quote"], [3, "innerHTML"], ["id", "synopsis", 1, "block"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "title"], [1, "title", "digenes-font"], [1, "block", 2, "background", "#000 url('/assets/img/artwork/memories.jpg') no-repeat center center scroll", "-webkit-background-size", "cover", "-moz-background-size", "cover", "background-size", "cover"], [1, "col-lg-2"], [1, "col-lg-8"], [1, "card", 2, "margin", "20% 0 20% 0", "background-color", "rgba(0,0,0,0.8)"], [1, "card-text", "digenes-font"], ["id", "team", 1, "block", "team"], ["class", "col-lg-3", 4, "ngFor", "ngForOf"], [1, "copyright", "digenes-font"], [1, "col-lg-3"], [1, "card"], ["data-toggle", "collapse", "role", "button", "aria-expanded", "false", 3, "href"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title", "digenes-font"], [1, "collapse", "multi-collapse", 3, "id"], [1, "fas", "fa-chevron-up"]], template: function RootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "matsukaze-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, RootComponent_div_46_Template, 15, 14, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u00A9 2018 Aethon Holdings Private Limited. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, "content.home.text.quote"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 9, "content.home.text.synopsis.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 11, "content.home.text.synopsis.premise"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 13, "content.home.text.synopsis.punchline"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 15, "content.home.text.synopsis.detail"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 17, "content.home.text.team.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".block[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n  background-color: #b40000;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95));\n  border-bottom: black 1px solid;\n}\n\n.digenes-font[_ngcontent-%COMP%] {\n  font-family: \"Caudex\", serif !important;\n}\n\n.buffer[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n\n\n.quote[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  width: 100%;\n}\n\n.quote[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  bottom: 0px;\n  padding: 1em;\n  text-transform: uppercase;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n@media (max-width: 768px) {\n  .quote[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    font-size: 150%;\n  }\n}\n\n\n\n.title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.title[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 2em;\n  margin-top: 2em;\n  padding-bottom: 0.25em;\n  border-bottom-color: rgba(255, 0, 0, 0.4);\n  border-bottom-style: solid;\n}\n\n\n\n.synopsis-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.synopsis-img[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  display: fixed;\n  position: absolute;\n  padding: 20px;\n  color: rgba(0, 0, 0, 0.8);\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.05);\n  padding: 10%;\n  margin: 10px;\n}\n\n.card-img-top[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  border-style: solid;\n  border-width: 2px;\n  border-radius: 50%;\n  max-width: 60%;\n  border-color: rgba(255, 255, 255, 0.5);\n  filter: grayscale(100%);\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  min-height: 2.5em;\n}\n\n@media (min-width: 768px) {\n  .card-img-top[_ngcontent-%COMP%] {\n    max-width: 80%;\n  }\n}\n\n\n\n.copyright[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10em;\n  text-align: center;\n  font-size: small;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Jvb3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJDSGM7RURJZCxxRkFBQTtFQUNBLDhCQUFBO0FBREY7O0FBSUE7RUFDRSx1Q0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBLDhFQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxlQUFBO0VBREY7QUFDRjs7QUFJQSw4RUFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0FBRkY7O0FBS0EsOEVBQUE7O0FBQ0E7RUFDRSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBSUEsOEVBQUE7O0FBQ0E7RUFDRSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLGNBQUE7RUFERjtBQUNGOztBQUlBLCtFQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBRkYiLCJmaWxlIjoicm9vdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0c3VrYXplLXJlZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLDAsMCwwLjgpLCByZ2JhKDAsMCwwLDAuOTUpKTtcbiAgYm9yZGVyLWJvdHRvbTogcmdiYSgwLDAsMCwxKSAxcHggc29saWQ7XG59XG5cbi5kaWdlbmVzLWZvbnQge1xuICBmb250LWZhbWlseTogJ0NhdWRleCcsIHNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5idWZmZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4vKiBCQVJEQVMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ucXVvdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5xdW90ZSA+IGgxIHtcbiAgYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnF1b3RlID4gaDEge1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgfVxufVxuXG4vKiBUSVRMRSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4udGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpdGxlID4gaDEsaDIsaDMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1ZW07XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LDAsMCwwLjQpO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbn1cblxuLyogU1lOT1BTSVMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLnN5bm9wc2lzLWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN5bm9wc2lzLWltZyA+IGgxIHtcbiAgZGlzcGxheTogZml4ZWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcbn1cbi8qIFRFQU0gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgcGFkZGluZzogMTAlO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5jYXJkLWltZy10b3Age1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMi41ZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2FyZC1pbWctdG9wIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgfVxufVxuXG4vKiBDT1BZUklHSFQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmNvcHlyaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xufVxuIiwiLy8gR0xPQkFMLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRtYXRzdWthemUtbmF2YmFyLWhlaWdodDogNjBweDtcbiRtYXRzdWthemUtbmF2YmFyLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XG4kbWF0c3VrYXplLXJlZDogcmdiYSgxODAsMCwwLDEpO1xuJG1hdHN1a2F6ZS1yZWQtbGluZTogcmdiYSgxMDAsMCwwLDEpO1xuJG1hdHN1a2F6ZS13aGl0ZTogcmdiKDIzMCwyMzAsMjMwLDEpO1xuJG1hdHN1a2F6ZS1ib3JkZXI6IHJnYigyMzAsMjMwLDIzMCwwLjQpO1xuJG1hdHN1a2F6ZS10cmFuc3BhcmVuY3k6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4kbWF0c3VrYXplLXRyYW5zcGFyZW5jeS1zdGFuZG91dDogcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcbiRtYXRzdWthemUtaGlnaGxpZ2h0OiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4kbWF0c3VrYXplLW1hcmdpbi1iYXNlOiAwLjVlbTtcbiRtYXRzdWthemUtcGFkZGluZy10b3A6IDFlbTtcbiRtYXRzdWthemUtcGFkZGluZy1iYXNlOiAwLjVlbTtcbiRtYXRzdWthemUtcGFkZGluZy13aWRlOiAxZW07XG4kbWF0c3VrYXplLWJvcmRlci1yYWRpdXM6IDAuNWVtO1xuJG1hdHN1a2F6ZS1zY3JvbGxiYXItd2lkdGg6IDEwcHg7XG5cblxuLy8gT1VUTElORS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRtYXRzdWthemUtd29ya3NwYWNlLW5hdmlnYXRpb24td2lkdGg6IDYwJTtcbiRtYXRzdWthemUtb3V0bGluZS1ub3Rlcy13aWR0aDogMTVlbTtcbiRtYXRzdWthemUtb3V0bGluZS1sZXZlbC1pbmRlbnQ6IDFlbTtcbiRtYXRzdWthemUtb3V0bGluZS1kaWFsb2d1ZS13aWR0aDogMzVlbTtcbiRtYXRzdWthemUtb3V0bGluZS1jb250cm9sLXdpZHRoOiAyZW07XG4kbWF0c3VrYXplLW91dGxpbmUtbGFiZWwtd2lkdGg6IDhlbTtcbiRtYXRzdWthemUtb3V0bGluZS1kcm9wem9uZS1oZWlnaHQ6IDJlbTtcbiRtYXRzdWthemUtb3V0bGluZS1zaWRlbmF2LWZvbnQtc2l6ZTogMTBwdDtcblxuLy8gU1RPUllCT0FSRCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRtYXRzdWthemUtc3Rvcnlib2FyZC1jb2x1bW4td2lkdGg6IDMwMHB4O1xuJG1hdHN1a2F6ZS1zdG9yeWJvYXJkLWNhcmQtd2lkdGg6ICRtYXRzdWthemUtc3Rvcnlib2FyZC1jb2x1bW4td2lkdGggLSAyKiRtYXRzdWthemUtc2Nyb2xsYmFyLXdpZHRoO1xuXG4vLyBCT09UU1RSQVAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBWYXJpYWJsZXNcbi8vXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3Jcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxuXG4vLyBDb2xvciBzeXN0ZW1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXG4gICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXG4gICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXG4gICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgIFwiOTAwXCI6ICRncmF5LTkwMFxuICApLFxuICAkZ3JheXNcbik7XG5cbiRibHVlOiAgICAjMDA3YmZmICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogICAgICNkYzM1NDUgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjZmZjMTA3ICFkZWZhdWx0O1xuJGdyZWVuOiAgICMyOGE3NDUgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMTdhMmI4ICFkZWZhdWx0O1xuXG4kY29sb3JzOiAoKSAhZGVmYXVsdDtcbiRjb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiYmx1ZVwiOiAgICAgICAkYmx1ZSxcbiAgICBcImluZGlnb1wiOiAgICAgJGluZGlnbyxcbiAgICBcInB1cnBsZVwiOiAgICAgJHB1cnBsZSxcbiAgICBcInBpbmtcIjogICAgICAgJHBpbmssXG4gICAgXCJyZWRcIjogICAgICAgICRyZWQsXG4gICAgXCJvcmFuZ2VcIjogICAgICRvcmFuZ2UsXG4gICAgXCJ5ZWxsb3dcIjogICAgICR5ZWxsb3csXG4gICAgXCJncmVlblwiOiAgICAgICRncmVlbixcbiAgICBcInRlYWxcIjogICAgICAgJHRlYWwsXG4gICAgXCJjeWFuXCI6ICAgICAgICRjeWFuLFxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUsXG4gICAgXCJncmF5XCI6ICAgICAgICRncmF5LTYwMCxcbiAgICBcImdyYXktZGFya1wiOiAgJGdyYXktODAwXG4gICksXG4gICRjb2xvcnNcbik7XG4iXX0= */"] });


/***/ }),

/***/ "WfQD":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'matsukaze';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["matsukaze-app"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _modules_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/routing/app-routing.module */ "rALe");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app/app.component */ "WfQD");
/* harmony import */ var _modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/cms/cms.module */ "OvGx");
/* harmony import */ var _modules_user_user_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/user/user.module */ "9N29");
/* harmony import */ var _modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/viewer/viewer.module */ "38Xm");
/* harmony import */ var _services_persistence_persistence_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/persistence/persistence.service */ "qfWE");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/api/api.service */ "oZWX");
/* harmony import */ var _services_filesystem_filesystem_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/filesystem/filesystem.service */ "w5O/");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__["TranslateHttpLoader"](http);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        _services_api_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"],
        _services_persistence_persistence_service__WEBPACK_IMPORTED_MODULE_10__["PersistenceService"],
        _services_filesystem_filesystem_service__WEBPACK_IMPORTED_MODULE_12__["FilesystemService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _modules_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _modules_user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
            _modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_7__["CmsModule"],
            _modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_9__["ViewerModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forRoot({
                defaultLanguage: 'en',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _modules_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _modules_user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
        _modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_7__["CmsModule"],
        _modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_9__["ViewerModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]] }); })();


/***/ }),

/***/ "b2vY":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/user/components/widgets/password-checker/password-checker.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PasswordCheckerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordCheckerComponent", function() { return PasswordCheckerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function PasswordCheckerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.passwordError));
} }
function PasswordCheckerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r1.verifyPasswordError));
} }
class PasswordCheckerComponent {
    constructor() {
        this.passwordChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onPasswordFocusOut() {
        if (this.passwordTxtBox && this.passwordTxtBox.length < 8) {
            this.passwordError = "auth.widgets.password-checker.error.length";
        }
        else {
            this.passwordError = null;
        }
        this.emit();
    }
    onVerifyPasswordChange() {
        if (this.passwordTxtBox && this.verifyPasswordTxtBox && this.passwordTxtBox != this.verifyPasswordTxtBox) {
            this.verifyPasswordError = "auth.widgets.password-checker.error.noMatch";
        }
        else {
            this.verifyPasswordError = null;
        }
        this.emit();
    }
    emit() {
        if (this.passwordTxtBox && this.verifyPasswordTxtBox && !this.passwordError && !this.verifyPasswordError) {
            this.passwordChange.emit(this.passwordTxtBox);
        }
        else {
            this.passwordChange.emit(null);
        }
        ;
    }
}
PasswordCheckerComponent.ɵfac = function PasswordCheckerComponent_Factory(t) { return new (t || PasswordCheckerComponent)(); };
PasswordCheckerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordCheckerComponent, selectors: [["matsukaze-password-checker"]], inputs: { password: "password" }, outputs: { passwordChange: "passwordChange" }, decls: 10, vars: 10, consts: [[1, "form-group"], ["type", "password", "name", "password", "id", "password", "autocomplete", "new-password", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange", "focusout"], [4, "ngIf"], ["type", "password", "name", "verifyPassword", "id", "verifyPassword", "autocomplete", "new-password", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"]], template: function PasswordCheckerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PasswordCheckerComponent_Template_input_ngModelChange_1_listener($event) { return ctx.passwordTxtBox = $event; })("focusout", function PasswordCheckerComponent_Template_input_focusout_1_listener() { return ctx.onPasswordFocusOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PasswordCheckerComponent_div_4_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PasswordCheckerComponent_Template_input_ngModelChange_6_listener($event) { return ctx.verifyPasswordTxtBox = $event; })("ngModelChange", function PasswordCheckerComponent_Template_input_ngModelChange_6_listener() { return ctx.onVerifyPasswordChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PasswordCheckerComponent_div_9_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, "auth.widgets.password-checker.labels.password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.passwordTxtBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "auth.widgets.password-checker.labels.confirmPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.verifyPasswordTxtBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verifyPasswordError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC1jaGVja2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "cm+c":
/*!****************************************************************!*\
  !*** ./src/app/modules/user/services/user/user.endpoints.json ***!
  \****************************************************************/
/*! exports provided: root, actions, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"root\":{\"dev\":\"http://localhost:3000/api/0.1/\",\"test\":\"https://test.aethon.sg/api/0.1\",\"prod\":\"https://www.digenes.com/api/0.1\"},\"actions\":{\"auth\":{\"login\":{\"endpoint\":\"auth/login\",\"method\":\"POST\"},\"logout\":{\"endpoint\":\"auth/logout\",\"method\":\"POST\"},\"register\":{\"endpoint\":\"user/register\",\"method\":\"POST\"},\"requestReset\":{\"endpoint\":\"user/requestReset\",\"method\":\"POST\"},\"reset\":{\"endpoint\":\"user/reset\",\"method\":\"POST\"},\"confirm\":{\"endpoint\":\"user/confirm\",\"method\":\"GET\"}}}}");

/***/ }),

/***/ "fki3":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/user/components/flowStates/create/create.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/model */ "tUKl");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user/user.service */ "rPFO");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _widgets_username_username_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/username/username.component */ "MTFM");
/* harmony import */ var _widgets_password_checker_password_checker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/password-checker/password-checker.component */ "b2vY");









class CreateComponent {
    constructor(authService, spinner, translateService) {
        this.authService = authService;
        this.spinner = spinner;
        this.translateService = translateService;
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.error = null;
    }
    ngOnInit() { }
    onCreate() {
        if (this.email && this.password) {
            const params = {
                email: this.email,
                password: this.password,
                lang: this.translateService.currentLang
            };
            this.spinner.show();
            this.authService.register$(params).subscribe(obj => {
                if (obj.matsukazeObjectType == src_app_model_model__WEBPACK_IMPORTED_MODULE_1__["MatsukazeObjectTypes"].error) {
                    this.error = obj.type;
                }
                else {
                    this.state.emit({ flow: 'register', state: 'checkEmail' });
                }
                this.spinner.hide();
            });
        }
    }
    validate() {
        return null;
    }
    onChangeState(state) { this.state.emit(state); }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["matsukaze-create"]], outputs: { state: "state" }, decls: 16, vars: 11, consts: [[1, "form-group"], [3, "email", "emailChange"], [3, "password", "passwordChange"], ["type", "submit", 1, "btn", "btn-warning", 2, "width", "100%", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "100%", 3, "click"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "matsukaze-username", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emailChange", function CreateComponent_Template_matsukaze_username_emailChange_6_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "matsukaze-password-checker", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("passwordChange", function CreateComponent_Template_matsukaze_password_checker_passwordChange_7_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_9_listener() { return ctx.onCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_13_listener() { return ctx.onChangeState({ flow: "login", state: "form" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "auth.flows.register.form.labels.create"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("email", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("password", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "auth.flows.register.form.labels.submit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, "auth.flows.register.form.labels.alreadyHaveAccount"));
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _widgets_username_username_component__WEBPACK_IMPORTED_MODULE_6__["UsernameComponent"], _widgets_password_checker_password_checker_component__WEBPACK_IMPORTED_MODULE_7__["PasswordCheckerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "krJI":
/*!****************************************************************!*\
  !*** ./src/app/modules/user/components/flow/flow.component.ts ***!
  \****************************************************************/
/*! exports provided: FlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowComponent", function() { return FlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _flowStates_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flowStates/login/login.component */ "NEqr");
/* harmony import */ var _flowStates_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flowStates/forgot/forgot.component */ "Gjkl");
/* harmony import */ var _flowStates_reset_reset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../flowStates/reset/reset.component */ "EhkM");
/* harmony import */ var _flowStates_create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../flowStates/create/create.component */ "fki3");
/* harmony import */ var _flowStates_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../flowStates/confirm/confirm.component */ "JoiE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function FlowComponent_div_0_matsukaze_login_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "matsukaze-login", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("state", function FlowComponent_div_0_matsukaze_login_1_Template_matsukaze_login_state_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onChangeState($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FlowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FlowComponent_div_0_matsukaze_login_1_Template, 1, 0, "matsukaze-login", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.state == "form");
} }
function FlowComponent_div_1_matsukaze_forgot_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "matsukaze-forgot", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("state", function FlowComponent_div_1_matsukaze_forgot_1_Template_matsukaze_forgot_state_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onChangeState($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FlowComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "auth.flows.reset.checkEmail.labels.checkEmail"));
} }
function FlowComponent_div_1_matsukaze_reset_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "matsukaze-reset", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("state", function FlowComponent_div_1_matsukaze_reset_3_Template_matsukaze_reset_state_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onChangeState($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FlowComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlowComponent_div_1_div_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.onChangeState({ flow: "login", state: "form" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "auth.flows.reset.confirm.labels.resetComplete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "auth.flows.register.confirm.labels.login"));
} }
function FlowComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FlowComponent_div_1_matsukaze_forgot_1_Template, 1, 0, "matsukaze-forgot", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FlowComponent_div_1_div_2_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FlowComponent_div_1_matsukaze_reset_3_Template, 1, 0, "matsukaze-reset", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FlowComponent_div_1_div_4_Template, 8, 6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.state == "forgot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.state == "checkEmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.state == "reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.state == "confirm");
} }
function FlowComponent_div_2_matsukaze_create_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "matsukaze-create", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("state", function FlowComponent_div_2_matsukaze_create_1_Template_matsukaze_create_state_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.onChangeState($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FlowComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "auth.flows.register.checkEmail.labels.checkEmail"));
} }
function FlowComponent_div_2_matsukaze_confirm_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "matsukaze-confirm", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("state", function FlowComponent_div_2_matsukaze_confirm_3_Template_matsukaze_confirm_state_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.onChangeState($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FlowComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FlowComponent_div_2_matsukaze_create_1_Template, 1, 0, "matsukaze-create", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FlowComponent_div_2_div_2_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FlowComponent_div_2_matsukaze_confirm_3_Template, 1, 0, "matsukaze-confirm", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.state == "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.state == "checkEmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.state == "confirm");
} }
class FlowComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this._states = {
            "00000000": { flow: "login", state: "form" },
            "00000100": { flow: "register", state: "form" },
            "00000110": { flow: "register", state: "checkEmail" },
            "00000111": { flow: "register", state: "confirm" },
            "00100000": { flow: "reset", state: "forgot" },
            "00110000": { flow: "reset", state: "checkEmail" },
            "00111000": { flow: "reset", state: "reset" },
            "00111100": { flow: "reset", state: "confirm" }
        };
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const state = this._states[params === null || params === void 0 ? void 0 : params.state];
            this.lang = params === null || params === void 0 ? void 0 : params.lang;
            if (state) {
                this.flow = state.flow;
                this.state = state.state;
            }
            else {
                this.setState({ flow: 'login', state: 'form' });
            }
        });
    }
    onChangeState($event) {
        this.setState($event);
    }
    setState(params) {
        for (let stateId in this._states) {
            if (this._states[stateId].flow == (params === null || params === void 0 ? void 0 : params.flow) && this._states[stateId].state == params.state) {
                this.router.navigate(['auth'], {
                    queryParams: { state: stateId, lang: this.lang }
                });
                break;
            }
        }
    }
}
FlowComponent.ɵfac = function FlowComponent_Factory(t) { return new (t || FlowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FlowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlowComponent, selectors: [["matsukaze-flow"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "state", 4, "ngIf"], [3, "state"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], ["type", "button", 1, "btn", "btn-warning", 2, "width", "100%", 3, "click"]], template: function FlowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FlowComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FlowComponent_div_1_Template, 5, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FlowComponent_div_2_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flow == "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flow == "reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flow == "register");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _flowStates_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _flowStates_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_4__["ForgotComponent"], _flowStates_reset_reset_component__WEBPACK_IMPORTED_MODULE_5__["ResetComponent"], _flowStates_create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"], _flowStates_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbG93LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "npct":
/*!******************************************************!*\
  !*** ./src/app/modules/routing/guards/auth.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/services/user/user.service */ "rPFO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const url = state.url;
        return this.authService.getUser$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(user => {
            var _a;
            console.log(route.queryParams);
            if (user) {
                return true;
            }
            else {
                this.authService.setRedirectUrl(url);
                return this.router.createUrlTree(['auth'], { queryParams: { lang: (_a = route.queryParams) === null || _a === void 0 ? void 0 : _a.lang } });
            }
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oZWX":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/model */ "tUKl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ApiService {
    constructor(http) {
        this.http = http;
        this._token = null;
    }
    initialise(root, verbose) {
        this._root = root;
        this._verbose = verbose;
        this._token = null;
        this._headers = null;
        return true;
    }
    isAuthenticated() { if (this._token)
        return true;
    else
        return false; }
    logout() { return this.setToken(null); }
    request$(action, data, blob) {
        var req;
        const url = this._root + action.endpoint;
        if (this._verbose) {
            console.log("*** HTTP request starting" +
                "\nheaders:" + JSON.stringify(this._headers) +
                "\ntype:" + action.method +
                "\nurl:" + url +
                "\nData:" + JSON.stringify(data));
        }
        switch (action.method) {
            case "GET": {
                if (blob)
                    req = this.http.get(url, { params: data, headers: this._headers, responseType: 'blob' });
                else
                    req = this.http.get(url, { params: data, headers: this._headers });
                break;
            }
            case "POST": {
                if (this._headers == null)
                    req = this.http.post(url, data);
                else
                    req = this.http.post(url, data, { headers: this._headers });
                break;
            }
        }
        return req.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            if (this._verbose) {
                console.log("*** HTTP error" +
                    "\nStatus:" + err.status +
                    "\nurl:" + url);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => {
            if (this._verbose && response) {
                console.log("*** HTTP response received" +
                    "\nurl:" + url +
                    "\nResponse:" + JSON.stringify(response));
            }
            return (response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => {
            return this._dtoFactory(response === null || response === void 0 ? void 0 : response.matsukazeObjectType, response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
    }
    setToken(token) {
        this._token = token;
        this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', "Bearer " + this._token);
        return true;
    }
    _dtoFactory(dtoType, json) {
        var obj = null;
        switch (dtoType) {
            case (src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["MatsukazeObjectTypes"].error): {
                obj = new src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["MatsukazeError"](json);
                break;
            }
            case (src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["MatsukazeObjectTypes"].user): {
                obj = new src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["User"](json);
                break;
            }
            case (src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["MatsukazeObjectTypes"].story): {
                obj = new src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["Story"](json);
                break;
            }
            case (src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["MatsukazeObjectTypes"].act): {
                obj = new src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["Act"](json);
                break;
            }
            case (src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["MatsukazeObjectTypes"].sceneSequence): {
                obj = new src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["SceneSequence"](json);
                break;
            }
            case (src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["MatsukazeObjectTypes"].scene): {
                obj = new src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["Scene"](json);
                break;
            }
            case (src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["MatsukazeObjectTypes"].beat): {
                obj = new src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["Beat"](json);
                break;
            }
            case (src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["MatsukazeObjectTypes"].momentSequence): {
                obj = new src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["MomentSequence"](json);
                break;
            }
            case (src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["MatsukazeObjectTypes"].moment): {
                obj = new src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["Moment"](json);
                break;
            }
            case (src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["MatsukazeObjectTypes"].dialogueLine): {
                obj = new src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["DialogueLine"](json);
                obj.i18nBundle = new src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["I18nBundle"](json.i18nBundle);
                for (let element in json.i18nBundle.i18nBundleElements) {
                    obj.i18nBundle[element] = new src_app_model_model__WEBPACK_IMPORTED_MODULE_3__["I18nBundleElement"](json.i18nBundle.i18nBundleElements[element]);
                }
                obj.children$ = null;
                obj.children = [];
                break;
            }
        }
        return obj;
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qfWE":
/*!*************************************************************!*\
  !*** ./src/app/services/persistence/persistence.service.ts ***!
  \*************************************************************/
/*! exports provided: PersistenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistenceService", function() { return PersistenceService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _persistence_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persistence.model */ "r7oM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _filesystem_filesystem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filesystem/filesystem.service */ "w5O/");




class PersistenceService {
    constructor(filesystemService) {
        this.filesystemService = filesystemService;
        this._verbose = true;
        this._storage = window.localStorage;
    }
    initialise(verbose) {
        this._verbose = verbose;
        return true;
    }
    clear$() {
        this._storage.clear();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
    }
    store$(endpoint, obj, blob) {
        let cacheable = {
            location: null,
            key: this._endpointToString(endpoint),
            size: 0,
            progress: 0,
            object: obj
        };
        if (!blob) {
            cacheable.location = _persistence_model__WEBPACK_IMPORTED_MODULE_1__["CacheableLocation"].CACHED;
            cacheable.progress = 100;
            this._storage.setItem(cacheable.key, JSON.stringify(cacheable));
            if (this._verbose) {
                console.log("*** Object storage completed" +
                    "\nKey:" + cacheable.key +
                    "\nData:" + JSON.stringify(cacheable));
            }
        }
        else {
            // writePromise = new Promise<Cacheable<Asset>>((resolve, reject) => {
            //   let path: string, filename: string;
            //   if(this.browserTest) path = "../../assets/imgs/test/"; else path = this.path;
            //   filename = cacheable.object.id + ".jpg";
            //   cacheable.location = CacheableLocation.CACHED;
            //   cacheable.size = blob.size;
            //   cacheable.progress = 100;
            //   cacheable.object.uri = path + filename;
            //   this.store(cacheable).then(result => {
            //     if(this.browserTest) {
            //       if(this.verbose) {
            //         console.log("*** File storage completed: " +
            //                     "\nFilename:" + filename +
            //                     "\n(No cordova, mock write)");
            //       }
            //       resolve(cacheable);
            //     } else {
            //       this.filesystemService.writeFile(path, filename, blob, {replace:true}).then(result => {
            //         if(this.verbose) {
            //           console.log("*** File storage completed: " + cacheable.object.uri);
            //         }
            //         resolve(cacheable);
            //       })
            //     }
            //   }).catch(error => {
            //     reject(new Error("Could not persist file: " + filename));
            //   });
            // });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(cacheable);
    }
    retrieve$(endpoint, suppressLog) {
        let cacheable = this._storage.getItem(this._endpointToString(endpoint));
        if (this._verbose && !suppressLog) {
            console.log("*** Object retrieval completed" +
                "\nKey:" + this._endpointToString(endpoint) +
                "\nData:" + JSON.stringify(cacheable));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(JSON.parse(cacheable));
    }
    //
    // storeAsset(cacheable: Cacheable<Asset>, data: Blob): Promise<Cacheable<Asset>> {
    //   let writePromise = new Promise<Cacheable<Asset>>((resolve, reject) => {
    //     let path, filename: string;
    //     if(this.browserTest) path = "../../assets/imgs/test/"; else path = this.path;
    //     filename = cacheable.object.id + ".jpg";
    //     cacheable.location = CacheableLocation.CACHED;
    //     cacheable.size = data.size;
    //     cacheable.progress = 100;
    //     cacheable.object.uri = path + filename;
    //     this.store(cacheable).then(result => {
    //       if(this.browserTest) {
    //         if(this.verbose) {
    //           console.log("*** File storage completed: " +
    //                       "\nFilename:" + filename +
    //                       "\n(No cordova, mock write)");
    //         }
    //         resolve(cacheable);
    //       } else {
    //         this.filesystemService.writeFile(path, filename, data, {replace:true}).then(result => {
    //           if(this.verbose) {
    //             console.log("*** File storage completed: " + cacheable.object.uri);
    //           }
    //           resolve(cacheable);
    //         })
    //       }
    //     }).catch(error => {
    //       reject(new Error("Could not persist file: " + filename));
    //     });
    //   });
    //   return writePromise;
    // }
    _endpointToString(endpoint) {
        return endpoint.method + " " + endpoint.endpoint;
    }
}
PersistenceService.ɵfac = function PersistenceService_Factory(t) { return new (t || PersistenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_filesystem_filesystem_service__WEBPACK_IMPORTED_MODULE_3__["FilesystemService"])); };
PersistenceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PersistenceService, factory: PersistenceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "r7oM":
/*!***********************************************************!*\
  !*** ./src/app/services/persistence/persistence.model.ts ***!
  \***********************************************************/
/*! exports provided: CacheableLocation, FetchStrategy, ObjectType, AssetPackage, Comic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheableLocation", function() { return CacheableLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchStrategy", function() { return FetchStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectType", function() { return ObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetPackage", function() { return AssetPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comic", function() { return Comic; });
var CacheableLocation;
(function (CacheableLocation) {
    CacheableLocation["SERVER"] = "SERVER";
    CacheableLocation["FETCHING"] = "FETCHING";
    CacheableLocation["CACHED"] = "CACHED";
})(CacheableLocation || (CacheableLocation = {}));
var FetchStrategy;
(function (FetchStrategy) {
    FetchStrategy[FetchStrategy["EAGER"] = 1] = "EAGER";
    FetchStrategy[FetchStrategy["LAZY"] = 2] = "LAZY";
    FetchStrategy[FetchStrategy["HESITANT"] = 3] = "HESITANT";
    FetchStrategy[FetchStrategy["SNEAKY"] = 4] = "SNEAKY";
})(FetchStrategy || (FetchStrategy = {}));
var ObjectType;
(function (ObjectType) {
    ObjectType["NULL"] = "Null";
    ObjectType["CONTENT"] = "Content";
    ObjectType["ASSETPACKAGE"] = "AssetPackage";
    ObjectType["ASSET"] = "Asset";
})(ObjectType || (ObjectType = {}));
class AssetPackage {
}
class Comic extends AssetPackage {
}


/***/ }),

/***/ "rALe":
/*!*******************************************************!*\
  !*** ./src/app/modules/routing/app-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cms_components_error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cms/components/error/error.component */ "vNSa");
/* harmony import */ var _cms_components_root_root_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cms/components/root/root.component */ "Upv/");
/* harmony import */ var _cms_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cms/components/auth/auth.component */ "Plkk");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "npct");
/* harmony import */ var _user_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/components/home/home.component */ "3y2Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _cms_components_root_root_component__WEBPACK_IMPORTED_MODULE_2__["RootComponent"] },
    { path: 'auth', component: _cms_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] },
    { path: 'home', component: _user_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: '**', component: _cms_components_error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "rPFO":
/*!************************************************************!*\
  !*** ./src/app/modules/user/services/user/user.service.ts ***!
  \************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/model */ "tUKl");
/* harmony import */ var _user_endpoints_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.endpoints.json */ "cm+c");
var _user_endpoints_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./user.endpoints.json */ "cm+c", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api/api.service */ "oZWX");
/* harmony import */ var src_app_services_persistence_persistence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/persistence/persistence.service */ "qfWE");







class UserService {
    constructor(apiService, persistenceService) {
        this.apiService = apiService;
        this.persistenceService = persistenceService;
        this._user = null;
        this._verbose = true;
        this._env = "dev";
        this._endpoints = _user_endpoints_json__WEBPACK_IMPORTED_MODULE_3__;
        let root = this._endpoints.root[this._env];
        this.apiService.initialise(root, this._verbose);
        this.persistenceService.initialise(this._verbose);
        this.persistenceService.retrieve$(this._endpoints.actions.auth.login).subscribe(cacheable => {
            if (cacheable)
                this._setUser(cacheable.object);
        });
    }
    login$(email, password) {
        const endpoint = this._endpoints.actions.auth.login;
        return this.apiService.request$(endpoint, { email: email, password: password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(matsukazeObject => {
            if ((matsukazeObject === null || matsukazeObject === void 0 ? void 0 : matsukazeObject.matsukazeObjectType) === src_app_model_model__WEBPACK_IMPORTED_MODULE_2__["MatsukazeObjectTypes"].user)
                this._setUser(matsukazeObject);
            return matsukazeObject;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => { if (this._user)
            this.persistenceService.store$(endpoint, this._user).subscribe(); }));
    }
    confirm$(params) {
        if ((params === null || params === void 0 ? void 0 : params.email) && (params === null || params === void 0 ? void 0 : params.activationCode)) {
            return this.apiService.request$(this._endpoints.actions.auth.confirm, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(obj => {
                if (obj.matsukazeObjectType === src_app_model_model__WEBPACK_IMPORTED_MODULE_2__["MatsukazeObjectTypes"].user) {
                    return this.loginFromConfirm$(obj);
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(obj);
                }
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    loginFromConfirm$(user) {
        const endpoint = this._endpoints.actions.auth.login;
        this._setUser(user);
        return this.persistenceService.store$(endpoint, this._user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => { return this._user; }));
    }
    register$(params) {
        if ((params === null || params === void 0 ? void 0 : params.email) && (params === null || params === void 0 ? void 0 : params.password)) {
            return this.apiService.request$(this._endpoints.actions.auth.register, { email: params.email, password: params.password, lang: params.lang });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    getUser$() {
        if (this._user) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._user);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }
        ;
    }
    requestPasswordReset$(email, lang) {
        if (email)
            return this.apiService.request$(this._endpoints.actions.auth.requestReset, { email: email, lang: lang });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    resetPassword$(email, password, code) {
        if (email && password && code) {
            return this.apiService.request$(this._endpoints.actions.auth.reset, { email: email, password: password, code: code });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    logout$() {
        return this.persistenceService.clear$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(success => {
            // should log out at the API?
            if (success)
                return this.apiService.logout();
            else
                return false;
        }));
    }
    setRedirectUrl(url) { this._redirectUrl = url; }
    getRedirectUrl() { return this._redirectUrl; }
    _setUser(json) {
        this._user = new src_app_model_model__WEBPACK_IMPORTED_MODULE_2__["User"](json);
        this.apiService.setToken(this._user.token);
        return this._user;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_persistence_persistence_service__WEBPACK_IMPORTED_MODULE_6__["PersistenceService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tUKl":
/*!********************************!*\
  !*** ./src/app/model/model.ts ***!
  \********************************/
/*! exports provided: PagePosition, MatsukazeObjectTypes, LetteringTypes, MatsukazeObject, Project, User, Role, Language, I18nBundle, I18nBundleElement, Publication, MatsukazeError, MatsukazeStoryStructureElementTypes, StoryStructureElement, Story, Act, SceneSequence, Scene, Beat, MomentSequence, Moment, DialogueLine, Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePosition", function() { return PagePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatsukazeObjectTypes", function() { return MatsukazeObjectTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetteringTypes", function() { return LetteringTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatsukazeObject", function() { return MatsukazeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nBundle", function() { return I18nBundle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nBundleElement", function() { return I18nBundleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Publication", function() { return Publication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatsukazeError", function() { return MatsukazeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatsukazeStoryStructureElementTypes", function() { return MatsukazeStoryStructureElementTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryStructureElement", function() { return StoryStructureElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Story", function() { return Story; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Act", function() { return Act; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneSequence", function() { return SceneSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Beat", function() { return Beat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentSequence", function() { return MomentSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moment", function() { return Moment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogueLine", function() { return DialogueLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var PagePosition;
(function (PagePosition) {
    PagePosition["left"] = "LEFT";
    PagePosition["right"] = "RIGHT";
})(PagePosition || (PagePosition = {}));
var MatsukazeObjectTypes;
(function (MatsukazeObjectTypes) {
    MatsukazeObjectTypes["story"] = "Story";
    MatsukazeObjectTypes["act"] = "Act";
    MatsukazeObjectTypes["sceneSequence"] = "SceneSequence";
    MatsukazeObjectTypes["scene"] = "Scene";
    MatsukazeObjectTypes["beat"] = "Beat";
    MatsukazeObjectTypes["momentSequence"] = "MomentSequence";
    MatsukazeObjectTypes["moment"] = "Moment";
    MatsukazeObjectTypes["dialogueLine"] = "DialogueLine";
    MatsukazeObjectTypes["publication"] = "Publication";
    MatsukazeObjectTypes["page"] = "Page";
    MatsukazeObjectTypes["i18nBundleElement"] = "I18nBundleElement";
    MatsukazeObjectTypes["i18nBundle"] = "I18nBundle";
    MatsukazeObjectTypes["language"] = "Language";
    MatsukazeObjectTypes["role"] = "Role";
    MatsukazeObjectTypes["user"] = "User";
    MatsukazeObjectTypes["project"] = "Project";
    MatsukazeObjectTypes["error"] = "Error";
})(MatsukazeObjectTypes || (MatsukazeObjectTypes = {}));
var LetteringTypes;
(function (LetteringTypes) {
    LetteringTypes["caption"] = "CAPTION";
    LetteringTypes["speech"] = "SPEAKING";
    LetteringTypes["whisper"] = "WHISPERING";
    LetteringTypes["thought"] = "THINKING";
    LetteringTypes["shout"] = "SHOUTING";
    LetteringTypes["continued"] = "...CONTINUED";
    LetteringTypes["soundEffect"] = "SOUND EFFECTS";
    LetteringTypes["music"] = "MUSIC";
})(LetteringTypes || (LetteringTypes = {}));
// MatsukazeObject DEFINITION---------------------------------------------------------------
class MatsukazeObject {
    constructor(params) {
        this.id = null;
        this.id = params.id;
        this.matsukazeObjectType = null;
    }
    toPOJO() {
        var json = {};
        for (let key in this) {
            if (typeof this[key] != "object")
                json[key] = this[key];
        }
        return json;
    }
    getType() { return null; }
}
class Project extends MatsukazeObject {
    constructor(params) { super(params); }
    getType() { return MatsukazeObjectTypes.project; }
}
class User extends MatsukazeObject {
    constructor(params) {
        super(params);
        this.roles = [];
        this.email = params === null || params === void 0 ? void 0 : params.email;
        this.token = params === null || params === void 0 ? void 0 : params.token;
        for (let role of params === null || params === void 0 ? void 0 : params.roles) {
            this.roles.push(new Role(role));
        }
        this.matsukazeObjectType = MatsukazeObjectTypes.user;
    }
    getType() { return MatsukazeObjectTypes.user; }
}
class Role extends MatsukazeObject {
    constructor(params) {
        super(params);
        this.name = params === null || params === void 0 ? void 0 : params.name;
        this.matsukazeObjectType = MatsukazeObjectTypes.role;
    }
    getType() { return MatsukazeObjectTypes.role; }
}
class Language extends MatsukazeObject {
    constructor(params) { super(params); }
    getType() { return MatsukazeObjectTypes.language; }
}
class I18nBundle extends MatsukazeObject {
    constructor(params) {
        super(params);
        this.i18nBundleElements = {};
        this.matsukazeObjectType = MatsukazeObjectTypes.i18nBundle;
        this.id = params.id;
        for (let key in params.i18nBundleElements) {
            this.i18nBundleElements[String(key)] = new I18nBundleElement(params.i18nBundleElements[key]);
        }
    }
    getText(language) {
        if (this === null || this === void 0 ? void 0 : this.i18nBundleElements[language])
            return this.i18nBundleElements[language].text;
        else
            return null;
    }
}
class I18nBundleElement extends MatsukazeObject {
    constructor(params) {
        super(params);
        this.matsukazeObjectType = MatsukazeObjectTypes.i18nBundleElement;
        this.id = params.id;
        this.language = params.language;
        this.text = params.text;
    }
}
class Publication extends MatsukazeObject {
    constructor(params) {
        super(params);
        this.pages = [];
    }
}
class MatsukazeError extends MatsukazeObject {
    constructor(params) {
        super(params);
        this.matsukazeObjectType = MatsukazeObjectTypes.error;
        this.id = params.id;
        this.type = params.type;
        this.data = params === null || params === void 0 ? void 0 : params.data;
    }
}
let MatsukazeStoryStructureElementTypes = {
    [MatsukazeObjectTypes.story]: { label: "Story", hierarchy: 1 },
    [MatsukazeObjectTypes.act]: { label: "Act", hierarchy: 2 },
    [MatsukazeObjectTypes.sceneSequence]: { label: "Scene sequence", hierarchy: 3 },
    [MatsukazeObjectTypes.scene]: { label: "Scene", hierarchy: 4 },
    [MatsukazeObjectTypes.beat]: { label: "Beat", hierarchy: 5 },
    [MatsukazeObjectTypes.momentSequence]: { label: "Moment sequence", hierarchy: 6 },
    [MatsukazeObjectTypes.moment]: { label: "Moment", hierarchy: 7 },
    [MatsukazeObjectTypes.dialogueLine]: { label: "Dialogue line", hierarchy: 8 }
};
class StoryStructureElement extends MatsukazeObject {
    constructor(params) {
        super(params);
        this.children = [];
        this.projectId = params.projectId;
        this.parentId = params.parentId;
        this.position = params.position;
        this.children = [];
    }
    getNavLabel() { return null; }
}
class Story extends StoryStructureElement {
    constructor(params) {
        super(params);
        this.matsukazeObjectType = MatsukazeObjectTypes.story;
        this.title = params.title;
        this.summary = params.summary;
        this.notes = params.note;
        if (params === null || params === void 0 ? void 0 : params.children) {
            for (let child of params === null || params === void 0 ? void 0 : params.children) {
                this.children.push(new Act(child));
            }
        }
    }
    getNavLabel() { return "Story"; }
    toParams() {
        let params = {};
        params.matsukazeObjectType = this.matsukazeObjectType;
        params.id = this.id;
        params.title = this.title;
        params.summary = this.summary;
        params.notes = this.notes;
        return params;
    }
}
class Act extends StoryStructureElement {
    constructor(params) {
        super(params);
        this.matsukazeObjectType = MatsukazeObjectTypes.act;
        this.title = params.title;
        this.summary = params.summary;
        this.notes = params.notes;
        if (params === null || params === void 0 ? void 0 : params.children) {
            for (let child of params === null || params === void 0 ? void 0 : params.children) {
                this.children.push(new SceneSequence(child));
            }
        }
    }
    getNavLabel() { return "Act " + this.position; }
    toParams() {
        let params = {};
        params.matsukazeObjectType = this.matsukazeObjectType;
        params.id = this.id;
        params.title = this.title;
        params.summary = this.summary;
        params.notes = this.notes;
        return params;
    }
}
class SceneSequence extends StoryStructureElement {
    constructor(params) {
        super(params);
        this.matsukazeObjectType = MatsukazeObjectTypes.sceneSequence;
        this.title = params.title;
        this.summary = params.summary;
        this.notes = params.notes;
        if (params === null || params === void 0 ? void 0 : params.children) {
            for (let child of params === null || params === void 0 ? void 0 : params.children) {
                this.children.push(new Scene(child));
            }
        }
    }
    getNavLabel() { return "Scene sequence " + this.position; }
    toParams() {
        let params = {};
        params.matsukazeObjectType = this.matsukazeObjectType;
        params.id = this.id;
        params.title = this.title;
        params.summary = this.summary;
        params.notes = this.notes;
        return params;
    }
}
class Scene extends StoryStructureElement {
    constructor(params) {
        super(params);
        this.matsukazeObjectType = MatsukazeObjectTypes.scene;
        this.summary = params.summary;
        this.notes = params.notes;
        if (params === null || params === void 0 ? void 0 : params.children) {
            for (let child of params === null || params === void 0 ? void 0 : params.children) {
                this.children.push(new Beat(child));
            }
        }
    }
    getNavLabel() { return "Scene " + this.position; }
    toParams() {
        let params = {};
        params.matsukazeObjectType = this.matsukazeObjectType;
        params.id = this.id;
        params.summary = this.summary;
        params.notes = this.notes;
        return params;
    }
}
class Beat extends StoryStructureElement {
    constructor(params) {
        super(params);
        this.matsukazeObjectType = MatsukazeObjectTypes.beat;
        this.summary = params.summary;
        this.notes = params.notes;
        if (params === null || params === void 0 ? void 0 : params.children) {
            for (let child of params === null || params === void 0 ? void 0 : params.children) {
                this.children.push(new MomentSequence(child));
            }
        }
    }
    getNavLabel() { return "Beat " + this.position; }
    toParams() {
        let params = {};
        params.matsukazeObjectType = this.matsukazeObjectType;
        params.id = this.id;
        params.summary = this.summary;
        params.notes = this.notes;
        return params;
    }
}
class MomentSequence extends StoryStructureElement {
    constructor(params) {
        super(params);
        this.matsukazeObjectType = MatsukazeObjectTypes.momentSequence;
        this.summary = params.summary;
        this.notes = params.notes;
        if (params === null || params === void 0 ? void 0 : params.children) {
            for (let child of params === null || params === void 0 ? void 0 : params.children) {
                this.children.push(new Moment(child));
            }
        }
    }
    getNavLabel() { return "Moment seqence " + this.position; }
    toParams() {
        let params = {};
        params.matsukazeObjectType = this.matsukazeObjectType;
        params.id = this.id;
        params.summary = this.summary;
        params.notes = this.notes;
        return params;
    }
}
class Moment extends StoryStructureElement {
    constructor(params) {
        super(params);
        this.matsukazeObjectType = MatsukazeObjectTypes.moment;
        this.action = params.action;
        this.notes = params.notes;
        if (params === null || params === void 0 ? void 0 : params.children) {
            for (let child of params === null || params === void 0 ? void 0 : params.children) {
                this.children.push(new DialogueLine(child));
            }
        }
    }
    getNavLabel() { return "Moment " + this.position; }
    toParams() {
        let params = {};
        params.matsukazeObjectType = this.matsukazeObjectType;
        params.id = this.id;
        params.action = this.action;
        params.notes = this.notes;
        return params;
    }
}
class DialogueLine extends StoryStructureElement {
    constructor(params) {
        super(params);
        this.matsukazeObjectType = MatsukazeObjectTypes.dialogueLine;
        this.type = params.type;
        this.source = params.source;
        if (params.i18nBundle)
            this.i18nBundle = new I18nBundle(params.i18nBundle);
    }
    getText(language) {
        if (this.i18nBundle)
            return this.i18nBundle.getText(language);
        else
            return null;
    }
    getNavLabel() { return "Dialogue line " + this.position; }
    toParams() {
        let params = {};
        params.matsukazeObjectType = this.matsukazeObjectType;
        params.id = this.id;
        params.type = this.type;
        params.i18nBundle = this.i18nBundle;
        return params;
    }
}
// PUBLICATION ELEMENTS ----------------------------------------------------
class Page extends MatsukazeObject {
    constructor(params) {
        super(params);
        this.type = MatsukazeObjectTypes.page;
        this.beats = [];
    }
}


/***/ }),

/***/ "vNSa":
/*!*****************************************************************!*\
  !*** ./src/app/modules/cms/components/error/error.component.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "2a1E");


class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["matsukaze-error"]], decls: 4, vars: 0, consts: [[1, "error"], [1, "quote"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "matsukaze-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Error 404 - not found :-(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: [".error[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Vycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImVycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ "w5O/":
/*!***********************************************************!*\
  !*** ./src/app/services/filesystem/filesystem.service.ts ***!
  \***********************************************************/
/*! exports provided: FilesystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemService", function() { return FilesystemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilesystemService {
    constructor() {
        this._storage = window.localStorage;
    }
    getPath() { return this._filesystemPath; }
    initialise() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (true);
        });
    }
    writeFile(path, filename, blob, params) {
        return new Promise((resolve) => { resolve(true); });
    }
}
FilesystemService.ɵfac = function FilesystemService_Factory(t) { return new (t || FilesystemService)(); };
FilesystemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FilesystemService, factory: FilesystemService.ɵfac, providedIn: 'root' });


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