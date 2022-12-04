<template>
  <div>
    <header>插值函数</header>
    <h2>Hermite三次插值</h2>
    <h3>引入</h3>
    <pre>import Hermite from 'jsdoor/interpolation/Hermite.js';</pre>
    <h3>使用</h3>
    <p>三次插值法，调用该方法就会返回一个插值对象：</p>
    <pre>var hermite=Hermite(u);</pre>
    <p>
      参数u表示张弛系数(应该在点的位置设置前设置)，用于调整曲线走势，默认数值u=0.5，分水岭u=1，|u-1|的值越大，曲线走势调整的越严重。
    </p>
    <h4>设置点的位置</h4>
    <pre>hermite.setP(x1, y1, x2, y2, s1, s2);</pre>
    <p>
      参数分别表示：左边点的位置(x1, y1)，右边点的位置(x2,
      y2)和两个点的斜率s1，s2。
    </p>
    <h4>求解</h4>
    <p>
      经过上面的设置，插值对象就可以求值了。比如x=a，其中a在需要插值的点之间（边界也可以），你可以这样求解出y值：
    </p>
    <pre>var y=hermite(a);</pre>
    <h2>Cardinal三次插值</h2>
    <h3>引入</h3>
    <pre>import Cardinal from 'jsdoor/interpolation/Cardinal.js';</pre>
    <h3>使用</h3>
    <pre>var cardinal=Cardinal(t);</pre>
    <p>
      参数t用于调整曲线走势，默认数值t=0，分水岭t=-1，|t-(-1)|的值越大，曲线走势调整的越严重。
    </p>
    <h4>设置插值点</h4>
    <p>插值函数获取以后，还需要设置插值点：</p>
    <pre>cardinal.setP([[X1,Y1],[X2,Y2],...,[Xn, Yn]]);</pre>
    <p>插值点可以重复设置，以最后一次设置的为准。</p>
    <h4>求解</h4>
    <p>
      设置好插值点以后，比如现在需要求解x=a（a必须属于闭区间[ X1 , Xn
      ]）对应的y值：
    </p>
    <pre>var y = cardinal(a);</pre>
  </div>
</template>