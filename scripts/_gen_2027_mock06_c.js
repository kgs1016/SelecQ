"2027_mock06/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 같은 것이 있는 순열의 수를 쓴다</div>
    <p>네 문자 중 \(z\)가 \(2\)개이므로</p>
    $$
    \frac{4!}{2!}=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2027_mock06/prob_stat/q24": { answer: 2, html: String.raw`
  <div class="sol-box">\(A\)는 \(A\cap B\)와 \(A\cap B^{C}\)로 정확히 두 조각으로 나뉜다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(A)\)를 구한다</div>
    $$
    \mathrm P(A)=\mathrm P(A\cap B)+\mathrm P\left(A\cap B^{C}\right)=\frac13+\frac38=\frac{8+9}{24}=\frac{17}{24}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건의 확률을 구한다</div>
    $$
    \mathrm P\left(A^{C}\right)=1-\frac{17}{24}=\frac7{24}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2027_mock06/prob_stat/q25": { answer: 1, html: String.raw`
  <div class="sol-box">\(x^6\)이 되는 길은 두 가지뿐이다. \((x+4)^6\)의 \(x^5\)항에 \(3x\)를 곱하거나, \(x^6\)항에 \(2\)를 곱하는 것이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항을 쓴다</div>
    $$
    {}_6\mathrm C_r\,x^{r}4^{\,6-r}\qquad(r=0,1,\dots,6).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 경우를 계산한다</div>
    <p>\(x^5\)항에 \(3x\)를 곱하는 경우는 \(r=5\)이므로</p>
    $$
    {}_6\mathrm C_5\times4\times3=6\times4\times3=72,
    $$
    <p>\(x^6\)항에 \(2\)를 곱하는 경우는 \(r=6\)이므로</p>
    $$
    {}_6\mathrm C_6\times1\times2=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 더한다</div>
    $$
    72+2=74.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2027_mock06/prob_stat/q26": { answer: 5, html: String.raw`
  <div class="sol-box">곱이 \(5\)의 배수이려면 \(5\) 또는 \(10\)이 적힌 공이 적어도 하나 있어야 한다. 여사건은 그 두 개를 모두 피하는 경우다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 구한다</div>
    $$
    {}_{10}\mathrm C_4=210.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건을 센다</div>
    <p>\(5\)와 \(10\)이 적힌 공을 뺀 \(8\)개에서 \(4\)개를 뽑으면 되므로</p>
    $$
    {}_8\mathrm C_4=70,\qquad \mathrm P\left(A^{C}\right)=\frac{70}{210}=\frac13.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 확률을 구한다</div>
    $$
    \mathrm P(A)=1-\frac13=\frac23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2027_mock06/prob_stat/q27": { answer: 4, html: String.raw`
  <div class="sol-box">공역의 원소가 \(1,2,3\)뿐이므로 곱이 \(4\)가 되는 경우는 \(2\times2\) 하나뿐이다. 그 하나만 전체에서 빼면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 함수의 개수를 구한다</div>
    $$
    {}_3\Pi_5=3^5=243.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 제외할 경우를 센다</div>
    <p>\(f(1)\times f(2)=4\)가 되려면 \(f(1)=f(2)=2\)여야 하고, 나머지 세 원소의 함숫값은 자유이므로</p>
    $$
    {}_3\Pi_3=3^3=27.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 빼서 구한다</div>
    $$
    243-27=216.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2027_mock06/prob_stat/q29": { answer: 98, html: String.raw`
  <div class="sol-box">곱이 홀수이려면 다섯 눈이 <b>모두 홀수</b>여야 한다. 그러면 눈은 \(1,3,5\)뿐이고, 그중 합이 \(15\)가 되는 조합은 몇 개 안 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 사건 \(A\)의 확률을 구한다</div>
    <p>한 개의 주사위에서 홀수가 나올 확률이 \(\dfrac36\)이므로</p>
    $$
    \mathrm P(A)=\left(\frac36\right)^5=\frac{3^5}{6^5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 합이 \(15\)인 조합을 찾는다</div>
    <p>\(1,3,5\) 다섯 개를 더해 \(15\)가 되는 경우는</p>
    $$
    (3,3,3,3,3),\qquad (1,1,3,5,5),\qquad (1,3,3,3,5)
    $$
    <p>의 세 가지이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 나열 방법을 센다</div>
    <p>서로 다른 주사위이므로 순서를 구별해서 센다.</p>
    $$
    1+\frac{5!}{2!\,2!}+\frac{5!}{3!}=1+30+20=51.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 조건부확률을 구한다</div>
    $$
    \mathrm P(B\,|\,A)=\frac{\frac{51}{6^5}}{\frac{3^5}{6^5}}=\frac{51}{243}=\frac{17}{81}.
    $$
    <p>\(p=81\), \(q=17\)이므로 \(p+q=98\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{98}\)</div>
` },
