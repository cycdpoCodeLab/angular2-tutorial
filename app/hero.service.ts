/**
 * Created by cyc on 2016/8/18.
 */


import { Injectable } from '@angular/core';

import { Hero } from './hero';
//引入模拟数据
import { HEROES } from './mock-heroes';


//@Injectable()装饰器一定不能忘记加上
@Injectable()


export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}
}
