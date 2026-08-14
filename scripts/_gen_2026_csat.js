"2026_csat/common/q01": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(3\)으로 통일한다</div>
    $$
    9^{\frac14}\times3^{-\frac12}=\left(3^{2}\right)^{\frac14}\times3^{-\frac12}=3^{\frac12}\times3^{-\frac12}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 더한다</div>
    $$
    3^{\frac12-\frac12}=3^{0}=1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_csat/common/q02": { answer: 4, html: String.raw`
  <div class="sol-box">이 극한은 미분계수의 정의 그대로이므로 \(f'(1)\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한을 미분계수로 바꾼다</div>
    $$
    \lim_{h\to0}\frac{f(1+h)-f(1)}{h}=f'(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    <p>\(f'(x)=9x^2+4\)이므로</p>
    $$
    f'(1)=9+4=13.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_csat/common/q03": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합의 기호를 나눈다</div>
    $$
    \sum_{k=1}^{4}(2a_k-k)=2\sum_{k=1}^{4}a_k-\frac{4\times5}{2}=2\sum_{k=1}^{4}a_k-10=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 풀어 준다</div>
    $$
    2\sum_{k=1}^{4}a_k=10,\qquad \sum_{k=1}^{4}a_k=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_csat/common/q04": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이어붙인 점에서 좌우를 맞춘다</div>
    $$
    \lim_{x\to1-}(3x-2)=1,\qquad \lim_{x\to1+}\left(x^2-3x+a\right)=-2+a=f(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a\)를 구한다</div>
    $$
    1=-2+a,\qquad a=3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_csat/common/q05": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 쓴다</div>
    $$
    f'(x)=\left(2x^2-x-2\right)+(x+2)(4x-1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입한다</div>
    $$
    f'(1)=(2-1-2)+3\times3=-1+9=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_csat/common/q06": { answer: 2, html: String.raw`
  <div class="sol-box">\(b=a^3\)이므로 모든 로그를 \(\log_3a\) 하나로 바꿀 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\log_3a\)를 구한다</div>
    <p>\(\log_ab=3\)에서 \(b=a^3\)이므로</p>
    $$
    \log_3\frac ba=\log_3a^2=2\log_3a=\frac12,\qquad \log_3a=\frac14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 구하는 값을 정리한다</div>
    $$
    \log_9ab=\log_{3^2}a^4=\frac42\log_3a=2\times\frac14=\frac12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_csat/common/q07": { answer: 5, html: String.raw`
  <div class="sol-box">두 곡선은 \(x=0\)에서만 만나고 상수항이 같으므로, 차를 만들면 \(x^2\)항만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 위아래를 가린다</div>
    <p>모든 실수 \(x\)에서 \(x^2+3\ge-\dfrac15x^2+3\)이므로 \(y=x^2+3\)이 위에 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 차를 적분한다</div>
    $$
    \int_0^{2}\left\{\left(x^2+3\right)-\left(-\frac15x^2+3\right)\right\}dx=\int_0^{2}\frac65x^2\,dx=\left[\frac25x^3\right]_0^{2}=\frac{16}{5}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_csat/common/q08": { answer: 1, html: String.raw`
  <div class="sol-box">\(\sin\theta=-3\cos\theta\)를 제곱해 \(\sin^2\theta+\cos^2\theta=1\)에 넣으면 \(\sin\theta\)만 남는다. 부호는 \(\cos(\pi-\theta)&gt;0\)에서 결정된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부호를 정한다</div>
    <p>\(\cos(\pi-\theta)=-\cos\theta&gt;0\)이므로 \(\cos\theta&lt;0\)이고, \(\sin\theta=-3\cos\theta&gt;0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 제곱하여 \(\sin\theta\)만 남긴다</div>
    $$
    \sin^2\theta=9\cos^2\theta=9\left(1-\sin^2\theta\right),\qquad 10\sin^2\theta=9,\qquad \sin^2\theta=\frac9{10}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부호를 붙인다</div>
    $$
    \sin\theta=\frac3{\sqrt{10}}=\frac{3\sqrt{10}}{10}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_csat/common/q09": { answer: 4, html: String.raw`
  <div class="sol-box">\(x\)축에 평행한 직선이 삼차함수의 그래프에 접하는 곳은 극값을 갖는 지점이다. \(f(0)=4&lt;5\)이므로 접하는 쪽은 극댓값이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극값을 갖는 \(x\)를 구한다</div>
    $$
    f'(x)=3x^2+6ax-9a^2=3(x+3a)(x-a)=0,\qquad x=-3a\ \text{또는}\ x=a.
    $$
    <p>\(a&gt;0\)이므로 \(x=-3a\)에서 극대, \(x=a\)에서 극소이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 접하는 조건을 쓴다</div>
    <p>\(f(0)=4&lt;5\)이므로 직선 \(y=5\)는 극댓값과 같아야 한다.</p>
    $$
    f(-3a)=-27a^3+27a^3+27a^3+4=27a^3+4=5,\qquad a^3=\frac1{27},\qquad a=\frac13.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(2)\)를 구한다</div>
    <p>\(f(x)=x^3+x^2-x+4\)이므로</p>
    $$
    f(2)=8+4-2+4=14.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_csat/common/q10": { answer: 3, html: String.raw`
  <div class="sol-box">\(y=a^{x}-2\)의 점근선이 \(y=-2\)이므로 \(\overline{\mathrm{BC}}=2\)이고, \(\overline{\mathrm{AB}}=\overline{\mathrm{BC}}\)에서 \(\mathrm A\)의 \(y\)좌표가 바로 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm A\)의 좌표를 잡는다</div>
    <p>\(\mathrm A(p,\ q)\)라 하면 \(\overline{\mathrm{BC}}=2\)이고 \(\overline{\mathrm{AB}}=\overline{\mathrm{BC}}\)이므로 \(q=2\)이다. \(\mathrm A\)가 곡선 위의 점이므로</p>
    $$
    2=a^{p}-2,\qquad a^{p}=4,\qquad p=\log_a4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 넓이 조건에서 \(p\)를 구한다</div>
    <p>\(\overline{\mathrm{AC}}=\overline{\mathrm{AB}}+\overline{\mathrm{BC}}=4\)이고 이것을 밑변으로 보면 높이가 \(\overline{\mathrm{OB}}=p\)이므로</p>
    $$
    \frac12\times4\times p=8,\qquad p=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구해 곱한다</div>
    <p>\(\log_a4=4\)에서 \(a^4=4\)이고 \(a&gt;1\)이므로 \(a=\sqrt2\)이다.</p>
    $$
    a\times\overline{\mathrm{OB}}=\sqrt2\times4=2^{\frac12+2}=2^{\frac52}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_csat/common/q11": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> ㄱ을 확인한다</div>
    <p>\(k=0\)이면 \(v(t)=t^2+4\)이고 원점에서 출발했으므로</p>
    $$
    \int_0^{1}\left(t^2+4\right)dt=\left[\frac13t^3+4t\right]_0^{1}=\frac13+4=\frac{13}{3}.
    $$
    <p>ㄱ은 참이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄴ을 확인한다</div>
    <p>\(k=3\)이면 \(v(t)=t^2-3t+4=\left(t-\dfrac32\right)^2+\dfrac74&gt;0\)이므로 속도의 부호가 바뀌지 않는다. 즉 운동 방향이 바뀌지 않으므로 ㄴ은 거짓이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄷ을 확인한다</div>
    <p>\(k=5\)이면 \(v(t)=(t-1)(t-4)\)이므로 \(0&lt;t&lt;1\)에서 \(v&gt;0\), \(1&lt;t&lt;2\)에서 \(v&lt;0\)이다. 구간을 나누어 절댓값을 적분하면</p>
    $$
    s=\int_0^{1}v\,dt-\int_1^{2}v\,dt=\left(\frac13-\frac52+4\right)-\left\{\left(\frac83-10+8\right)-\left(\frac13-\frac52+4\right)\right\}=3.
    $$
    <p>ㄷ은 참이므로 옳은 것은 ㄱ, ㄷ이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },
