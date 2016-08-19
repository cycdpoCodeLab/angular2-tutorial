/**
 * Created by cyc on 2016/8/18.
 */


import { Injectable } from '@angular/core';

//引入模拟数据
import { HEROES } from './mock-heroes';
import {Hero} from "./hero";


//@Injectable()装饰器一定不能忘记加上
@Injectable()


export class HeroService {
	getHeroes() {
		//Promise异步请求，接收到响应时回调函数
		return Promise.resolve(HEROES);
	}

	//模拟慢连接
	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(() => resolve(HEROES),2000)//延迟两秒执行
		);
	}



}
