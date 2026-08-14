"2026_mock06/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 같은 것이 있는 순열의 수를 쓴다</div>
    <p>여섯 문자 \(a,a,a,a,b,c\) 중 \(a\)가 \(4\)개이므로</p>
    $$
    \frac{6!}{4!}=6\times5=30.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock06/prob_stat/q24": { answer: 4, html: String.raw`
  <div class="sol-box">배반이므로 \(\mathrm P(A\cup B)=\mathrm P(A)+\mathrm P(B)\)인데 이 값이 \(1\)이므로, 두 사건은 서로 여사건 관계가 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(A)\)를 구한다</div>
    <p>\(\mathrm P(A^{C})=2\mathrm P(A)\)에서 \(1-\mathrm P(A)=2\mathrm P(A)\)이므로</p>
    $$
    \mathrm P(A)=\frac13.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm P(B)\)를 구한다</div>
    <p>배반사건이므로 \(\mathrm P(A\cap B)=0\)이고 \(\mathrm P(A\cup B)=\mathrm P(A)+\mathrm P(B)=1\)이므로</p>
    $$
    \mathrm P(B)=1-\frac13=\frac23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock06/prob_stat/q25": { answer: 3, html: String.raw`
  <div class="sol-box">\((x+1)\)을 곱한다는 것은 \(x\)를 곱한 것과 그대로 둔 것을 더한다는 뜻이므로, \(x^3\)의 계수는 \((2x-1)^5\)의 \(x^2\)의 계수와 \(x^3\)의 계수를 더한 값이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 문제를 두 계수의 합으로 바꾼다</div>
    $$
    (2x-1)^5(x+1)=(2x-1)^5\times x+(2x-1)^5.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 일반항을 쓴다</div>
    $$
    {}_5\mathrm C_r(2x)^{5-r}(-1)^{r}={}_5\mathrm C_r2^{\,5-r}(-1)^{r}x^{\,5-r}.
    $$
    <p>\(x^2\)항은 \(r=3\), \(x^3\)항은 \(r=2\)일 때이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 계수를 더한다</div>
    $$
    {}_5\mathrm C_3\times2^{2}\times(-1)^3+{}_5\mathrm C_2\times2^{3}\times(-1)^2=-40+80=40.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock06/prob_stat/q26": { answer: 5, html: String.raw`
  <div class="sol-box">"곱이 짝수"의 여사건은 "곱이 홀수", 즉 양 끝이 둘 다 홀수인 경우뿐이라 세기가 훨씬 쉽다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 여사건을 센다</div>
    <p>양 끝에 놓인 두 수의 곱이 홀수이려면 홀수 \(1,3,5,7\)이 적힌 \(4\)장 중 \(2\)장을 골라 양 끝에 놓고, 나머지 \(5\)장을 가운데에 나열해야 한다.</p>
    $$
    \mathrm P(A^{C})=\frac{{}_4\mathrm P_2\times5!}{7!}=\frac{4\times3}{7\times6}=\frac27.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건의 확률을 뺀다</div>
    $$
    \mathrm P(A)=1-\frac27=\frac57.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock06/prob_stat/q27": { answer: 1, html: String.raw`
  <div class="sol-box">여학생을 적어도 몇 명 뽑느냐가 아니라, 남학생 수로 경우를 나누면 두 가지뿐이다. 뽑은 뒤 원탁에 앉히는 경우의 수는 어느 경우든 \((5-1)!\)로 같다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 뽑는 경우의 수를 센다</div>
    <p>남학생 \(4\)명, 여학생 \(1\)명을 뽑는 경우는</p>
    $$
    {}_5\mathrm C_4\times{}_3\mathrm C_1=5\times3=15,
    $$
    <p>남학생 \(5\)명을 뽑는 경우는 \({}_5\mathrm C_5=1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 원탁에 앉히는 경우의 수를 곱한다</div>
    <p>뽑힌 \(5\)명을 원 모양의 탁자에 앉히는 경우의 수는 \((5-1)!=24\)이므로</p>
    $$
    (15+1)\times24=384.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock06/prob_stat/q28": { answer: 5, html: String.raw`
  <div class="sol-box">\(\mathrm B\)에 들어가는 공은 \(3\)의 배수일 때 \(2\)개, 아닐 때 \(1\)개이므로 홀짝은 <b>\(3\)의 배수가 아닌 눈이 나온 횟수</b>만으로 정해진다. 그러면 사건이 세 경우로 좁혀진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 사건을 정한다</div>
    <p>\(3\)의 배수가 아닌 눈이 나온 횟수를 \(n\), \(3\)의 배수인 눈이 나온 횟수를 \(m\)이라 하면 \(m+n=5\)이고, 각 확률은 \(\dfrac23\), \(\dfrac13\)이다. 상자 \(\mathrm B\)의 공의 개수는 \(2m+n=10-n\)이므로, 이것이 홀수이려면 \(n\)이 홀수여야 한다.</p>
    $$
    n=1,\ 3,\ 5.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm P(X)\)를 구한다</div>
    $$
    \mathrm P(X)={}_5\mathrm C_1\left(\frac23\right)^{1}\left(\frac13\right)^{4}+{}_5\mathrm C_3\left(\frac23\right)^{3}\left(\frac13\right)^{2}+{}_5\mathrm C_5\left(\frac23\right)^{5}
    $$
    $$
    =\frac{10+80+32}{3^5}=\frac{122}{243}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\mathrm A\)와 \(\mathrm C\)의 합을 따진다</div>
    <p>\(\mathrm A\)에는 항상 \(1\)개씩 들어가므로 \(5\)개이고, \(\mathrm C\)에는 \(3\)의 배수가 아닐 때만 \(1\)개씩 들어가므로 \(n\)개이다. 합은 \(5+n\)이므로 \(8\) 이상이려면 \(n\ge3\)이고, \(n\)이 홀수이므로 \(n=3\) 또는 \(n=5\)이다.</p>
    $$
    \mathrm P(X\cap Y)={}_5\mathrm C_3\left(\frac23\right)^{3}\left(\frac13\right)^{2}+{}_5\mathrm C_5\left(\frac23\right)^{5}=\frac{80+32}{243}=\frac{112}{243}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 조건부확률을 구한다</div>
    $$
    \mathrm P(Y\,|\,X)=\frac{112}{122}=\frac{56}{61}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },
