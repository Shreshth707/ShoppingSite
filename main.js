(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".front-image{\n    max-height: 400px;\n    padding: 0px;\n}\n  \n\n.container{\n    margin-top: 5%;\n}\n  \n\n.contact-info{\n    float:right;\n    margin-top: 10%;\n}\n  \n\nsection{\n    clear: both;\n}\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 60px;\"></div>\n\n<img class=\"front-image col-md-5\" src=\"/ShoppingSite/assets/images/about1.jpg\">\n<img class=\"front-image col-md-7\" src=\"/ShoppingSite/assets/images/about2.jpg\">\n\n<div class=\"container\">\n    <div>\n      <img src=\"/ShoppingSite/assets/images/about.webp\" class=\"col-md-5\">\n\n      <div class=\"col-md-6 contact-info\">\n        <h3>This is How <b style=\"color:#343a40;\">IN.EX</b> Started</h3> \n        <div>\n          <div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and \n                typesetting industry. Lorem Ipsum has been the industry's \n                standard dummy text ever since the 1500s, when an unknown \n                printer took a galley of type and scrambled it to make a type \n                specimen book. It has survived not only five centuries, but \n                also the leap into electronic typesetting, remaining essentially \n                unchanged. It was popularised in the 1960s with the release of \n                Letraset sheets containing Lorem Ipsum passages, and more \n                recently with desktop publishing software like Aldus PageMaker \n                including versions of Lorem Ipsum.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <section>\n      \n  </section>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../members/members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shop/shop.component */ "./src/app/shop/shop.component.ts");





var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'shop', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_4__["ShopComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"] },
    { path: 'members', component: _members_members_component__WEBPACK_IMPORTED_MODULE_3__["MembersComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header class=\"fixed-top\"></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ShoppingSite';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _togglebtn_togglebtn_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./togglebtn/togglebtn.component */ "./src/app/togglebtn/togglebtn.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//Material Design












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _members_members_component__WEBPACK_IMPORTED_MODULE_9__["MembersComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _togglebtn_togglebtn_component__WEBPACK_IMPORTED_MODULE_25__["TogglebtnComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
            ],
            entryComponents: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _togglebtn_togglebtn_component__WEBPACK_IMPORTED_MODULE_25__["TogglebtnComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n    width: 95%\n}\n\n.half-width {\n    width: 45%\n}\n\n.form-size {\n    width: 75%\n}\n\n.front-image{\n    max-height: 400px;\n    padding: 0px;\n}\n\n.container{\n    margin-top: 5%;\n}\n\n.contact-info{\n    float:right;\n    margin-top: 10%;\n}\n\nsection{\n    clear: both;\n}\n\n.contact-btn{\n    background-color: #343A40;\n}\n\nbody { background:rgb(30,30,40); }\n\nform {  margin: auto; }\n\n.feedback-input {\n  color:white;\n  font-family: Helvetica, Arial, sans-serif;\n  font-weight:500;\n  font-size: 18px;\n  border-radius: 5px;\n  line-height: 22px;\n  background-color: transparent;\n  border:2px solid #343A40;\n  transition: all 0.3s;\n  padding: 13px;\n  margin-bottom: 15px;\n  width:100%;\n  box-sizing: border-box;\n  outline:0;\n}\n\n.feedback-input:focus { border:2px solid #343A40; }\n\ntextarea {\n  height: 150px;\n  line-height: 150%;\n  resize:vertical;\n}\n\n[type=\"submit\"] {\n  font-family: 'Montserrat', Arial, Helvetica, sans-serif;\n  width: 100%;\n  background:#343A40;\n  border-radius:5px;\n  border:0;\n  cursor:pointer;\n  color:white;\n  font-size:24px;\n  padding-top:10px;\n  padding-bottom:10px;\n  transition: all 0.3s;\n  margin-top:-4px;\n  font-weight:700;\n}\n\n[type=\"submit\"]:hover { background:#343A40; }"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 60px;\"></div>\n\n<img class=\"front-image col-md-5\" src=\"/ShoppingSite/assets/images/contact1.jpg\">\n<img class=\"front-image col-md-7\" src=\"/ShoppingSite/assets/images/contact2.jpg\">\n\n\n\n\n  <div class=\"container\">\n    <div>\n      <img src=\"/ShoppingSite/assets/images/contact.webp\" class=\"col-md-5\">\n\n      <div class=\"col-md-6 contact-info\">\n        <h3>Visit Our Store</h3> \n        <div>\n          <div>\n            <address>\n              121, Clear Water Bay Road<br>\n              Clear Water Bay, Kowloon<br>\n              HONG KONG<br>\n              <i></i>: +852 1234 5678<br>\n              <i></i>: +852 8765 4321<br>\n              <i></i>: \n                    <span>Mail us at: </span><a href=\"mailto:sirolashreshth@gmail.com\">sirolashreshth@gmail.com</a>\n            </address>\n            <p></p>\n            <div>\n              <a mat-raised-button href=\"tel:+85212345678\" class=\"contact-btn\"><i class=\"fa fa-phone\"></i> Call</a>\n              <a mat-raised-button class=\"contact-btn\"><i class=\"fa fa-skype\"></i> Skype</a>\n              <a mat-raised-button href=\"mailto:sirolashreshth@gmail.com\" class=\"contact-btn\"><i class=\"fa fa-envelope-o\"></i> Email</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<section>\n\n\n  <div class=\"container\">\n    <h3 style=\"text-align: center;margin-top: 2%;margin-bottom: 2%;\">Contact Us</h3>\n \n\n    <form novalidate [formGroup]=\"feedbackForm\" #fform='ngForm' (ngSubmit)=\"onSubmit()\">      \n      <mat-error *ngIf=\"formErrors.firstname\">{{formErrors.firstname}}</mat-error>\n      <input matInput formControlName=\"firstname\" name=\"name\" type=\"text\" class=\"feedback-input\" placeholder=\"Name\" required/>  \n      <mat-error *ngIf=\"formErrors.email\">{{formErrors.email}}</mat-error>\n      <input matInput formControlName=\"email\" name=\"email\" type=\"text\" class=\"feedback-input\" placeholder=\"Email\" required />  \n      <mat-error *ngIf=\"formErrors.message\">{{formErrors.message}}</mat-error>\n      <textarea formControlName=\"message\" name=\"text\" class=\"feedback-input\" placeholder=\"Message\"></textarea>\n      <button [disabled]='feedbackForm.invalid' type=\"submit\" mat-button class=\"background-primary text-floral-white\">Submit</button>\n    </form>\n\n</div>\n\n\n\n</section>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.formErrors = {
            'firstname': '',
            'email': '',
            'message': ''
        };
        this.validationMessages = {
            'firstname': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 2 characters long.',
                'maxlength': 'Name cannot be more than 25 characters long.'
            },
            'email': {
                'required': 'Email is required.',
                'email': 'Email not in valid format.'
            },
            'message': {
                'required': 'Message is required'
            }
        };
        this.createForm();
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.createForm = function () {
        var _this = this;
        this.feedbackForm = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.feedbackForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    ContactComponent.prototype.onValueChanged = function (data) {
        if (!this.feedbackForm) {
            return;
        }
        var form = this.feedbackForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    ContactComponent.prototype.onSubmit = function () {
        this.feedback = this.feedbackForm.value;
        console.log(this.feedback);
        this.feedbackForm.reset({
            firstname: '',
            email: '',
            message: ''
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fform'),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "feedbackFormDirective", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".site-footer\n{\n    margin-top: 5rem;\n  background-color:#26272b;\n  padding:45px 0 20px;\n  font-size:15px;\n  line-height:24px;\n  color:#737373;\n}\n.site-footer hr\n{\n  border-top-color:#bbb;\n  opacity:0.5\n}\n.site-footer hr.small\n{\n  margin:20px 0\n}\n.site-footer h6\n{\n  color:#fff;\n  font-size:16px;\n  text-transform:uppercase;\n  margin-top:5px;\n  letter-spacing:2px\n}\n.site-footer a\n{\n  color:#737373;\n}\n.site-footer a:hover\n{\n  color:#3366cc;\n  text-decoration:none;\n}\n.footer-links\n{\n  padding-left:0;\n  list-style:none\n}\n.footer-links li\n{\n  display:block\n}\n.footer-links a\n{\n  color:#737373\n}\n.footer-links a:active,.footer-links a:focus,.footer-links a:hover\n{\n  color:#3366cc;\n  text-decoration:none;\n}\n.footer-links.inline li\n{\n  display:inline-block\n}\n.site-footer .social-icons\n{\n  text-align:right\n}\n.site-footer .social-icons a\n{\n  width:40px;\n  height:40px;\n  line-height:40px;\n  margin-left:6px;\n  margin-right:0;\n  border-radius:100%;\n  background-color:#33353d\n}\n.copyright-text\n{\n  margin:0\n}\n@media (max-width:991px)\n{\n  .site-footer [class^=col-]\n  {\n    margin-bottom:30px\n  }\n}\n@media (max-width:767px)\n{\n  .site-footer\n  {\n    padding-bottom:0\n  }\n  .site-footer .copyright-text,.site-footer .social-icons\n  {\n    text-align:center\n  }\n}\n.social-icons\n{\n  padding-left:0;\n  margin-bottom:0;\n  list-style:none\n}\n.social-icons li\n{\n  display:inline-block;\n  margin-bottom:4px\n}\n.social-icons li.title\n{\n  margin-right:15px;\n  text-transform:uppercase;\n  color:#96a2b2;\n  font-weight:700;\n  font-size:13px\n}\n.social-icons a{\n  background-color:#eceeef;\n  color:#818a91;\n  font-size:16px;\n  display:inline-block;\n  line-height:44px;\n  width:44px;\n  height:44px;\n  text-align:center;\n  margin-right:8px;\n  border-radius:100%;\n  transition:all .2s linear\n}\n.social-icons a:active,.social-icons a:focus,.social-icons a:hover\n{\n  color:#fff;\n  background-color:#29aafe\n}\n.social-icons.size-sm a\n{\n  line-height:34px;\n  height:34px;\n  width:34px;\n  font-size:14px\n}\n.social-icons a.facebook:hover\n{\n  background-color:#3b5998\n}\n.social-icons a.twitter:hover\n{\n  background-color:#00aced\n}\n.social-icons a.linkedin:hover\n{\n  background-color:#007bb6\n}\n.social-icons a.dribbble:hover\n{\n  background-color:#ea4c89\n}\n@media (max-width:767px)\n{\n  .social-icons li.title\n  {\n    display:block;\n    margin-right:0;\n    font-weight:600\n  }\n}\nh3{\n    color: #b8461a;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- Site footer -->\n  <footer class=\"site-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-md-3\">\n            <h3>In.EX</h3>\n            <ul class=\"footer-links\">\n              <li><a routerLink=\"/home\">Home</a></li>\n              <li><a routerLink=\"/shop\">Shop</a></li>\n              <li><a routerLink=\"/about\">About</a></li>\n              <li><a routerLink=\"/contact\">Contact</a></li>\n            </ul>\n          </div>\n\n        <div class=\"col-xs-6 col-md-3\">\n          <h3>EXPERIENCE</h3>\n          <ul class=\"footer-links\">\n            <li><a>FAQ</a></li>\n            <li><a>Shipping & Returns</a></li>\n            <li><a>Store Policy</a></li>\n            <li><a>Payment Methods</a></li>\n          </ul>\n        </div>\n\n        <div class=\"col-xs-6 col-md-3\">\n            <h3>FOLLOW US</h3>\n            <ul class=\"footer-links\">\n                <li><a href=\"http://www.facebook.com\">Facebook</a></li>\n                <li><a href=\"http://www.twitter.com\">Twitter</a></li>\n                <li><a href=\"http://www.instagram.com\">Instagram</a></li>\n                <li><a href=\"http://www.pinterest.com\">Pinterest</a></li>\n            </ul>\n          </div>\n      </div>\n      <hr>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 col-sm-6 col-xs-12\">\n          <p class=\"copyright-text\">Copyright &copy; 2020 All Rights Reserved | </p>\n        </div>\n      </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-dark .navbar-nav .active .nav-link, .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .show>.nav-link {\n  color: #EA5823;\n}\n.navbar-nav{\n    margin-left: auto;\n    font-size: x-large ;\n}\n.login{\n    background-color: #EA5823;\n}\n.navbar-item{\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.navbar{\n    padding: 0px;\n    line-height: 3rem;\n    height: 60px;\n}\n.navbar .login{\n    color: black;\n}\nhtml {\n    box-sizing: border-box;\n  }\n*, *::before, *::after {\n    position: relative;\n    box-sizing: inherit;\n  }\n.container {\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    width: 90%;\n    max-width: 90rem;\n    margin: 5rem auto;\n  }\n.container:after {\n    content: \" \";\n    display: block;\n    clear: both;\n  }\n*, *::before, *::after {\n    position: relative;\n    box-sizing: inherit;\n  }\nbutton , .login{\n    border-width: 0px;\n  }\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand nav-item nav-link\" routerLink='/home' style=\"padding-left: 10px; color: #b8461a;\"><h1>IN.EX</h1></a>\n  <button class=\"navbar-toggler\" type=\"button\" \n    (click)=\"openToggleBtn()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" >\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/home' routerLinkActive='active'>Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/shop' routerLinkActive='active'>Shop</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/about' routerLinkActive='active'>About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/members' routerLinkActive='active'>Members</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/contact' routerLinkActive='active'>Contact</a>\n      </li>\n      <li class=\"nav-item\">\n        <button class=\"nav-link login\" (click)=\"openLoginForm()\">Login</button>\n      </li>\n    </ul>\n  </div>\n\n</nav>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _togglebtn_togglebtn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../togglebtn/togglebtn.component */ "./src/app/togglebtn/togglebtn.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
        this.collapsed = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openLoginForm = function () {
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]);
    };
    HeaderComponent.prototype.openToggleBtn = function () {
        if (this.collapsed === true) {
            this.dialog.open(_togglebtn_togglebtn_component__WEBPACK_IMPORTED_MODULE_3__["TogglebtnComponent"], { panelClass: 'custom-dialog-container' });
        }
        else {
            this.dialog.closeAll();
        }
        this.toggleCollapsed();
    };
    HeaderComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n  margin-top: 5rem;\n  width: 90%;\n}\n\n\n.pricefooter{\n  background:#333; \n  height: 80px;\n}\n\n\n.button a{\n  color:#fff;\n  font-size:22px;\n  font-weight:bold;\n  line-height: 1.5;\n}\n\n\n.gallery-image {\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n  -o-object-fit: none;\n     object-fit: none;\n}\n\n\n.button{\n  width:50%;\n  height: 80px;\n  margin:0 auto 0 auto;\n  background:#ff9547;\n  text-align:center; \n  cursor:pointer;\n  transition: all 0.4s ease-in-out;\n}\n\n\n.button:hover{\n  width:80%;\n}\n\n\n/* card */\n\n\n.dress-card-img-top {\n    width:100%;\n    border-radius: 7px 7px 0 0;\n  }\n\n\n.dress-card-body {\n    padding:1rem;\n    background: #fff;\n    border-radius: 0 0 7px 7px;\n  }\n\n\n.dress-card-title {\n    line-height: 0.5rem;\n  }\n\n\n.dress-card-crossed {\n    text-decoration: line-through;\n  }\n\n\n.dress-card-price {\n    font-size: 1rem;\n    font-weight: bold;\n  }\n\n\n.dress-card-off {\n    color: #E06C9F;\n  }\n\n\n.dress-card-para {\n    margin-bottom: 0.2rem;\n    font-size: 1.0rem;\n    margin-bottom: 0rem;\n  }\n\n\n.dress-card {\n    border-radius: 14px;\n  }\n\n\n.dress-card-heart {\n    font-size: 1em;\n    color: #DB2763;\n    margin: 4.5px;\n    position: absolute;\n    left: 4px;\n    top: 0px;\n    \n  }\n\n\n.surprise-bubble {\n    position: absolute;\n    bottom: 12rem;\n    right: 2rem;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    background: #fff;\n    padding: 1rem;\n    color: white;\n    transition: all 0.55s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n\n.surprise-bubble a {\n    font-size: 0.65em;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: white;\n    font-family: arial;\n    text-decoration: none;\n    position: absolute;\n    top: 9px;\n    left: 20px;\n    opacity: 0;\n    /* Safari */\n    transition-delay: 2s;\n    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n\n.surprise-bubble:hover {\n    border-radius: 999rem;\n    padding: 1rem;\n    width: 26%;\n    height: 30px;\n    background: #DB2763;\n    color: white;\n    transition: all 0.55s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n\n.surprise-bubble:hover a {\n    opacity: 1;\n    /* Safari */\n    transition-delay: 2s;\n    transition: opacity 1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n\n.card-button {\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 15px;\n    padding: 9px;\n  }\n\n\n.card-button a {\n    text-decoration: none;\n  }\n\n\n.card-button-inner {\n    padding: 10px;\n    border-radius: 3px;\n  }\n\n\n.bag-button {\n    background: #E06C9F;\n    color: white;\n  }\n\n\n.bag-button :hover{\n    background: #e299b9;\n  }\n\n\n.wish-button {\n    border: 1px solid #E06C9F;\n    color: #E06C9F;\n  }\n\n\nh1{\n    text-align: center;\n    color: #ff9547;\n  }\n\n\n.item {\n    display: block;\n    width: 100%;\n    overflow: hidden;\n    margin: 0 auto;\n  }\n\n\n.text_wrapper {\n     \n      color: #dfdfdf;\n      font-size: 15px;\n    }\n\n\n.text_position {\n      position: absolute;\n      top: 50%;\n      left: 15%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      width: 70%;\n      display: block;\n    }\n\n\n.item--title {\n    display: block;\n    font-family: 'Julius Sans One', Arial, sans-serif;\n    font-size: 1.8em;\n    text-align: left;\n    letter-spacing: 0.1em;\n    color: inherit;\n    font-weight: bolder;\n  }\n\n\n.item--title a{\n      color: white;\n      text-decoration: underline;\n      font-size: medium;\n      text-align: center;\n      font-weight: bolder;\n  }\n\n\nh1{\n    color:white;\n    font-weight: bold;\n  }\n\n\n.col-md-8, img{\n    padding-left: 0px;\n    padding-right: 0px;  \n  }\n  "

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"height: 60px;\"></div>\n\n\n\n<div class=\"item\">\n  <img src=\"/ShoppingSite/assets/images/model1.webp\" alt=\"\" class=\"bg_img col-md-12\" />\n  \n  <div class=\"text_wrapper\">\n    <div class=\"text_position\">\n      <h2 class=\"item--title\">IT'S TIME</h2>\n      <h2 class=\"item--title\">TO STEP UP</h2>\n      <h2 class=\"item--title\">YOUR GAME</h2>\n      <h2 class=\"item--title\"><a routerLink='/shop'>Shop Now</a> </h2>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n      \n    <div class=\"col-md-4\">\n      <a routerLink='/shop'>\n        <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/model3.webp\">\n      </a>\n      <div class=\"pricefooter\">\n        <div class=\"button\">\n          <a routerLink='/shop'> \n            <div>Shop New</div>\n            <div>Arrivals</div>\n          </a>\n        </div>\n      </div>\n    </div>\n      \n    <div class=\"col-md-4\">\n      <a routerLink='/shop'>\n        <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/model4.webp\">\n      </a>\n      <div class=\"pricefooter\">\n        <div class=\"button\">\n          <a routerLink='/shop'> \n            <div>Shop New</div>\n            <div>BestSellers</div>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <a routerLink='/members'>\n        <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/model5.webp\">\n      </a>\n      \n      <div class=\"pricefooter\">\n        <div class=\"button\">\n          <a routerLink='/members'> \n            <div>Join Our </div>\n            <div>Community</div>\n          </a>\n        </div>\n      </div>\n    </div> \n  </div>  \n</div>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\">\n  <h1>New Arrivals</h1>\n  <br>\n  <br>\n  <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"dress-card\">\n          <div class=\"dress-card-head\">\n            <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/product1.webp\" alt=\"\">\n            <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                <i class=\"fas fa-heart\"></i>\n              </span><a> <span>More</span></a></div>\n          </div>\n          <div class=\"dress-card-body\">\n            <h4 class=\"dress-card-title\">Leggings</h4>\n            <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n            <div class=\"row\">\n              <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n          <div class=\"dress-card\">\n            <div class=\"dress-card-head\">\n              <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/product2.webp\" alt=\"\">\n              <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                  <i class=\"fas fa-heart\"></i>\n                </span><a> <span>More</span></a></div>\n            </div>\n            <div class=\"dress-card-body\">\n              <h4 class=\"dress-card-title\">Bra</h4>\n              <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n              <div class=\"row\">\n                <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n              </div>\n            </div>\n          </div>\n      </div>\n      <div class=\"col-md-3\">\n          <div class=\"dress-card\">\n            <div class=\"dress-card-head\">\n              <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/product3.webp\" alt=\"\">\n              <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                  <i class=\"fas fa-heart\"></i>\n                </span><a> <span>More</span></a></div>\n            </div>\n            <div class=\"dress-card-body\">\n              <h4 class=\"dress-card-title\">Top</h4>\n              <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n              <div class=\"row\">\n                <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"dress-card\">\n            <div class=\"dress-card-head\">\n              <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/product4.webp\" alt=\"\">\n              <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                  <i class=\"fas fa-heart\"></i>\n                </span><a> <span>More</span></a></div>\n            </div>\n            <div class=\"dress-card-body\">\n              <h4 class=\"dress-card-title\">Jacket</h4>\n              <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n              <div class=\"row\">\n                <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n              </div>\n            </div>\n          </div>\n        </div>    \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n    position: relative;\n    top: 0;\n    opacity: 1;\n    float: left;\n    padding: 60px 50px 40px 50px;\n    width: 100%;\n    background: #fff;\n    border-radius: 10px;\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    z-index: 5;\n  }\n  .box.back {\n    transform: scale(0.95);\n    -webkit-transform: scale(0.95);\n    -ms-transform: scale(0.95);\n    top: -20px;\n    opacity: .8;\n    z-index: -1;\n  }\n  .box:before {\n    content: \"\";\n    width: 100%;\n    height: 30px;\n    border-radius: 10px;\n    position: absolute;\n    top: -10px;\n    background: rgba(255, 255, 255, 0.6);\n    left: 0;\n    transform: scale(0.95);\n    -webkit-transform: scale(0.95);\n    -ms-transform: scale(0.95);\n    z-index: -1;\n  }\n  .overbox .title {\n    color: #fff;\n  }\n  .overbox .title:before {\n    background: #fff;\n  }\n  .title {\n    width: 100%;\n    float: left;\n    line-height: 46px;\n    font-size: 34px;\n    font-weight: 700;\n    letter-spacing: 2px;\n    color: #ED2553;\n    position: relative;\n  }\n  .title:before {\n    content: \"\";\n    width: 5px;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: -50px;\n    background: #ED2553;\n  }\n  .input {\n    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .input label, .input input, .input .spin {\n    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .button {\n    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .button button .button.login button i.fa {\n    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .material-button .shape:before, .material-button .shape:after {\n    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .button.login button {\n    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .material-button, .alt-2, .material-button .shape, .alt-2 .shape, .box {\n    transition: 400ms cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transition: 400ms cubic-bezier(0.4, 0, 0.2, 1);\n    -ms-transition: 400ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .input {\n    width: 100%;\n    float: left;\n  }\n  .input label, .input input, .input .spin {\n    width: 100%;\n    float: left;\n  }\n  .button {\n    width: 100%;\n    float: left;\n  }\n  .button button {\n    width: 100%;\n    float: left;\n  }\n  .input, .button {\n    margin-top: 30px;\n    height: 70px;\n  }\n  .input {\n    position: relative;\n  }\n  .input input {\n    position: relative;\n  }\n  .button {\n    position: relative;\n  }\n  .button button {\n    position: relative;\n  }\n  .input input {\n    height: 60px;\n    top: 10px;\n    border: none;\n    background: transparent;\n    font-family: 'Roboto', sans-serif;\n    font-size: 24px;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: 300;\n  }\n  .input label {\n    font-family: 'Roboto', sans-serif;\n    font-size: 24px;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: 300;\n  }\n  .button button {\n    font-family: 'Roboto', sans-serif;\n    font-size: 24px;\n    color: rgba(0, 0, 0, 0.8);\n    font-weight: 300;\n  }\n  .input:before, .input .spin {\n    width: 100%;\n    height: 1px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n  }\n  .input:before {\n    content: \"\";\n    background: rgba(0, 0, 0, 0.1);\n    z-index: 3;\n  }\n  .input .spin {\n    background: #ED2553;\n    z-index: 4;\n    width: 0;\n  }\n  .overbox .input .spin {\n    background: white;\n  }\n  .overbox .input:before {\n    background: rgba(255, 255, 255, 0.5);\n  }\n  .input label {\n    position: absolute;\n    top: 10px;\n    left: 0;\n    z-index: 2;\n    cursor: pointer;\n    line-height: 60px;\n  }\n  .button {\n    margin-top: 20px;\n    margin: 40px 0;\n    overflow: hidden;\n    z-index: 2;\n  }\n  .button.login {\n    width: 60%;\n    left: 20%;\n  }\n  .button.login button {\n    width: 100%;\n    line-height: 64px;\n    left: 0%;\n    background-color: transparent;\n    border: 3px solid rgba(0, 0, 0, 0.1);\n    font-weight: 900;\n    font-size: 18px;\n    color: rgba(0, 0, 0, 0.2);\n  }\n  .button button {\n    width: 100%;\n    line-height: 64px;\n    left: 0%;\n    background-color: transparent;\n    border: 3px solid rgba(0, 0, 0, 0.1);\n    font-weight: 900;\n    font-size: 18px;\n    color: rgba(0, 0, 0, 0.2);\n  }\n  .button.login {\n    margin-top: 30px;\n  }\n  .button button {\n    background-color: #fff;\n    color: #ED2553;\n    border: none;\n  }\n  .button.login button.active {\n    border: 3px solid transparent;\n    color: #fff !important;\n  }\n  .button.login button.active span {\n    opacity: 0;\n    transform: scale(0);\n    -webkit-transform: scale(0);\n    -ms-transform: scale(0);\n  }\n  .button.login button.active i.fa {\n    opacity: 1;\n    transform: scale(1) rotate(0deg);\n    -webkit-transform: scale(1) rotate(0deg);\n    -ms-transform: scale(1) rotate(0deg);\n  }\n  .button.login button i.fa {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    line-height: 60px;\n    transform: scale(0) rotate(-45deg);\n    -webkit-transform: scale(0) rotate(-45deg);\n    -ms-transform: scale(0) rotate(-45deg);\n  }\n  .button.login button:hover {\n    color: #ED2553;\n    border-color: #ED2553;\n  }\n  .button button {\n    cursor: pointer;\n    position: relative;\n    z-index: 2;\n  }\n  .pass-forgot {\n    width: 100%;\n    float: left;\n    text-align: center;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 18px;\n  }\n  .click-efect {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: #ED2553;\n    border-radius: 50%;\n  }\n  .overbox {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: inherit;\n    border-radius: 10px;\n    padding: 60px 50px 40px 50px;\n  }\n  .overbox .title, .overbox .button, .overbox .input {\n    z-index: 111;\n    position: relative;\n    color: #fff !important;\n    display: none;\n  }\n  .overbox .title {\n    width: 80%;\n  }\n  .overbox .input {\n    margin-top: 20px;\n  }\n  .overbox .input input, .overbox .input label {\n    color: #fff;\n  }\n  .overbox .material-button, .overbox .alt-2 {\n    display: block;\n  }\n  .overbox .material-button .shape, .overbox .alt-2 .shape {\n    display: block;\n  }\n  .material-button, .alt-2 {\n    width: 140px;\n    height: 140px;\n    border-radius: 50%;\n    background: #ED2553;\n    position: absolute;\n    top: 40px;\n    right: -70px;\n    cursor: pointer;\n    z-index: 100;\n    transform: translate(0%, 0%);\n    -webkit-transform: translate(0%, 0%);\n    -ms-transform: translate(0%, 0%);\n  }\n  .material-button .shape, .alt-2 .shape {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n  }\n  .material-button .shape:before, .alt-2 .shape:before, .material-button .shape:after, .alt-2 .shape:after {\n    content: \"\";\n    background: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(360deg);\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n    -ms-transform: translate(-50%, -50%) rotate(360deg);\n  }\n  .material-button .shape:before, .alt-2 .shape:before {\n    width: 25px;\n    height: 4px;\n  }\n  .material-button .shape:after, .alt-2 .shape:after {\n    height: 25px;\n    width: 4px;\n  }\n  .material-button.active, .alt-2.active {\n    top: 50%;\n    right: 50%;\n    transform: translate(50%, -50%) rotate(0deg);\n    -webkit-transform: translate(50%, -50%) rotate(0deg);\n    -ms-transform: translate(50%, -50%) rotate(0deg);\n  }\n  body {\n    background-image: url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    min-height: 100vh;\n    font-family: 'Roboto', sans-serif;\n    overflow: hidden;\n  }\n  html {\n    overflow: hidden;\n  }\n  .materialContainer {\n    width: 100%;\n    max-width: 460px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n  }\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    list-style-type: none;\n    outline: none;\n  }\n  *:after, *::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    list-style-type: none;\n    outline: none;\n  }\n  \n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"materialContainer\">\n\n\n  <div class=\"box\">\n\n     <div class=\"title\">LOGIN</div>\n\n     <div class=\"input\">\n        <input placeholder=\"Username\" type=\"text\" name=\"name\" id=\"name\">\n        <span class=\"spin\"></span>\n     </div>\n\n     <div class=\"input\">\n        <input placeholder=\"Password\" type=\"password\" name=\"pass\" id=\"pass\">\n        <span class=\"spin\"></span>\n     </div>\n\n     <div class=\"button login\" (click)=\"onSubmit()\">\n        <button><span>GO</span> <i class=\"fa fa-check\"></i></button>\n     </div>\n\n     <a href=\"\" class=\"pass-forgot\">Forgot your password?</a>\n\n  </div>\n\n  <div class=\"overbox\">\n     <div class=\"material-button alt-2\"><span class=\"shape\"></span></div>\n\n     <div class=\"title\">REGISTER</div>\n\n     <div class=\"input\">\n        <input placeholder=\"Username\" type=\"text\" name=\"regname\" id=\"regname\">\n        <span class=\"spin\"></span>\n     </div>\n\n     <div class=\"input\">\n        <input placeholder=\"Password\" type=\"password\" name=\"regpass\" id=\"regpass\">\n        <span class=\"spin\"></span>\n     </div>\n\n     <div class=\"input\">\n        <input placeholder=\"Repeat Password\" type=\"password\" name=\"reregpass\" id=\"reregpass\">\n        <span class=\"spin\"></span>\n     </div>\n\n     <div class=\"button\">\n        <button><span>NEXT</span></button>\n     </div>\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.user = { username: '', password: '', remember: false };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log('User: ', this.user);
        this.dialogRef.close();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/members/members.component.css":
/*!***********************************************!*\
  !*** ./src/app/members/members.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    background-color: white;\n    margin: auto;\n    margin-top: 4%;\n    padding: 15%;\n}\n.content ,h2{\n    overflow-wrap: break-word;\n    line-height: 3rem;\n    text-align: center;\n    margin: auto;\n}\n.btn ,.btn-warning{\n    width: 100px;\n    color: white;\n    font-weight: .2;\n    font-size: large;\n    background-color: #EA5823;\n}\n.btn:hover{\n    background-color: #343A40;\n}"

/***/ }),

/***/ "./src/app/members/members.component.html":
/*!************************************************!*\
  !*** ./src/app/members/members.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 60px;\"></div>\n<div class=\"container\">\n  <div class=\"content\">\n    <h2>Log In to Connect With Members</h2>\n      <div>\n        View and follow other members, leave comments & more.\n      </div>\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"openLoginForm()\">Log In</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/members/members.component.ts":
/*!**********************************************!*\
  !*** ./src/app/members/members.component.ts ***!
  \**********************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MembersComponent = /** @class */ (function () {
    function MembersComponent(dialog) {
        this.dialog = dialog;
    }
    MembersComponent.prototype.ngOnInit = function () {
    };
    MembersComponent.prototype.openLoginForm = function () {
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]);
    };
    MembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-members',
            template: __webpack_require__(/*! ./members.component.html */ "./src/app/members/members.component.html"),
            styles: [__webpack_require__(/*! ./members.component.css */ "./src/app/members/members.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], MembersComponent);
    return MembersComponent;
}());



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".front-image{\n    max-height: 400px;\n    padding: 0px;\n}\n\n\n.row{\n    margin-top: 1%;\n}\n\n\n/* card */\n\n\n.dress-card-img-top {\n    width:100%;\n    border-radius: 7px 7px 0 0;\n    margin-top: 1%;\n  }\n\n\n.dress-card-body {\n    padding:1rem;\n    background: #fff;\n    border-radius: 0 0 7px 7px;\n  }\n\n\n.dress-card-title {\n    line-height: 0.5rem;\n  }\n\n\n.dress-card-crossed {\n    text-decoration: line-through;\n  }\n\n\n.dress-card-price {\n    font-size: 1rem;\n    font-weight: bold;\n  }\n\n\n.dress-card-off {\n    color: #E06C9F;\n  }\n\n\n.dress-card-para {\n    margin-bottom: 0.2rem;\n    font-size: 1.0rem;\n    margin-bottom: 0rem;\n  }\n\n\n.dress-card {\n    border-radius: 14px;\n  }\n\n\n.dress-card-heart {\n    font-size: 1em;\n    color: #DB2763;\n    margin: 4.5px;\n    position: absolute;\n    left: 4px;\n    top: 0px;\n    \n  }\n\n\n.surprise-bubble {\n    position: absolute;\n    bottom: 12rem;\n    right: 2rem;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    background: #fff;\n    padding: 1rem;\n    color: white;\n    transition: all 0.55s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n\n.surprise-bubble a {\n    font-size: 0.65em;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: white;\n    font-family: arial;\n    text-decoration: none;\n    position: absolute;\n    top: 9px;\n    left: 20px;\n    opacity: 0;\n    /* Safari */\n    transition-delay: 2s;\n    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n\n.surprise-bubble:hover {\n    border-radius: 999rem;\n    padding: 1rem;\n    width: 26%;\n    height: 30px;\n    background: #DB2763;\n    color: white;\n    transition: all 0.55s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n\n.surprise-bubble:hover a {\n    opacity: 1;\n    /* Safari */\n    transition-delay: 2s;\n    transition: opacity 1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n\n.card-button {\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 15px;\n    padding: 9px;\n  }\n\n\n.card-button a {\n    text-decoration: none;\n  }\n\n\n.card-button-inner {\n    padding: 10px;\n    border-radius: 3px;\n  }\n\n\n.bag-button {\n    background: #E06C9F;\n    color: white;\n  }\n\n\n.bag-button :hover{\n    background: #e299b9;\n  }\n\n\n.wish-button {\n    border: 1px solid #E06C9F;\n    color: #E06C9F;\n  }\n\n\nh1{\n    text-align: center;\n    color: #ff9547;\n  }\n\n\n/*--------------------------------------------------------------\n2.0 - SEARCH FORM\n--------------------------------------------------------------*/\n\n\n.searchbar{\n  margin: auto;\n  margin-top: 3%;\n  margin-bottom: 3%;\n}\n\n\n.searchform {\n  background:#f4f4f4;\n  background:rgba(244,244,244,.79);\n  border: 1px solid #d3d3d3;\n  padding: 2px 5px;\n  width:33.3%;\n  box-shadow:0 4px 9px rgba(0,0,0,.37);\n  -moz-box-shadow:0 4px 9px rgba(0,0,0,.37);\n  -webkit-box-shadow:0 4px 9px rgba(0,0,0,.37);\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px\n}\n\n\n.dropdown{\n  margin-left: 1%;\n}\n\n\n.searchform input {\n\tbackground:#fefefe;\n\tborder: none;\n\tfont:12px/12px 'HelveticaNeue', Helvetica, Arial, sans-serif;\n\tmargin-right: 5px;\n\tpadding: 10px;\n\twidth: 65%;\n\tbox-shadow: 0 0 4px rgba(0,0,0,.4) inset, 1px 1px 1px rgba(255,255,255,.75);\n\t-moz-box-shadow: 0 0 4px rgba(0,0,0,.4) inset, 1px 1px 1px rgba(255,255,255,.75);\n\t-webkit-box-shadow: 0 0 4px rgba(0,0,0,.4) inset, 1px 1px 1px rgba(255,255,255,.75);\n  border-radius: 9px;\n  -moz-border-radius: 9px;\n  -webkit-border-radius: 9px\n}\n\n\n.searchform input:focus {\n\t\toutline: none;\n\t\tbox-shadow:0 0 4px #0d76be inset;\n\t\t-moz-box-shadow:0 0 4px #0d76be inset;\n\t\t-webkit-box-shadow:0 0 4px #0d76be inset;\n\t}\n\n\n.searchform input::-webkit-input-placeholder {\n  \tfont-style: italic;\n  \tline-height: 15px\n\t}\n\n\n.searchform input:-moz-placeholder {\n\t  font-style: italic;\n  \tline-height: 15px\n\t}\n\n\n.searchform button {\n\tbackground: #212529;\n\t\n\t\n\tborder: none;\n\tcolor:#fff;\n\tcursor: pointer;\n\tfont: 13px/13px 'HelveticaNeue', Helvetica, Arial, sans-serif;\n\tpadding: 10px;\n\twidth:15%;\n\tbox-shadow: 0 0 2px #2692dd inset;\n\t-moz-box-shadow: 0 0 2px #2692dd inset;\n\t-webkit-box-shadow: 0 0 2px #2692dd inset;\n  border-radius: 9px;\n  -moz-border-radius: 9px;\n  -webkit-border-radius: 9px;\n}\n\n\n.searchform button:hover {\n\t\topacity:.9;\n\t}"

/***/ }),

/***/ "./src/app/shop/shop.component.html":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 60px;\"></div>\n\n<img class=\"front-image col-md-5\" src=\"/ShoppingSite/assets/images/shop1.jpg\">\n<img class=\"front-image col-md-7\" src=\"/ShoppingSite/assets/images/shop2.jpg\">\n\n\n\n<form class=\"searchform searchbar\">\n    <input type=\"text\" placeholder=\"Is it me you’re looking for?\">\n    <button type=\"submit\">Search</button>\n    <button class=\"dropdown btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    Filter\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <a class=\"dropdown-item\" >Action</a>\n        <a class=\"dropdown-item\" >Another action</a>\n        <a class=\"dropdown-item\" >Something else here</a>\n    </div>\n</form>\n\n\n\n<div class=\"container\">\n\n\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"dress-card\">\n        <div class=\"dress-card-head\">\n          <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item13.webp\" alt=\"\">\n          <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n              <i class=\"fas fa-heart\"></i>\n            </span><a> <span>More</span></a></div>\n        </div>\n        <div class=\"dress-card-body\">\n          <h4 class=\"dress-card-title\">Jacket</h4>\n          <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n          <div class=\"row\">\n            <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"dress-card\">\n          <div class=\"dress-card-head\">\n            <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item14.webp\" alt=\"\">\n            <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                <i class=\"fas fa-heart\"></i>\n              </span><a> <span>More</span></a></div>\n          </div>\n          <div class=\"dress-card-body\">\n            <h4 class=\"dress-card-title\">Jacket</h4>\n            <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n            <div class=\"row\">\n              <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n            </div>\n          </div>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"dress-card\">\n          <div class=\"dress-card-head\">\n            <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item15.webp\" alt=\"\">\n            <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                <i class=\"fas fa-heart\"></i>\n              </span><a> <span>More</span></a></div>\n          </div>\n          <div class=\"dress-card-body\">\n            <h4 class=\"dress-card-title\">Jacket</h4>\n            <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n            <div class=\"row\">\n              <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"dress-card\">\n          <div class=\"dress-card-head\">\n            <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item16.webp\" alt=\"\">\n            <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                <i class=\"fas fa-heart\"></i>\n              </span><a> <span>More</span></a></div>\n            </div>\n          <div class=\"dress-card-body\">\n            <h4 class=\"dress-card-title\">Jacket</h4>\n            <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n            <div class=\"row\">\n              <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n            </div>\n          </div>\n        </div>\n    </div>    \n  </div>\n\n\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"dress-card\">\n            <div class=\"dress-card-head\">\n              <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item5.webp\" alt=\"\">\n              <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                  <i class=\"fas fa-heart\"></i>\n                </span><a> <span>More</span></a></div>\n            </div>\n            <div class=\"dress-card-body\">\n              <h4 class=\"dress-card-title\">Top</h4>\n              <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n              <div class=\"row\">\n                <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"dress-card\">\n              <div class=\"dress-card-head\">\n                <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item6.webp\" alt=\"\">\n                <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                    <i class=\"fas fa-heart\"></i>\n                  </span><a> <span>More</span></a></div>\n              </div>\n              <div class=\"dress-card-body\">\n                <h4 class=\"dress-card-title\">Top</h4>\n                <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n                <div class=\"row\">\n                  <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n                </div>\n              </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"dress-card\">\n              <div class=\"dress-card-head\">\n                <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item7.webp\" alt=\"\">\n                <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                    <i class=\"fas fa-heart\"></i>\n                  </span><a> <span>More</span></a></div>\n              </div>\n              <div class=\"dress-card-body\">\n                <h4 class=\"dress-card-title\">Top</h4>\n                <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n                <div class=\"row\">\n                  <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"dress-card\">\n              <div class=\"dress-card-head\">\n                <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item8.webp\" alt=\"\">\n                <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                    <i class=\"fas fa-heart\"></i>\n                  </span><a> <span>More</span></a></div>\n                </div>\n              <div class=\"dress-card-body\">\n                <h4 class=\"dress-card-title\">Top</h4>\n                <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n                <div class=\"row\">\n                  <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n                </div>\n              </div>\n            </div>\n        </div>    \n    </div>\n\n\n\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"dress-card\">\n          <div class=\"dress-card-head\">\n            <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item1.webp\" alt=\"\">\n            <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                <i class=\"fas fa-heart\"></i>\n              </span><a> <span>More</span></a></div>\n          </div>\n          <div class=\"dress-card-body\">\n            <h4 class=\"dress-card-title\">InnerWear</h4>\n            <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n            <div class=\"row\">\n              <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n          <div class=\"dress-card\">\n            <div class=\"dress-card-head\">\n              <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item2.webp\" alt=\"\">\n              <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                  <i class=\"fas fa-heart\"></i>\n                </span><a> <span>More</span></a></div>\n            </div>\n            <div class=\"dress-card-body\">\n              <h4 class=\"dress-card-title\">InnerWear</h4>\n              <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n              <div class=\"row\">\n                <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n              </div>\n            </div>\n          </div>\n      </div>\n      <div class=\"col-md-3\">\n          <div class=\"dress-card\">\n            <div class=\"dress-card-head\">\n              <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item3.webp\" alt=\"\">\n              <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                  <i class=\"fas fa-heart\"></i>\n                </span><a> <span>More</span></a></div>\n            </div>\n            <div class=\"dress-card-body\">\n              <h4 class=\"dress-card-title\">InnerWear</h4>\n              <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n              <div class=\"row\">\n                <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"dress-card\">\n            <div class=\"dress-card-head\">\n              <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item4.webp\" alt=\"\">\n              <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                  <i class=\"fas fa-heart\"></i>\n                </span><a> <span>More</span></a></div>\n              </div>\n            <div class=\"dress-card-body\">\n              <h4 class=\"dress-card-title\">InnerWear</h4>\n              <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n              <div class=\"row\">\n                <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n              </div>\n            </div>\n          </div>\n      </div>    \n  </div>\n\n\n\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"dress-card\">\n            <div class=\"dress-card-head\">\n              <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item9.webp\" alt=\"\">\n              <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                  <i class=\"fas fa-heart\"></i>\n                </span><a> <span>More</span></a></div>\n            </div>\n            <div class=\"dress-card-body\">\n              <h4 class=\"dress-card-title\">Leggings</h4>\n              <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n              <div class=\"row\">\n                <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"dress-card\">\n              <div class=\"dress-card-head\">\n                <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item10.webp\" alt=\"\">\n                <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                    <i class=\"fas fa-heart\"></i>\n                  </span><a> <span>More</span></a></div>\n              </div>\n              <div class=\"dress-card-body\">\n                <h4 class=\"dress-card-title\">Leggings</h4>\n                <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n                <div class=\"row\">\n                  <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n                </div>\n              </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"dress-card\">\n              <div class=\"dress-card-head\">\n                <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item11.webp\" alt=\"\">\n                <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                    <i class=\"fas fa-heart\"></i>\n                  </span><a> <span>More</span></a></div>\n              </div>\n              <div class=\"dress-card-body\">\n                <h4 class=\"dress-card-title\">Leggings</h4>\n                <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n                <div class=\"row\">\n                  <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"dress-card\">\n              <div class=\"dress-card-head\">\n                <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item12.webp\" alt=\"\">\n                <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                    <i class=\"fas fa-heart\"></i>\n                  </span><a> <span>More</span></a></div>\n                </div>\n              <div class=\"dress-card-body\">\n                <h4 class=\"dress-card-title\">Leggings</h4>\n                <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n                <div class=\"row\">\n                  <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n                </div>\n              </div>\n            </div>\n        </div>    \n    </div>\n\n\n\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"dress-card\">\n            <div class=\"dress-card-head\">\n              <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item17.webp\" alt=\"\">\n              <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                  <i class=\"fas fa-heart\"></i>\n                </span><a> <span>More</span></a></div>\n            </div>\n            <div class=\"dress-card-body\">\n              <h4 class=\"dress-card-title\">Shorts</h4>\n              <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n              <div class=\"row\">\n                <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"dress-card\">\n              <div class=\"dress-card-head\">\n                <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item18.webp\" alt=\"\">\n                <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                    <i class=\"fas fa-heart\"></i>\n                  </span><a> <span>More</span></a></div>\n              </div>\n              <div class=\"dress-card-body\">\n                <h4 class=\"dress-card-title\">Shorts</h4>\n                <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n                <div class=\"row\">\n                  <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n                </div>\n              </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"dress-card\">\n              <div class=\"dress-card-head\">\n                <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item19.webp\" alt=\"\">\n                <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                    <i class=\"fas fa-heart\"></i>\n                  </span><a> <span>More</span></a></div>\n              </div>\n              <div class=\"dress-card-body\">\n                <h4 class=\"dress-card-title\">Shorts</h4>\n                <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n                <div class=\"row\">\n                  <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"dress-card\">\n              <div class=\"dress-card-head\">\n                <img class=\"dress-card-img-top\" src=\"/ShoppingSite/assets/images/item20.webp\" alt=\"\">\n                <div class=\"surprise-bubble\"><span class=\"dress-card-heart\">\n                    <i class=\"fas fa-heart\"></i>\n                  </span><a> <span>More</span></a></div>\n                </div>\n              <div class=\"dress-card-body\">\n                <h4 class=\"dress-card-title\">Shorts</h4>\n                <p class=\"dress-card-para\"><span class=\"dress-card-price\">$35.00</span></p>\n                <div class=\"row\">\n                  <div class=\"col-md-12 card-button\"><a><div class=\"card-button-inner bag-button\">Quick View</div></a></div> \n                </div>\n              </div>\n            </div>\n        </div>    \n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShopComponent = /** @class */ (function () {
    function ShopComponent() {
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/togglebtn/togglebtn.component.css":
/*!***************************************************!*\
  !*** ./src/app/togglebtn/togglebtn.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link{\n    color: #EA5823;\n    text-align: center;\n    background-color: #343A40;\n    margin: 0px;\n    min-width: 300px;\n}\n\nh3:hover{\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/togglebtn/togglebtn.component.html":
/*!****************************************************!*\
  !*** ./src/app/togglebtn/togglebtn.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div (click)=\"onSubmit()\">\n    <a class=\"nav-link\" routerLink='/home' routerLinkActive='active'><h3>Home</h3></a>\n  </div>\n  <div (click)=\"onSubmit()\">\n    <a class=\"nav-link\"  routerLink='/shop' routerLinkActive='active'><h3>Shop</h3></a>\n  </div>\n  <div (click)=\"onSubmit()\">\n    <a class=\"nav-link\"  routerLink='/about' routerLinkActive='active'><h3>About</h3></a>\n  </div>\n  <div (click)=\"onSubmit()\">\n    <a  class=\"nav-link\"  routerLink='/members' routerLinkActive='active'><h3>Members</h3></a>\n  </div>\n  <div (click)=\"onSubmit()\">\n    <a class=\"nav-link\" routerLink='/contact' routerLinkActive='active'><h3>Contact</h3></a>\n  </div>\n  <div (click)=\"onSubmit()\">\n    <h3 class=\"nav-link\" (click)=\"openLoginForm()\">Login</h3>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/togglebtn/togglebtn.component.ts":
/*!**************************************************!*\
  !*** ./src/app/togglebtn/togglebtn.component.ts ***!
  \**************************************************/
/*! exports provided: TogglebtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglebtnComponent", function() { return TogglebtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TogglebtnComponent = /** @class */ (function () {
    function TogglebtnComponent(dialogRef, dialog) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
    }
    TogglebtnComponent.prototype.ngOnInit = function () {
    };
    TogglebtnComponent.prototype.onSubmit = function () {
        this.dialogRef.close();
    };
    TogglebtnComponent.prototype.openLoginForm = function () {
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]);
    };
    TogglebtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-togglebtn',
            template: __webpack_require__(/*! ./togglebtn.component.html */ "./src/app/togglebtn/togglebtn.component.html"),
            styles: [__webpack_require__(/*! ./togglebtn.component.css */ "./src/app/togglebtn/togglebtn.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], TogglebtnComponent);
    return TogglebtnComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shreshth/Desktop/Angular/ShoppingSite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map