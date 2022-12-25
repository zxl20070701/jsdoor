ctrlapp.register.controller('DocsController', ['$scope', function ($scope) {

    $scope.initMethod = function () {
        
        document.getElementsByTagName('title')[0].innerText="文档 | jsdoor";

    };

}]);