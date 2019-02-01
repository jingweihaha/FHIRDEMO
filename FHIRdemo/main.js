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

/***/ "./src/app/allergyintolerance/allergyintolerance.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/allergyintolerance/allergyintolerance.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbGVyZ3lpbnRvbGVyYW5jZS9hbGxlcmd5aW50b2xlcmFuY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/allergyintolerance/allergyintolerance.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/allergyintolerance/allergyintolerance.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mydiv\">\n  <table *ngIf=\"dataSource\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"display\">\n      <th mat-header-cell *matHeaderCellDef> Allergy/Intolerance </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.display}} </td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"reaction\">\n      <th mat-header-cell *matHeaderCellDef> Reaction </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.reaction}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"clinicalStatus\">\n      <th mat-header-cell *matHeaderCellDef> Status </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.clinicalStatus}} </td>\n    </ng-container>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/allergyintolerance/allergyintolerance.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/allergyintolerance/allergyintolerance.component.ts ***!
  \********************************************************************/
/*! exports provided: AllergyintoleranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllergyintoleranceComponent", function() { return AllergyintoleranceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




var AllergyintoleranceComponent = /** @class */ (function () {
    function AllergyintoleranceComponent(service, cd) {
        this.service = service;
        this.cd = cd;
        this.allergyIntolerance = [];
        if (this.service.allergyIntolerance) {
            var tmp_allergyIntolerance = this.service.allergyIntolerance["entry"];
            if (tmp_allergyIntolerance) {
                for (var i = 0; i < tmp_allergyIntolerance.length; i++) {
                    var obj = {};
                    var clinicalStatus = void 0;
                    var display = void 0;
                    var reaction = void 0;
                    try {
                        if (tmp_allergyIntolerance[i]["resource"]["clinicalStatus"]) {
                            clinicalStatus = tmp_allergyIntolerance[i]["resource"]["clinicalStatus"];
                        }
                        obj["clinicalStatus"] = clinicalStatus != null ? clinicalStatus : "N/A";
                    }
                    catch (error) {
                        obj["clinicalStatus"] = "N/A";
                    }
                    try {
                        if (tmp_allergyIntolerance[i]["resource"]["code"]["coding"][0]["display"]) {
                            display = tmp_allergyIntolerance[i]["resource"]["code"]["coding"][0]["display"];
                        }
                        obj["display"] = display != null ? display : "N/A";
                    }
                    catch (error) {
                        obj["display"] = "N/A";
                    }
                    try {
                        if (tmp_allergyIntolerance[i]["resource"]["reaction"][0]["manifestation"]) {
                            reaction = tmp_allergyIntolerance[i]["resource"]["reaction"][0]["manifestation"];
                        }
                        var sb = "";
                        for (var i_1 = 0; i_1 < reaction.length; i_1++) {
                            sb += reaction[i_1]["coding"][0]["display"] + " ";
                        }
                        obj["reaction"] = sb != null ? sb : "N/A";
                    }
                    catch (error) {
                        obj["reaction"] = "N/A";
                    }
                    this.allergyIntolerance.push(obj);
                }
                this.cd.markForCheck();
                this.displayedColumns = ["clinicalStatus", "display", "reaction"];
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allergyIntolerance);
            }
        }
    }
    AllergyintoleranceComponent.prototype.ngOnInit = function () {
    };
    AllergyintoleranceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allergyintolerance',
            template: __webpack_require__(/*! ./allergyintolerance.component.html */ "./src/app/allergyintolerance/allergyintolerance.component.html"),
            styles: [__webpack_require__(/*! ./allergyintolerance.component.css */ "./src/app/allergyintolerance/allergyintolerance.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AllergyintoleranceComponent);
    return AllergyintoleranceComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _medicationstatement_medicationstatement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medicationstatement/medicationstatement.component */ "./src/app/medicationstatement/medicationstatement.component.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/tables/tables.component.ts");







var routes = [
    { path: 'patient', component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_3__["PatientComponent"] },
    { path: 'detail', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"] },
    { path: 'medicationstatement', component: _medicationstatement_medicationstatement_component__WEBPACK_IMPORTED_MODULE_5__["MedicationstatementComponent"] },
    { path: 'tables', component: _tables_tables_component__WEBPACK_IMPORTED_MODULE_6__["TablesComponent"] }
    // { path: '**', component: HeaderComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .mytitle{\r\n    margin-right: auto!important;\r\n    margin-left: 20px;\r\n} */\r\n\r\n/* .myform{\r\n    margin-left: -100px;\r\n} */\r\n\r\n/* a .nav-link{\r\n   margin-left: auto;\r\n} */\r\n\r\n.mytitlecolor{\r\n    background: #087ca7;\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\r\n    color: #ccc !important;\r\n}\r\n\r\n.myfont{\r\n    color: white;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: orangered; /* Green */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIOztHQUVHOztBQUVIOztHQUVHOztBQUVIO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQixFQUFFLFVBQVU7RUFDekMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5teXRpdGxle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59ICovXHJcblxyXG4vKiAubXlmb3Jte1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcclxufSAqL1xyXG5cclxuLyogYSAubmF2LWxpbmt7XHJcbiAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59ICovXHJcblxyXG4ubXl0aXRsZWNvbG9ye1xyXG4gICAgYmFja2dyb3VuZDogIzA4N2NhNztcclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMsIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjY2NjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5teWZvbnR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7IC8qIEdyZWVuICovXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"mytitle\">\n    <a class=\"navbar-brand\" style=\"  font-weight: bold;\" href=\"#\">FHIR Patient Browser</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  </div>\n\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\n        </a>\n      </li>\n    </ul>\n    <div class=\"myform\">\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </div>\n</nav>\n\n<div class=\"list-group\">\n    <button type=\"button\" class=\"list-group-item\">Cras justo odio</button>\n    <button type=\"button\" class=\"list-group-item\">Dapibus ac facilisis in</button>\n    <button type=\"button\" class=\"list-group-item\">Morbi leo risus</button>\n    <button type=\"button\" class=\"list-group-item\">Porta ac consectetur ac</button>\n    <button type=\"button\" class=\"list-group-item\">Vestibulum at eros</button>\n  </div> -->\n\n<!-- <nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">WebSiteName</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a href=\"#\">Home</a></li>\n      <li><a href=\"#\">Page 1</a></li>\n      <li><a href=\"#\">Page 2</a></li>\n    </ul>\n    <form class=\"navbar-form navbar-left\" action=\"/action_page.php\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\">\n        <div class=\"input-group-btn\">\n          <button class=\"btn btn-default\" type=\"submit\">\n            <i class=\"glyphicon glyphicon-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</nav> -->\n\n<!--#087ca7-->\n\n<app-header></app-header>\n<router-outlet></router-outlet>\n<!-- <app-patient></app-patient> -->"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FHIRdemo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _medicationstatement_medicationstatement_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./medicationstatement/medicationstatement.component */ "./src/app/medicationstatement/medicationstatement.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/tables/tables.component.ts");
/* harmony import */ var _encounter_encounter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./encounter/encounter.component */ "./src/app/encounter/encounter.component.ts");
/* harmony import */ var _condition_condition_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./condition/condition.component */ "./src/app/condition/condition.component.ts");
/* harmony import */ var _procedure_procedure_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./procedure/procedure.component */ "./src/app/procedure/procedure.component.ts");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./appointment/appointment.component */ "./src/app/appointment/appointment.component.ts");
/* harmony import */ var _allergyintolerance_allergyintolerance_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./allergyintolerance/allergyintolerance.component */ "./src/app/allergyintolerance/allergyintolerance.component.ts");
/* harmony import */ var _sortmed_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sortmed.pipe */ "./src/app/sortmed.pipe.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _patient_patient_component__WEBPACK_IMPORTED_MODULE_6__["PatientComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__["DetailComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _medicationstatement_medicationstatement_component__WEBPACK_IMPORTED_MODULE_13__["MedicationstatementComponent"],
                _tables_tables_component__WEBPACK_IMPORTED_MODULE_15__["TablesComponent"],
                _encounter_encounter_component__WEBPACK_IMPORTED_MODULE_16__["EncounterComponent"],
                _condition_condition_component__WEBPACK_IMPORTED_MODULE_17__["ConditionComponent"],
                _procedure_procedure_component__WEBPACK_IMPORTED_MODULE_18__["ProcedureComponent"],
                _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_19__["AppointmentComponent"],
                _allergyintolerance_allergyintolerance_component__WEBPACK_IMPORTED_MODULE_20__["AllergyintoleranceComponent"],
                _sortmed_pipe__WEBPACK_IMPORTED_MODULE_21__["SortmedPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appointment/appointment.component.css":
/*!*******************************************************!*\
  !*** ./src/app/appointment/appointment.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50L2FwcG9pbnRtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/appointment/appointment.component.html":
/*!********************************************************!*\
  !*** ./src/app/appointment/appointment.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mydiv\">\n  <table *ngIf=\"dataSource\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"start\">\n      <th mat-header-cell *matHeaderCellDef> Date/Time </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.start}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef> Description </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef> Status </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n    </ng-container>\n    <!-- <ng-container matColumnDef=\"end\">\n      <th mat-header-cell *matHeaderCellDef> end </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.end}} </td>\n    </ng-container> -->\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/appointment/appointment.component.ts":
/*!******************************************************!*\
  !*** ./src/app/appointment/appointment.component.ts ***!
  \******************************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




var AppointmentComponent = /** @class */ (function () {
    function AppointmentComponent(service, cd) {
        this.service = service;
        this.cd = cd;
        this.appointment = [];
        if (this.service.appointment) {
            var tmp_appointment = this.service.appointment["entry"];
            if (tmp_appointment) {
                for (var i = 0; i < tmp_appointment.length; i++) {
                    var obj = {};
                    try {
                        var text = tmp_appointment[i]["resource"]["status"];
                        obj["status"] = text != null ? text : "N/A";
                    }
                    catch (error) {
                        obj["status"] = "N/A";
                    }
                    var description = void 0;
                    var start = void 0;
                    var end = void 0;
                    try {
                        if (tmp_appointment[i]["resource"]["description"]) {
                            description = tmp_appointment[i]["resource"]["description"];
                        }
                        obj["description"] = description != null ? description : "N/A";
                    }
                    catch (error) {
                        obj["description"] = "N/A";
                    }
                    try {
                        if (tmp_appointment[i]["resource"]["start"]) {
                            start = tmp_appointment[i]["resource"]["start"];
                        }
                        obj["start"] = start != null ? start : "N/A";
                    }
                    catch (error) {
                        obj["start"] = "N/A";
                    }
                    try {
                        if (tmp_appointment[i]["resource"]["end"]) {
                            end = tmp_appointment[i]["resource"]["end"];
                        }
                        obj["end"] = end != null ? end : "N/A";
                    }
                    catch (error) {
                        obj["end"] = "N/A";
                    }
                    this.appointment.push(obj);
                }
                this.cd.markForCheck();
                this.displayedColumns = ["status", "description", "start"];
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.appointment);
            }
        }
    }
    AppointmentComponent.prototype.ngOnInit = function () {
    };
    AppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointment',
            template: __webpack_require__(/*! ./appointment.component.html */ "./src/app/appointment/appointment.component.html"),
            styles: [__webpack_require__(/*! ./appointment.component.css */ "./src/app/appointment/appointment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AppointmentComponent);
    return AppointmentComponent;
}());



/***/ }),

/***/ "./src/app/condition/condition.component.css":
/*!***************************************************!*\
  !*** ./src/app/condition/condition.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmRpdGlvbi9jb25kaXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/condition/condition.component.html":
/*!****************************************************!*\
  !*** ./src/app/condition/condition.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mydiv\">\n  <table *ngIf=\"dataSource\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"condition\">\n      <th mat-header-cell *matHeaderCellDef> Condition </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.condition}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"severity\">\n      <th mat-header-cell *matHeaderCellDef> severity </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.severity}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"onset\">\n      <th mat-header-cell *matHeaderCellDef> Onset Date </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.onset}} </td>\n    </ng-container>\n    <!-- <ng-container matColumnDef=\"abatement\">\n      <th mat-header-cell *matHeaderCellDef> abatementDateTime </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.abatement}} </td>\n    </ng-container> -->\n    <ng-container matColumnDef=\"clinicalstatus\">\n      <th mat-header-cell *matHeaderCellDef> Clinical Status </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.clinicalstatus}} </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/condition/condition.component.ts":
/*!**************************************************!*\
  !*** ./src/app/condition/condition.component.ts ***!
  \**************************************************/
/*! exports provided: ConditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionComponent", function() { return ConditionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




var ConditionComponent = /** @class */ (function () {
    function ConditionComponent(service, cd) {
        this.service = service;
        this.cd = cd;
        this.condition = [];
        if (this.service.condition) {
            //debugger;
            var tmp_condition = this.service.condition["entry"];
            if (tmp_condition) {
                for (var i = 0; i < tmp_condition.length; i++) {
                    var obj = {};
                    try {
                        var condition = tmp_condition[i]["resource"]["code"]["text"];
                        //console.log("condition is ", condition);
                        var type = tmp_condition[i]["resource"]["severity"];
                        var text = type["text"];
                        obj["condition"] = condition == "" ? "N/A" : condition;
                        obj["severity"] = text != null ? text : "N/A";
                    }
                    catch (error) {
                        obj["severity"] = "N/A";
                    }
                    try {
                        var condition = tmp_condition[i]["resource"]["code"]["text"];
                        obj["condition"] = condition == "" ? "N/A" : condition;
                    }
                    catch (error) {
                        obj["condition"] = "N/A";
                    }
                    var onset = void 0;
                    var abatement = void 0;
                    var clinicalstatus = void 0;
                    try {
                        if (tmp_condition[i]["resource"]["onsetDateTime"]) {
                            onset = tmp_condition[i]["resource"]["onsetDateTime"];
                        }
                        obj["onset"] = onset != null ? onset : "N/A";
                    }
                    catch (error) {
                        obj["onset"] = "N/A";
                    }
                    try {
                        if (tmp_condition[i]["resource"]["abatementDatetime"]) {
                            abatement = tmp_condition[i]["resource"]["abatementDatetime"];
                        }
                        obj["abatement"] = abatement != null ? abatement : "N/A";
                    }
                    catch (error) {
                        obj["abatement"] = "N/A";
                    }
                    try {
                        if (tmp_condition[i]["resource"]["clinicalStatus"]) {
                            clinicalstatus = tmp_condition[i]["resource"]["clinicalStatus"];
                        }
                        obj["clinicalstatus"] = clinicalstatus != null ? clinicalstatus : "N/A";
                    }
                    catch (error) {
                        obj["clinicalstatus"] = "N/A";
                    }
                    this.condition.push(obj);
                }
                debugger;
                this.condition.sort(function (a, b) {
                    debugger;
                    if (a["condition"].toLowerCase() < b["condition"].toLowerCase()) {
                        return -1;
                    }
                    else if (a["condition"].toLowerCase() > b["condition"].toLowerCase()) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                this.cd.markForCheck();
                this.displayedColumns = ["condition", "severity", "onset", "clinicalstatus"];
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.condition);
            }
        }
    }
    ConditionComponent.prototype.ngOnInit = function () {
    };
    ConditionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-condition',
            template: __webpack_require__(/*! ./condition.component.html */ "./src/app/condition/condition.component.html"),
            styles: [__webpack_require__(/*! ./condition.component.css */ "./src/app/condition/condition.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ConditionComponent);
    return ConditionComponent;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n    margin: auto;\r\n    margin-top: 5vh;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n  \r\n  .make-it-slow {\r\n    box-shadow: 0 1px 2px rgba(0,0,0,0.15);\r\n    transition: box-shadow 0.3s ease-in-out;\r\n  }\r\n  \r\n  /* Transition to a bigger shadow on hover */\r\n  \r\n  .make-it-slow:hover {\r\n    box-shadow: 0 5px 15px rgba(0,0,0,0.3);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUZBQW1GO0lBQ25GLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHNDQUFzQztJQUN0Qyx1Q0FBdUM7RUFDekM7O0VBRUEsMkNBQTJDOztFQUMzQztJQUNFLHNDQUFzQztFQUN4QyIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5tYWtlLWl0LXNsb3cge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRyYW5zaXRpb24gdG8gYSBiaWdnZXIgc2hhZG93IG9uIGhvdmVyICovXHJcbiAgLm1ha2UtaXQtc2xvdzpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/detail/detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  >\n  <mat-card class=\"example-card make-it-slow\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{id}}</mat-card-title>\n      <mat-card-subtitle>{{name}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n      <p>\n        This Patient is {{gender}}, whose birthday is {{dob}}.\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n        <button class=\"btn btn-outline-success my-2 my-sm-0 myhover\" (click)=\"goBack()\"  >Back</button>\n    </mat-card-actions>\n\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");


// MDB Angular Pro


var DetailComponent = /** @class */ (function () {
    function DetailComponent(zone, service, router, cd) {
        this.zone = zone;
        this.service = service;
        this.router = router;
        this.cd = cd;
        if (this.service.patient_detail) {
            this.patient_detail = this.service.patient_detail;
            this.id = this.patient_detail.id;
            this.name = this.patient_detail.name;
            this.gender = this.patient_detail.gender;
            this.dob = this.patient_detail.birthDate;
            this.cd.markForCheck();
        }
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent.prototype.goBack = function () {
        this.router.navigate(['/patient']);
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/encounter/encounter.component.css":
/*!***************************************************!*\
  !*** ./src/app/encounter/encounter.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuY291bnRlci9lbmNvdW50ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/encounter/encounter.component.html":
/*!****************************************************!*\
  !*** ./src/app/encounter/encounter.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mydiv\">\n  <table *ngIf=\"dataSource\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"start\">\n      <th mat-header-cell *matHeaderCellDef> Encounter Date </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.start}} </td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef> Type </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"end\">\n      <th mat-header-cell *matHeaderCellDef> end </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.end}} </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/encounter/encounter.component.ts":
/*!**************************************************!*\
  !*** ./src/app/encounter/encounter.component.ts ***!
  \**************************************************/
/*! exports provided: EncounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterComponent", function() { return EncounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




var EncounterComponent = /** @class */ (function () {
    function EncounterComponent(service, cd) {
        this.service = service;
        this.cd = cd;
        this.encounter = [];
        if (this.service.encounter) {
            var tmp_encounter = this.service.encounter["entry"];
            if (tmp_encounter) {
                for (var i = 0; i < tmp_encounter.length; i++) {
                    var obj = {};
                    try {
                        var type = tmp_encounter[i]["resource"]["type"][0];
                        var text = type["text"];
                        obj["type"] = text != "" ? text : "N/A";
                    }
                    catch (error) {
                        obj["type"] = "N/A";
                    }
                    var start = void 0;
                    var end = void 0;
                    try {
                        if (tmp_encounter[i]["resource"]["period"]["start"]) {
                            start = tmp_encounter[i]["resource"]["period"]["start"];
                        }
                        obj["start"] = start != null ? start : "N/A";
                    }
                    catch (error) {
                        obj["start"] = "N/A";
                    }
                    try {
                        if (tmp_encounter[i]["resource"]["period"]["end"]) {
                            end = tmp_encounter[i]["resource"]["period"]["end"];
                        }
                        obj["end"] = end != null ? end : "N/A";
                    }
                    catch (error) {
                        obj["end"] = "N/A";
                    }
                    this.encounter.push(obj);
                }
                this.encounter.sort(function (a, b) {
                    if (a["start"].toLowerCase() < b["start"].toLowerCase()) {
                        return 1;
                    }
                    else if (a["start"].toLowerCase() > b["start"].toLowerCase()) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
                this.cd.markForCheck();
                this.displayedColumns = ["type", "start", "end"];
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.encounter);
            }
        }
    }
    EncounterComponent.prototype.ngOnInit = function () {
    };
    EncounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-encounter',
            template: __webpack_require__(/*! ./encounter.component.html */ "./src/app/encounter/encounter.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./encounter.component.css */ "./src/app/encounter/encounter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], EncounterComponent);
    return EncounterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .mytitle{\r\n    margin-right: auto!important;\r\n    margin-left: 20px;\r\n} */\r\n\r\n/* .myform{\r\n    margin-left: -100px;\r\n} */\r\n\r\n/* a .nav-link{\r\n   margin-left: auto;\r\n} */\r\n\r\n.mytitlecolor{\r\n    background: #087ca7;\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\r\n    color: #ccc !important;\r\n}\r\n\r\n.myfont{\r\n    color: white;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: orangered; /* Green */\r\n}\r\n\r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRzs7QUFFSDs7R0FFRzs7QUFFSDs7R0FFRzs7QUFFSDtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkIsRUFBRSxVQUFVO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm15dGl0bGV7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8haW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn0gKi9cclxuXHJcbi8qIC5teWZvcm17XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xyXG59ICovXHJcblxyXG4vKiBhIC5uYXYtbGlua3tcclxuICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn0gKi9cclxuXHJcbi5teXRpdGxlY29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDg3Y2E3O1xyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpmb2N1cywgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6ICNjY2MgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15Zm9udHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDsgLyogR3JlZW4gKi9cclxufVxyXG5cclxuICAgIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light mytitlecolor\">\n    <a class=\"navbar-brand font-weight-bold myfont\" href=\"#\">FHIR Demo</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n      </ul>\n      <app-search-bar></app-search-bar>\n    </div>\n  </nav>\n\n\n  "

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'FHIRdemo';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/medicationstatement/medicationstatement.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/medicationstatement/medicationstatement.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljYXRpb25zdGF0ZW1lbnQvbWVkaWNhdGlvbnN0YXRlbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/medicationstatement/medicationstatement.component.html":
/*!************************************************************************!*\
  !*** ./src/app/medicationstatement/medicationstatement.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mydiv\">\n  <table *ngIf=\"dataSource\" mat-table matSort [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"med\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> MED </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.med}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"dosage\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> DOSAGE </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.dosage}} </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" mat-sort-header></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table> \n</div>"

/***/ }),

/***/ "./src/app/medicationstatement/medicationstatement.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/medicationstatement/medicationstatement.component.ts ***!
  \**********************************************************************/
/*! exports provided: MedicationstatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationstatementComponent", function() { return MedicationstatementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MedicationstatementComponent = /** @class */ (function () {
    function MedicationstatementComponent(service, cd) {
        this.service = service;
        this.cd = cd;
        this.medicationstatement = [];
        if (this.service.medicationstatement && this.service.medicationstatement.entry && (this.service.medicationstatement.entry.length > 0)) {
            var tmp_medicationstatements = this.service.medicationstatement.entry;
            for (var i = 0; i < tmp_medicationstatements.length; i++) {
                var obj = {};
                try {
                    var dosage = tmp_medicationstatements[i]["resource"]["dosage"][0];
                    var text = dosage["text"];
                    obj["dosage"] = text;
                }
                catch (error) {
                    obj["dosage"] = "N/A";
                }
                var med = void 0;
                try {
                    // debugger;
                    if (tmp_medicationstatements[i]["resource"]["medicationCodeableConcept"]) {
                        med = tmp_medicationstatements[i]["resource"]["medicationCodeableConcept"];
                        obj["med"] = med["text"] != "" ? med["text"].trim() : "N/A";
                    }
                    else if (tmp_medicationstatements[i]["resource"]["medicationReference"]["display"]) {
                        med = tmp_medicationstatements[i]["resource"]["medicationReference"]["display"];
                        obj["med"] = med != "" ? med.trim() : "N/A";
                    }
                }
                catch (error) {
                    obj["med"] = "N/A";
                }
                this.medicationstatement.push(obj);
            }
            this.cd.markForCheck();
            this.medicationstatement.sort(function (a, b) {
                if (a["med"].toLowerCase() < b["med"].toLowerCase()) {
                    return -1;
                }
                else if (a["med"].toLowerCase() > b["med"].toLowerCase()) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            this.displayedColumns = ["med", "dosage"];
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.medicationstatement);
            debugger;
            this.dataSource.sort = this.sort;
        }
    }
    MedicationstatementComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], MedicationstatementComponent.prototype, "sort", void 0);
    MedicationstatementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medicationstatement',
            template: __webpack_require__(/*! ./medicationstatement.component.html */ "./src/app/medicationstatement/medicationstatement.component.html"),
            styles: [__webpack_require__(/*! ./medicationstatement.component.css */ "./src/app/medicationstatement/medicationstatement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], MedicationstatementComponent);
    return MedicationstatementComponent;
}());



/***/ }),

/***/ "./src/app/patient/patient.component.css":
/*!***********************************************!*\
  !*** ./src/app/patient/patient.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-row {\r\n    height: auto;\r\n  }\r\n  \r\n.mat-cell {\r\n    padding: 1vw !important;\r\n  }\r\n  \r\n/* .mat-header-cell { \r\n       text-align: center; \r\n  } */\r\n  \r\n.matHeaderCellDef {\r\n    text-align: center;\r\n  }\r\n  \r\nth.mat-header-cell {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    text-align: center !important;\r\n    /* padding: 2vw !important; */\r\n    padding-top: 12px !important;\r\n    padding-bottom: 12px !important;\r\n    padding-right: 1vw !important ; \r\n    padding-left: 1vw !important;\r\n  }\r\n  \r\n/* .mat-cell {\r\n    text-align: center;\r\n    border: 1px solid #ddd;\r\n  } */\r\n  \r\ntable {\r\n    margin: auto;\r\n    /*width: 100vw;*/\r\n}\r\n  \r\n.mydiv {\r\n  margin: 5vh;\r\n  /* border: 2px solid red; */\r\n}\r\n  \r\n.mat-row:nth-child(even){\r\n  background-color: white;\r\n  }\r\n  \r\n.mat-row:nth-child(odd){\r\n  background-color:#f2f2f2;\r\n  }\r\n  \r\n.mat-cell, .mat-header-cell{\r\n  /* text-align: center; */\r\n  /* border: 1px solid grey; */\r\n  border: 1px solid #ddd;\r\n  min-height: 48px;\r\n  }\r\n  \r\n.mat-header-cell{\r\n  padding: 2vw;\r\n }\r\n  \r\n.mat-row:hover {\r\n    background-color: #ddd;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0FBRUY7SUFDSSx1QkFBdUI7RUFDekI7O0FBRUY7O0tBRUs7O0FBRUw7SUFDSSxrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsNEJBQTRCO0VBQzlCOztBQUVGOzs7S0FHSzs7QUFFTDtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCOztBQUVGO0VBQ0Usd0JBQXdCO0VBQ3hCOztBQUVGO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCOztBQUVEO0VBQ0MsWUFBWTtDQUNiOztBQUVDO0lBQ0Usc0JBQXNCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJvdyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4ubWF0LWNlbGwge1xyXG4gICAgcGFkZGluZzogMXZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLyogLm1hdC1oZWFkZXItY2VsbCB7IFxyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICB9ICovXHJcblxyXG4ubWF0SGVhZGVyQ2VsbERlZiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxudGgubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIC8qIHBhZGRpbmc6IDJ2dyAhaW1wb3J0YW50OyAqL1xyXG4gICAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdncgIWltcG9ydGFudCA7IFxyXG4gICAgcGFkZGluZy1sZWZ0OiAxdncgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4vKiAubWF0LWNlbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICB9ICovXHJcblxyXG50YWJsZSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAvKndpZHRoOiAxMDB2dzsqL1xyXG59XHJcblxyXG4ubXlkaXYge1xyXG4gIG1hcmdpbjogNXZoO1xyXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cclxufVxyXG5cclxuLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbi5tYXQtcm93Om50aC1jaGlsZChvZGQpe1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2YyZjJmMjtcclxuICB9XHJcblxyXG4ubWF0LWNlbGwsIC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gIH1cclxuXHJcbiAubWF0LWhlYWRlci1jZWxse1xyXG4gIHBhZGRpbmc6IDJ2dztcclxuIH1cclxuXHJcbiAgLm1hdC1yb3c6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/patient/patient.component.html":
/*!************************************************!*\
  !*** ./src/app/patient/patient.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mydiv\" *ngIf=\"dataSource\">\n  <table *ngIf=\"dataSource\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"index\">\n      <th mat-header-cell *matHeaderCellDef> Row ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.index}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"gender\">\n      <th mat-header-cell *matHeaderCellDef> gender </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.gender}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"birthDate\">\n      <th mat-header-cell *matHeaderCellDef> birthDate </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.birthDate}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"address\">\n      <th mat-header-cell *matHeaderCellDef> address </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"getRecord(row)\"></tr>\n  </table>\n\n\n</div>"

/***/ }),

/***/ "./src/app/patient/patient.component.ts":
/*!**********************************************!*\
  !*** ./src/app/patient/patient.component.ts ***!
  \**********************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var PatientComponent = /** @class */ (function () {
    //current patient
    // banner: any;
    function PatientComponent(service, router, http, ref) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.http = http;
        this.ref = ref;
        this.ds = [];
        if ((this.service.ds) && (this.service.ds.length > 0)) {
            this.refreshDS();
        }
        this.service.ds_detector.subscribe(function (res) {
            if (res["ds_detector"]) {
                _this.refreshDS();
            }
        });
    }
    PatientComponent.prototype.refreshDS = function () {
        this.ds = this.service.ds;
        this.displayedColumns = ['index', 'id', 'name', 'gender', 'birthDate', "address"];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ds);
        // debugger;
    };
    PatientComponent.prototype.ngOnInit = function () {
    };
    PatientComponent.prototype.getRecord = function (a) {
        var _this = this;
        this.service.banner = a;
        this.service.banner_msg.next({ "banner": "changed" });
        //debugger;
        //this.banner = this.service.banner["name"];
        this.dataSource = null;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set('patient', a.id).set('_pretty', 'true');
        var url_encounter = "http://hapi.fhir.org/baseDstu3/Encounter";
        this.http.get(url_encounter, { params: params }).subscribe(function (res) {
            _this.service.encounter = res;
        }, function (err) {
        }, function () {
        });
        var url_condition = "http://hapi.fhir.org/baseDstu3/Condition";
        this.http.get(url_condition, { params: params }).subscribe(function (res) {
            _this.service.condition = res;
        }, function (err) {
        }, function () {
        });
        var url_procedure = "http://hapi.fhir.org/baseDstu3/Procedure";
        this.http.get(url_procedure, { params: params }).subscribe(function (res) {
            _this.service.procedure = res;
        }, function (err) {
        }, function () {
        });
        var url_appointment = "http://hapi.fhir.org/baseDstu3/Appointment";
        this.http.get(url_appointment, { params: params }).subscribe(function (res) {
            _this.service.appointment = res;
        }, function (err) {
        }, function () {
        });
        var url_AllergyIntolerance = "http://hapi.fhir.org/baseDstu3/AllergyIntolerance";
        this.http.get(url_AllergyIntolerance, { params: params }).subscribe(function (res) {
            _this.service.allergyIntolerance = res;
        }, function (err) {
        }, function () {
        });
        var url = "http://hapi.fhir.org/baseDstu3/MedicationStatement";
        this.http.get(url, { params: params }).subscribe(function (res) {
            _this.service.medicationstatement = res;
        }, function (err) {
        }, function () {
            _this.router.navigate(['/tables']);
        });
    };
    PatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/patient/patient.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./patient.component.css */ "./src/app/patient/patient.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "./src/app/procedure/procedure.component.css":
/*!***************************************************!*\
  !*** ./src/app/procedure/procedure.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2NlZHVyZS9wcm9jZWR1cmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/procedure/procedure.component.html":
/*!****************************************************!*\
  !*** ./src/app/procedure/procedure.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mydiv\" *ngIf=\"!nodata\" >\n  <table *ngIf=\"dataSource\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n    <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n    <!-- Position Column -->\n    <!-- <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> ID </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n      </ng-container> -->\n    <!-- start Column -->\n    <ng-container matColumnDef=\"procedure\">\n        <th mat-header-cell *matHeaderCellDef> procedure </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.procedure}} </td>\n      </ng-container>\n    <ng-container matColumnDef=\"start\">\n      <th mat-header-cell *matHeaderCellDef> Date </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.start}} </td>\n    </ng-container>\n    <!-- end Column\n    <ng-container matColumnDef=\"end\">\n      <th mat-header-cell *matHeaderCellDef> end </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.end}} </td>\n    </ng-container> -->\n    <!-- reasonReference Column -->\n    <ng-container matColumnDef=\"reasonReference\">\n      <th mat-header-cell *matHeaderCellDef> Reason </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.reasonReference}} </td>\n    </ng-container>\n    <!-- procedure Column -->\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n\n<div class=\"mydiv\" *ngIf=\"nodata\">\n  No records Founded\n</div>"

/***/ }),

/***/ "./src/app/procedure/procedure.component.ts":
/*!**************************************************!*\
  !*** ./src/app/procedure/procedure.component.ts ***!
  \**************************************************/
/*! exports provided: ProcedureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureComponent", function() { return ProcedureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




var ProcedureComponent = /** @class */ (function () {
    function ProcedureComponent(service) {
        this.service = service;
        this.procedure = [];
        ////debugger;
        if (this.service.procedure) {
            // debugger;
            var tmp_procedure = this.service.procedure.entry;
            if (tmp_procedure && tmp_procedure.length > 0) {
                this.nodata = false;
                for (var i = 0; i < tmp_procedure.length; i++) {
                    // debugger;
                    var obj = {};
                    try {
                        var start = tmp_procedure[i]["resource"]["performedPeriod"]["start"];
                        //let end = tmp_procedure[i]["resource"]["performedPeriod"]["end"];
                        //let text = dosage["text"];
                        // ("text is ", text);
                        obj["start"] = start;
                    }
                    catch (error) {
                        obj["start"] = "N/A";
                    }
                    try {
                        //let start = tmp_procedure[i]["resource"]["performedPeriod"]["start"];
                        var end = tmp_procedure[i]["resource"]["performedPeriod"]["end"];
                        //let text = dosage["text"];
                        // ("text is ", text);
                        obj["end"] = end;
                    }
                    catch (error) {
                        obj["end"] = "N/A";
                    }
                    // debugger;
                    var reasonReference = void 0;
                    try {
                        // debugger;
                        if (tmp_procedure[i]["resource"]["reasonReference"]) {
                            reasonReference = tmp_procedure[i]["resource"]["reasonReference"][0]["display"];
                        }
                        obj["reasonReference"] = reasonReference;
                    }
                    catch (error) {
                        obj["reasonReference"] = "N/A";
                    }
                    var procedure = void 0;
                    try {
                        if (tmp_procedure[i]["resource"]["code"]) {
                            procedure = tmp_procedure[i]["resource"]["code"]["text"];
                        }
                        obj["procedure"] = procedure;
                    }
                    catch (error) {
                        obj["procedure"] = "N/A";
                    }
                    this.procedure.push(obj);
                }
                this.displayedColumns = ["start", "reasonReference", "procedure"];
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.procedure);
            }
            else {
                this.nodata = true;
            }
        }
    }
    ProcedureComponent.prototype.ngOnInit = function () {
    };
    ProcedureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-procedure',
            template: __webpack_require__(/*! ./procedure.component.html */ "./src/app/procedure/procedure.component.html"),
            styles: [__webpack_require__(/*! ./procedure.component.css */ "./src/app/procedure/procedure.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], ProcedureComponent);
    return ProcedureComponent;
}());



/***/ }),

/***/ "./src/app/search-bar/search-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-inline my-2 my-lg-0\">\n  <input class=\"form-control mr-sm-2\" style=\"width:60vw;\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"\n    [(ngModel)]=\"patient_name\">\n  <button class=\"btn btn-outline-success my-2 my-sm-0 myhover\" style=\"width:8vw;  color: white\" type=\"button\" (click)=\"searchPatientByName()\">Search</button>\n</div>"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(http, service, router) {
        this.http = http;
        this.service = service;
        this.router = router;
        this.patient_name = "";
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.searchPatientByName = function () {
        var _this = this;
        this.service.ds = [];
        //public flag = true;
        //public ds = [];
        this.service.patient_detail = null;
        this.service.medicationstatement = null;
        this.service.encounter = null;
        this.service.condition = null;
        this.service.procedure = null;
        this.service.appointment = null;
        this.service.allergyIntolerance = null;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', this.patient_name).set('_pretty', 'true');
        this.http.get('http://hapi.fhir.org/baseDstu3/Patient', { params: params }).subscribe(function (res) {
            _this.getDataSourceFromEntry(res["entry"]);
            _this.service.ds_detector.next({ "ds_detector": "changed" });
            _this.router.navigate(["/patient"]);
        }, function (err) {
        }, function () {
        });
    };
    SearchBarComponent.prototype.getDataSourceFromEntry = function (entry) {
        for (var i = 0; i < entry.length; i++) {
            var patient = {};
            patient["index"] = i + "";
            patient["id"] = entry[i]["resource"]["id"];
            if (entry[i]["resource"]["name"]) {
                patient["name"] = entry[i]["resource"]["name"][0]["given"] + " " + entry[i]["resource"]["name"][0]["family"];
            }
            patient["gender"] = entry[i]["resource"]["gender"];
            patient["birthDate"] = entry[i]["resource"]["birthDate"];
            if (entry[i]["resource"]["address"]) {
                if (entry[i]["resource"]["address"][0]["line"])
                    if (entry[i]["resource"]["address"][0]["line"][0])
                        patient["address"] = entry[i]["resource"]["address"][0]["line"][0];
                if (entry[i]["resource"]["address"][0]["city"])
                    patient["address"] += " " + entry[i]["resource"]["address"][0]["city"];
                if (entry[i]["resource"]["address"][0]["country"])
                    patient["address"] += " " + entry[i]["resource"]["address"][0]["country"];
                if (entry[i]["resource"]["address"][0]["postalCode"])
                    patient["address"] += " " + entry[i]["resource"]["address"][0]["postalCode"];
            }
            this.service.ds.push(patient);
        }
    };
    SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/search-bar/search-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SharedService = /** @class */ (function () {
    function SharedService() {
        this.mysub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ds_detector = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.flag = true;
        this.ds = [];
        this.banner_msg = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/sortmed.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/sortmed.pipe.ts ***!
  \*********************************/
/*! exports provided: SortmedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortmedPipe", function() { return SortmedPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortmedPipe = /** @class */ (function () {
    function SortmedPipe() {
    }
    SortmedPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    SortmedPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sortmed'
        })
    ], SortmedPipe);
    return SortmedPipe;
}());



/***/ }),

/***/ "./src/app/tables/tables.component.css":
/*!*********************************************!*\
  !*** ./src/app/tables/tables.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-label, .mat-tab-label-active{\r\n    min-width: 0 !important;\r\n    padding: 3px !important;\r\n    margin: 3px  !important; \r\n    background: white;\r\n}\r\n\r\n/* Styles for the active tab label */\r\n\r\n.mat-tab-label.mat-tab-label-active {\r\n    /* min-width: 25px !important;\r\n    max-width: 90px !important; */\r\n    /* padding: 5px; */\r\n    /* background-color: transparent; */\r\n    width: 110px;\r\n    color:white;\r\n    background:#4CAF50;\r\n    font-weight: 600;\r\n    border-color: 1px solid black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBLG9DQUFvQzs7QUFDcEM7SUFDSTtpQ0FDNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZXtcclxuICAgIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDNweCAgIWltcG9ydGFudDsgXHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLyogU3R5bGVzIGZvciB0aGUgYWN0aXZlIHRhYiBsYWJlbCAqL1xyXG4ubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgICAvKiBtaW4td2lkdGg6IDI1cHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogOTBweCAhaW1wb3J0YW50OyAqL1xyXG4gICAgLyogcGFkZGluZzogNXB4OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7ICovXHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IzRDQUY1MDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXItY29sb3I6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/tables/tables.component.html":
/*!**********************************************!*\
  !*** ./src/app/tables/tables.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" style=\"background: #4CAF50;color:white\" >\n  <strong>Patient Information:</strong>  Name: {{banner_name | async}}  ID: {{banner_id | async}}  DOB: {{banner_dob | async}}\n</div>\n\n<div>\n    <mat-tab-group (selectedTabChange)=\"onLinkClick($event)\" >\n        <mat-tab label=\"Medication\"> <app-medicationstatement></app-medicationstatement> </mat-tab>\n        <mat-tab label=\"Encounter\"> <app-encounter></app-encounter> </mat-tab>\n        <mat-tab label=\"Appointment\"> <app-appointment></app-appointment> </mat-tab>\n        <mat-tab label=\"Condition\"> <app-condition></app-condition> </mat-tab>\n        <mat-tab label=\"Procedure\"> <app-procedure></app-procedure> </mat-tab>\n        <mat-tab label=\"Allergies\"> <app-allergyintolerance></app-allergyintolerance> </mat-tab>\n      </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./src/app/tables/tables.component.ts":
/*!********************************************!*\
  !*** ./src/app/tables/tables.component.ts ***!
  \********************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var TablesComponent = /** @class */ (function () {
    function TablesComponent(service, ref) {
        var _this = this;
        this.service = service;
        this.ref = ref;
        this.service.banner_msg.subscribe(function (res) {
            //debugger;
            console.log("res is ", res);
            _this.banner_name = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.service.banner["name"]);
            _this.banner_id = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.service.banner["id"]);
            _this.banner_dob = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.service.banner["birthDate"]);
            // this.service.banner["name"];
        });
    }
    TablesComponent.prototype.ngOnInit = function () {
    };
    TablesComponent.prototype.onLinkClick = function (a) {
        console.log('event => ', a);
        console.log('index => ', a.index);
        console.log('tab => ', a.tab);
    };
    TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.component.html */ "./src/app/tables/tables.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./tables.component.css */ "./src/app/tables/tables.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TablesComponent);
    return TablesComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\FHIRdemo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map