"2024_csat/prob_stat/q28": { answer: 4, html: String.raw`
  <div class="sol-box">카드에 따라 <b>넣는 공의 개수</b>가 \(1,2,2,3\)이고 <b>검은 공의 개수</b>가 \(0,1,1,1\)이다. 공이 \(8\)개가 되는 조합을 먼저 나열하면 각 경우의 검은 공 개수가 저절로 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 공이 \(8\)개가 되는 조합을 찾는다</div>
    <p>한 번의 시행에서 넣는 공은 카드 \(1\)이면 \(1\)개, 카드 \(2\) 또는 \(3\)이면 \(2\)개, 카드 \(4\)이면 \(3\)개이다. 네 번의 합이 \(8\)이 되는 경우는</p>
    $$
    8=3+3+1+1,\qquad 8=3+2+2+1,\qquad 8=2+2+2+2
    $$
    <p>뿐이다. 상자 \(\mathrm B\)에 들어 있는 공의 개수가 \(8\)인 사건을 \(E\), 검은 공의 개수가 \(2\)인 사건을 \(F\)라 하자.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 각 경우의 확률과 검은 공 개수</div>
    <p>ⅰ) \(3+3+1+1\) : 카드 \(4\)를 두 번, 카드 \(1\)을 두 번. 검은 공은 \(2\)개이다.</p>
    $$
    \frac{4!}{2!\times2!}\times\left(\frac14\right)^2\left(\frac14\right)^2=6\times\left(\frac14\right)^4.
    $$
    <p>ⅱ) \(3+2+2+1\) : 카드 \(4\)를 한 번, 카드 \(2\) 또는 \(3\)을 두 번, 카드 \(1\)을 한 번. 검은 공은 \(3\)개이다.</p>
    $$
    \frac{4!}{2!}\times\frac14\times\left(\frac24\right)^2\times\frac14=48\times\left(\frac14\right)^4.
    $$
    <p>ⅲ) \(2+2+2+2\) : 카드 \(2\) 또는 \(3\)을 네 번. 검은 공은 \(4\)개이다.</p>
    $$
    \left(\frac24\right)^4=16\times\left(\frac14\right)^4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건부확률을 구한다</div>
    <p>검은 공이 \(2\)개인 것은 ⅰ)뿐이므로</p>
    $$
    \mathrm P(E)=(6+48+16)\left(\frac14\right)^4=70\left(\frac14\right)^4,\qquad
    \mathrm P(E\cap F)=6\left(\frac14\right)^4,
    $$
    $$
    \mathrm P(F\mid E)=\frac{6}{70}=\frac3{35}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_csat/calculus/q23": { answer: 3, html: String.raw`
  <div class="sol-box">\(\lim\limits_{x\to0}\dfrac{\ln(1+x)}{x}=1\)을 쓸 수 있게 분자와 분모를 각각 \(3x\), \(5x\)로 맞춘다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 꼴을 맞춘다</div>
    $$
    \frac{\ln(1+3x)}{\ln(1+5x)}
    =\frac35\times\frac{\ \dfrac{\ln(1+3x)}{3x}\ }{\ \dfrac{\ln(1+5x)}{5x}\ }.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    $$
    \lim_{x\to0}\frac{\ln(1+3x)}{\ln(1+5x)}=\frac35\times\frac11=\frac35.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_csat/calculus/q24": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(t\)로 각각 미분한다</div>
    $$
    x=\ln(t^3+1)\ \Longrightarrow\ \frac{dx}{dt}=\frac{3t^2}{t^3+1},
    $$
    $$
    y=\sin\pi t\ \Longrightarrow\ \frac{dy}{dt}=\pi\cos\pi t.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 매개변수로 나타낸 함수의 미분법을 쓴다</div>
    $$
    \frac{dy}{dx}=\frac{\pi\cos\pi t}{\frac{3t^2}{t^3+1}}=\frac{\pi(t^3+1)\cos\pi t}{3t^2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=1\)을 대입한다</div>
    $$
    \frac{\pi\times2\times(-1)}{3}=-\frac23\pi.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_csat/calculus/q25": { answer: 4, html: String.raw`
  <div class="sol-box">역함수 관계를 미분하면 \(g'(f(x))f'(x)=1\)이 나온다. 이걸 넣으면 피적분함수가 \(\dfrac{f'(x)}{f(x)}\)가 되어 로그로 적분된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 역함수 관계를 미분한다</div>
    <p>모든 양수 \(x\)에 대하여 \(g(f(x))=x\)이므로 양변을 \(x\)에 대하여 미분하면</p>
    $$
    g'(f(x))f'(x)=1.
    $$
    <p>또 \(g\)의 정의역이 양의 실수 전체이므로 그 역함수 \(f\)의 치역도 양의 실수 전체이고, 따라서 모든 양수 \(x\)에서 \(f(x)&gt;0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분을 계산한다</div>
    $$
    \int_1^{a}\frac{1}{g'(f(x))f(x)}\,dx=\int_1^{a}\frac{f'(x)}{f(x)}\,dx
    =\Big[\ln|f(x)|\Big]_1^{a}=\ln f(a)-\ln f(1).
    $$
    <p>\(f(1)=8\)이므로 이 값은 \(\ln f(a)-3\ln2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(a)\)를 구한다</div>
    $$
    \ln f(a)-3\ln2=2\ln a+\ln(a+1)-\ln2,
    $$
    $$
    \ln f(a)=\ln a^2+\ln(a+1)+\ln 2^2=\ln\{4a^2(a+1)\},
    $$
    $$
    f(a)=4a^2(a+1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(f(2)\)를 구한다</div>
    $$
    f(2)=4\times4\times3=48.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_csat/calculus/q26": { answer: 3, html: String.raw`
  <div class="sol-box">단면이 정사각형이므로 넓이가 \((1-2x)\cos x\)이고, 부피는 그것을 그대로 적분한 값이다. 부분적분으로 계산한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부피를 정적분으로 쓴다</div>
    $$
    V=\int_{\frac34\pi}^{\frac54\pi}(1-2x)\cos x\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부분적분한다</div>
    <p>\(u=1-2x\), \(v'=\cos x\)로 두면 \(u'=-2\), \(v=\sin x\)이므로</p>
    $$
    V=\Big[(1-2x)\sin x\Big]_{\frac34\pi}^{\frac54\pi}+2\int_{\frac34\pi}^{\frac54\pi}\sin x\,dx
    =\Big[(1-2x)\sin x\Big]_{\frac34\pi}^{\frac54\pi}+2\Big[-\cos x\Big]_{\frac34\pi}^{\frac54\pi}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 값을 대입한다</div>
    <p>\(\sin\dfrac54\pi=-\dfrac{\sqrt2}{2}\), \(\sin\dfrac34\pi=\dfrac{\sqrt2}{2}\), \(\cos\dfrac54\pi=\cos\dfrac34\pi=-\dfrac{\sqrt2}{2}\)이므로</p>
    $$
    V=\left(1-\frac52\pi\right)\left(-\frac{\sqrt2}{2}\right)-\left(1-\frac32\pi\right)\frac{\sqrt2}{2}
    +2\left(\frac{\sqrt2}{2}-\frac{\sqrt2}{2}\right),
    $$
    $$
    =-\frac{\sqrt2}{2}\left\{\left(1-\frac52\pi\right)+\left(1-\frac32\pi\right)\right\}
    =-\frac{\sqrt2}{2}(2-4\pi)=2\sqrt2\pi-\sqrt2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_csat/calculus/q27": { answer: 1, html: String.raw`
  <div class="sol-box">접점을 \(s\)로 두면 \(t\)와 \(f(t)\)가 모두 \(s\)의 식이 된다. 두 식을 \(s\)로 미분해 \(\dfrac{dt}{ds}\)를 없애면 \(f'(t)\)가 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접선이 원점을 지나는 조건을 쓴다</div>
    <p>\(y=e^{-x}+e^{t}\)에서 \(y'=-e^{-x}\)이므로 접점을 \((s,\ e^{-s}+e^{t})\)라 하면 접선은</p>
    $$
    y=-e^{-s}(x-s)+e^{-s}+e^{t}.
    $$
    <p>이 접선이 원점을 지나므로</p>
    $$
    se^{-s}+e^{-s}+e^{t}=0,\qquad e^{t}=-(s+1)e^{-s}.
    $$
    <p>또 접선의 기울기가 \(f(t)\)이므로 \(f(t)=-e^{-s}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 식을 \(s\)로 미분한다</div>
    $$
    e^{t}\frac{dt}{ds}=-e^{-s}+(s+1)e^{-s}=se^{-s},
    $$
    $$
    f'(t)\frac{dt}{ds}=e^{-s}.
    $$
    <p>두 식을 나누면 \(\dfrac{dt}{ds}\)가 사라져</p>
    $$
    \frac{e^{t}}{f'(t)}=s,\qquad f'(t)=\frac{e^{t}}{s}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(a)=-e\sqrt e\)에서 \(s\)를 구한다</div>
    $$
    -e^{-s}=-e\sqrt e=-e^{\frac32}\ \Longrightarrow\ s=-\frac32,
    $$
    $$
    e^{a}=-(s+1)e^{-s}=\frac12e^{\frac32}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(f'(a)\)를 구한다</div>
    $$
    f'(a)=\frac{e^{a}}{s}=\frac{\frac12e^{\frac32}}{-\frac32}=-\frac13e^{\frac32}=-\frac13e\sqrt e.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },
