/**
 * Created by cyc on 2016/8/19.
 */


import { Component } from '@angular/core';

import './rxjs-extensions';

@Component({
	selector: 'my-app',

	//RouterOutlet 是 ROUTER_DIRECTIVES 常量中的一员。 当我们在应用中导航时，路由器就把激活的组件显示在 <router-outlet> 里面。
	template:`
		<h1>{{title}}</h1>
		<nav>
			<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
			<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['app/app.component.css']
})

export class AppComponent {
	title = 'Tour of Heroes';
}