ctrlapp.register.controller('ExamplesController', ['$scope', function ($scope) {

    $scope.initMethod = function () {
        
        document.getElementsByTagName('title')[0].innerText="演示用例 | jsdoor";

    };

}]);