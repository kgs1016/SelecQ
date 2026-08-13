"2023_csat/calculus/q23": { answer: 4, html: String.raw`
  <div class="sol-box">\(\dfrac00\) 꼴이다. 분모를 유리화하고 \(\lim\limits_{x\to0}\dfrac{\ln(1+x)}{x}=1\)을 쓸 수 있게 모양을 맞춘다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분모를 유리화한다</div>
    $$
    \frac{\ln(x+1)}{\sqrt{x+4}-2}
    =\frac{\ln(x+1)\left(\sqrt{x+4}+2\right)}{(x+4)-4}
    =\frac{\ln(x+1)}{x}\times\left(\sqrt{x+4}+2\right).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    $$
    \lim_{x\to0}\frac{\ln(x+1)}{\sqrt{x+4}-2}=1\times(2+2)=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_csat/calculus/q24": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 정적분으로 바꾼다</div>
    <p>\(\dfrac{k}{n}\)을 \(x\)로, \(\dfrac1n\)을 \(dx\)로 보면</p>
    $$
    \lim_{n\to\infty}\frac1n\sum_{k=1}^{n}\sqrt{1+\frac{3k}{n}}=\int_0^1\sqrt{1+3x}\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 계산한다</div>
    $$
    \int_0^1(1+3x)^{\frac12}dx=\left[\frac{2}{9}(1+3x)^{\frac32}\right]_0^1=\frac29(8-1)=\frac{14}{9}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_csat/calculus/q25": { answer: 5, html: String.raw`
  <div class="sol-box">분모의 주도항은 \(2^{2n-1}=\dfrac{4^n}{2}\)이다. 분자와 분모를 \(4^n\)으로 나누면 공비 \(r\)가 어떤 값이어야 하는지 바로 보인다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(4^n\)으로 나눈다</div>
    <p>첫째항을 \(a\), 공비를 \(r\)라 하면 \(a_n=ar^{\,n-1}\)이고</p>
    $$
    \frac{a_n+1}{3^n+2^{2n-1}}
    =\frac{\dfrac{a}{4}\left(\dfrac r4\right)^{n-1}+\left(\dfrac14\right)^{n}}
           {\left(\dfrac34\right)^{n}+\dfrac12}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 공비를 확정한다</div>
    <p>분모는 \(\dfrac12\)로 수렴하고 분자의 \(\left(\dfrac14\right)^{n}\)은 \(0\)으로 가므로, 극한값은 \(\left(\dfrac r4\right)^{n-1}\)의 거동으로 결정된다.</p>
    <p>\(|r|&lt;4\)이면 극한값이 \(0\)이 되어 \(3\)이 될 수 없고, \(|r|&gt;4\)이거나 \(r=-4\)이면 수렴하지 않는다. 따라서 \(r=4\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 첫째항을 구해 \(a_2\)를 계산한다</div>
    $$
    \lim_{n\to\infty}\frac{a_n+1}{3^n+2^{2n-1}}=\frac{\frac a4}{\frac12}=\frac a2=3,\qquad a=6,
    $$
    $$
    a_2=ar=6\times4=24.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_csat/calculus/q26": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 단면의 넓이를 쓴다</div>
    <p>\(x=t\)에서의 단면은 한 변의 길이가 \(\sqrt{\sec^2 t+\tan t}\)인 정사각형이므로</p>
    $$
    S(t)=\left(\sqrt{\sec^2 t+\tan t}\right)^2=\sec^2 t+\tan t.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부피를 적분으로 나타낸다</div>
    $$
    V=\int_0^{\frac\pi3}(\sec^2 x+\tan x)\,dx.
    $$
    <p>\(\displaystyle\int\sec^2 x\,dx=\tan x\)이고, \(\tan x=\dfrac{\sin x}{\cos x}\)에서 분자가 분모를 미분한 것의 \(-1\)배이므로 \(\displaystyle\int\tan x\,dx=-\ln|\cos x|\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 계산한다</div>
    $$
    V=\Big[\tan x-\ln|\cos x|\Big]_0^{\frac\pi3}
    =\tan\frac\pi3-\ln\cos\frac\pi3
    =\sqrt3-\ln\frac12=\sqrt3+\ln 2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_csat/calculus/q27": { answer: 2, html: String.raw`
  <div class="sol-box">등비급수 도형 문제는 <b>첫 도형의 넓이 \(S_1\)</b>과 <b>닮음비</b> 두 가지만 구하면 끝난다. 닮음비는 \(\overline{\mathrm{OQ_1}}\)이 다음 부채꼴의 반지름이라는 데서 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 직사각형의 두 변을 구한다</div>
    <p>\(\overline{\mathrm{OC_1}}=3t,\ \overline{\mathrm{OD_1}}=4t\ (t&gt;0)\)라 하면 직사각형의 대각선 \(\overline{\mathrm{OP_1}}\)이 부채꼴의 반지름이므로</p>
    $$
    \overline{\mathrm{OP_1}}=\sqrt{(3t)^2+(4t)^2}=5t=1,\qquad t=\frac15.
    $$
    <p>따라서 \(\overline{\mathrm{OC_1}}=\dfrac35\), \(\overline{\mathrm{C_1P_1}}=\overline{\mathrm{OD_1}}=\dfrac45\)이고</p>
    $$
    \overline{\mathrm{A_1C_1}}=1-\frac35=\frac25.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(S_1\)을 구한다</div>
    <p>직각삼각형 \(\mathrm{A_1C_1P_1}\)에서</p>
    $$
    \overline{\mathrm{A_1P_1}}=\sqrt{\left(\frac25\right)^2+\left(\frac45\right)^2}=\frac{2}{\sqrt5}.
    $$
    <p>삼각형 \(\mathrm{P_1Q_1A_1}\)은 빗변이 \(\overline{\mathrm{A_1P_1}}\)인 직각이등변삼각형이므로 나머지 두 변의 길이는 \(\dfrac{2}{\sqrt5}\times\dfrac{1}{\sqrt2}=\dfrac{\sqrt2}{\sqrt5}\)이고</p>
    $$
    S_1=\frac12\times\left(\frac{\sqrt2}{\sqrt5}\right)^2=\frac15.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\overline{\mathrm{OQ_1}}\)을 구해 닮음비를 얻는다</div>
    <p>\(\overline{\mathrm{A_1P_1}}\)의 중점을 \(\mathrm{M}\)이라 하자. 삼각형 \(\mathrm{P_1Q_1A_1}\)이 이등변삼각형이므로 \(\overline{\mathrm{Q_1M}}\perp\overline{\mathrm{A_1P_1}}\)이고, \(\overline{\mathrm{OA_1}}=\overline{\mathrm{OP_1}}=1\)이라 삼각형 \(\mathrm{OA_1P_1}\)도 이등변삼각형이어서 \(\overline{\mathrm{OM}}\perp\overline{\mathrm{A_1P_1}}\)이다. 따라서 세 점 \(\mathrm{O},\ \mathrm{Q_1},\ \mathrm{M}\)은 한 직선 위에 있다.</p>
    $$
    \overline{\mathrm{A_1M}}=\frac12\times\frac{2}{\sqrt5}=\frac{1}{\sqrt5},\qquad
    \overline{\mathrm{OM}}=\sqrt{1^2-\left(\frac{1}{\sqrt5}\right)^2}=\frac{2}{\sqrt5}.
    $$
    <p>직각인 꼭짓점에서 빗변의 중점까지의 거리는 빗변의 절반이므로 \(\overline{\mathrm{Q_1M}}=\dfrac{1}{\sqrt5}\)이고</p>
    $$
    \overline{\mathrm{OQ_1}}=\overline{\mathrm{OM}}-\overline{\mathrm{Q_1M}}=\frac{2}{\sqrt5}-\frac{1}{\sqrt5}=\frac{1}{\sqrt5}.
    $$
    <p>다음 부채꼴의 반지름이 \(\overline{\mathrm{OQ_1}}=\dfrac{1}{\sqrt5}\)이므로 닮음비는 \(1:\dfrac{1}{\sqrt5}\), 넓이의 비는 \(1:\dfrac15\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 등비급수의 합을 구한다</div>
    $$
    \lim_{n\to\infty}S_n=\frac{\frac15}{1-\frac15}=\frac14.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_csat/calculus/q28": { answer: 2, html: String.raw`
  <div class="sol-box">\(f\)와 \(g\)를 \(\theta\)로 나타낸 뒤 \(3f-2g\)를 인수분해하면, \(\theta\to0\)에서 \(\theta^2\)만큼 작아지는 구조가 그대로 드러난다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f(\theta)\)를 구한다</div>
    <p>\(\overline{\mathrm{OA}}=\overline{\mathrm{OP}}=1\)이므로 삼각형 \(\mathrm{OAP}\)는 이등변삼각형이고 \(\angle\mathrm{OPA}=\angle\mathrm{OAP}=\theta\)이다. \(\angle\mathrm{BOP}\)는 이 삼각형의 외각이므로</p>
    $$
    \angle\mathrm{BOP}=2\theta,\qquad
    f(\theta)=\frac12\times1\times1\times\sin2\theta=\frac12\sin2\theta.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사각형 \(\mathrm{CQRS}\)가 사다리꼴임을 확인한다</div>
    <p>\(\overline{\mathrm{PB}}=\overline{\mathrm{QC}}\)이므로 두 현에 대한 중심각이 같아 \(\angle\mathrm{COQ}=\angle\mathrm{BOP}=2\theta\)이다. 삼각형 \(\mathrm{OCQ}\)는 \(\overline{\mathrm{OC}}=\overline{\mathrm{OQ}}=1\)인 이등변삼각형이므로</p>
    $$
    \angle\mathrm{SCQ}=\frac{\pi-2\theta}{2}=\frac\pi2-\theta.
    $$
    <p>또 직각삼각형 \(\mathrm{AOS}\)에서 \(\angle\mathrm{ASO}=\dfrac\pi2-\theta\)이므로 그 대각인 \(\angle\mathrm{CSR}=\dfrac\pi2+\theta\)이고, 사각형의 내각의 합에서</p>
    $$
    \angle\mathrm{QRS}=2\pi-\left(\frac\pi2-\theta\right)-\frac\pi2-\left(\frac\pi2+\theta\right)=\frac\pi2.
    $$
    <p>\(\angle\mathrm{CQR}=\angle\mathrm{QRS}=\dfrac\pi2\)이므로 \(\overline{\mathrm{CQ}}\parallel\overline{\mathrm{RS}}\), 즉 \(\mathrm{CQRS}\)는 사다리꼴이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 세 변의 길이를 \(\theta\)로 나타낸다</div>
    <p>\(\overline{\mathrm{OS}}=\overline{\mathrm{OA}}\tan\theta=\tan\theta\)이므로 \(\overline{\mathrm{CS}}=1-\tan\theta\)이다. 점 \(\mathrm{S}\)에서 \(\overline{\mathrm{CQ}}\)에 내린 수선의 발을 \(\mathrm{H}\)라 하면 \(\angle\mathrm{CSH}=\theta\)이므로</p>
    $$
    \overline{\mathrm{QR}}=\overline{\mathrm{SH}}=(1-\tan\theta)\cos\theta,\qquad
    \overline{\mathrm{CH}}=(1-\tan\theta)\sin\theta.
    $$
    <p>중심각이 \(2\theta\)인 현이므로 \(\overline{\mathrm{CQ}}=\overline{\mathrm{PB}}=2\sin\theta\)이고</p>
    $$
    \overline{\mathrm{RS}}=\overline{\mathrm{QH}}=\overline{\mathrm{CQ}}-\overline{\mathrm{CH}}
    =2\sin\theta-(\sin\theta-\sin\theta\tan\theta)=\sin\theta+\sin\theta\tan\theta.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(3f-2g\)를 인수분해한다</div>
    $$
    g(\theta)=\frac12\left(\overline{\mathrm{CQ}}+\overline{\mathrm{RS}}\right)\overline{\mathrm{QR}}
    =\frac12(3\sin\theta+\sin\theta\tan\theta)(1-\tan\theta)\cos\theta,
    $$
    $$
    3f(\theta)-2g(\theta)=3\sin\theta\cos\theta-\sin\theta\cos\theta(3+\tan\theta)(1-\tan\theta).
    $$
    <p>\((3+\tan\theta)(1-\tan\theta)=3-2\tan\theta-\tan^2\theta\)이므로 공통인수 \(\sin\theta\cos\theta\)를 묶은 나머지는</p>
    $$
    3-(3-2\tan\theta-\tan^2\theta)=\tan\theta(\tan\theta+2),
    $$
    $$
    3f(\theta)-2g(\theta)=\sin\theta\cos\theta\tan\theta(\tan\theta+2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 극한값을 구한다</div>
    $$
    \lim_{\theta\to0+}\frac{3f(\theta)-2g(\theta)}{\theta^2}
    =\lim_{\theta\to0+}\left\{\frac{\sin\theta}{\theta}\times\frac{\tan\theta}{\theta}\times\cos\theta\times(\tan\theta+2)\right\}
    =1\times1\times1\times2=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },
