"2025_mock06/common/q15": { answer: 2, html: String.raw`
  <div class="sol-box">\(h_1\), \(h_2\)는 절댓값과 같은 식을 더하거나 뺀 꼴이라 <b>둘 다 항상 \(0\) 이상</b>이고, 어떤 구간에서는 아예 \(0\)이다. 그러면 조건 (나)는 "\(g\)의 부호"만 따지는 문제로 바뀐다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(h_1\), \(h_2\)를 구간별로 정리한다</div>
    $$
    h_1(t)=\begin{cases}2t(t-1) & (t\le0\ \text{또는}\ t\ge1)\\[2pt] 0 & (0&lt;t&lt;1)\end{cases}
    $$
    $$
    h_2(t)=\begin{cases}0 & (t\le-2\ \text{또는}\ t\ge1)\\[2pt] -2(t-1)(t+2) & (-2&lt;t&lt;1)\end{cases}
    $$
    <p>둘 다 항상 \(0\) 이상이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)를 \(g\)의 부호로 바꾼다</div>
    <p>\(\displaystyle\int_p^{x}h(t)\,dt\ge0\)이 모든 \(x\)에서 성립하려면 \(t&gt;p\)에서 \(h(t)\ge0\), \(t&lt;p\)에서 \(h(t)\le0\)이어야 한다.</p>
    <p>첫째 식(\(p=0\))에서 \(h_1&gt;0\)인 곳은 \(t&lt;0\)과 \(t&gt;1\)이므로 \(t&lt;0\)에서 \(g(t)\le0\), \(t&gt;1\)에서 \(g(t)\ge0\)이어야 한다. \(g(t)=2t-k\)는 \(t=\dfrac k2\)에서 부호가 바뀌므로</p>
    $$
    0\le\frac k2\le1,\qquad 0\le k\le2.
    $$
    <p>둘째 식(\(p=3\))에서 \(h_2&gt;0\)인 곳은 \(-2&lt;t&lt;1\)이고 이는 모두 \(3\)보다 작으므로 그 구간에서 \(g(t)\le0\)이어야 한다.</p>
    $$
    \frac k2\ge1,\qquad k\ge2.
    $$
    <p>따라서 \(k=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건 (가)로 \(f\)의 계수를 줄인다</div>
    <p>\(f(x)=x^3+ax^2+bx+c\)라 하자. \(g\)가 \(x=2\)에서 미분가능하므로</p>
    $$
    g'(2)=f'(2)=2\ \Longrightarrow\ 12+4a+b=2,\qquad b=-4a-10,
    $$
    $$
    g(2)=f(2)=2\ \Longrightarrow\ 8+4a+2b+c=2,\qquad c=4a+14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(g\)가 증가할 조건에서 \(a\)의 범위를 얻는다</div>
    <p>\(g\)가 증가하므로 \(x\ge2\)에서 \(f'(x)\ge0\)이어야 한다.</p>
    $$
    f'(x)=3x^2+2ax+b=3\left(x+\frac a3\right)^2+b-\frac{a^2}{3}.
    $$
    <p>ⅰ) \(-\dfrac a3&lt;2\), 즉 \(a&gt;-6\)이면 \(x\ge2\)에서 \(f'\)가 증가하고 \(f'(2)=2&gt;0\)이므로 성립한다.</p>
    <p>ⅱ) \(a\le-6\)이면 꼭짓점이 \(x\ge2\)에 있으므로 최솟값이 \(0\) 이상이어야 한다.</p>
    $$
    b-\frac{a^2}{3}\ge0\ \Longleftrightarrow\ a^2-3b=a^2+12a+30\le0\ \Longleftrightarrow\ (a+6)^2\le6,
    $$
    <p>즉 \(-6-\sqrt6\le a\le-6\)이다. 두 경우를 합치면 \(a\ge-6-\sqrt6\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(g(3)\)의 최솟값을 구한다</div>
    $$
    g(3)=f(3)=27+9a-3(4a+10)+4a+14=a+11\ge5-\sqrt6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock06/prob_stat/q29": { answer: 6, html: String.raw`
  <div class="sol-box">\(p=q\)를 조합으로 세우면 \(x\)에 대한 일차방정식으로 정리되어 흰 공의 개수가 바로 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 확률을 조합으로 쓴다</div>
    <p>흰 공의 개수를 \(x\)라 하면 검은 공은 \(40-x\)개이므로</p>
    $$
    p=\frac{{}_x\mathrm C_2}{{}_{40}\mathrm C_2},\qquad
    q=\frac{{}_x\mathrm C_1\times{}_{40-x}\mathrm C_1}{{}_{40}\mathrm C_2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(p=q\)에서 \(x\)를 구한다</div>
    $$
    \frac{x(x-1)}{2}=x(40-x).
    $$
    <p>\(p&gt;0\)이므로 \(x\ne0\)이고, 양변을 \(x\)로 나누면</p>
    $$
    x-1=80-2x,\qquad 3x=81,\qquad x=27.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(r\)를 구한다</div>
    <p>검은 공은 \(40-27=13\)개이므로</p>
    $$
    r=\frac{{}_{13}\mathrm C_2}{{}_{40}\mathrm C_2}=\frac{13\times12}{40\times39}=\frac1{10},
    $$
    $$
    60r=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{6}\)</div>
` },

"2025_mock06/calculus/q28": { answer: 4, html: String.raw`
  <div class="sol-box">역함수의 미분법은 \(g'(f(x))f'(x)=1\)이다. 두 지점이 각각 어느 조각에 놓이는지만 가리면 \(f'\) 값을 바로 대입할 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 조각과 이어붙인 값을 확인한다</div>
    <p>\(h_1(x)=(x-a-2)^2e^{x}\), \(h_2(x)=e^{2a}(x-a)+4e^{a}\)라 하면</p>
    $$
    h_1'(x)=(x-a)(x-a-2)e^{x},\qquad h_2'(x)=e^{2a},
    $$
    <p>이고 \(h_1(a)=h_2(a)=4e^{a}\)이므로 \(f(a)=4e^{a}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 불연속점에서 \(e^{a}\)를 구한다</div>
    <p>\(g(t)\)는 \(f(x)=t\)를 만족시키는 \(x\)의 최솟값이므로, 왼쪽 조각의 값이 끊기는 \(t=4e^{a}\)에서 불연속이다.</p>
    $$
    4e^{a}=12,\qquad e^{a}=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 지점이 어느 조각에 놓이는지 가린다</div>
    <p>\(f(a+2)=h_1(a+2)=0&lt;4e^{a}\)이므로 이 값은 \(h_2\) 쪽이고, \(f(a+6)=h_1(a+6)=16e^{a+6}&gt;4e^{a}\)이므로 \(h_1\) 쪽이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 역함수의 미분법을 쓴다</div>
    <p>\(h_2'\)는 상수 \(e^{2a}\)이므로</p>
    $$
    g'(f(a+2))=\frac{1}{h_2'}=\frac{1}{e^{2a}}.
    $$
    <p>또 \(g(f(a+6))=a+6\)이므로</p>
    $$
    g'(f(a+6))=\frac{1}{h_1'(a+6)}=\frac{1}{6\times4\times e^{a+6}}=\frac{1}{24e^{a+6}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 비를 계산한다</div>
    $$
    \frac{g'(f(a+2))}{g'(f(a+6))}=\frac{24e^{a+6}}{e^{2a}}=\frac{24e^{6}}{e^{a}}=\frac{24e^{6}}{3}=8e^{6}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },
