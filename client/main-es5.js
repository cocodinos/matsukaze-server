(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/cocodinos/Documents/Work/11-Aethon/00-Holdings/01-Projects/09-Matsukaze/01-Software/matsukaze/matsukaze-client/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1RlG":
    /*!****************************************!*\
      !*** ./src/app/services/api.spec.json ***!
      \****************************************/

    /*! exports provided: root, methods, actions, default */

    /***/
    function RlG(module) {
      module.exports = JSON.parse("{\"root\":{\"dev\":\"http://localhost:3000/api/0.1/\",\"test\":\"test\",\"prod\":\"test\"},\"methods\":{\"get\":\"GET\",\"post\":\"POST\"},\"actions\":{\"auth\":{\"login\":{\"endpoint\":\"auth/login\",\"method\":\"POST\"},\"logout\":{\"endpoint\":\"auth/logout\",\"method\":\"POST\"},\"register\":{\"endpoint\":\"auth/register\",\"method\":\"POST\"},\"test\":{\"endpoint\":\"auth/test\",\"method\":\"GET\"}},\"project\":{\"getProject\":{\"endpoint\":\"project\",\"method\":\"GET\"}},\"story\":{\"getStory\":{\"endpoint\":\"story\",\"method\":\"GET\"}}}}");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony import */


      var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone-error */
      "+Vou");
      /* harmony import */


      var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        server: {
          assets: {
            root: "localhost:3000/public/client/"
          },
          api: {
            root: "localhost:3000/api/0.1"
          }
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // Included with Angular CLI.

      /***/
    },

    /***/
    "DGLH":
    /*!***************************************!*\
      !*** ./src/app/routing/auth.guard.ts ***!
      \***************************************/

    /*! exports provided: AuthGuard */

    /***/
    function DGLH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(auth, router) {
          _classCallCheck(this, AuthGuard);

          this.auth = auth;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this = this;

            return this.auth.getUser$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
              return !!user;
            }), // <-- map to boolean
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (loggedIn) {
              if (!loggedIn) {
                console.log('access denied');

                _this.router.navigate(['/login']);
              }
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "P28B":
    /*!************************************************************************!*\
      !*** ./src/app/components/editor/editor-home/editor-home.component.ts ***!
      \************************************************************************/

    /*! exports provided: EditorHomeComponent */

    /***/
    function P28B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorHomeComponent", function () {
        return EditorHomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/api/api.service */
      "oZWX");

      var EditorHomeComponent = /*#__PURE__*/function () {
        function EditorHomeComponent(apiService) {
          _classCallCheck(this, EditorHomeComponent);

          this.apiService = apiService;
        }

        _createClass(EditorHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditorHomeComponent;
      }();

      EditorHomeComponent.ɵfac = function EditorHomeComponent_Factory(t) {
        return new (t || EditorHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      EditorHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditorHomeComponent,
        selectors: [["matsukaze-editor-home"]],
        decls: 2,
        vars: 0,
        consts: [[1, "top"], [1, "workspace"]],
        template: function EditorHomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0b3ItaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorHomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'matsukaze-editor-home',
            templateUrl: './editor-home.component.html',
            styleUrls: ['./editor-home.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "W0X1":
    /*!***********************************************!*\
      !*** ./src/app/routing/app-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function W0X1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _routing_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../routing/auth.guard */
      "DGLH");
      /* harmony import */


      var _components_editor_editor_home_editor_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/editor/editor-home/editor-home.component */
      "P28B");
      /* harmony import */


      var _components_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/app/app.component */
      "WfQD");

      var routes = [{
        path: '',
        component: _components_editor_editor_home_editor_home_component__WEBPACK_IMPORTED_MODULE_3__["EditorHomeComponent"]
      }, {
        path: 'editor',
        component: _components_editor_editor_home_editor_home_component__WEBPACK_IMPORTED_MODULE_3__["EditorHomeComponent"],
        canActivate: [_routing_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: '**',
        component: _components_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "WfQD":
    /*!*************************************************!*\
      !*** ./src/app/components/app/app.component.ts ***!
      \*************************************************/

    /*! exports provided: AppComponent */

    /***/
    function WfQD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/api/api.service */
      "oZWX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _editor_story_editor_story_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../editor/story-editor/story-editor.component */
      "Y9Ja");
      /* harmony import */


      var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../auth/auth.component */
      "qrmE");

      function AppComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function AppComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Read");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "matsukaze-story-editor");
        }
      }

      function AppComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "matsukaze-auth");
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(auth) {
          _classCallCheck(this, AppComponent);

          this.auth = auth;
          this.title = 'matsukaze';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.auth.login$("konstantinos.dimitriou@aethon.sg", "test").subscribe(); // tmp autologin
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 6,
        vars: 5,
        consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["authenticated", ""], ["login", ""], [1, "navbar", "fixed-top", "navbar-expand-md", "navbar-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "navbar-brand"], ["src", "/client/assets/img/aethon-glyph.png", 2, "max-height", "25px"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 1, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 17, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.auth.isAuthenticated$()))("ngIfThen", _r1)("ngIfElse", _r3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _editor_story_editor_story_editor_component__WEBPACK_IMPORTED_MODULE_3__["EditorStoryComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
        styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Y9Ja":
    /*!**************************************************************************!*\
      !*** ./src/app/components/editor/story-editor/story-editor.component.ts ***!
      \**************************************************************************/

    /*! exports provided: EditorStoryComponent */

    /***/
    function Y9Ja(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorStoryComponent", function () {
        return EditorStoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/editor/model.service */
      "ovZ/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function EditorStoryComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wahaha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var EditorStoryComponent = /*#__PURE__*/function () {
        function EditorStoryComponent(storyService) {
          _classCallCheck(this, EditorStoryComponent);

          this.storyService = storyService;
        }

        _createClass(EditorStoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "get",
          value: function get() {
            return this.storyService.getStory$(1);
          }
        }]);

        return EditorStoryComponent;
      }();

      EditorStoryComponent.ɵfac = function EditorStoryComponent_Factory(t) {
        return new (t || EditorStoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__["StoryService"]));
      };

      EditorStoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditorStoryComponent,
        selectors: [["matsukaze-story-editor"]],
        decls: 6,
        vars: 3,
        consts: [[1, "top"], [1, "workspace"], [4, "ngIf"]],
        template: function EditorStoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "story-editor works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditorStoryComponent_div_4_Template, 2, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.get()));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1lZGl0b3IuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorStoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'matsukaze-story-editor',
            templateUrl: './story-editor.component.html',
            styleUrls: ['./story-editor.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_editor_editor_service__WEBPACK_IMPORTED_MODULE_1__["StoryService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YTy9":
    /*!*********************************************!*\
      !*** ./src/app/services/api/api.service.js ***!
      \*********************************************/

    /*! exports provided: ApiService */

    /***/
    function YTy9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_spec_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api.spec.json */
      "1RlG");

      var _api_spec_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../api.spec.json */
      "1RlG", 1);

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.test = true;
          this.connected = true;
          this.isAuthenticated = false;
          this.locale = "en";
          this.root = null;
          this.verbose = true;
          this.token = null;
          this.headers = null;
          this.user$ = null;
          if (this.test) this.root = _api_spec_json__WEBPACK_IMPORTED_MODULE_4__["root"].dev;else this.root = _api_spec_json__WEBPACK_IMPORTED_MODULE_4__["root"].test;
        }

        _createClass(ApiService, [{
          key: "login$",
          value: function login$(email, password) {
            var _this2 = this;

            return this._request$(_api_spec_json__WEBPACK_IMPORTED_MODULE_4__["actions"].auth.login, {
              email: email,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              var _a;

              if ((_a = data) === null || _a === void 0 ? void 0 : _a.user) {
                var user = data.user;
                _this2.user$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(user);
                return user;
              } else return null;
            }));
          }
        }, {
          key: "getUser$",
          value: function getUser$() {
            return this.user$;
          }
        }, {
          key: "isAuthenticated$",
          value: function isAuthenticated$() {
            console.log(this.isAuthenticated);
            if (this.token) return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
          }
        }, {
          key: "request$",
          value: function request$(action, data, blob) {
            var _this3 = this;

            return this.isAuthenticated$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isAuthenticated) {
              console.log(isAuthenticated);
              if (isAuthenticated) return _this3._request$(action, data, blob);else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (req) {
              return req;
            }));
          }
        }, {
          key: "_request$",
          value: function _request$(action, data, blob) {
            var _this4 = this;

            var req;
            var url = this.root + action.endpoint;

            if (this.verbose) {
              console.log("*** HTTP request starting" + "\nheaders:" + this.headers + "\ntype:" + action.method + "\nurl:" + url + "\nData:" + JSON.stringify(data) + "\nConnection: " + this.connected);
            }

            switch (action.method) {
              case _api_spec_json__WEBPACK_IMPORTED_MODULE_4__["methods"].get:
                {
                  if (blob) req = this.http.get(url, {
                    params: data,
                    headers: this.headers,
                    responseType: 'blob'
                  });else req = this.http.get(url, {
                    params: data,
                    headers: this.headers
                  });
                  break;
                }

              case _api_spec_json__WEBPACK_IMPORTED_MODULE_4__["methods"].post:
                {
                  req = this.http.post(url, data);
                  break;
                }
            }

            return req.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              if (_this4.verbose) {
                console.log("*** HTTP error" + "\nStatus:" + err.status + "\nurl:" + url);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              var _a;

              if (_this4.verbose && response) {
                console.log("*** HTTP response received" + "\nurl:" + url + "\nResponse:" + JSON.stringify(response));
              }

              if ((_a = response) === null || _a === void 0 ? void 0 : _a.access_token) {
                _this4.token = response.access_token;
                _this4.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', "Bearer " + _this4.token);
                _this4.isAuthenticated = true;
              }

              return response;
            }));
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })(); //# sourceMappingURL=api.service.js.map

      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./routing/app-routing.module */
      "W0X1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-autosize */
      "5eqV");
      /* harmony import */


      var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-drag-drop */
      "+C6U");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _components_app_app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/app/app.component */
      "WfQD");
      /* harmony import */


      var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/auth/auth.component */
      "qrmE");
      /* harmony import */


      var _components_editor_editor_home_editor_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/editor/editor-home/editor-home.component */
      "P28B");
      /* harmony import */


      var _components_editor_story_editor_story_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/editor/story-editor/story-editor.component */
      "Y9Ja");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/api/api.service */
      "oZWX");
      /* harmony import */


      var _services_editor_editor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/editor/editor.service */
      "ovZ/"); // Angular modules
      // Matsukaze modules
      // Providers


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_api_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"], _services_editor_editor_service__WEBPACK_IMPORTED_MODULE_15__["StoryService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DndModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], ngx_autosize__WEBPACK_IMPORTED_MODULE_6__["AutosizeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"], _components_editor_editor_home_editor_home_component__WEBPACK_IMPORTED_MODULE_12__["EditorHomeComponent"], _components_editor_story_editor_story_editor_component__WEBPACK_IMPORTED_MODULE_13__["EditorStoryComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DndModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], ngx_autosize__WEBPACK_IMPORTED_MODULE_6__["AutosizeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"], _components_editor_editor_home_editor_home_component__WEBPACK_IMPORTED_MODULE_12__["EditorHomeComponent"], _components_editor_story_editor_story_editor_component__WEBPACK_IMPORTED_MODULE_13__["EditorStoryComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DndModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], ngx_autosize__WEBPACK_IMPORTED_MODULE_6__["AutosizeModule"]],
            providers: [_services_api_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"], _services_editor_editor_service__WEBPACK_IMPORTED_MODULE_15__["StoryService"]],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "oZWX":
    /*!*********************************************!*\
      !*** ./src/app/services/api/api.service.ts ***!
      \*********************************************/

    /*! exports provided: ApiService */

    /***/
    function oZWX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_spec_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api.spec.json */
      "1RlG");

      var _api_spec_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../api.spec.json */
      "1RlG", 1);

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.test = true;
          this.connected = true;
          this.isAuthenticated = false;
          this.locale = "en";
          this.root = null;
          this.verbose = true;
          this.token = null;
          this.headers = null;
          this.user$ = null;
          if (this.test) this.root = _api_spec_json__WEBPACK_IMPORTED_MODULE_4__["root"].dev;else this.root = _api_spec_json__WEBPACK_IMPORTED_MODULE_4__["root"].test;
        }

        _createClass(ApiService, [{
          key: "login$",
          value: function login$(email, password) {
            var _this5 = this;

            return this._request$(_api_spec_json__WEBPACK_IMPORTED_MODULE_4__["actions"].auth.login, {
              email: email,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              var _a;

              if ((_a = data) === null || _a === void 0 ? void 0 : _a.user) {
                var user = data.user;
                _this5.user$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(user);
                return user;
              } else return null;
            }));
          }
        }, {
          key: "getUser$",
          value: function getUser$() {
            return this.user$;
          }
        }, {
          key: "isAuthenticated$",
          value: function isAuthenticated$() {
            console.log(this.isAuthenticated);
            if (this.token) return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
          }
        }, {
          key: "request$",
          value: function request$(action, data, blob) {
            var _this6 = this;

            return this.isAuthenticated$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isAuthenticated) {
              console.log(isAuthenticated);
              if (isAuthenticated) return _this6._request$(action, data, blob);else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (req) {
              return req;
            }));
          }
        }, {
          key: "_request$",
          value: function _request$(action, data, blob) {
            var _this7 = this;

            var req;
            var url = this.root + action.endpoint;

            if (this.verbose) {
              console.log("*** HTTP request starting" + "\nheaders:" + this.headers + "\ntype:" + action.method + "\nurl:" + url + "\nData:" + JSON.stringify(data) + "\nConnection: " + this.connected);
            }

            switch (action.method) {
              case _api_spec_json__WEBPACK_IMPORTED_MODULE_4__["methods"].get:
                {
                  if (blob) req = this.http.get(url, {
                    params: data,
                    headers: this.headers,
                    responseType: 'blob'
                  });else req = this.http.get(url, {
                    params: data,
                    headers: this.headers
                  });
                  break;
                }

              case _api_spec_json__WEBPACK_IMPORTED_MODULE_4__["methods"].post:
                {
                  req = this.http.post(url, data);
                  break;
                }
            }

            return req.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              if (_this7.verbose) {
                console.log("*** HTTP error" + "\nStatus:" + err.status + "\nurl:" + url);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              var _a;

              if (_this7.verbose && response) {
                console.log("*** HTTP response received" + "\nurl:" + url + "\nResponse:" + JSON.stringify(response));
              }

              if ((_a = response) === null || _a === void 0 ? void 0 : _a.access_token) {
                _this7.token = response.access_token;
                _this7.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', "Bearer " + _this7.token);
                _this7.isAuthenticated = true;
              }

              return response;
            }));
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ovZ/":
    /*!***************************************************!*\
      !*** ./src/app/services/editor/model.service.ts ***!
      \***************************************************/

    /*! exports provided: StoryService */

    /***/
    function ovZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoryService", function () {
        return StoryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _api_spec_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../api.spec.json */
      "1RlG");

      var _api_spec_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../api.spec.json */
      "1RlG", 1);
      /* harmony import */


      var _api_api_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api/api.service.js */
      "YTy9");

      var StoryService = /*#__PURE__*/function () {
        function StoryService(apiService) {
          _classCallCheck(this, StoryService);

          this.apiService = apiService;
        }

        _createClass(StoryService, [{
          key: "getProject$",
          value: function getProject$() {
            return null;
          }
        }, {
          key: "getStory$",
          value: function getStory$(id) {
            return this.apiService.request$(_api_spec_json__WEBPACK_IMPORTED_MODULE_1__["actions"].story.getStory, {
              id: id
            });
          }
        }]);

        return StoryService;
      }();

      StoryService.ɵfac = function StoryService_Factory(t) {
        return new (t || StoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_api_service_js__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
      };

      StoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StoryService,
        factory: StoryService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoryService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _api_api_service_js__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qrmE":
    /*!***************************************************!*\
      !*** ./src/app/components/auth/auth.component.ts ***!
      \***************************************************/

    /*! exports provided: AuthComponent */

    /***/
    function qrmE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/api/api.service */
      "oZWX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AuthComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid username or password, please try again.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent(authService) {
          _classCallCheck(this, AuthComponent);

          this.authService = authService;
          this.email = '';
          this.password = '';
          this.retry = false;
        }

        _createClass(AuthComponent, [{
          key: "submit",
          value: function submit() {
            var _this8 = this;

            this.authService.login$(this.email, this.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              if (response) _this8.retry = false;else _this8.retry = true;
            })).subscribe();
          }
        }]);

        return AuthComponent;
      }();

      AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
      };

      AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthComponent,
        selectors: [["matsukaze-auth"]],
        decls: 21,
        vars: 3,
        consts: [[1, "auth"], [1, "form"], [1, "form-group"], ["name", "email", "type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Your email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "id", "exampleInputPassword1", "placeholder", "Your password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["href", "#"], ["src", "/client/assets/img/aethon-logo.jpg"]],
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_Template_button_click_8_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AuthComponent_div_10_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Create free account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forgot password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.retry);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: [".auth[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url(\"/client/assets/img/aethon-background.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.form[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 5px;\n  height: 500px;\n  width: 90%;\n  max-width: 400px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpRUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6ImF1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9jbGllbnQvYXNzZXRzL2ltZy9hZXRob24tYmFja2dyb3VuZC5wbmcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'matsukaze-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map