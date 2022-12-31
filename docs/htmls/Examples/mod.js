ctrlapp.register.controller('ExamplesController', ['$scope', '$urlFormat', function ($scope, $urlFormat) {

    $scope.initMethod = function () {

        document.getElementsByTagName('title')[0].innerText = "演示用例 | jsdoor";

        var css_shader = {
            "annotation": "#6a9955",/*注释颜色*/
            "insign": "#555",/*符号颜色*/
            "selector": "#1e50b3",/*选择器*/
            "attrKey": "#1e83b1",/*属性名称颜色*/
            "attrValue": "#ac4c1e"/*属性值颜色*/
        };

        var js_shader = {
            "text": "#000000",/*文本颜色*/
            "annotation": "#6a9955",/*注释颜色*/
            "insign": "#555",/*符号颜色*/
            "key": "#ff0000",/*关键字颜色*/
            "string": "#ac4c1e",/*字符串颜色*/
            "funName": "#1e50b3",/*函数名称颜色*/
            "execName": "#1e83b1"/*执行方法颜色*/
        };

        var html_shader = {
            "text": "#000000",/*文本颜色*/
            "annotation": "#6a9955",/*注释颜色*/
            "insign": "#555",/*符号颜色*/
            "node": "#1e50b3",/*结点颜色*/
            "attrKey": "#1e83b1",/*属性名称颜色*/
            "attrValue": "#ac4c1e",/*属性值颜色*/
            "css": css_shader,
            "javascript": js_shader
        };

        $scope.owe = new OpenWebEditor({
            el: document.getElementById('editor-view'),
            color: {
                background: "#ffffff", /*编辑器背景*/
                text: "#170", /*文本颜色*/
                number: "#888484", /*行号颜色*/
                edit: "#eaeaf1", /*编辑行背景色*/
                cursor: "#ff0000", /*光标颜色*/
                select: "#6c6cf1", /*选择背景*/
            },
            content: "",
            shader: ['html', html_shader]
        });

        // 初始化例子
        $scope.pagename = $scope.loadPage(false, $scope.setExampleCode);

    };

    $scope.loadExample = function (pagename) {
        $scope.pagename = $scope.loadPage(pagename, $scope.setExampleCode);
    };

    $scope.setExampleCode = function (source) {
        $scope.owe.valueOf(source);
        $scope.doRun();
    };

    $scope.doRun = function () {
        var iframeDocument = document.getElementById('run-view').contentWindow.document;
        iframeDocument.open();
        iframeDocument.write($scope.owe.valueOf().replace(/jsdoor/g, '.'));
        iframeDocument.close();
    };

    $scope.loadPage = function (pagename, setExampleCode) {
        // 求解当前应该显示的内容
        var urlFormat = $urlFormat();
        if (!pagename) {
            pagename = urlFormat.params.example || "y_x2_z2";
        }

        // 如果是指定的，记录一下
        if (pagename) {
            window.location.href = "#/examples?example=" + pagename;
        }

        $.get("./docs/htmls/Examples/pages/" + pagename + ".html", function (data, status) {
            if (status == 'success') {
                setExampleCode(data);
            }
        });

        return pagename;
    };

}]);