"2026_mock06/common/q01": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(2\)로 통일한다</div>
    $$
    4^{\frac14}\times2^{\frac12}=\left(2^{2}\right)^{\frac14}\times2^{\frac12}=2^{\frac12}\times2^{\frac12}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 더한다</div>
    $$
    2^{\frac12+\frac12}=2^{1}=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock06/common/q02": { answer: 1, html: String.raw`
  <div class="sol-box">이 극한은 미분계수의 정의 그대로이므로 \(f'(1)\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한을 미분계수로 바꾼다</div>
    $$
    \lim_{h\to0}\frac{f(1+h)-f(1)}{h}=f'(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    <p>\(f'(x)=2x-1\)이므로</p>
    $$
    f'(1)=2-1=1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock06/common/q03": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합의 기호를 나눈다</div>
    $$
    \sum_{k=1}^{7}(2a_k+1)=2\sum_{k=1}^{7}a_k+\sum_{k=1}^{7}1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    <p>뒤쪽은 \(1\)을 \(7\)번 더한 것이므로</p>
    $$
    2\times8+7=23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock06/common/q04": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이어붙인 점에서만 따진다</div>
    <p>두 조각은 각각 실수 전체에서 연속이므로, \(x=3\)에서 연속이면 \(f\)는 실수 전체에서 연속이다.</p>
    $$
    \lim_{x\to3-}\left(-x^2+a\right)=-9+a,\qquad \lim_{x\to3+}(5x-a)=15-a=f(3).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a\)를 구한다</div>
    $$
    -9+a=15-a,\qquad 2a=24,\qquad a=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock06/common/q05": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부정적분을 구한다</div>
    $$
    \int_0^{2}\left(6x^2-2x+1\right)dx=\Big[2x^3-x^2+x\Big]_0^{2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    16-4+2=14.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock06/common/q06": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 최댓값에서 \(a\)를 구한다</div>
    <p>\(a&gt;0\)이므로 최댓값은 \(a+1\)이고, 이것이 \(8\)이므로 \(a=7\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 주기에서 \(b\)를 구한다</div>
    <p>\(b&gt;0\)이므로 주기는 \(\dfrac{2\pi}{b}\)이고, 이것이 \(\pi\)이므로</p>
    $$
    \frac{2\pi}{b}=\pi,\qquad b=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 더한다</div>
    $$
    a+b=7+2=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock06/common/q07": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 쓴다</div>
    <p>\(g(x)=5x^2+xf(x)\)이므로</p>
    $$
    g'(x)=10x+f(x)+xf'(x).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=3\)을 대입한다</div>
    $$
    g'(3)=30+f(3)+3f'(3)=30+2+3\times1=35.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock06/common/q08": { answer: 5, html: String.raw`
  <div class="sol-box">\(2\cos\theta=\sin\theta\)의 양변을 제곱하면 \(\sin^2\theta=1-\cos^2\theta\)로 바꿔 \(\cos\theta\)만 남길 수 있다. 부호는 \(\sin\theta&gt;0\)에서 결정된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부호를 먼저 정한다</div>
    <p>\(\sin(\pi-\theta)=\sin\theta&gt;0\)이고, \(2\cos\theta=\sin\theta&gt;0\)이므로 \(\cos\theta&gt;0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 제곱하여 \(\cos\theta\)만 남긴다</div>
    $$
    4\cos^2\theta=\sin^2\theta=1-\cos^2\theta,\qquad 5\cos^2\theta=1,\qquad \cos^2\theta=\frac15.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부호를 붙인다</div>
    $$
    \cos\theta=\frac{\sqrt5}{5}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock06/common/q09": { answer: 2, html: String.raw`
  <div class="sol-box">\((x+1)f(x)=xf(x)+f(x)\)로 쪼개면 양변의 \(\displaystyle\int_{-3}^{3}f(x)\,dx\)가 서로 지워져 \(\displaystyle\int_{-3}^{3}xf(x)\,dx=36\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건을 간단히 한다</div>
    $$
    \int_{-3}^{3}(x+1)f(x)\,dx=\int_{-3}^{3}xf(x)\,dx+\int_{-3}^{3}f(x)\,dx
    $$
    <p>이므로 주어진 등식에서</p>
    $$
    \int_{-3}^{3}xf(x)\,dx=36.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 우함수·기함수를 이용해 계산한다</div>
    <p>\(f(x)=x^2+ax\)이므로 \(xf(x)=x^3+ax^2\)이고, \(x^3\)은 기함수라 대칭구간에서 \(0\)이다.</p>
    $$
    \int_{-3}^{3}\left(x^3+ax^2\right)dx=2\int_0^{3}ax^2\,dx=2\left[\frac a3x^3\right]_0^{3}=18a.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구한다</div>
    $$
    18a=36,\qquad a=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock06/common/q10": { answer: 1, html: String.raw`
  <div class="sol-box">두 곡선은 \(y\)축에 대하여 서로 대칭이므로, 정삼각형의 꼭짓점 \(\mathrm A\)는 \(y\)축 위에 있고 밑변은 \(x\)축 위에 놓인다. 그러면 \(\tan\dfrac\pi3\) 하나로 조건이 정리된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 세 꼭짓점을 구한다</div>
    <p>\(\log_a(x+3)=\log_a(-x+3)\)에서 \(x=0\)이므로 \(\mathrm A\left(0,\ \log_a3\right)\)이다. 또 \(\log_a(x+3)=0\)에서 \(x+3=1\), 즉 \(\mathrm B(-2,\ 0)\)이고, \(\log_a(-x+3)=0\)에서 \(\mathrm C(2,\ 0)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 정삼각형 조건을 쓴다</div>
    <p>원점을 \(\mathrm O\)라 하면 \(\overline{\mathrm{OB}}=2\)이고, 직각삼각형 \(\mathrm{AOB}\)에서 \(\angle\mathrm{ABO}=\dfrac\pi3\)이므로</p>
    $$
    \tan\frac\pi3=\frac{\overline{\mathrm{OA}}}{\overline{\mathrm{OB}}},\qquad \sqrt3=\frac{\log_a3}{2},\qquad \log_a3=2\sqrt3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구한다</div>
    $$
    a^{2\sqrt3}=3,\qquad a=3^{\frac1{2\sqrt3}}=3^{\frac{\sqrt3}{6}}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock06/common/q11": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> ㄱ을 확인한다</div>
    $$
    x(1)=1^3-1^2-1+1=0.
    $$
    <p>위치가 \(1\)이 아니라 \(0\)이므로 ㄱ은 거짓이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄴ을 확인한다</div>
    $$
    v=\frac{dx}{dt}=3t^2-2t-1,\qquad v(1)=3-2-1=0.
    $$
    <p>따라서 ㄴ은 참이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄷ을 확인한다</div>
    <p>\(v=3t^2-2t-1=(3t+1)(t-1)\)이므로 \(t=1\)의 좌우에서 부호가 음에서 양으로 바뀐다. 즉 출발한 후 운동 방향이 바뀌는 시각은 \(t=1\)이고, 그때의 가속도는</p>
    $$
    a=\frac{dv}{dt}=6t-2,\qquad a(1)=4.
    $$
    <p>따라서 ㄷ도 참이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock06/common/q12": { answer: 2, html: String.raw`
  <div class="sol-box">조건 (나)가 매 단계 두 갈래이므로 \(a_1\to a_2\to a_3\)에서 네 갈래가 나온다. 조건 (가) \(a_3=a_1\)이 그중 어느 것이 가능한지를 걸러 준다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 네 갈래로 나눈다</div>
    <p>조건 (나)에서 \(a_{n+1}=a_n-3\) 또는 \(a_{n+1}=2a_n\)이다. \(a_1\to a_2\), \(a_2\to a_3\)의 선택을 조합하면 네 경우가 나오고, 각각에 조건 (가) \(a_3=a_1\)을 적용한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 각 경우를 확인한다</div>
    <p>ⅰ) 두 번 다 \(-3\)이면 \(a_3=a_1-6\)이라 \(a_3=a_1\)이 될 수 없다.</p>
    <p>ⅱ) \(a_2=2a_1\), \(a_3=a_2-3\)이면 \(a_3=2a_1-3=2a_3-3\)에서 \(a_3=3\)이다.</p>
    <p>ⅲ) \(a_2=a_1-3\), \(a_3=2a_2\)이면 \(a_3=2a_1-6=2a_3-6\)에서 \(a_3=6\)이다.</p>
    <p>ⅳ) 두 번 다 \(2\)배이면 \(a_3=4a_1=4a_3\)에서 \(a_3=0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_4\)의 최댓값을 구한다</div>
    <p>\(a_4\)는 \(a_3-3\) 또는 \(2a_3\)이므로 가능한 값은</p>
    $$
    a_3=3\ \Rightarrow\ 0,\ 6,\qquad a_3=6\ \Rightarrow\ 3,\ 12,\qquad a_3=0\ \Rightarrow\ -3,\ 0.
    $$
    <p>따라서 최댓값은 \(12\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock06/common/q13": { answer: 4, html: String.raw`
  <div class="sol-box">세 영역은 곡선과 직선의 위아래가 뒤바뀌면서 번갈아 나온다. 그래서 \((A)+(C)=(B)\)는 부호를 붙여 한 번에 적분했을 때 \(0\)이 된다는 뜻이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건을 하나의 정적분으로 옮긴다</div>
    <p>\(A\), \(C\)에서는 곡선이 직선보다 위에, \(B\)에서는 아래에 있으므로</p>
    $$
    \int_0^{k}\left\{\left(3x^2-7x+2\right)-\left(\frac13x-\frac23\right)\right\}dx=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 정리해서 적분한다</div>
    $$
    \int_0^{k}\left(3x^2-\frac{22}{3}x+\frac83\right)dx=\left[x^3-\frac{11}{3}x^2+\frac83x\right]_0^{k}=0,
    $$
    $$
    k^3-\frac{11}{3}k^2+\frac83k=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(k\)를 구한다</div>
    $$
    3k^3-11k^2+8k=k(k-1)(3k-8)=0.
    $$
    <p>\(k&gt;2\)이므로 \(k=\dfrac83\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },
