(function (window, angular, undefined) {

    "use strict";

    angular.module("ui.libraries").factory('$openEditPage', ['$urlFormat', function ($urlFormat) {
        return function () {

            var urlFormat = $urlFormat(), targetFile = "https://github.com/zxl20070701/jsdoor/edit/master/docs/";

            // 例子
            if (urlFormat.router[0] == "examples") {
                targetFile += "htmls/Examples/pages/" + urlFormat.params.example + ".html";
            }

            // 主界面
            else if (urlFormat.router[0] == 'main') {

                // 快速页面
                if (urlFormat.router[1] == 'guide') {
                    targetFile += "htmls/Guide/mod.html";
                }

                // 文档页面
                else if (urlFormat.router[1] == 'docs') {
                    targetFile += "htmls/Docs/pages/" + urlFormat.router[2] + ".html";
                }

            }

            var aEl = document.createElement('a');
            aEl.setAttribute('target', "_blank");
            aEl.setAttribute('href', targetFile);

            aEl.click();

        };
    }]);

})(window, window.angular);