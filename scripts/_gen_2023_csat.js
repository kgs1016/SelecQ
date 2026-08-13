"2023_csat/common/q01": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(2\)로 통일한다</div>
    $$
    \left(\frac{4}{2^{\sqrt2}}\right)^{2+\sqrt2}
    =\left(2^{2-\sqrt2}\right)^{2+\sqrt2}
    =2^{(2-\sqrt2)(2+\sqrt2)}=2^{4-2}=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_csat/common/q02": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분자와 분모를 \(x\)로 나눈다</div>
    <p>\(x\to\infty\)이므로 \(x&gt;0\)으로 보아 \(\sqrt{x^2-2}=x\sqrt{1-\dfrac2{x^2}}\)이다.</p>
    $$
    \lim_{x\to\infty}\frac{\sqrt{x^2-2}+3x}{x+5}
    =\lim_{x\to\infty}\frac{\sqrt{1-\frac2{x^2}}+3}{1+\frac5x}
    =\frac{1+3}{1}=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_csat/common/q03": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 조건을 공비로 연결한다</div>
    <p>공비를 \(r\ (r&gt;0)\)라 하면 \(a_4+a_6=r^2(a_2+a_4)\)이므로</p>
    $$
    r^2\times30=\frac{15}{2},\qquad r^2=\frac14,\qquad r=\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 첫째항을 구한다</div>
    $$
    a_2+a_4=a_1r+a_1r^3=a_1\left(\frac12+\frac18\right)=\frac58a_1=30,
    $$
    $$
    a_1=30\times\frac85=48.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2023_csat/common/q04": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 적용한다</div>
    $$
    g'(x)=2xf(x)+x^2f'(x).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=2\)를 대입한다</div>
    $$
    g'(2)=4f(2)+4f'(2)=4\times1+4\times3=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_csat/common/q05": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sin\theta\)를 구한다</div>
    <p>\(\cos\!\left(\dfrac\pi2+\theta\right)=-\sin\theta\)이므로</p>
    $$
    \sin\theta=-\frac{\sqrt5}{5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\theta\)가 있는 사분면을 정한다</div>
    <p>\(\tan\theta&lt;0\)이고 \(\sin\theta&lt;0\)이므로 \(\theta\)는 제4사분면의 각이고 \(\cos\theta&gt;0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\cos\theta\)를 구한다</div>
    $$
    \cos^2\theta=1-\left(\frac{\sqrt5}{5}\right)^2=\frac45,
    \qquad
    \cos\theta=\frac{2\sqrt5}{5}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_csat/common/q06": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x=1\)이 극점임을 이용해 \(a\)를 구한다</div>
    $$
    f'(x)=6x^2-18x+a,\qquad f'(1)=6-18+a=0,\qquad a=12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극소가 되는 \(x\)를 찾는다</div>
    $$
    f'(x)=6x^2-18x+12=6(x-1)(x-2)
    $$
    <p>이므로 \(f'(x)\)의 부호는 \(x=1\)에서 양에서 음, \(x=2\)에서 음에서 양으로 바뀐다. 따라서 \(f(x)\)는 \(x=2\)에서 극소이고 \(b=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 답을 구한다</div>
    $$
    a+b=12+2=14.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_csat/common/q07": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항을 쓴다</div>
    <p>첫째항과 공차가 같으므로 그 값을 \(a\)라 하면</p>
    $$
    a_n=a+(n-1)\times a=an.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 분모를 유리화해 망원합으로 만든다</div>
    $$
    \frac{1}{\sqrt{a_k}+\sqrt{a_{k+1}}}
    =\frac{\sqrt{a_{k+1}}-\sqrt{a_k}}{a_{k+1}-a_k}
    =\frac{\sqrt{a_{k+1}}-\sqrt{a_k}}{a}
    $$
    <p>이므로</p>
    $$
    \sum_{k=1}^{15}\frac{1}{\sqrt{a_k}+\sqrt{a_{k+1}}}
    =\frac{\sqrt{a_{16}}-\sqrt{a_1}}{a}
    =\frac{\sqrt{16a}-\sqrt{a}}{a}
    =\frac{3\sqrt a}{a}=\frac{3}{\sqrt a}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구해 \(a_4\)를 계산한다</div>
    $$
    \frac{3}{\sqrt a}=2,\qquad \sqrt a=\frac32,\qquad a=\frac94,
    $$
    $$
    a_4=4a=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_csat/common/q08": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접점을 문자로 두고 접선을 세운다</div>
    <p>접점을 \((t,\,t^3-t+2)\)라 하자. \(y'=3x^2-1\)이므로 접선의 방정식은</p>
    $$
    y-(t^3-t+2)=(3t^2-1)(x-t).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 점 \((0,4)\)를 지나는 조건으로 \(t\)를 구한다</div>
    $$
    4-(t^3-t+2)=(3t^2-1)(0-t)=-3t^3+t,
    $$
    $$
    -t^3+t+2=-3t^3+t,\qquad 2t^3=-2,\qquad t=-1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 접선을 확정하고 \(x\)절편을 구한다</div>
    <p>접점은 \((-1,\,2)\), 기울기는 \(3(-1)^2-1=2\)이므로 접선은 \(y=2x+4\)이고</p>
    $$
    2x+4=0,\qquad x=-2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_csat/common/q09": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f\)가 감소함수임을 확인한다</div>
    <p>\(y=\tan 2x\)는 \(2x\)가 \(-\dfrac\pi2\)와 \(\dfrac\pi2\) 사이, 즉 \(-\dfrac\pi4&lt;x&lt;\dfrac\pi4\)에서 증가한다. 앞에 \(-\sqrt3\)이 곱해져 있으므로 이 범위에서 \(f(x)=a-\sqrt3\tan 2x\)는 감소한다.</p>
    <p>따라서 닫힌구간 \(\left[-\dfrac\pi6,\,b\right]\)에서 최댓값은 \(x=-\dfrac\pi6\), 최솟값은 \(x=b\)에서 나온다. (\(b&lt;\dfrac\pi4\))</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 최댓값에서 \(a\)를 구한다</div>
    $$
    f\!\left(-\frac\pi6\right)=a-\sqrt3\tan\!\left(-\frac\pi3\right)=a-\sqrt3\times(-\sqrt3)=a+3=7,
    $$
    $$
    a=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 최솟값에서 \(b\)를 구한다</div>
    $$
    4-\sqrt3\tan 2b=3,\qquad \tan 2b=\frac{1}{\sqrt3},
    $$
    <p>\(0&lt;2b&lt;\dfrac\pi2\)이므로 \(2b=\dfrac\pi6\), 즉 \(b=\dfrac\pi{12}\)이다.</p>
    $$
    a\times b=4\times\frac\pi{12}=\frac\pi3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_csat/common/q10": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 곡선의 차를 하나의 함수로 둔다</div>
    <p>\(h(x)=(-x^2+k)-(x^3+x^2)=-x^3-2x^2+k\)라 하자. 두 곡선이 만나는 \(x\)좌표를 \(\alpha\ (0&lt;\alpha&lt;2)\)라 하면 그림에서 \(0&lt;x&lt;\alpha\)일 때 \(h(x)&gt;0\), \(\alpha&lt;x&lt;2\)일 때 \(h(x)&lt;0\)이다. 따라서</p>
    $$
    A=\int_0^{\alpha}h(x)\,dx,\qquad B=\int_{\alpha}^{2}\{-h(x)\}\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(A=B\)를 하나의 정적분으로 바꾼다</div>
    <p>\(A-B=\displaystyle\int_0^{\alpha}h(x)\,dx+\int_{\alpha}^{2}h(x)\,dx=\int_0^{2}h(x)\,dx\)이므로 \(A=B\)는 다음과 같다.</p>
    $$
    \int_0^{2}(-x^3-2x^2+k)\,dx=0.
    $$
    <p>이렇게 두면 \(\alpha\)를 직접 구하지 않아도 된다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 계산해 \(k\)를 구한다</div>
    $$
    \left[-\frac{x^4}{4}-\frac{2}{3}x^3+kx\right]_0^{2}=-4-\frac{16}{3}+2k=0,
    $$
    $$
    2k=\frac{28}{3},\qquad k=\frac{14}{3}.
    $$
    <p>\(4&lt;\dfrac{14}{3}&lt;5\)이므로 조건에 맞는다.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_csat/common/q11": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\overline{\mathrm{BC}}=\overline{\mathrm{CD}}\)임을 이용해 식을 만든다</div>
    <p>\(\angle\mathrm{BAC}=\angle\mathrm{CAD}=\theta\)라 하면, 크기가 같은 원주각에 대한 현의 길이가 같으므로 \(\overline{\mathrm{BC}}=\overline{\mathrm{CD}}\)이다.</p>
    <p>삼각형 \(\mathrm{ABC}\)와 삼각형 \(\mathrm{ACD}\)에서 코사인법칙을 쓰면</p>
    $$
    \overline{\mathrm{BC}}^{\,2}=5^2+(3\sqrt5)^2-2\times5\times3\sqrt5\cos\theta=70-30\sqrt5\cos\theta,
    $$
    $$
    \overline{\mathrm{CD}}^{\,2}=(3\sqrt5)^2+7^2-2\times3\sqrt5\times7\cos\theta=94-42\sqrt5\cos\theta.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\cos\theta\)와 \(\overline{\mathrm{BC}}\)를 구한다</div>
    $$
    70-30\sqrt5\cos\theta=94-42\sqrt5\cos\theta,\qquad 12\sqrt5\cos\theta=24,
    $$
    $$
    \cos\theta=\frac{2}{\sqrt5}=\frac{2\sqrt5}{5}.
    $$
    <p>이를 대입하면</p>
    $$
    \overline{\mathrm{BC}}^{\,2}=70-30\sqrt5\times\frac{2}{\sqrt5}=10,\qquad \overline{\mathrm{BC}}=\sqrt{10}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 사인법칙으로 반지름을 구한다</div>
    <p>\(0&lt;\theta&lt;\dfrac\pi2\)이므로 \(\sin\theta=\sqrt{1-\dfrac45}=\dfrac{\sqrt5}{5}\)이다. 삼각형 \(\mathrm{ABC}\)의 외접원이 곧 주어진 원이므로</p>
    $$
    \frac{\overline{\mathrm{BC}}}{\sin\theta}=2R,\qquad
    \frac{\sqrt{10}}{\frac{\sqrt5}{5}}=5\sqrt2=2R,
    $$
    $$
    R=\frac{5\sqrt2}{2}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2023_csat/common/q12": { answer: 2, html: String.raw`
  <div class="sol-box">각 구간에서 \(f\)의 부호만 두 가지뿐이므로, 구간마다 \(\int f=\pm1\)이라는 사실로 문제를 정수 맞추기로 바꾼다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(g\)를 미분한다</div>
    $$
    g(x)=\int_0^x f(t)\,dt-\int_x^4 f(t)\,dt
    \;\Longrightarrow\;
    g'(x)=f(x)-\{-f(x)\}=2f(x).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 각 구간에서 \(f\)의 모양을 정리한다</div>
    <p>조건에서 \(n-1\le x&lt;n\)일 때 \(|f(x)|=|6(x-n+1)(x-n)|\)이고 \(f\)가 연속이므로, 각 구간에서</p>
    $$
    f(x)=6(x-n+1)(x-n)\quad\text{또는}\quad f(x)=-6(x-n+1)(x-n)
    $$
    <p>중 하나이다. 어느 쪽이든 양 끝 \(x=n-1,\ n\)에서 \(f=0\)이라 연속으로 이어붙는다. 또 \(u=x-(n-1)\)로 놓으면</p>
    $$
    \int_{n-1}^{n}6(x-n+1)(x-n)\,dx=\int_0^1 6u(u-1)\,du=-1
    $$
    <p>이므로, 각 구간의 정적분 값은 \(-1\) 또는 \(+1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(x=2\)에서 최소인 조건으로 두 구간을 확정한다</div>
    <p>\(g'=2f\)이고 \(g\)가 \(x=2\)에서 최솟값을 가지므로 \(f\)의 부호가 \(x=2\)의 좌우에서 음에서 양으로 바뀌어야 한다. 따라서</p>
    $$
    1&lt;x&lt;2:\ f(x)=6(x-1)(x-2)&lt;0,\qquad
    2&lt;x&lt;3:\ f(x)=-6(x-2)(x-3)&gt;0,
    $$
    $$
    \int_1^2 f=-1,\qquad \int_2^3 f=+1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 최솟값이 \(0\)인 조건으로 나머지 두 구간을 확정한다</div>
    $$
    g(2)=\int_0^2 f-\int_2^4 f=0
    \;\Longrightarrow\;
    \left(\int_0^1 f\right)-1=1+\left(\int_3^4 f\right).
    $$
    <p>양변의 값이 모두 \(\pm1\)이므로 이 등식이 성립하려면</p>
    $$
    \int_0^1 f=1,\qquad \int_3^4 f=-1,
    $$
    <p>즉 \(0&lt;x&lt;1\)에서 \(f(x)=-6x(x-1)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 구하는 정적분을 계산한다</div>
    $$
    \int_{\frac12}^{4}f
    =\int_{\frac12}^{1}f+\int_1^2 f+\int_2^3 f+\int_3^4 f
    =\int_{\frac12}^{1}f-1.
    $$
    <p>\(\displaystyle\int_{\frac12}^{1}f=\int_0^1 f-\int_0^{\frac12}f=1-\int_0^{\frac12}f\)이므로</p>
    $$
    \int_{\frac12}^{4}f=-\int_0^{\frac12}f
    =-\int_0^{\frac12}(-6x^2+6x)\,dx
    =-\Big[-2x^3+3x^2\Big]_0^{\frac12}
    =-\left(-\frac14+\frac34\right)=-\frac12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_csat/common/q13": { answer: 3, html: String.raw`
  <div class="sol-box">\(m^{12}\)을 소인수분해해 두면, 정수인 \(n\)제곱근이 있을 조건이 "\(n\)이 지수를 나눈다"로 바뀐다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f(m)\)의 정체를 밝힌다</div>
    <p>\(m^{12}\)의 \(n\)제곱근 중 정수가 있다는 것은 \(x^n=m^{12}\)을 만족하는 정수 \(x\)가 있다는 뜻이다. \(m=p_1^{e_1}p_2^{e_2}\cdots\)라 하고 \(|x|=p_1^{c_1}p_2^{c_2}\cdots\)라 하면</p>
    $$
    nc_i=12e_i\quad(\text{모든 }i)
    $$
    <p>이어야 하므로, 조건은 <b>\(n\)이 모든 \(12e_i\)의 약수</b>인 것과 같다. (\(n\)이 짝수면 \(x&lt;0\)도 되지만 존재 여부는 달라지지 않는다.)</p>
    <p>따라서 \(g=\gcd(e_1,e_2,\dots)\)라 하면 \(n\)은 \(12g\)의 약수이고, \(n\ge2\)이므로</p>
    $$
    f(m)=(12g\text{의 약수의 개수})-1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(m=2,3,\dots,9\)를 세 묶음으로 나눈다</div>
    <p>\(g=1\)인 경우: \(m=2,3,5,6,7\). \(12\)의 약수는 \(1,2,3,4,6,12\)의 \(6\)개이므로</p>
    $$
    f(2)=f(3)=f(5)=f(6)=f(7)=6-1=5.
    $$
    <p>\(g=2\)인 경우: \(m=4=2^2,\ 9=3^2\). \(24\)의 약수는 \(1,2,3,4,6,8,12,24\)의 \(8\)개이므로</p>
    $$
    f(4)=f(9)=8-1=7.
    $$
    <p>\(g=3\)인 경우: \(m=8=2^3\). \(36\)의 약수는 \(1,2,3,4,6,9,12,18,36\)의 \(9\)개이므로</p>
    $$
    f(8)=9-1=8.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 합을 구한다</div>
    $$
    \sum_{m=2}^{9}f(m)=5\times5+7\times2+8=25+14+8=47.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_csat/common/q15": { answer: 5, html: String.raw`
  <div class="sol-box">\(a_7=40\)이 주어졌으므로 \(a_6\)을 \(3\)으로 나눈 나머지로 경우를 나눈다. 나머지가 정해지면 그 앞 항들의 나머지가 <b>자동으로</b> 결정되어, 어느 규칙을 쓸지 고를 여지가 없다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a_6\)이 \(3\)의 배수인 경우</div>
    <p>이때 \(a_7=\dfrac{a_6}{3}=40\)이므로 \(a_6=120\)이다.</p>
    <p>\(a_7=40\)은 \(3\)의 배수가 아니므로 \(a_8=a_6+a_7=160\)이고, \(a_8=160\)도 \(3\)의 배수가 아니므로</p>
    $$
    a_9=a_7+a_8=40+160=200.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_6\equiv1\ (\mathrm{mod}\ 3)\)인 경우</div>
    <p>\(a_6\)이 \(3\)의 배수가 아니므로 \(a_7=a_5+a_6=40\), 즉 \(a_5=40-a_6\)이다. 그런데</p>
    $$
    a_5\equiv40-1=39\equiv0\ (\mathrm{mod}\ 3)
    $$
    <p>이므로 \(a_5\)는 반드시 \(3\)의 배수이고, 따라서 \(a_6=\dfrac{a_5}{3}\), 즉 \(a_5=3a_6\)이다.</p>
    $$
    3a_6+a_6=40,\qquad a_6=10,\qquad a_5=30.
    $$
    <p>\(a_6=10\)은 \(3\)의 배수가 아니라 \(a_6\equiv1\)에 맞고, \(a_7=40\)이 \(3\)의 배수가 아니므로 \(a_8=a_6+a_7=50\), \(a_8=50\)도 \(3\)의 배수가 아니므로</p>
    $$
    a_9=a_7+a_8=40+50=90.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_6\equiv2\ (\mathrm{mod}\ 3)\)인 경우</div>
    <p>역시 \(a_7=a_5+a_6=40\)이고 이번에는</p>
    $$
    a_5\equiv40-2=38\equiv2\ (\mathrm{mod}\ 3)
    $$
    <p>이라 \(a_5\)가 \(3\)의 배수가 아니므로 \(a_6=a_4+a_5\)이다. 여기서</p>
    $$
    a_4=a_6-a_5=a_6-(40-a_6)=2a_6-40,
    $$
    $$
    a_4\equiv2\times2-40\equiv0\ (\mathrm{mod}\ 3)
    $$
    <p>이므로 \(a_4\)는 \(3\)의 배수이고 \(a_5=\dfrac{a_4}{3}\)이다. 따라서</p>
    $$
    3(40-a_6)=2a_6-40,\qquad 5a_6=160,\qquad a_6=32.
    $$
    <p>이때 \(a_5=8,\ a_4=24\)로 모두 자연수이고 나머지 조건도 맞는다. \(a_7=40\)이 \(3\)의 배수가 아니므로 \(a_8=a_6+a_7=72\)이고, 이번에는 \(a_8=72\)가 \(3\)의 배수이므로</p>
    $$
    a_9=\frac{a_8}{3}=24.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 최댓값과 최솟값을 더한다</div>
    <p>가능한 \(a_9\)의 값은 \(200,\ 90,\ 24\)뿐이므로 \(M=200,\ m=24\)이고</p>
    $$
    M+m=224.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_csat/common/q16": { answer: 10, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 양변을 하나의 로그로 묶는다</div>
    $$
    \log_2(3x+2)=2+\log_2(x-2)=\log_2 4+\log_2(x-2)=\log_2\{4(x-2)\}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 진수를 비교해 푼다</div>
    $$
    3x+2=4(x-2)=4x-8,\qquad x=10.
    $$
    <p>\(3x+2=32&gt;0\), \(x-2=8&gt;0\)으로 진수 조건도 만족한다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{10}\)</div>
