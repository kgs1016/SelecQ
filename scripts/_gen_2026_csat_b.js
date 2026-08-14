"2026_csat/common/q12": { answer: 2, html: String.raw`
  <div class="sol-box">두 조건의 좌변은 첨자가 정확히 \(3\)씩 밀린 같은 꼴이므로, 나누면 \(r^3\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 조건을 정리한다</div>
    $$
    2\left(a_1+a_4+a_7\right)=2a_1\left(1+r^3+r^6\right)=6,\qquad a_1\left(1+r^3+r^6\right)=3,
    $$
    $$
    a_4+a_7+a_{10}=a_1r^3\left(1+r^3+r^6\right)=6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 나누어 \(r\)를 구한다</div>
    <p>뒤 식을 앞 식으로 나누면 \(r^3=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_1\)과 \(a_{10}\)을 구한다</div>
    $$
    a_1(1+2+4)=3,\qquad a_1=\frac37,
    $$
    $$
    a_{10}=a_1r^9=\frac37\times2^3=\frac{24}{7}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_csat/common/q13": { answer: 5, html: String.raw`
  <div class="sol-box">두 접선과 \(y\)축이 만드는 삼각형이므로, \(y\)축 위의 두 절편과 두 직선의 교점만 구하면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접선 \(l\)을 구한다</div>
    <p>\(f'(x)=2x-4\)이므로 \(f'(1)=-2\)이고, 점 \((1,\ -6)\)을 지나므로</p>
    $$
    l:\ y=-2(x-1)-6=-2x-4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 접선 \(m\)을 구한다</div>
    <p>\(g(x)=\left(x^3-2x\right)f(x)\)이므로 곱의 미분법에 의하여</p>
    $$
    g'(x)=\left(3x^2-2\right)f(x)+\left(x^3-2x\right)f'(x),
    $$
    $$
    g'(1)=1\times(-6)+(-1)\times(-2)=-4.
    $$
    <p>\(g(1)=(1-2)\times(-6)=6\)이므로</p>
    $$
    m:\ y=-4(x-1)+6=-4x+10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 넓이를 구한다</div>
    <p>두 직선의 교점은 \(-2x-4=-4x+10\)에서 \(x=7\)이고, \(y\)절편은 각각 \(-4\), \(10\)이므로 밑변의 길이가 \(10-(-4)=14\), 높이가 \(7\)이다.</p>
    $$
    \frac12\times14\times7=49.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_csat/common/q14": { answer: 4, html: String.raw`
  <div class="sol-box">\(\overline{\mathrm{AD}}=\overline{\mathrm{AE}}=\overline{\mathrm{AG}}=2\)라는 것이 열쇠다. 작은 원의 반지름이 모두 같으므로 코사인법칙을 두 번 쓰면 \(\overline{\mathrm{GE}}\)가 나오고, 그다음 큰 원에서 사인법칙을 두 번 쓰면 \(\overline{\mathrm{GH}}\)가 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sin(\angle\mathrm{BAC})\)를 구한다</div>
    <p>직각삼각형 \(\mathrm{ABC}\)에서 \(\overline{\mathrm{AC}}=\sqrt{3^2+4^2}=5\)이므로, \(\theta_1=\angle\mathrm{BAC}\)라 하면</p>
    $$
    \sin\theta_1=\frac{\overline{\mathrm{BC}}}{\overline{\mathrm{AC}}}=\frac45.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 삼각형 \(\mathrm{ACG}\)에서 \(\cos(\angle\mathrm{CAG})\)를 구한다</div>
    <p>\(\overline{\mathrm{AD}}=\dfrac23\times3=2\)이고 \(\mathrm E\), \(\mathrm G\)도 원 위의 점이므로 \(\overline{\mathrm{AE}}=\overline{\mathrm{AG}}=2\)이다. \(\theta_2=\angle\mathrm{CAG}\)라 하면</p>
    $$
    \cos\theta_2=\frac{2^2+5^2-\left(2\sqrt6\right)^2}{2\times2\times5}=\frac{4+25-24}{20}=\frac14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\overline{\mathrm{GE}}\)를 구한다</div>
    <p>삼각형 \(\mathrm{AEG}\)는 두 변이 \(2\)이고 낀각이 \(\theta_2\)이므로</p>
    $$
    \overline{\mathrm{GE}}^{\,2}=4+4-2\times2\times2\times\frac14=6,\qquad \overline{\mathrm{GE}}=\sqrt6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 큰 원의 반지름을 구한다</div>
    <p>\(\theta_3=\angle\mathrm{ECG}\)라 하면 삼각형 \(\mathrm{CGE}\)에서</p>
    $$
    \cos\theta_3=\frac{\left(2\sqrt6\right)^2+3^2-6}{2\times2\sqrt6\times3}=\frac{27}{12\sqrt6}=\frac{3\sqrt6}{8},
    $$
    $$
    \sin\theta_3=\sqrt{1-\frac{54}{64}}=\frac{\sqrt{10}}{8}.
    $$
    <p>세 점 \(\mathrm C\), \(\mathrm E\), \(\mathrm G\)를 지나는 원의 반지름을 \(R\)라 하면 사인법칙에 의하여</p>
    $$
    2R=\frac{\overline{\mathrm{GE}}}{\sin\theta_3}=\frac{\sqrt6}{\frac{\sqrt{10}}{8}}=\frac{8\sqrt{15}}{5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(\overline{\mathrm{GH}}\)를 구한다</div>
    <p>같은 원 위의 삼각형 \(\mathrm{CHG}\)에서 \(\angle\mathrm{HCG}=\theta_1\)이므로</p>
    $$
    \overline{\mathrm{GH}}=2R\sin\theta_1=\frac{8\sqrt{15}}{5}\times\frac45=\frac{32\sqrt{15}}{25}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_csat/common/q15": { answer: 4, html: String.raw`
  <div class="sol-box">\(h'(x)=g(x)-f(x)\)이므로 극값의 개수는 두 그래프가 <b>교차하며 위아래가 바뀌는</b> 횟수이다. \(x\ge0\) 쪽은 \(a\)와 무관하게 \(x=1\)에서 한 번 바뀌므로, \(x&lt;-1\)에서 더 바뀌지 않도록 \(a\)를 잡으면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x\ge0\)에서 부호를 살핀다</div>
    <p>\(0\le x&lt;1\)에서 \(g(x)-f(x)=-\left(x^2-x\right)&gt;0\)이고, \(x\ge1\)에서는 두 그래프가 \((1,\ 0)\)을 함께 지난다. \(f'(1)=1\)이므로 \(a\le1\)이면 \(x&gt;1\)에서 \(f(x)&gt;g(x)\)가 되어 \(x=1\)에서 부호가 한 번 바뀐다.</p>
    <p>\(a&gt;1\)이면 \(x&gt;1\)에서 두 그래프가 다시 만나는 점 \(b\)가 생기지만, \(x=1\)에서는 부호가 바뀌지 않고 \(x=b\)에서 한 번 바뀐다. 어느 쪽이든 \(x&gt;0\)에서 극값은 하나다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x&lt;-1\)에서 부호가 바뀌지 않을 조건을 찾는다</div>
    <p>\(-1\le x&lt;0\)에서 \(g(x)-f(x)=x^2\ge0\)이므로 부호가 바뀌지 않는다. \(x&lt;-1\)에서는</p>
    $$
    g(x)-f(x)=(ax+a)+x^2
    $$
    <p>이므로, 이것이 부호를 바꾸지 않으려면 직선 \(y=ax+a\)가 곡선 \(y=-x^2\)보다 아래로 내려가지 않아야 한다. 즉 두 그래프가 접할 때 \(a\)가 최대가 된다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 접할 때의 \(a\)를 구한다</div>
    <p>접점을 \(\left(t,\ -t^2\right)\)라 하면 접선의 기울기가 \(-2t\)이므로 접선은 \(y+t^2=-2t(x-t)\)이고, 이 직선이 \((-1,\ 0)\)을 지나므로</p>
    $$
    t^2=-2t(-1-t),\qquad t(t+2)=0.
    $$
    <p>\(t&lt;-1\)이므로 \(t=-2\)이고, 기울기는 \(a=-2t=4\)이다. 따라서 \(k=4\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(h(3)\)을 구한다</div>
    <p>\(a=4\)일 때 \(x\ge1\)에서 \(g(x)=4x-4\)이므로</p>
    $$
    h(3)=\int_0^{1}\left(-t^2+t\right)dt+\int_1^{3}\left(-t^2+5t-4\right)dt=\frac16+\frac{10}{3}=\frac72.
    $$
    $$
    k+h(3)=4+\frac72=\frac{15}{2}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_csat/common/q16": { answer: 9, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 차례로 대입한다</div>
    <p>\(a_1=1\)이고 \(a_{n+1}=n^2a_n+1\)이므로</p>
    $$
    a_2=1^2\times1+1=2,\qquad a_3=2^2\times2+1=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{9}\)</div>
` },

"2026_csat/common/q17": { answer: 16, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부정적분을 구한다</div>
    $$
    F(x)=\int\left(4x^3-2x\right)dx=x^4-x^2+C.
    $$
    <p>\(F(0)=4\)이므로 \(C=4\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    F(2)=16-4+4=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{16}\)</div>
` },

"2026_csat/common/q18": { answer: 12, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sin(\angle\mathrm{BAC})\)를 구한다</div>
    <p>삼각형의 내각이므로 \(\sin(\angle\mathrm{BAC})&gt;0\)이고</p>
    $$
    \sin(\angle\mathrm{BAC})=\sqrt{1-\left(-\frac35\right)^2}=\frac45.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 넓이를 구한다</div>
    $$
    \frac12\times5\times6\times\frac45=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{12}\)</div>
