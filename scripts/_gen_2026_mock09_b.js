"2026_mock09/common/q13": { answer: 4, html: String.raw`
  <div class="sol-box">\(f(x)=(x+3)^2+3&gt;0\)이므로 분자 \(x^2\)이 \(0\)이 되는 곳은 \(x=0\)뿐이다. 극한이 존재하려면 분모가 아예 \(0\)이 되지 않거나, \(0\)이 되더라도 그 지점이 \(x=0\)이어야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분모를 인수분해한다</div>
    $$
    \{f(x)\}^2-k(x+2)f(x)=f(x)\{f(x)-k(x+2)\}.
    $$
    <p>\(f(x)&gt;0\)이므로 분모가 \(0\)이 되는 것은 \(f(x)=k(x+2)\)일 때뿐이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 분모가 \(0\)이 되지 않는 경우</div>
    <p>\(x^2+6x+12=kx+2k\), 즉 \(x^2+(6-k)x+12-2k=0\)이 실근을 갖지 않으면 된다.</p>
    $$
    D=(6-k)^2-4(12-2k)=k^2-4k-12=(k+2)(k-6)&lt;0,\qquad -2&lt;k&lt;6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 분모가 \(0\)이 되는 경우</div>
    <p>어떤 \(a\)에서 분모가 \(0\)이면 분자도 \(0\)이어야 하므로 \(a=0\)이고</p>
    $$
    f(0)\{f(0)-2k\}=0,\qquad f(0)=12=2k,\qquad k=6.
    $$
    <p>이때 분모는 \(f(x)\{f(x)-6x-12\}=\left(x^2+6x+12\right)x^2\)이므로</p>
    $$
    \lim_{x\to0}\frac{x^2}{\left(x^2+6x+12\right)x^2}=\frac1{12}
    $$
    <p>로 극한이 존재한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 정수의 개수를 센다</div>
    <p>합치면 \(-2&lt;k\le6\)이므로 정수 \(k\)는 \(-1,0,1,\dots,6\)의 \(8\)개이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock09/common/q14": { answer: 3, html: String.raw`
  <div class="sol-box">\(\mathrm A\)와 \(\mathrm B\)는 이웃한 두 가지 위의 같은 높이의 점이므로 \(\overline{\mathrm{AB}}\)는 정확히 주기 \(k\pi\)이다. 그러면 \(\overline{\mathrm{PA}}\)가 \(\dfrac{k\pi}{3}\)로 정해져 \(p\)가 바로 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(p\)를 구한다</div>
    <p>\(f(x)=\tan\dfrac xk\)의 주기는 \(k\pi\)이고 \(\mathrm A\), \(\mathrm B\)는 이웃한 두 가지 위의 같은 높이의 점이므로 \(\overline{\mathrm{AB}}=k\pi\)이다. \(\overline{\mathrm{AB}}=3\overline{\mathrm{PA}}\)이므로 \(\overline{\mathrm{PA}}=\dfrac{k\pi}{3}\)이고, \(\mathrm P(0,\ p)\)이므로 \(\mathrm A\)의 \(x\)좌표는 \(\dfrac{k\pi}{3}\)이다.</p>
    $$
    p=\tan\left(\frac1k\times\frac{k\pi}{3}\right)=\tan\frac\pi3=\sqrt3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 삼각형 \(\mathrm{OCB}\)를 두 조각으로 나눈다</div>
    <p>\(y=f(x)\)의 그래프가 \(x\)축과 만나는 점 중 원점이 아닌 점을 \(\mathrm D\)라 하면 \(\overline{\mathrm{OD}}=k\pi\)이다. 그래프가 \(\mathrm D\)에 대하여 대칭이므로 \(\mathrm D\)는 \(\overline{\mathrm{BC}}\)의 중점이고, 따라서 \(\overline{\mathrm{OD}}\)가 삼각형 \(\mathrm{OCB}\)를 두 조각으로 나눈다.</p>
    $$
    \frac12\times\overline{\mathrm{OD}}\times p+\frac12\times\overline{\mathrm{OD}}\times p=\overline{\mathrm{OD}}\times p=\sqrt3\,k\pi.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(k\)를 구해 더한다</div>
    $$
    \sqrt3\,k\pi=\frac{5\pi}{3},\qquad k=\frac{5}{3\sqrt3}=\frac{5\sqrt3}{9},
    $$
    $$
    k+p=\frac{5\sqrt3}{9}+\sqrt3=\frac{14\sqrt3}{9}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock09/common/q16": { answer: 8, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 차례로 대입한다</div>
    <p>\(a_1=1\)이고 \(a_{n+1}=na_n+2\)이므로</p>
    $$
    a_2=1\times1+2=3,\qquad a_3=2\times3+2=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{8}\)</div>
` },

"2026_mock09/common/q17": { answer: 17, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int\left(3x^2+2x+1\right)dx=x^3+x^2+x+C.
    $$
    <p>\(f(1)=1+1+1+C=6\)이므로 \(C=3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    f(2)=8+4+2+3=17.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{17}\)</div>
` },

"2026_mock09/common/q18": { answer: 30, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 조건을 \(a_1\), \(d\)로 쓴다</div>
    $$
    a_3=a_1+2d=6,
    $$
    $$
    2a_5-a_4=2(a_1+4d)-(a_1+3d)=a_1+5d=15.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 연립한다</div>
    <p>두 식을 빼면 \(3d=9\)에서 \(d=3\)이고, \(a_1+6=6\)에서 \(a_1=0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_{11}\)을 구한다</div>
    $$
    a_{11}=0+10\times3=30.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{30}\)</div>
` },

"2026_mock09/common/q19": { answer: 10, html: String.raw`
  <div class="sol-box">극솟값이 존재하려면 \(f'(x)=6x(x-a)\)의 두 근이 서로 달라야 하므로 \(a\ne0\)이다. \(a\)의 부호에 따라 극소가 되는 지점이 갈린다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 도함수를 구한다</div>
    $$
    f'(x)=6x^2-6ax=6x(x-a).
    $$
    <p>극솟값을 가지므로 \(a\ne0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a&lt;0\)인 경우</div>
    <p>이때 극소가 되는 곳은 \(x=0\)이므로 \(f(0)=5a=a\)에서 \(a=0\)이 되어 \(a&lt;0\)에 모순이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a&gt;0\)인 경우</div>
    <p>극소가 되는 곳은 \(x=a\)이므로</p>
    $$
    f(a)=2a^3-3a^3+5a=-a^3+5a=a,\qquad a^3-4a=a(a+2)(a-2)=0.
    $$
    <p>\(a&gt;0\)이므로 \(a=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 극댓값을 구한다</div>
    <p>\(f(x)=2x^3-6x^2+10\)이고 \(x=0\)에서 극대이므로</p>
    $$
    f(0)=10.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{10}\)</div>
` },

"2026_mock09/common/q20": { answer: 12, html: String.raw`
  <div class="sol-box">원에 내접하는 사각형에서 두 변의 연장선이 만나면, 생기는 두 삼각형이 닮음이다. 여기서는 \(\triangle\mathrm{BPC}\backsim\triangle\mathrm{DPA}\)가 그 관계다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 닮음에서 \(l\)을 \(k\)로 나타낸다</div>
    <p>\(\overline{\mathrm{PB}}=7k\), \(\overline{\mathrm{PC}}=5k\), \(\overline{\mathrm{AB}}=l\), \(\overline{\mathrm{CD}}=3l\)이라 하면</p>
    $$
    \overline{\mathrm{PD}}=\overline{\mathrm{PC}}+\overline{\mathrm{CD}}=5k+3l,\qquad
    \overline{\mathrm{PA}}=\overline{\mathrm{PB}}+\overline{\mathrm{AB}}=7k+l.
    $$
    <p>닮음에서 \(\overline{\mathrm{PB}}:\overline{\mathrm{PC}}=\overline{\mathrm{PD}}:\overline{\mathrm{PA}}\)이므로</p>
    $$
    7(7k+l)=5(5k+3l),\qquad 49k+7l=25k+15l,\qquad l=3k.
    $$
    <p>따라서 \(p=3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 닮음비를 구한다</div>
    $$
    \overline{\mathrm{PD}}=5k+9k=14k,\qquad \overline{\mathrm{PB}}:\overline{\mathrm{PD}}=7k:14k=1:2.
    $$
    <p>즉 닮음비가 \(1:2\)이므로 \(\overline{\mathrm{BC}}=\dfrac12\overline{\mathrm{AD}}\)이고 \(q=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 외접원의 반지름을 구한다</div>
    <p>\(\cos\theta=\dfrac67\)이므로 \(\sin\theta=\sqrt{1-\dfrac{36}{49}}=\dfrac{\sqrt{13}}{7}\)이고, \(\overline{\mathrm{BC}}=\dfrac12\times4\sqrt{13}=2\sqrt{13}\)이므로</p>
    $$
    R=\frac{\overline{\mathrm{BC}}}{2\sin\theta}=\frac{2\sqrt{13}}{2\times\frac{\sqrt{13}}{7}}=7.
    $$
    <p>따라서 \(r=7\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 더한다</div>
    $$
    p+q+r=3+2+7=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{12}\)</div>
` },
