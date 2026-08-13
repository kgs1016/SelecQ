"2024_mock06/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 같은 것이 있는 순열의 수를 쓴다</div>
    <p>다섯 개 중 \(a\)가 \(2\)개로 같으므로, 다섯 개를 모두 다르다고 보고 센 \(5!\)을 \(a\)끼리 자리를 바꾼 \(2!\)로 나눈다.</p>
    $$
    \frac{5!}{2!}=5\times4\times3=60.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock06/prob_stat/q28": { answer: 5, html: String.raw`
  <div class="sol-box">조건 (가)는 \(f(1),f(3),f(5)\)가 모두 홀수라는 뜻이다. 따라서 치역에 들어가는 <b>홀수의 개수</b>로 나누면 경우가 깔끔하게 갈린다. 조건 (나)는 \(f(2)\ne f(4)\)이면서 순서가 하나로 정해진다는 뜻이므로, 두 값을 <b>집합으로 고르기만</b> 하면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건을 정리한다</div>
    <p>세 수의 곱이 홀수이려면 셋 다 홀수여야 하므로 \(f(1),f(3),f(5)\in\{1,3,5\}\)이다. 또 \(f(2)&lt;f(4)\)이므로 두 값은 서로 다르고, 값의 쌍을 정하면 순서는 저절로 결정된다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 치역에 홀수가 \(1\)개인 경우</div>
    <p>홀수 하나를 고르는 경우가 \({}_3\mathrm C_1=3\)이고 \(f(1)=f(3)=f(5)\)이다. 치역이 \(3\)개이려면 \(f(2),f(4)\)가 나머지 두 원소를 만들어야 하는데 둘 다 짝수여야 하므로 \(\{f(2),f(4)\}=\{2,4\}\), 즉 \(f(2)=2,\ f(4)=4\)로 하나뿐이다.</p>
    $$
    3\times1=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 치역에 홀수가 \(2\)개인 경우</div>
    <p>홀수 두 개를 고르는 경우가 \({}_3\mathrm C_2=3\)이고, 치역의 남은 한 자리는 짝수 \(2\) 또는 \(4\)이다.</p>
    <p>ⅰ) \(f(1),f(3),f(5)\)가 한 값만 가질 때 : 그 값을 고르는 \(2\)가지. 나머지 홀수와 짝수가 \(f(2),f(4)\)에서 나와야 하므로 짝수를 고르는 \(2\)가지.</p>
    <p>ⅱ) \(f(1),f(3),f(5)\)가 두 값을 모두 가질 때 : \({}_2\Pi_3-2=6\)가지. 짝수를 고르는 \(2\)가지와, \(f(2),f(4)\) 중 짝수가 아닌 쪽에 올 홀수를 고르는 \(2\)가지.</p>
    $$
    3\times(2\times2+6\times2\times2)=3\times28=84.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 치역에 홀수가 \(3\)개인 경우</div>
    <p>치역은 \(\{1,3,5\}\)이고 \(f(2),f(4)\)도 홀수이다.</p>
    <p>ⅰ) \(f(1),f(3),f(5)\)가 한 값일 때 : \(3\)가지. 나머지 두 홀수가 \(f(2),f(4)\)로 정해져 \(1\)가지.</p>
    <p>ⅱ) 두 값일 때 : \({}_3\mathrm C_2\times({}_2\Pi_3-2)=3\times6=18\)가지. 빠진 홀수가 반드시 \(f(2),f(4)\)에 들어가야 하므로 짝은 \(2\)가지.</p>
    <p>ⅲ) 세 값일 때 : \(3!=6\)가지. \(f(2),f(4)\)는 세 홀수 중 둘을 고르는 \({}_3\mathrm C_2=3\)가지.</p>
    $$
    3\times1+18\times2+6\times3=3+36+18=57.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 모두 더한다</div>
    $$
    3+84+57=144.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_mock06/calculus/q23": { answer: 5, html: String.raw`
  <div class="sol-box">\(\infty-\infty\) 꼴이므로 유리화한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 유리화한다</div>
    $$
    \sqrt{n^2+9n}-\sqrt{n^2+4n}
    =\frac{(n^2+9n)-(n^2+4n)}{\sqrt{n^2+9n}+\sqrt{n^2+4n}}
    =\frac{5n}{\sqrt{n^2+9n}+\sqrt{n^2+4n}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 분자와 분모를 \(n\)으로 나눈다</div>
    $$
    \lim_{n\to\infty}\frac{5}{\sqrt{1+\frac9n}+\sqrt{1+\frac4n}}=\frac{5}{1+1}=\frac52.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_mock06/calculus/q24": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(t\)로 각각 미분한다</div>
    $$
    \frac{dx}{dt}=\frac{5(t^2+1)-5t\times2t}{(t^2+1)^2}=\frac{-5t^2+5}{(t^2+1)^2},
    $$
    $$
    \frac{dy}{dt}=\frac{3}{t^2+1}\times2t=\frac{6t}{t^2+1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 매개변수로 나타낸 함수의 미분법을 쓴다</div>
    $$
    \frac{dy}{dx}=\frac{\frac{dy}{dt}}{\frac{dx}{dt}}
    =\frac{6t}{t^2+1}\times\frac{(t^2+1)^2}{-5t^2+5}
    =\frac{6t(t^2+1)}{-5t^2+5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=2\)를 대입한다</div>
    $$
    \frac{6\times2\times(2^2+1)}{-5\times2^2+5}=\frac{60}{-15}=-4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_mock06/calculus/q25": { answer: 1, html: String.raw`
  <div class="sol-box">분모가 \(0\)으로 가는데 극한값이 있으므로 분자도 \(0\)으로 가야 한다. 여기서 \(b\)가 먼저 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(b\)를 구한다</div>
    <p>\(x\to0\)일 때 \(2^{bx}-1\to0\)이고 극한값이 존재하므로 \(2^{ax+b}-8\to0\)이어야 한다. 이 함수는 연속이므로</p>
    $$
    2^{b}-8=0,\qquad b=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\lim\limits_{x\to0}\dfrac{2^{x}-1}{x}=\ln2\) 꼴로 맞춘다</div>
    $$
    \lim_{x\to0}\frac{2^{ax+3}-8}{2^{3x}-1}
    =\lim_{x\to0}\frac{8(2^{ax}-1)}{2^{3x}-1}
    =\frac{8a}{3}\times\lim_{x\to0}\frac{\frac{2^{ax}-1}{ax}}{\frac{2^{3x}-1}{3x}}
    =\frac{8a}{3}\times\frac{\ln2}{\ln2}=\frac{8a}{3}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구한다</div>
    $$
    \frac{8a}{3}=16,\qquad a=6,\qquad a+b=6+3=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_mock06/calculus/q26": { answer: 2, html: String.raw`
  <div class="sol-box">\(t\)를 분리해 놓으면 "곡선과 가로선의 교점이 \(2\)개"가 되는 \(t\)는 극값뿐이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 함수를 정하고 극점을 찾는다</div>
    <p>\(f(x)=x^2-5x+2\ln x\ (x&gt;0)\)라 하면</p>
    $$
    f'(x)=2x-5+\frac2x=\frac{2x^2-5x+2}{x}=\frac{(2x-1)(x-2)}{x}.
    $$
    <p>따라서 \(f\)는 \(x=\dfrac12\)에서 극대, \(x=2\)에서 극소이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극값을 구한다</div>
    $$
    f\!\left(\frac12\right)=\frac14-\frac52+2\ln\frac12=-\frac94-2\ln2,
    $$
    $$
    f(2)=4-10+2\ln2=-6+2\ln2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 교점이 \(2\)개일 \(t\)를 고른다</div>
    <p>\(x\to0+\)에서 \(f(x)\to-\infty\), \(x\to\infty\)에서 \(f(x)\to\infty\)이고 그래프는 극대와 극소를 하나씩 거치므로, 직선 \(y=t\)와의 교점이 \(2\)개인 것은 \(t\)가 극댓값이거나 극솟값일 때뿐이다.</p>
    $$
    \left(-\frac94-2\ln2\right)+(-6+2\ln2)=-\frac{33}{4}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock06/calculus/q27": { answer: 3, html: String.raw`
  <div class="sol-box">두 직선이 이루는 각은 <b>탄젠트의 덧셈정리</b>로 바로 쓸 수 있다. 그다음은 \(\pi-t=x\)로 바꿔 \(x\to0+\)의 익숙한 극한으로 만든다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\tan\theta\)를 \(t\)로 나타낸다</div>
    <p>\(y=\sin x\)에서 \(y'=\cos x\)이므로 점 \(\mathrm P(t,\sin t)\)에서의 접선의 기울기는 \(\cos t\)이다. 기울기가 \(\cos t\)와 \(-1\)인 두 직선이 이루는 예각이 \(\theta\)이므로</p>
    $$
    \tan\theta=\left|\frac{\cos t-(-1)}{1+\cos t\times(-1)}\right|=\left|\frac{\cos t+1}{1-\cos t}\right|.
    $$
    <p>\(0&lt;t&lt;\pi\)에서 \(\cos t+1&gt;0\), \(1-\cos t&gt;0\)이므로 절댓값을 벗길 수 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\pi-t=x\)로 바꾼다</div>
    <p>\(t\to\pi-\)일 때 \(x\to0+\)이고 \(\cos t=\cos(\pi-x)=-\cos x\)이므로</p>
    $$
    \lim_{t\to\pi-}\frac{\tan\theta}{(\pi-t)^2}
    =\lim_{x\to0+}\frac{1-\cos x}{x^2(1+\cos x)}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 분자를 유리화해 계산한다</div>
    $$
    \lim_{x\to0+}\frac{1-\cos^2x}{x^2(1+\cos x)^2}
    =\lim_{x\to0+}\left\{\left(\frac{\sin x}{x}\right)^2\times\frac{1}{(1+\cos x)^2}\right\}
    =1^2\times\frac1{2^2}=\frac14.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },
