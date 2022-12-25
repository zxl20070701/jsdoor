(function (window, angular, undefined) {

    "use strict";

    angular.module("ui.libraries").directive('uiActive', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            scope: false,
            link: function ($scope, element, attrs, ctrl) {

                $scope.$watch(attrs['uiActive'], function (newValue, oldValue) {
                    element.attr('active', $parse(attrs.uiActive)($scope));
                });

            },

        };
    }]);

})(window, window.angular);