"2026_mock09/calculus/q23": { answer: 1, html: String.raw`
  <div class="sol-box">\(e^{x}-e=f(x)-f(1)\) 꼴이므로 이 극한은 \(f(x)=e^{x}\)의 \(x=1\)에서의 미분계수이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미분계수의 정의로 본다</div>
    $$
    \lim_{x\to1}\frac{e^{x}-e}{x-1}=\lim_{x\to1}\frac{f(x)-f(1)}{x-1}=f'(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 값을 구한다</div>
    <p>\(f'(x)=e^{x}\)이므로 \(f'(1)=e\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock09/calculus/q24": { answer: 4, html: String.raw`
  <div class="sol-box">\(\cos\left(x-\dfrac\pi4\right)\)이 \(\sin\left(x-\dfrac\pi4\right)\)의 도함수이므로, 지수의 내용을 통째로 새 문자로 놓으면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 치환한다</div>
    <p>\(\sin\left(x-\dfrac\pi4\right)=t\)로 놓으면 \(\dfrac{dt}{dx}=\cos\left(x-\dfrac\pi4\right)\)이고, \(x=\dfrac\pi4\)일 때 \(t=0\), \(x=\dfrac{3\pi}{4}\)일 때 \(t=1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 계산한다</div>
    $$
    \int_{\frac\pi4}^{\frac{3\pi}{4}}\cos\left(x-\frac\pi4\right)e^{\sin\left(x-\frac\pi4\right)}dx=\int_0^{1}e^{t}\,dt=\Big[e^{t}\Big]_0^{1}=e-1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock09/calculus/q25": { answer: 2, html: String.raw`
  <div class="sol-box">분모를 유리화하면 \(3n\)이 되어 전체가 \(\dfrac{an^{b}\times(\text{2차})}{3n}\) 꼴이 된다. 그러면 \(b\)의 값에 따라 발산·수렴이 갈린다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분모를 유리화한다</div>
    $$
    \left(\sqrt{n^4+4n}-\sqrt{n^4+n}\right)\left(\sqrt{n^4+4n}+\sqrt{n^4+n}\right)=3n
    $$
    <p>이므로 주어진 극한은</p>
    $$
    \lim_{n\to\infty}\frac{an^{b}\left(\sqrt{n^4+4n}+\sqrt{n^4+n}\right)}{3n}=6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 차수를 맞춘다</div>
    <p>괄호 안은 \(n^2\) 규모이므로 분수 전체는 \(n^{\,b+1}\) 규모이다. \(b&gt;-1\)이면 발산하고, \(b&lt;-1\)이면 \(0\)으로 가므로 \(b=-1\)이어야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구한다</div>
    $$
    \lim_{n\to\infty}\frac{a\left(\sqrt{n^4+4n}+\sqrt{n^4+n}\right)}{3n^2}
    =\lim_{n\to\infty}\frac{a\left(\sqrt{1+\frac4{n^3}}+\sqrt{1+\frac1{n^3}}\right)}{3}=\frac{2a}{3}=6,
    $$
    <p>따라서 \(a=9\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 더한다</div>
    $$
    a+b=9+(-1)=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock09/calculus/q26": { answer: 1, html: String.raw`
  <div class="sol-box">사다리꼴에서 곡선 아래 부분을 빼는 쪽이 계산이 짧다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 교점을 구한다</div>
    <p>\(\dfrac3{x-1}=1\)에서 \(x=4\)이므로 \(\mathrm A(4,\ 1)\), \(\dfrac3{x-1}=3\)에서 \(x=2\)이므로 \(\mathrm B(2,\ 3)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사다리꼴의 넓이를 구한다</div>
    <p>두 점에서 \(x\)축에 내린 수선의 발을 각각 \(\mathrm C\), \(\mathrm D\)라 하면 사각형 \(\mathrm{ABDC}\)는 윗변 \(3\), 아랫변 \(1\), 높이 \(2\)인 사다리꼴이므로</p>
    $$
    \frac12\times(1+3)\times2=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 곡선 아래 부분을 뺀다</div>
    $$
    4-\int_2^{4}\frac3{x-1}\,dx=4-\Big[3\ln|x-1|\Big]_2^{4}=4-3\ln3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock09/calculus/q27": { answer: 1, html: String.raw`
  <div class="sol-box">\(g\)가 \(f(x^3+x)\)의 역함수이므로 \(g\left(f(x^3+x)\right)=x\)가 항등식이다. 여기에 \(x=1\)을 넣으면 \(g(1)\)이, 양변을 미분한 뒤 \(x=1\)을 넣으면 \(g'(1)\)에 대한 이차방정식이 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(g(1)\)을 구한다</div>
    <p>\(x^3+x=2\)에서 \(x^3+x-2=(x-1)\left(x^2+x+2\right)=0\)이고 \(x^2+x+2=\left(x+\dfrac12\right)^2+\dfrac74&gt;0\)이므로 \(x=1\)이다. 항등식 \(g\left(f(x^3+x)\right)=x\)에 \(x=1\)을 넣으면 \(g(f(2))=1\)이고 \(f(2)=1\)이므로</p>
    $$
    g(1)=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 항등식을 미분한다</div>
    $$
    g'\left(f(x^3+x)\right)\times f'(x^3+x)\times\left(3x^2+1\right)=1.
    $$
    <p>\(x=1\)을 넣으면 \(g'(1)\times f'(2)\times4=1\)이므로</p>
    $$
    4g'(1)f'(2)=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(g'(1)\)에 대한 방정식을 푼다</div>
    <p>\(f'(2)=8g'(1)-1\)을 대입하면</p>
    $$
    4g'(1)\{8g'(1)-1\}=1,\qquad 32\{g'(1)\}^2-4g'(1)-1=0,
    $$
    $$
    \{4g'(1)-1\}\{8g'(1)+1\}=0,\qquad g'(1)=\frac14\ \text{또는}\ g'(1)=-\frac18.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 조건 \(f'(x)&gt;0\)으로 고른다</div>
    <p>\(g'(1)=-\dfrac18\)이면 \(f'(2)=-2&lt;0\)이 되어 조건에 어긋난다. \(g'(1)=\dfrac14\)이면 \(f'(2)=1&gt;0\)이므로 이쪽이다.</p>
    $$
    g(1)+g'(1)=1+\frac14=\frac54.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },
