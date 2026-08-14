"2025_csat/prob_stat/q23": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항을 쓴다</div>
    $$
    {}_5\mathrm C_r\times2^{\,5-r}\times\left(x^3\right)^{r}\qquad(r=0,1,\dots,5).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x^6\)이 되는 \(r\)를 찾는다</div>
    <p>\(3r=6\)에서 \(r=2\)이므로 계수는</p>
    $$
    {}_5\mathrm C_2\times2^{3}=10\times8=80.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_csat/prob_stat/q24": { answer: 3, html: String.raw`
  <div class="sol-box">\(\mathrm P(A\,|\,B)=\mathrm P(A)\)라는 조건은 두 사건이 서로 독립이라는 뜻이므로, 곱셈으로 \(\mathrm P(B)\)를 뽑을 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 독립임을 읽어낸다</div>
    $$
    \mathrm P(A\,|\,B)=\frac{\mathrm P(A\cap B)}{\mathrm P(B)}=\mathrm P(A)\ \Longrightarrow\ \mathrm P(A\cap B)=\mathrm P(A)\mathrm P(B).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm P(B)\)를 구한다</div>
    $$
    \frac15=\frac12\mathrm P(B),\qquad \mathrm P(B)=\frac25.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 덧셈정리를 쓴다</div>
    $$
    \mathrm P(A\cup B)=\frac12+\frac25-\frac15=\frac{5+4-2}{10}=\frac7{10}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_csat/prob_stat/q25": { answer: 1, html: String.raw`
  <div class="sol-box">신뢰구간의 길이는 \(2\times1.96\times\dfrac\sigma{\sqrt n}\)이므로 \(b-a\)에는 표본평균의 값이 들어가지 않는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 신뢰구간의 길이를 쓴다</div>
    $$
    b-a=2\times1.96\times\frac{2}{\sqrt{256}}=2\times1.96\times\frac18.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 계산한다</div>
    $$
    b-a=\frac{1.96}{4}=0.49.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_csat/prob_stat/q26": { answer: 3, html: String.raw`
  <div class="sol-box">"적어도 한 명"이므로 여사건, 즉 셋 다 과목 A를 선택하는 경우를 세는 편이 훨씬 짧다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 여사건의 확률을 구한다</div>
    <p>과목 A를 선택한 학생이 \(9\)명이므로, 뽑은 \(3\)명이 모두 과목 A를 선택했을 확률은</p>
    $$
    \frac{{}_9\mathrm C_3}{{}_{16}\mathrm C_3}=\frac{84}{560}=\frac3{20}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건의 확률을 뺀다</div>
    $$
    1-\frac3{20}=\frac{17}{20}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_csat/prob_stat/q28": { answer: 2, html: String.raw`
  <div class="sol-box">조건 (나)의 \(f(2)\le f(3)\le f(4)\le f(5)\)는 순서가 정해진 나열이므로 중복조합이다. \(f(1)\times f(6)\)이 \(6\)의 약수라는 조건으로 양 끝값을 먼저 정하면, 가운데 네 값의 범위가 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 양 끝값의 경우를 나눈다</div>
    <p>\(6\)의 약수는 \(1,2,3,6\)이므로 \(f(1)f(6)\)은 이 넷 중 하나이고, \(f(1)\le f(6)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(1)f(6)=1\), \(2\)인 경우</div>
    <p>ⅰ) \(f(1)=f(6)=1\)이면 조건 (나)에서 \(2\le f(2)\le\cdots\le f(5)\le2\)이므로 모두 \(2\)로 정해져 \(1\)가지이다.</p>
    <p>ⅱ) \(f(1)=1\), \(f(6)=2\)이면 \(2\le f(2)\le f(3)\le f(4)\le f(5)\le4\)이므로 \(2,3,4\) 중 중복을 허락하여 \(4\)개를 뽑는 중복조합이다.</p>
    $$
    {}_3\mathrm H_4={}_6\mathrm C_4={}_6\mathrm C_2=15.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(1)f(6)=3\)인 경우</div>
    <p>\(f(1)=1\), \(f(6)=3\)이므로 \(2\le f(2)\le\cdots\le f(5)\le6\)이고, \(2,3,4,5,6\) 중에서 뽑는 중복조합이다.</p>
    $$
    {}_5\mathrm H_4={}_8\mathrm C_4=70.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(f(1)f(6)=6\)인 경우</div>
    <p>\(f(1)=1\), \(f(6)=6\)이면 \(2\le f(2)\le\cdots\le f(5)\le12\)인데 함숫값은 \(6\) 이하이므로 \(2,3,4,5,6\)에서 뽑는 중복조합으로 \({}_5\mathrm H_4=70\)가지이다.</p>
    <p>\(f(1)=2\), \(f(6)=3\)이면 \(4\le f(2)\le\cdots\le f(5)\le6\)이므로 \(4,5,6\)에서 뽑아 \({}_3\mathrm H_4=15\)가지이다. 합하면 \(85\)가지이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 모두 더한다</div>
    $$
    1+15+70+85=171.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_csat/prob_stat/q29": { answer: 25, html: String.raw`
  <div class="sol-box">첫 조건은 \(x\)와 \(40-x\)가 평균에 대하여 대칭이라는 뜻이고, 둘째 조건은 \(Y\)의 그래프가 \(X\)의 그래프를 \(-10\)만큼 평행이동한 것이라는 뜻이다. 표준화해서 항등식으로 보면 셋 다 바로 읽힌다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫째 조건에서 \(m_1\)을 구한다</div>
    <p>\(\mathrm P(X\le x)=\mathrm P(X\ge40-x)\)를 표준화하면</p>
    $$
    \frac{x-m_1}{\sigma_1}+\frac{(40-x)-m_1}{\sigma_1}=0,\qquad 40-2m_1=0,\qquad m_1=20.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 둘째 조건에서 \(m_2\)와 \(\sigma_2\)를 구한다</div>
    $$
    \mathrm P(Y\le x)=\mathrm P\left(Z\le\frac{x-m_2}{\sigma_2}\right),\qquad
    \mathrm P(X\le x+10)=\mathrm P\left(Z\le\frac{x-10}{\sigma_1}\right)
    $$
    <p>이 모든 \(x\)에서 같으므로 \(\dfrac{x-m_2}{\sigma_2}=\dfrac{x-10}{\sigma_1}\)이 항등식이고</p>
    $$
    \sigma_2=\sigma_1,\qquad m_2=10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 셋째 조건에서 \(\sigma_1\)을 구한다</div>
    <p>\(X\sim\mathrm N(20,\ \sigma_1^{\,2})\), \(Y\sim\mathrm N(10,\ \sigma_1^{\,2})\)이므로 각각 표준화하면</p>
    $$
    \mathrm P(15\le X\le20)=\mathrm P\left(-\frac5{\sigma_1}\le Z\le0\right)=\mathrm P\left(0\le Z\le\frac5{\sigma_1}\right),
    $$
    $$
    \mathrm P(15\le Y\le20)=\mathrm P\left(\frac5{\sigma_1}\le Z\le\frac{10}{\sigma_1}\right).
    $$
    <p>두 구간이 \(\dfrac5{\sigma_1}\)에서 이어 붙으므로</p>
    $$
    \mathrm P\left(0\le Z\le\frac{10}{\sigma_1}\right)=0.4772.
    $$
    <p>표에서 \(\mathrm P(0\le Z\le2)=0.4772\)이므로 \(\dfrac{10}{\sigma_1}=2\), 즉 \(\sigma_1=5\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답을 구한다</div>
    $$
    m_1+\sigma_2=20+5=25.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{25}\)</div>
` },
