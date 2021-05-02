(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-search-module"],{

/***/ "P8Ee":
/*!*******************************************************!*\
  !*** ./src/app/pages/search/search-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_pages_search_component_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/pages/search/component/search.component */ "m5UZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _app_pages_search_component_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"],
        data: {
            title: 'Search',
        },
    },
];
class SearchRoutingModule {
}
SearchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SearchRoutingModule });
SearchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SearchRoutingModule_Factory(t) { return new (t || SearchRoutingModule)(); }, providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SearchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "m5UZ":
/*!************************************************************!*\
  !*** ./src/app/pages/search/component/search.component.ts ***!
  \************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-virtual-scroller */ "SYYg");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _app_model_image_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/model/image.model */ "pjF4");
/* harmony import */ var _app_shared_component_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/@shared/component/coming-soon/coming-soon.component */ "df+H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_services_image_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/image.service */ "mnRn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@shared/component/loader/loader.component */ "XBD0");
/* harmony import */ var _shared_component_image_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@shared/component/image/image.component */ "fE3/");













const _c0 = ["imageContent"];
function SearchComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("About ", ctx_r1.totalItems, " results");
} }
function SearchComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchComponent_div_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.openDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-image", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("image", item_r5.webformatURL)("height", 300)("alt", item_r5.tags);
} }
function SearchComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Sorry, No data avaiable");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class SearchComponent {
    constructor(activatedRoute, cdr, modal, imageService) {
        this.activatedRoute = activatedRoute;
        this.cdr = cdr;
        this.modal = modal;
        this.imageService = imageService;
        this.keywords = "";
        this.startIndex = 1;
        this.totalItems = 0;
        this.isLoading = false;
        this.maxPage = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].max_page;
        this.fullSearchImages = new _app_model_image_model__WEBPACK_IMPORTED_MODULE_3__["SearchImages"]();
        this.images = [];
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
            if (params["q"]) {
                this.keywords = params["q"];
            }
            if (params["page"]) {
                this.startIndex = Number(params["page"]);
            }
            if (this.keywords) {
                this.fullSearchImages = new _app_model_image_model__WEBPACK_IMPORTED_MODULE_3__["SearchImages"]();
                this.search(this.keywords, this.startIndex);
            }
        });
    }
    search(keywords, startIndex) {
        this.isLoading = true;
        this.imageService
            .search(keywords, startIndex)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(() => {
            this.isLoading = false;
            this.cdr.detectChanges();
        }))
            .subscribe((data) => {
            var _a;
            this.totalItems = data.total;
            if (data && data.hits) {
                this.fullSearchImages.hits = [...this.fullSearchImages.hits, ...data.hits];
                this.images = [...this.fullSearchImages.hits];
                (_a = this.imageScroller) === null || _a === void 0 ? void 0 : _a.refresh();
            }
        });
    }
    onVsEnd(event) {
        this.imageContent.nativeElement.style.height = event.maxScrollPosition + window.innerHeight + 120 + "px";
        this.fetchMore(event);
    }
    fetchMore(event) {
        if (event.endIndex === -1)
            return;
        // Just support load first 5 pages for easy review
        if (this.startIndex === this.maxPage)
            return;
        if (event.endIndex !== this.images.length - 1)
            return;
        if (this.startIndex >= this.totalItems)
            return;
        if (this.fullSearchImages.hits) {
            this.startIndex += 1;
        }
        this.search(this.keywords, this.startIndex);
    }
    openDetail() {
        this.modal.open(_app_shared_component_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_4__["ComingSoonComponent"], { centered: true }).result.then(() => { }, () => { });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_services_image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_1__["VirtualScrollerComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.imageContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.imageScroller = _t.first);
    } }, decls: 11, vars: 6, consts: [[1, "search-panel", "animate__animated", "animate__fadeIn"], [1, "container"], ["imageContent", ""], [1, "nav-search", "navbar", "navbar-expand", "p-0"], [1, "mr-auto", "results"], [4, "ngIf"], [1, "row", 3, "items", "parentScroll", "vsEnd"], ["imageScroller", ""], ["class", "col-sm-6 col-md-4 col-lg-3 animate__animated animate__fadeIn", 4, "ngFor", "ngForOf"], ["class", "pt-4", 4, "ngIf"], [1, "w-100", 3, "isLoading"], [1, "col-sm-6", "col-md-4", "col-lg-3", "animate__animated", "animate__fadeIn"], [1, "search-item", "shadow", "border", "mt-4", 3, "click"], [3, "image", "height", "alt"], [1, "pt-4"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SearchComponent_span_5_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "virtual-scroller", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("vsEnd", function SearchComponent_Template_virtual_scroller_vsEnd_6_listener($event) { return ctx.onVsEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SearchComponent_div_8_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SearchComponent_p_9_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-loader", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.totalItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.images)("parentScroll", _r2.window);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _r2.viewPortItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.images && ctx.images.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isLoading", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_1__["VirtualScrollerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"], _shared_component_image_image_component__WEBPACK_IMPORTED_MODULE_11__["ImageComponent"]], styles: ["virtual-scroller .scrollable-content {\n  display: flex;\n  flex-wrap: wrap;\n  max-height: none !important;\n}\n.search-panel[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  border-top: 1px solid #dee2e6;\n}\n.nav-search[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n.nav-search[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%] {\n  color: #868e96;\n  font-size: 0.9rem;\n}\n.nav-search[_ngcontent-%COMP%]   .btn-mode[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  color: #868e96;\n}\n.nav-search[_ngcontent-%COMP%]   .btn-mode[_ngcontent-%COMP%]:focus, .nav-search[_ngcontent-%COMP%]   .btn-mode[_ngcontent-%COMP%]:hover, .nav-search[_ngcontent-%COMP%]   .btn-mode.active[_ngcontent-%COMP%] {\n  box-shadow: none;\n  outline: none;\n  color: #5699d0;\n}\n.search-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.search-item[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  outline: none;\n}\n.search-item.list-view[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n}\n.search-item.list-view[_ngcontent-%COMP%]   .search-image[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n  max-width: 300px;\n}\n.search-item.list-view[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.search-item.list-view[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.search-item.list-view[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin-bottom: 0.5rem;\n}\n.search-item.list-view[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .overview[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.search-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 300px;\n  object-fit: cover;\n}\n.search-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.search-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .view-title[_ngcontent-%COMP%] {\n  width: calc(100% - 50px);\n}\n.search-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 26px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 1.2rem;\n}\n.search-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  color: #868e96;\n  height: 26px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 0.9rem;\n}\n.search-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  border: 1px solid #5699d0;\n  color: #5699d0;\n  font-weight: 600;\n  padding: 4px 8px;\n  font-size: 0.9rem;\n  line-height: normal;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRoZW1lXFx0aGVtZS12YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FDSUU7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBQUg7QUFLQTtFQUNDLGVBQUE7RUFDQSw2QkFBQTtBQUZEO0FBSUE7RUFDQyxnQ0FBQTtBQUREO0FBRUM7RUFDQyxjRFlTO0VDWFQsaUJBQUE7QUFBRjtBQUVDO0VBQ0MsZ0JBQUE7RUFDQSxjRE9TO0FDUFg7QUFDRTtFQUdDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNET1U7QUNSYjtBQU1BO0VBQ0MsZUFBQTtBQUhEO0FBSUM7RUFDQyxnQkFBQTtFQUNBLGFBQUE7QUFGRjtBQUlDO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUFGRjtBQUdFO0VBQ0MscUJBQUE7RUFDQSxnQkFBQTtBQURIO0FBR0U7RUFDQyxVQUFBO0FBREg7QUFFRztFQUNDLGVBQUE7QUFBSjtBQUVHO0VBQ0MsaUJBQUE7RUFDQSxxQkFBQTtBQUFKO0FBRUc7RUFDQyxjRDVCTztBQzRCWDtBQUlDO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFGRjtBQUlDO0VBQ0MsZ0JBQUE7QUFGRjtBQUdFO0VBQ0Msd0JBQUE7QUFESDtBQUdFO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBREg7QUFHRTtFQUNDLGNEakRRO0VDa0RSLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQURIO0FBR0U7RUFDQyx5QkFBQTtFQUNBLGNEcERVO0VDcURWLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFESCIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBBcHBsaWNhdGlvbiBnbG9iYWwgdmFyaWFibGVzLlxyXG4gKi9cclxuXHJcbi8vIFNldCBGb250IEF3ZXNvbWUgZm9udCBwYXRoXHJcbiRmYS1mb250LXBhdGg6IFwifkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzXCI7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQm9vdHN0cmFwIHZhcmlhYmxlc1xyXG4vL1xyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgdmFyaWFibGVzIGhlcmUgdG8gc3VpdGUgeW91ciB0aGVtZS5cclxuLy8gQ29weSB2YXJpYWJsZXMgeW91IHdhbnQgdG8gY3VzdG9taXplIGZyb20gbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL192YXJpYWJsZXMuc2Nzc1xyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcblx0eHM6IDU0MHB4LFxyXG5cdHNtOiA3MDBweCxcclxuXHRtZDogOTYwcHgsXHJcblx0bGc6IDExNDBweCxcclxuXHR4bDogMTI4MHB4LFxyXG4pO1xyXG5cclxuLy9cclxuLy8gQ29sb3Igc3lzdGVtXHJcbi8vXHJcblxyXG4kd2hpdGU6ICNmZmY7XHJcbiRncmF5LTEwMDogI2YwZjBmMDtcclxuJGdyYXktMjAwOiAjZTllY2VmO1xyXG4kZ3JheS0zMDA6ICNkZWUyZTY7XHJcbiRncmF5LTQwMDogI2NlZDRkYTtcclxuJGdyYXktNTAwOiAjYWRiNWJkO1xyXG4kZ3JheS02MDA6ICM4NjhlOTY7XHJcbiRncmF5LTcwMDogIzQ5NTA1NztcclxuJGdyYXktODAwOiAjMzQzYTQwO1xyXG4kZ3JheS05MDA6ICMyNDM4NGM7XHJcbiRibGFjazogIzAwMDtcclxuXHJcbiRtYWluLWNvbG9yOiAjNTY5OWQwO1xyXG4kYmx1ZTogIzAwNzNkZDtcclxuJGluZGlnbzogIzY2MTBmMjtcclxuJHB1cnBsZTogIzZmNDJjMTtcclxuJHBpbms6ICNmZjAwNzk7XHJcbiRyZWQ6ICNkYzM1NDU7XHJcbiRvcmFuZ2U6ICNmZDdlMTQ7XHJcbiR5ZWxsb3c6ICNmZmMxMDc7XHJcbiRncmVlbjogIzI4YTc0NTtcclxuJHRlYWw6ICMyMGM5OTc7XHJcbiRjeWFuOiAjMTdhMmI4O1xyXG5cclxuJHRoZW1lLWNvbG9yczogKFxyXG5cdHByaW1hcnk6ICRibHVlLFxyXG5cdHNlY29uZGFyeTogJGdyYXktNjAwLFxyXG5cdHN1Y2Nlc3M6ICRncmVlbixcclxuXHRpbmZvOiAkY3lhbixcclxuXHR3YXJuaW5nOiAkeWVsbG93LFxyXG5cdGRhbmdlcjogJHJlZCxcclxuXHRsaWdodDogJGdyYXktMTAwLFxyXG5cdGRhcms6ICRncmF5LTgwMCxcclxuKTtcclxuXHJcbi8vIFVzZSBCb290c3RyYXAgZGVmYXVsdHMgZm9yIG90aGVyIHZhcmlhYmxlcywgaW1wb3J0ZWQgaGVyZSBzbyB3ZSBjYW4gYWNjZXNzIGFsbCBhcHAgdmFyaWFibGVzIGluIG9uZSBwbGFjZSB3aGVuIHVzZWRcclxuLy8gaW4gY29tcG9uZW50cy5cclxuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9fZnVuY3Rpb25zXCI7XHJcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlc1wiO1xyXG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3RoZW1lLXZhcmlhYmxlc1wiO1xyXG5cclxuOjpuZy1kZWVwIHtcclxuXHR2aXJ0dWFsLXNjcm9sbGVyIHtcclxuXHRcdC5zY3JvbGxhYmxlLWNvbnRlbnQge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5zZWFyY2gtcGFuZWwge1xyXG5cdHBhZGRpbmc6IDFyZW0gMDtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgJGdyYXktMzAwO1xyXG59XHJcbi5uYXYtc2VhcmNoIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyYXktMzAwO1xyXG5cdC5yZXN1bHRzIHtcclxuXHRcdGNvbG9yOiAkZ3JheS02MDA7XHJcblx0XHRmb250LXNpemU6IC45cmVtO1xyXG5cdH1cclxuXHQuYnRuLW1vZGUge1xyXG5cdFx0cGFkZGluZzogMC4yNXJlbTtcclxuXHRcdGNvbG9yOiAkZ3JheS02MDA7XHJcblx0XHQmOmZvY3VzLFxyXG5cdFx0Jjpob3ZlcixcclxuXHRcdCYuYWN0aXZlIHtcclxuXHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0b3V0bGluZTogbm9uZTtcclxuXHRcdFx0Y29sb3I6ICRtYWluLWNvbG9yO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnNlYXJjaC1pdGVtIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Jjpmb2N1cyB7XHJcblx0XHRib3gtc2hhZG93OiBub25lO1xyXG5cdFx0b3V0bGluZTogbm9uZTtcclxuXHR9XHJcblx0Ji5saXN0LXZpZXcge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdC5zZWFyY2gtaW1hZ2Uge1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XHJcblx0XHRcdG1heC13aWR0aDogMzAwcHg7XHJcblx0XHR9XHJcblx0XHQuaW5mbyB7XHJcblx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdC5jYXRlZ29yeSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0XHR9XHJcblx0XHRcdC50aXRsZSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxLjRyZW07XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5vdmVydmlldyB7XHJcblx0XHRcdFx0Y29sb3I6ICRncmF5LTUwMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRpbWcge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXgtaGVpZ2h0OiAzMDBweDtcclxuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdH1cclxuXHQuaW5mbyB7XHJcblx0XHRwYWRkaW5nOiAwLjc1cmVtO1xyXG5cdFx0LnZpZXctdGl0bGUge1xyXG5cdFx0XHR3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcblx0XHR9XHJcblx0XHQudGl0bGUge1xyXG5cdFx0XHRoZWlnaHQ6IDI2cHg7XHJcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdFx0XHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRcdH1cclxuXHRcdC5jYXRlZ29yeSB7XHJcblx0XHRcdGNvbG9yOiAkZ3JheS02MDA7XHJcblx0XHRcdGhlaWdodDogMjZweDtcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRcdGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cdFx0fVxyXG5cdFx0LmNvdW50IHtcclxuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgJG1haW4tY29sb3I7XHJcblx0XHRcdGNvbG9yOiAkbWFpbi1jb2xvcjtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0cGFkZGluZzogNHB4IDhweDtcclxuXHRcdFx0Zm9udC1zaXplOiAwLjlyZW07XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "mnRn":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@core/services/api.service */ "VKHi");




class ImageService {
    constructor(apiService) {
        this.apiService = apiService;
        this.itemPerPage = _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].itemPerPage;
    }
    search(keywords, startIndex) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("key", _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_key)
            .set("q", encodeURIComponent(keywords))
            .set("image_type", 'photo')
            .set("pretty", 'true')
            .set("page", startIndex ? startIndex.toString() : "1")
            .set("per_page", this.itemPerPage)
            .set("lang", localStorage.getItem("language"));
        return this.apiService.get("", params);
    }
}
ImageService.ɵfac = function ImageService_Factory(t) { return new (t || ImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
ImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ImageService, factory: ImageService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "pjF4":
/*!**************************************!*\
  !*** ./src/app/model/image.model.ts ***!
  \**************************************/
/*! exports provided: SearchImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchImages", function() { return SearchImages; });
class SearchImages {
    constructor() {
        this.totalHits = null;
        this.total = null;
        this.hits = [];
    }
}


/***/ }),

/***/ "vuQK":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-virtual-scroller */ "SYYg");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "9urI");
/* harmony import */ var _app_pages_search_search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/pages/search/search-routing.module */ "P8Ee");
/* harmony import */ var _app_pages_search_component_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/pages/search/component/search.component */ "m5UZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class SearchModule {
}
SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function SearchModule_Factory(t) { return new (t || SearchModule)(); }, providers: [
        {
            provide: 'virtual-scroller-default-options',
            useValue: {
                checkResizeInterval: 1000,
                modifyOverflowStyleOfParentScroll: true,
                resizeBypassRefreshThreshold: 5,
                scrollAnimationTime: 750,
                scrollDebounceTime: 0,
                scrollThrottlingTime: 0,
                stripedTable: false,
            },
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"],
            ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__["VirtualScrollerModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImageModule"],
            _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _app_pages_search_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_app_pages_search_component_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"],
        ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__["VirtualScrollerModule"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImageModule"],
        _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _app_pages_search_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-search-search-module.js.map