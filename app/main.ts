/**
 * Created by cyc on 2016/8/18.
 */

//引入Angular的浏览器platformBrowserDynamic函数
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//引用应用模块：AppModule
import { AppModule } from './app.module';

//调用bootstrap函数，把AppComponent传进去。
platformBrowserDynamic().bootstrapModule(AppModule);
