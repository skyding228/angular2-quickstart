## 简介
angular2 的一个简单example
https://angular.io/docs/js/latest/quickstart.html

## 运行说明
假定已经有node环境
```
git clone https://github.com/1329555958/angular2-quickstart.git
cd angular2-quickstart
npm install
npm start
```
此时出现在你面前的应该是浏览器打开了http://localhost:3000
此处应该有掌声，送给你

## 模块说明
* [systemjs](https://github.com/systemjs/systemjs)
  一个模块加载库,可以加载css、json、image、text等；
  可以用来将coffeescript、typescript、es6等转换为浏览器支持的低版本
  可以通过插件渲染模板jade、handlebars、markdown、sass等
* [es6-promise](https://github.com/jakearchibald/es6-promise)
  This is a polyfill of the ES6 Promise.
  一个polyfill是一段代码(或者插件),提供了那些开发者们希望浏览器原生提供支持的功能.
* [es6-shim](https://github.com/paulmillr/es6-shim/)
  一个shim是一个库,它将一个新的API引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现.
* [reflect-metadata](https://github.com/rbuckton/ReflectDecorators)
  希望提供装饰器模式，俗称注解;Proposal to add Decorators to ES7, along with a prototype for an ES7 Reflection API for Decorator Metadata
* [rxjs](https://github.com/ReactiveX/RxJS)
  监控属性变化，功能就是Object.observe
* [zone.js](https://github.com/angular/zone.js)
  worker模式，类似多线程，提高性能
* [lite-server](https://github.com/johnpapa/lite-server)
  一个轻量级的开发服务器，可以打开浏览器，监控文件变化并自动更新，文件找不到时提供回调
  Lightweight development only node server that serves a web app, opens it in the browser, refreshes when html or javascript change, injects CSS changes using sockets, and has a fallback page when a route is not found.

## 当然你也可以从0开始大家
假定你已经具备了nodejs环境；
* 新建目录结构
   angular2-quickstart
        |----app
        |    |----app.component.js
        |    |----boot.js
        |----index.html
        |----package.json
* 修改[package.json](#package.json)(npm 相关，如果看不懂这里面的内容请关注nodejs)
* 安装依赖
    `npm install` 在package.json同级目录下执行（我假装你不知道在哪里执行）
    执行的时候可能有红色字体的警告，无视它们，最后会成功的
* 修改[app.component.js](#app.component.js)
* 修改[boot.js](#boot.js)
* 修改[index.html](#index.html)

此时你发现你的目录多出了node_modules及下面一些目录；
运行`npm start`，你的默认浏览器会打开一个页面，http://localhost:3000 ,如果没有，可以联系我；

恭喜你！你很棒，累了吧，休息会，稍后我们再细聊具体细节!


##代码清单
<code id="package.json">package.json</code>
```
{
  "name": "angular2-quickstart",
  "version": "1.0.0",
  "scripts": {
    "start": "npm run lite",
    "lite": "lite-server"
  },
  "license": "ISC",
  "dependencies": {
    "angular2": "2.0.0-beta.0",
    "systemjs": "0.19.6",
    "es6-promise": "^3.0.2",
    "es6-shim": "^0.33.3",
    "reflect-metadata": "0.1.2",
    "rxjs": "5.0.0-beta.0",
    "zone.js": "0.5.10"
  },
  "devDependencies": {
    "lite-server": "^1.3.1"
  }
}
```
<code id="app.component.js">app.component.js</code>
```
(function (app) {
    app.AppComponent = ng.core
        .Component({
            selector: '.my-app',//简单的CSS选择器
            template: '<h1>My First Angular 2 App</h1>'
        })
        .Class({
            constructor: function () {
            }
        });
})(window.app || (window.app = {}));
```
<code id="boot.js">boot.js</code>
```
(function (app) {
    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));
```
<code id="index.html">index.html</code>
```
<!DOCTYPE html>
<html>
<head>
    <title>Angular 2 QuickStart</title>

    <!-- 1. Load libraries -->
    <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="node_modules/rxjs/bundles/Rx.umd.js"></script>
    <script src="node_modules/angular2/bundles/angular2-all.umd.js"></script>

    <!-- 2. Load our 'modules' -->
    <script src='app/app.component.js'></script>
    <script src='app/boot.js'></script>

</head>

<!-- 3. Display the application -->
<body>
<div class="my-app">Loading...</div>
</body>

</html>
```
