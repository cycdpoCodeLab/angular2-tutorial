/**
 * Created by cyc on 2016/8/18.
 */


//每个应用都至少需要一个模块（ 根模块 ），习惯上我们把它叫做 AppModule

//引入
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

//引入AppComponent
import { AppComponent }  from './app.component';

//引入HeroDetailComponent
import { HeroDetailComponent } from './hero-detail.component';


//我们要把元数据传给 NgModule 装饰器函数
@NgModule({
	imports: [            //其它模块，用来导出当前模块所需的“素材”。 几乎每个应用的根模块都要导入BrowserModule模块。
		BrowserModule,
		FormsModule
	],
	declarations: [       //从属于当前模块的组件和指令
		AppComponent,
		HeroDetailComponent
	],
	bootstrap: [          //标记出根组件，在启动应用时， Angular应该通过它来进行引导。
		AppComponent
	]
})
export class AppModule { }
