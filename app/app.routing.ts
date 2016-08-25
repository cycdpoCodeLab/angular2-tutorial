/**
 * Created by cyc on 2016/8/19.
 */

//引入核心库
import { ModuleWithProviders }  from '@angular/core'; //?
import { Routes, RouterModule } from '@angular/router';

//引入组件
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';


//路由定义数组
const appRoutes: Routes = [
	{
		//重定向，显示/dashboard
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'heroes',                   //path:路由器会用它来匹配路由中指定的路径和浏览器地址栏中的当前路径，如 /heroes
		component: HeroesComponent        //component:导航到此路由时，路由器需要创建的组件
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'detail/:id',
		component: HeroDetailComponent
	}
];


//使用RouterModule.forRoot方法，导出包含了路由数组的routing常量。它返回一个配置好的路由模块，它将被加入到根 NgModule - AppModule 中。
//export const routing = RouterModule.forRoot(appRoutes);
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
