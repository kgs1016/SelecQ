"2025_mock09/common/q01": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(2\)로 통일한다</div>
    $$
    32^{\frac14}\times4^{-\frac18}=\left(2^{5}\right)^{\frac14}\times\left(2^{2}\right)^{-\frac18}
    =2^{\frac54}\times2^{-\frac14}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 더한다</div>
    $$
    2^{\frac54-\frac14}=2^{1}=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock09/common/q02": { answer: 5, html: String.raw`
  <div class="sol-box">이 극한은 미분계수의 정의 그대로이므로 \(f'(1)\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한을 미분계수로 바꾼다</div>
    $$
    \lim_{h\to0}\frac{f(1+h)-f(1)}{h}=f'(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 도함수를 구해 대입한다</div>
    <p>\(f(x)=x^3+3x^2-5\)이므로 \(f'(x)=3x^2+6x\)이고</p>
    $$
    f'(1)=3\times1^2+6\times1=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock09/common/q03": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫째항과 공비로 두 조건을 쓴다</div>
    <p>첫째항을 \(a\), 공비를 \(r\)라 하면</p>
    $$
    a_2a_3=ar\times ar^2=a^2r^3=2,\qquad a_4=ar^3=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 식을 나누어 \(a\)를 구한다</div>
    <p>앞 식을 뒤 식으로 나누면 \(r^3\)이 약분되어</p>
    $$
    a=\frac12.
    $$
    <p>이를 \(ar^3=4\)에 대입하면 \(r^3=8\)이고, \(r\)는 실수이므로 \(r=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_6\)을 구한다</div>
    $$
    a_6=ar^{5}=\frac12\times2^{5}=2^{4}=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_mock09/common/q04": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그래프에서 두 극한을 읽는다</div>
    <p>주어진 그래프에서 \(x=0\)의 왼쪽에서 다가가면 함숫값이 \(-2\)에, \(x=1\)의 오른쪽에서 다가가면 \(1\)에 가까워진다.</p>
    $$
    \lim_{x\to0-}f(x)=-2,\qquad \lim_{x\to1+}f(x)=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 더한다</div>
    $$
    \lim_{x\to0-}f(x)+\lim_{x\to1+}f(x)=-2+1=-1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock09/common/q05": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 쓴다</div>
    <p>\(f(x)=(x+1)(x^2+x-5)\)이므로</p>
    $$
    f'(x)=(x^2+x-5)+(x+1)(2x+1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=2\)를 대입한다</div>
    $$
    f'(2)=(4+2-5)+(2+1)(4+1)=1+15=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock09/common/q06": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\cos\theta\)를 구한다</div>
    <p>\(\cos(\pi+\theta)=-\cos\theta\)이므로</p>
    $$
    -\cos\theta=\frac{2\sqrt5}{5},\qquad \cos\theta=-\frac{2\sqrt5}{5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사분면을 보고 \(\sin\theta\)의 부호를 정한다</div>
    <p>\(\dfrac\pi2&lt;\theta&lt;\pi\)에서 \(\sin\theta&gt;0\)이므로</p>
    $$
    \sin\theta=\sqrt{1-\cos^2\theta}=\sqrt{1-\frac45}=\frac{\sqrt5}{5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 더한다</div>
    $$
    \sin\theta+\cos\theta=\frac{\sqrt5}{5}-\frac{2\sqrt5}{5}=-\frac{\sqrt5}{5}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock09/common/q07": { answer: 3, html: String.raw`
  <div class="sol-box">두 조각이 만나는 \(x=4\)에서만 연속을 따지면 된다. 좌극한과 함숫값이 같으면 실수 전체에서 연속이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x=4\)에서 좌우를 맞춘다</div>
    $$
    \lim_{x\to4-}f(x)=(4-a)^2,\qquad \lim_{x\to4+}f(x)=f(4)=2\times4-4=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a\)를 구한다</div>
    $$
    (4-a)^2=4,\qquad a^2-8a+12=0,\qquad (a-2)(a-6)=0.
    $$
    <p>따라서 \(a=2\) 또는 \(a=6\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 곱을 구한다</div>
    $$
    2\times6=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock09/common/q08": { answer: 1, html: String.raw`
  <div class="sol-box">밑변환공식으로 \(\log_a8=\dfrac{3}{\log_2a}\)로 바꾸면, \(\log_2a\)에 대한 이차방정식이 된다. 곱은 따로 계산할 필요 없이 바로 \(3\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\log_2a\)만 남긴다</div>
    $$
    \log_a8=3\log_a2=\frac{3}{\log_2a}.
    $$
    <p>\(\log_2a=X\)라 하면 \(a&gt;2\)에서 \(X&gt;1\)이고, 합이 \(4\)라는 조건은</p>
    $$
    X+\frac3X=4,\qquad X^2-4X+3=0,\qquad (X-1)(X-3)=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a\)를 구한다</div>
    <p>\(X&gt;1\)이므로 \(X=3\), 즉 \(\log_2a=3\)에서 \(a=8\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 곱 \(k\)를 구한다</div>
    <p>두 수의 곱은 \(X\)와 \(\dfrac3X\)의 곱이므로 \(X\)에 상관없이</p>
    $$
    k=\log_2a\times\frac{3}{\log_2a}=3,\qquad a+k=8+3=11.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_mock09/common/q09": { answer: 5, html: String.raw`
  <div class="sol-box">\(\displaystyle\int_0^1f(x)\,dx\)를 실제로 계산하기 전에, 두 정적분을 한 적분으로 묶으면 \(f\)가 대부분 지워진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 정적분을 항별로 나눈다</div>
    $$
    5\int_0^1f(x)\,dx-\int_0^1\{5x+f(x)\}\,dx
    =4\int_0^1f(x)\,dx-\int_0^1 5x\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 하나의 적분으로 합친다</div>
    <p>\(f(x)=x^2+x\)이므로</p>
    $$
    \int_0^1\left(4x^2+4x-5x\right)dx=\int_0^1(4x^2-x)\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 계산한다</div>
    $$
    \left[\frac43x^3-\frac12x^2\right]_0^1=\frac43-\frac12=\frac56.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock09/common/q10": { answer: 1, html: String.raw`
  <div class="sol-box">외접원의 넓이가 반지름을 주고, 사인법칙이 \(\overline{\mathrm{AB}}\)와 \(\sin C\)를 잇는다. 직각삼각형 \(\mathrm{AHC}\)에서 \(\sin C\)를 미지수로 쓰는 것이 연결 고리다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미지수를 잡고 \(\sin C\)를 나타낸다</div>
    <p>\(\overline{\mathrm{AC}}=x\)라 하면 \(\overline{\mathrm{AB}}:\overline{\mathrm{AC}}=\sqrt2:1\)에서 \(\overline{\mathrm{AB}}=\sqrt2\,x\)이다. 직각삼각형 \(\mathrm{AHC}\)에서 \(\overline{\mathrm{AH}}=2\)이므로</p>
    $$
    \sin C=\frac{2}{x}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 외접원의 반지름을 구한다</div>
    <p>외접원의 넓이가 \(50\pi\)이므로 \(\pi R^2=50\pi\)에서 \(R=5\sqrt2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 사인법칙으로 \(x\)를 구한다</div>
    $$
    \frac{\overline{\mathrm{AB}}}{\sin C}=2R\ \Longrightarrow\ \sqrt2\,x=2\times5\sqrt2\times\frac2x,
    $$
    $$
    x^2=20,\qquad x=2\sqrt5.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 직각삼각형 \(\mathrm{ABH}\)에서 \(\overline{\mathrm{BH}}\)를 구한다</div>
    <p>\(\overline{\mathrm{AB}}=\sqrt2\,x=2\sqrt{10}\)이므로</p>
    $$
    \overline{\mathrm{BH}}=\sqrt{\overline{\mathrm{AB}}^{\,2}-\overline{\mathrm{AH}}^{\,2}}=\sqrt{40-4}=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_mock09/common/q11": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 위치가 같아지는 시각을 구한다</div>
    $$
    t^2+t-6=-t^3+7t^2,\qquad t^3-6t^2+t-6=0,
    $$
    $$
    t^2(t-6)+(t-6)=0,\qquad (t-6)(t^2+1)=0.
    $$
    <p>\(t\ge0\)이므로 \(t=6\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 번 미분하여 가속도를 구한다</div>
    $$
    v_1=2t+1,\qquad a_1=2,
    $$
    $$
    v_2=-3t^2+14t,\qquad a_2=-6t+14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=6\)을 대입한다</div>
    $$
    p=2,\qquad q=-6\times6+14=-22,
    $$
    $$
    p-q=2-(-22)=24.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_mock09/common/q12": { answer: 2, html: String.raw`
  <div class="sol-box">부호가 번갈아 붙은 합은 항을 두 개씩 묶으면 공차만 남는다. 홀수째 항과 짝수째 항을 나누어 보면 \(b_n\)이 곧바로 일반항으로 정리된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(b_{2n-1}\), \(b_{2n}\)을 각각 정리한다</div>
    <p>공차를 \(d\)라 하고 \(b_n=\displaystyle\sum_{k=1}^{n}(-1)^{k+1}a_k\)에서 뒤에서부터 두 항씩 묶으면</p>
    $$
    b_{2n-1}=a_1+(a_3-a_2)+(a_5-a_4)+\cdots+(a_{2n-1}-a_{2n-2})=a_1+(n-1)d=a_n,
    $$
    $$
    b_{2n}=(a_1-a_2)+(a_3-a_4)+\cdots+(a_{2n-1}-a_{2n})=n\times(-d)=-nd.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 조건에서 \(d\)와 \(a_1\)을 구한다</div>
    <p>\(b_2=-d=-2\)에서 \(d=2\)이다. 또 \(b_3=a_2\), \(b_7=a_4\)이므로 \(b_3+b_7=0\)은</p>
    $$
    a_2+a_4=2a_3=0,\qquad a_3=0.
    $$
    <p>\(a_3=a_1+2\times2=0\)에서 \(a_1=-4\)이고 \(a_n=2n-6\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\displaystyle\sum_{n=1}^{9}b_n\)을 구한다</div>
    <p>\(b_{2n-1}=a_n=2n-6\), \(b_{2n}=-2n\)이므로</p>
    $$
    \sum_{n=1}^{9}b_n=\sum_{n=1}^{4}\{(2n-6)+(-2n)\}+b_9=(-6)\times4+a_5=-24+4=-20.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock09/common/q13": { answer: 4, html: String.raw`
  <div class="sol-box">\(f(-x)=f(x)\)이므로 그래프는 \(y\)축에 대하여 대칭이다. 그러면 \(A\)는 \(y\)축이 이등분하므로 \(A=2B\)는 곧 \(\dfrac A2=B\), 즉 \(\displaystyle\int_0^{k}f(x)\,dx=0\)이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 대칭성을 확인한다</div>
    <p>\(x&lt;0\)일 때 \(f(x)=-x^2-2x+6\), \(x\ge0\)일 때 \(f(x)=-x^2+2x+6\)이므로 \(f(-x)=f(x)\)이다. 따라서 \(y=f(x)\)의 그래프는 \(y\)축에 대하여 대칭이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 \(A=2B\)를 하나의 정적분으로 바꾼다</div>
    <p>\(y\)축이 \(A\)를 이등분하므로 \(\dfrac A2\)는 \(x=0\)부터 곡선이 \(x\)축과 만나는 곳까지 \(x\)축 위쪽의 넓이이고, \(B\)는 거기서 \(x=k\)까지 \(x\)축 아래쪽의 넓이이다. 부호를 붙여 더하면 서로 지워지므로</p>
    $$
    \int_0^{k}f(x)\,dx=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(k\)를 구한다</div>
    <p>\(k&gt;4&gt;0\)이므로 \(f(x)=-x^2+2x+6\)을 적분하면</p>
    $$
    \left[-\frac13x^3+x^2+6x\right]_0^{k}=-\frac{k}{3}\left(k^2-3k-18\right)=-\frac{k}{3}(k+3)(k-6)=0.
    $$
    <p>\(k&gt;4\)이므로 \(k=6\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },
