/**
 * Created on 2015/12/25.
 * @author weichunhe
 */
(function (app) {
    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));