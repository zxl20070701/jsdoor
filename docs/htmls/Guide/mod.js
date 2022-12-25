ctrlapp.register.controller('GuideController', ['$scope', function ($scope) {

    $scope.initMethod = function () {

        document.getElementsByTagName('title')[0].innerText = "首页 | jsdoor";

    };

}]);