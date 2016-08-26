/**
 * Created by cyc on 2016/8/18.
 */


//每个应用都至少需要一个模块（ 根模块 ），习惯上我们把它叫做 AppModule

//引入
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http'; //http模块

//Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


//引入Component
import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';

//引入service
import { HeroService } from './hero.service';

//引入路由
import { routing } from './app.routing';





//我们要把元数据传给 NgModule 装饰器函数
@NgModule({
	imports: [            //其它模块，用来导出当前模块所需的“素材”。 几乎每个应用的根模块都要导入BrowserModule模块。
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		routing
	],
	declarations: [       //从属于当前模块的组件和指令
		AppComponent,
		HeroesComponent,
		DashboardComponent,
		HeroDetailComponent,
		HeroSearchComponent
	],
	providers: [          //供应商
		HeroService
	],
	bootstrap: [          //标记出根组件，在启动应用时， Angular应该通过它来进行引导。
		AppComponent
	]
})

export class AppModule { }
