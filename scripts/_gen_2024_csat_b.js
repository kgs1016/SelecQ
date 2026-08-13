"2024_csat/common/q11": { answer: 1, html: String.raw`
  <div class="sol-box">절댓값 조건이 \(a_6+a_8=0\)을 주고, 합 조건이 부분분수로 갈라져 \(a_1\)과 \(a_6\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a_6+a_8=0\)임을 밝힌다</div>
    <p>\(|a_6|=a_8\)에서 \(a_6=a_8\) 또는 \(-a_6=a_8\)인데, 공차가 \(0\)이 아니므로 \(a_6\ne a_8\)이다. 따라서</p>
    $$
    a_6+a_8=0.
    $$
    <p>또 \(a_8\ge0\)이고 \(a_6=-a_8\)이므로 \(a_6\le0\le a_8\)이고, 둘이 다르므로 공차 \(d\)는 양수이다.</p>
    $$
    (a_1+5d)+(a_1+7d)=0\ \Longrightarrow\ a_1=-6d.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 합을 부분분수로 갈라 정리한다</div>
    <p>\(a_{k+1}-a_k=d\)이므로</p>
    $$
    \frac{1}{a_ka_{k+1}}=\frac1d\left(\frac1{a_k}-\frac1{a_{k+1}}\right),
    $$
    $$
    \sum_{k=1}^{5}\frac{1}{a_ka_{k+1}}=\frac1d\left(\frac1{a_1}-\frac1{a_6}\right)
    =\frac1d\times\frac{5d}{a_1(a_1+5d)}=\frac{5}{a_1(a_1+5d)}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(d\)를 구한다</div>
    $$
    \frac{5}{a_1(a_1+5d)}=\frac{5}{96}\ \Longrightarrow\ a_1(a_1+5d)=96.
    $$
    <p>\(a_1=-6d\)를 넣으면 \(-6d\times(-d)=96\), 즉 \(d^2=16\)이고 \(d&gt;0\)이므로 \(d=4\), \(a_1=-24\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 합을 구한다</div>
    $$
    \sum_{k=1}^{15}a_k=\frac{15\{2\times(-24)+14\times4\}}{2}=\frac{15\times8}{2}=60.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_csat/common/q12": { answer: 3, html: String.raw`
  <div class="sol-box">넓이를 \(t\)의 식으로 적어 놓고 미분한다. 잘라 붙인 직선 부분은 밑변과 높이가 모두 \(f(t)\)인 직각삼각형이라 넓이가 \(\dfrac12\{f(t)\}^2\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 넓이 \(S(t)\)를 세운다</div>
    <p>\(x\ge t\)에서 \(g\)의 그래프는 점 \((t,f(t))\)를 지나고 기울기가 \(-1\)인 직선이므로 \(x\)축과 점 \((t+f(t),\,0)\)에서 만난다. 따라서</p>
    $$
    S(t)=\int_0^t f(x)\,dx+\frac12\{f(t)\}^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 미분해서 부호를 본다</div>
    $$
    S'(t)=f(t)+f(t)f'(t)=f(t)\{1+f'(t)\}.
    $$
    <p>\(f(x)=\dfrac19x(x-6)(x-9)\)이므로 \(0&lt;t&lt;6\)에서 \(f(t)&gt;0\)이고</p>
    $$
    1+f'(t)=1+\frac19\{(t-6)(t-9)+t(t-9)+t(t-6)\}=\frac13(t-3)(t-7).
    $$
    <p>\(0&lt;t&lt;6\)에서 \(t-7&lt;0\)이므로 \(S'(t)\)의 부호는 \(t-3\)의 부호와 반대이다. 즉 \(S\)는 \(t=3\)에서 극대이면서 최대이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 최댓값을 계산한다</div>
    <p>\(f(3)=\dfrac19\times3\times(-3)\times(-6)=6\)이므로</p>
    $$
    S(3)=\frac19\int_0^3(x^3-15x^2+54x)\,dx+\frac12\times6^2
    =\frac19\left[\frac14x^4-5x^3+27x^2\right]_0^3+18,
    $$
    $$
    =\frac19\left(\frac{81}{4}-135+243\right)+18=\left(\frac94+12\right)+18=\frac{129}{4}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_csat/common/q13": { answer: 1, html: String.raw`
  <div class="sol-box">두 삼각형이 같은 원에 내접하므로, 넓이의 비가 \(\sin(\angle\mathrm{ADC})\)를 주고 그 값이 곧 사인법칙으로 반지름을 준다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\overline{\mathrm{AC}}\)를 구한다</div>
    <p>\(\overline{\mathrm{AC}}=a\ (a&gt;0)\)라 하면 삼각형 \(\mathrm{ABC}\)에서 코사인법칙에 의하여</p>
    $$
    13=3^2+a^2-2\times3\times a\times\cos\frac\pi3=9+a^2-3a,
    $$
    $$
    a^2-3a-4=0,\qquad (a+1)(a-4)=0,\qquad a=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 넓이를 쓴다</div>
    $$
    S_1=\frac12\times3\times4\times\sin\frac\pi3=3\sqrt3,
    $$
    $$
    S_2=\frac12\times\overline{\mathrm{AD}}\times\overline{\mathrm{CD}}\times\sin(\angle\mathrm{ADC})=\frac92\sin(\angle\mathrm{ADC}).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\sin(\angle\mathrm{ADC})\)를 구한다</div>
    $$
    \frac92\sin(\angle\mathrm{ADC})=\frac56\times3\sqrt3=\frac{5\sqrt3}{2},
    \qquad
    \sin(\angle\mathrm{ADC})=\frac{5\sqrt3}{9}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 사인법칙으로 \(R\)를 구한다</div>
    <p>삼각형 \(\mathrm{ACD}\)의 외접원이 곧 주어진 원이므로</p>
    $$
    \frac{\overline{\mathrm{AC}}}{\sin(\angle\mathrm{ADC})}=2R,\qquad
    \frac{4}{\frac{5\sqrt3}{9}}=2R,\qquad R=\frac{6\sqrt3}{5}.
    $$
    $$
    \frac{R}{\sin(\angle\mathrm{ADC})}=\frac{\frac{6\sqrt3}{5}}{\frac{5\sqrt3}{9}}=\frac{54}{25}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_csat/common/q17": { answer: 8, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 쓴다</div>
    $$
    f(x)=(x+1)(x^2+3)\ \Longrightarrow\ f'(x)=(x^2+3)+(x+1)\times2x.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입한다</div>
    $$
    f'(1)=(1+3)+2\times2=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{8}\)</div>
` },

"2024_csat/common/q18": { answer: 9, html: String.raw`
  <div class="sol-box">\(\sum a_k\)를 \(\sum b_k\)로 바꿔 놓으면 미지수가 하나로 줄어든다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sum a_k\)를 \(\sum b_k\)로 나타낸다</div>
    $$
    \sum_{k=1}^{10}a_k=\sum_{k=1}^{10}(2b_k-1)=2\sum_{k=1}^{10}b_k-10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 둘째 식에 대입한다</div>
    $$
    3\sum_{k=1}^{10}a_k+\sum_{k=1}^{10}b_k=33,
    $$
    $$
    3\left(2\sum_{k=1}^{10}b_k-10\right)+\sum_{k=1}^{10}b_k=33,
    $$
    $$
    7\sum_{k=1}^{10}b_k=63,\qquad \sum_{k=1}^{10}b_k=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{9}\)</div>
