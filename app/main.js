/**
 * Created by cyc on 2016/8/18.
 */
"use strict";
//引入Angular的浏览器platformBrowserDynamic函数
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//引用应用模块：AppModule
var app_module_1 = require('./app.module');
//调用bootstrap函数，把AppComponent传进去。
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map