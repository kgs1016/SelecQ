"2025_mock06/common/q16": { answer: 7, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 진수 조건을 먼저 적는다</div>
    $$
    x+1&gt;0,\qquad x-3&gt;0\ \Longrightarrow\ x&gt;3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 밑을 \(2\)로 통일한다</div>
    <p>\(\log_{\frac12}(x-3)=-\log_2(x-3)\)이므로 주어진 식은</p>
    $$
    \log_2(x+1)-5=-\log_2(x-3),\qquad \log_2(x+1)+\log_2(x-3)=5.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 풀어서 진수 조건에 맞는 해를 고른다</div>
    $$
    (x+1)(x-3)=2^5=32,\qquad x^2-2x-35=0,\qquad (x+5)(x-7)=0.
    $$
    <p>\(x&gt;3\)이므로 \(x=7\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{7}\)</div>
` },

"2025_mock06/common/q17": { answer: 23, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int(6x^2+2)\,dx=2x^3+2x+C.
    $$
    <p>\(f(0)=3\)이므로 \(C=3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    f(2)=2\times8+2\times2+3=23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{23}\)</div>
` },

"2025_mock06/common/q18": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합의 기호를 분리한다</div>
    $$
    \sum_{k=1}^{9}(ak^2-10k)=a\sum_{k=1}^{9}k^2-10\sum_{k=1}^{9}k.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 공식을 대입한다</div>
    $$
    a\times\frac{9\times10\times19}{6}-10\times\frac{9\times10}{2}=285a-450=120,
    $$
    $$
    285a=570,\qquad a=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{2}\)</div>
` },

"2025_mock06/common/q19": { answer: 16, html: String.raw`
  <div class="sol-box">운동 방향이 바뀌는 시각은 \(v(t)=0\)인 시각이다. 두 번째로 바뀌는 시각을 \(k\)로 나타낸 뒤, 그때의 위치를 정적분으로 놓는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 방향이 바뀌는 두 시각을 구한다</div>
    <p>\(0\le t\le3\)에서 \(-t^2+t+2=0\), 즉 \((t-2)(t+1)=0\)이고 \(t&gt;0\)이므로 첫 번째는 \(t=2\)이다.</p>
    <p>\(t&gt;3\)에서 \(k(t-3)-4=0\)이므로 두 번째는</p>
    $$
    t=3+\frac4k.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 그때의 위치를 정적분으로 쓴다</div>
    <p>원점에서 출발했으므로 위치는 속도의 정적분이다.</p>
    $$
    \int_0^{3}(-t^2+t+2)\,dt+\int_3^{3+\frac4k}\{k(t-3)-4\}\,dt=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 부분을 계산한다</div>
    $$
    \int_0^{3}(-t^2+t+2)\,dt=\left[-\frac13t^3+\frac12t^2+2t\right]_0^{3}=-9+\frac92+6=\frac32.
    $$
    <p>뒤쪽은 \(t=3\)에서 \(-4\), \(t=3+\dfrac4k\)에서 \(0\)인 직선 아래 부분이므로 밑변 \(\dfrac4k\), 높이 \(4\)인 삼각형의 넓이에 음의 부호를 붙인 값이다.</p>
    $$
    -\frac12\times\frac4k\times4=-\frac8k.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(k\)를 구한다</div>
    $$
    \frac32-\frac8k=1,\qquad \frac8k=\frac12,\qquad k=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{16}\)</div>
` },

"2025_mock06/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 같은 것이 있는 순열의 수를 쓴다</div>
    <p>\(1\)이 \(2\)개이므로</p>
    $$
    \frac{4!}{2!}=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock06/prob_stat/q24": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(A)\)를 구한다</div>
    $$
    \mathrm P(A)=1-\mathrm P(A^{C})=1-\frac56=\frac16.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 배반이므로 덧셈정리가 단순해진다</div>
    <p>두 사건이 서로 배반사건이므로 \(\mathrm P(A\cap B)=0\)이고</p>
    $$
    \mathrm P(A\cup B)=\mathrm P(A)+\mathrm P(B)=\frac34,\qquad
    \mathrm P(B)=\frac34-\frac16=\frac7{12}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 여사건의 확률을 구한다</div>
    $$
    \mathrm P(B^{C})=1-\frac7{12}=\frac5{12}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock06/prob_stat/q25": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항을 쓴다</div>
    $$
    {}_5\mathrm C_r(x^2)^{r}(-2)^{5-r}={}_5\mathrm C_r(-2)^{5-r}x^{2r}\qquad(r=0,1,\dots,5).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x^6\)이 되는 \(r\)를 찾는다</div>
    $$
    2r=6\ \Longrightarrow\ r=3,
    $$
    $$
    {}_5\mathrm C_3(-2)^{2}=10\times4=40.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },
