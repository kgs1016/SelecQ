"2025_csat/calculus/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\dfrac{\sin x}{x}\) 꼴로 쪼갠다</div>
    $$
    \frac{3x^2}{\sin^2x}=3\times\left(\frac{x}{\sin x}\right)^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    <p>\(\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1\)이므로</p>
    $$
    3\times1^2=3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_csat/calculus/q24": { answer: 4, html: String.raw`
  <div class="sol-box">분자의 차수가 분모와 같으므로 나눗셈으로 먼저 정수부를 떼어 낸다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 피적분함수를 쪼갠다</div>
    $$
    \frac{x+2}{x+1}=1+\frac1{x+1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분한다</div>
    $$
    \int_0^{10}\left(1+\frac1{x+1}\right)dx=\Big[x+\ln|x+1|\Big]_0^{10}=10+\ln11.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_csat/calculus/q25": { answer: 2, html: String.raw`
  <div class="sol-box">주어진 극한에서 \(\dfrac{a_n}{n}\to1\)임을 먼저 끌어내면, 무리식은 유리화 후 \(n\) 대신 \(\dfrac{a_n}{n}\)을 쓰는 문제로 바뀐다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\dfrac{a_n}{n}\)의 극한을 구한다</div>
    <p>\(b_n=\dfrac{na_n}{n^2+3}\)이라 하면 \(a_n=\dfrac{b_n\left(n^2+3\right)}{n}\)이므로</p>
    $$
    \lim_{n\to\infty}\frac{a_n}{n}=\lim_{n\to\infty}b_n\times\lim_{n\to\infty}\frac{n^2+3}{n^2}=1\times1=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 유리화한다</div>
    $$
    \sqrt{a_n^{\,2}+n}-a_n=\frac{n}{\sqrt{a_n^{\,2}+n}+a_n}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 분자와 분모를 \(n\)으로 나눈다</div>
    $$
    \frac{n}{\sqrt{a_n^{\,2}+n}+a_n}
    =\frac{1}{\sqrt{\left(\dfrac{a_n}{n}\right)^2+\dfrac1n}+\dfrac{a_n}{n}}
    \ \longrightarrow\ \frac{1}{\sqrt{1+0}+1}=\frac12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_csat/calculus/q26": { answer: 1, html: String.raw`
  <div class="sol-box">단면이 정사각형이므로 한 변의 제곱이 곧 넓이다. 근호가 벗겨지면 \(\dfrac{(t+\ln t)'}{t+\ln t}\) 꼴이 보여 로그로 적분된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 단면의 넓이를 구한다</div>
    $$
    S(t)=\left(\sqrt{\frac{t+1}{t(t+\ln t)}}\right)^2=\frac{t+1}{t(t+\ln t)}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(t+\ln t=s\)로 바꾼다</div>
    $$
    \frac{ds}{dt}=1+\frac1t=\frac{t+1}{t}
    $$
    <p>이므로 \(S(t)\,dt=\dfrac1s\,ds\)이고, \(t=1\)일 때 \(s=1\), \(t=e\)일 때 \(s=e+1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부피를 구한다</div>
    $$
    \int_1^{e}S(t)\,dt=\int_1^{e+1}\frac1s\,ds=\Big[\ln s\Big]_1^{e+1}=\ln(e+1).
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_csat/calculus/q27": { answer: 1, html: String.raw`
  <div class="sol-box">접선이 \(x\)축이라는 조건은 \(g(0)=0\)과 \(g'(0)=0\) 두 개를 준다. 여기에 "\(g\)가 역함수를 갖는다"는 조건이 더해지면 \(g'\)의 부호가 바뀌지 않아야 하므로, \(g'(0)=0\)은 최솟값이어야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접선 조건을 식으로 옮긴다</div>
    $$
    g(0)=f(1)+1=0\ \Longrightarrow\ f(1)=-1,
    $$
    <p>\(g'(x)=f'(e^{x})e^{x}+e^{x}=e^{x}\{f'(e^{x})+1\}\)이므로</p>
    $$
    g'(0)=f'(1)+1=0\ \Longrightarrow\ f'(1)=-1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 역함수 조건으로 \(f'\)를 확정한다</div>
    <p>\(g\)가 역함수를 가지려면 \(g'\)의 부호가 일정해야 한다. \(e^{x}&gt;0\)이고 \(f\)의 최고차항의 계수가 \(1\)로 양수이므로 모든 실수 \(x\)에서 \(f'(e^{x})+1\ge0\)이어야 하고, \(x=0\)에서 등호가 성립하므로 \(f'(t)+1\)은 \(t=1\)에서 최소이면서 그 값이 \(0\)이다. \(f'\)는 최고차항의 계수가 \(3\)인 이차함수이므로</p>
    $$
    f'(x)=3(x-1)^2-1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f\)와 \(g\)를 구한다</div>
    $$
    f(x)=\int\left\{3(x-1)^2-1\right\}dx=(x-1)^3-x+C,
    $$
    <p>\(f(1)=-1\)에서 \(-1+C=-1\), 즉 \(C=0\)이므로 \(f(x)=(x-1)^3-x\)이고</p>
    $$
    g(x)=f(e^{x})+e^{x}=\left(e^{x}-1\right)^3-e^{x}+e^{x}=\left(e^{x}-1\right)^3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 역함수의 미분법을 쓴다</div>
    <p>\(h(8)=k\)라 하면 \(g(k)=8\)에서 \(\left(e^{k}-1\right)^3=8\), \(e^{k}=3\), \(k=\ln3\)이다.</p>
    $$
    h'(8)=\frac{1}{g'(\ln3)}=\frac{1}{e^{\ln3}\left\{f'\left(e^{\ln3}\right)+1\right\}}
    =\frac{1}{3\left\{3\times(3-1)^2-1+1\right\}}=\frac1{36}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },
