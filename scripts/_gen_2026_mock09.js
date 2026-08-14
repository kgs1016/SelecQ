"2026_mock09/common/q01": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(5\)로 통일한다</div>
    $$
    5^{\sqrt2+1}\times\left(\frac15\right)^{\sqrt2}=5^{\sqrt2+1}\times5^{-\sqrt2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 더한다</div>
    $$
    5^{(\sqrt2+1)-\sqrt2}=5^{1}=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock09/common/q02": { answer: 4, html: String.raw`
  <div class="sol-box">이 극한은 미분계수의 정의 그대로이므로 \(f'(4)\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한을 미분계수로 바꾼다</div>
    $$
    \lim_{h\to0}\frac{f(4+h)-f(4)}{h}=f'(4).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    <p>\(f'(x)=2x-4\)이므로</p>
    $$
    f'(4)=8-4=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock09/common/q03": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합의 기호를 나눈다</div>
    $$
    \sum_{k=1}^{6}(2a_k-1)=2\sum_{k=1}^{6}a_k-6=30.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 풀어 준다</div>
    $$
    2\sum_{k=1}^{6}a_k=36,\qquad \sum_{k=1}^{6}a_k=18.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock09/common/q04": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그래프에서 두 극한을 읽는다</div>
    $$
    \lim_{x\to0-}f(x)=-1,\qquad \lim_{x\to1+}f(x)=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 더한다</div>
    $$
    (-1)+2=1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock09/common/q05": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 쓴다</div>
    $$
    f'(x)=2x\left(x^2+x-3\right)+\left(x^2+2\right)(2x+1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입한다</div>
    $$
    f'(1)=2\times(-1)+3\times3=-2+9=7.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock09/common/q06": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\cos\theta\)를 구한다</div>
    <p>\(\cos(\theta-\pi)=\cos(\pi-\theta)=-\cos\theta\)이므로</p>
    $$
    -\cos\theta=\frac35,\qquad \cos\theta=-\frac35.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사분면을 정한다</div>
    <p>\(\cos\theta&lt;0\)이고 조건에서 \(\tan\theta&lt;0\)이므로 \(\theta\)는 제2사분면의 각이고 \(\sin\theta&gt;0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\sin\theta\)를 구한다</div>
    $$
    \sin\theta=\sqrt{1-\frac9{25}}=\frac45.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock09/common/q07": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접선의 기울기를 구한다</div>
    <p>\(f(x)=x^3-5x^2+6x\)라 하면 \(f'(x)=3x^2-10x+6\)이므로</p>
    $$
    f'(3)=27-30+6=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 접선을 구한다</div>
    <p>점 \((3,\ 0)\)을 지나므로</p>
    $$
    y=3(x-3)=3x-9.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구한다</div>
    $$
    a=3\times5-9=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock09/common/q08": { answer: 3, html: String.raw`
  <div class="sol-box">두 조건이 각각 \(a^2b\)와 \(ab^2\)을 준다. 변끼리 곱하면 \((ab)^3\)이 되어 \(ab\)가 한 번에 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫 조건을 정리한다</div>
    <p>\(\log_{\sqrt2}a=2\log_2a\)이므로</p>
    $$
    2\log_2a+\log_2b=\log_2a^2b=2,\qquad a^2b=2^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 둘째 조건을 정리한다</div>
    $$
    \log_2a+\log_2b^2=\log_2ab^2=7,\qquad ab^2=2^7.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 변끼리 곱한다</div>
    $$
    a^3b^3=2^{2+7}=2^9,\qquad (ab)^3=\left(2^3\right)^3.
    $$
    <p>\(a\), \(b\)가 양의 실수이므로 \(ab=2^3=8\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock09/common/q09": { answer: 2, html: String.raw`
  <div class="sol-box">\(G(x)-2F(x)\)를 하나의 함수로 묶으면 도함수가 상수 \(1\)이 되어, 그 함수가 일차함수라는 사실만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 차를 하나의 함수로 묶는다</div>
    <p>\(H(x)=G(x)-2F(x)\)라 하면 \(F'(x)=f(x)\), \(G'(x)=2f(x)+1\)이므로</p>
    $$
    H'(x)=\{2f(x)+1\}-2f(x)=1,\qquad H(x)=x+C.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 주어진 조건으로 \(C\)를 정한다</div>
    <p>\(G(3)=2F(3)\)이므로 \(H(3)=0\)이고</p>
    $$
    3+C=0,\qquad C=-3,\qquad H(x)=x-3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 답을 구한다</div>
    $$
    G(5)-2F(5)=H(5)=5-3=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock09/common/q10": { answer: 3, html: String.raw`
  <div class="sol-box">\(-S_k+S_{k+1}=a_{k+1}\)이므로 부호가 번갈아 붙은 합은 두 개씩 묶으면 짝수째 항의 합이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 개씩 묶는다</div>
    $$
    \sum_{k=1}^{6}(-1)^{k}S_k=(-S_1+S_2)+(-S_3+S_4)+(-S_5+S_6)=a_2+a_4+a_6=21.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 공비를 구한다</div>
    <p>모든 항이 양수이므로 공비 \(r&gt;0\)이고, \(a_2=1\)이므로</p>
    $$
    1+r^2+r^4=21,\qquad \left(r^2+5\right)\left(r^2-4\right)=0.
    $$
    <p>\(r&gt;0\)이므로 \(r=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 합을 구한다</div>
    <p>\(a_1r=1\)에서 \(a_1=\dfrac12\)이므로</p>
    $$
    S_2+S_7=\frac{\frac12\left(2^2-1\right)}{2-1}+\frac{\frac12\left(2^7-1\right)}{2-1}=\frac32+\frac{127}{2}=65.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock09/common/q11": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> ㄱ을 확인한다</div>
    $$
    v(t)=3t^2-10t+7=(t-1)(3t-7)=0,\qquad t=1\ \text{또는}\ t=\frac73.
    $$
    <p>\(0&lt;t&lt;1\)에서 \(v&gt;0\), \(1&lt;t&lt;\dfrac73\)에서 \(v&lt;0\)이므로 \(t=1\)에서 운동 방향이 바뀐다. ㄱ은 참이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄴ을 확인한다</div>
    <p>원점에서 출발했으므로 위치는 속도의 정적분이다.</p>
    $$
    x(1)=\int_0^{1}\left(3t^2-10t+7\right)dt=\Big[t^3-5t^2+7t\Big]_0^{1}=1-5+7=3.
    $$
    <p>ㄴ도 참이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄷ을 확인한다</div>
    <p>움직인 거리는 속도의 절댓값을 적분한 것이고, \(t=1\)에서 부호가 바뀌므로 구간을 나눈다.</p>
    $$
    s=\int_0^{1}v\,dt-\int_1^{2}v\,dt=3-\{(8-20+14)-3\}=3-(-1)=4.
    $$
    <p>ㄷ도 참이므로 옳은 것은 ㄱ, ㄴ, ㄷ이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock09/common/q12": { answer: 1, html: String.raw`
  <div class="sol-box">이등변삼각형이므로 \(\mathrm A\)에서 내린 수선의 발이 \(\overline{\mathrm{BC}}\)의 중점이다. 그 조건이 \(a^{t}=2\)를 바로 준다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 중점 조건에서 \(a^{t}\)를 구한다</div>
    <p>\(\mathrm A(t,\ a^{t})\), \(\mathrm B(2t,\ a^{2t})\), \(\mathrm C(2t,\ 0)\)이고 \(\overline{\mathrm{AB}}=\overline{\mathrm{AC}}\)이므로, \(\mathrm A\)에서 \(\overline{\mathrm{BC}}\)에 내린 수선의 발 \(\mathrm H\)는 \(\overline{\mathrm{BC}}\)의 중점이다. \(\mathrm H\left(2t,\ a^{t}\right)\)이므로</p>
    $$
    2a^{t}=a^{2t},\qquad a^{t}=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 넓이 조건에서 \(t\)를 구한다</div>
    <p>밑변 \(\overline{\mathrm{BC}}=a^{2t}\), 높이 \(2t-t=t\)이므로</p>
    $$
    \frac12\times t\times a^{2t}=8,\qquad t\times\left(a^{t}\right)^2=16,\qquad t\times4=16,\qquad t=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구해 곱한다</div>
    <p>\(a^4=2\)이고 \(a&gt;1\)이므로 \(a=2^{\frac14}\)이고</p>
    $$
    a\times t=2^{\frac14}\times4=2^{\frac14+2}=2^{\frac94}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },
