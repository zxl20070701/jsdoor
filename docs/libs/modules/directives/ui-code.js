(function (window, angular, undefined) {

    "use strict";

    angular.module("ui.libraries").directive('uiCode', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            scope: false,
            link: function ($scope, element, attrs, ctrl) {

                var code = element.html().replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').trim();
                var owe = new OpenWebEditor({
                    el: element[0],
                    content: code,
                    readonly: true,
                    shader: [attrs['uiCode'], {
                        insign: "#000000",
                        "css": {
                            insign: "#000000"
                        },
                        "javascript": {
                            insign: "#000000"
                        }
                    }],
                    noLineNumber: !/\n/.test(code),
                    color: {
                        background: "rgb(239, 235, 234)", /*编辑器背景*/
                        text: "#000000", /*文本颜色*/
                        number: "#888484", /*行号颜色*/
                        edit: "#eaeaf1", /*编辑行背景色*/
                        cursor: "#ff0000", /*光标颜色*/
                        select: "gray", /*选择背景*/
                    },
                });

                // 添加复制按钮
                var btnNode = $('<span title="复制到剪切板">复制</span>');
                element.prepend(btnNode);

                btnNode.css({
                    position: "absolute",
                    right: "10px",
                    top: "6px",
                    border: "none",
                    outline: "none",
                    "font-size": "12px",
                    cursor: "pointer",
                    "z-index": 1,
                    "line-height": '20px',
                    "background-color": "#f8f8f8",
                    "padding": "5px 10px"
                });

                btnNode.click(function () {
                    owe.copy(function () {
                        alert('复制成功');
                    }, function (error) {
                        console.log(error);
                        alert('复制失败');
                    });
                });

            },

        };
    }]);

})(window, window.angular);