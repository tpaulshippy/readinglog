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
/* harmony import */ var _logreading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/logreading.component.ts");



var routes = [
    { path: "", component: _logreading_component__WEBPACK_IMPORTED_MODULE_2__["LogReadingComponent"] },
    { path: "log/:name", component: _logreading_component__WEBPACK_IMPORTED_MODULE_2__["LogReadingComponent"] }
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

module.exports = ".home-panel{\r\n    vertical-align: center; \r\n    font-size: 20;\r\n    margin: 15;\r\n}\r\n\r\n.description-label{\r\n    margin-bottom: 15;\r\n    margin-left: 10;\r\n    color: black;\r\n}\r\n\r\nStackLayout {\r\n    background-image: url(\"~/images/background.jpg\");\r\n    background-size: contain;\r\n    height: 600;\r\n}\r\n"

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
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("nativescript-angular/http-client");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./home/home.component.ts");
/* harmony import */ var _logreading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./home/logreading.component.ts");
/* harmony import */ var _logreading_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./home/logreading.service.ts");















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
                _home_routing_module__WEBPACK_IMPORTED_MODULE_11__["HomeRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NativeScriptFormsModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_10__["NativeScriptHttpClientModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _logreading_component__WEBPACK_IMPORTED_MODULE_13__["LogReadingComponent"]
            ],
            providers: [
                _logreading_service__WEBPACK_IMPORTED_MODULE_14__["LogReadingService"]
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

module.exports = "<ActionBar title=\"Reading Log for {{studentname}}\" class=\"title\">\r\n</ActionBar>\r\n\r\n<StackLayout orientation=\"vertical\">\r\n    <!-- <Button [text]=\"'Scan'\" class=\"btn btn-primary\" (tap)=\"scan()\">\r\n    </Button> -->\r\n    <DatePicker [(ngModel)]=\"readingLog.date\" style=\"height: 120; background-color: darkgray;\">\r\n    </DatePicker>\r\n    <TextField hint=\"book title\" [(ngModel)]=\"readingLog.title\">\r\n    </TextField>\r\n    <TextField hint=\"minutes\" [(ngModel)]=\"readingLog.minutes\">\r\n    </TextField>\r\n    <Button [text]=\"'Add'\" class=\"btn btn-primary\" (tap)=\"add()\">\r\n    </Button>\r\n\r\n    <FlexboxLayout alignItems=\"flex-start\" width=\"300\" *ngFor=\"let entry of readingLogList\">\r\n        <Label text='{{entry.date | date}}'></Label>\r\n<!--        <Label text=\" \"></Label>  -->\r\n        <Label text={{entry.title}}></Label>\r\n<!--        <Label text=\" \"></Label> -->\r\n        <Label text='{{entry.minutes}} minute(s)'></Label>\r\n\r\n    </FlexboxLayout>\r\n\r\n    <Button [text]=\"'Submit'\" class=\"btn btn-primary\" (tap)=\"submit()\">\r\n    </Button>\r\n\r\n</StackLayout>"

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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./models/index.ts");
/* harmony import */ var _logreading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./home/logreading.service.ts");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-angular/element-registry");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_5__);






Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_5__["registerElement"])("BarcodeScanner", function () { return __webpack_require__("../node_modules/nativescript-barcodescanner/barcodescanner.js").BarcodeScannerView; });
var LogReadingComponent = /** @class */ (function () {
    function LogReadingComponent(router, route, routerExtensions, readingLogService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.readingLogService = readingLogService;
        this.readingLogList = [];
        this.readingLog = new _models__WEBPACK_IMPORTED_MODULE_3__["LogReading"]();
        this.clearEntries();
        this.route.params.subscribe(function (params) {
            console.log(params["name"]);
            _this.studentname = params["name"];
        });
    }
    LogReadingComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    LogReadingComponent.prototype.refresh = function () {
        var _this = this;
        this.readingLogService.getReadingLog()
            .subscribe(function (readingLog) {
            _this.readingLogDto = readingLog;
            for (var _i = 0, _a = _this.readingLogDto.entries; _i < _a.length; _i++) {
                var entry = _a[_i];
                var newEntry = new _models__WEBPACK_IMPORTED_MODULE_3__["LogReading"]();
                newEntry.date = entry.readingDate;
                newEntry.title = entry.publicationTitle;
                newEntry.minutes = entry.duration;
                _this.readingLogList.push(newEntry);
            }
            console.log(JSON.stringify(_this.readingLogList));
            //              this.readingLogDto.entries = _.orderBy(this.readingLogDto.entries, ['readingDate'], ['asc']);
        }, function (error) { return console.log(error); }, function () { });
    };
    LogReadingComponent.prototype.clearEntries = function () {
        this.readingLog.date = new Date();
        this.readingLog.title = "";
        this.readingLog.minutes = undefined;
    };
    LogReadingComponent.prototype.submit = function () {
        var entries = this.readingLogList.filter(function (i) { return i.new === true; }).map(function (i) {
            var entry = {};
            entry.readingDate = i.date;
            entry.publicationTitle = i.title;
            entry.duration = i.minutes;
            return entry;
        });
        this.readingLogService.sendReadingLogEntries(entries).subscribe(function (l) {
        }, function (error) { return console.log(error); }, function () { });
    };
    LogReadingComponent.prototype.add = function () {
        var newReadingLogEntry = new _models__WEBPACK_IMPORTED_MODULE_3__["LogReading"]();
        newReadingLogEntry = __assign({}, this.readingLog);
        newReadingLogEntry.new = true;
        this.readingLogList.push(newReadingLogEntry);
        console.log(JSON.stringify(this.readingLogList));
        //alert('Entry submitted successfully');
        this.clearEntries();
    };
    LogReadingComponent.prototype.scan = function () {
    };
    LogReadingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _logreading_service__WEBPACK_IMPORTED_MODULE_4__["LogReadingService"] }
    ]; };
    LogReadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Log",
            template: __importDefault(__webpack_require__("./home/logreading.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/logreading.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"],
            _logreading_service__WEBPACK_IMPORTED_MODULE_4__["LogReadingService"]])
    ], LogReadingComponent);
    return LogReadingComponent;
}());



/***/ }),

/***/ "./home/logreading.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogReadingService", function() { return LogReadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);




var LogReadingService = /** @class */ (function () {
    function LogReadingService(http) {
        this.http = http;
        this.serviceUrl = 'http://reading-log.azurewebsites.net/api/readinglogs/99';
    }
    LogReadingService.prototype.getReadingLog = function () {
        return this.http.get(this.serviceUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getReadingLog")));
    };
    LogReadingService.prototype.sendReadingLogEntries = function (entries) {
        return this.http.post(this.serviceUrl, entries, {
            headers: {
                "Content-Type": "application/json"
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getReadingLog")));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    LogReadingService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    LogReadingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LogReadingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LogReadingService);
    return LogReadingService;
}());



/***/ }),

/***/ "./models/classEnrollment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassEnrollment", function() { return ClassEnrollment; });
/**
 * This class represents the concept of an enrollment in our application.
 * An enrollment contains the class section information and the students
 * within the section.
 *
 * @author Union Hills Software
 * @date   December 8, 2018
 *
 */
var ClassEnrollment = /** @class */ (function () {
    function ClassEnrollment() {
    }
    return ClassEnrollment;
}());



/***/ }),

/***/ "./models/classSection.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassSection", function() { return ClassSection; });
/**
 * This class represents the concept of class section in our application.
 * A class section is the equivalent of the definition for a school class.
 * Note that it does not contain the class roster.  This is part of the
 * ClassEnrollment object.
 *
 * @author Union Hills Software
 * @date   December 8, 2018
 *
 */
var ClassSection = /** @class */ (function () {
    function ClassSection() {
    }
    return ClassSection;
}());



/***/ }),

/***/ "./models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _readingEntry_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./models/readingEntry.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReadingEntry", function() { return _readingEntry_model__WEBPACK_IMPORTED_MODULE_0__["ReadingEntry"]; });

/* harmony import */ var _readingLog_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./models/readingLog.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReadingLog", function() { return _readingLog_model__WEBPACK_IMPORTED_MODULE_1__["ReadingLog"]; });

/* harmony import */ var _classEnrollment_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./models/classEnrollment.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassEnrollment", function() { return _classEnrollment_model__WEBPACK_IMPORTED_MODULE_2__["ClassEnrollment"]; });

/* harmony import */ var _classSection_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./models/classSection.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassSection", function() { return _classSection_model__WEBPACK_IMPORTED_MODULE_3__["ClassSection"]; });

/* harmony import */ var _instructor_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./models/instructor.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Instructor", function() { return _instructor_model__WEBPACK_IMPORTED_MODULE_4__["Instructor"]; });

/* harmony import */ var _student_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./models/student.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return _student_model__WEBPACK_IMPORTED_MODULE_5__["Student"]; });

/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./models/user.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user_model__WEBPACK_IMPORTED_MODULE_6__["User"]; });

/* harmony import */ var _log_reading_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./models/log-reading.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogReading", function() { return _log_reading_model__WEBPACK_IMPORTED_MODULE_7__["LogReading"]; });











/***/ }),

/***/ "./models/instructor.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instructor", function() { return Instructor; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./models/user.model.ts");

/**
 * This class represents the concept of an Instructor in our application.
 * Rather than have a "role" attribute on our User object, we've
 * created an actual class which defines the instructor.
 *
 * @author Union Hills Software
 * @date   December 8, 2018
 *
 */
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Instructor;
}(_user_model__WEBPACK_IMPORTED_MODULE_0__["User"]));



/***/ }),

/***/ "./models/log-reading.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogReading", function() { return LogReading; });
var LogReading = /** @class */ (function () {
    function LogReading() {
    }
    return LogReading;
}());



/***/ }),

/***/ "./models/readingEntry.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingEntry", function() { return ReadingEntry; });
/**
 * This class represents the concept of a reading entry in
 * our application.  A reading entry represents an entry in
 * the reading log.
 *
 * @author Union Hills Software
 * @date   November 11, 2018
 *
 */
var ReadingEntry = /** @class */ (function () {
    function ReadingEntry() {
    }
    return ReadingEntry;
}());



/***/ }),

/***/ "./models/readingLog.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingLog", function() { return ReadingLog; });
/**
 * This class represents the concept of a Reading Log in
 * our application.  A Reading Log represents a log of
 * a student's reading activity.
 *
 * @author Union Hills Software
 * @date   November 11, 2018
 *
 */
var ReadingLog = /** @class */ (function () {
    function ReadingLog() {
    }
    return ReadingLog;
}());



/***/ }),

/***/ "./models/student.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./models/user.model.ts");

/**
 * This class represents the concept of a student in our application.
 * Rather than have a "role" attribute on our User object, we've
 * created an actual class which defines the student.
 *
 * @author Union Hills Software
 * @date   December 8, 2018
 *
 */
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Student;
}(_user_model__WEBPACK_IMPORTED_MODULE_0__["User"]));



