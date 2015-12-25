## 简介
5 分钟从0搭建一个ng2项目demo
https://angular.io/docs/js/latest/quickstart.html

## 具体步骤
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