` },

"2026_csat/common/q19": { answer: 15, html: String.raw`
  <div class="sol-box">\(|f(x)|\le k\)가 주어진 구간에서 성립할 \(k\)의 최솟값은 그 구간에서 \(|f|\)의 최댓값이다. 극값과 양 끝값만 비교하면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극값을 구한다</div>
    $$
    f'(x)=6x^2+6x-12=6(x+2)(x-1)=0,\qquad x=-2\ \text{또는}\ x=1.
    $$
    <p>\(x=-2\)에서 극대이고 \(f(-2)=12\), \(x=1\)에서 극소이고 \(f(1)=-15\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 끝값과 비교한다</div>
    <p>\(f(2)=16+12-24-8=-4\)이므로 \(-2\le x\le2\)에서</p>
    $$
    -15\le f(x)\le12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(k\)의 최솟값을 구한다</div>
    <p>\(|f(x)|\)의 최댓값이 \(15\)이므로 \(k\)의 최솟값은 \(15\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{15}\)</div>
` },

"2026_csat/common/q20": { answer: 130, html: String.raw`
  <div class="sol-box">\(a_{n+1}=S_{n+1}-S_n\)으로 점화식을 만들면 \(2a_n+a_{n+1}=n\)이라는 짧은 식이 나온다. 마지막 합은 이 꼴이 그대로 보이도록 항을 묶는 것이 핵심이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> (가)를 구한다</div>
    <p>주어진 식에서 \(n\) 대신 \(n+1\)을 넣은 것과의 차를 만들면</p>
    $$
    a_{n+1}=\frac23\left(a_{n+1}-a_n\right)+\frac16\left\{(n+1)^2-n^2\right\}-\frac16
    =\frac23\left(a_{n+1}-a_n\right)+\frac13n.
    $$
    <p>따라서 \(f(n)=\dfrac13n\)이고, 정리하면</p>
    $$
    2a_n+a_{n+1}=3\times\frac13n=n.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> (나)를 구한다</div>
    <p>주어진 식에 \(n=2\)를 넣으면</p>
    $$
    a_1+a_2=\frac23a_2+\frac16\times4-\frac16\times2+10,\qquad a_1+\frac13a_2=\frac{31}{3}.
    $$
    <p>\(a_1=7\)이므로 \(\dfrac13a_2=\dfrac{31}{3}-7=\dfrac{10}{3}\), 즉 \(p=a_2=10\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> (다)를 구한다</div>
    <p>\(a_3\)부터 \(a_{12}\)까지를 \(\left(2a_{2k+1}+a_{2k+2}\right)\) 꼴로 다섯 덩어리로 묶으면 \(n=2k+1\)일 때의 점화식이 그대로 쓰인다.</p>
    $$
    \sum_{k=1}^{12}a_k+\sum_{k=1}^{5}a_{2k+1}=a_1+a_2+\sum_{k=1}^{5}(2k+1)=7+10+35=52.
    $$
    <p>따라서 \(q=52\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 값을 구한다</div>
    $$
    \frac{p\times q}{f(12)}=\frac{10\times52}{4}=130.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{130}\)</div>
` },