` },

"2024_csat/common/q19": { answer: 32, html: String.raw`
  <div class="sol-box">\(f(2+x)\)와 \(f(2-x)\)가 모두 \(\cos\dfrac\pi4x\)가 되어, 부등식이 코사인 하나에 대한 범위 문제로 바뀐다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 값을 코사인으로 바꾼다</div>
    $$
    f(2+x)=\sin\left(\frac\pi2+\frac\pi4x\right)=\cos\frac\pi4x,
    $$
    $$
    f(2-x)=\sin\left(\frac\pi2-\frac\pi4x\right)=\cos\frac\pi4x.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부등식을 정리한다</div>
    $$
    \cos^2\frac\pi4x&lt;\frac14\ \Longleftrightarrow\ -\frac12&lt;\cos\frac\pi4x&lt;\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 각의 범위를 구한다</div>
    <p>\(0&lt;x&lt;16\)에서 \(0&lt;\dfrac\pi4x&lt;4\pi\)이다. 한 주기 안에서 \(\cos\theta\)가 \(-\dfrac12\)와 \(\dfrac12\) 사이인 곳은 \(\dfrac\pi3&lt;\theta&lt;\dfrac{2}{3}\pi\)와 \(\dfrac43\pi&lt;\theta&lt;\dfrac53\pi\)이므로</p>
    $$
    \frac\pi3&lt;\frac\pi4x&lt;\frac23\pi,\quad
    \frac43\pi&lt;\frac\pi4x&lt;\frac53\pi,\quad
    \frac73\pi&lt;\frac\pi4x&lt;\frac83\pi,\quad
    \frac{10}3\pi&lt;\frac\pi4x&lt;\frac{11}3\pi,
    $$
    <p>즉</p>
    $$
    \frac43&lt;x&lt;\frac83,\quad \frac{16}3&lt;x&lt;\frac{20}3,\quad
    \frac{28}3&lt;x&lt;\frac{32}3,\quad \frac{40}3&lt;x&lt;\frac{44}3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 자연수를 골라 더한다</div>
    <p>각 구간에 들어가는 자연수는 \(2,\ 6,\ 10,\ 14\)이므로</p>
    $$
    2+6+10+14=32.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{32}\)</div>
` },
