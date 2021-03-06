"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.titulo = 'Mi primer pagína en Angular 2';
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n            <h1>{{titulo}}</h1>\n            <nav>\n              <a routerLink=\"/index\" routerLinkActive=\"active\">Home</a>\n              <a routerLink=\"/productos\" routerLinkActive=\"active\">Productos</a>\n              <a routerLink=\"/crear-producto\" routerLinkActive=\"active\">Crear Producto</a>\n              <a routerLink=\"/contacto\" routerLinkActive=\"active\">Contacto</a>\n            </nav>\n            <router-outlet></router-outlet>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map