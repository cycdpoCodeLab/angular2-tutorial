/**
 * Created by cyc on 2016/8/18.
 */


//一般使用AppComponent作为用户根组件

//一个或多个 import 语句来引入所需的文件。
//Component：组件
//OnInit：生命周期
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';

//引入服务
import { HeroService } from './hero.service';



//Component 是一个装饰器函数，它接受一个元数据对象作为参数。 通过给这个函数加上@前缀，并使用metadata对象调用它，可以把这个“函数调用”加到组件类的紧上方。
//@Component 是一个装饰器，它把元数据关联到组件类上。这些元数据会告诉Angular如何创建和使用组件类。
@Component({
	selector: 'my-heroes',                           //selector 字段指定了一个简单的CSS选择器，用于指出放置此组件的 HTML 元素。

	//template 字段指定了此组件的模板。 它用一种增强的HTML形式写成，用来告诉 Angular 如何渲染此组件的视图。可用多行模板注意符号不同
	//[(ngModel)]="hero.name" 实现双向数据绑定
	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css']
})

//一个组件类来通过它的模板控制一个视图的外观和行为。
//使用生命周期hook须加上 implements OnInit
export class HeroesComponent implements OnInit {

	error: any;
	addingHero = false;

	//模拟英雄
	heroes: Hero[];
	selectedHero: Hero;

	//用构造函数代替new函数的实例 heroService = new HeroService();
	//在参数中定义了一个私有的 heroService 属性，并把它标记为注入HeroService的靶点。Angular将会知道，当它创建AppComponent实例时，需要先提供一个HeroService的实例。
	//还需要注册一个HeroService提供商，来告诉注入器如何创建 HeroService，在@Component 组件的元数据底部添加 providers 数组属性 ：providers: [HeroService]
	constructor(
		private router: Router,
		private heroService: HeroService
	) { }

	getHeroes():void {
		//this.heroes = this.heroService.getHeroes();

		//替换为Promise异步形式
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}


	addHero(): void {
		this.addingHero = true;
		this.selectedHero = null;
	}

	close(savedHero:Hero): void {
		this.addingHero = false;
		if (savedHero) {
			this.getHeroes();
		}
	}

	deleteHero(hero: Hero, event: any): void {
		event.stopPropagation();
		this.heroService
			.delete(hero)
			.then(
				res => {
					this.heroes = this.heroes.filter(h => h !== hero);
					if (this.selectedHero === hero) {
						this.selectedHero = null;
					}
				}
			)
			.catch(error => this.error = error);

	}


	//带有初始化逻辑的ngOnInit方法，然后留给Angular，供其在正确的时机调用
	//这边通过调用getHeroes来完成初始化
	ngOnInit():void {
		this.getHeroes();
	}

	onSelect(hero: Hero):void {
		this.selectedHero = hero;
	}

	gotoDetail():void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}


