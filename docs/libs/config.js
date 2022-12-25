/**
 * --------------------------------------
 * 模块定义
 * --------------------------------------
 */

// 自定义扩展模块
var libapp = angular.module("ui.libraries", []);

// 控制器模块
var ctrlapp = angular.module("ui.ctrl", []);

//主模块定义（同时引入需要的模块）
var startapp = angular.module("startApp", ['ui.router', 'ui.libraries', 'ui.ctrl']);

/**
 * --------------------------------------
 * 模块启动
 * --------------------------------------
 */
//主模块
startapp.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', "$compileProvider", "$filterProvider", "$provide", function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
  "use strict";

  //定义需要使用的方法
  ctrlapp.register = {
    controller: $controllerProvider.register,
    directive: $compileProvider.directive,
    filter: $filterProvider.register,
    factory: $provide.factory,
    service: $provide.service
  };

  //异步加载控制器文件
  startapp.asyncjs = function (js) {
    return ['$q', function ($q) {

      var delay = $q.defer(),
        load = function () {
          window.$.getScript(js, function () {
            delay.resolve();
          });
        };
      load();
      return delay.promise;
    }];
  };

  /**
   * --------------------------------------
   * 定义路由
   * --------------------------------------
   */

  var addToken = function (url) {
    return url + "?_=" + new Date().valueOf();
  };

  $stateProvider

    //  主界面
    .state("main", {
      url: "/main",
      templateUrl: addToken("htmls/Main/mod.html"),
      resolve: {
        delay: startapp.asyncjs('htmls/Main/mod.js')
      },
      controller: "MainController"
    })

    // 首页
    .state("main.guide", {
      url: "/guide",
      templateUrl: addToken("htmls/Guide/mod.html"),
      resolve: {
        delay: startapp.asyncjs('htmls/Guide/mod.js')
      },
      controller: "GuideController"
    })

    // 文档
    .state("main.docs", {
      url: "/docs",
      templateUrl: addToken("htmls/Docs/mod.html"),
      resolve: {
        delay: startapp.asyncjs('htmls/Docs/mod.js')
      },
      controller: "DocsController"
    })

    // 文档 / 如何使用？
    .state("main.docs.guide", {
      url: "/guide",
      templateUrl: addToken("htmls/Docs/pages/guide.html")
    })

    // 文档 / 树布局算法
    .state("main.docs.treeLayout", {
      url: "/treeLayout",
      templateUrl: addToken("htmls/Docs/pages/treeLayout.html")
    })

    // 文档 / 监听节点大小改变
    .state("main.docs.resizeElement", {
      url: "/resizeElement",
      templateUrl: addToken("htmls/Docs/pages/resizeElement.html")
    })

    // 文档 / 列主序存储的4x4坐标变换矩阵
    .state("main.docs.Matrix4", {
      url: "/Matrix4",
      templateUrl: addToken("htmls/Docs/pages/Matrix4.html")
    })

    // 文档 / 字符串表达式解析
    .state("main.docs.value", {
      url: "/value",
      templateUrl: addToken("htmls/Docs/pages/value.html")
    })

    // 文档 / 刻度尺刻度求解
    .state("main.docs.ruler", {
      url: "/ruler",
      templateUrl: addToken("htmls/Docs/pages/ruler.html")
    })

    // 文档 / 插值函数
    .state("main.docs.interpolation", {
      url: "/interpolation",
      templateUrl: addToken("htmls/Docs/pages/interpolation.html")
    })

    // 文档 / 动画执行函数
    .state("main.docs.Animation", {
      url: "/Animation",
      templateUrl: addToken("htmls/Docs/pages/Animation.html")
    })

    // 文档 / 三维画笔 WebGL
    .state("main.docs.WebGL", {
      url: "/WebGL",
      templateUrl: addToken("htmls/Docs/pages/WebGL.html")
    })

    // 文档 / 开发服务器
    .state("main.docs.server", {
      url: "/server",
      templateUrl: addToken("htmls/Docs/pages/server.html")
    })

    // 演示用例
    .state("examples", {
      url: "/examples",
      templateUrl: addToken("htmls/Examples/mod.html"),
      resolve: {
        delay: startapp.asyncjs('htmls/Examples/mod.js')
      },
      controller: "ExamplesController"
    });

  $urlRouterProvider.otherwise("/main/guide");

}]).run(['$rootScope', '$state', '$updateQuickMenu', function ($rootScope, $state, $updateQuickMenu) {

  "use strict";

  // 路由跳转方法
  $rootScope.goto = function (state) {
    $state.go(state);
  };

  // 监听路由跳转
  $rootScope.$on("$stateChangeSuccess", function (event, toState, toParam) {
    $rootScope.stateValues = toState.name.split('.');

    // 如果是文档跳转，我们需要动态调整快速定位的内容
    if (/^main\.docs\.[a-zA-Z0-9]+$/.test(toState.name)) {
      setTimeout(function () {
        $updateQuickMenu();
      }, 200);
    }

  });

}]);