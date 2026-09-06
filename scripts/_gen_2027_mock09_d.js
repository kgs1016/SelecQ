"2027_mock09/calculus/q23": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\lim_{x\to0}\dfrac{\ln(1+x)}{x}=1\) 꼴로 만든다</div>
    $$
    \lim_{x\to0}\frac{x}{\ln(2x+1)}=\lim_{x\to0}\frac{2x}{\ln(2x+1)}\times\frac12=1\times\frac12=\frac12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2027_mock09/calculus/q24": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부분적분한다</div>
    <p>\(u=3x+1\), \(v'=e^x\)로 놓으면</p>
    $$
    \int_0^1(3x+1)e^x\,dx=\Big[(3x+1)e^x\Big]_0^1-\int_0^1 3e^x\,dx=(4e-1)-3(e-1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 정리한다</div>
    $$
    4e-1-3e+3=e+2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2027_mock09/calculus/q25": { answer: 3, html: String.raw`
  <div class="sol-box">등비수열 \(\{r^n\}\)이 수렴할 조건은 \(-1&lt;r\le1\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 공비의 범위를 세운다</div>
    $$
    -1&lt;\frac{k^2-20}{16}\le1,\qquad -16&lt;k^2-20\le16,\qquad 4&lt;k^2\le36.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 정수 \(k\)를 센다</div>
    <p>\(3\le|k|\le6\)이므로 \(k=\pm3,\ \pm4,\ \pm5,\ \pm6\)의 \(8\)개이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2027_mock09/calculus/q26": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접선 \(l\)을 구한다</div>
    <p>\(y=2(x^2+x)^{-1}\)이므로</p>
    $$
    y'=-\frac{2(2x+1)}{(x^2+x)^2},\qquad y'\big|_{x=1}=-\frac{6}{4}=-\frac32.
    $$
    <p>따라서 \(l:\ y=-\dfrac32(x-1)+1=-\dfrac32x+\dfrac52\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 넓이를 적분으로 나타낸다</div>
    <p>\(1\le x\le2\)에서 곡선이 접선 위에 있으므로 구하는 넓이는</p>
    $$
    S=\int_1^2\left\{\frac{2}{x^2+x}-\left(-\frac32x+\frac52\right)\right\}dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부분분수로 나누어 계산한다</div>
    <p>\(\dfrac{2}{x^2+x}=\dfrac2x-\dfrac{2}{x+1}\)이므로</p>
    $$
    \int_1^2\frac{2}{x^2+x}dx=2\Big[\ln x-\ln(x+1)\Big]_1^2=2\left(\ln\frac23-\ln\frac12\right)=2\ln\frac43,
    $$
    $$
    \int_1^2\left(-\frac32x+\frac52\right)dx=\left[-\frac34x^2+\frac52x\right]_1^2=2-\frac74=\frac14.
    $$
    <p>따라서 \(S=2\ln\dfrac43-\dfrac14\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2027_mock09/calculus/q27": { answer: 5, html: String.raw`
  <div class="sol-box">\(h'(1)=g'(f(1))f'(1)=g'(0)f'(1)\)이므로 \(g'(0)\)만 구하면 되고, 이는 \(g(f(t))=t^2\)을 \(t\)에 대해 미분해서 얻는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f(1)\), \(f'(1)\)</div>
    $$
    f'(x)=\frac{3(\ln x)^2}{x}-\frac3x=\frac{3\{(\ln x)^2-1\}}{x},\qquad f(1)=0,\quad f'(1)=-3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(t)=0\)이 되는 \(t\ (t\ge e)\)</div>
    <p>\(\ln t=s\)라 하면 \(t\ge e\)에서 \(s\ge1\)이고 \(f'(t)\ge0\)이므로 \(f\)는 \(t\ge e\)에서 증가하며 \(f(e)=-2\)이다.
       즉 \(g\)는 \(x\ge-2\)에서 \(g(f(t))=t^2\)으로 결정된다.</p>
    $$
    s^3-3s=s(s^2-3)=0,\quad s\ge1\ \Rightarrow\ s=\sqrt3,\qquad t=e^{\sqrt3}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(g'(0)\)</div>
    <p>\(g(f(t))=t^2\)의 양변을 \(t\)로 미분하면 \(g'(f(t))f'(t)=2t\). \(t=e^{\sqrt3}\)을 대입하면 \(f(t)=0\), \(f'(t)=\dfrac{3(3-1)}{e^{\sqrt3}}=6e^{-\sqrt3}\)이므로</p>
    $$
    g'(0)=\frac{2e^{\sqrt3}}{6e^{-\sqrt3}}=\frac{e^{2\sqrt3}}{3}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(h'(1)\)</div>
    $$
    h'(1)=g'(0)f'(1)=\frac{e^{2\sqrt3}}{3}\times(-3)=-e^{2\sqrt3}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2027_mock09/calculus/q28": { answer: 4, html: String.raw`
  <div class="sol-box">\(\angle\mathrm{AOP}=\theta\)를 매개변수로 두면 \(t\)와 \(\tan f(t)\)가 모두 \(\theta\)의 식이 된다. \(f'(t)\)는 \(\tan f(t)=(\theta\text{의 식})\)을 \(t\)로 미분(음함수 미분)하고, \(\dfrac{d\theta}{dt}=\dfrac{1}{dt/d\theta}\)(역함수 미분)로 구한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(t\)를 \(\theta\)로 나타낸다</div>
    <p>\(t\)는 삼각형 \(\mathrm{OAP}\)의 넓이에서 부채꼴 \(\mathrm{OBP}\)의 넓이를 뺀 것이므로</p>
    $$
    t=\frac12\times5\times2\sin\theta-\frac12\times2^2\times\theta=5\sin\theta-2\theta,\qquad \frac{dt}{d\theta}=5\cos\theta-2.
    $$
    <p>점 \(\mathrm A\)에서 원에 그은 접선의 접점을 \(\mathrm T\)라 하면 \(\cos(\angle\mathrm{AOT})=\dfrac25\)이고, 직선이 원과 두 점에서 만나려면 \(\theta&lt;\angle\mathrm{AOT}\)이므로 \(\cos\theta&gt;\dfrac25\), 즉 \(\dfrac{dt}{d\theta}&gt;0\)이다. 따라서 \(\theta\)는 \(t\)의 증가함수로 볼 수 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\tan f(t)\)를 \(\theta\)로 나타낸다</div>
    <p>\(\angle\mathrm{OPQ}\)는 삼각형 \(\mathrm{OAP}\)의 꼭짓점 \(\mathrm P\)에서의 외각이므로 \(\angle\mathrm{OAP}=f(t)-\theta\), \(\angle\mathrm{OPA}=\pi-f(t)\)이다. 삼각형 \(\mathrm{OAP}\)에서 사인법칙을 쓰면</p>
    $$
    \frac{5}{\sin(\pi-f(t))}=\frac{2}{\sin(f(t)-\theta)},\qquad 5\sin(f(t)-\theta)=2\sin f(t).
    $$
    <p>덧셈정리로 전개하면 \(5\sin f(t)\cos\theta-5\cos f(t)\sin\theta=2\sin f(t)\)이므로</p>
    $$
    \tan f(t)=\frac{5\sin\theta}{5\cos\theta-2}.\qquad\cdots\cdots\ (\ast)
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=k\)일 때의 \(\theta\)</div>
    <p>\((\ast)\)에 \(\tan f(k)=\dfrac32\)를 넣으면 \(15\cos\theta-6=10\sin\theta\). 양변을 제곱하여 \(\sin^2\theta=1-\cos^2\theta\)를 쓰면</p>
    $$
    325\cos^2\theta-180\cos\theta-64=0,\qquad (5\cos\theta-4)(65\cos\theta+16)=0.
    $$
    <p>\(\cos\theta&gt;\dfrac25\)이므로 \(\cos\theta=\dfrac45\), \(\sin\theta=\dfrac35\)이다. (실제로 \(15\times\frac45-6=6=10\times\frac35\)로 원래 식도 만족한다.)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \((\ast)\)를 \(t\)로 미분한다</div>
    <p>좌변은 합성함수 미분, 우변은 몫의 미분법과 \(\dfrac{d\theta}{dt}\)를 써서</p>
    $$
    \sec^2 f(t)\cdot f'(t)=\frac{5\cos\theta(5\cos\theta-2)+25\sin^2\theta}{(5\cos\theta-2)^2}\cdot\frac{d\theta}{dt}
    =\frac{25-10\cos\theta}{(5\cos\theta-2)^2}\cdot\frac{d\theta}{dt}.
    $$
    <p>또 1단계의 \(t=5\sin\theta-2\theta\)에서 역함수의 미분법에 의해</p>
    $$
    \frac{d\theta}{dt}=\frac{1}{5\cos\theta-2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 값을 대입한다</div>
    <p>\(t=k\)에서 \(\sec^2f(k)=1+\tan^2f(k)=\dfrac{13}{4}\), \(\cos\theta=\dfrac45\)이므로 \(25-10\cos\theta=17\), \(5\cos\theta-2=2\), \(\dfrac{d\theta}{dt}=\dfrac12\).</p>
    $$
    \frac{13}{4}f'(k)=\frac{17}{4}\times\frac12=\frac{17}{8},\qquad f'(k)=\frac{17}{8}\times\frac4{13}=\frac{17}{26}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2027_mock09/calculus/q29": { answer: 81, html: String.raw`
  <div class="sol-box">급수가 수렴하려면 \(|r|&lt;1\)이어야 하고, 그러면 \(|a_n|\)이 감소하므로 \(|a_n|\ge10\)인 항은 앞의 몇 개뿐이다. 그 개수를 조건 (가)·(나)로 좁힌다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 공비의 범위</div>
    <p>공비를 \(r\)라 하면 \(a_2=a_1r&lt;0\), \(a_1&gt;0\)에서 \(r&lt;0\).
       (나)에서 \(\lim\limits_{n\to\infty}b_n=0\)이어야 한다. 만약 \(r\le-1\)이면 \(a_{2n}=a_1r^{2n-1}\le-a_1\)이므로
       \(b_{2n}\)은 \(a_{2n}-a_1\le-2a_1\) 또는 \((a_{2n})^2\ge a_1^2\)이 되어 \(0\)에 가까워질 수 없다. 따라서 \(-1&lt;r&lt;0\)이고,
       \(|a_n|=a_1|r|^{n-1}\)은 감소하면서 \(0\)에 수렴한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(|a_3|&lt;10\)</div>
    <p>\(|a_3|\ge10\)이면 \(|a_1|,|a_2|\ge10\)도 성립하여 \(b_3=a_3-a_1=a_1(r^2-1)&lt;0\)인데, (가)에서 \(b_3=\dfrac{(b_2)^2}{36}\ge0\)이어야 하므로 모순이다.
       따라서 \(|a_3|&lt;10\)이고 \(b_3=(a_3)^2=a_1^2r^4\), 그리고 \(n\ge3\)에서 \(b_n=(a_n)^2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(|a_2|\ge10\)</div>
    <p>\(|a_2|&lt;10\)이면 \(b_2=(a_2)^2=a_1^2r^2\)이고 (가)에서</p>
    $$
    a_1^4r^4=36a_1^2r^4,\qquad a_1^2=36,\qquad a_1=6.
    $$
    <p>이때 모든 \(n\)에 대해 \(|a_n|\le6&lt;10\)이므로 \(\sum\limits_{n=1}^{\infty}b_n=\dfrac{36}{1-r^2}&gt;36\)이 되어 (나)에 모순이다.
       그러므로 \(|a_1|\ge|a_2|\ge10&gt;|a_3|\)이고</p>
    $$
    b_1=0,\qquad b_2=a_2-a_1=a_1(r-1),\qquad b_n=(a_n)^2\ (n\ge3).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 공비 \(r\)</div>
    <p>(가)에서 \(a_1^2(r-1)^2=36a_1^2r^4\), 즉 \((1-r)^2=(6r^2)^2\). \(1-r&gt;0\), \(6r^2&gt;0\)이므로</p>
    $$
    1-r=6r^2,\qquad 6r^2+r-1=(3r-1)(2r+1)=0,\qquad r=-\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 첫째항 \(a_1\)</div>
    <p>\(n\ge3\)에서 \(b_n\)은 첫째항 \(b_3=\dfrac{a_1^2}{16}\), 공비 \(r^2=\dfrac14\)인 등비수열이므로 (나)에서</p>
    $$
    0+a_1\left(-\frac32\right)+\frac{\frac{a_1^2}{16}}{1-\frac14}=-\frac32a_1+\frac{a_1^2}{12}=12,
    $$
    $$
    a_1^2-18a_1-144=0,\qquad (a_1-24)(a_1+6)=0,\qquad a_1=24.
    $$
    <p>확인: \(|a_2|=12\ge10\), \(|a_3|=6&lt;10\)으로 3단계의 가정과 맞는다.</p>
  </div>
  <div class="sol-final">\(a_4=24\times\left(-\dfrac18\right)=-3,\ a_6=24\times\left(-\dfrac1{32}\right)=-\dfrac34\)이므로 \(36\times a_4\times a_6=36\times\dfrac94=\mathbf{81}\)</div>
` },

"2027_mock09/calculus/q30": { answer: 49, html: String.raw`
  <div class="sol-box">두 적분 모두 \(x=f(u)\)로 치환하면 \(g\)가 사라진다. 남는 \(\displaystyle\int f\) 꼴의 두 적분은 직접 계산할 수 없지만, \(\cos\pi x\)의 주기성 때문에 서로 상쇄된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f\)는 증가함수</div>
    $$
    f'(x)=2^{2x+\frac12\cos\pi x}\ln2\left(2-\frac{\pi}{2}\sin\pi x\right)&gt;0\quad\left(\because\ \frac\pi2&lt;2\right)
    $$
    <p>이므로 \(f\)는 일대일이고 역함수 \(g\)가 있다. 또 \(f(1)=2^{2-\frac12}=2\sqrt2\), \(f(3)=2^{6-\frac12}=32\sqrt2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 첫째 적분: \(x=f(u)\)로 치환한 뒤 부분적분</div>
    <p>\(dx=f'(u)\,du\), \(g(f(u))=u\)이고 \(x:f(1)\to f(3)\)일 때 \(u:1\to3\)이므로</p>
    $$
    \frac14\int_{f(1)}^{f(3)}g(x)\,dx=\frac14\int_1^3u\,f'(u)\,du
    =\frac14\Big[u\,f(u)\Big]_1^3-\frac14\int_1^3f(u)\,du
    =\frac14\{3f(3)-f(1)\}-\frac14\int_1^3f(u)\,du.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 둘째 적분: 같은 치환</div>
    <p>\(x=f(u)\)이면 \(g(x)=u\)이고, \(g(f(u))=u\)의 양변을 미분하면 \(g'(x)f'(u)=1\)이므로 \(g'(x)\,dx=du\)이다. \(x:f(0)\to f(2)\)일 때 \(u:0\to2\)이므로</p>
    $$
    \int_{f(0)}^{f(2)}\frac{2^{4g(x)}g'(x)}{x}\,dx=\int_0^2\frac{2^{4u}}{f(u)}\,du
    =\int_0^2 2^{4u-2u-\frac12\cos\pi u}\,du=\int_0^2 2^{2u-\frac12\cos\pi u}\,du.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 평행이동으로 \(\displaystyle\int f\) 꼴을 맞춘다</div>
    <p>3단계 결과에서 \(u=v-1\)로 놓으면 \(\cos\pi(v-1)=-\cos\pi v\), \(2u=2v-2\)이므로</p>
    $$
    \int_0^2 2^{2u-\frac12\cos\pi u}\,du=\int_1^3 2^{2v-2+\frac12\cos\pi v}\,dv=\frac14\int_1^3 f(v)\,dv.
    $$
    <p>이것은 2단계의 \(-\dfrac14\displaystyle\int_1^3f(u)\,du\)와 정확히 상쇄된다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 값을 구한다</div>
    $$
    (\text{좌변})=\frac14\{3f(3)-f(1)\}=\frac14\left(96\sqrt2-2\sqrt2\right)=\frac{47}{2}\sqrt2.
    $$
    <p>\(p=2\), \(q=47\)은 서로소이다.</p>
  </div>
  <div class="sol-final">\(p+q=2+47=\mathbf{49}\)</div>
` },
