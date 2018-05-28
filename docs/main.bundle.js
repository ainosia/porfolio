webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("../../../../../src/app/services/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_ps) {
        this._ps = _ps;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_projects_service__ = __webpack_require__("../../../../../src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_intro_intro_component__ = __webpack_require__("../../../../../src/app/components/intro/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_projects_projects_component__ = __webpack_require__("../../../../../src/app/components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_project_project_component__ = __webpack_require__("../../../../../src/app/components/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_skills_skills_component__ = __webpack_require__("../../../../../src/app/components/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_layout_layout_component__ = __webpack_require__("../../../../../src/app/components/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {APP_BASE_HREF} from '@angular/common';
// Rutas

// Servicios

// Componentes










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_intro_intro_component__["a" /* IntroComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* app_routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_projects_service__["a" /* ProjectsService */]
                // { provide: APP_BASE_HREF, useValue : '/' }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app_routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index__ = __webpack_require__("../../../../../src/app/components/index.ts");


var app_routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_index__["a" /* HomeComponent */] },
    { path: 'proyecto/:id', component: __WEBPACK_IMPORTED_MODULE_1__components_index__["b" /* ProjectComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var app_routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(app_routes);


/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"sobre_mi\" class=\"stick padding-section grey-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-6\">\n        <header>\n          <h2>Sobre <span class=\"mano-alzada\">mí</span></h2>\n        </header>\n        <div class=\"divider\"></div>\n        <q>\n          Puede que en principio no sepa hacer algo, pero ten por seguro que en poco tiempo aprenderé cómo se hace\n        </q>\n        <p>\n          Hola, soy Sonia Villa.\n        </p>\n        <p>\n          Tras varios años trabajando en puestos de gestión (primero en Londres y después en Madrid), principalmente en\n          departamentos de desarrollo, me picó el gusanillo y me pasé al otro lado.\n        </p>\n        <p>\n          Comencé echando una mano en tareas sencillas y aprendiendo de forma autodidacta, pero, a medida que me iba enganchando,\n          decidí realizar cursos de formación para poder ir asumiendo tareas más complejas.\n        </p>\n        <p>\n          Casi quince años después, tras infinitas horas frente al ordenador, muchos cursos a mis espaldas y dos carreras,\n          trabajo como desarrolladora web en una <i>startup</i>.\n        </p>\n        <p>\n          Soy adicta a la lectura, a las series y al chocolate y, para \"desestresarme\", juego al baloncesto, nado o hago ganchillo.\n        </p>\n        <p>\n          Hace un par de años descubrí la robótica y también hago mis pinitos con Arduino. Próximo objetivo: aprender Python.\n        </p>\n      </div>\n      <div class=\"col-md-6 col-sm-6 img_programming\">\n        <img src=\"assets/img/graphic/programming.svg\" alt=\"Programador\">\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <section id=\"contacto\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <img src=\"assets/img/basic/logo-icon-100.svg\" alt=\"Logo\" class=\"logo\">\n          <p>&#169; {{ year }} {{ name }}</p>\n        </div>\n        <div class=\"col-md-6 email\">\n          <a href=\"mailto:ainosia@gmail.com\">{{ email }}</a>\n        </div>\n      </div>\n    </div>\n  </section>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
        this.name = "Sonia Villa";
        this.email = "ainosia@gmail.com";
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: []
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"menu\">\n  <a [routerLink]=\"['/proyectos']\"><img src=\"assets/img/basic/logo.svg\" alt=\"Logo\"></a>\n  <a [routerLink]=\"['/']\" class=\"menu-trigger\">&#9776;</a>\n  <ul>\n    <li>\n      <a\n        [routerLink]=\"['/proyectos']\"\n        fragment=\"proyectos\"\n        class=\"desplazar\"\n        data-nivel=\"#proyectos\">\n        <i class=\"fas fa-code-branch\"></i>\n        Proyectos\n      </a>\n    </li>\n    <li>\n      <a\n        [routerLink]=\"['/conocimientos']\"\n        fragment=\"conocimientos\"\n        class=\"desplazar\"\n        data-nivel=\"#conocimientos\">\n        <i class=\"far fa-lightbulb\"></i>\n        Conocimientos\n      </a>\n    </li>\n    <li>\n      <a\n        [routerLink]=\"['/sobre_mi']\"\n        fragment=\"sobre_mi\"\n        class=\"desplazar\"\n        data-nivel=\"#sobre_mi\">\n        <i class=\"fas fa-street-view\"></i>\n        Sobre mí\n      </a>\n    </li>\n    <li>\n      <a href=\"assets/docs/cv_SoniaVilla.pdf\" download=\"CV.pdf\">\n        <i class=\"far fa-file-pdf\"></i>\n        CV\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <app-projects></app-projects>\n  <app-skills></app-skills>\n  <app-about></app-about>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_project_component__ = __webpack_require__("../../../../../src/app/components/project/project.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__project_project_component__["a"]; });




/***/ }),

/***/ "../../../../../src/app/components/intro/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"intro\" class=\"text-center animatedIntro fadeIn\">\n  <div class=\"container top\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <h1 class=\"main animated slideInUp\"><code><</code>Sonia Villa<code>/></code></h1>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/components/intro/intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-intro',
            template: __webpack_require__("../../../../../src/app/components/intro/intro.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-intro *ngIf=\"router.url === '/home'\"></app-intro>\n<!-- <app-intro *ngIf=\"router.url.indexOf('/proyecto/pr-')\"></app-intro> -->\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router) {
        this.router = router;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        $(window).on('scroll', scrollEffects);
        var nivelIntro, isSticky = false, profundidad;
        $(document).ready(function () {
            // sistema de desplazamiento vertical
            $('.desplazar').on('click', navegar);
            // cálculo de profundidades objetivo
            nivelIntro = $('.stick').offset().top - $('.menu').innerHeight();
        });
        function scrollEffects() {
            profundidad = $(window).scrollTop();
            $('.reveal').each(function () {
                if (profundidad >= $(this).offset().top - $(window).innerHeight() / 2) {
                    var objReveal_1 = $(this);
                    setTimeout(function () {
                        objReveal_1.addClass('visible');
                    }, $(this).data('delay'));
                }
            });
            // Menú "sticky"
            if (nivelIntro <= profundidad) {
                if (!isSticky) {
                    fixMenu(true);
                }
            }
            else {
                if (isSticky) {
                    fixMenu(false);
                }
            }
        }
        function fixMenu(fix) {
            if (fix) {
                $('.menu').css({ position: 'fixed', top: 0, left: 0 });
                $('#proyectos').css({ marginTop: $('.menu').innerHeight() });
                isSticky = true;
            }
            else {
                $('.menu').css('position', 'static');
                $('#proyectos').css({ marginTop: 0 });
                isSticky = false;
            }
        }
        function navegar(e) {
            e.preventDefault();
            var profundidad = $($(this).data('nivel')).offset().top;
            var distanciaAbs = Math.abs($(window).scrollTop() - profundidad);
            $('body, html').animate({
                scrollTop: profundidad
            }, distanciaAbs * .4);
        }
        // $(document).ready(function () {
        //   $(document).on("scroll");
        //
        //   // Enlaces activos
        //   $('.menu ul li a').on('click', function (e) {
        //     e.preventDefault();
        //     $(document).off("scroll");
        //
        //     $('.menu ul li a').each(function () {
        //         $(this).removeClass('tab_active');
        //     })
        //     $(this).addClass('tab_active');
        //   });
        // });
        //Menú responsive
        $(document).ready(function () {
            $('.menu-trigger').click(function () {
                $('nav ul').slideToggle(768);
                $('nav ul').css({ position: 'fixed' });
            });
            $('nav ul li').click(function () {
                if ($(window).width() < 768) {
                    $('nav ul').css('display', 'none');
                }
            });
            $(window).resize(function () {
                if ($(window).width() >= 768) {
                    $('nav ul').css('display', 'none');
                }
            });
        });
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/components/layout/layout.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<main id=\"proyecto\" class=\"stick\">\n  <div *ngIf=\"project\">\n    <section class=\"grey-section animated fadeIn\">\n      <!-- assets/img/projects/{{ code }}/main.png -->\n      <div\n        [ngStyle]=\"{ 'background-image':'url(assets/img/projects/'+ code +'/main.png)' }\"\n        class=\"row cover_img\">\n        <header>\n          <h1>{{ project.title }}</h1>\n          <h2>{{ project.tech }}</h2>\n        </header>\n      </div>\n    </section>\n\n    <section class=\"padding-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6\">\n            <header>\n              <h2>{{ project.remark }} <span class=\"mano-alzada\">{{ project.subtitle }}</span></h2>\n            </header>\n            <div class=\"divider\"></div>\n            <p>{{ project.desc1 }}</p>\n            <p>{{ project.desc2 }}</p>\n            <p *ngIf=\"project.url\" class=\"git\">\n              <i class=\"fab fa-github\"></i><a href=\"{{ project.url }}\" target=\"_blank\">{{ project.url }}</a>\n            </p>\n          </div>\n          <div class=\"col-md-6 col-sm-6\">\n            <img src=\"assets/img/projects/{{ code }}/pic-1.png\" alt=\"Imagen {{ project.title }}\">\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"grey-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 content_centered\">\n            <img src=\"assets/img/projects/{{ code }}/main.png\" alt=\"Imagen {{ project.title }}\">\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_projects_service__ = __webpack_require__("../../../../../src/app/services/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(route, _ps) {
        var _this = this;
        this.route = route;
        this._ps = _ps;
        this.project = undefined;
        this.code = undefined;
        route.params.subscribe(function (param) {
            _ps.loadProject(param['id']).subscribe(function (res) {
                _this.code = param['id'];
                _this.project = res.json();
            });
        });
    }
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__("../../../../../src/app/components/project/project.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_projects_service__["a" /* ProjectsService */]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"proyectos\" class=\"stick padding-section grey-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <header>\n          <h2>Últimos <span class=\"mano-alzada\">proyectos</span></h2>\n          <div class=\"divider\"></div>\n        </header>\n      </div>\n    </div>\n\n    <div class=\"overlay\" *ngIf=\"_ps.loading\">\n      <div class=\"spinner\"></div>\n    </div>\n\n    <div *ngIf=\"_ps.projects.length > 0 && !_ps.loading\" class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-5 animated fadeIn\">\n      <a *ngFor=\"let project of _ps.projects\"\n        [routerLink]=\"['/proyecto', project.code]\"\n        class=\"rk-item ae-masonry__item\">\n        <img src=\"assets/img/projects/{{ project.code }}/main.png\" alt=\"Imagen {{ project.title }}\">\n        <div class=\"item-meta\">\n          <h2>{{ project.title }}</h2>\n          <p>{{ project.tech }}</p>\n        </div>\n      </a>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("../../../../../src/app/services/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(_ps) {
        this._ps = _ps;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/components/projects/projects.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"conocimientos\" class=\"stick\">\r\n  <div id=\"skills_intro\" class=\"padding-section\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <header>\r\n            <h2>Desarrollo <span class=\"mano-alzada\">web</span></h2>\r\n            <div class=\"divider\"></div>\r\n          </header>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <article>\r\n            <h5>\r\n              <i class=\"fas fa-desktop\"></i>\r\n              <i class=\"fas fa-tablet-alt\"></i>\r\n              <i class=\"fas fa-mobile-alt\"></i>\r\n              Diseño <span class=\"mano-alzada\">multidispositivo</span>\r\n            </h5>\r\n            <p>\r\n              Reduce significativamente el coste de desarrollo y mantenimiento de las aplicaciones frente a otras soluciones, como pueden\r\n              ser las aplicaciones nativas.\r\n            </p>\r\n          </article>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <article>\r\n            <h5>\r\n              <i class=\"fas fa-code\"></i>\r\n              Web <span class=\"mano-alzada\">semántica</span>\r\n            </h5>\r\n            <p>\r\n              Los usuarios encuentran respuestas a sus preguntas de forma sencilla y rápida gracias a una información mejor definida.\r\n            </p>\r\n          </article>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <article>\r\n            <h5>\r\n              <i class=\"fas fa-hand-point-up\"></i>\r\n              Usabilidad</h5>\r\n            <p>\r\n              Diseño centrado en el usuario, que hace posible que éste pueda interactuar con las aplicaciones de forma más fácil, cómoda e intuitiva.\r\n            </p>\r\n          </article>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <article>\r\n            <h5>\r\n              <span class=\"icon w3c\">Accesibilidad</span>\r\n            </h5>\r\n            <p>\r\n              Permite que personas con discapacidad o con distintas necesidades puedan percibir, entender, navegar e interactuar con la Web,\r\n              aportando a su vez contenidos.\r\n            </p>\r\n          </article>\r\n        </div>\r\n\r\n        <div class=\"col-md-8\">\r\n          <article>\r\n            <h5>\r\n              <i class=\"fab fa-firefox\"></i>\r\n              <i class=\"fab fa-chrome\"></i>\r\n              <i class=\"fab fa-internet-explorer\"></i>\r\n              <i class=\"fab fa-safari\"></i>\r\n              <i class=\"fab fa-opera\"></i>\r\n              Compatible <span class=\"mano-alzada\">con todos los navegadores</span>\r\n            </h5>\r\n            <p>\r\n              Las aplicaciones se muestran de forma muy similar en todos los navegadores. Para ello se realiza el desarrollo cumpliendo los\r\n              estándares web, de forma que cualquier navegador actual o futuro que cumpla estos estándares mostrará las páginas correctamente.\r\n            </p>\r\n          </article>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"skills\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-6 elemento\">\r\n          <article class=\"marco reveal\" data-delay=\"0\">\r\n              <i class=\"fab fa-earlybirds\"></i>\r\n              <div class=\"numero\">> 15</div>\r\n              <h5>Años de experiencia</h5>\r\n            </article>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 elemento\">\r\n          <article class=\"marco reveal\" data-delay=\"200\">\r\n              <i class=\"fas fa-code-branch\"></i>\r\n              <div class=\"numero\">> 50</div>\r\n              <h5>Proyectos realizados</h5>\r\n            </article>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 elemento\">\r\n          <article class=\"marco reveal\" data-delay=\"400\">\r\n              <i class=\"fab fa-usb\"></i>\r\n              <div class=\"numero\">> 20</div>\r\n              <h5>Tecnologías empleadas</h5>\r\n            </article>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 elemento\">\r\n          <article class=\"marco reveal\" data-delay=\"600\">\r\n              <i class=\"far fa-file-code\"></i>\r\n              <div class=\"numero numero_big\">&infin;</div>\r\n              <h5>Líneas de código</h5>\r\n            </article>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"skills_programming\" class=\"padding-section grey-section\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-sm-6\">\r\n          <header>\r\n            <h2>Tecnologías</h2>\r\n          </header>\r\n          <div class=\"divider\"></div>\r\n          <ul>\r\n            <li>HTML</li>\r\n            <li>CSS</li>\r\n            <li>JavaScript</li>\r\n            <li>ES6</li>\r\n            <li>TypeScript</li>\r\n            <li>Angular</li>\r\n            <li>JQuery</li>\r\n            <li>PHP</li>\r\n            <li>WordPress</li>\r\n            <li>Git</li>\r\n            <li>Bootstrap</li>\r\n            <li>Sass</li>\r\n            <li>Ionic</li>\r\n            <li>Node</li>\r\n          </ul>\r\n        </div>\r\n        <div id=\"tech\" class=\"col-md-6 col-sm-6\">\r\n          <img src=\"assets/img/graphic/tech.svg\" alt=\"Tecnologías\" class=\"animated reveal\" data-delay=\"400\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"skills_description\" class=\"padding-section border-bottom\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <header>\r\n            <h2>Herramientas <span class=\"mano-alzada\">Adobe</span></h2>\r\n            <div class=\"divider\"></div>\r\n          </header>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 col-sm-6 claimbar\">\r\n            <img src=\"assets/img/graphic/adobe_logo.svg\" alt=\"Logo Adobe\">\r\n        </div>\r\n\r\n        <div class=\"col-md-8 col-sm-6 barras reveal\">\r\n          <p>Photoshop <span class=\"pull-right\">100</span></p>\r\n          <div class=\"progress100\"></div>\r\n\r\n          <p>Illustrator <span class=\"pull-right\">100</span></p>\r\n          <div class=\"progress100\"></div>\r\n\r\n          <p>Premiere <span class=\"pull-right\">80</span></p>\r\n          <div class=\"progress80\"></div>\r\n\r\n          <p>After Effects <span class=\"pull-right\">70</span></p>\r\n          <div class=\"progress70\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/components/skills/skills.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsService = /** @class */ (function () {
    function ProjectsService(http) {
        this.http = http;
        this.projects = [];
        this.loading = true;
        this.loadProjects();
    }
    ProjectsService.prototype.loadProjects = function () {
        var _this = this;
        this.loading = true;
        this.http.get('https://porfolioangular.firebaseio.com/proyectos_idx.json')
            .subscribe(function (res) {
            _this.loading = false;
            _this.projects = res.json();
        });
    };
    ProjectsService.prototype.loadProject = function (code) {
        return this.http.get("https://porfolioangular.firebaseio.com/proyectos/" + code + ".json");
    };
    ProjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map