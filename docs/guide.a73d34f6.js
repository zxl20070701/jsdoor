import{_ as e,o as p,c as l,a}from"./index.4f76ed2e.js";const o={},s=a('<header>\u5F00\u59CB</header><h2>\u603B\u89C8</h2><p> \u8FD9\u662F\u4E00\u4E2A\u4E13\u95E8\u4E3A\u65B9\u4FBF Web \u7AEF\u5F00\u53D1\u800C\u5F00\u53D1\u7684 <span class="important">JavaScript</span> \u5DE5\u5177\u5E93\uFF0C\u80FD\u591F\u5E2E\u52A9\u4F60\u5FEB\u901F\u5F00\u53D1\u3002\u5B83\u4E3B\u8981\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A </p><ul><li> \u4E00\u7CFB\u5217\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u7684Web\u7AEFjs\u63A5\u53E3\uFF0C\u6309\u7167ES6+\u6A21\u5757\u89C4\u8303\u5F00\u53D1\uFF0C\u672A\u6253\u5305\uFF0C\u91C7\u7528ES5\u4EE5\u524D\u7684\u65E7\u8BED\u6CD5\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u66F4\u81EA\u7531\u7684\u6309\u9700\u5F15\u5165\u3002 </li><li> \u4E00\u7CFB\u5217\u8F85\u52A9\u7C7B\u7684\u5DE5\u5177\uFF0C\u6BD4\u5982\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u65B9\u4FBF\u5FEB\u901F\u642D\u5EFA\u81EA\u5DF1\u7684\u5F00\u53D1\u6216\u6D4B\u8BD5\u73AF\u5883\u3002 </li></ul><p> \u6211\u4EEC\u5E76\u4E0D\u4E13\u6CE8\u4E8E\u89E3\u51B3\u4E00\u4E2A\u5927\u7C7B\u95EE\u9898\uFF0C\u6216\u63D0\u4F9B\u4E00\u6574\u5957\u89E3\u51B3\u65B9\u6848\uFF0C\u6211\u4EEC\u53EA\u662F\u63D0\u4F9B\u4E00\u4E2A\u53EF\u80FD\uFF0C\u4F60\u53EF\u4EE5\u81EA\u7531\u7684\u7EC4\u5408\u6765\u89E3\u51B3\u4F60\u7684\u95EE\u9898\uFF0C\u6211\u4EEC\u59CB\u7EC8\u76F8\u4FE1\uFF0C\u6700\u597D\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u4E00\u5B9A\u5728\u4F60\u81EA\u5DF1\u7684\u624B\u4E0A\uFF0C\u800C\u6211\u4EEC\uFF0C\u613F\u6210\u4E3A\u90A3\u4E2A\u542F\u8FEA\u4F60\u7684\u63A8\u624B\u3002 </p><p>\u795D\u4F60\u597D\u8FD0\uFF5E</p><h2>\u6D4F\u89C8\u5668\u652F\u6301</h2><p> \u5BF9\u4E8E\u5927\u90E8\u5206\u60C5\u51B5\u6765\u8BF4\uFF0C\u65E0\u8BBA\u662FAPI\u8FD8\u662F\u8BED\u6CD5\uFF0C\u6211\u4EEC\u90FD\u91C7\u7528\u4E86\u88AB\u5927\u90E8\u5206\u6D4F\u89C8\u5668\u666E\u904D\u652F\u6301\u7684\uFF0C\u4E0D\u8FC7\u57FA\u4E8E\u4EE5\u4E0B\u4E24\u79CD\u539F\u56E0\uFF1A </p><ol><li>\u90E8\u5206\u6D4F\u89C8\u5668\u592A\u53E4\u8001\u4E86\uFF0C\u5B8C\u5168\u6CA1\u6709\u517C\u5BB9\u7684\u5FC5\u8981\uFF0C\u6BD4\u5982IE8\u3002</li><li> \u90E8\u5206\u4F9D\u8D56\u7684API\u53EA\u6709\u90E8\u5206\u6D4F\u89C8\u5668\u652F\u6301\uFF0C\u867D\u7136\u53EF\u4EE5\u901A\u8FC7\u5F15\u5165polyfill\u7B49\u65B9\u5F0F\u517C\u5BB9\uFF0C\u4E0D\u8FC7\u8003\u8651\u5230\u8FD9\u4E2A\u884C\u4E3A\u7528\u6237\u81EA\u5DF1\u4E5F\u53EF\u4EE5\u6267\u884C\uFF0C\u6211\u4EEC\u5C31\u6CA1\u6709\u9ED8\u8BA4\u5F15\u5165\u4E86\uFF0C\u8FD9\u53EF\u4EE5\u8BA9\u65E0\u9700\u517C\u5BB9\u7684\u7528\u6237\u6253\u51FA\u66F4\u5C0F\u7684\u5305\u3002 </li></ol><p> \u4E0D\u8FC7\u8BF7\u653E\u5FC3\uFF0C\u5982\u679C\u6709\u5FC5\u8981\uFF0C\u6211\u4EEC\u4F1A\u5728\u5177\u4F53\u7684\u6587\u6863\u4E2D\u8FDB\u884C\u8BF4\u660E\u7684\uFF08\u5982\u679C\u6CA1\u6709\u8BF4\u660E\uFF0C\u53EF\u4EE5\u63D0\u9192\u6216\u8005\u5E2E\u52A9\u6211\u4EEC\u6DFB\u52A0\u54E6\uFF5E\uFF09\uFF0C </p><h2>\u5B89\u88C5</h2><p> \u6211\u4EEC\u53EA\u63D0\u4F9B\u4E86\u4E00\u79CD\u5F15\u5165\u65B9\u5F0F\uFF0C\u90A3\u5C31\u662FES6+\u6A21\u5757\u8BED\u6CD5\uFF0C\u5177\u4F53\u7684\u5F15\u5165\u8BED\u53E5\u4F1A\u5728\u6BCF\u4E2A\u63A5\u53E3\u4E2D\u8BF4\u660E\uFF0C\u800C\u5728\u6B64\u4E4B\u524D\uFF0C\u4F60\u9700\u8981\u6267\u884C\u4E0B\u9762\u7684\u5B89\u88C5\u547D\u4EE4\uFF1A </p><pre>npm install --save jsdoor</pre><p>\u73B0\u5728\uFF0C\u5C31\u53EF\u4EE5\u5728\u4F60\u7684\u9879\u76EE\u4E2D\u4F7F\u7528\u4E86\u3002</p>',14),t=[s];function i(c,r){return p(),l("div",null,t)}const _=e(o,[["render",i]]);export{_ as default};