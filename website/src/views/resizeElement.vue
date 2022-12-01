<template>
  <div>
    <header>监听节点大小改变</header>
    <h2>引入</h2>
    <pre>import resizeElement from 'jsdoor/resizeElement/index.js';</pre>
    <h2>使用</h2>
    <p>引入以后，直接使用即可：</p>
    <pre>
resizeElement(el, function(){
    // todo
});
    </pre>
    <h3>说明</h3>
    <p>
      首先，我们底层依赖
      <span class="important">ResizeObserver</span>
      实现，针对不支持的浏览器，我们使用监听body的resize来回退，如果你总希望支持，可以引入ResizeObserver的polyfill文件。
    </p>
    <p>
      其次，连续的节点大小改变，并不总会立刻触发这里的回调，我们进行了节流操作，总是间隔非常短的时间后再响应。
    </p>
  </div>
</template>