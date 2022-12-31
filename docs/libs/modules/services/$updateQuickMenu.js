(function (window, angular, undefined) {

    "use strict";

    angular.module("ui.libraries").factory('$updateQuickMenu', ["$animation", function ($animation) {
        return function () {

            var docEl = document.getElementById('content-id');
            var fixedMenuEl = document.getElementById('fixed-menu-id');

            var els = docEl.children;

            fixedMenuEl.innerHTML = "";
            for (var index = 0; index < els.length; index++) {
                (function (index) {

                    if (["H2", "H3", "H4"].indexOf(els[index].nodeName) > -1) {

                        var fixedItemEl = document.createElement(els[index].nodeName);
                        fixedMenuEl.appendChild(fixedItemEl);

                        fixedItemEl.innerText = els[index].innerText;
                        fixedItemEl.addEventListener('click', function () {

                            var offsetTop = els[index].offsetTop;
                            var currentScrollTop = docEl.scrollTop || 0;

                            $animation(function (deep) {
                                docEl.scrollTop = (offsetTop - currentScrollTop) * deep + currentScrollTop;
                            }, 500, function () {
                                docEl.scrollTop = offsetTop;
                            });

                        });

                    }
                })(index);
            }

        };
    }]);

})(window, window.angular);