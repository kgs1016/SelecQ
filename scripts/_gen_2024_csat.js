"2024_csat/common/q01": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(24\)를 소인수분해해 지수로 고친다</div>
    $$
    \sqrt[3]{24}\times3^{\frac23}=(2^3\times3)^{\frac13}\times3^{\frac23}
    =2\times3^{\frac13+\frac23}=2\times3=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_csat/common/q02": { answer: 4, html: String.raw`
  <div class="sol-box">주어진 극한은 \(x=2\)에서의 미분계수의 정의 그대로이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미분계수로 바꾼다</div>
    $$
    \lim_{h\to0}\frac{f(2+h)-f(2)}{h}=f'(2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 미분해서 대입한다</div>
    $$
    f'(x)=6x^2-10x,\qquad f'(2)=24-20=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_csat/common/q03": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sin\theta\)를 구한다</div>
    <p>\(\sin(-\theta)=-\sin\theta\)이므로</p>
    $$
    -\sin\theta=\frac13,\qquad \sin\theta=-\frac13.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사분면을 보고 \(\cos\theta\)를 구한다</div>
    <p>\(\dfrac32\pi&lt;\theta&lt;2\pi\)이므로 \(\theta\)는 제4사분면의 각이고 \(\cos\theta&gt;0\)이다.</p>
    $$
    \cos\theta=\sqrt{1-\frac19}=\frac{2\sqrt2}{3}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 탄젠트를 구한다</div>
    $$
    \tan\theta=\frac{\sin\theta}{\cos\theta}=-\frac{\frac13}{\frac{2\sqrt2}{3}}=-\frac{1}{2\sqrt2}=-\frac{\sqrt2}{4}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_csat/common/q04": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이어붙인 점에서 연속임을 쓴다</div>
    <p>\(f\)가 실수 전체의 집합에서 연속이므로 \(x=2\)에서도 연속이다.</p>
    $$
    \lim_{x\to2-}f(x)=\lim_{x\to2+}f(x)=f(2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 양쪽 값을 구해 맞춘다</div>
    $$
    \lim_{x\to2-}(3x-a)=6-a,\qquad \lim_{x\to2+}(x^2+a)=4+a=f(2),
    $$
    $$
    6-a=4+a,\qquad 2a=2,\qquad a=1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_csat/common/q05": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int(3x^2-6x)\,dx=x^3-3x^2+C.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분상수를 정하고 대입한다</div>
    $$
    f(1)=1-3+C=6\ \Longrightarrow\ C=8,
    $$
    $$
    f(2)=8-12+8=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_csat/common/q06": { answer: 4, html: String.raw`
  <div class="sol-box">\(S_4-S_2\)는 \(a_3+a_4\)이므로, 주어진 관계가 곧 \(a_3\)와 \(a_4\)의 비를 준다. 공비가 바로 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 공비를 구한다</div>
    $$
    S_4-S_2=a_3+a_4=3a_4\ \Longrightarrow\ a_3=2a_4,
    $$
    <p>\(a_5=\dfrac34\ne0\)이므로 \(r\ne0\)이고</p>
    $$
    r=\frac{a_4}{a_3}=\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_1\), \(a_2\)를 구한다</div>
    $$
    a_5=a_1r^4\ \Longrightarrow\ a_1=\frac34\times2^4=12,
    $$
    $$
    a_5=a_2r^3\ \Longrightarrow\ a_2=\frac34\times2^3=6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 더한다</div>
    $$
    a_1+a_2=12+6=18.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_csat/common/q07": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 도함수의 부호를 조사한다</div>
    $$
    f'(x)=x^2-4x-12=(x+2)(x-6),\qquad f'(x)=0\ \Longleftrightarrow\ x=-2\ \text{또는}\ x=6.
    $$
    <p>\(f'\)의 부호는 \(x=-2\)에서 양에서 음으로, \(x=6\)에서 음에서 양으로 바뀐다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극대·극소인 \(x\)를 읽는다</div>
    <p>따라서 \(f\)는 \(x=-2\)에서 극대, \(x=6\)에서 극소이므로 \(\alpha=-2\), \(\beta=6\)이다.</p>
    $$
    \beta-\alpha=6-(-2)=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_csat/common/q08": { answer: 2, html: String.raw`
  <div class="sol-box">우변을 \((x-1)\)로 묶으면 항등식이 되어 \(f\)가 바로 나온다. 적분은 홀수차 항이 대칭으로 사라지는 것을 이용한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f\)를 구한다</div>
    $$
    (x-1)f(x)=3x^4-3x=3x(x^3-1)=3x(x-1)(x^2+x+1).
    $$
    <p>\(f\)가 삼차함수이고 위 식이 \(x\)에 대한 항등식이므로</p>
    $$
    f(x)=3x(x^2+x+1)=3x^3+3x^2+3x.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대칭성을 이용해 적분한다</div>
    <p>\(3x^3\)과 \(3x\)는 기함수라 \(-2\)부터 \(2\)까지의 정적분이 \(0\)이므로</p>
    $$
    \int_{-2}^{2}f(x)\,dx=\int_{-2}^{2}3x^2\,dx=2\int_0^2 3x^2\,dx=2\Big[x^3\Big]_0^2=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_csat/common/q09": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 내분점의 좌표를 식으로 쓴다</div>
    <p>선분 \(\mathrm{PQ}\)를 \(m:(1-m)\)으로 내분하는 점의 좌표는</p>
    $$
    \frac{m\log_5 12+(1-m)\log_5 3}{m+(1-m)}=m\log_5 12+(1-m)\log_5 3=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(m\)에 대해 정리한다</div>
    $$
    m(\log_5 12-\log_5 3)=1-\log_5 3,
    $$
    $$
    m\log_5 4=\log_5 5-\log_5 3=\log_5\frac53,
    $$
    $$
    m=\frac{\log_5\frac53}{\log_5 4}=\log_4\frac53.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(4^m\)을 구한다</div>
    $$
    4^{m}=4^{\log_4\frac53}=\frac53.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_csat/common/q10": { answer: 2, html: String.raw`
  <div class="sol-box">두 점의 위치를 적분으로 구해 차를 만들면 \(f\)가 절댓값 하나로 정리된다. 그 안의 함수가 \(t\ge0\)에서 음수가 되지 않는지부터 확인한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 점의 위치를 구한다</div>
    $$
    x_1(t)=\int_0^t(u^2-6u+5)\,du=\frac13t^3-3t^2+5t,
    $$
    $$
    x_2(t)=\int_0^t(2u-7)\,du=t^2-7t.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(t)\)를 정리한다</div>
    $$
    f(t)=|x_1(t)-x_2(t)|=\left|\frac13t^3-4t^2+12t\right|.
    $$
    <p>\(g(t)=\dfrac13t^3-4t^2+12t\)라 하면 \(g'(t)=t^2-8t+12=(t-2)(t-6)\)이고 \(g(0)=0\), \(g(2)=\dfrac{32}{3}\), \(g(6)=0\)이다. 따라서 \(t\ge0\)에서 \(g(t)\ge0\)이므로 \(f(t)=g(t)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\), \(b\)를 읽는다</div>
    <p>\(f\)는 \([0,2]\)에서 증가, \([2,6]\)에서 감소, \([6,\infty)\)에서 증가하므로 \(a=2\), \(b=6\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 점 \(\mathrm Q\)가 움직인 거리를 구한다</div>
    <p>\(v_2(t)=2t-7\)은 \(t=\dfrac72\)에서 부호가 바뀌므로</p>
    $$
    \int_2^6|2t-7|\,dt=\int_2^{\frac72}(7-2t)\,dt+\int_{\frac72}^{6}(2t-7)\,dt
    =\Big[7t-t^2\Big]_2^{\frac72}+\Big[t^2-7t\Big]_{\frac72}^{6}
    =\frac94+\frac{25}{4}=\frac{17}{2}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },
