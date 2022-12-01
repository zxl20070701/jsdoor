<template>
  <div>
    <header>字符串表达式解析</header>
    <h2>引入</h2>
    <pre>
import { evalExpress, getValue, setValue } from 'jsdoor/value/index.js';</pre
    >
    <h2>evalExpress</h2>
    <p>在指定对象target上求解表达式express的值：</p>
    <pre>var value=evalExpress(target, express, scope = {});</pre>
    <p class="warn">
      温馨提示：一个可选参数scope表示，如果scope有值，会拦截target，下同。
    </p>
    <h3>例子</h3>
    <p>现在有个json：</p>
    <pre>
var json = {
  "a": {
      "b": [1, 2, 3]
  }
}
    </pre>
    <p>那么执行下面的语句：</p>
    <pre>evalExpress(json, 'a.b[0]-10')</pre>
    <p>
      结果就是：
      <span class="important">-9</span>。
    </p>
    <h2>getValue</h2>
    <p>获取对象上字符串表达式对应的值：</p>
    <pre>var value=getValue(target, express, scope = {});</pre>
    <h3>例子</h3>
    <p>现在有个json：</p>
    <pre>
var json = {
  "a": {
      "b": [1, { "d": "value" }, 3, 4]
  }
}
    </pre>
    <p>那么执行下面的语句：</p>
    <pre>getValue(json, '["a"].b')</pre>
    <p>
      结果就是：
      <span class="important">[1, { "d": "value" }, 3, 4]</span>。
    </p>
    <h2>setValue</h2>
    <p>设置对象上字符串表达式对应的值：</p>
    <pre>var newTarget=setValue(target, express, value, scope = {});</pre>
    <p class="warn">
      温馨提示：虽然会返回新的值，不过旧的值也同步修改了，因为返回的和原来的是同一个对象。
    </p>
    <h3>例子</h3>
    <p>现在有个json：</p>
    <pre>
var json = {
  "key" : [1, 2, 3]
}
    </pre>
    <p>那么执行下面的语句：</p>
    <pre>setValue(json, '.key[1]','newValue')</pre>
    <p>此时，原来的json的值就变成了：</p>
    <pre>
var json = {
  "key" : [1, "newValue", 3]
}
    </pre>
  </div>
</template>