` },

"2023_csat/common/q17": { answer: 15, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f'\)를 적분해 \(f\)를 구한다</div>
    $$
    f(x)=\int(4x^3-2x)\,dx=x^4-x^2+C.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분상수를 정하고 대입한다</div>
    <p>\(f(0)=3\)이므로 \(C=3\)이고 \(f(x)=x^4-x^2+3\)이다.</p>
    $$
    f(2)=16-4+3=15.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{15}\)</div>
` },

"2023_csat/common/q18": { answer: 22, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫 식에서 \(\sum a_k\)를 구한다</div>
    $$
    \sum_{k=1}^{5}(3a_k+5)=3\sum_{k=1}^{5}a_k+5\times5=55,
    $$
    $$
    3\sum_{k=1}^{5}a_k=30,\qquad \sum_{k=1}^{5}a_k=10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 둘째 식에서 \(\sum b_k\)를 구한다</div>
    $$
    \sum_{k=1}^{5}(a_k+b_k)=\sum_{k=1}^{5}a_k+\sum_{k=1}^{5}b_k=32,
    $$
    $$
    \sum_{k=1}^{5}b_k=32-10=22.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{22}\)</div>
` },

"2023_csat/common/q19": { answer: 7, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 방정식을 그래프 문제로 바꾼다</div>
    <p>\(f(x)=2x^3-6x^2+k\)라 하면 방정식 \(2x^3-6x^2+k=0\)의 실근은 \(y=f(x)\)의 그래프와 \(x\)축이 만나는 점의 \(x\)좌표이다.</p>
    $$
    f'(x)=6x^2-12x=6x(x-2),\qquad f'(x)=0\ \Longleftrightarrow\ x=0\ \text{또는}\ x=2.
    $$
    <p>따라서 \(f\)는 \(x=0\)에서 극댓값 \(f(0)=k\), \(x=2\)에서 극솟값 \(f(2)=k-8\)을 갖는다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 양의 실근이 \(2\)개일 조건을 찾는다</div>
    <p>서로 다른 실근이 \(3\)개이려면 \((\text{극댓값})&gt;0&gt;(\text{극솟값})\), 즉</p>
    $$
    k&gt;0\quad\text{그리고}\quad k-8&lt;0\ \Longrightarrow\ 0&lt;k&lt;8.
    $$
    <p>이때 \(f(0)=k&gt;0\)이고 \(x\to-\infty\)에서 \(f(x)\to-\infty\)이므로 음의 실근이 정확히 하나 있고, 나머지 두 근은 각각 \(0&lt;x&lt;2\), \(x&gt;2\)에 놓인 양의 실근이다. 즉 양의 실근이 \(2\)개인 조건이 바로 \(0&lt;k&lt;8\)이다.</p>
    <p>(실근이 \(3\)개가 아니면 양의 실근은 많아야 \(1\)개이므로 다른 경우는 없다.)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 정수 \(k\)를 센다</div>
    <p>\(k=1,2,3,4,5,6,7\)의 \(7\)개이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{7}\)</div>
` },

"2023_csat/common/q20": { answer: 17, html: String.raw`
  <div class="sol-box">움직인 거리는 \(\displaystyle\int|v|\,dt\)이므로, 먼저 \(v\)의 식을 구간별로 완성하고 부호를 확인해야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(t\ge2\)에서의 속도를 구한다</div>
    <p>가속도를 적분하면</p>
    $$
    v(t)=\int(6t+4)\,dt=3t^2+4t+C.
    $$
    <p>\(0\le t\le2\)에서 \(v(t)=2t^3-8t\)이고 \(v(2)=16-16=0\)이므로, \(t=2\)에서 이어지려면</p>
    $$
    12+8+C=0,\qquad C=-20.
    $$
    <p>따라서</p>
    $$
    v(t)=\begin{cases}2t^3-8t & (0\le t\le2)\[2pt] 3t^2+4t-20 & (2\le t\le3)\end{cases}
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 각 구간에서 \(v\)의 부호를 본다</div>
    <p>\(0&lt;t&lt;2\)에서 \(2t^3-8t=2t(t-2)(t+2)&lt;0\)이므로 \(|v|=-v\)이고,</p>
    <p>\(2&lt;t&lt;3\)에서 \(3t^2+4t-20=(3t+10)(t-2)&gt;0\)이므로 \(|v|=v\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 거리를 계산한다</div>
    $$
    \int_0^3|v(t)|\,dt=-\int_0^2(2t^3-8t)\,dt+\int_2^3(3t^2+4t-20)\,dt
    $$
    $$
    =-\left[\frac{1}{2}t^4-4t^2\right]_0^2+\Big[t^3+2t^2-20t\Big]_2^3
    $$
    $$
    =-(8-16)+\{(27+18-60)-(8+8-40)\}
    $$
    $$
    =8+\{-15-(-24)\}=8+9=17.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{17}\)</div>
` },

