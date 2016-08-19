/**
 * Created by cyc on 2016/8/18.
 */

//所有组件名都以Component结尾。所有组件的文件名都以.component结尾

//引入
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero-detail.component.html',
	styleUrls: ['app/hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
	@Input()
	hero: Hero;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute
	){}

	ngOnInit(){
		this.route.params.forEach((params: Params) => {
			//英雄的id是数字，而路由参数的值总是字符串。所以我们需要通过JavaScript的(+)操作符把路由参数的值转成数字。
			let id = +params['id'];
			this.heroService.getHeroes(id).then(hero => this.hero = hero);
		});
	}

	goBack () {
		window.history.back();
	}
}