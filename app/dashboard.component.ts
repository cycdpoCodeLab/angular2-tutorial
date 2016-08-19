/**
 * Created by cyc on 2016/8/19.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html',     //我们指定的所有路径都是相对于该应用的根目录 ( 这里是 app/) 的。因为Angular默认不支持使用相对于当前模块的路径。
	styleUrls: ['app/dashboard.component.css']
})


export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];

	constructor(
		private router: Router,
		private heroService: HeroService
	) {}

	ngOnInit(){
		this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
	}

	gotoDetail(hero: Hero){
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}

}