/***/ }),

/***/ "./models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/**
 * This class represents the concept of a user in our application.
 *
 * @author Union Hills Software
 * @date   December 8, 2018
 *
 */
// ToDo: Determine if this should be an abstract class or
// even an interface
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2xvZ3JlYWRpbmcuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9ob21lL2xvZ3JlYWRpbmcuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9sb2dyZWFkaW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2xvZ3JlYWRpbmcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvY2xhc3NFbnJvbGxtZW50Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL21vZGVscy9jbGFzc1NlY3Rpb24ubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL21vZGVscy9pbnN0cnVjdG9yLm1vZGVsLnRzIiwid2VicGFjazovLy8uL21vZGVscy9sb2ctcmVhZGluZy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvcmVhZGluZ0VudHJ5Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL21vZGVscy9yZWFkaW5nTG9nLm1vZGVsLnRzIiwid2VicGFjazovLy8uL21vZGVscy9zdHVkZW50Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL21vZGVscy91c2VyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBR1Y7QUFFN0QsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSx5RUFBbUIsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHlFQUFtQixFQUFFO0NBQ3hELENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2hCOUIsOEJBQThCLCtCQUErQix1QkFBdUIsbUJBQW1CLEtBQUssMkJBQTJCLDBCQUEwQix3QkFBd0IscUJBQXFCLEtBQUsscUJBQXFCLDJEQUEyRCxpQ0FBaUMsb0JBQW9CLEtBQUssSzs7Ozs7OztBQ0E3VixtYzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ1Q7QUFDc0I7QUFRL0Q7SUFFSSx1QkFDWSxNQUFjLEVBQ2QsZ0JBQWtDO1FBRGxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRTlDLENBQUM7SUFHRCw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWEsSUFBSSxDQUFDLElBQU0sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDOztnQkFYbUIsc0RBQU07Z0JBQ0ksNEVBQWdCOztJQUpyQyxhQUFhO1FBTnpCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUVoQixvRkFBb0M7O1NBRXZDLENBQUM7eUNBSXNCLHNEQUFNO1lBQ0ksNEVBQWdCO09BSnJDLGFBQWEsQ0FlekI7SUFBRCxvQkFBQztDQUFBO0FBZnlCOzs7Ozs7Ozs7QUNWMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFDWTtBQUNhO0FBQ0o7QUFDQTtBQUNOO0FBQ007QUFDZ0I7QUFDdEI7QUFDTDtBQUNXO0FBRXRCO0FBQ1Q7QUFDWTtBQUNKO0FBMkJ6RDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBekJ0Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlHQUE4QjtnQkFDOUIsNkZBQTRCO2dCQUM1Qiw2RkFBNEI7Z0JBQzVCLHVGQUF5QjtnQkFDekIsNkZBQTRCO2dCQUM1Qiw2R0FBd0M7Z0JBQ3hDLHVGQUF5QjtnQkFDekIsb0ZBQXdCO2dCQUN4Qix1RUFBaUI7Z0JBQ2pCLGtGQUF1QjtnQkFDdkIsOEZBQTRCO2FBQy9CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhEQUFhO2dCQUNiLDBFQUFtQjthQUN0QjtZQUNELFNBQVMsRUFBRTtnQkFDUCxzRUFBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUMxQ3ZCLCtCQUErQixnQ0FBZ0MsS0FBSyx1QkFBdUIsc0NBQXNDLGFBQWEsbUJBQW1CLHFCQUFxQixLQUFLLGVBQWUscUJBQXFCLEtBQUssQzs7Ozs7OztBQ0FwTyx1REFBdUQsYUFBYSxnUUFBZ1EsNEJBQTRCLGdiQUFnYixtQkFBbUIsbUZBQW1GLGFBQWEsa0ZBQWtGLGVBQWUsNks7Ozs7Ozs7O0FDQXArQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDTztBQUNNO0FBQ1o7QUFDTTtBQUNlO0FBQ3hFLDZGQUFlLENBQUMsZ0JBQWdCLEVBQUUsY0FBTSwwQkFBTyxDQUFDLCtEQUE2QixDQUFDLENBQUMsa0JBQWtCLEVBQXpELENBQXlELENBQUMsQ0FBQztBQVNuRztJQUVJLDZCQUNZLE1BQWMsRUFDZCxLQUFxQixFQUNyQixnQkFBa0MsRUFDbEMsaUJBQW9DO1FBSmhELGlCQVdDO1FBVlcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVFoRCxtQkFBYyxHQUFzQixFQUFFLENBQUM7UUFDdkMsZUFBVSxHQUFlLElBQUksa0RBQVUsRUFBRSxDQUFDO1FBUHRDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDNUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBTU0sc0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0scUNBQU8sR0FBZDtRQUFBLGlCQW9CQztRQW5CRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFO2FBQ2pDLFNBQVMsQ0FBQyxvQkFBVTtZQUNqQixLQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztZQUVoQyxLQUFrQixVQUEwQixFQUExQixVQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBMUIsY0FBMEIsRUFBMUIsSUFBMEIsRUFBRTtnQkFBekMsSUFBSSxLQUFLO2dCQUNWLElBQU0sUUFBUSxHQUFlLElBQUksa0RBQVUsRUFBRSxDQUFDO2dCQUU5QyxRQUFRLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7Z0JBQ2xDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO2dCQUN4QyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7Z0JBRWxDLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3RDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBRWpELDZHQUE2RztRQUNqSCxDQUFDLEVBQ0QsVUFBQyxLQUFVLElBQUssY0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsRUFDbEMsY0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsMENBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsb0NBQU0sR0FBTjtRQUNJLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFdBQUMsSUFBRyxRQUFDLENBQUMsR0FBRyxLQUFLLElBQUksRUFBZCxDQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQztZQUNoRSxJQUFJLEtBQUssR0FBUSxFQUFFLENBQUM7WUFDcEIsS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUMzQixPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBQztRQUVqRSxDQUFDLEVBQ0QsVUFBQyxLQUFVLElBQUssY0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsRUFDbEMsY0FBTyxDQUFDLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRCxpQ0FBRyxHQUFIO1FBQ0ksSUFBSSxrQkFBa0IsR0FBZSxJQUFJLGtEQUFVLEVBQUUsQ0FBQztRQUN0RCxrQkFBa0IsZ0JBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDO1FBQzVDLGtCQUFrQixDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUU3QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFakQsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsa0NBQUksR0FBSjtJQUVBLENBQUM7O2dCQTdFbUIsc0RBQU07Z0JBQ1AsOERBQWM7Z0JBQ0gsNEVBQWdCO2dCQUNmLHFFQUFpQjs7SUFOdkMsbUJBQW1CO1FBTi9CLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsS0FBSztZQUVmLDBGQUEwQzs7U0FFN0MsQ0FBQzt5Q0FJc0Isc0RBQU07WUFDUCw4REFBYztZQUNILDRFQUFnQjtZQUNmLHFFQUFpQjtPQU52QyxtQkFBbUIsQ0FpRi9CO0lBQUQsMEJBQUM7Q0FBQTtBQWpGK0I7Ozs7Ozs7OztBQ2ZoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUMwQjtBQUNuQjtBQUNEO0FBT2pEO0lBR0ksMkJBQ1ksSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQixlQUFVLEdBQUcseURBQXlELENBQUM7SUFJM0UsQ0FBQztJQUVFLHlDQUFhLEdBQXBCO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUNsRCwwREFBRyxDQUFDLGNBQUksSUFBSSxjQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQTNDLENBQTJDLENBQUMsRUFDeEQsaUVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFhLGVBQWUsQ0FBQyxDQUFDLENBQzVELENBQUM7SUFDTixDQUFDO0lBR00saURBQXFCLEdBQTVCLFVBQTZCLE9BQU87UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBYSxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRTtZQUN4RCxPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjthQUNyQztTQUNKLENBQUMsQ0FBQyxJQUFJLENBQ0gsMERBQUcsQ0FBQyxjQUFJLElBQUksY0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLEVBQ3hELGlFQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBYSxlQUFlLENBQUMsQ0FBQyxDQUM1RCxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssdUNBQVcsR0FBbkIsVUFBd0IsU0FBdUIsRUFBRSxNQUFVO1FBQW5DLG1EQUF1QjtRQUMzQyxPQUFPLFVBQUMsS0FBVTtZQUVkLHdEQUF3RDtZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO1lBRS9DLDhEQUE4RDtZQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFJLFNBQVMsaUJBQVksS0FBSyxDQUFDLE9BQVMsQ0FBQyxDQUFDO1lBRXJELHlEQUF5RDtZQUN6RCxPQUFPLCtDQUFFLENBQUMsTUFBVyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Z0JBeENpQiwrREFBVTs7SUFKbkIsaUJBQWlCO1FBSDdCLGdFQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO3lDQUtvQiwrREFBVTtPQUpuQixpQkFBaUIsQ0E2QzdCO0lBQUQsd0JBQUM7Q0FBQTtBQTdDNkI7Ozs7Ozs7OztBQ045QjtBQUFBO0FBQUE7Ozs7Ozs7O0dBUUc7QUFFSDtJQUFBO0lBUUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7OztBQ2xCRDtBQUFBO0FBQUE7Ozs7Ozs7OztHQVNHO0FBRUg7SUFBQTtJQUtBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7QUNuQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDRjtBQUNLO0FBQ0g7QUFDRjtBQUNIO0FBQ0g7QUFDTzs7Ozs7Ozs7O0FDUHBDO0FBQUE7QUFBQTtBQUFvQztBQUVwQzs7Ozs7Ozs7R0FRRztBQUVIO0lBQWdDLDhCQUFJO0lBQXBDOztJQUVBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQ0FGK0IsZ0RBQUksR0FFbkM7Ozs7Ozs7Ozs7QUNmRDtBQUFBO0FBQUE7SUFBQTtJQUtBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7QUNIRDtBQUFBO0FBQUE7Ozs7Ozs7O0dBUUc7QUFFSDtJQUFBO0lBV0EsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7OztBQ25CRDtBQUFBO0FBQUE7Ozs7Ozs7O0dBUUc7QUFFSDtJQUFBO0lBV0EsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7OztBQ3hCRDtBQUFBO0FBQUE7QUFBb0M7QUFFcEM7Ozs7Ozs7O0dBUUc7QUFFSDtJQUE2QiwyQkFBSTtJQUFqQzs7SUFFQSxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQ0FGNEIsZ0RBQUksR0FFaEM7Ozs7Ozs7Ozs7QUNiRDtBQUFBO0FBQUE7Ozs7OztHQU1HO0FBRUgseURBQXlEO0FBQ3pELG9CQUFvQjtBQUNwQjtJQUFBO0lBU0EsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ1JlYWRpbmdDb21wb25lbnQgfSBmcm9tIFwiLi9sb2dyZWFkaW5nLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogTG9nUmVhZGluZ0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImxvZy86bmFtZVwiLCBjb21wb25lbnQ6IExvZ1JlYWRpbmdDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgXFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIG1hcmdpbjogMTU7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5TdGFja0xheW91dCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwifi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBoZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiQm9va3dvcm0gUmVhZGluZyBMb2dcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXHJcXG5cXHRcXHQ8IS0tQWRkIHlvdXIgcGFnZSBjb250ZW50IGhlcmUtLT5cXHJcXG5cXHRcXHQ8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIlJlYWRpbmcgaXMgYXdlc29tZSFcXFwiIGNsYXNzPVxcXCJoMiBkZXNjcmlwdGlvbi1sYWJlbFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHQ8VGV4dEZpZWxkIGhpbnQ9XFxcInN0dWRlbnQgbmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcIm5hbWVcXFwiPjwvVGV4dEZpZWxkPlxcclxcblxcdFxcdDxCdXR0b24gdGV4dD1cXFwiTGV0J3MgbG9nIHJlYWRpbmdcXFwiICh0YXApPVxcXCJsb2dpbigpXFxcIj48L0J1dHRvbj5cXHJcXG5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICApIHtcclxuICAgIH1cclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW2AvaG9tZS9sb2cvJHt0aGlzLm5hbWV9YF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMb2dSZWFkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dyZWFkaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ1JlYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9sb2dyZWFkaW5nLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ1JlYWRpbmdDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBMb2dSZWFkaW5nU2VydmljZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiU3RhY2tMYXlvdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuRmxleGJveExheW91dCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuVGV4dEZpZWxkIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5MYWJlbCB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiUmVhZGluZyBMb2cgZm9yIHt7c3R1ZGVudG5hbWV9fVxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXHJcXG48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXHJcXG4gICAgPCEtLSA8QnV0dG9uIFt0ZXh0XT1cXFwiJ1NjYW4nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAodGFwKT1cXFwic2NhbigpXFxcIj5cXHJcXG4gICAgPC9CdXR0b24+IC0tPlxcclxcbiAgICA8RGF0ZVBpY2tlciBbKG5nTW9kZWwpXT1cXFwicmVhZGluZ0xvZy5kYXRlXFxcIiBzdHlsZT1cXFwiaGVpZ2h0OiAxMjA7IGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcXCI+XFxyXFxuICAgIDwvRGF0ZVBpY2tlcj5cXHJcXG4gICAgPFRleHRGaWVsZCBoaW50PVxcXCJib29rIHRpdGxlXFxcIiBbKG5nTW9kZWwpXT1cXFwicmVhZGluZ0xvZy50aXRsZVxcXCI+XFxyXFxuICAgIDwvVGV4dEZpZWxkPlxcclxcbiAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIm1pbnV0ZXNcXFwiIFsobmdNb2RlbCldPVxcXCJyZWFkaW5nTG9nLm1pbnV0ZXNcXFwiPlxcclxcbiAgICA8L1RleHRGaWVsZD5cXHJcXG4gICAgPEJ1dHRvbiBbdGV4dF09XFxcIidBZGQnXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAodGFwKT1cXFwiYWRkKClcXFwiPlxcclxcbiAgICA8L0J1dHRvbj5cXHJcXG5cXHJcXG4gICAgPEZsZXhib3hMYXlvdXQgYWxpZ25JdGVtcz1cXFwiZmxleC1zdGFydFxcXCIgd2lkdGg9XFxcIjMwMFxcXCIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgcmVhZGluZ0xvZ0xpc3RcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9J3t7ZW50cnkuZGF0ZSB8IGRhdGV9fSc+PC9MYWJlbD5cXHJcXG48IS0tICAgICAgICA8TGFiZWwgdGV4dD1cXFwiIFxcXCI+PC9MYWJlbD4gIC0tPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9e3tlbnRyeS50aXRsZX19PjwvTGFiZWw+XFxyXFxuPCEtLSAgICAgICAgPExhYmVsIHRleHQ9XFxcIiBcXFwiPjwvTGFiZWw+IC0tPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9J3t7ZW50cnkubWludXRlc319IG1pbnV0ZShzKSc+PC9MYWJlbD5cXHJcXG5cXHJcXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxcclxcblxcclxcbiAgICA8QnV0dG9uIFt0ZXh0XT1cXFwiJ1N1Ym1pdCdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICh0YXApPVxcXCJzdWJtaXQoKVxcXCI+XFxyXFxuICAgIDwvQnV0dG9uPlxcclxcblxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvZ1JlYWRpbmcsIFJlYWRpbmdMb2cgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBMb2dSZWFkaW5nU2VydmljZSB9IGZyb20gJy4vbG9ncmVhZGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxucmVnaXN0ZXJFbGVtZW50KFwiQmFyY29kZVNjYW5uZXJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiKS5CYXJjb2RlU2Nhbm5lclZpZXcpO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTG9nXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dyZWFkaW5nLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbG9ncmVhZGluZy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dSZWFkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHJlYWRpbmdMb2dTZXJ2aWNlOiBMb2dSZWFkaW5nU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckVudHJpZXMoKTtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXNbXCJuYW1lXCJdKTtcclxuICAgICAgICAgICAgdGhpcy5zdHVkZW50bmFtZSA9IHBhcmFtc1tcIm5hbWVcIl07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWFkaW5nTG9nTGlzdDogQXJyYXk8TG9nUmVhZGluZz4gPSBbXTtcclxuICAgIHJlYWRpbmdMb2c6IExvZ1JlYWRpbmcgPSBuZXcgTG9nUmVhZGluZygpO1xyXG4gICAgcmVhZGluZ0xvZ0R0bzogUmVhZGluZ0xvZztcclxuICAgIHN0dWRlbnRuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWZyZXNoKCkge1xyXG4gICAgICAgIHRoaXMucmVhZGluZ0xvZ1NlcnZpY2UuZ2V0UmVhZGluZ0xvZygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVhZGluZ0xvZyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRpbmdMb2dEdG8gPSByZWFkaW5nTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGVudHJ5IG9mIHRoaXMucmVhZGluZ0xvZ0R0by5lbnRyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RW50cnk6IExvZ1JlYWRpbmcgPSBuZXcgTG9nUmVhZGluZygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXdFbnRyeS5kYXRlID0gZW50cnkucmVhZGluZ0RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RW50cnkudGl0bGUgPSBlbnRyeS5wdWJsaWNhdGlvblRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0VudHJ5Lm1pbnV0ZXMgPSBlbnRyeS5kdXJhdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkaW5nTG9nTGlzdC5wdXNoKG5ld0VudHJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucmVhZGluZ0xvZ0xpc3QpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgdGhpcy5yZWFkaW5nTG9nRHRvLmVudHJpZXMgPSBfLm9yZGVyQnkodGhpcy5yZWFkaW5nTG9nRHRvLmVudHJpZXMsIFsncmVhZGluZ0RhdGUnXSwgWydhc2MnXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckVudHJpZXMoKSB7XHJcbiAgICAgICAgdGhpcy5yZWFkaW5nTG9nLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMucmVhZGluZ0xvZy50aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yZWFkaW5nTG9nLm1pbnV0ZXMgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLnJlYWRpbmdMb2dMaXN0LmZpbHRlcihpPT4gaS5uZXcgPT09IHRydWUpLm1hcChpPT4ge1xyXG4gICAgICAgICAgICB2YXIgZW50cnk6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBlbnRyeS5yZWFkaW5nRGF0ZSA9IGkuZGF0ZTtcclxuICAgICAgICAgICAgZW50cnkucHVibGljYXRpb25UaXRsZSA9IGkudGl0bGU7XHJcbiAgICAgICAgICAgIGVudHJ5LmR1cmF0aW9uID0gaS5taW51dGVzO1xyXG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWFkaW5nTG9nU2VydmljZS5zZW5kUmVhZGluZ0xvZ0VudHJpZXMoZW50cmllcykuc3Vic2NyaWJlKGw9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAoKSA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKCkge1xyXG4gICAgICAgIGxldCBuZXdSZWFkaW5nTG9nRW50cnk6IExvZ1JlYWRpbmcgPSBuZXcgTG9nUmVhZGluZygpO1xyXG4gICAgICAgIG5ld1JlYWRpbmdMb2dFbnRyeSA9IHsgLi4udGhpcy5yZWFkaW5nTG9nIH07XHJcbiAgICAgICAgbmV3UmVhZGluZ0xvZ0VudHJ5Lm5ldyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZWFkaW5nTG9nTGlzdC5wdXNoKG5ld1JlYWRpbmdMb2dFbnRyeSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucmVhZGluZ0xvZ0xpc3QpKTtcclxuXHJcbiAgICAgICAgLy9hbGVydCgnRW50cnkgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJFbnRyaWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2NhbigpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBSZWFkaW5nTG9nIH0gZnJvbSAnLi4vbW9kZWxzL3JlYWRpbmdMb2cubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dSZWFkaW5nU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHNlcnZpY2VVcmwgPSAnaHR0cDovL3JlYWRpbmctbG9nLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9yZWFkaW5nbG9ncy85OSc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZWFkaW5nTG9nKCk6IE9ic2VydmFibGU8UmVhZGluZ0xvZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFJlYWRpbmdMb2c+KHRoaXMuc2VydmljZVVybCkucGlwZShcclxuICAgICAgICAgICAgdGFwKGRhdGEgPT4gY29uc29sZS5sb2coJ0FsbDogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxSZWFkaW5nTG9nPihgZ2V0UmVhZGluZ0xvZ2ApKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2VuZFJlYWRpbmdMb2dFbnRyaWVzKGVudHJpZXMpOiBPYnNlcnZhYmxlPFJlYWRpbmdMb2c+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8UmVhZGluZ0xvZz4odGhpcy5zZXJ2aWNlVXJsLCBlbnRyaWVzLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoZGF0YSA9PiBjb25zb2xlLmxvZygnQWxsOiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPFJlYWRpbmdMb2c+KGBnZXRSZWFkaW5nTG9nYCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBIdHRwIG9wZXJhdGlvbiB0aGF0IGZhaWxlZC5cclxuICAgICAqIExldCB0aGUgYXBwIGNvbnRpbnVlLlxyXG4gICAgICogQHBhcmFtIG9wZXJhdGlvbiAtIG5hbWUgb2YgdGhlIG9wZXJhdGlvbiB0aGF0IGZhaWxlZFxyXG4gICAgICogQHBhcmFtIHJlc3VsdCAtIG9wdGlvbmFsIHZhbHVlIHRvIHJldHVybiBhcyB0aGUgb2JzZXJ2YWJsZSByZXN1bHRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcjxUPiAob3BlcmF0aW9uID0gJ29wZXJhdGlvbicsIHJlc3VsdD86IFQpIHtcclxuICAgICAgICByZXR1cm4gKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+ID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IHNlbmQgdGhlIGVycm9yIHRvIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBiZXR0ZXIgam9iIG9mIHRyYW5zZm9ybWluZyBlcnJvciBmb3IgdXNlciBjb25zdW1wdGlvblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtvcGVyYXRpb259IGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xyXG5cclxuICAgICAgICAgICAgLy8gTGV0IHRoZSBhcHAga2VlcCBydW5uaW5nIGJ5IHJldHVybmluZyBhbiBlbXB0eSByZXN1bHQuXHJcbiAgICAgICAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUcmFja2FibGUgfSBmcm9tICcuL3RyYWNrYWJsZS5tb2RlbCc7XHJcbmltcG9ydCB7IFN0dWRlbnQgfSBmcm9tICcuL3N0dWRlbnQubW9kZWwnO1xyXG5pbXBvcnQgeyBDbGFzc1NlY3Rpb24gfSBmcm9tICcuL2NsYXNzU2VjdGlvbi5tb2RlbCc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBjb25jZXB0IG9mIGFuIGVucm9sbG1lbnQgaW4gb3VyIGFwcGxpY2F0aW9uLlxyXG4gKiBBbiBlbnJvbGxtZW50IGNvbnRhaW5zIHRoZSBjbGFzcyBzZWN0aW9uIGluZm9ybWF0aW9uIGFuZCB0aGUgc3R1ZGVudHNcclxuICogd2l0aGluIHRoZSBzZWN0aW9uLlxyXG4gKlxyXG4gKiBAYXV0aG9yIFVuaW9uIEhpbGxzIFNvZnR3YXJlXHJcbiAqIEBkYXRlICAgRGVjZW1iZXIgOCwgMjAxOFxyXG4gKlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBDbGFzc0Vucm9sbG1lbnQgaW1wbGVtZW50cyBUcmFja2FibGUge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuXHJcbiAgICBjbGFzc1NlY3Rpb246IENsYXNzU2VjdGlvbjtcclxuICAgIHN0dWRlbnRzOiBTdHVkZW50W107XHJcblxyXG4gICAgY3JlYXRlZEF0OiBEYXRlO1xyXG4gICAgdXBkYXRlZEF0OiBEYXRlO1xyXG59XHJcbiIsImltcG9ydCB7IFRyYWNrYWJsZSB9IGZyb20gJy4vdHJhY2thYmxlLm1vZGVsJztcclxuaW1wb3J0IHsgU3R1ZGVudCB9IGZyb20gJy4vc3R1ZGVudC5tb2RlbCc7XHJcbmltcG9ydCB7IEluc3RydWN0b3IgfSBmcm9tICcuL2luc3RydWN0b3IubW9kZWwnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgY29uY2VwdCBvZiBjbGFzcyBzZWN0aW9uIGluIG91ciBhcHBsaWNhdGlvbi5cclxuICogQSBjbGFzcyBzZWN0aW9uIGlzIHRoZSBlcXVpdmFsZW50IG9mIHRoZSBkZWZpbml0aW9uIGZvciBhIHNjaG9vbCBjbGFzcy5cclxuICogTm90ZSB0aGF0IGl0IGRvZXMgbm90IGNvbnRhaW4gdGhlIGNsYXNzIHJvc3Rlci4gIFRoaXMgaXMgcGFydCBvZiB0aGVcclxuICogQ2xhc3NFbnJvbGxtZW50IG9iamVjdC5cclxuICpcclxuICogQGF1dGhvciBVbmlvbiBIaWxscyBTb2Z0d2FyZVxyXG4gKiBAZGF0ZSAgIERlY2VtYmVyIDgsIDIwMThcclxuICpcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xhc3NTZWN0aW9uIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBncmFkZUxldmVsOiBzdHJpbmc7XHJcbiAgICBpbnN0cnVjdG9yOiBJbnN0cnVjdG9yO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL3RyYWNrYWJsZS5tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVhZGluZ0VudHJ5Lm1vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZWFkaW5nTG9nLm1vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9jbGFzc0Vucm9sbG1lbnQubW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzU2VjdGlvbi5tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW5zdHJ1Y3Rvci5tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R1ZGVudC5tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXNlci5tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbG9nLXJlYWRpbmcubW9kZWwnO1xyXG4iLCJpbXBvcnQgeyBUcmFja2FibGUgfSBmcm9tICcuL3RyYWNrYWJsZS5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgY29uY2VwdCBvZiBhbiBJbnN0cnVjdG9yIGluIG91ciBhcHBsaWNhdGlvbi5cclxuICogUmF0aGVyIHRoYW4gaGF2ZSBhIFwicm9sZVwiIGF0dHJpYnV0ZSBvbiBvdXIgVXNlciBvYmplY3QsIHdlJ3ZlXHJcbiAqIGNyZWF0ZWQgYW4gYWN0dWFsIGNsYXNzIHdoaWNoIGRlZmluZXMgdGhlIGluc3RydWN0b3IuXHJcbiAqXHJcbiAqIEBhdXRob3IgVW5pb24gSGlsbHMgU29mdHdhcmVcclxuICogQGRhdGUgICBEZWNlbWJlciA4LCAyMDE4XHJcbiAqXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RydWN0b3IgZXh0ZW5kcyBVc2VyIHtcclxuICAgIC8vVG9EbzogRGV0ZXJtaW5lIHRoZSBkaWZmZXJlbnRpYXRvcnMgZm9yIGFuIGluc3RydWN0b3JcclxufSIsImV4cG9ydCBjbGFzcyBMb2dSZWFkaW5nIHtcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgbWludXRlczogbnVtYmVyO1xyXG4gICAgbmV3OiBib29sZWFuO1xyXG59IiwiaW1wb3J0IHsgVHJhY2thYmxlIH0gZnJvbSAnLi90cmFja2FibGUubW9kZWwnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgY29uY2VwdCBvZiBhIHJlYWRpbmcgZW50cnkgaW5cclxuICogb3VyIGFwcGxpY2F0aW9uLiAgQSByZWFkaW5nIGVudHJ5IHJlcHJlc2VudHMgYW4gZW50cnkgaW5cclxuICogdGhlIHJlYWRpbmcgbG9nLlxyXG4gKlxyXG4gKiBAYXV0aG9yIFVuaW9uIEhpbGxzIFNvZnR3YXJlXHJcbiAqIEBkYXRlICAgTm92ZW1iZXIgMTEsIDIwMThcclxuICpcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgUmVhZGluZ0VudHJ5IGltcGxlbWVudHMgVHJhY2thYmxlIHtcclxuICAgIGlkOiBudW1iZXI7XHJcblxyXG4gICAgcmVhZGluZ0RhdGU6IERhdGU7XHJcbiAgICBwdWJsaWNhdGlvblRpdGxlOiBzdHJpbmc7XHJcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gICAgbm90ZXM6IHN0cmluZztcclxuICAgIHN1cGVydmlzb3JWZXJpZmljYXRpb246IHN0cmluZztcclxuXHJcbiAgICBjcmVhdGVkQXQ6IERhdGU7XHJcbiAgICB1cGRhdGVkQXQ6IERhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgVHJhY2thYmxlIH0gZnJvbSAnLi90cmFja2FibGUubW9kZWwnO1xyXG5pbXBvcnQgeyBSZWFkaW5nRW50cnkgfSBmcm9tICcuJztcclxuaW1wb3J0IHsgU3R1ZGVudCB9IGZyb20gJy4vc3R1ZGVudC5tb2RlbCc7XHJcbmltcG9ydCB7IENsYXNzU2VjdGlvbiB9IGZyb20gJy4vY2xhc3NTZWN0aW9uLm1vZGVsJztcclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgY29uY2VwdCBvZiBhIFJlYWRpbmcgTG9nIGluXHJcbiAqIG91ciBhcHBsaWNhdGlvbi4gIEEgUmVhZGluZyBMb2cgcmVwcmVzZW50cyBhIGxvZyBvZlxyXG4gKiBhIHN0dWRlbnQncyByZWFkaW5nIGFjdGl2aXR5LlxyXG4gKlxyXG4gKiBAYXV0aG9yIFVuaW9uIEhpbGxzIFNvZnR3YXJlXHJcbiAqIEBkYXRlICAgTm92ZW1iZXIgMTEsIDIwMThcclxuICpcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgUmVhZGluZ0xvZyBpbXBsZW1lbnRzIFRyYWNrYWJsZSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG5cclxuICAgIG93bmVyOiBTdHVkZW50O1xyXG4gICAgY2xhc3NFbnJvbGxtZW50SWQ6IG51bWJlcjtcclxuICAgIGdyb3VwOiBDbGFzc1NlY3Rpb247XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgZW50cmllczogQXJyYXk8UmVhZGluZ0VudHJ5PjtcclxuXHJcbiAgICBjcmVhdGVkQXQ6IERhdGU7XHJcbiAgICB1cGRhdGVkQXQ6IERhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgVHJhY2thYmxlIH0gZnJvbSAnLi90cmFja2FibGUubW9kZWwnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLm1vZGVsJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGNvbmNlcHQgb2YgYSBzdHVkZW50IGluIG91ciBhcHBsaWNhdGlvbi5cclxuICogUmF0aGVyIHRoYW4gaGF2ZSBhIFwicm9sZVwiIGF0dHJpYnV0ZSBvbiBvdXIgVXNlciBvYmplY3QsIHdlJ3ZlXHJcbiAqIGNyZWF0ZWQgYW4gYWN0dWFsIGNsYXNzIHdoaWNoIGRlZmluZXMgdGhlIHN0dWRlbnQuXHJcbiAqXHJcbiAqIEBhdXRob3IgVW5pb24gSGlsbHMgU29mdHdhcmVcclxuICogQGRhdGUgICBEZWNlbWJlciA4LCAyMDE4XHJcbiAqXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0dWRlbnQgZXh0ZW5kcyBVc2VyIHtcclxuICAgIC8vVG9EbzogRGV0ZXJtaW5lIHRoZSBkaWZmZXJlbnRpYXRvcnMgZm9yIGFuIGluc3RydWN0b3JcclxufSIsImltcG9ydCB7IFRyYWNrYWJsZSB9IGZyb20gJy4vdHJhY2thYmxlLm1vZGVsJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGNvbmNlcHQgb2YgYSB1c2VyIGluIG91ciBhcHBsaWNhdGlvbi5cclxuICpcclxuICogQGF1dGhvciBVbmlvbiBIaWxscyBTb2Z0d2FyZVxyXG4gKiBAZGF0ZSAgIERlY2VtYmVyIDgsIDIwMThcclxuICpcclxuICovXHJcblxyXG4vLyBUb0RvOiBEZXRlcm1pbmUgaWYgdGhpcyBzaG91bGQgYmUgYW4gYWJzdHJhY3QgY2xhc3Mgb3JcclxuLy8gZXZlbiBhbiBpbnRlcmZhY2VcclxuZXhwb3J0IGNsYXNzIFVzZXIgaW1wbGVtZW50cyBUcmFja2FibGUge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuXHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBjcmVhdGVkQXQ6IERhdGU7XHJcbiAgICB1cGRhdGVkQXQ6IERhdGU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9