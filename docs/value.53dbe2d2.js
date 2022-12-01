import{_ as e,o as p,c as t,a}from"./index.4f76ed2e.js";const r={},s=a(`<header>\u5B57\u7B26\u4E32\u8868\u8FBE\u5F0F\u89E3\u6790</header><h2>\u5F15\u5165</h2><pre>import { evalExpress, getValue, setValue } from &#39;jsdoor/value/index.js&#39;;</pre><h2>evalExpress</h2><p>\u5728\u6307\u5B9A\u5BF9\u8C61target\u4E0A\u6C42\u89E3\u8868\u8FBE\u5F0Fexpress\u7684\u503C\uFF1A</p><pre>var value=evalExpress(target, express, scope = {});</pre><p class="warn"> \u6E29\u99A8\u63D0\u793A\uFF1A\u4E00\u4E2A\u53EF\u9009\u53C2\u6570scope\u8868\u793A\uFF0C\u5982\u679Cscope\u6709\u503C\uFF0C\u4F1A\u62E6\u622Atarget\uFF0C\u4E0B\u540C\u3002 </p><h3>\u4F8B\u5B50</h3><p>\u73B0\u5728\u6709\u4E2Ajson\uFF1A</p><pre>var json = {
  &quot;a&quot;: {
      &quot;b&quot;: [1, 2, 3]
  }
}
    </pre><p>\u90A3\u4E48\u6267\u884C\u4E0B\u9762\u7684\u8BED\u53E5\uFF1A</p><pre>evalExpress(json, &#39;a.b[0]-10&#39;)</pre><p> \u7ED3\u679C\u5C31\u662F\uFF1A <span class="important">-9</span>\u3002 </p><h2>getValue</h2><p>\u83B7\u53D6\u5BF9\u8C61\u4E0A\u5B57\u7B26\u4E32\u8868\u8FBE\u5F0F\u5BF9\u5E94\u7684\u503C\uFF1A</p><pre>var value=getValue(target, express, scope = {});</pre><h3>\u4F8B\u5B50</h3><p>\u73B0\u5728\u6709\u4E2Ajson\uFF1A</p><pre>var json = {
  &quot;a&quot;: {
      &quot;b&quot;: [1, { &quot;d&quot;: &quot;value&quot; }, 3, 4]
  }
}
    </pre><p>\u90A3\u4E48\u6267\u884C\u4E0B\u9762\u7684\u8BED\u53E5\uFF1A</p><pre>getValue(json, &#39;[&quot;a&quot;].b&#39;)</pre><p> \u7ED3\u679C\u5C31\u662F\uFF1A <span class="important">[1, { &quot;d&quot;: &quot;value&quot; }, 3, 4]</span>\u3002 </p><h2>setValue</h2><p>\u8BBE\u7F6E\u5BF9\u8C61\u4E0A\u5B57\u7B26\u4E32\u8868\u8FBE\u5F0F\u5BF9\u5E94\u7684\u503C\uFF1A</p><pre>var newTarget=setValue(target, express, value, scope = {});</pre><p class="warn"> \u6E29\u99A8\u63D0\u793A\uFF1A\u867D\u7136\u4F1A\u8FD4\u56DE\u65B0\u7684\u503C\uFF0C\u4E0D\u8FC7\u65E7\u7684\u503C\u4E5F\u540C\u6B65\u4FEE\u6539\u4E86\uFF0C\u56E0\u4E3A\u8FD4\u56DE\u7684\u548C\u539F\u6765\u7684\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002 </p><h3>\u4F8B\u5B50</h3><p>\u73B0\u5728\u6709\u4E2Ajson\uFF1A</p><pre>var json = {
  &quot;key&quot; : [1, 2, 3]
}
    </pre><p>\u90A3\u4E48\u6267\u884C\u4E0B\u9762\u7684\u8BED\u53E5\uFF1A</p><pre>setValue(json, &#39;.key[1]&#39;,&#39;newValue&#39;)</pre><p>\u6B64\u65F6\uFF0C\u539F\u6765\u7684json\u7684\u503C\u5C31\u53D8\u6210\u4E86\uFF1A</p><pre>var json = {
  &quot;key&quot; : [1, &quot;newValue&quot;, 3]
}
    </pre>`,33),o=[s];function n(u,l){return p(),t("div",null,o)}const q=e(r,[["render",n]]);export{q as default};
