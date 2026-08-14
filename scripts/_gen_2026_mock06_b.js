"2026_mock06/common/q14": { answer: 2, html: String.raw`
  <div class="sol-box">\(\mathrm P\)가 중점, \(\mathrm Q\)가 \(5:1\) 내분점이므로 \(\overline{\mathrm{PQ}}\)는 \(\overline{\mathrm{BC}}\)의 \(\dfrac13\)이다. 삼각형 \(\mathrm{APQ}\)의 사인법칙이 이 길이를 주면 나머지는 코사인법칙 두 번으로 풀린다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 사인법칙으로 \(\overline{\mathrm{PQ}}\)를 구한다</div>
    <p>삼각형 \(\mathrm{APQ}\)에서 \(\dfrac{\overline{\mathrm{PQ}}}{\sin(\angle\mathrm{QAP})}=\dfrac{\overline{\mathrm{AQ}}}{\sin(\angle\mathrm{APQ})}\)이고 \(\sin(\angle\mathrm{QAP}):\sin(\angle\mathrm{APQ})=\sqrt2:3\)이므로</p>
    $$
    \overline{\mathrm{PQ}}=\frac{\sqrt2}{3}\times3\sqrt2=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\overline{\mathrm{BC}}\)를 구한다</div>
    <p>\(\overline{\mathrm{BP}}=\dfrac12\overline{\mathrm{BC}}\), \(\overline{\mathrm{QC}}=\dfrac16\overline{\mathrm{BC}}\)이므로</p>
    $$
    \overline{\mathrm{BC}}=\frac12\overline{\mathrm{BC}}+2+\frac16\overline{\mathrm{BC}},\qquad \frac13\overline{\mathrm{BC}}=2,\qquad \overline{\mathrm{BC}}=6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 삼각형 \(\mathrm{ABQ}\)에서 \(\cos B\)를 구한다</div>
    <p>\(\overline{\mathrm{BQ}}=\dfrac56\times6=5\), \(\overline{\mathrm{AB}}=2\sqrt7\), \(\overline{\mathrm{AQ}}=3\sqrt2\)이므로</p>
    $$
    \cos(\angle\mathrm{ABQ})=\frac{28+25-18}{2\times2\sqrt7\times5}=\frac{35}{20\sqrt7}=\frac{\sqrt7}{4}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 삼각형 \(\mathrm{ABC}\)에서 \(\overline{\mathrm{AC}}\)를 구한다</div>
    <p>\(\angle\mathrm{ABQ}\)와 \(\angle\mathrm{ABC}\)는 같은 각이므로</p>
    $$
    \overline{\mathrm{AC}}^{\,2}=28+36-2\times2\sqrt7\times6\times\frac{\sqrt7}{4}=64-42=22,\qquad \overline{\mathrm{AC}}=\sqrt{22}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 외접원의 넓이를 구한다</div>
    $$
    \sin(\angle\mathrm{ABC})=\sqrt{1-\frac7{16}}=\frac34,\qquad
    R=\frac{\overline{\mathrm{AC}}}{2\sin(\angle\mathrm{ABC})}=\frac{\sqrt{22}}{\frac32}=\frac{2\sqrt{22}}{3},
    $$
    $$
    \pi R^2=\pi\times\frac{4\times22}{9}=\frac{88}{9}\pi.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock06/common/q16": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 진수 조건을 적는다</div>
    $$
    x+1&gt;0,\qquad x-1&gt;0\ \Longrightarrow\ x&gt;1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 밑을 \(5\)로 맞춘다</div>
    <p>\(\log_{25}9=\log_{5^2}3^2=\log_53\)이므로 주어진 식은</p>
    $$
    \log_5(x+1)(x-1)=\log_53,\qquad x^2-1=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 해를 고른다</div>
    <p>\(x^2=4\)이고 \(x&gt;1\)이므로 \(x=2\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{2}\)</div>
` },

"2026_mock06/common/q17": { answer: 6, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int\left(3x^2+4x\right)dx=x^3+2x^2+C.
    $$
    <p>\(f(0)=3\)이므로 \(C=3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    f(1)=1+2+3=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{6}\)</div>
` },

"2026_mock06/common/q18": { answer: 133, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합을 나눈다</div>
    $$
    \sum_{k=1}^{6}\left(k^2+2k\right)=\sum_{k=1}^{6}k^2+2\sum_{k=1}^{6}k.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 공식을 대입한다</div>
    $$
    \frac{6\times7\times13}{6}+2\times\frac{6\times7}{2}=91+42=133.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{133}\)</div>
` },

"2026_mock06/common/q19": { answer: 8, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극값을 갖는 \(x\)를 구한다</div>
    $$
    f'(x)=9x^2-18x=9x(x-2)=0,\qquad x=0\ \text{또는}\ x=2.
    $$
    <p>\(f'\)의 부호가 \(x=0\)에서 양에서 음으로, \(x=2\)에서 음에서 양으로 바뀌므로 \(x=0\)에서 극대, \(x=2\)에서 극소이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극댓값 조건에서 \(a\)를 구한다</div>
    <p>\(f(0)=a\)이므로 \(a=20\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 극솟값을 구한다</div>
    $$
    f(2)=3\times8-9\times4+20=24-36+20=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{8}\)</div>
` },

"2026_mock06/common/q20": { answer: 85, html: String.raw`
  <div class="sol-box">\(f(f(x))=f(x)\)는 \(f(x)\)가 방정식 \(f(t)=t\)의 해라는 뜻이다. 그 해가 \(0\)과 \(3\)이므로, 구할 것은 \(f(x)=0\) 또는 \(f(x)=3\)의 해가 된다. 그다음은 주기 \(4\)를 타고 등차수열 세 개로 갈라진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 방정식을 바꿔 놓는다</div>
    <p>\(0\le x&lt;4\)에서 \(f(x)=x\)는 \(-x^2+4x=x\), 즉 \(-x(x-3)=0\)이므로 해가 \(0\), \(3\)이다. 따라서 \(f(f(x))=f(x)\)는</p>
    $$
    f(x)\times\{f(x)-3\}=0
    $$
    <p>과 같은 방정식이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 한 주기 안의 해를 구한다</div>
    <p>\(0\le x&lt;4\)에서 \(f(x)=0\)이면 \(-x(x-4)=0\)에서 \(x=0\)이고, \(f(x)=3\)이면 \(-x^2+4x=3\), 즉 \((x-1)(x-3)=0\)에서 \(x=1\) 또는 \(x=3\)이다. 즉 한 주기 안의 해는 \(0\), \(1\), \(3\)이므로</p>
    $$
    a_1=0,\qquad a_2=1,\qquad a_3=3.
    $$
    <p>따라서 \(p=1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 세 등차수열로 나눈다</div>
    <p>\(f(x+4)=f(x)\)이므로 해도 \(4\)마다 되풀이된다. 세 수열 \(\{a_{3n-2}\}\), \(\{a_{3n-1}\}\), \(\{a_{3n}\}\)은 첫째항이 각각 \(0\), \(1\), \(3\)이고 공차가 모두 \(4\)인 등차수열이다. 따라서 \(q=4\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 세 항을 구해 더한다</div>
    $$
    a_{20}=a_{3\times7-1}=1+6\times4=25,\qquad
    a_{21}=a_{3\times7}=3+6\times4=27,
    $$
    $$
    a_{22}=a_{3\times8-2}=0+7\times4=28,\qquad
    a_{20}+a_{21}+a_{22}=80.
    $$
    <p>따라서 \(r=80\)이고</p>
    $$
    p+q+r=1+4+80=85.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{85}\)</div>
` },
