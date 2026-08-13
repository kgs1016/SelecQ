"2024_mock09/prob_stat/q23": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이항분포의 평균을 쓴다</div>
    <p>확률변수 \(X\)가 이항분포 \(\mathrm B\!\left(30,\ \dfrac15\right)\)을 따르므로</p>
    $$
    \mathrm E(X)=30\times\frac15=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_mock09/prob_stat/q24": { answer: 3, html: String.raw`
  <div class="sol-box">최단 거리로 가는 경로의 수는 오른쪽·위쪽 이동을 나열하는 <b>같은 것이 있는 순열</b>의 수이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm A\to\mathrm P\)를 센다</div>
    <p>오른쪽으로 \(3\)번, 위쪽으로 \(1\)번 가야 하므로</p>
    $$
    \frac{4!}{3!\times1!}=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm P\to\mathrm B\)를 센다</div>
    <p>오른쪽으로 \(1\)번, 위쪽으로 \(1\)번 가야 하므로</p>
    $$
    \frac{2!}{1!\times1!}=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 곱한다</div>
    $$
    4\times2=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock09/prob_stat/q25": { answer: 3, html: String.raw`
  <div class="sol-box">"\(A\)와 \(B^{C}\)가 배반"은 곧 \(A\subset B\)라는 뜻이다. 이걸 알아채면 나머지는 뺄셈이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 포함 관계를 읽는다</div>
    <p>\(A\cap B^{C}=\varnothing\)이므로 \(A\)의 원소는 모두 \(B\)에 들어간다. 즉 \(A\subset B\)이고</p>
    $$
    \mathrm P(A\cap B)=\mathrm P(A)=\frac15.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm P(B)\)를 구한다</div>
    $$
    \mathrm P(A)+\mathrm P(B)=\frac7{10}\ \Longrightarrow\ \mathrm P(B)=\frac7{10}-\frac15=\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 답을 구한다</div>
    <p>\(A\subset B\)이므로 \(B\)에서 \(A\)를 빼면 \(A^{C}\cap B\)이다.</p>
    $$
    \mathrm P(A^{C}\cap B)=\mathrm P(B)-\mathrm P(A)=\frac12-\frac15=\frac3{10}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock09/prob_stat/q26": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 표준화한다</div>
    <p>시험 점수를 \(X\)라 하면 \(X\)는 정규분포 \(\mathrm N(68,\ 10^2)\)을 따르므로 \(Z=\dfrac{X-68}{10}\)은 표준정규분포 \(\mathrm N(0,1)\)을 따른다.</p>
    $$
    \mathrm P(55\le X\le78)=\mathrm P\!\left(\frac{55-68}{10}\le Z\le\frac{78-68}{10}\right)=\mathrm P(-1.3\le Z\le1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(Z=0\)에서 나눠 표를 쓴다</div>
    <p>표준정규분포는 \(Z=0\)에 대하여 대칭이므로 \(\mathrm P(-1.3\le Z\le0)=\mathrm P(0\le Z\le1.3)\)이다.</p>
    $$
    \mathrm P(0\le Z\le1.3)+\mathrm P(0\le Z\le1)=0.4032+0.3413=0.7445.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock09/prob_stat/q27": { answer: 4, html: String.raw`
  <div class="sol-box">\(f(2)=2\)가 이미 인수 \(2\)를 하나 주므로, 조건 (나)는 결국 <b>\(f(1),f(3),f(4)\) 중 적어도 하나가 짝수</b>라는 뜻이다. "적어도"이므로 여사건으로 센다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 구한다</div>
    <p>\(X\)에서 \(Y\)로의 일대일함수의 개수는</p>
    $$
    {}_7\mathrm P_4=7\times6\times5\times4=840.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)를 다시 읽는다</div>
    <p>\(f(2)=2\)이므로 \(f(1)f(2)f(3)f(4)=2\times f(1)f(3)f(4)\)이다. 이것이 \(4\)의 배수이려면 \(f(1)f(3)f(4)\)가 짝수, 즉 세 값 중 적어도 하나가 짝수여야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 여사건으로 센다</div>
    <p>\(f(2)=2\)인 함수의 개수는 남은 \(6\)개 값에서 \(3\)개를 뽑아 배열하는</p>
    $$
    6\times5\times4=120.
    $$
    <p>이 중 \(f(1),f(3),f(4)\)가 모두 홀수인 것은 \(1,3,5,7\)의 \(4\)개에서 \(3\)개를 뽑아 배열하는</p>
    $$
    4\times3\times2=24.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 확률을 구한다</div>
    $$
    \frac{120-24}{840}=\frac{96}{840}=\frac4{35}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_mock09/prob_stat/q28": { answer: 5, html: String.raw`
  <div class="sol-box">한 번의 시행에서 기록되는 차 \(X\)의 분포를 먼저 구해 놓으면, 표본평균이 \(2\)라는 조건은 \(X_1+X_2=4\)로 바뀐다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 각 주머니에서 차가 나올 확률</div>
    <p>주머니 \(\mathrm A\)에서는 \({}_3\mathrm C_2=3\)가지 중 차가 \(1\)인 것이 \(2\)가지, \(2\)인 것이 \(1\)가지이다. 주머니 \(\mathrm B\)에서는 \({}_4\mathrm C_2=6\)가지 중 차가 \(1\)인 것이 \(3\)가지, \(2\)인 것이 \(2\)가지, \(3\)인 것이 \(1\)가지이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(X\)의 분포를 구한다</div>
    <p>주사위에서 \(3\)의 배수가 나올 확률이 \(\dfrac13\), 아닐 확률이 \(\dfrac23\)이므로</p>
    $$
    \mathrm P(X=2)=\frac13\times\frac13+\frac23\times\frac26=\frac19+\frac29=\frac13,
    $$
    $$
    \mathrm P(X=3)=\frac23\times\frac16=\frac19,
    $$
    $$
    \mathrm P(X=1)=1-\frac13-\frac19=\frac59.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 표본평균 조건을 바꾼다</div>
    <p>크기가 \(2\)인 표본의 평균이 \(2\)라는 것은 \(X_1+X_2=4\)라는 뜻이므로, 가능한 순서쌍은 \((1,3),\ (3,1),\ (2,2)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 확률을 더한다</div>
    <p>두 시행은 독립이므로</p>
    $$
    2\times\frac59\times\frac19+\left(\frac13\right)^2=\frac{10}{81}+\frac9{81}=\frac{19}{81}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_mock09/calculus/q23": { answer: 4, html: String.raw`
  <div class="sol-box">\(\lim\limits_{x\to0}\dfrac{e^{x}-1}{x}=1\)을 쓸 수 있게 분자와 분모를 각각 지수에 맞춰 나눈다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 꼴을 맞춘다</div>
    $$
    \frac{e^{7x}-1}{e^{2x}-1}=\frac{e^{7x}-1}{7x}\times\frac{2x}{e^{2x}-1}\times\frac72.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    $$
    \lim_{x\to0}\frac{e^{7x}-1}{e^{2x}-1}=\frac72\times1\times1=\frac72.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_mock09/calculus/q24": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(t\)로 각각 미분한다</div>
    $$
    \frac{dx}{dt}=1-2\sin2t,\qquad \frac{dy}{dt}=2\sin t\cos t.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 매개변수로 나타낸 함수의 미분법을 쓴다</div>
    $$
    \frac{dy}{dx}=\frac{2\sin t\cos t}{1-2\sin2t}\qquad(1-2\sin2t\ne0).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=\dfrac\pi4\)를 대입한다</div>
    $$
    \frac{2\times\frac{\sqrt2}{2}\times\frac{\sqrt2}{2}}{1-2\sin\frac\pi2}=\frac{1}{1-2}=-1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock09/calculus/q25": { answer: 2, html: String.raw`
  <div class="sol-box">피적분함수가 \(f'(x)f(x)\) 꼴임을 알아채면 \(\dfrac12\{f(x)\}^2\)이 원시함수가 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f'\)를 확인한다</div>
    <p>\(f(x)=x+\ln x\)이므로 \(f'(x)=1+\dfrac1x\)이다. 따라서</p>
    $$
    \int_1^{e}\left(1+\frac1x\right)f(x)\,dx=\int_1^{e}f'(x)f(x)\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 원시함수를 찾아 계산한다</div>
    $$
    \int_1^{e}f'(x)f(x)\,dx=\left[\frac12\{f(x)\}^2\right]_1^{e}
    =\frac12\{f(e)\}^2-\frac12\{f(1)\}^2.
    $$
    <p>\(f(e)=e+1\), \(f(1)=1\)이므로</p>
    $$
    \frac12(e+1)^2-\frac12=\frac{e^2+2e}{2}=\frac{e^2}{2}+e.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock09/calculus/q26": { answer: 5, html: String.raw`
  <div class="sol-box">두 급수의 합이 주어졌으므로, 앞의 급수를 먼저 \(d\)로 나타내면 뒤의 등비급수 합도 \(d\)로 표현된다. 등비급수 쪽을 따로 구해 두 식을 맞추면 \(d\)가 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 앞의 급수를 \(d\)로 나타낸다</div>
    <p>공차를 \(d\ (d&gt;0)\)라 하면 \(a_{n+1}-a_n=d\)이므로</p>
    $$
    \frac{1}{a_na_{n+1}}=\frac1d\left(\frac1{a_n}-\frac1{a_{n+1}}\right),
    $$
    $$
    \sum_{k=1}^{n}\frac{1}{a_ka_{k+1}}=\frac1d\left(\frac1{a_1}-\frac1{a_{n+1}}\right).
    $$
    <p>\(a_1=1\)이고 \(d&gt;0\)이라 \(a_{n+1}\to\infty\)이므로</p>
    $$
    \sum_{n=1}^{\infty}\frac{1}{a_na_{n+1}}=\frac1d(1-0)=\frac1d.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 등비급수의 합을 \(d\)로 나타낸다</div>
    <p>주어진 급수의 합이 \(2\)이므로 급수의 성질에 의하여</p>
    $$
    \sum_{n=1}^{\infty}b_n=2-\frac1d.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 공비를 구해 다시 표현한다</div>
    <p>\(\sum b_n\)이 수렴하므로 공비 \(r\)는 \(-1&lt;r&lt;1\)이다. \(a_2b_2=(1+d)r=1\)에서 \(r=\dfrac{1}{1+d}\)이고, \(b_1=1\)이므로</p>
    $$
    \sum_{n=1}^{\infty}b_n=\frac{1}{1-\frac{1}{1+d}}=\frac{1+d}{d}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 두 식을 맞춘다</div>
    $$
    2-\frac1d=\frac{1+d}{d},\qquad 2d-1=1+d,\qquad d=2,
    $$
    $$
    \sum_{n=1}^{\infty}b_n=2-\frac12=\frac32.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },
