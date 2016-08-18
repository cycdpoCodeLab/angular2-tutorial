/**
 * Created by cyc on 2016/8/18.
 */


//一般使用AppComponent作为用户根组件



//一个或多个 import 语句来引入所需的文件。
import { Component } from '@angular/core';


//Component 是一个装饰器函数，它接受一个元数据对象作为参数。 通过给这个函数加上@前缀，并使用metadata对象调用它，可以把这个“函数调用”加到组件类的紧上方。
//@Component 是一个装饰器，它把元数据关联到组件类上。这些元数据会告诉Angular如何创建和使用组件类。
@Component({
	selector: 'my-app',                           //selector 字段指定了一个简单的CSS选择器，用于指出放置此组件的 HTML 元素。
	template: '<h1>我的第一个Angular应用</h1>'   //template 字段指定了此组件的模板。 它用一种增强的HTML形式写成，用来告诉 Angular 如何渲染此组件的视图。
})


//一个 组件类 来通过它的模板控制一个视图的外观和行为。
export class AppComponent { }
