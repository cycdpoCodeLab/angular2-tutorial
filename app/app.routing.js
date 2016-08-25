/**
 * Created by cyc on 2016/8/19.
 */
"use strict";
var router_1 = require('@angular/router');
//引入组件
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
//路由定义数组
var appRoutes = [
    {
        //重定向，显示/dashboard
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent //component:导航到此路由时，路由器需要创建的组件
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }
];
//使用RouterModule.forRoot方法，导出包含了路由数组的routing常量。它返回一个配置好的路由模块，它将被加入到根 NgModule - AppModule 中。
//export const routing = RouterModule.forRoot(appRoutes);
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map