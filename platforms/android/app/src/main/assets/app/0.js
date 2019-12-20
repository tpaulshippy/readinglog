(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");
/* harmony import */ var _logreading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./home/logreading.component.ts");




var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "log/:name", component: _logreading_component__WEBPACK_IMPORTED_MODULE_3__["LogReadingComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\r\n    vertical-align: center; \r\n    font-size: 20;\r\n    margin: 15;\r\n}\r\n\r\n.description-label{\r\n    margin-bottom: 15;\r\n}"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Bookworm Reading Log\" class=\"title\">\r\n</ActionBar>\r\n\r\n<GridLayout>\r\n\t<ScrollView>\r\n\t\t<StackLayout class=\"home-panel\">\r\n\t\t\t<!--Add your page content here-->\r\n\t\t\t<Label textWrap=\"true\" text=\"Reading is awesome!\" class=\"h2 description-label\"></Label>\r\n\t\t\t<TextField hint=\"student name\" [(ngModel)]=\"name\"></TextField>\r\n\t\t\t<Button text=\"Let's log reading\" (tap)=\"login()\"></Button>\r\n\r\n\t\t</StackLayout>\r\n\t</ScrollView>\r\n</GridLayout>"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
    }
    HomeComponent.prototype.login = function () {
        this.routerExtensions.navigate(["/home/log/" + this.name], { clearHistory: true });
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-sidedrawer/angular");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-ui-listview/angular");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-ui-calendar/angular");
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-ui-chart/angular");
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nativescript-ui-dataform/angular");
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nativescript-ui-autocomplete/angular");
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nativescript-ui-gauge/angular");
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./home/home.component.ts");
/* harmony import */ var _logreading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./home/logreading.component.ts");













var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["NativeScriptUIListViewModule"],
                nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__["NativeScriptUICalendarModule"],
                nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__["NativeScriptUIChartModule"],
                nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__["NativeScriptUIDataFormModule"],
                nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__["NativeScriptUIAutoCompleteTextViewModule"],
                nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__["NativeScriptUIGaugeModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NativeScriptFormsModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _logreading_component__WEBPACK_IMPORTED_MODULE_12__["LogReadingComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./home/logreading.component.css":
/***/ (function(module, exports) {

module.exports = "StackLayout {\r\n    background-color: white;\r\n}\r\n\r\nFlexboxLayout {\r\n    justify-content: space-around;\r\n    \r\n}\r\n\r\nTextField {\r\n    color: black;\r\n}\r\n\r\nLabel {\r\n    color: black;\r\n}"

/***/ }),

/***/ "./home/logreading.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Reading Log for {{studentname}}\" class=\"title\">\r\n</ActionBar>\r\n\r\n<StackLayout orientation=\"vertical\">\r\n    <DatePicker [(ngModel)]=\"readingLog.date\">\r\n    </DatePicker>\r\n    <TextField hint=\"book title\" [(ngModel)]=\"readingLog.title\">\r\n    </TextField>\r\n    <TextField hint=\"minutes\" [(ngModel)]=\"readingLog.minutes\">\r\n    </TextField>\r\n    <Button [text]=\"'Add'\" class=\"btn btn-primary\" (tap)=\"add()\">\r\n    </Button>\r\n\r\n    <FlexboxLayout alignItems=\"flex-start\" width=\"300\" *ngFor=\"let entry of readingLogList\">\r\n        <Label text={{entry.date.toDateString()}}></Label>\r\n<!--        <Label text=\" \"></Label>  -->\r\n        <Label text={{entry.title}}></Label>\r\n<!--        <Label text=\" \"></Label> -->\r\n        <Label text='{{entry.minutes}} minute(s)'></Label>\r\n\r\n    </FlexboxLayout>\r\n\r\n    <Button [text]=\"'Submit'\" class=\"btn btn-primary\" (tap)=\"submit()\">\r\n    </Button>\r\n\r\n</StackLayout>"

/***/ }),

/***/ "./home/logreading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogReadingComponent", function() { return LogReadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_readinglog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./models/readinglog.ts");




var LogReadingComponent = /** @class */ (function () {
    function LogReadingComponent(router, route, routerExtensions) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.readingLogList = [];
        this.readingLog = new _models_readinglog__WEBPACK_IMPORTED_MODULE_3__["ReadingLog"]();
        this.clearEntries();
        this.route.params.subscribe(function (params) {
            console.log(params["name"]);
            _this.studentname = params["name"];
        });
    }
    LogReadingComponent.prototype.clearEntries = function () {
        this.readingLog.date = new Date();
        this.readingLog.title = "";
        this.readingLog.minutes = undefined;
    };
    LogReadingComponent.prototype.submit = function () {
    };
    LogReadingComponent.prototype.add = function () {
        var newReadingLogEntry = new _models_readinglog__WEBPACK_IMPORTED_MODULE_3__["ReadingLog"]();
        newReadingLogEntry = __assign({}, this.readingLog);
        this.readingLogList.push(newReadingLogEntry);
        console.log(JSON.stringify(this.readingLogList));
        //alert('Entry submitted successfully');
        this.clearEntries();
    };
    LogReadingComponent.prototype.ngOnInit = function () {
    };
    LogReadingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    LogReadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Log",
            template: __importDefault(__webpack_require__("./home/logreading.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/logreading.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], LogReadingComponent);
    return LogReadingComponent;
}());



/***/ }),

/***/ "./models/readinglog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingLog", function() { return ReadingLog; });
var ReadingLog = /** @class */ (function () {
    function ReadingLog() {
    }
    return ReadingLog;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2xvZ3JlYWRpbmcuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9ob21lL2xvZ3JlYWRpbmcuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9sb2dyZWFkaW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvcmVhZGluZ2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRXRCO0FBQ1k7QUFFN0QsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0lBQ3RDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUseUVBQW1CLEVBQUU7Q0FDeEQsQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDaEI5Qiw4QkFBOEIsK0JBQStCLHVCQUF1QixtQkFBbUIsS0FBSywyQkFBMkIsMEJBQTBCLEtBQUssQzs7Ozs7OztBQ0F0SyxpaEI7Ozs7Ozs7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QUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsb0NBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCxpQ0FBRyxHQUFIO1FBQ0ksSUFBSSxrQkFBa0IsR0FBZSxJQUFJLDZEQUFVLEVBQUUsQ0FBQztRQUN0RCxrQkFBa0IsZ0JBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRWpELHdDQUF3QztRQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHNDQUFRLEdBQVI7SUFDQSxDQUFDOztnQkFwQ21CLHNEQUFNO2dCQUNQLDhEQUFjO2dCQUNILDRFQUFnQjs7SUFMckMsbUJBQW1CO1FBTi9CLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsS0FBSztZQUVmLDBGQUEwQzs7U0FFN0MsQ0FBQzt5Q0FJc0Isc0RBQU07WUFDUCw4REFBYztZQUNILDRFQUFnQjtPQUxyQyxtQkFBbUIsQ0F3Qy9CO0lBQUQsMEJBQUM7Q0FBQTtBQXhDK0I7Ozs7Ozs7OztBQ1ZoQztBQUFBO0FBQUE7SUFBQTtJQUlBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9nUmVhZGluZ0NvbXBvbmVudCB9IGZyb20gXCIuL2xvZ3JlYWRpbmcuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibG9nLzpuYW1lXCIsIGNvbXBvbmVudDogTG9nUmVhZGluZ0NvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyBcXHJcXG4gICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgbWFyZ2luOiAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiQm9va3dvcm0gUmVhZGluZyBMb2dcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuPEdyaWRMYXlvdXQ+XFxyXFxuXFx0PFNjcm9sbFZpZXc+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXHJcXG5cXHRcXHRcXHQ8IS0tQWRkIHlvdXIgcGFnZSBjb250ZW50IGhlcmUtLT5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIlJlYWRpbmcgaXMgYXdlc29tZSFcXFwiIGNsYXNzPVxcXCJoMiBkZXNjcmlwdGlvbi1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHQ8VGV4dEZpZWxkIGhpbnQ9XFxcInN0dWRlbnQgbmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcIm5hbWVcXFwiPjwvVGV4dEZpZWxkPlxcclxcblxcdFxcdFxcdDxCdXR0b24gdGV4dD1cXFwiTGV0J3MgbG9nIHJlYWRpbmdcXFwiICh0YXApPVxcXCJsb2dpbigpXFxcIj48L0J1dHRvbj5cXHJcXG5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvU2Nyb2xsVmlldz5cXHJcXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICkge1xyXG4gICAgfVxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbYC9ob21lL2xvZy8ke3RoaXMubmFtZX1gXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMb2dSZWFkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dyZWFkaW5nLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ1JlYWRpbmdDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlN0YWNrTGF5b3V0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbkZsZXhib3hMYXlvdXQge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblRleHRGaWVsZCB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuTGFiZWwge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIlJlYWRpbmcgTG9nIGZvciB7e3N0dWRlbnRuYW1lfX1cXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxyXFxuICAgIDxEYXRlUGlja2VyIFsobmdNb2RlbCldPVxcXCJyZWFkaW5nTG9nLmRhdGVcXFwiPlxcclxcbiAgICA8L0RhdGVQaWNrZXI+XFxyXFxuICAgIDxUZXh0RmllbGQgaGludD1cXFwiYm9vayB0aXRsZVxcXCIgWyhuZ01vZGVsKV09XFxcInJlYWRpbmdMb2cudGl0bGVcXFwiPlxcclxcbiAgICA8L1RleHRGaWVsZD5cXHJcXG4gICAgPFRleHRGaWVsZCBoaW50PVxcXCJtaW51dGVzXFxcIiBbKG5nTW9kZWwpXT1cXFwicmVhZGluZ0xvZy5taW51dGVzXFxcIj5cXHJcXG4gICAgPC9UZXh0RmllbGQ+XFxyXFxuICAgIDxCdXR0b24gW3RleHRdPVxcXCInQWRkJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKHRhcCk9XFxcImFkZCgpXFxcIj5cXHJcXG4gICAgPC9CdXR0b24+XFxyXFxuXFxyXFxuICAgIDxGbGV4Ym94TGF5b3V0IGFsaWduSXRlbXM9XFxcImZsZXgtc3RhcnRcXFwiIHdpZHRoPVxcXCIzMDBcXFwiICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIHJlYWRpbmdMb2dMaXN0XFxcIj5cXHJcXG4gICAgICAgIDxMYWJlbCB0ZXh0PXt7ZW50cnkuZGF0ZS50b0RhdGVTdHJpbmcoKX19PjwvTGFiZWw+XFxyXFxuPCEtLSAgICAgICAgPExhYmVsIHRleHQ9XFxcIiBcXFwiPjwvTGFiZWw+ICAtLT5cXHJcXG4gICAgICAgIDxMYWJlbCB0ZXh0PXt7ZW50cnkudGl0bGV9fT48L0xhYmVsPlxcclxcbjwhLS0gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCIgXFxcIj48L0xhYmVsPiAtLT5cXHJcXG4gICAgICAgIDxMYWJlbCB0ZXh0PSd7e2VudHJ5Lm1pbnV0ZXN9fSBtaW51dGUocyknPjwvTGFiZWw+XFxyXFxuXFxyXFxuICAgIDwvRmxleGJveExheW91dD5cXHJcXG5cXHJcXG4gICAgPEJ1dHRvbiBbdGV4dF09XFxcIidTdWJtaXQnXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAodGFwKT1cXFwic3VibWl0KClcXFwiPlxcclxcbiAgICA8L0J1dHRvbj5cXHJcXG5cXHJcXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSZWFkaW5nTG9nIH0gZnJvbSAnLi4vbW9kZWxzL3JlYWRpbmdsb2cnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkxvZ1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9ncmVhZGluZy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvZ3JlYWRpbmcuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nUmVhZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJFbnRyaWVzKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW1zW1wibmFtZVwiXSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3R1ZGVudG5hbWUgPSBwYXJhbXNbXCJuYW1lXCJdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVhZGluZ0xvZ0xpc3Q6IEFycmF5PFJlYWRpbmdMb2c+ID0gW107XHJcbiAgICByZWFkaW5nTG9nOiBSZWFkaW5nTG9nID0gbmV3IFJlYWRpbmdMb2coKTtcclxuICAgIHN0dWRlbnRuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY2xlYXJFbnRyaWVzKCkge1xyXG4gICAgICAgIHRoaXMucmVhZGluZ0xvZy5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLnJlYWRpbmdMb2cudGl0bGUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucmVhZGluZ0xvZy5taW51dGVzID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkKCkge1xyXG4gICAgICAgIGxldCBuZXdSZWFkaW5nTG9nRW50cnk6IFJlYWRpbmdMb2cgPSBuZXcgUmVhZGluZ0xvZygpO1xyXG4gICAgICAgIG5ld1JlYWRpbmdMb2dFbnRyeSA9IHsgLi4udGhpcy5yZWFkaW5nTG9nIH07XHJcbiAgICAgICAgdGhpcy5yZWFkaW5nTG9nTGlzdC5wdXNoKG5ld1JlYWRpbmdMb2dFbnRyeSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucmVhZGluZ0xvZ0xpc3QpKTtcclxuXHJcbiAgICAgICAgLy9hbGVydCgnRW50cnkgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJFbnRyaWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFJlYWRpbmdMb2cge1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBtaW51dGVzOiBudW1iZXI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9