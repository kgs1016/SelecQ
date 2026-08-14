"2027_mock06/calculus/q23": { answer: 4, html: String.raw`
  <div class="sol-box">밑이 큰 \(5^{n}\)이 지배하므로 분자·분모를 \(5^{n}\)으로 나눈다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(5^{n}\)으로 나눈다</div>
    $$
    \frac{4\times5^{n}-2^{\,n+1}}{5^{n}+2^{n}}=\frac{4-2\times\left(\frac25\right)^{n}}{1+\left(\frac25\right)^{n}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    <p>\(\left(\dfrac25\right)^{n}\to0\)이므로</p>
    $$
    \frac{4-0}{1+0}=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2027_mock06/calculus/q24": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 음함수의 미분법을 쓴다</div>
    <p>\(2x+\sqrt y=xy\)의 양변을 \(x\)에 대하여 미분하면</p>
    $$
    2+\frac1{2\sqrt y}\frac{dy}{dx}=y+x\frac{dy}{dx}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\dfrac{dy}{dx}\)에 대해 푼다</div>
    $$
    \left(x-\frac1{2\sqrt y}\right)\frac{dy}{dx}=2-y,\qquad
    \frac{dy}{dx}=\frac{2-y}{x-\frac1{2\sqrt y}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 점 \((-1,\ 1)\)을 대입한다</div>
    $$
    \frac{2-1}{-1-\frac12}=\frac{1}{-\frac32}=-\frac23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2027_mock06/calculus/q25": { answer: 2, html: String.raw`
  <div class="sol-box">\(\dfrac1{a_nb_n}\)을 부분분수로 쪼개면 이웃한 항이 소거된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 일반항을 구한다</div>
    $$
    a_n=4+3(n-1)=3n+1,\qquad b_n=7+3(n-1)=3n+4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부분분수로 쪼갠다</div>
    $$
    \frac1{(3n+1)(3n+4)}=\frac13\left(\frac1{3n+1}-\frac1{3n+4}\right).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 소거하여 합을 구한다</div>
    $$
    \sum_{n=1}^{\infty}\frac1{a_nb_n}=\lim_{n\to\infty}\frac13\left(\frac14-\frac1{3n+4}\right)=\frac13\times\frac14=\frac1{12}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2027_mock06/calculus/q26": { answer: 5, html: String.raw`
  <div class="sol-box">두 접선의 기울기를 구한 뒤, 두 직선이 이루는 예각의 탄젠트 공식 \(\tan\alpha=\left|\dfrac{m-m'}{1+mm'}\right|\)에 넣으면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 점의 \(x\)좌표를 구한다</div>
    <p>\(0&lt;x&lt;\pi\)에서 \(\sin x=\dfrac{\sqrt3}{2}\)의 해는 \(x=\dfrac\pi3\), \(x=\dfrac23\pi\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 접선의 기울기를 구한다</div>
    <p>\(y=\sin x\)에서 \(y'=\cos x\)이므로</p>
    $$
    m=\cos\frac\pi3=\frac12,\qquad m'=\cos\frac23\pi=-\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 예각의 탄젠트를 구한다</div>
    $$
    \tan\theta=\left|\frac{\frac12-\left(-\frac12\right)}{1+\frac12\times\left(-\frac12\right)}\right|
    =\left|\frac{1}{1-\frac14}\right|=\frac43.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2027_mock06/calculus/q27": { answer: 1, html: String.raw`
  <div class="sol-box">속력은 \(\sqrt{\left(\dfrac{dx}{dt}\right)^2+\left(\dfrac{dy}{dt}\right)^2}\)이다. 두 시각의 값을 각각 구해 같다고 놓으면 \(a\)에 대한 일차방정식이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 속도 성분을 구한다</div>
    $$
    \frac{dx}{dt}=a+\sec^2t,\qquad \frac{dy}{dt}=\sec t\tan t.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(t=\dfrac{3\pi}{4}\)에서의 속력을 구한다</div>
    <p>\(\sec\dfrac{3\pi}{4}=-\sqrt2\), \(\tan\dfrac{3\pi}{4}=-1\)이므로</p>
    $$
    \frac{dx}{dt}=a+2,\qquad \frac{dy}{dt}=\sqrt2,
    $$
    $$
    \sqrt{(a+2)^2+2}=\sqrt{a^2+4a+6}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=\pi\)에서의 속력을 구한다</div>
    <p>\(\sec\pi=-1\), \(\tan\pi=0\)이므로</p>
    $$
    \frac{dx}{dt}=a+1,\qquad \frac{dy}{dt}=0,\qquad \sqrt{(a+1)^2}=\sqrt{a^2+2a+1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 같게 놓고 푼다</div>
    $$
    a^2+4a+6=a^2+2a+1,\qquad 2a=-5,\qquad a=-\frac52.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2027_mock06/calculus/q28": { answer: 3, html: String.raw`
  <div class="sol-box">\(\mathrm Q\) 쪽은 \(e^{2q}=t\)라서 \(g\)를 \(t\)의 식으로 바로 쓸 수 있다. \(\mathrm P\) 쪽은 그게 안 되지만, \(9f'(1)=4g'(1)=6\)임을 알면 극한을 두 조각으로 쪼갤 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f'\)를 \(p(t)\)로 나타낸다</div>
    <p>\(\mathrm P\)의 \(x\)좌표를 \(p(t)\)라 하면 \(e^{2p(t)}-e^{-p(t)}+1=t\)이고, 양변을 \(t\)에 대하여 미분하면</p>
    $$
    p'(t)\left(2e^{2p(t)}+e^{-p(t)}\right)=1,\qquad p'(t)=\frac1{2e^{2p(t)}+e^{-p(t)}}.
    $$
    <p>\(f(t)=e^{2p(t)}\)이므로</p>
    $$
    f'(t)=2p'(t)e^{2p(t)}=\frac{2e^{2p(t)}}{2e^{2p(t)}+e^{-p(t)}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(g\)를 \(t\)의 식으로 쓴다</div>
    <p>\(\mathrm Q\)의 \(x\)좌표를 \(q(t)\)라 하면 \(e^{2q(t)}=t\)이므로 \(e^{-q(t)}=t^{-\frac12}\)이고</p>
    $$
    g(t)=e^{2q(t)}-e^{-q(t)}+1=t-t^{-\frac12}+1,\qquad
    g'(t)=1+\frac12t^{-\frac32}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=1\)에서의 값을 확인한다</div>
    <p>\(t=1\)을 넣으면 \(e^{2p(1)}=e^{-p(1)}\)에서 \(e^{3p(1)}=1\), 즉 \(p(1)=0\)이므로</p>
    $$
    f'(1)=\frac{2}{2+1}=\frac23,\qquad g'(1)=1+\frac12=\frac32.
    $$
    <p>따라서 \(9f'(1)=4g'(1)=6\)이고, 구하는 극한을 두 조각으로 나눌 수 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 앞 조각을 계산한다</div>
    <p>\(t\to1\)일 때 \(p(t)\to0\)이고 \(t-1=e^{2p(t)}-e^{-p(t)}\)이므로, \(p(t)=p\)로 줄여 쓰면</p>
    $$
    \frac{9f'(t)-6}{t-1}=\frac{\frac{18e^{2p}}{2e^{2p}+e^{-p}}-6}{e^{2p}-e^{-p}}
    =\frac{6\left(e^{2p}-e^{-p}\right)}{\left(e^{2p}-e^{-p}\right)\left(2e^{2p}+e^{-p}\right)}=\frac6{2e^{2p}+e^{-p}},
    $$
    <p>이므로 극한값은 \(\dfrac6{2+1}=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 뒤 조각을 계산한다</div>
    <p>이 조각은 \(g'\)의 미분계수 꼴이다.</p>
    $$
    \lim_{t\to1}\frac{4g'(t)-6}{t-1}=4\lim_{t\to1}\frac{g'(t)-g'(1)}{t-1}=4g''(1).
    $$
    <p>\(g''(t)=-\dfrac34t^{-\frac52}\)이므로 \(4g''(1)=-3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 빼서 구한다</div>
    $$
    2-(-3)=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },
