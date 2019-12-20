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

module.exports = ".home-panel{\r\n    vertical-align: center; \r\n    font-size: 20;\r\n    margin: 15;\r\n}\r\n\r\n.description-label{\r\n    margin-bottom: 15;\r\n}\r\n\r\nStackLayout {\r\n    background-image: url(\"~/images/background.jpg\");\r\n}\r\n"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Bookworm Reading Log\" class=\"title\">\r\n</ActionBar>\r\n\r\n\t<StackLayout class=\"home-panel\">\r\n\t\t<!--Add your page content here-->\r\n\t\t<Label textWrap=\"true\" text=\"Reading is awesome!\" class=\"h2 description-label\"></Label>\r\n\t\t<TextField hint=\"student name\" [(ngModel)]=\"name\"></TextField>\r\n\t\t<Button text=\"Let's log reading\" (tap)=\"login()\"></Button>\r\n\r\n\t</StackLayout>\r\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2xvZ3JlYWRpbmcuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9ob21lL2xvZ3JlYWRpbmcuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9sb2dyZWFkaW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvcmVhZGluZ2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRXRCO0FBQ1k7QUFFN0QsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0lBQ3RDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUseUVBQW1CLEVBQUU7Q0FDeEQsQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDaEI5Qiw4QkFBOEIsK0JBQStCLHVCQUF1QixtQkFBbUIsS0FBSywyQkFBMkIsMEJBQTBCLEtBQUsscUJBQXFCLDJEQUEyRCxLQUFLLEs7Ozs7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QyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsb0NBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCxpQ0FBRyxHQUFIO1FBQ0ksSUFBSSxrQkFBa0IsR0FBZSxJQUFJLDZEQUFVLEVBQUUsQ0FBQztRQUN0RCxrQkFBa0IsZ0JBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRWpELHdDQUF3QztRQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHNDQUFRLEdBQVI7SUFDQSxDQUFDOztnQkFwQ21CLHNEQUFNO2dCQUNQLDhEQUFjO2dCQUNILDRFQUFnQjs7SUFMckMsbUJBQW1CO1FBTi9CLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsS0FBSztZQUVmLDBGQUEwQzs7U0FFN0MsQ0FBQzt5Q0FJc0Isc0RBQU07WUFDUCw4REFBYztZQUNILDRFQUFnQjtPQUxyQyxtQkFBbUIsQ0F3Qy9CO0lBQUQsMEJBQUM7Q0FBQTtBQXhDK0I7Ozs7Ozs7OztBQ1ZoQztBQUFBO0FBQUE7SUFBQTtJQUlBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9nUmVhZGluZ0NvbXBvbmVudCB9IGZyb20gXCIuL2xvZ3JlYWRpbmcuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibG9nLzpuYW1lXCIsIGNvbXBvbmVudDogTG9nUmVhZGluZ0NvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyBcXHJcXG4gICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgbWFyZ2luOiAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXHJcXG59XFxyXFxuXFxyXFxuU3RhY2tMYXlvdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIn4vaW1hZ2VzL2JhY2tncm91bmQuanBnXFxcIik7XFxyXFxufVxcclxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkJvb2t3b3JtIFJlYWRpbmcgTG9nXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPlxcclxcbjwvQWN0aW9uQmFyPlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxyXFxuXFx0XFx0PCEtLUFkZCB5b3VyIHBhZ2UgY29udGVudCBoZXJlLS0+XFxyXFxuXFx0XFx0PExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCJSZWFkaW5nIGlzIGF3ZXNvbWUhXFxcIiBjbGFzcz1cXFwiaDIgZGVzY3JpcHRpb24tbGFiZWxcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0PFRleHRGaWVsZCBoaW50PVxcXCJzdHVkZW50IG5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lXFxcIj48L1RleHRGaWVsZD5cXHJcXG5cXHRcXHQ8QnV0dG9uIHRleHQ9XFxcIkxldCdzIGxvZyByZWFkaW5nXFxcIiAodGFwKT1cXFwibG9naW4oKVxcXCI+PC9CdXR0b24+XFxyXFxuXFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgKSB7XHJcbiAgICB9XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtgL2hvbWUvbG9nLyR7dGhpcy5uYW1lfWBdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ1JlYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2xvZ3JlYWRpbmcuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBIb21lUm91dGluZ01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgTG9nUmVhZGluZ0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiU3RhY2tMYXlvdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuRmxleGJveExheW91dCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuVGV4dEZpZWxkIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5MYWJlbCB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiUmVhZGluZyBMb2cgZm9yIHt7c3R1ZGVudG5hbWV9fVxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXHJcXG48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXHJcXG4gICAgPERhdGVQaWNrZXIgWyhuZ01vZGVsKV09XFxcInJlYWRpbmdMb2cuZGF0ZVxcXCI+XFxyXFxuICAgIDwvRGF0ZVBpY2tlcj5cXHJcXG4gICAgPFRleHRGaWVsZCBoaW50PVxcXCJib29rIHRpdGxlXFxcIiBbKG5nTW9kZWwpXT1cXFwicmVhZGluZ0xvZy50aXRsZVxcXCI+XFxyXFxuICAgIDwvVGV4dEZpZWxkPlxcclxcbiAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIm1pbnV0ZXNcXFwiIFsobmdNb2RlbCldPVxcXCJyZWFkaW5nTG9nLm1pbnV0ZXNcXFwiPlxcclxcbiAgICA8L1RleHRGaWVsZD5cXHJcXG4gICAgPEJ1dHRvbiBbdGV4dF09XFxcIidBZGQnXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAodGFwKT1cXFwiYWRkKClcXFwiPlxcclxcbiAgICA8L0J1dHRvbj5cXHJcXG5cXHJcXG4gICAgPEZsZXhib3hMYXlvdXQgYWxpZ25JdGVtcz1cXFwiZmxleC1zdGFydFxcXCIgd2lkdGg9XFxcIjMwMFxcXCIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgcmVhZGluZ0xvZ0xpc3RcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9e3tlbnRyeS5kYXRlLnRvRGF0ZVN0cmluZygpfX0+PC9MYWJlbD5cXHJcXG48IS0tICAgICAgICA8TGFiZWwgdGV4dD1cXFwiIFxcXCI+PC9MYWJlbD4gIC0tPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9e3tlbnRyeS50aXRsZX19PjwvTGFiZWw+XFxyXFxuPCEtLSAgICAgICAgPExhYmVsIHRleHQ9XFxcIiBcXFwiPjwvTGFiZWw+IC0tPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9J3t7ZW50cnkubWludXRlc319IG1pbnV0ZShzKSc+PC9MYWJlbD5cXHJcXG5cXHJcXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxcclxcblxcclxcbiAgICA8QnV0dG9uIFt0ZXh0XT1cXFwiJ1N1Ym1pdCdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICh0YXApPVxcXCJzdWJtaXQoKVxcXCI+XFxyXFxuICAgIDwvQnV0dG9uPlxcclxcblxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJlYWRpbmdMb2cgfSBmcm9tICcuLi9tb2RlbHMvcmVhZGluZ2xvZyc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTG9nXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dyZWFkaW5nLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbG9ncmVhZGluZy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dSZWFkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckVudHJpZXMoKTtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXNbXCJuYW1lXCJdKTtcclxuICAgICAgICAgICAgdGhpcy5zdHVkZW50bmFtZSA9IHBhcmFtc1tcIm5hbWVcIl07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWFkaW5nTG9nTGlzdDogQXJyYXk8UmVhZGluZ0xvZz4gPSBbXTtcclxuICAgIHJlYWRpbmdMb2c6IFJlYWRpbmdMb2cgPSBuZXcgUmVhZGluZ0xvZygpO1xyXG4gICAgc3R1ZGVudG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjbGVhckVudHJpZXMoKSB7XHJcbiAgICAgICAgdGhpcy5yZWFkaW5nTG9nLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMucmVhZGluZ0xvZy50aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yZWFkaW5nTG9nLm1pbnV0ZXMgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGQoKSB7XHJcbiAgICAgICAgbGV0IG5ld1JlYWRpbmdMb2dFbnRyeTogUmVhZGluZ0xvZyA9IG5ldyBSZWFkaW5nTG9nKCk7XHJcbiAgICAgICAgbmV3UmVhZGluZ0xvZ0VudHJ5ID0geyAuLi50aGlzLnJlYWRpbmdMb2cgfTtcclxuICAgICAgICB0aGlzLnJlYWRpbmdMb2dMaXN0LnB1c2gobmV3UmVhZGluZ0xvZ0VudHJ5KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yZWFkaW5nTG9nTGlzdCkpO1xyXG5cclxuICAgICAgICAvL2FsZXJ0KCdFbnRyeSBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgdGhpcy5jbGVhckVudHJpZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUmVhZGluZ0xvZyB7XHJcbiAgICBkYXRlOiBEYXRlO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIG1pbnV0ZXM6IG51bWJlcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=