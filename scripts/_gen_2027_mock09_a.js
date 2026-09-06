"2027_mock09/common/q01": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(2\)로 통일한다</div>
    $$
    4^{-\frac12}=\left(2^{2}\right)^{-\frac12}=2^{-1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 더한다</div>
    $$
    2^{\frac32}\times2^{-1}=2^{\frac32-1}=2^{\frac12}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2027_mock09/common/q02": { answer: 3, html: String.raw`
  <div class="sol-box">이 극한은 미분계수의 정의 그대로이므로 \(f'(2)\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한을 미분계수로 바꾼다</div>
    $$
    \lim_{x\to2}\frac{f(x)-f(2)}{x-2}=f'(2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    <p>\(f'(x)=6x^2-1\)이므로</p>
    $$
    f'(2)=6\times4-1=23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2027_mock09/common/q03": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 공차를 구한다</div>
    <p>공차를 \(d\)라 하면 \(a_{10}-a_7=3d\)이므로</p>
    $$
    3d=9,\qquad d=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_7\)을 구한다</div>
    $$
    a_7=a_2+5d=2+5\times3=17.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2027_mock09/common/q04": { answer: 2, html: String.raw`
  <div class="sol-box">다항함수는 각 구간에서 연속이므로 \(x=2\)에서의 좌극한·우극한만 맞추면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x=2\)에서 좌우 극한을 같게 놓는다</div>
    $$
    \lim_{x\to2-}f(x)=14+a,\qquad \lim_{x\to2+}f(x)=4+2a.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a\)를 구한다</div>
    $$
    14+a=4+2a,\qquad a=10.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2027_mock09/common/q05": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부정적분을 구해 정적분을 계산한다</div>
    $$
    \int_0^2\left(2x^3+6x^2-x\right)dx=\left[\frac12x^4+2x^3-\frac12x^2\right]_0^2=8+16-2=22.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2027_mock09/common/q06": { answer: 5, html: String.raw`
  <div class="sol-box">\(a\sin\dfrac{x}{b}+2\)의 최댓값은 \(a+2\), 주기는 \(2\pi b\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 최댓값에서 \(a\)를 구한다</div>
    <p>\(a&gt;0\)이므로 최댓값은 \(a+2\)이고</p>
    $$
    a+2=5,\qquad a=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 주기에서 \(b\)를 구한다</div>
    $$
    \frac{2\pi}{\frac1b}=2\pi b=8\pi,\qquad b=4.
    $$
    <p>따라서 \(a+b=3+4=7\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2027_mock09/common/q07": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극소 조건에서 \(a\)를 구한다</div>
    <p>\(f'(x)=6x^2+2ax-4a\)이고 \(x=1\)에서 극소이므로</p>
    $$
    f'(1)=6+2a-4a=0,\qquad a=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극대가 되는 곳을 찾는다</div>
    $$
    f'(x)=6x^2+6x-12=6(x+2)(x-1)=0,\qquad x=-2\ \text{또는}\ x=1.
    $$
    <p>\(f'\)의 부호가 \(x=-2\)에서 양에서 음으로 바뀌므로 \(x=-2\)에서 극대이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 극댓값을 구한다</div>
    <p>\(f(x)=2x^3+3x^2-12x\)이므로</p>
    $$
    f(-2)=-16+12+24=20.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2027_mock09/common/q08": { answer: 3, html: String.raw`
  <div class="sol-box">첫째항 \(a_1\)은 약분되므로 조건은 공비 \(r\)만의 방정식이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 공비 \(r\)에 대한 식을 세운다</div>
    <p>모든 항이 양수이므로 \(r&gt;0\)이고</p>
    $$
    \frac{S_3}{a_1+2a_2}=\frac{a_1\left(1+r+r^2\right)}{a_1(1+2r)}=\frac{1+r+r^2}{1+2r}=\frac73.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(r\)을 구한다</div>
    $$
    3+3r+3r^2=7+14r,\qquad 3r^2-11r-4=0,\qquad (3r+1)(r-4)=0.
    $$
    <p>\(r&gt;0\)이므로 \(r=4\)이고</p>
    $$
    \frac{a_8}{a_6}=r^2=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2027_mock09/common/q09": { answer: 1, html: String.raw`
  <div class="sol-box">위치를 미분하면 속도, 한 번 더 미분하면 가속도이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 속도가 같아지는 시각을 구한다</div>
    <p>두 점의 속도는 각각</p>
    $$
    v_1=12t^2-2t-11,\qquad v_2=4t+7.
    $$
    <p>\(v_1=v_2\)에서</p>
    $$
    12t^2-6t-18=0,\qquad 6(2t-3)(t+1)=0.
    $$
    <p>\(t\ge0\)이므로 \(t=\dfrac32\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 그 순간의 가속도를 구한다</div>
    <p>가속도는 각각 \(24t-2\), \(4\)이므로 \(t=\dfrac32\)에서</p>
    $$
    p=24\times\frac32-2=34,\qquad q=4,\qquad p-q=30.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2027_mock09/common/q10": { answer: 3, html: String.raw`
  <div class="sol-box">두 점의 \(x\)좌표를 로그로 나타내면 \(\overline{\mathrm{AB}}\)는 두 로그의 차, 즉 하나의 로그값이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 점의 \(x\)좌표를 구한다</div>
    <p>\(16a^x=7\)에서 \(a^x=\dfrac{7}{16}\), \(\dfrac14a^x=7\)에서 \(a^x=28\)이므로</p>
    $$
    \mathrm{A}\left(\log_a\frac{7}{16},\,7\right),\qquad \mathrm{B}\left(\log_a28,\,7\right).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\overline{\mathrm{AB}}=4\)를 푼다</div>
    <p>\(a&gt;1\)이므로 \(\log_a28&gt;\log_a\dfrac{7}{16}\)이고</p>
    $$
    \overline{\mathrm{AB}}=\log_a28-\log_a\frac{7}{16}=\log_a\left(28\times\frac{16}{7}\right)=\log_a64=4.
    $$
    <p>따라서 \(a^4=64=2^6\)이고 \(a&gt;0\)이므로 \(a=2^{\frac32}=2\sqrt2\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2027_mock09/common/q11": { answer: 3, html: String.raw`
  <div class="sol-box">양변을 미분하면 \(f'(x)\)가 나오고, \(x=-1\)을 대입하면 적분상수가 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x=-1\)을 대입한다</div>
    <p>좌변이 \(0\)이므로</p>
    $$
    0=-f(-1)+2-3+6,\qquad f(-1)=5.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 양변을 \(x\)에 대하여 미분한다</div>
    $$
    f(x)=f(x)+xf'(x)-6x^2-6x,\qquad xf'(x)=6x^2+6x.
    $$
    <p>\(f'(x)\)는 다항함수이므로 모든 실수 \(x\)에 대하여 \(f'(x)=6x+6\)이고</p>
    $$
    f(x)=3x^2+6x+C\quad(C\text{는 적분상수}).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 적분상수를 정한다</div>
    <p>\(f(-1)=5\)에서</p>
    $$
    3-6+C=5,\qquad C=8.
    $$
    <p>따라서 \(f(x)=3x^2+6x+8\)이고 \(f(0)=8\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

