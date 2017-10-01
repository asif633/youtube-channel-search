webpackJsonp([1,4],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-primary fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">Youtube Channel Search - Search By Channel ID</a>\n</nav>\n<div class=\"container\">\n  <form class=\"form-inline mb-5\">\n    <div class=\"form-group col-md-8\">\n      <input type=\"text\" class=\"form-control\" style=\"width: 100%\" [(ngModel)]=\"channelId\" name=\"channelId\" placeholder=\"Enter channel ID\">\n    </div>\n    <div class=\"form-group col-md-4\">\n      <button class=\"btn btn-primary form-group\" (click)=\"searchChannel()\">Search</button>\n    </div>\n  </form>\n  <div class=\"search-results\" data-infinite-scroll debounce [infiniteScrollDistance]=\"scrollDistance\" [infiniteScrollUpDistance]=\"scrollUpDistance\"\n    [infiniteScrollThrottle]=\"throttle\" (scrolled)=\"onScrollDown()\">\n    <div *ngFor=\"let video of items; let i = index\">\n      <app-video-item [video]=\"video.snippet\"></app-video-item>\n    </div>\n  </div>\n  <go-top-button [html]=\"'<span>UP</span>'\" [animate]=\"true\" [speed]=\"50\" [acceleration]=\"2\" [scrollDistance]=\"300\" [styles]=\"{\n       'border-radius': '20px 20px 20px 20px',\n       'right': '5px',\n       'color': '#2196F3',\n       'background-color': 'white',\n       'text-align': 'center',\n       'border': '2px solid',\n       'line-height': '30px'\n    }\">\n  </go-top-button>\n  <div class=\"alert alert-dismissible alert-warning\" *ngIf=\"endPage\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n    <h4>You have come to the end of search result!!</h4>\n  </div>\n  <div class=\"alert alert-dismissible alert-danger\" *ngIf=\"error\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n      <h4>{{error}}!! No channel found.</h4>\n      <p>Please enter valid channel ID. Can be get from the home page URL of youtube channel.</p>\n  </div>\n</div>"

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-5\" *ngIf=\"video\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      {{video.title}}\n    </div>\n    <div class=\"card-block\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <img [src]=\"video.thumbnails.default.url\" height=\"100\" width=\"200\" /> \n          <h4>Default</h4>\n        </div>\n        <div class=\"col-md-4\">\n          <img [src]=\"video.thumbnails.medium.url\" height=\"150\" width=\"250\" />\n          <h4>Medium</h4>\n        </div>\n        <div class=\"col-md-5\">\n          <img [src]=\"video.thumbnails.high.url\" height=\"300\" width=\"400\" />\n          <h4>High</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ }),

/***/ 81:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 81;


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(96);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__youtube_config__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_http) {
        this._http = _http;
        this.throttle = 300;
        this.scrollDistance = 1;
        this.scrollUpDistance = 2;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.endPage = false;
    };
    AppComponent.prototype.searchChannel = function () {
        var _this = this;
        this.endPage = false;
        this.error = null;
        this._http.get(__WEBPACK_IMPORTED_MODULE_1__youtube_config__["a" /* API_URL */] + "?channelId=" + this.channelId + "&part=snippet,id&order=date&maxResults=25&key=" + __WEBPACK_IMPORTED_MODULE_1__youtube_config__["b" /* API_KEY */])
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.nextPageToken = res.nextPageToken;
            console.log('page token', _this.nextPageToken, res.nextPageToken);
            _this.pageInfo = { totalResults: res.pageInfo.totalResults, resultsPerPage: res.pageInfo.resultsPerPage };
            _this.items = res.items;
        }, function (error) { return _this.error = error.json().error.message; });
    };
    AppComponent.prototype.onScrollDown = function () {
        var _this = this;
        if (this.nextPageToken !== undefined) {
            this._http.get(__WEBPACK_IMPORTED_MODULE_1__youtube_config__["a" /* API_URL */] + "?pageToken=" + this.nextPageToken + "\n                    &channelId=" + this.channelId + "\n                    &part=snippet,id&order=date&maxResults=25&key=" + __WEBPACK_IMPORTED_MODULE_1__youtube_config__["b" /* API_KEY */])
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.nextPageToken = res.nextPageToken;
                _this.pageInfo = { totalResults: res.pageInfo.totalResults, resultsPerPage: res.pageInfo.resultsPerPage };
                _this.items = _this.items.concat(res.items);
            });
        }
        else {
            console.log('end of page');
            this.endPage = true;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(154),
        styles: [__webpack_require__(150)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__video_item_video_item_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_infinite_scroll__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_go_top_button__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_go_top_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_go_top_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__video_item_video_item_component__["a" /* VideoItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_go_top_button__["GoTopButtonModule"], __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoItemComponent = (function () {
    function VideoItemComponent() {
    }
    VideoItemComponent.prototype.ngOnInit = function () {
    };
    return VideoItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], VideoItemComponent.prototype, "video", void 0);
VideoItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-video-item',
        template: __webpack_require__(155),
        styles: [__webpack_require__(151)]
    }),
    __metadata("design:paramtypes", [])
], VideoItemComponent);

//# sourceMappingURL=video-item.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return API_KEY; });
/* unused harmony export API_SECRET */
var API_URL = 'https://www.googleapis.com/youtube/v3/search';
var API_KEY = 'AIzaSyD9tetV3JOLIAiXOdRUJDAt2cAMpQmJGn0';
var API_SECRET = '48ae0b9c2e78bff984db28a403697e8317879152';
//# sourceMappingURL=youtube.config.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.bundle.js.map