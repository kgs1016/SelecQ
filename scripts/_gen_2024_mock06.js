"2024_mock06/common/q01": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 거듭제곱근을 지수로 고친다</div>
    $$
    \sqrt[3]{27}\times4^{-\frac12}=(3^3)^{\frac13}\times(2^2)^{-\frac12}
    =3\times2^{-1}=\frac32.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_mock06/common/q02": { answer: 4, html: String.raw`
  <div class="sol-box">주어진 극한은 미분계수의 정의 그대로이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미분계수로 바꾼다</div>
    $$
    \lim_{h\to0}\frac{f(3+h)-f(3)}{h}=f'(3).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 미분해서 대입한다</div>
    $$
    f'(x)=2x-2,\qquad f'(3)=2\times3-2=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_mock06/common/q03": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합의 기호를 분리한다</div>
    $$
    \sum_{k=1}^{10}(2a_k+3)=2\sum_{k=1}^{10}a_k+\sum_{k=1}^{10}3
    =2\sum_{k=1}^{10}a_k+3\times10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 값을 구한다</div>
    $$
    2\sum_{k=1}^{10}a_k+30=60,\qquad \sum_{k=1}^{10}a_k=15.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock06/common/q04": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 연속의 뜻을 쓴다</div>
    <p>\(f(x)\)가 실수 전체의 집합에서 연속이므로 \(x=1\)에서도 연속이다. 즉</p>
    $$
    \lim_{x\to1}f(x)=f(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 주어진 식에 넣는다</div>
    $$
    f(1)=4-f(1),\qquad 2f(1)=4,\qquad f(1)=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock06/common/q05": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 적용한다</div>
    $$
    g(x)=(x^3+1)f(x)\ \Longrightarrow\ g'(x)=3x^2f(x)+(x^3+1)f'(x).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입한다</div>
    $$
    g'(1)=3f(1)+2f'(1)=3\times2+2\times3=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_mock06/common/q06": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\cos\theta\)를 \(\sin\theta\)로 나타낸다</div>
    <p>\(\sin(-\theta)=-\sin\theta\)이므로 주어진 식은</p>
    $$
    -\sin\theta=\frac17\cos\theta,\qquad \cos\theta=-7\sin\theta.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 피타고라스 관계에 넣는다</div>
    $$
    \sin^2\theta+\cos^2\theta=\sin^2\theta+49\sin^2\theta=1,\qquad \sin^2\theta=\frac1{50}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부호를 정한다</div>
    <p>\(\cos\theta&lt;0\)이고 \(\sin\theta=-\dfrac17\cos\theta\)이므로 \(\sin\theta&gt;0\)이다. 따라서</p>
    $$
    \sin\theta=\frac{1}{5\sqrt2}=\frac{\sqrt2}{10}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_mock06/common/q07": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 점근선을 찾는다</div>
    <p>\(y=\log_2(x-a)\)의 그래프의 점근선은 직선 \(x=a\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 교점의 \(y\)좌표를 구한다</div>
    <p>직선 \(x=a\)가 두 곡선과 만나는 점은</p>
    $$
    \mathrm A\left(a,\ \log_2\frac a4\right),\qquad
    \mathrm B\left(a,\ \log_{\frac12}a\right).
    $$
    <p>\(a&gt;2\)이므로 \(\log_2\dfrac a4&gt;\log_2\dfrac24=-1\)이고 \(\log_{\frac12}a&lt;\log_{\frac12}2=-1\)이다. 따라서 점 \(\mathrm A\)가 위에 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 길이를 세워 \(a\)를 구한다</div>
    $$
    \overline{\mathrm{AB}}=\log_2\frac a4-\log_{\frac12}a=(\log_2 a-2)+\log_2 a=2\log_2 a-2,
    $$
    $$
    2\log_2 a-2=4,\qquad \log_2 a=3,\qquad a=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock06/common/q08": { answer: 3, html: String.raw`
  <div class="sol-box">두 곡선의 교점 개수는 \(k\)를 한쪽으로 몰아 "곡선과 가로선의 교점 개수"로 바꾸면 극값만 보면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(k\)를 분리한다</div>
    $$
    2x^2-1=x^3-x^2+k\ \Longleftrightarrow\ -x^3+3x^2-1=k.
    $$
    <p>따라서 \(f(x)=-x^3+3x^2-1\)의 그래프와 직선 \(y=k\)가 서로 다른 두 점에서 만나야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극값을 구한다</div>
    $$
    f'(x)=-3x^2+6x=-3x(x-2),\qquad f'(x)=0\ \Longleftrightarrow\ x=0\ \text{또는}\ x=2.
    $$
    <p>\(f\)는 \(x=0\)에서 극솟값 \(f(0)=-1\), \(x=2\)에서 극댓값 \(f(2)=3\)을 갖는다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 교점이 두 개일 \(k\)를 고른다</div>
    <p>삼차함수의 그래프와 가로선이 두 점에서 만나는 것은 그 가로선이 극댓값이나 극솟값을 지날 때뿐이므로 \(k=3\) 또는 \(k=-1\)이고, \(k\)가 양수이므로</p>
    $$
    k=3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock06/common/q09": { answer: 1, html: String.raw`
  <div class="sol-box">부분합이 주어졌으므로 \(S_n-S_{n-1}\)로 일반항을 뽑고, 부분분수로 갈라 망원합을 만든다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항을 구한다</div>
    <p>\(n=1\)일 때 \(\dfrac1{a_1}=3\)이므로 \(a_1=\dfrac13\)이다. \(n\ge2\)일 때</p>
    $$
    \frac{1}{(2n-1)a_n}=(n^2+2n)-\{(n-1)^2+2(n-1)\}=2n+1
    $$
    <p>이므로 \((2n-1)a_n=\dfrac1{2n+1}\), 즉</p>
    $$
    a_n=\frac{1}{(2n-1)(2n+1)}.
    $$
    <p>\(n=1\)일 때도 \(\dfrac1{1\times3}=\dfrac13\)으로 맞으므로 모든 \(n\)에서 성립한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부분분수로 갈라 더한다</div>
    $$
    \sum_{n=1}^{10}a_n=\frac12\sum_{n=1}^{10}\left(\frac1{2n-1}-\frac1{2n+1}\right)
    =\frac12\left(1-\frac1{21}\right)=\frac12\times\frac{20}{21}=\frac{10}{21}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_mock06/common/q10": { answer: 2, html: String.raw`
  <div class="sol-box">\(A\)는 \(x\)축 위쪽, \(B\)는 아래쪽 넓이이므로 두 넓이의 <b>차</b>는 부호를 그대로 살린 정적분 하나로 합쳐진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 넓이를 정적분으로 쓴다</div>
    <p>\(f(x)=0\)에서 \(x=0,\ 2,\ 3\)이므로 두 점 \(\mathrm P\), \(\mathrm Q\)의 좌표는 \((2,0)\), \((3,0)\)이다.</p>
    $$
    (A\text{의 넓이})=\int_0^2 f(x)\,dx,\qquad
    (B\text{의 넓이})=\int_2^3\{-f(x)\}\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 차를 하나의 정적분으로 합친다</div>
    $$
    (A\text{의 넓이})-(B\text{의 넓이})=\int_0^2 f(x)\,dx+\int_2^3 f(x)\,dx=\int_0^3 f(x)\,dx=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 계산해 \(k\)를 구한다</div>
    $$
    \int_0^3 k(x^3-5x^2+6x)\,dx=k\left[\frac14x^4-\frac53x^3+3x^2\right]_0^3
    =k\left(\frac{81}{4}-45+27\right)=\frac94k,
    $$
    $$
    \frac94k=3,\qquad k=\frac43.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },
