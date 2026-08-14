"2025_mock09/calculus/q23": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분모를 각의 크기에 맞춘다</div>
    $$
    \lim_{x\to0}\frac{\sin5x}{x}=\lim_{x\to0}\left(\frac{\sin5x}{5x}\times5\right).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    $$
    1\times5=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock09/calculus/q24": { answer: 4, html: String.raw`
  <div class="sol-box">"점 \((t,f(t))\)에서의 접선의 기울기"가 곧 \(f'(t)\)이다. 문자만 \(x\)로 바꾸면 도함수를 얻은 셈이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 도함수를 읽는다</div>
    $$
    f'(x)=\frac1x+4e^{2x}\qquad(x&gt;0).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분하여 \(f\)를 구한다</div>
    $$
    f(x)=\int\left(\frac1x+4e^{2x}\right)dx=\ln x+2e^{2x}+C.
    $$
    <p>\(f(1)=2e^2+1\)이고 \(\ln1=0\)이므로 \(2e^2+C=2e^2+1\)에서 \(C=1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(e)\)를 구한다</div>
    $$
    f(e)=\ln e+2e^{2e}+1=2e^{2e}+2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_mock09/calculus/q25": { answer: 4, html: String.raw`
  <div class="sol-box">분모가 \(2^{n}\) 규모이므로 분자·분모를 \(2^{n}\)으로 나눈다. 그러면 \(0\)이 아닌 극한값이 존재한다는 사실만으로 공비가 결정된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(2^{n}\)으로 나눈다</div>
    <p>공비를 \(r\)라 하면 \(a_n=a_1r^{\,n-1}\)이고</p>
    $$
    \frac{4^{n}a_n-1}{3\times2^{\,n+1}}
    =\frac{2^{n}a_n-\dfrac1{2^{n}}}{6}
    =\frac{2a_1(2r)^{\,n-1}-\dfrac1{2^{n}}}{6}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 공비를 결정한다</div>
    <p>\(\dfrac1{2^{n}}\to0\)인데 전체 극한값이 \(1\)로 \(0\)이 아니므로, \((2r)^{\,n-1}\)이 \(0\)이 아닌 값으로 수렴해야 한다. 따라서</p>
    $$
    2r=1,\qquad r=\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 첫째항을 구한다</div>
    $$
    \frac{2a_1-0}{6}=1,\qquad a_1=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답을 구한다</div>
    $$
    a_2=3\times\frac12=\frac32,\qquad a_1+a_2=3+\frac32=\frac92.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_mock09/calculus/q26": { answer: 3, html: String.raw`
  <div class="sol-box">단면이 반원이므로 밑면의 세로 길이가 지름이다. 넓이를 만들면 근호가 벗겨져 \(x^3\sin x^2\) 꼴이 되고, \(x^2=u\)로 바꾸면 \(\int u\sin u\,du\)라는 익숙한 부분적분이 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 단면의 넓이를 구한다</div>
    <p>\(x=t\)에서 밑면의 세로 길이가 \(2t\sqrt{t\sin t^2}\)이고 이것이 반원의 지름이므로, 반지름은 \(t\sqrt{t\sin t^2}\)이다.</p>
    $$
    S(t)=\frac12\pi\left(t\sqrt{t\sin t^2}\right)^2=\frac\pi2\,t^3\sin t^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(t^2=u\)로 바꾼다</div>
    <p>\(2t\,dt=du\)이고 \(t=\sqrt{\dfrac\pi6}\)일 때 \(u=\dfrac\pi6\), \(t=\sqrt{\dfrac\pi2}\)일 때 \(u=\dfrac\pi2\)이므로</p>
    $$
    \int_{\sqrt{\pi/6}}^{\sqrt{\pi/2}}\frac\pi2t^3\sin t^2\,dt
    =\frac\pi4\int_{\frac\pi6}^{\frac\pi2}u\sin u\,du.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부분적분한다</div>
    $$
    \int_{\frac\pi6}^{\frac\pi2}u\sin u\,du
    =\Big[-u\cos u\Big]_{\frac\pi6}^{\frac\pi2}+\int_{\frac\pi6}^{\frac\pi2}\cos u\,du
    =\frac\pi6\times\frac{\sqrt3}{2}+\Big[\sin u\Big]_{\frac\pi6}^{\frac\pi2}.
    $$
    $$
    =\frac{\sqrt3}{12}\pi+1-\frac12=\frac{\sqrt3}{12}\pi+\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 부피를 구한다</div>
    $$
    \frac\pi4\left(\frac{\sqrt3}{12}\pi+\frac12\right)=\frac{\sqrt3\,\pi^2+6\pi}{48}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock09/calculus/q27": { answer: 2, html: String.raw`
  <div class="sol-box">양변을 미분하면 \(f'(\pi)\)와 \(f'(0)\)이 섞인 식이 나온다. \(x=0\)을 넣으면 \(f'(0)\)만 남는 식이 따로 생기므로 두 식을 이어 붙이면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 양변을 미분한다</div>
    <p>합성함수의 미분법으로 \(\left\{f\left(\tfrac12\sin x\right)\right\}'=f'\left(\tfrac12\sin x\right)\times\tfrac12\cos x\)이므로</p>
    $$
    f'(x)+f'\left(\frac12\sin x\right)\times\frac12\cos x=\cos x.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=0\)을 넣어 \(f'(0)\)을 구한다</div>
    <p>\(\sin0=0\), \(\cos0=1\)이므로</p>
    $$
    f'(0)+f'(0)\times\frac12=1,\qquad \frac32f'(0)=1,\qquad f'(0)=\frac23.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(x=\pi\)를 넣는다</div>
    <p>\(\sin\pi=0\), \(\cos\pi=-1\)이므로</p>
    $$
    f'(\pi)+f'(0)\times\left(-\frac12\right)=-1,\qquad f'(\pi)=-1+\frac12\times\frac23=-\frac23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock09/calculus/q28": { answer: 3, html: String.raw`
  <div class="sol-box">역함수의 정적분은 넓이로 보면 직사각형에서 원래 넓이를 뺀 것이다. \(g(0)=0\), \(g(1)=1\)이라 이 관계가 아주 단순해지고, 주어진 조건과 합치면 \(\displaystyle\int_0^1f'(2x)\sin\pi x\,dx\)의 값이 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 역함수의 정적분 관계를 세운다</div>
    <p>\(g(0)=f'(0)\sin0+0=0\), \(g(1)=f'(2)\sin\pi+1=1\)이므로</p>
    $$
    \int_0^1g(x)\,dx+\int_{g(0)}^{g(1)}g^{-1}(x)\,dx=1\times1-0\times0=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 주어진 조건을 대입한다</div>
    <p>\(I=\displaystyle\int_0^1f'(2x)\sin\pi x\,dx\)라 하면 \(\displaystyle\int_0^1g(x)\,dx=I+\int_0^1x\,dx=I+\frac12\)이고, 조건에서 \(\displaystyle\int_0^1g^{-1}(x)\,dx=2I+\frac14\)이므로</p>
    $$
    \left(I+\frac12\right)+\left(2I+\frac14\right)=1,\qquad 3I=\frac14,\qquad I=\frac1{12}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 구하는 정적분을 \(I\)로 바꾼다</div>
    <p>\(x=2t\)로 바꾸면 \(dx=2\,dt\)이고 적분구간은 \(0\)에서 \(1\)이므로</p>
    $$
    \int_0^{2}f(x)\cos\frac\pi2x\,dx=2\int_0^1f(2t)\cos\pi t\,dt.
    $$
    <p>\(u=f(2t)\), \(v=\dfrac1\pi\sin\pi t\)로 놓고 부분적분하면 \(\sin0=\sin\pi=0\)이므로 앞항이 사라져</p>
    $$
    2\left(\Big[\frac1\pi f(2t)\sin\pi t\Big]_0^1-\frac2\pi\int_0^1f'(2t)\sin\pi t\,dt\right)=-\frac4\pi I.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 값을 구한다</div>
    $$
    -\frac4\pi\times\frac1{12}=-\frac1{3\pi}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock09/calculus/q29": { answer: 57, html: String.raw`
  <div class="sol-box">\(\dfrac{m+1}{n(n+m+1)}\)을 부분분수로 쪼개면 급수가 통째로 소거되어, \(S_m\)이 조화수의 부분합 \(\displaystyle\sum_{k=1}^{m+1}\frac1k\)이 된다. 그러면 \(a_m=S_m-S_{m-1}\)이 한 항만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부분분수로 쪼갠다</div>
    $$
    \frac{m+1}{n(n+m+1)}=\frac1n-\frac1{n+m+1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부분합을 정리한다</div>
    <p>제\(n\)항까지 더하면 앞쪽 \(m+1\)개를 뺀 나머지가 서로 지워져</p>
    $$
    \sum_{k=1}^{n}\left(\frac1k-\frac1{k+m+1}\right)
    =\left(\frac11+\frac12+\cdots+\frac1{m+1}\right)-\left(\frac1{n+1}+\cdots+\frac1{n+m+1}\right).
    $$
    <p>뒤쪽 괄호는 항의 개수가 \(m+1\)로 고정된 채 각 항이 \(0\)으로 가므로</p>
    $$
    S_m=\sum_{k=1}^{m+1}\frac1k.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_1\), \(a_{10}\)을 구한다</div>
    $$
    a_1=S_1=1+\frac12=\frac32,
    $$
    $$
    a_{10}=S_{10}-S_{9}=\sum_{k=1}^{11}\frac1k-\sum_{k=1}^{10}\frac1k=\frac1{11}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답을 구한다</div>
    $$
    a_1+a_{10}=\frac32+\frac1{11}=\frac{33+2}{22}=\frac{35}{22}.
    $$
    <p>\(p=22\), \(q=35\)이므로 \(p+q=57\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{57}\)</div>
` },
