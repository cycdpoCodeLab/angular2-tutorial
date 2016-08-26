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
var router_1 = require('@angular/router');
//引入服务
var hero_service_1 = require('./hero.service');
//Component 是一个装饰器函数，它接受一个元数据对象作为参数。 通过给这个函数加上@前缀，并使用metadata对象调用它，可以把这个“函数调用”加到组件类的紧上方。
//@Component 是一个装饰器，它把元数据关联到组件类上。这些元数据会告诉Angular如何创建和使用组件类。
var HeroesComponent = (function () {
    //用构造函数代替new函数的实例 heroService = new HeroService();
    //在参数中定义了一个私有的 heroService 属性，并把它标记为注入HeroService的靶点。Angular将会知道，当它创建AppComponent实例时，需要先提供一个HeroService的实例。
    //还需要注册一个HeroService提供商，来告诉注入器如何创建 HeroService，在@Component 组件的元数据底部添加 providers 数组属性 ：providers: [HeroService]
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.addingHero = false;
    }
    HeroesComponent.prototype.getHeroes = function () {
        //this.heroes = this.heroService.getHeroes();
        var _this = this;
        //替换为Promise异步形式
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.addHero = function () {
        this.addingHero = true;
        this.selectedHero = null;
    };
    HeroesComponent.prototype.close = function (savedHero) {
        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    };
    HeroesComponent.prototype.deleteHero = function (hero, event) {
        var _this = this;
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(function (res) {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    //带有初始化逻辑的ngOnInit方法，然后留给Angular，供其在正确的时机调用
    //这边通过调用getHeroes来完成初始化
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            //template 字段指定了此组件的模板。 它用一种增强的HTML形式写成，用来告诉 Angular 如何渲染此组件的视图。可用多行模板注意符号不同
            //[(ngModel)]="hero.name" 实现双向数据绑定
            templateUrl: 'app/heroes.component.html',
            styleUrls: ['app/heroes.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map