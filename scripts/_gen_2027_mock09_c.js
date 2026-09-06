"2027_mock09/prob_stat/q23": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 같은 것이 있는 순열</div>
    <p>\(3\)이 세 개이므로</p>
    $$
    \frac{5!}{3!}=5\times4=20.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2027_mock09/prob_stat/q24": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(A)\)를 구한다</div>
    $$
    \mathrm P(A)=1-\mathrm P(A^C)=1-\frac25=\frac35.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 곱셈정리</div>
    $$
    \mathrm P(A\cap B)=\mathrm P(A)\,\mathrm P(B\mid A)=\frac35\times\frac23=\frac25.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2027_mock09/prob_stat/q25": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항</div>
    $$
    {}_4\mathrm C_r\left(2x^3\right)^{4-r}\left(\frac1{x^2}\right)^{r}={}_4\mathrm C_r\,2^{4-r}\,x^{12-5r}\quad(r=0,1,2,3,4).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x^2\)이 되는 \(r\)</div>
    <p>\(12-5r=2\)에서 \(r=2\)이므로 계수는</p>
    $$
    {}_4\mathrm C_2\times2^{2}=6\times4=24.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2027_mock09/prob_stat/q26": { answer: 2, html: String.raw`
  <div class="sol-box">\(a\le3\)인 사건을 \(E\), \(a\times b\)가 \(8\)의 배수인 사건을 \(F\)라 하고 \(\mathrm P(E\cup F)\)를 구한다. 전체 경우는 \(36\)가지.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 각 사건의 경우의 수</div>
    <ul>
      <li>\(E\) : \(a\)는 \(1,2,3\) 중 하나, \(b\)는 자유 → \(3\times6=18\)</li>
      <li>\(F\) : \((a,b)=(2,4),(4,2),(4,4),(4,6),(6,4)\) → \(5\)</li>
      <li>\(E\cap F\) : \((2,4)\) → \(1\)</li>
    </ul>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 덧셈정리</div>
    $$
    \mathrm P(E\cup F)=\frac{18}{36}+\frac{5}{36}-\frac{1}{36}=\frac{22}{36}=\frac{11}{18}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2027_mock09/prob_stat/q27": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 표준화</div>
    <p>\(Z=\dfrac{X-1}{\sigma}\)로 놓으면</p>
    $$
    \mathrm P\!\left(\frac32\sigma\le X\le2\sigma\right)=\mathrm P\!\left(\frac32-\frac1\sigma\le Z\le2-\frac1\sigma\right)=0.044.
    $$
    <p>구간의 길이가 \(\dfrac12\)이고, 표에서 \(\mathrm P(1.5\le Z\le2)=0.4772-0.4332=0.044\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\sigma\)를 정한다</div>
    <p>대칭성에 의해 \(\mathrm P(-2\le Z\le-1.5)=0.044\)이기도 하므로</p>
    $$
    2-\frac1\sigma=2\quad\text{또는}\quad2-\frac1\sigma=-1.5 .
    $$
    <p>\(\dfrac1\sigma\ne0\)이므로 \(\dfrac1\sigma=\dfrac72\), 즉 \(\sigma=\dfrac27\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 확률 계산</div>
    $$
    \mathrm P\!\left(X\ge\frac{10}{7}\right)=\mathrm P\!\left(Z\ge\frac{\frac{10}{7}-1}{\frac27}\right)=\mathrm P(Z\ge1.5)=0.5-0.4332=0.0668.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2027_mock09/prob_stat/q28": { answer: 5, html: String.raw`
  <div class="sol-box">\(4\)번 후 AAABBB인 사건을 \(X\), \(3\)번째 눈이 \(6\)인 사건을 \(Y\)라 하면 구하는 값은 \(\mathrm P(Y\mid X)=\dfrac{\mathrm P(X\cap Y)}{\mathrm P(X)}\). 시행을 \(2\)번씩 끊어서 본다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 한 번의 시행으로 바뀌는 나열</div>
    <p>같은 문자끼리 바꾸면 나열은 그대로다.</p>
    <ul>
      <li>AAABBB에서 : \(k=3\)이면 AABABB, 나머지 \(5\)가지는 그대로</li>
      <li>AABABB에서 : \(k=2\)이면 ABAABB, \(k=3\)이면 AAABBB, \(k=4\)이면 AABBAB, 나머지 \(3\)가지는 그대로</li>
    </ul>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(2\)번 시행 후 나열의 확률</div>
    <table class="sol-table">
      <tr><th>나열</th><th>경로</th><th>확률</th></tr>
      <tr><td>AAABBB</td><td>\(\frac56\cdot\frac56+\frac16\cdot\frac16\)</td><td>\(\dfrac{26}{36}\)</td></tr>
      <tr><td>AABABB</td><td>\(\frac56\cdot\frac16+\frac16\cdot\frac36\)</td><td>\(\dfrac{8}{36}\)</td></tr>
      <tr><td>ABAABB</td><td>\(\frac16\cdot\frac16\)</td><td>\(\dfrac{1}{36}\)</td></tr>
      <tr><td>AABBAB</td><td>\(\frac16\cdot\frac16\)</td><td>\(\dfrac{1}{36}\)</td></tr>
    </table>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\mathrm P(X)\)</div>
    <p>한 번의 시행으로 나열 P가 Q로 바뀔 확률과 Q가 P로 바뀔 확률은 같다(같은 자리를 다시 바꾸면 되돌아온다).
       따라서 \(2\)번 시행으로 AAABBB에서 어떤 나열이 될 확률과, 그 나열에서 \(2\)번 시행으로 AAABBB로 돌아올 확률도 같다.</p>
    $$
    \mathrm P(X)=\frac{26^2+8^2+1^2+1^2}{6^4}=\frac{742}{6^4}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(\mathrm P(X\cap Y)\)</div>
    <p>\(3\)번째 눈이 \(6\)이면 나열이 바뀌지 않으므로, \(4\)번째 한 번으로 AAABBB가 되려면 \(2\)번 후 나열이 AAABBB 또는 AABABB이어야 한다.</p>
    $$
    \mathrm P(X\cap Y)=\frac{26}{36}\cdot\frac16\cdot\frac56+\frac{8}{36}\cdot\frac16\cdot\frac16=\frac{130+8}{6^4}=\frac{138}{6^4}.
    $$
  </div>
  <div class="sol-final">\(\mathrm P(Y\mid X)=\dfrac{138}{742}=\dfrac{69}{371}\) &nbsp;→&nbsp; 답 &nbsp;⑤</div>
