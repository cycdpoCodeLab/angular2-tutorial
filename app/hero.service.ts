/**
 * Created by cyc on 2016/8/18.
 */

import { Injectable } from '@angular/core';

//引入模拟数据
import { HEROES } from './mock-heroes';
import { Hero } from "./hero";


//@Injectable()装饰器一定不能忘记加上
@Injectable()


export class HeroService {
	getHero(id: number) {
		//Promise异步请求，接收到响应时回调函数
		//return Promise.resolve(HEROES);

		return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
	}

	getHeroes() {
		return Promise.resolve(HEROES);
	}
}
