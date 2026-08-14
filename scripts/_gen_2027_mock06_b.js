"2027_mock06/common/q13": { answer: 5, html: String.raw`
  <div class="sol-box">모든 실수에서 \(f&gt;g\)이므로 절댓값이 벗겨져 \(S(t)=\displaystyle\int_0^{t}\{f(x)-g(x)\}dx\)이고, 따라서 \(S'(t)=f(t)-g(t)\)이다. 즉 주어진 식이 곧 \(f-g\)의 정체다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> ㄱ을 확인한다</div>
    <p>\(f(1)=g(1)+1\)이므로 \(S'(1)=f(1)-g(1)=1\)이고</p>
    $$
    1-2+a=1,\qquad a=2.
    $$
    <p>따라서 ㄱ은 거짓이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄴ을 확인한다</div>
    <p>\(f(x)-g(x)=x^2-2x+2\)이므로</p>
    $$
    S(3)=\int_0^{3}\left(x^2-2x+2\right)dx=\left[\frac13x^3-x^2+2x\right]_0^{3}=9-9+6=6.
    $$
    <p>ㄴ은 참이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄷ을 확인한다</div>
    <p>\(h(x)=f(x)-g(x)=(x-1)^2+1\)이므로 \(y=h(x)\)의 그래프는 직선 \(x=1\)에 대하여 대칭이다. 구간 \([-2,\ 0]\)을 이 축에 대하여 대칭이동하면 \([2,\ 4]\)가 되므로</p>
    $$
    \int_{-2}^{0}h(x)\,dx=\int_2^{4}h(x)\,dx,
    $$
    $$
    \int_{-2}^{2}h(x)\,dx=\int_{-2}^{0}h+\int_0^{2}h=\int_2^{4}h+\int_0^{2}h=\int_0^{4}h(x)\,dx=S(4).
    $$
    <p>따라서 ㄷ도 참이고, 옳은 것은 ㄴ, ㄷ이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2027_mock06/common/q14": { answer: 3, html: String.raw`
  <div class="sol-box">방정식이 두 인수의 곱이므로 \(\cos(b\pi x)\)의 값이 두 가지로 갈린다. 하나는 항상 \(\dfrac12\)로 고정이고, 다른 하나는 \(-\left(\dfrac12+\dfrac1a\right)\)로 \(a\)에 따라 \(-1\)보다 큰지 작은지가 달라진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 갈래로 나눈다</div>
    $$
    \cos(b\pi x)=\frac12\qquad\text{또는}\qquad \cos(b\pi x)=-\left(\frac12+\frac1a\right).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 한 주기 안의 근을 센다</div>
    <p>\(y=\cos(b\pi x)\)의 주기는 \(\dfrac{2\pi}{b\pi}=\dfrac2b\)이고 \(b\)가 자연수이므로 \(0\le x\le2\)에는 주기가 정확히 \(b\)번 들어간다. 한 주기 \(0\le x\le\dfrac2b\)에서 \(\cos(b\pi x)=\dfrac12\)의 근은 \(2\)개이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)의 범위로 경우를 나눈다</div>
    <p>ⅰ) \(a&gt;2\)이면 \(\dfrac12&lt;\dfrac12+\dfrac1a&lt;1\)이므로 둘째 방정식의 근도 한 주기에 \(2\)개, 합쳐서 \(4\)개다. 전체로는 \(4b\)개인데 \(4b=15\)를 만족시키는 자연수 \(b\)는 없다.</p>
    <p>ⅱ) \(a=2\)이면 \(\dfrac12+\dfrac1a=1\)이므로 둘째 방정식은 \(\cos(b\pi x)=-1\)이 되어 한 주기에 근이 \(1\)개, 합쳐서 \(3\)개다. 전체로는 \(3b\)개이므로 \(3b=15\)에서 \(b=5\)이다.</p>
    <p>ⅲ) \(0&lt;a&lt;2\)이면 \(\dfrac12+\dfrac1a&gt;1\)이므로 둘째 방정식은 근이 없고, 한 주기에 \(2\)개, 전체 \(2b\)개다. \(2b=15\)인 자연수 \(b\)는 없다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답을 구한다</div>
    $$
    a+b=2+5=7.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2027_mock06/common/q15": { answer: 4, html: String.raw`
  <div class="sol-box">\(\displaystyle\int|F|\ne\left|\int F\right|\)라는 것은 그 구간에서 \(F\)의 <b>부호가 바뀐다</b>는 뜻이다. 그러면 두 조건은 "부호가 바뀌는 구간이 언제인지"를 말하고 있는 셈이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가)를 읽는다</div>
    <p>상수항이 \(0\)이므로 \(f(0)=0\)이다. 조건 (가)는 열린구간 \((p,\ p+3)\)에서 \(f\)의 부호가 바뀌는 \(p\)의 범위가 \(0&lt;p&lt;3\)이라는 뜻이다.</p>
    <p>부호가 바뀌는 점을 \(a\)라 하면 \(p&lt;a&lt;p+3\), 즉 \(a-3&lt;p&lt;a\)이므로 이 범위가 \(0&lt;p&lt;3\)과 같아야 한다. 따라서 \(a=3\), 즉 \(f(3)=0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=0\)에서 접함을 확인한다</div>
    <p>만약 \(x=0\)에서 그래프가 \(x\)축과 접하지 않으면 \(x=0\)에서도 부호가 바뀌므로, \(0\)이 구간 안에 들어가는 \(-3&lt;p&lt;0\)에서도 조건이 성립해 (가)와 어긋난다. 따라서 \(x=0\)에서 접해야 하고 \(f'(0)=0\)이다.</p>
    $$
    f(x)=ax^2(x-3).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건 (나)에서 \(a\)의 부호를 정한다</div>
    $$
    f'(x)=2ax(x-3)+ax^2=3ax(x-2).
    $$
    <p>\(a&lt;0\)이면 \([0,\ 3]\)에서 \(f(x)\ge0\)이므로 \(0&lt;q&lt;1\)인 어떤 \(q\)에 대해서도 \(f(x)+q&gt;0\)이 되어 부호가 바뀌지 않는다. 따라서 \(a&gt;0\)이고, 이때 \([0,\ 3]\)에서 \(f(x)\le0\)이며 \(x=2\)에서 최솟값을 갖는다.</p>
    $$
    f(2)=a\times4\times(-1)=-4a.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(a\)를 구한다</div>
    <p>\(-4a\le f(x)\le0\)이므로 \(-4a+q\le f(x)+q\le q\)이고, \(f(x)+q\)의 부호가 바뀌려면 \(-4a+q&lt;0\)과 \(q&gt;0\)이 필요하다. 즉 조건을 만족시키는 \(q\)의 범위가 \(0&lt;q&lt;4a\)인데 이것이 \(0&lt;q&lt;1\)과 같아야 하므로</p>
    $$
    4a=1,\qquad a=\frac14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(f(6)\)을 구한다</div>
    $$
    f(6)=\frac14\times36\times3=27.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2027_mock06/common/q16": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 맞춘다</div>
    $$
    3^{\,x-6}=3^{-2x}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 비교한다</div>
    $$
    x-6=-2x,\qquad 3x=6,\qquad x=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{2}\)</div>
` },

"2027_mock06/common/q17": { answer: 10, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int\left(6x^2+5\right)dx=2x^3+5x+C.
    $$
    <p>\(f(0)=3\)이므로 \(C=3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    f(1)=2+5+3=10.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{10}\)</div>
` },

"2027_mock06/common/q18": { answer: 15, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 공차를 구한다</div>
    <p>\(a_5=a_2-6\)에서 \(a_5-a_2=3d=-6\)이므로 \(d=-2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 첫째항을 구한다</div>
    $$
    a_1=a_6-5d=5-5\times(-2)=15.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{15}\)</div>
` },

"2027_mock06/common/q19": { answer: 9, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접선의 기울기를 구한다</div>
    <p>\(f'(x)=3x^2-10x+3\)이므로</p>
    $$
    f'(1)=3-10+3=-4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 접선을 구한다</div>
    <p>점 \((1,\ 5)\)를 지나므로</p>
    $$
    y-5=-4(x-1),\qquad y=-4x+9.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(y\)절편을 구한다</div>
    <p>\(x=0\)을 넣으면 \(y=9\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{9}\)</div>
` },

"2027_mock06/common/q20": { answer: 48, html: String.raw`
  <div class="sol-box">\(\mathrm P\)가 두 곡선 위의 점이라는 조건을 로그로 바꾸면 \(\alpha=\log_b\beta\)이다. 그러면 \(\alpha\beta^3=1\)이 \(3\alpha-\beta=0\)이라는 아주 단순한 관계로 바뀐다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> (가)를 구한다</div>
    <p>\(\beta=b^{\alpha}\)에서 \(\alpha=\log_b\beta\)이고 \(\beta=-\log_b\alpha\)이므로</p>
    $$
    3\alpha-\beta=3\log_b\beta+\log_b\alpha=\log_b\left(\alpha\beta^3\right)=\log_b1=0.
    $$
    <p>따라서 \(\beta=3\alpha\)이고 직선 \(\mathrm{OP}\)의 기울기는</p>
    $$
    m=\frac\beta\alpha=3,\qquad p=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> (나)를 구한다</div>
    <p>\(\beta^4=(3\alpha)\beta^3=m\alpha\beta^3=m=3\)이므로</p>
    $$
    \beta=3^{\frac14},\qquad q=3^{\frac14}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> (다)를 구한다</div>
    <p>\(\beta=-\log_b\alpha\)에서 \(b=\alpha^{-\frac1\beta}\)이고 \(\alpha=\dfrac\beta m\)이므로</p>
    $$
    g(m)=-\log_bm=\frac{\beta}{\log_m\alpha}=\frac{\beta}{-1+\log_m\beta}
    =\frac{3^{\frac14}}{-1+\log_33^{\frac14}}=\frac{3^{\frac14}}{-\frac34}=-4\times3^{-\frac34}.
    $$
    <p>따라서 \(r=-4\times3^{-\frac34}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 값을 구한다</div>
    $$
    (p\times q\times r)^2=\left(3\times3^{\frac14}\times\left(-4\times3^{-\frac34}\right)\right)^2=\left(-4\times3^{\frac12}\right)^2=48.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{48}\)</div>
` },
