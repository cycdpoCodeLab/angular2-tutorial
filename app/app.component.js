/**
 * Created by cyc on 2016/8/18.
 */
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
//一般使用AppComponent作为用户根组件
//一个或多个 import 语句来引入所需的文件。
var core_1 = require('@angular/core');
//Component 是一个装饰器函数，它接受一个元数据对象作为参数。 通过给这个函数加上@前缀，并使用metadata对象调用它，可以把这个“函数调用”加到组件类的紧上方。
//@Component 是一个装饰器，它把元数据关联到组件类上。这些元数据会告诉Angular如何创建和使用组件类。
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>我的第一个Angular应用</h1>' //template 字段指定了此组件的模板。 它用一种增强的HTML形式写成，用来告诉 Angular 如何渲染此组件的视图。
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map