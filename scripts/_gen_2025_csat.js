"2025_csat/common/q01": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(5\)로 통일한다</div>
    $$
    \sqrt[3]{5}\times25^{\frac13}=5^{\frac13}\times\left(5^{2}\right)^{\frac13}=5^{\frac13}\times5^{\frac23}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 더한다</div>
    $$
    5^{\frac13+\frac23}=5^{1}=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_csat/common/q02": { answer: 4, html: String.raw`
  <div class="sol-box">이 극한은 미분계수의 정의 그대로이므로 \(f'(2)\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한을 미분계수로 바꾼다</div>
    $$
    \lim_{h\to0}\frac{f(2+h)-f(2)}{h}=f'(2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    <p>\(f'(x)=3x^2-8\)이므로</p>
    $$
    f'(2)=3\times4-8=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_csat/common/q03": { answer: 5, html: String.raw`
  <div class="sol-box">첫째항과 공비가 모두 \(k\)이면 \(a_n=k^{n}\)이므로, 이웃한 항의 비는 그냥 \(k\)의 거듭제곱이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항을 쓴다</div>
    <p>첫째항과 공비가 모두 \(k\)이므로 \(a_n=k^{n}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건을 \(k\)의 식으로 바꾼다</div>
    $$
    \frac{a_4}{a_2}+\frac{a_2}{a_1}=\frac{k^4}{k^2}+\frac{k^2}{k}=k^2+k=30.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 푼다</div>
    $$
    k^2+k-30=0,\qquad (k+6)(k-5)=0.
    $$
    <p>\(k&gt;0\)이므로 \(k=5\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_csat/common/q04": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이어붙인 점에서 연속을 따진다</div>
    <p>실수 전체에서 연속이므로 \(x=-2\)에서 좌극한과 우극한, 함숫값이 모두 같아야 한다.</p>
    $$
    \lim_{x\to-2-}(5x+a)=-10+a,\qquad \lim_{x\to-2+}(x^2-a)=4-a=f(-2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a\)를 구한다</div>
    $$
    -10+a=4-a,\qquad 2a=14,\qquad a=7.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_csat/common/q05": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 쓴다</div>
    $$
    f'(x)=2x\left(3x^2-x\right)+\left(x^2+1\right)(6x-1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입한다</div>
    $$
    f'(1)=2\times2+2\times5=14.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_csat/common/q06": { answer: 5, html: String.raw`
  <div class="sol-box">\(1-\cos^2\theta=\sin^2\theta\)로 바꾸면 분모와 분자가 한 번 약분되어 \(\dfrac1{\sin\theta}\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sin\theta\)를 구한다</div>
    <p>\(\cos\left(\dfrac\pi2+\theta\right)=-\sin\theta\)이므로</p>
    $$
    -\sin\theta=-\frac15,\qquad \sin\theta=\frac15.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 식을 정리한다</div>
    $$
    \frac{\sin\theta}{1-\cos^2\theta}=\frac{\sin\theta}{\sin^2\theta}=\frac1{\sin\theta}=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_csat/common/q07": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 양변을 미분한다</div>
    <p>\(\displaystyle\int_0^{x}f(t)\,dt=3x^3+2x\)의 양변을 \(x\)에 대하여 미분하면</p>
    $$
    f(x)=9x^2+2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    f(1)=9+2=11.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_csat/common/q08": { answer: 1, html: String.raw`
  <div class="sol-box">\(a\)를 정리하면 \(\log_210\)이 되고 \(b=\log2\)이다. 밑과 진수가 서로 뒤바뀐 두 로그의 곱은 항상 \(1\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a\)를 정리한다</div>
    $$
    a=2\log\frac1{\sqrt{10}}+\log_220
    =2\times\left(-\frac12\right)\log10+\log_22+\log_210,
    $$
    $$
    a=-1+1+\log_210=\log_210.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 곱을 구한다</div>
    <p>\(b=\log2\)는 밑이 \(10\)인 로그이므로 밑변환공식에 의하여 \(\log_210\)의 역수이다.</p>
    $$
    a\times b=\log_210\times\log2=1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_csat/common/q09": { answer: 4, html: String.raw`
  <div class="sol-box">적분구간을 \(-2\to0\)과 \(0\to a\)로 쪼개면 조건이 \(\displaystyle\int_0^{a}f(x)\,dx=0\) 하나로 줄어든다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건을 간단히 한다</div>
    $$
    \int_{-2}^{a}f(x)\,dx=\int_{-2}^{0}f(x)\,dx+\int_0^{a}f(x)\,dx=\int_{-2}^{0}f(x)\,dx
    $$
    <p>이므로</p>
    $$
    \int_0^{a}f(x)\,dx=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분해서 \(a\)를 구한다</div>
    $$
    \int_0^{a}\left(3x^2-16x-20\right)dx=\Big[x^3-8x^2-20x\Big]_0^{a}=a^3-8a^2-20a=0,
    $$
    $$
    a(a+2)(a-10)=0.
    $$
    <p>\(a\)가 양수이므로 \(a=10\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_csat/common/q10": { answer: 3, html: String.raw`
  <div class="sol-box">\(a\)가 자연수이므로 최댓값은 \(\cos bx=1\)일 때 나온다. 즉 \(x=\dfrac\pi3\)이 주기의 정수배여야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 최댓값에서 \(a\)를 구한다</div>
    <p>\(a&gt;0\)이므로 \(f\)의 최댓값은 \(a+3\)이고, 이것이 \(13\)이므로</p>
    $$
    a+3=13,\qquad a=10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=\dfrac\pi3\)에서 최대가 되는 \(b\)를 찾는다</div>
    <p>\(f\left(\dfrac\pi3\right)=13\)이려면 \(\cos\dfrac{b\pi}{3}=1\)이어야 하므로, 자연수 \(n\)에 대하여</p>
    $$
    \frac{b\pi}{3}=2n\pi,\qquad b=6n.
    $$
    <p>따라서 \(b\)의 최솟값은 \(6\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 최솟값을 구한다</div>
    $$
    a+b\ \ge\ 10+6=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_csat/common/q11": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 속도와 가속도를 구한다</div>
    $$
    v=x'=3t^2-3t-6,\qquad a=v'=6t-3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 운동 방향이 바뀌는 시각을 구한다</div>
    $$
    3t^2-3t-6=3(t-2)(t+1)=0.
    $$
    <p>출발한 후이므로 \(t=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 그때의 가속도를 구한다</div>
    $$
    6\times2-3=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_csat/common/q12": { answer: 1, html: String.raw`
  <div class="sol-box">부분합이 \(\dfrac12n^2\)로 주어졌으니 \(n\)과 \(n-1\)을 대입해 빼면 항 하나만 남는다. 이때 \(b_{n+1}\)을 먼저 구해 두어야 \(a_n\)을 뽑을 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\{b_n\}\)을 구한다</div>
    <p>\(n=1\)을 대입하면 \(\dfrac{a_1}{b_2}=\dfrac12\)이고 \(a_1=2\)이므로 \(b_2=4\)이다. 등차수열 \(\{b_n\}\)에서 \(b_1=2\), \(b_2=4\)이므로 공차가 \(2\)이고</p>
    $$
    b_n=2n.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 빼서 \(a_n\)을 구한다</div>
    <p>\(n\) 대신 \(n-1\)을 넣은 식을 빼면</p>
    $$
    \frac{a_n}{b_{n+1}}=\frac12n^2-\frac12(n-1)^2=n-\frac12.
    $$
    <p>\(b_{n+1}=2(n+1)\)이므로</p>
    $$
    a_n=2(n+1)\left(n-\frac12\right)=2n^2+n-1\qquad(n\ge2).
    $$
    <p>\(n=1\)일 때도 \(2+1-1=2=a_1\)이므로 모든 자연수 \(n\)에서 성립한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 합을 구한다</div>
    $$
    \sum_{k=1}^{5}\left(2k^2+k-1\right)=2\times\frac{5\times6\times11}{6}+\frac{5\times6}{2}-5=110+15-5=120.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_csat/common/q13": { answer: 5, html: String.raw`
  <div class="sol-box">\(A\)와 \(B\)는 곡선과 직선의 위아래가 뒤바뀌는 구간에 놓여 있다. 그래서 \(4x-f(x)\)를 \(0\)부터 \(3\)까지 한 번에 적분하면 \(A\)는 음수로, \(B\)는 양수로 세어져 곧바로 \(B-A\)가 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f\)를 구한다</div>
    <p>\(f(1)=f(2)=0\)이고 최고차항의 계수가 \(1\)이므로 \(f(x)=(x-1)(x-2)(x-k)\)로 놓을 수 있다. 이때</p>
    $$
    f'(0)=(-2)(-k)+(-1)(-k)+(-1)(-2)=2k+k+2=-7,\qquad k=-3.
    $$
    $$
    f(x)=(x-1)(x-2)(x+3)=x^3-7x+6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 직선 \(\mathrm{OP}\)를 구한다</div>
    <p>\(f(3)=27-21+6=12\)이므로 \(\mathrm P(3,\ 12)\)이고, 직선 \(\mathrm{OP}\)의 방정식은 \(y=4x\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 한 적분으로 묶는다</div>
    <p>점 \(\mathrm Q\)의 \(x\)좌표를 \(a\)라 하면 \(0&lt;x&lt;a\)에서는 곡선이 위에, \(a&lt;x&lt;3\)에서는 직선이 위에 있으므로</p>
    $$
    B-A=\int_a^{3}\{4x-f(x)\}\,dx-\int_0^{a}\{f(x)-4x\}\,dx=\int_0^{3}\{4x-f(x)\}\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 계산한다</div>
    $$
    \int_0^{3}\left(-x^3+11x-6\right)dx=\left[-\frac14x^4+\frac{11}{2}x^2-6x\right]_0^{3}
    =-\frac{81}{4}+\frac{99}{2}-18=\frac{45}{4}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },
