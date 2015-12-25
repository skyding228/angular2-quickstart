/**
 * Created on 2015/12/25.
 * @author weichunhe
 */
(function (app) {
    app.AppComponent = ng.core
        .Component({
            selector: '.my-app', //¼òµ¥µÄCSSÑ¡ÔñÆ÷
            template: '<h1>My First Angular 2 App</h1>'
        })
        .Class({
            constructor: function () {
            }
        });
})(window.app || (window.app = {}));