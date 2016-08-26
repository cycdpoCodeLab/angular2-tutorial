/**
 * Created by cyc on 2016/8/18.
 */

import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'; //http模块

//引入模拟数据
//import { HEROES } from './mock-heroes';
import { Hero } from "./hero";

import 'rxjs/add/operator/toPromise';

//@Injectable()装饰器一定不能忘记加上
@Injectable()


export class HeroService {
	private heroesUrl = 'app/heroes'; //url to web api

	constructor(private http: Http) { }


	getHero(id: number): Promise<Hero> {
		//Promise异步请求，接收到响应时回调函数
		//return Promise.resolve(HEROES);

		return this.getHeroes()
			.then(heroes => heroes.find(hero => hero.id === id));
	}

	// getHeroes(): Promise<Hero[]> {
	// 	return Promise.resolve(HEROES);
	// }

	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
			.toPromise()
			.then(response =>response.json().data as Hero[])
			.catch(this.handleError);
	}

	//添加新英雄
	private post(hero: Hero): Promise<Hero> {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		return this.http.post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}


	//编辑英雄
	private put(hero: Hero): Promise<Hero> {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.heroesUrl}/${hero.id}`;

		return this.http
			.put(url, JSON.stringify(hero), {headers: headers})
			.toPromise()
			.then(() => hero)
			.catch(this.handleError);
	}


	//删除英雄
	delete(hero: Hero): Promise<Response> {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.heroesUrl}/${hero.id}`;

		return this.http
			.delete(url, {headers: headers})
			.toPromise()
			.catch(this.handleError);
	}


	//将put post合并公开接口
	save(hero:Hero):Promise<Hero> {
		if (hero.id) {
			return this.put(hero);
		}

		return this.post(hero);
	}


	//错误信息处理
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
