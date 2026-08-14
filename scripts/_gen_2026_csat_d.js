"2026_csat/calculus/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분모를 각의 크기에 맞춘다</div>
    $$
    \lim_{x\to0}\frac{\tan6x}{2x}=\lim_{x\to0}\left(\frac{\tan6x}{6x}\times3\right).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    $$
    3\times1=3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_csat/calculus/q24": { answer: 4, html: String.raw`
  <div class="sol-box">근호 안을 인수분해하면 \(\sin x\cos^2x\)가 되어 근호가 절반 벗겨진다. 남는 \(\cos x\)가 \(\sin x\)의 도함수라 치환이 바로 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 근호 안을 정리한다</div>
    $$
    \sin x-\sin^3x=\sin x\left(1-\sin^2x\right)=\sin x\cos^2x,
    $$
    <p>\(0\le x\le\dfrac\pi2\)에서 \(\cos x\ge0\)이므로</p>
    $$
    \sqrt{\sin x-\sin^3x}=\sqrt{\sin x}\times\cos x.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 치환한다</div>
    <p>\(\sin x=t\)로 놓으면 \(\cos x=\dfrac{dt}{dx}\)이고 \(x=0\)일 때 \(t=0\), \(x=\dfrac\pi2\)일 때 \(t=1\)이므로</p>
    $$
    \int_0^{\frac\pi2}\sqrt{\sin x}\,\cos x\,dx=\int_0^{1}\sqrt t\,dt=\left[\frac23t^{\frac32}\right]_0^{1}=\frac23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_csat/calculus/q25": { answer: 3, html: String.raw`
  <div class="sol-box">부등식의 양 끝을 \(n\)으로 나누면 둘 다 \(5\)로 가므로 \(\dfrac{a_n}{n}\to5\)이다. 구하는 극한도 분자·분모를 \(n^2\)으로 나누면 \(\dfrac{a_n}{n}\)만으로 쓰인다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 대소관계로 \(\dfrac{a_n}{n}\)의 극한을 구한다</div>
    $$
    \frac{\sqrt{9n^2-5}+2n}{n}=\sqrt{9-\frac5{n^2}}+2\ \to\ 5,\qquad \frac{5n+1}{n}=5+\frac1n\ \to\ 5
    $$
    <p>이므로 수열의 극한의 대소관계에 의하여 \(\displaystyle\lim_{n\to\infty}\frac{a_n}{n}=5\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 분자·분모를 \(n^2\)으로 나눈다</div>
    $$
    \frac{\left(a_n+2\right)^2}{na_n+5n^2-2}
    =\frac{\left(\dfrac{a_n}{n}+\dfrac2n\right)^2}{\dfrac{a_n}{n}+5-\dfrac2{n^2}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 극한값을 구한다</div>
    $$
    \frac{(5+0)^2}{5+5-0}=\frac{25}{10}=\frac52.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_csat/calculus/q26": { answer: 1, html: String.raw`
  <div class="sol-box">단면이 정삼각형이므로 넓이는 \(\dfrac{\sqrt3}{4}\times(\text{한 변})^2\)이고, 제곱하면 근호가 벗겨져 \(x+x\ln x\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부피를 적분으로 쓴다</div>
    $$
    \int_1^{2}\frac{\sqrt3}{4}\left(\sqrt{x+x\ln x}\right)^2dx=\frac{\sqrt3}{4}\int_1^{2}x(1+\ln x)\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부분적분한다</div>
    $$
    \int_1^{2}x(1+\ln x)\,dx=\left[\frac{x^2}{2}(1+\ln x)\right]_1^{2}-\int_1^{2}\frac x2\,dx
    $$
    $$
    =2(1+\ln2)-\frac12-\left[\frac{x^2}{4}\right]_1^{2}=\frac{3+4\ln2}{2}-\frac34=\frac{3+8\ln2}{4}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부피를 구한다</div>
    $$
    \frac{\sqrt3}{4}\times\frac{3+8\ln2}{4}=\frac{\sqrt3\left(3+8\ln2\right)}{16}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_csat/calculus/q27": { answer: 2, html: String.raw`
  <div class="sol-box">\(\cos^2\pi t+\sin^2\pi t=1\)을 쓰면 직선의 방정식에 대입했을 때 삼각함수가 통째로 사라져 \(e^{4t}\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 교점의 매개변수를 구한다</div>
    <p>\(y=3x-5e\)에 대입하면</p>
    $$
    e^{4t}\left(1-3\cos^2\pi t\right)=3e^{4t}\left(1+\sin^2\pi t\right)-5e,
    $$
    $$
    e^{4t}\left\{-2-3\left(\cos^2\pi t+\sin^2\pi t\right)\right\}=-5e,\qquad -5e^{4t}=-5e.
    $$
    <p>따라서 \(4t=1\), 즉 \(t=\dfrac14\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 매개변수로 나타낸 도함수를 쓴다</div>
    $$
    \frac{dx}{dt}=e^{4t}\left(4+4\sin^2\pi t+2\pi\sin\pi t\cos\pi t\right),
    $$
    $$
    \frac{dy}{dt}=e^{4t}\left(4-12\cos^2\pi t+6\pi\cos\pi t\sin\pi t\right),
    $$
    $$
    \frac{dy}{dx}=\frac{4-12\cos^2\pi t+6\pi\cos\pi t\sin\pi t}{4+4\sin^2\pi t+2\pi\sin\pi t\cos\pi t}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=\dfrac14\)을 대입한다</div>
    <p>\(\sin\dfrac\pi4=\cos\dfrac\pi4=\dfrac{\sqrt2}{2}\)이므로</p>
    $$
    \frac{4-6+3\pi}{4+2+\pi}=\frac{3\pi-2}{\pi+6}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_csat/calculus/q28": { answer: 5, html: String.raw`
  <div class="sol-box">두 점의 거리를 \(s\)로 나타내면 \(t=\dfrac{s^3}{s+1}\)이라는 관계가 나온다. \(g\)는 이 대응의 역이므로, 부분적분으로 \(\displaystyle\int g\,dt\)를 \(\displaystyle\int t\,ds\) 꼴로 바꾸면 유리함수 적분이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(t\)를 \(s\)로 나타낸다</div>
    <p>\(f'(x)=x-1+\dfrac1{1+x}=\dfrac{x^2}{x+1}\)이므로 점 \((s,\ f(s))\)에서의 접선은</p>
    $$
    y-f(s)=\frac{s^2}{s+1}(x-s).
    $$
    <p>\(y\)축에 내린 수선의 발은 \(\mathrm H(0,\ f(s))\)이고, 접선의 \(y\)절편은 \(\mathrm I\left(0,\ -\dfrac{s^3}{s+1}+f(s)\right)\)이므로</p>
    $$
    t=\overline{\mathrm{HI}}=\frac{s^3}{s+1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분구간의 끝을 \(s\)로 옮긴다</div>
    <p>\(t=\dfrac12\)에서 \(2s^3-s-1=(s-1)\left(2s^2+2s+1\right)=0\), \(s&gt;0\)이므로 \(s=1\)이다. \(t=\dfrac{27}{4}\)에서 \(4s^3-27s-27=(s-3)(2s+3)^2=0\), \(s&gt;0\)이므로 \(s=3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부분적분으로 바꾼다</div>
    $$
    \int_{\frac12}^{\frac{27}{4}}g(t)\,dt=\Big[t\,g(t)\Big]_{\frac12}^{\frac{27}{4}}-\int_{\frac12}^{\frac{27}{4}}t\,g'(t)\,dt
    =\left(\frac{27}{4}\times3-\frac12\times1\right)-\int_1^{3}\frac{s^3}{s+1}\,ds,
    $$
    <p>앞항은 \(\dfrac{79}{4}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 남은 적분을 계산한다</div>
    $$
    \int_1^{3}\frac{s^3}{s+1}\,ds=\int_1^{3}\left(s^2-s+1-\frac1{s+1}\right)ds
    =\left[\frac13s^3-\frac12s^2+s-\ln|s+1|\right]_1^{3}=\frac{20}{3}-\ln2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 값을 구한다</div>
    $$
    \frac{79}{4}-\left(\frac{20}{3}-\ln2\right)=\frac{237-80}{12}+\ln2=\frac{157}{12}+\ln2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_csat/calculus/q29": { answer: 97, html: String.raw`
  <div class="sol-box">첫째항과 공차가 같으므로 \(a_n=nd\)로 아주 단순해진다. 그러면 \(b_{k+1}\), \(b_{k+2}\), \(b_{k+3}\)이 등비를 이룬다는 조건이 \(d\)를 결정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(d\)를 구한다</div>
    <p>\(a_n=d+(n-1)d=nd\)이므로 \(b_{k+i}=\dfrac1{id}-1\ (i=1,2,3)\)이고, 이 셋이 등비수열의 연속한 세 항이므로</p>
    $$
    \left(\frac1{2d}-1\right)^2=\left(\frac1d-1\right)\left(\frac1{3d}-1\right),\qquad \frac1{12d^2}=\frac1{3d},\qquad d=\frac14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 공비와 \(b_1\)의 꼴을 정한다</div>
    <p>\(b_{k+1}=3\), \(b_{k+2}=1\), \(b_{k+3}=\dfrac13\)이므로 공비는 \(\dfrac13\)이고, \(b_1=3\times3^{k}\)이므로 \(b_1\)은 \(3\)의 거듭제곱이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부등식으로 \(b_1\)을 확정한다</div>
    <p>\(a_n=\dfrac n4\)이므로</p>
    $$
    \sum_{n=1}^{\infty}\frac1{a_na_{n+1}}=\sum_{n=1}^{\infty}\frac{16}{n(n+1)}=16\lim_{n\to\infty}\left(1-\frac1{n+1}\right)=16,
    $$
    $$
    \sum_{n=1}^{\infty}b_n=\frac{b_1}{1-\frac13}=\frac32b_1.
    $$
    <p>따라서 \(0&lt;\dfrac32b_1-16&lt;30\)에서 \(\dfrac{32}{3}&lt;b_1&lt;\dfrac{92}{3}\)이고, \(3\)의 거듭제곱 중 이 범위에 있는 것은 \(b_1=27\)뿐이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답을 구한다</div>
    <p>\(\{b_{2n}\}\)은 첫째항이 \(b_2=27\times\dfrac13=9\), 공비가 \(\left(\dfrac13\right)^2=\dfrac19\)인 등비수열이므로</p>
    $$
    a_2\times\sum_{n=1}^{\infty}b_{2n}=\frac24\times\frac{9}{1-\frac19}=\frac12\times\frac{81}{8}=\frac{81}{16}.
    $$
    <p>\(p=16\), \(q=81\)이므로 \(p+q=97\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{97}\)</div>
` },
