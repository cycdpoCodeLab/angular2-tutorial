/**
 * Created by cyc on 2016/8/18.
 */


//一般使用AppComponent作为用户根组件

//一个或多个 import 语句来引入所需的文件。
//Component：组件
//OnInit：生命周期
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';

//引入服务
import { HeroService } from './hero.service';



//Component 是一个装饰器函数，它接受一个元数据对象作为参数。 通过给这个函数加上@前缀，并使用metadata对象调用它，可以把这个“函数调用”加到组件类的紧上方。
//@Component 是一个装饰器，它把元数据关联到组件类上。这些元数据会告诉Angular如何创建和使用组件类。
@Component({
	selector: 'my-app',                           //selector 字段指定了一个简单的CSS选择器，用于指出放置此组件的 HTML 元素。

	//template 字段指定了此组件的模板。 它用一种增强的HTML形式写成，用来告诉 Angular 如何渲染此组件的视图。可用多行模板注意符号不同
	//[(ngModel)]="hero.name" 实现双向数据绑定
	template: `
        <h1>{{title}}</h1>
		<h2>My Heroes</h2>
		<ul class="heroes">
			<li *ngFor="let hero of heroes" 
			[class.selected]="hero === selectedHero"
			(click)="onSelect(hero)">
				<span class="badge">{{hero.id}}</span> {{hero.name}}
			</li>
		</ul>
		
		<my-hero-detail [hero]="selectedHero"></my-hero-detail>
		`,
	styles:[`
		.selected {
			background-color: #CFD8DC !important;
			color: white;
		}
		.heroes {
			margin: 0 0 2em 0;
			list-style-type: none;
			padding: 0;
			width: 15em;
		}
		.heroes li {
			cursor: pointer;
			position: relative;
			left: 0;
			background-color: #EEE;
			margin: .5em;
			padding: .3em 0;
			height: 1.6em;
			border-radius: 4px;
		}
		.heroes li.selected:hover {
			background-color: #BBD8DC !important;
			color: white;
		}
		.heroes li:hover {
			color: #607D8B;
			background-color: #DDD;
			left: .1em;
		}
		.heroes .text {
			position: relative;
			top: -3px;
		}
		.heroes .badge {
			display: inline-block;
			font-size: small;
			color: white;
			padding: 0.8em 0.7em 0 0.7em;
			background-color: #607D8B;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -4px;
			height: 1.8em;
			margin-right: .8em;
			border-radius: 4px 0 0 4px;
		}
	`],
	//注册一个HeroService提供商，来告诉注入器如何创建HeroService
	providers: [
		HeroService
	]
})

//一个组件类来通过它的模板控制一个视图的外观和行为。
//使用生命周期hook须加上 implements OnInit
export class AppComponent implements OnInit {
	title = 'Tour of Heroes';

	//模拟英雄
	heroes: Hero[];
	selectedHero: Hero;

	//用构造函数代替new函数的实例 heroService = new HeroService();
	//在参数中定义了一个私有的 heroService 属性，并把它标记为注入HeroService的靶点。Angular将会知道，当它创建AppComponent实例时，需要先提供一个HeroService的实例。
	//还需要注册一个HeroService提供商，来告诉注入器如何创建 HeroService，在@Component 组件的元数据底部添加 providers 数组属性 ：providers: [HeroService]
	constructor(private heroService: HeroService) { }

	getHeroes() {
		//this.heroes = this.heroService.getHeroes();

		//替换为Promise异步形式
		this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}

	//带有初始化逻辑的ngOnInit方法，然后留给Angular，供其在正确的时机调用
	//这边通过调用getHeroes来完成初始化
	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) { this.selectedHero = hero; }
}


