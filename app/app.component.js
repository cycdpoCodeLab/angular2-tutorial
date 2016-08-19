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
//Component：组件
//OnInit：生命周期
var core_1 = require('@angular/core');
//引入服务
var hero_service_1 = require('./hero.service');
//Component 是一个装饰器函数，它接受一个元数据对象作为参数。 通过给这个函数加上@前缀，并使用metadata对象调用它，可以把这个“函数调用”加到组件类的紧上方。
//@Component 是一个装饰器，它把元数据关联到组件类上。这些元数据会告诉Angular如何创建和使用组件类。
var AppComponent = (function () {
    //用构造函数代替new函数的实例 heroService = new HeroService();
    //在参数中定义了一个私有的 heroService 属性，并把它标记为注入HeroService的靶点。Angular将会知道，当它创建AppComponent实例时，需要先提供一个HeroService的实例。
    //还需要注册一个HeroService提供商，来告诉注入器如何创建 HeroService，在@Component 组件的元数据底部添加 providers 数组属性 ：providers: [HeroService]
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
    }
    AppComponent.prototype.getHeroes = function () {
        //this.heroes = this.heroService.getHeroes();
        var _this = this;
        //替换为Promise异步形式
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    //带有初始化逻辑的ngOnInit方法，然后留给Angular，供其在正确的时机调用
    //这边通过调用getHeroes来完成初始化
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //template 字段指定了此组件的模板。 它用一种增强的HTML形式写成，用来告诉 Angular 如何渲染此组件的视图。可用多行模板注意符号不同
            //[(ngModel)]="hero.name" 实现双向数据绑定
            template: "\n        <h1>{{title}}</h1>\n\t\t<h2>My Heroes</h2>\n\t\t<ul class=\"heroes\">\n\t\t\t<li *ngFor=\"let hero of heroes\" \n\t\t\t[class.selected]=\"hero === selectedHero\"\n\t\t\t(click)=\"onSelect(hero)\">\n\t\t\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t\n\t\t<my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n\t\t",
            styles: ["\n\t\t.selected {\n\t\t\tbackground-color: #CFD8DC !important;\n\t\t\tcolor: white;\n\t\t}\n\t\t.heroes {\n\t\t\tmargin: 0 0 2em 0;\n\t\t\tlist-style-type: none;\n\t\t\tpadding: 0;\n\t\t\twidth: 15em;\n\t\t}\n\t\t.heroes li {\n\t\t\tcursor: pointer;\n\t\t\tposition: relative;\n\t\t\tleft: 0;\n\t\t\tbackground-color: #EEE;\n\t\t\tmargin: .5em;\n\t\t\tpadding: .3em 0;\n\t\t\theight: 1.6em;\n\t\t\tborder-radius: 4px;\n\t\t}\n\t\t.heroes li.selected:hover {\n\t\t\tbackground-color: #BBD8DC !important;\n\t\t\tcolor: white;\n\t\t}\n\t\t.heroes li:hover {\n\t\t\tcolor: #607D8B;\n\t\t\tbackground-color: #DDD;\n\t\t\tleft: .1em;\n\t\t}\n\t\t.heroes .text {\n\t\t\tposition: relative;\n\t\t\ttop: -3px;\n\t\t}\n\t\t.heroes .badge {\n\t\t\tdisplay: inline-block;\n\t\t\tfont-size: small;\n\t\t\tcolor: white;\n\t\t\tpadding: 0.8em 0.7em 0 0.7em;\n\t\t\tbackground-color: #607D8B;\n\t\t\tline-height: 1em;\n\t\t\tposition: relative;\n\t\t\tleft: -1px;\n\t\t\ttop: -4px;\n\t\t\theight: 1.8em;\n\t\t\tmargin-right: .8em;\n\t\t\tborder-radius: 4px 0 0 4px;\n\t\t}\n\t"],
            //注册一个HeroService提供商，来告诉注入器如何创建HeroService
            providers: [
                hero_service_1.HeroService
            ]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map