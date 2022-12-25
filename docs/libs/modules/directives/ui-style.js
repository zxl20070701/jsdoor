(function (window, angular, undefined) {

    "use strict";

    angular.module("ui.libraries").directive('uiStyle', ['$compileStyle', function ($compileStyle) {
        return {
            restrict: 'A',
            scope: false,
            link: function ($scope, element, attrs, ctrl) {

                $.get(attrs.uiStyle, function (source) {

                    var styleElement = document.createElement('style');
                    var head = document.head || document.getElementsByTagName('head')[0];
                    styleElement.innerHTML = $compileStyle.scss(source);
                    styleElement.setAttribute('type', 'text/css');
                    head.appendChild(styleElement);

                });

            },

        };
    }]);

})(window, window.angular);