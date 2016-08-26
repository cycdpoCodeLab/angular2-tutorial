/**
 * Created by cyc on 2016/8/18.
 */

//所有组件名都以Component结尾。所有组件的文件名都以.component结尾

//引入
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero-detail.component.html',
	styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;
	@Output() close = new EventEmitter();
	error: any;
	navigated = false; // true if navigated here

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute
	){}

	ngOnInit(): void {
		this.route.params.forEach(
			(params: Params) => {

				if( params['id'] !== undefined){
					//英雄的id是数字，而路由参数的值总是字符串。所以我们需要通过JavaScript的(+)操作符把路由参数的值转成数字。
					let id = +params['id'];
					this.navigated = true;
					this.heroService.getHero(id)
						.then(hero => this.hero = hero);
				} else {
					this.navigated = false;
					this.hero = new Hero();
				}
			}
		);
	}

	save(): void {
		this.heroService
			.save(this.hero)
			.then(
				hero => {
					this.hero = hero;    //saved hero, w/ id if new
					this.goBack(hero);
				}
			)
			.catch(
				error => {
					this.error = error;  //TODO: Display error message
				}
			)
	}

	goBack(savedHero:Hero = null): void {
		this.close.emit(savedHero);
		if(this.navigated) {
			window.history.back();
		}
	}
}