"2024_mock09/common/q01": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 지수법칙으로 지수를 더한다</div>
    $$
    3^{1-\sqrt5}\times3^{1+\sqrt5}=3^{(1-\sqrt5)+(1+\sqrt5)}=3^2=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_mock09/common/q02": { answer: 3, html: String.raw`
  <div class="sol-box">\(f(1)=2-1=1\)이므로 주어진 식은 \(x=1\)에서의 미분계수의 정의 그대로이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미분계수로 본다</div>
    $$
    \lim_{x\to1}\frac{f(x)-1}{x-1}=\lim_{x\to1}\frac{f(x)-f(1)}{x-1}=f'(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 미분해서 대입한다</div>
    $$
    f'(x)=4x-1,\qquad f'(1)=3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock09/common/q03": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 사분면을 보고 \(\sin\theta\)의 부호를 정한다</div>
    <p>\(\dfrac32\pi&lt;\theta&lt;2\pi\)이므로 \(\theta\)는 제4사분면의 각이고 \(\sin\theta&lt;0\)이다.</p>
    $$
    \sin\theta=-\sqrt{1-\cos^2\theta}=-\sqrt{1-\left(\frac{\sqrt6}{3}\right)^2}=-\sqrt{\frac13}=-\frac{\sqrt3}{3}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 탄젠트를 구한다</div>
    $$
    \tan\theta=\frac{\sin\theta}{\cos\theta}
    =\frac{-\frac{\sqrt3}{3}}{\frac{\sqrt6}{3}}
    =-\frac{\sqrt3}{\sqrt6}=-\frac{1}{\sqrt2}=-\frac{\sqrt2}{2}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock09/common/q04": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그래프에서 한쪽 극한을 각각 읽는다</div>
    <p>\(x\)가 \(-2\)에 오른쪽에서 가까워질 때의 값과, \(1\)에 왼쪽에서 가까워질 때의 값을 읽으면</p>
    $$
    \lim_{x\to-2+}f(x)=-2,\qquad \lim_{x\to1-}f(x)=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 더한다</div>
    $$
    -2+0=-2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_mock09/common/q05": { answer: 5, html: String.raw`
  <div class="sol-box">첨자의 합이 같으면 곱이 같다는 성질을 쓰면 \(\dfrac{a_3a_8}{a_6}\)이 곧 \(a_5\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a_5\)를 구한다</div>
    <p>첫째항을 \(a\), 공비를 \(r\)라 하면 모든 항이 양수이므로 \(a&gt;0,\ r&gt;0\)이다.</p>
    $$
    \frac{a_3a_8}{a_6}=\frac{ar^2\times ar^7}{ar^5}=ar^4=a_5=12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 공비의 제곱을 구한다</div>
    $$
    a_5+a_7=36\ \Longrightarrow\ a_7=24,\qquad r^2=\frac{a_7}{a_5}=\frac{24}{12}=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_{11}\)을 구한다</div>
    $$
    \frac{a_{11}}{a_7}=r^4=(r^2)^2=4,\qquad a_{11}=24\times4=96.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_mock09/common/q06": { answer: 3, html: String.raw`
  <div class="sol-box">극대·극소가 되는 두 \(x\)를 알므로 \(f'(x)\)를 인수분해된 꼴로 바로 쓸 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f'\)를 두 가지로 표현해 비교한다</div>
    <p>\(f'(x)=3x^2+2ax+b\)이고, \(f\)가 \(x=-1\)에서 극대, \(x=3\)에서 극소이므로 \(f'(-1)=f'(3)=0\)이다. 최고차항의 계수가 \(3\)이므로</p>
    $$
    3x^2+2ax+b=3(x+1)(x-3)=3x^2-6x-9.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 계수를 맞추고 극댓값을 구한다</div>
    $$
    a=-3,\qquad b=-9,\qquad f(x)=x^3-3x^2-9x+1,
    $$
    $$
    f(-1)=-1-3+9+1=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock09/common/q07": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 통분한다</div>
    $$
    \frac1{3a}+\frac1{2b}=\frac{2b+3a}{6ab}=\frac{3a+2b}{6ab}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 밑을 \(3\)으로 통일한다</div>
    $$
    3a+2b=\log_3 32=\log_3 2^5=5\log_3 2,
    $$
    $$
    ab=\log_9 2=\log_{3^2}2=\frac12\log_3 2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 대입한다</div>
    $$
    \frac{3a+2b}{6ab}=\frac{5\log_3 2}{6\times\frac12\log_3 2}=\frac{5\log_3 2}{3\log_3 2}=\frac53.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_mock09/common/q08": { answer: 4, html: String.raw`
  <div class="sol-box">\(f(1)\)을 아직 모르는 <b>상수</b>로 두고 적분한 뒤, \(x=1\)을 대입해 그 값을 결정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분한다</div>
    $$
    f(x)=\int\{6x^2-2f(1)x\}\,dx=2x^3-f(1)x^2+C.
    $$
    <p>\(f(0)=4\)이므로 \(C=4\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입해 \(f(1)\)을 구한다</div>
    $$
    f(1)=2-f(1)+4,\qquad 2f(1)=6,\qquad f(1)=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(2)\)를 구한다</div>
    $$
    f(x)=2x^3-3x^2+4,\qquad f(2)=16-12+4=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },
