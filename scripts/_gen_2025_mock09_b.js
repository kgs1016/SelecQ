"2025_mock09/common/q14": { answer: 5, html: String.raw`
  <div class="sol-box">조건 (가)의 기울기 \(3\)을 쓰면 \((\text{가로})^2+(\text{세로})^2\)이 가로의 \(10\)배가 되어, 조건 (나)가 가로 길이를 곧바로 준다. 마지막에 두 곡선이 직선 \(y=x\)에 대하여 대칭이라는 점이 \(x_n\)을 \(\mathrm B_n\)의 \(y\)좌표로 바꾼다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 점을 문자로 놓는다</div>
    <p>\(\mathrm A_n(a_n,\ 2^{a_n})\), \(\mathrm B_n(b_n,\ 2^{b_n})\ (a_n&lt;b_n)\)이라 하면 조건 (가)에서 두 점을 지나는 직선의 기울기가 \(3\)이므로</p>
    $$
    \frac{2^{b_n}-2^{a_n}}{b_n-a_n}=3,\qquad 2^{b_n}-2^{a_n}=3(b_n-a_n).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)에 대입해 가로 길이를 얻는다</div>
    $$
    (b_n-a_n)^2+\left(2^{b_n}-2^{a_n}\right)^2=10n^2
    $$
    <p>에 위 식을 넣으면 \((b_n-a_n)^2(1+9)=10n^2\), 즉 \((b_n-a_n)^2=n^2\)이다. \(a_n&lt;b_n\)이므로</p>
    $$
    b_n-a_n=n,\qquad a_n=b_n-n.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(2^{b_n}\)을 \(n\)으로 나타낸다</div>
    $$
    2^{b_n}-2^{b_n-n}=3n,\qquad 2^{b_n}\left(1-\frac{1}{2^{n}}\right)=3n,
    $$
    $$
    2^{b_n}=3n\times\frac{2^{n}}{2^{n}-1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 대칭성으로 \(x_n\)을 읽는다</div>
    <p>두 곡선 \(y=2^{x}\)과 \(y=\log_2x\)는 직선 \(y=x\)에 대하여 대칭이므로, \(\mathrm B_n\)을 \(y=x\)에 대하여 대칭이동한 점의 \(x\)좌표가 \(x_n\)이다. 즉 \(x_n\)은 \(\mathrm B_n\)의 \(y\)좌표와 같다.</p>
    $$
    x_n=2^{b_n}=3n\times\frac{2^{n}}{2^{n}-1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 세 항을 더한다</div>
    $$
    x_1=3\times\frac21=6,\qquad x_2=6\times\frac43=8,\qquad x_3=9\times\frac87=\frac{72}{7},
    $$
    $$
    x_1+x_2+x_3=6+8+\frac{72}{7}=\frac{170}{7}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock09/common/q15": { answer: 1, html: String.raw`
  <div class="sol-box">조건 (가)를 미분하면 \(xf(x)+xg(x)\)가 나오고, 조건 (나)를 넣으면 좌변이 \(\{xg(x)\}'\)로 묶인다. 그대로 적분하면 \(g\)가 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가)를 미분한다</div>
    $$
    xf(x)+xg(x)=12x^3+24x^2-6x,\qquad f(x)+g(x)=12x^2+24x-6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)를 넣어 하나의 도함수로 묶는다</div>
    <p>\(f(x)=xg'(x)\)이므로</p>
    $$
    xg'(x)+g(x)=12x^2+24x-6,\qquad \{xg(x)\}'=12x^2+24x-6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 적분하여 \(g\)를 구한다</div>
    $$
    xg(x)=\int(12x^2+24x-6)\,dx=4x^3+12x^2-6x+C.
    $$
    <p>\(g\)가 다항함수이므로 우변이 \(x\)로 나누어떨어져야 하고, 따라서 \(C=0\)이다.</p>
    $$
    g(x)=4x^2+12x-6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 정적분을 계산한다</div>
    $$
    \int_0^{3}g(x)\,dx=\left[\frac43x^3+6x^2-6x\right]_0^{3}=36+54-18=72.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_mock09/common/q16": { answer: 7, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 진수 조건을 먼저 적는다</div>
    $$
    x+2&gt;0,\qquad x-4&gt;0\ \Longrightarrow\ x&gt;4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 밑을 \(3\)으로 통일한다</div>
    <p>\(\log_{\frac13}(x-4)=-\log_3(x-4)\)이므로 주어진 식은</p>
    $$
    \log_3(x+2)+\log_3(x-4)=3,\qquad \log_3(x+2)(x-4)=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 풀어서 진수 조건에 맞는 해를 고른다</div>
    $$
    (x+2)(x-4)=3^3=27,\qquad x^2-2x-35=0,\qquad (x+5)(x-7)=0.
    $$
    <p>\(x&gt;4\)이므로 \(x=7\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{7}\)</div>
` },

"2025_mock09/common/q17": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int(6x^2+2x+1)\,dx=2x^3+x^2+x+C.
    $$
    <p>\(f(0)=1\)이므로 \(C=1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    f(1)=2+1+1+1=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{5}\)</div>
` },

"2025_mock09/common/q18": { answer: 29, html: String.raw`
  <div class="sol-box">두 합을 풀어 쓰면 계수가 정확히 \(1\)씩 어긋나 있다. 빼면 \(a_1+a_2+\cdots+a_{10}\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 합을 풀어 쓴다</div>
    $$
    \sum_{k=1}^{10}ka_k=a_1+2a_2+3a_3+\cdots+10a_{10}=36,
    $$
    $$
    \sum_{k=1}^{9}ka_{k+1}=a_2+2a_3+3a_4+\cdots+9a_{10}=7.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 뺀다</div>
    <p>같은 항끼리 계수를 빼면 모두 \(1\)이 되므로</p>
    $$
    \sum_{k=1}^{10}a_k=36-7=29.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{29}\)</div>
` },

"2025_mock09/common/q19": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극소 조건에서 \(a\)를 구한다</div>
    <p>\(f'(x)=3x^2+2ax-9\)이고 \(x=1\)에서 극소이므로</p>
    $$
    f'(1)=3+2a-9=0,\qquad a=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극대가 되는 \(x\)를 찾는다</div>
    $$
    f'(x)=3x^2+6x-9=3(x+3)(x-1)=0,\qquad x=-3\ \text{또는}\ x=1.
    $$
    <p>\(f'\)의 부호가 \(x=-3\)에서 양에서 음으로 바뀌므로 \(x=-3\)에서 극대이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 극댓값 조건에서 \(b\)를 구한다</div>
    $$
    f(-3)=-27+27+27+b=27+b=28,\qquad b=1,
    $$
    $$
    a+b=3+1=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{4}\)</div>
` },

"2025_mock09/common/q20": { answer: 15, html: String.raw`
  <div class="sol-box">\(y=f(t)\)는 가로선이므로, 실근의 개수는 곧 그래프와 가로선의 교점의 개수이다. 교점이 \(3\)개가 되는 높이는 그래프의 최솟값 \(-1\)과 \(x\)축 두 곳뿐이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그래프의 모양을 파악한다</div>
    <p>\(0\le x&lt;\pi\)에서 \(y=\sin x-1\)은 최댓값 \(0\)(\(x=\dfrac\pi2\)), 양 끝에서 \(-1\)에 가깝다. \(\pi\le x\le2\pi\)에서 \(y=-\sqrt2\sin x-1\)은 최댓값 \(\sqrt2-1\)(\(x=\dfrac32\pi\)), 양 끝에서 \(-1\)이다. 두 봉우리의 높이가 다른 산 모양이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 교점이 \(3\)개인 높이를 찾는다</div>
    <p>가로선을 위에서 아래로 내리면 교점의 개수는 \(1\to2\to\cdots\)로 바뀌는데, 정확히 \(3\)개가 되는 높이는 두 곳뿐이다. 앞쪽 봉우리의 꼭대기인 \(y=0\)과, 최솟값인 \(y=-1\)이다. 즉</p>
    $$
    f(t)=-1\quad\text{또는}\quad f(t)=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 각 경우의 \(t\)를 구한다</div>
    <p>ⅰ) \(f(t)=-1\)일 때 \(t=0,\ \pi,\ 2\pi\).</p>
    <p>ⅱ) \(f(t)=0\)일 때, \(0\le t&lt;\pi\)에서는 \(\sin t=1\)이므로 \(t=\dfrac\pi2\)이고, \(\pi\le t\le2\pi\)에서는</p>
    $$
    -\sqrt2\sin t-1=0,\qquad \sin t=-\frac{\sqrt2}{2},\qquad t=\frac54\pi\ \text{또는}\ t=\frac74\pi.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 합을 구한다</div>
    $$
    0+\pi+2\pi+\frac\pi2+\frac54\pi+\frac74\pi=\frac{13}{2}\pi.
    $$
    <p>따라서 \(p=2\), \(q=13\)이므로 \(p+q=15\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{15}\)</div>
` },
