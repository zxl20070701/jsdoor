(function (window, angular, undefined) {

    "use strict";

    angular.module("ui.libraries").factory('$openEditPage', ['$urlFormat', function ($urlFormat) {
        return function () {

            console.log($urlFormat());
            alert('设计开发中，敬请期待~');

        };
    }]);

})(window, window.angular);