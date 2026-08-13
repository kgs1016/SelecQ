"2025_mock06/common/q09": { answer: 3, html: String.raw`
  <div class="sol-box">\(f\)가 \(x=0\)에서만 불연속이므로, \((f(x)+a)^2\)이 연속이려면 \(x=0\)에서의 좌극한과 우극한이 같아야 한다. 제곱이므로 <b>부호가 반대여도</b> 값이 같아질 수 있다는 점이 핵심이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x=0\)에서의 두 극한을 쓴다</div>
    $$
    \lim_{x\to0-}\{f(x)+a\}^2=\left(-\frac12+a\right)^2,\qquad
    \{f(0)+a\}^2=(3+a)^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 값을 같게 놓는다</div>
    $$
    \left(a-\frac12\right)^2=(a+3)^2,
    $$
    $$
    a^2-a+\frac14=a^2+6a+9,\qquad 7a=-\frac{35}{4},\qquad a=-\frac54.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock06/common/q10": { answer: 5, html: String.raw`
  <div class="sol-box">두 조건이 각각 변의 <b>비</b>를 주므로, 세 변을 한 문자 \(k\)로 놓으면 코사인법칙 한 번으로 각이 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 세 변의 비를 구한다</div>
    <p>\(\overline{\mathrm{BC}}=a\), \(\overline{\mathrm{CA}}=b\), \(\overline{\mathrm{AB}}=c\), 외접원의 반지름을 \(R\)라 하자. 외접원의 넓이가 \(9\pi\)이므로 \(R=3\)이다.</p>
    <p>사인법칙에서 \(\sin A=\dfrac{a}{2R}\), \(\sin B=\dfrac{b}{2R}\)이므로 조건 (가) \(3\sin A=2\sin B\)는</p>
    $$
    3a=2b,\qquad b=\frac32a.
    $$
    <p>조건 (나) \(\cos B=\cos C\)에서 \(B=C\), 즉 \(b=c\)이다. 따라서 \(a=2k\), \(b=c=3k\)로 놓을 수 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\sin A\)를 구한다</div>
    $$
    \cos A=\frac{b^2+c^2-a^2}{2bc}=\frac{9k^2+9k^2-4k^2}{2\times9k^2}=\frac{7}{9},
    $$
    $$
    \sin A=\sqrt{1-\frac{49}{81}}=\frac{4\sqrt2}{9}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 실제 길이를 구해 넓이를 계산한다</div>
    $$
    a=2R\sin A=6\times\frac{4\sqrt2}{9}=\frac{8\sqrt2}{3},\qquad b=c=\frac32a=4\sqrt2,
    $$
    $$
    \frac12bc\sin A=\frac12\times4\sqrt2\times4\sqrt2\times\frac{4\sqrt2}{9}=\frac{64\sqrt2}{9}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock06/common/q11": { answer: 5, html: String.raw`
  <div class="sol-box">주어진 극한이 \(\dfrac00\) 꼴이 되어야 하므로 \(f(a)=1\)이고, 그 극한값이 곧 \(f'(a)=3\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한에서 두 정보를 얻는다</div>
    <p>\(f\)가 연속이고 극한값이 존재하므로 \(f(a)=1\)이어야 하고, 그때 주어진 극한은 미분계수이므로</p>
    $$
    f(a)=1,\qquad f'(a)=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 접선의 \(y\)절편으로 \(a\)를 구한다</div>
    <p>점 \((a,f(a))\)에서의 접선은 \(y=3(x-a)+1=3x-3a+1\)이므로 \(y\)절편이 \(-3a+1\)이다.</p>
    $$
    -3a+1=4,\qquad a=-1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f\)를 확정한다</div>
    <p>\(f(0)=0\)이고 최고차항의 계수가 \(1\)이므로 \(f(x)=x^3+px^2+qx\)로 놓으면</p>
    $$
    f(-1)=-1+p-q=1\ \Longrightarrow\ p-q=2,
    $$
    $$
    f'(-1)=3-2p+q=3\ \Longrightarrow\ 2p-q=0.
    $$
    <p>연립하면 \(p=-2\), \(q=-4\)이므로 \(f(x)=x^3-2x^2-4x\)이다.</p>
    $$
    f(1)=1-2-4=-5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock06/common/q12": { answer: 3, html: String.raw`
  <div class="sol-box">\(2^{\alpha}=t\)로 놓으면 조건이 \(t\)에 대한 삼차방정식이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 선분의 길이를 쓴다</div>
    <p>두 점 \(\mathrm A\), \(\mathrm B\)의 \(x\)좌표를 \(\alpha\), 두 점 \(\mathrm C\), \(\mathrm D\)의 \(x\)좌표를 \(\beta\)라 하면</p>
    $$
    \overline{\mathrm{AB}}=2^{\alpha}-(1-2^{-\alpha})=2^{\alpha}+2^{-\alpha}-1,
    $$
    $$
    \overline{\mathrm{CD}}=2^{\beta}-(1-2^{-\beta})=2^{\beta}+2^{-\beta}-1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 점 \(\mathrm A\), \(\mathrm C\)의 \(y\)좌표가 같음을 쓴다</div>
    $$
    2^{\beta}=1-2^{-\alpha}\ \Longrightarrow\ 2^{-\beta}=\frac{1}{1-2^{-\alpha}},
    $$
    $$
    \overline{\mathrm{CD}}=(1-2^{-\alpha})+\frac{1}{1-2^{-\alpha}}-1=-2^{-\alpha}+\frac{1}{1-2^{-\alpha}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\overline{\mathrm{AB}}=2\,\overline{\mathrm{CD}}\)를 풀어 \(\alpha\)를 구한다</div>
    <p>\(2^{\alpha}=t\ (t&gt;0)\)로 놓으면 \(2^{-\alpha}=\dfrac1t\)이고</p>
    $$
    t+\frac1t-1=2\left(-\frac1t+\frac{t}{t-1}\right).
    $$
    <p>양변에 \(t(t-1)\)을 곱해 정리하면</p>
    $$
    t^3-4t^2+4t-3=0,\qquad (t-3)(t^2-t+1)=0.
    $$
    <p>\(t^2-t+1\)의 판별식이 음수이므로 실근은 \(t=3\)뿐이다. 즉 \(\alpha=\log_2 3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(\beta\)를 구해 넓이를 계산한다</div>
    $$
    2^{\beta}=1-\frac13=\frac23\ \Longrightarrow\ \beta=\log_2\frac23=1-\log_2 3.
    $$
    <p>\(\overline{\mathrm{AB}}=3+\dfrac13-1=\dfrac73\), \(\overline{\mathrm{CD}}=\dfrac76\), \(\overline{\mathrm{AC}}=\alpha-\beta=2\log_2 3-1\)이므로 사다리꼴 \(\mathrm{ABCD}\)의 넓이는</p>
    $$
    \frac12\left(\frac73+\frac76\right)(2\log_2 3-1)=\frac74(2\log_2 3-1)=\frac72\log_2 3-\frac74.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock06/common/q13": { answer: 3, html: String.raw`
  <div class="sol-box">\(A\)는 곡선이 아래, \(B\)는 곡선이 위인 부분이므로 \(B-A\)는 부호를 살린 정적분 하나로 합쳐진다. 교점 \(\alpha\)를 구할 필요가 없다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(B-A\)를 하나의 정적분으로 만든다</div>
    <p>\(f(x)=\dfrac14x^3+\dfrac12x\), \(g(x)=mx+2\)라 하고 교점의 \(x\)좌표를 \(\alpha\)라 하면</p>
    $$
    A=\int_0^{\alpha}\{g(x)-f(x)\}\,dx,\qquad B=\int_{\alpha}^{2}\{f(x)-g(x)\}\,dx,
    $$
    $$
    B-A=\int_{\alpha}^{2}\{f-g\}\,dx+\int_0^{\alpha}\{f-g\}\,dx=\int_0^{2}\{f(x)-g(x)\}\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 계산해 \(m\)을 구한다</div>
    $$
    \int_0^{2}\left\{\frac14x^3+\left(\frac12-m\right)x-2\right\}dx
    =\left[\frac1{16}x^4+\frac12\left(\frac12-m\right)x^2-2x\right]_0^{2}
    $$
    $$
    =1+(1-2m)-4=-2-2m=\frac23,
    $$
    $$
    2m=-\frac83,\qquad m=-\frac43.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock06/common/q14": { answer: 4, html: String.raw`
  <div class="sol-box">두 진수 조건과 부등식 조건이 각각 \(n\)의 상한을 준다. <b>세 상한 중 가장 작은 것</b>이 \(12\)가 되도록 \(k\)를 고르면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 진수 조건에서 상한을 얻는다</div>
    $$
    -n^2+10n+75&gt;0\ \Longleftrightarrow\ (n+5)(n-15)&lt;0\ \Longleftrightarrow\ -5&lt;n&lt;15,
    $$
    <p>이므로 자연수 \(n\)에 대하여 \(n\le14\)이다. 또</p>
    $$
    75-kn&gt;0\ \Longleftrightarrow\ n&lt;\frac{75}{k}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부등식 조건에서 상한을 얻는다</div>
    <p>\(\log_2\sqrt{-n^2+10n+75}=\log_4(-n^2+10n+75)\)이므로 주어진 조건은</p>
    $$
    \log_4(-n^2+10n+75)&gt;\log_4(75-kn).
    $$
    <p>밑 \(4\)가 \(1\)보다 크므로</p>
    $$
    -n^2+10n+75&gt;75-kn,\qquad n^2-(10+k)n&lt;0,\qquad 0&lt;n&lt;10+k,
    $$
    <p>즉 자연수 \(n\)에 대하여 \(n\le9+k\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 개수가 \(12\)일 조건을 쓴다</div>
    <p>조건을 만족시키는 자연수 \(n\)은 \(1\)부터 세 상한 중 가장 작은 값까지이므로, 그 개수가 \(12\)라는 것은 \(n=12\)는 되고 \(n=13\)은 안 된다는 뜻이다.</p>
    $$
    \frac{75}{k}&gt;12\ \text{이고}\ 9+k\ge12,\qquad \text{그러나}\quad
    \frac{75}{k}&gt;13\ \text{이고}\ 9+k\ge13\ \text{는 아니어야 한다.}
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(k\)를 고른다</div>
    <p>앞의 조건에서 \(k&lt;6.25\)이고 \(k\ge3\)이므로 \(3\le k\le6\)이다. 뒤의 조건에서 제외할 것은 \(k&lt;\dfrac{75}{13}\)이고 \(k\ge4\)인 \(k\), 즉 \(k=4,\ 5\)이다.</p>
    <p>따라서 \(k=3\) 또는 \(k=6\)이고</p>
    $$
    3+6=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },
