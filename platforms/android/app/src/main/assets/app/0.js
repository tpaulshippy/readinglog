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

module.exports = "<ActionBar title=\"Reading Log for {{studentname}}\" class=\"title\">\r\n</ActionBar>\r\n\r\n<StackLayout orientation=\"vertical\">\r\n    <DatePicker [(ngModel)]=\"readingLog.date\">\r\n    </DatePicker>\r\n    <TextField hint=\"book title\" [(ngModel)]=\"readingLog.title\">\r\n    </TextField>\r\n    <TextField hint=\"minutes\" [(ngModel)]=\"readingLog.minutes\">\r\n    </TextField>\r\n    <Button [text]=\"'Add'\" class=\"btn btn-primary\" (tap)=\"add()\">\r\n    </Button>\r\n\r\n    <FlexboxLayout alignItems=\"flex-start\" width=\"300\" *ngFor=\"let entry of readingLogList\">\r\n        <Label text='{{entry.date | date}}'></Label>\r\n<!--        <Label text=\" \"></Label>  -->\r\n        <Label text={{entry.title}}></Label>\r\n<!--        <Label text=\" \"></Label> -->\r\n        <Label text='{{entry.minutes}} minute(s)'></Label>\r\n\r\n    </FlexboxLayout>\r\n\r\n    <Button [text]=\"'Submit'\" class=\"btn btn-primary\" (tap)=\"submit()\">\r\n    </Button>\r\n\r\n</StackLayout>"

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
    };
    LogReadingComponent.prototype.add = function () {
        var newReadingLogEntry = new _models__WEBPACK_IMPORTED_MODULE_3__["LogReading"]();
        newReadingLogEntry = __assign({}, this.readingLog);
        this.readingLogList.push(newReadingLogEntry);
        console.log(JSON.stringify(this.readingLogList));
        //alert('Entry submitted successfully');
        this.clearEntries();
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
        this.serviceUrl = 'http://reading-log.azurewebsites.net/api/readinglogs/1';
    }
    LogReadingService.prototype.getReadingLog = function () {
        return this.http.get(this.serviceUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getReadingLog")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2xvZ3JlYWRpbmcuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9ob21lL2xvZ3JlYWRpbmcuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9sb2dyZWFkaW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2xvZ3JlYWRpbmcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvY2xhc3NFbnJvbGxtZW50Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL21vZGVscy9jbGFzc1NlY3Rpb24ubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL21vZGVscy9pbnN0cnVjdG9yLm1vZGVsLnRzIiwid2VicGFjazovLy8uL21vZGVscy9sb2ctcmVhZGluZy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvcmVhZGluZ0VudHJ5Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL21vZGVscy9yZWFkaW5nTG9nLm1vZGVsLnRzIiwid2VicGFjazovLy8uL21vZGVscy9zdHVkZW50Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL21vZGVscy91c2VyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFDWTtBQUU3RCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxF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ZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ1JlYWRpbmdDb21wb25lbnQgfSBmcm9tIFwiLi9sb2dyZWFkaW5nLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImxvZy86bmFtZVwiLCBjb21wb25lbnQ6IExvZ1JlYWRpbmdDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgXFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIG1hcmdpbjogMTU7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxyXFxufVxcclxcblxcclxcblN0YWNrTGF5b3V0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJ+L2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcclxcbn1cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJCb29rd29ybSBSZWFkaW5nIExvZ1xcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXHJcXG48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhvbWUtcGFuZWxcXFwiPlxcclxcblxcdFxcdDwhLS1BZGQgeW91ciBwYWdlIGNvbnRlbnQgaGVyZS0tPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwiUmVhZGluZyBpcyBhd2Vzb21lIVxcXCIgY2xhc3M9XFxcImgyIGRlc2NyaXB0aW9uLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdDxUZXh0RmllbGQgaGludD1cXFwic3R1ZGVudCBuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwibmFtZVxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuXFx0XFx0PEJ1dHRvbiB0ZXh0PVxcXCJMZXQncyBsb2cgcmVhZGluZ1xcXCIgKHRhcCk9XFxcImxvZ2luKClcXFwiPjwvQnV0dG9uPlxcclxcblxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICkge1xyXG4gICAgfVxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbYC9ob21lL2xvZy8ke3RoaXMubmFtZX1gXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ1JlYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2xvZ3JlYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9nUmVhZGluZ1NlcnZpY2UgfSBmcm9tICcuL2xvZ3JlYWRpbmcuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgTG9nUmVhZGluZ0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIExvZ1JlYWRpbmdTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJTdGFja0xheW91dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5GbGV4Ym94TGF5b3V0IHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5UZXh0RmllbGQge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkxhYmVsIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJSZWFkaW5nIExvZyBmb3Ige3tzdHVkZW50bmFtZX19XFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPlxcclxcbjwvQWN0aW9uQmFyPlxcclxcblxcclxcbjxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcclxcbiAgICA8RGF0ZVBpY2tlciBbKG5nTW9kZWwpXT1cXFwicmVhZGluZ0xvZy5kYXRlXFxcIj5cXHJcXG4gICAgPC9EYXRlUGlja2VyPlxcclxcbiAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcImJvb2sgdGl0bGVcXFwiIFsobmdNb2RlbCldPVxcXCJyZWFkaW5nTG9nLnRpdGxlXFxcIj5cXHJcXG4gICAgPC9UZXh0RmllbGQ+XFxyXFxuICAgIDxUZXh0RmllbGQgaGludD1cXFwibWludXRlc1xcXCIgWyhuZ01vZGVsKV09XFxcInJlYWRpbmdMb2cubWludXRlc1xcXCI+XFxyXFxuICAgIDwvVGV4dEZpZWxkPlxcclxcbiAgICA8QnV0dG9uIFt0ZXh0XT1cXFwiJ0FkZCdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICh0YXApPVxcXCJhZGQoKVxcXCI+XFxyXFxuICAgIDwvQnV0dG9uPlxcclxcblxcclxcbiAgICA8RmxleGJveExheW91dCBhbGlnbkl0ZW1zPVxcXCJmbGV4LXN0YXJ0XFxcIiB3aWR0aD1cXFwiMzAwXFxcIiAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiByZWFkaW5nTG9nTGlzdFxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgdGV4dD0ne3tlbnRyeS5kYXRlIHwgZGF0ZX19Jz48L0xhYmVsPlxcclxcbjwhLS0gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCIgXFxcIj48L0xhYmVsPiAgLS0+XFxyXFxuICAgICAgICA8TGFiZWwgdGV4dD17e2VudHJ5LnRpdGxlfX0+PC9MYWJlbD5cXHJcXG48IS0tICAgICAgICA8TGFiZWwgdGV4dD1cXFwiIFxcXCI+PC9MYWJlbD4gLS0+XFxyXFxuICAgICAgICA8TGFiZWwgdGV4dD0ne3tlbnRyeS5taW51dGVzfX0gbWludXRlKHMpJz48L0xhYmVsPlxcclxcblxcclxcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XFxyXFxuXFxyXFxuICAgIDxCdXR0b24gW3RleHRdPVxcXCInU3VibWl0J1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKHRhcCk9XFxcInN1Ym1pdCgpXFxcIj5cXHJcXG4gICAgPC9CdXR0b24+XFxyXFxuXFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9nUmVhZGluZywgUmVhZGluZ0xvZyB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IExvZ1JlYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9sb2dyZWFkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJMb2dcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ3JlYWRpbmcuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dyZWFkaW5nLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ1JlYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZGluZ0xvZ1NlcnZpY2U6IExvZ1JlYWRpbmdTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNsZWFyRW50cmllcygpO1xyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtc1tcIm5hbWVcIl0pO1xyXG4gICAgICAgICAgICB0aGlzLnN0dWRlbnRuYW1lID0gcGFyYW1zW1wibmFtZVwiXTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlYWRpbmdMb2dMaXN0OiBBcnJheTxMb2dSZWFkaW5nPiA9IFtdO1xyXG4gICAgcmVhZGluZ0xvZzogTG9nUmVhZGluZyA9IG5ldyBMb2dSZWFkaW5nKCk7XHJcbiAgICByZWFkaW5nTG9nRHRvOiBSZWFkaW5nTG9nO1xyXG4gICAgc3R1ZGVudG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZnJlc2goKSB7XHJcbiAgICAgICAgdGhpcy5yZWFkaW5nTG9nU2VydmljZS5nZXRSZWFkaW5nTG9nKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZWFkaW5nTG9nID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZGluZ0xvZ0R0byA9IHJlYWRpbmdMb2c7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZW50cnkgb2YgdGhpcy5yZWFkaW5nTG9nRHRvLmVudHJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdFbnRyeTogTG9nUmVhZGluZyA9IG5ldyBMb2dSZWFkaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0VudHJ5LmRhdGUgPSBlbnRyeS5yZWFkaW5nRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdFbnRyeS50aXRsZSA9IGVudHJ5LnB1YmxpY2F0aW9uVGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RW50cnkubWludXRlcyA9IGVudHJ5LmR1cmF0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRpbmdMb2dMaXN0LnB1c2gobmV3RW50cnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yZWFkaW5nTG9nTGlzdCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICB0aGlzLnJlYWRpbmdMb2dEdG8uZW50cmllcyA9IF8ub3JkZXJCeSh0aGlzLnJlYWRpbmdMb2dEdG8uZW50cmllcywgWydyZWFkaW5nRGF0ZSddLCBbJ2FzYyddKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4ge30pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRW50cmllcygpIHtcclxuICAgICAgICB0aGlzLnJlYWRpbmdMb2cuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5yZWFkaW5nTG9nLnRpdGxlID0gXCJcIjtcclxuICAgICAgICB0aGlzLnJlYWRpbmdMb2cubWludXRlcyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZCgpIHtcclxuICAgICAgICBsZXQgbmV3UmVhZGluZ0xvZ0VudHJ5OiBMb2dSZWFkaW5nID0gbmV3IExvZ1JlYWRpbmcoKTtcclxuICAgICAgICBuZXdSZWFkaW5nTG9nRW50cnkgPSB7IC4uLnRoaXMucmVhZGluZ0xvZyB9O1xyXG4gICAgICAgIHRoaXMucmVhZGluZ0xvZ0xpc3QucHVzaChuZXdSZWFkaW5nTG9nRW50cnkpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJlYWRpbmdMb2dMaXN0KSk7XHJcblxyXG4gICAgICAgIC8vYWxlcnQoJ0VudHJ5IHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICB0aGlzLmNsZWFyRW50cmllcygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFJlYWRpbmdMb2cgfSBmcm9tICcuLi9tb2RlbHMvcmVhZGluZ0xvZy5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ1JlYWRpbmdTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc2VydmljZVVybCA9ICdodHRwOi8vcmVhZGluZy1sb2cuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpL3JlYWRpbmdsb2dzLzEnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVhZGluZ0xvZygpOiBPYnNlcnZhYmxlPFJlYWRpbmdMb2c+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSZWFkaW5nTG9nPih0aGlzLnNlcnZpY2VVcmwpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChkYXRhID0+IGNvbnNvbGUubG9nKCdBbGw6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8UmVhZGluZ0xvZz4oYGdldFJlYWRpbmdMb2dgKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIEh0dHAgb3BlcmF0aW9uIHRoYXQgZmFpbGVkLlxyXG4gICAgICogTGV0IHRoZSBhcHAgY29udGludWUuXHJcbiAgICAgKiBAcGFyYW0gb3BlcmF0aW9uIC0gbmFtZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgZmFpbGVkXHJcbiAgICAgKiBAcGFyYW0gcmVzdWx0IC0gb3B0aW9uYWwgdmFsdWUgdG8gcmV0dXJuIGFzIHRoZSBvYnNlcnZhYmxlIHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yPFQ+IChvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xyXG4gICAgICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogc2VuZCB0aGUgZXJyb3IgdG8gcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGJldHRlciBqb2Igb2YgdHJhbnNmb3JtaW5nIGVycm9yIGZvciB1c2VyIGNvbnN1bXB0aW9uXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke29wZXJhdGlvbn0gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cclxuICAgICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdCBhcyBUKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRyYWNrYWJsZSB9IGZyb20gJy4vdHJhY2thYmxlLm1vZGVsJztcbmltcG9ydCB7IFN0dWRlbnQgfSBmcm9tICcuL3N0dWRlbnQubW9kZWwnO1xuaW1wb3J0IHsgQ2xhc3NTZWN0aW9uIH0gZnJvbSAnLi9jbGFzc1NlY3Rpb24ubW9kZWwnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgY29uY2VwdCBvZiBhbiBlbnJvbGxtZW50IGluIG91ciBhcHBsaWNhdGlvbi5cbiAqIEFuIGVucm9sbG1lbnQgY29udGFpbnMgdGhlIGNsYXNzIHNlY3Rpb24gaW5mb3JtYXRpb24gYW5kIHRoZSBzdHVkZW50c1xuICogd2l0aGluIHRoZSBzZWN0aW9uLlxuICpcbiAqIEBhdXRob3IgVW5pb24gSGlsbHMgU29mdHdhcmVcbiAqIEBkYXRlICAgRGVjZW1iZXIgOCwgMjAxOFxuICpcbiAqL1xuXG5leHBvcnQgY2xhc3MgQ2xhc3NFbnJvbGxtZW50IGltcGxlbWVudHMgVHJhY2thYmxlIHtcbiAgICBpZDogbnVtYmVyO1xuXG4gICAgY2xhc3NTZWN0aW9uOiBDbGFzc1NlY3Rpb247XG4gICAgc3R1ZGVudHM6IFN0dWRlbnRbXTtcblxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG59XG4iLCJpbXBvcnQgeyBUcmFja2FibGUgfSBmcm9tICcuL3RyYWNrYWJsZS5tb2RlbCc7XG5pbXBvcnQgeyBTdHVkZW50IH0gZnJvbSAnLi9zdHVkZW50Lm1vZGVsJztcbmltcG9ydCB7IEluc3RydWN0b3IgfSBmcm9tICcuL2luc3RydWN0b3IubW9kZWwnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgY29uY2VwdCBvZiBjbGFzcyBzZWN0aW9uIGluIG91ciBhcHBsaWNhdGlvbi5cbiAqIEEgY2xhc3Mgc2VjdGlvbiBpcyB0aGUgZXF1aXZhbGVudCBvZiB0aGUgZGVmaW5pdGlvbiBmb3IgYSBzY2hvb2wgY2xhc3MuXG4gKiBOb3RlIHRoYXQgaXQgZG9lcyBub3QgY29udGFpbiB0aGUgY2xhc3Mgcm9zdGVyLiAgVGhpcyBpcyBwYXJ0IG9mIHRoZVxuICogQ2xhc3NFbnJvbGxtZW50IG9iamVjdC5cbiAqXG4gKiBAYXV0aG9yIFVuaW9uIEhpbGxzIFNvZnR3YXJlXG4gKiBAZGF0ZSAgIERlY2VtYmVyIDgsIDIwMThcbiAqXG4gKi9cblxuZXhwb3J0IGNsYXNzIENsYXNzU2VjdGlvbiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBncmFkZUxldmVsOiBzdHJpbmc7XG4gICAgaW5zdHJ1Y3RvcjogSW5zdHJ1Y3RvcjtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi90cmFja2FibGUubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWFkaW5nRW50cnkubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWFkaW5nTG9nLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3NFbnJvbGxtZW50Lm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3NTZWN0aW9uLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdHJ1Y3Rvci5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3N0dWRlbnQubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbG9nLXJlYWRpbmcubW9kZWwnO1xuIiwiaW1wb3J0IHsgVHJhY2thYmxlIH0gZnJvbSAnLi90cmFja2FibGUubW9kZWwnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBjb25jZXB0IG9mIGFuIEluc3RydWN0b3IgaW4gb3VyIGFwcGxpY2F0aW9uLlxuICogUmF0aGVyIHRoYW4gaGF2ZSBhIFwicm9sZVwiIGF0dHJpYnV0ZSBvbiBvdXIgVXNlciBvYmplY3QsIHdlJ3ZlXG4gKiBjcmVhdGVkIGFuIGFjdHVhbCBjbGFzcyB3aGljaCBkZWZpbmVzIHRoZSBpbnN0cnVjdG9yLlxuICpcbiAqIEBhdXRob3IgVW5pb24gSGlsbHMgU29mdHdhcmVcbiAqIEBkYXRlICAgRGVjZW1iZXIgOCwgMjAxOFxuICpcbiAqL1xuXG5leHBvcnQgY2xhc3MgSW5zdHJ1Y3RvciBleHRlbmRzIFVzZXIge1xuICAgIC8vVG9EbzogRGV0ZXJtaW5lIHRoZSBkaWZmZXJlbnRpYXRvcnMgZm9yIGFuIGluc3RydWN0b3Jcbn0iLCJleHBvcnQgY2xhc3MgTG9nUmVhZGluZyB7XHJcbiAgICBkYXRlOiBEYXRlO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIG1pbnV0ZXM6IG51bWJlcjtcclxufSIsImltcG9ydCB7IFRyYWNrYWJsZSB9IGZyb20gJy4vdHJhY2thYmxlLm1vZGVsJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGNvbmNlcHQgb2YgYSByZWFkaW5nIGVudHJ5IGluXG4gKiBvdXIgYXBwbGljYXRpb24uICBBIHJlYWRpbmcgZW50cnkgcmVwcmVzZW50cyBhbiBlbnRyeSBpblxuICogdGhlIHJlYWRpbmcgbG9nLlxuICpcbiAqIEBhdXRob3IgVW5pb24gSGlsbHMgU29mdHdhcmVcbiAqIEBkYXRlICAgTm92ZW1iZXIgMTEsIDIwMThcbiAqXG4gKi9cblxuZXhwb3J0IGNsYXNzIFJlYWRpbmdFbnRyeSBpbXBsZW1lbnRzIFRyYWNrYWJsZSB7XG4gICAgaWQ6IG51bWJlcjtcblxuICAgIHJlYWRpbmdEYXRlOiBEYXRlO1xuICAgIHB1YmxpY2F0aW9uVGl0bGU6IHN0cmluZztcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIG5vdGVzOiBzdHJpbmc7XG4gICAgc3VwZXJ2aXNvclZlcmlmaWNhdGlvbjogc3RyaW5nO1xuXG4gICAgY3JlYXRlZEF0OiBEYXRlO1xuICAgIHVwZGF0ZWRBdDogRGF0ZTtcbn1cbiIsImltcG9ydCB7IFRyYWNrYWJsZSB9IGZyb20gJy4vdHJhY2thYmxlLm1vZGVsJztcbmltcG9ydCB7IFJlYWRpbmdFbnRyeSB9IGZyb20gJy4nO1xuaW1wb3J0IHsgU3R1ZGVudCB9IGZyb20gJy4vc3R1ZGVudC5tb2RlbCc7XG5pbXBvcnQgeyBDbGFzc1NlY3Rpb24gfSBmcm9tICcuL2NsYXNzU2VjdGlvbi5tb2RlbCc7XG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgY29uY2VwdCBvZiBhIFJlYWRpbmcgTG9nIGluXG4gKiBvdXIgYXBwbGljYXRpb24uICBBIFJlYWRpbmcgTG9nIHJlcHJlc2VudHMgYSBsb2cgb2ZcbiAqIGEgc3R1ZGVudCdzIHJlYWRpbmcgYWN0aXZpdHkuXG4gKlxuICogQGF1dGhvciBVbmlvbiBIaWxscyBTb2Z0d2FyZVxuICogQGRhdGUgICBOb3ZlbWJlciAxMSwgMjAxOFxuICpcbiAqL1xuXG5leHBvcnQgY2xhc3MgUmVhZGluZ0xvZyBpbXBsZW1lbnRzIFRyYWNrYWJsZSB7XG4gICAgaWQ6IG51bWJlcjtcblxuICAgIG93bmVyOiBTdHVkZW50O1xuICAgIGNsYXNzRW5yb2xsbWVudElkOiBudW1iZXI7XG4gICAgZ3JvdXA6IENsYXNzU2VjdGlvbjtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGVudHJpZXM6IEFycmF5PFJlYWRpbmdFbnRyeT47XG5cbiAgICBjcmVhdGVkQXQ6IERhdGU7XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuIiwiaW1wb3J0IHsgVHJhY2thYmxlIH0gZnJvbSAnLi90cmFja2FibGUubW9kZWwnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBjb25jZXB0IG9mIGEgc3R1ZGVudCBpbiBvdXIgYXBwbGljYXRpb24uXG4gKiBSYXRoZXIgdGhhbiBoYXZlIGEgXCJyb2xlXCIgYXR0cmlidXRlIG9uIG91ciBVc2VyIG9iamVjdCwgd2UndmVcbiAqIGNyZWF0ZWQgYW4gYWN0dWFsIGNsYXNzIHdoaWNoIGRlZmluZXMgdGhlIHN0dWRlbnQuXG4gKlxuICogQGF1dGhvciBVbmlvbiBIaWxscyBTb2Z0d2FyZVxuICogQGRhdGUgICBEZWNlbWJlciA4LCAyMDE4XG4gKlxuICovXG5cbmV4cG9ydCBjbGFzcyBTdHVkZW50IGV4dGVuZHMgVXNlciB7XG4gICAgLy9Ub0RvOiBEZXRlcm1pbmUgdGhlIGRpZmZlcmVudGlhdG9ycyBmb3IgYW4gaW5zdHJ1Y3RvclxufSIsImltcG9ydCB7IFRyYWNrYWJsZSB9IGZyb20gJy4vdHJhY2thYmxlLm1vZGVsJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGNvbmNlcHQgb2YgYSB1c2VyIGluIG91ciBhcHBsaWNhdGlvbi5cbiAqXG4gKiBAYXV0aG9yIFVuaW9uIEhpbGxzIFNvZnR3YXJlXG4gKiBAZGF0ZSAgIERlY2VtYmVyIDgsIDIwMThcbiAqXG4gKi9cblxuLy8gVG9EbzogRGV0ZXJtaW5lIGlmIHRoaXMgc2hvdWxkIGJlIGFuIGFic3RyYWN0IGNsYXNzIG9yXG4vLyBldmVuIGFuIGludGVyZmFjZVxuZXhwb3J0IGNsYXNzIFVzZXIgaW1wbGVtZW50cyBUcmFja2FibGUge1xuICAgIGlkOiBudW1iZXI7XG5cbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgXG4gICAgY3JlYXRlZEF0OiBEYXRlO1xuICAgIHVwZGF0ZWRBdDogRGF0ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9