` },

"2027_mock09/prob_stat/q29": { answer: 190, html: String.raw`
  <div class="sol-box">(가)를 만족시키는 전체 순서쌍에서 (나)를 어기는 것(\(10a&lt;d\) 또는 \(c\ge d^2\))을 뺀다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우</div>
    <p>\(a+b+c+d=14\)의 자연수 해는 \(a'=a-1\) 등으로 놓으면 \(a'+b'+c'+d'=10\)의 음이 아닌 정수 해와 같으므로</p>
    $$
    {}_4\mathrm H_{10}={}_{13}\mathrm C_{3}=286.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(10a&lt;d\)인 경우</div>
    <p>\(a\ge1\)이므로 \(d\ge11\)이어야 하고, \(a+b+c\ge3\)에서 \(d\le11\). 따라서 \(d=11\), \((a,b,c,d)=(1,1,1,11)\)의 <b>\(1\)개</b>.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(c\ge d^2\)인 경우</div>
    <table class="sol-table">
      <tr><th>\(d\)</th><th>조건</th><th>\(a+b+c\)</th><th>개수</th></tr>
      <tr><td>\(1\)</td><td>\(c\ge1\)</td><td>\(13\)</td><td>\({}_3\mathrm H_{10}={}_{12}\mathrm C_2=66\)</td></tr>
      <tr><td>\(2\)</td><td>\(c\ge4\)</td><td>\(12\)</td><td>\({}_3\mathrm H_{6}={}_{8}\mathrm C_2=28\)</td></tr>
      <tr><td>\(3\)</td><td>\(c\ge9\)</td><td>\(11\)</td><td>\((1,1,9)\)의 \(1\)</td></tr>
      <tr><td>\(4\) 이상</td><td>\(c\ge16\)</td><td>\(\le10\)</td><td>\(0\)</td></tr>
    </table>
    <p>합 \(66+28+1=95\)개. 이 중 \((1,1,1,11)\)은 \(c=1&lt;121\)이라 포함되지 않으므로 두 경우는 겹치지 않는다.</p>
  </div>
  <div class="sol-final">\(286-(1+95)=\mathbf{190}\)</div>
` },

"2027_mock09/prob_stat/q30": { answer: 170, html: String.raw`
  <div class="sol-box">\(\overline X=\dfrac k5\)일 때 \(k^2=25\,\overline X^{\,2}\)이므로 주어진 합은 \(25\,\mathrm E(\overline X^{\,2})\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 모집단의 평균과 분산</div>
    <p>한 번 꺼낸 수를 \(X\)라 하면 \(\mathrm P(X=0)=\mathrm P(X=1)=\mathrm P(X=2)=\dfrac13\)이므로</p>
    $$
    \mathrm E(X)=1,\qquad \mathrm V(X)=\frac{0+1+4}{3}-1^2=\frac23.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 표본평균의 평균과 분산</div>
    <p>\(\overline X\)는 크기 \(5\)인 표본의 표본평균이므로</p>
    $$
    \mathrm E(\overline X)=1,\qquad \mathrm V(\overline X)=\frac{2/3}{5}=\frac{2}{15}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 합을 \(\mathrm E(\overline X^{\,2})\)로 바꾼다</div>
    <p>\(\overline X\)가 가지는 값은 \(\dfrac k5\ (k=0,1,\dots,10)\)이고 \(k=0\)인 항은 \(0\)이므로</p>
    $$
    a=\sum_{k=0}^{10}k^2\,\mathrm P\!\left(\overline X=\frac k5\right)=25\sum_{k=0}^{10}\left(\frac k5\right)^{2}\mathrm P\!\left(\overline X=\frac k5\right)=25\,\mathrm E(\overline X^{\,2}).
    $$
    $$
    \mathrm E(\overline X^{\,2})=\mathrm V(\overline X)+\{\mathrm E(\overline X)\}^2=\frac{2}{15}+1=\frac{17}{15},\qquad a=25\times\frac{17}{15}=\frac{85}{3}.
    $$
  </div>
  <div class="sol-final">\(6\times a=6\times\dfrac{85}{3}=\mathbf{170}\)</div>
` },