"2023_csat/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항을 쓴다</div>
    <p>이항정리에 의하여 \((x^3+3)^5\)의 전개식의 일반항은</p>
    $$
    {}_5\mathrm{C}_r\,(x^3)^{5-r}3^{\,r}={}_5\mathrm{C}_r\,3^{\,r}\,x^{15-3r}\qquad(r=0,1,\dots,5).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x^9\)이 되는 \(r\)를 찾아 계수를 구한다</div>
    $$
    15-3r=9\ \Longrightarrow\ r=2,
    $$
    $$
    {}_5\mathrm{C}_2\times3^2=10\times9=90.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_csat/prob_stat/q24": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 자리별 조건을 정리한다</div>
    <p>네 자리 자연수가 \(4000\) 이상이려면 천의 자리 숫자가 \(4,5\) 중 하나이고, 홀수이려면 일의 자리 숫자가 \(1,3,5\) 중 하나이다. 백의 자리와 십의 자리는 \(1\)부터 \(5\)까지 아무 숫자나 올 수 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 곱의 법칙으로 센다</div>
    <p>중복을 허락하므로 각 자리는 서로 영향을 주지 않는다.</p>
    $$
    2\times3\times5\times5=150.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_csat/prob_stat/q25": { answer: 5, html: String.raw`
  <div class="sol-box">"적어도 한 개가 흰색"의 여사건은 "\(3\)개 모두 검은색"이라 훨씬 세기 쉽다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 여사건의 확률을 구한다</div>
    <p>마스크는 모두 \(5+9=14\)개이고, 꺼낸 \(3\)개가 모두 검은색일 확률은</p>
    $$
    \frac{{}_9\mathrm{C}_3}{{}_{14}\mathrm{C}_3}
    =\frac{\frac{9\times8\times7}{3\times2\times1}}{\frac{14\times13\times12}{3\times2\times1}}
    =\frac{84}{364}=\frac{3}{13}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건의 확률을 이용한다</div>
    $$
    1-\frac{3}{13}=\frac{10}{13}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_csat/prob_stat/q26": { answer: 3, html: String.raw`
  <div class="sol-box">공에 적힌 수가 \(1\) 또는 \(2\)뿐이므로, 세 수의 곱이 \(8\)인 것은 <b>세 공 모두 \(2\)가 적힌 공</b>인 경우와 같다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 정리한다</div>
    <p>주머니에는 흰 공 \(2\)개(\(1,2\)), 검은 공 \(4\)개(\(1,2,2,2\))로 모두 \(6\)개가 있고, 여기서 \(3\)개를 꺼내는 경우의 수는 \({}_6\mathrm{C}_3=20\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm{P}(A)\), \(\mathrm{P}(B)\)를 구한다</div>
    $$
    \mathrm{P}(A)=\frac{{}_2\mathrm{C}_1\times{}_4\mathrm{C}_2}{{}_6\mathrm{C}_3}=\frac{2\times6}{20}=\frac{3}{5},
    $$
    <p>\(2\)가 적힌 공은 흰 공 \(1\)개와 검은 공 \(3\)개로 모두 \(4\)개이므로</p>
    $$
    \mathrm{P}(B)=\frac{{}_4\mathrm{C}_3}{{}_6\mathrm{C}_3}=\frac{4}{20}=\frac{1}{5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\mathrm{P}(A\cap B)\)를 구한다</div>
    <p>\(A\cap B\)는 \(2\)가 적힌 공만 꺼내면서 그중 흰 공이 \(1\)개, 검은 공이 \(2\)개인 경우이다. \(2\)가 적힌 흰 공은 \(1\)개, \(2\)가 적힌 검은 공은 \(3\)개이므로</p>
    $$
    \mathrm{P}(A\cap B)=\frac{{}_1\mathrm{C}_1\times{}_3\mathrm{C}_2}{{}_6\mathrm{C}_3}=\frac{3}{20}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 확률의 덧셈정리를 쓴다</div>
    $$
    \mathrm{P}(A\cup B)=\frac{3}{5}+\frac{1}{5}-\frac{3}{20}=\frac{12+4-3}{20}=\frac{13}{20}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_csat/prob_stat/q27": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫 신뢰구간의 길이로 \(\sigma\)를 구한다</div>
    <p>모표준편차를 \(\sigma\)라 하면 표본의 크기가 \(16\)일 때 신뢰도 \(95\%\) 신뢰구간의 길이는 \(2\times1.96\times\dfrac{\sigma}{\sqrt{16}}\)이므로</p>
    $$
    2\times1.96\times\frac{\sigma}{4}=755.9-746.1=9.8,
    $$
    $$
    0.98\sigma=9.8,\qquad \sigma=10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 둘째 신뢰구간의 길이를 \(n\)으로 나타낸다</div>
    <p>표본의 크기가 \(n\)일 때 신뢰도 \(99\%\) 신뢰구간 \(a\le m\le b\)의 길이는</p>
    $$
    b-a=2\times2.58\times\frac{10}{\sqrt n}=\frac{51.6}{\sqrt n}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건을 풀어 최솟값을 구한다</div>
    $$
    \frac{51.6}{\sqrt n}\le6\ \Longrightarrow\ \sqrt n\ge8.6\ \Longrightarrow\ n\ge73.96.
    $$
    <p>따라서 자연수 \(n\)의 최솟값은 \(74\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_csat/prob_stat/q28": { answer: 4, html: String.raw`
  <div class="sol-box">확률밀도함수 아래 넓이가 곧 확률이다. 삼각형 넓이 세 개를 세우면 \(a,b,c\)에 대한 연립방정식이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 넓이가 \(1\)</div>
    <p>확률밀도함수의 그래프는 세 점 \((0,0)\), \((b,c)\), \((a,0)\)을 꼭짓점으로 하는 삼각형이므로</p>
    $$
    \frac12\,ac=1,\qquad ac=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm{P}(X\le b)\)를 구한다</div>
    $$
    \mathrm{P}(X\le b)+\mathrm{P}(X\ge b)=1,\qquad
    \mathrm{P}(X\le b)-\mathrm{P}(X\ge b)=\frac14
    $$
    <p>를 더하고 빼면</p>
    $$
    \mathrm{P}(X\le b)=\frac58,\qquad \mathrm{P}(X\ge b)=\frac38.
    $$
    <p>\(\mathrm{P}(X\le b)\)는 밑변 \(b\), 높이 \(c\)인 삼각형의 넓이이므로</p>
    $$
    \frac12\,bc=\frac58.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\mathrm{P}(X\le\sqrt5)=\dfrac12\)에서 \(b=5c\)를 얻는다</div>
    <p>\(\mathrm{P}(X\le b)=\dfrac58&gt;\dfrac12\)이므로 \(\sqrt5&lt;b\)이고, 구간 \([0,\sqrt5]\)에서 그래프는 직선 \(y=\dfrac{c}{b}x\)이다. 따라서</p>
    $$
    \frac12\times\sqrt5\times\frac{c}{b}\sqrt5=\frac{5c}{2b}=\frac12,\qquad b=5c.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(a,b,c\)를 확정한다</div>
    $$
    bc=\frac54\ \Longrightarrow\ 5c^2=\frac54\ \Longrightarrow\ c=\frac12\ (\because c&gt;0),
    $$
    $$
    b=\frac52,\qquad a=\frac{2}{c}=4,
    $$
    $$
    a+b+c=4+\frac52+\frac12=7.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },
