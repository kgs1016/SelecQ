"2025_mock09/prob_stat/q23": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 같은 것이 있는 순열의 수를 쓴다</div>
    <p>\(2\)가 \(2\)개, \(3\)이 \(2\)개이므로</p>
    $$
    \frac{5!}{2!\,2!}=\frac{120}{4}=30.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock09/prob_stat/q24": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 독립이므로 곱으로 분해한다</div>
    $$
    \mathrm P(A\cap B)=\mathrm P(A)\mathrm P(B)=\frac23\mathrm P(B)=\frac16,
    $$
    $$
    \mathrm P(B)=\frac16\times\frac32=\frac14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 덧셈정리를 쓴다</div>
    $$
    \mathrm P(A\cup B)=\frac23+\frac14-\frac16=\frac{8+3-2}{12}=\frac34.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_mock09/prob_stat/q25": { answer: 5, html: String.raw`
  <div class="sol-box">\(7\) 이상의 홀수는 \(7\), \(9\), \(11\) 세 개뿐이다. "적어도 하나"이므로 여사건이 훨씬 짧다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 구한다</div>
    $$
    {}_{11}\mathrm C_2=55.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건을 센다</div>
    <p>여사건은 \(7\), \(9\), \(11\)을 모두 피하는 경우, 즉 나머지 \(8\)개에서 \(2\)개를 고르는 경우이므로</p>
    $$
    {}_8\mathrm C_2=28.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 확률을 구한다</div>
    $$
    1-\frac{28}{55}=\frac{27}{55}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock09/prob_stat/q26": { answer: 3, html: String.raw`
  <div class="sol-box">두 표본평균을 각각 표준화하면 조건은 \(\mathrm P(Z\le\square)+\mathrm P(Z\ge2)=1\) 꼴이 된다. 여사건을 쓰면 \(\square=2\)가 바로 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 표본평균의 분포를 구한다</div>
    $$
    \overline X\sim\mathrm N\left(m,\ \frac{6^2}{9}\right)=\mathrm N(m,\ 2^2),\qquad
    \overline Y\sim\mathrm N\left(6,\ \frac{2^2}{4}\right)=\mathrm N(6,\ 1^2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 표준화한다</div>
    $$
    \mathrm P(\overline X\le12)=\mathrm P\left(Z\le\frac{12-m}{2}\right),\qquad
    \mathrm P(\overline Y\ge8)=\mathrm P\left(Z\ge\frac{8-6}{1}\right)=\mathrm P(Z\ge2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 여사건으로 비교한다</div>
    <p>합이 \(1\)이므로</p>
    $$
    \mathrm P\left(Z\le\frac{12-m}{2}\right)=1-\mathrm P(Z\ge2)=\mathrm P(Z\le2),
    $$
    $$
    \frac{12-m}{2}=2,\qquad m=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock09/prob_stat/q27": { answer: 4, html: String.raw`
  <div class="sol-box">\(\mathrm P(X=k)=\mathrm P(X=k+2)\)를 \(k=0,1,2\)에 대해 적용하면 확률값이 두 종류로 줄어든다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미지수를 두 개로 줄인다</div>
    <p>\(\mathrm P(X=0)=\mathrm P(X=2)=\mathrm P(X=4)=a\), \(\mathrm P(X=1)=\mathrm P(X=3)=b\)라 하면 확률의 총합이 \(1\)이므로</p>
    $$
    3a+2b=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm E(X^2)\)을 쓴다</div>
    $$
    \mathrm E(X^2)=0^2a+1^2b+2^2a+3^2b+4^2a=20a+10b=\frac{35}{6}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 연립하여 \(a\)를 구한다</div>
    <p>\(3a+2b=1\)의 양변에 \(5\)를 곱하면 \(15a+10b=5\)이므로, 위 식에서 이를 빼면</p>
    $$
    5a=\frac{35}{6}-5=\frac56,\qquad a=\frac16.
    $$
    <p>따라서 \(\mathrm P(X=0)=\dfrac16\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_mock09/prob_stat/q28": { answer: 4, html: String.raw`
  <div class="sol-box">\(X=\{1,2,3,4\}\)에서 \(a\)가 \(b\)의 약수인 쌍은 \((1,2)\), \((1,3)\), \((1,4)\), \((2,4)\) 네 개뿐이다. 즉 사건 \(A\)는 \(f(1)\)이 나머지 셋의 약수이고 동시에 \(f(2)\mid f(4)\)라는 뜻이므로, \(f(1)\)의 값으로 경우를 나누면 끝난다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수와 조건을 정리한다</div>
    <p>함수 \(f\)의 개수는 \({}_4\Pi_4=4^4\)이다. 사건 \(A\)는</p>
    $$
    f(1)\ \text{이}\ f(2),\ f(3),\ f(4)\ \text{의 약수},\qquad f(2)\ \text{가}\ f(4)\ \text{의 약수}
    $$
    <p>가 동시에 성립하는 사건이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(1)=1\)인 경우</div>
    <p>\(1\)은 모든 수의 약수이므로 \(f(3)\)은 \(4\)가지 모두 가능하고, \(f(2)\)가 \(f(4)\)의 약수인 쌍은 \(f(2)=1\)일 때 \(4\)가지, \(2\)일 때 \(2\)가지, \(3\)일 때 \(1\)가지, \(4\)일 때 \(1\)가지로 \(8\)가지이다.</p>
    $$
    4\times8=32.
    $$
    <p>이 중 \(f(4)\)가 짝수인 것은 \(f(2)=1\)일 때 \(2\)가지, \(2\)일 때 \(2\)가지, \(3\)일 때 \(0\)가지, \(4\)일 때 \(1\)가지로 \(5\)가지이므로 \(4\times5=20\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(1)=2\)인 경우</div>
    <p>\(f(2)\), \(f(3)\), \(f(4)\)는 모두 \(2\)의 배수이므로 \(2\) 또는 \(4\)이다. \(f(3)\)이 \(2\)가지, \((f(2),f(4))\)는 \((2,2)\), \((2,4)\), \((4,4)\)의 \(3\)가지이므로</p>
    $$
    2\times3=6.
    $$
    <p>이때 \(f(4)\)는 항상 짝수이므로 \(6\)가지가 모두 \(A\cap B\)에 속한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(f(1)=3\), \(f(1)=4\)인 경우</div>
    <p>\(X\) 안에서 \(3\)의 배수는 \(3\)뿐, \(4\)의 배수는 \(4\)뿐이므로 각각 \(f(2)=f(3)=f(4)=3\), \(f(2)=f(3)=f(4)=4\)인 \(1\)가지씩이다. \(f(4)\)가 짝수인 것은 뒤쪽 \(1\)가지뿐이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 조건부확률을 구한다</div>
    $$
    \mathrm P(A)=\frac{32+6+1+1}{4^4}=\frac{40}{4^4},\qquad
    \mathrm P(A\cap B)=\frac{20+6+0+1}{4^4}=\frac{27}{4^4},
    $$
    $$
    \mathrm P(B\,|\,A)=\frac{27}{40}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },
