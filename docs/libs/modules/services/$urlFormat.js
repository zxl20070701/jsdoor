(function (window, angular, undefined) {

    "use strict";

    angular.module("ui.libraries").factory('$urlFormat', function () {
        return function () {

            var splitTemp = window.location.href.split('?');
            var routerTemp = (splitTemp[0] + "#").split("#")[1].replace(/^\//, '').replace(/\/$/, '').split('/');
            var paramTemp = splitTemp[1] || "";

            var paramResult, paramArray;
            if (paramTemp == "") {
                paramResult = {};
            } else {
                paramArray = paramTemp.split("&"), paramResult = {};
                paramArray.forEach(function (item) {
                    var temp = item.split("=");
                    paramResult[temp[0]] = temp[1];
                })
            }

            var resultData = {
                router: routerTemp[0] == '' ? [] : routerTemp,
                params: paramResult
            };

            return resultData;

        };
    });

})(window, window.angular);