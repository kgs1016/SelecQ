"2026_csat/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 중복순열의 수를 쓴다</div>
    <p>네 문자에서 중복을 허락하여 \(3\)개를 택해 일렬로 나열하므로</p>
    $$
    {}_4\Pi_3=4^3=64.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_csat/prob_stat/q24": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(A\cap B)\)를 구한다</div>
    $$
    \mathrm P(B\,|\,A)=\frac{\mathrm P(A\cap B)}{\mathrm P(A)}=\frac14
    \ \Longrightarrow\ \mathrm P(A\cap B)=\frac14\times\frac25=\frac1{10}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 덧셈정리를 쓴다</div>
    $$
    \frac25+\mathrm P(B)-\frac1{10}=1,\qquad \mathrm P(B)=1-\frac25+\frac1{10}=\frac7{10}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_csat/prob_stat/q25": { answer: 2, html: String.raw`
  <div class="sol-box">"같은 색"과 "같은 수"는 동시에 일어날 수 없다. 흰 공과 검은 공에 적힌 수가 겹치는 것은 \(2,3,4,5\)뿐이고 같은 색이면 수가 다르기 때문이다. 그래서 두 확률을 그냥 더하면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 구한다</div>
    $$
    {}_{10}\mathrm C_2=45.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 같은 색일 확률을 구한다</div>
    <p>흰 공끼리 또는 검은 공끼리 뽑는 경우이므로</p>
    $$
    \frac{2\times{}_5\mathrm C_2}{45}=\frac{20}{45}=\frac49.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 적힌 수가 같을 확률을 구한다</div>
    <p>흰 공은 \(1\)부터 \(5\), 검은 공은 \(2\)부터 \(6\)이므로 수가 같은 짝은 \(2,3,4,5\)의 네 쌍이다.</p>
    $$
    \frac4{45}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 더한다</div>
    <p>두 사건은 서로 배반이므로</p>
    $$
    \frac49+\frac4{45}=\frac{20+4}{45}=\frac{24}{45}=\frac8{15}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_csat/prob_stat/q26": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 신뢰구간을 쓴다</div>
    $$
    \overline x-2.58\times\frac5{\sqrt{36}}\le m\le\overline x+2.58\times\frac5{\sqrt{36}},
    $$
    <p>즉 \(\overline x-2.15\le m\le\overline x+2.15\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 폭을 비교한다</div>
    <p>주어진 신뢰구간이 \(1.2\le m\le a\)이므로 두 구간의 길이가 같다.</p>
    $$
    a-1.2=2\times2.15=4.3,\qquad a=5.5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_csat/prob_stat/q27": { answer: 4, html: String.raw`
  <div class="sol-box">\(\mathrm V(cX)=c^2\mathrm V(X)\)이므로 \(a\)를 먼저 구해 \(\dfrac1a\)가 정수임을 확인하면 계산이 간단해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a\)를 구한다</div>
    <p>확률의 총합이 \(1\)이므로</p>
    $$
    \frac1{12}+\frac1{12}+\frac3{12}+\frac5{12}+a=1,\qquad a=\frac{2}{12}=\frac16.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 평균과 \(\mathrm E(X^2)\)을 구한다</div>
    $$
    \mathrm E(X)=\frac{0+1+2\times3+3\times5+4\times2}{12}=\frac{30}{12}=\frac52,
    $$
    $$
    \mathrm E(X^2)=\frac{0+1+4\times3+9\times5+16\times2}{12}=\frac{90}{12}=\frac{15}{2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 분산을 구한다</div>
    $$
    \mathrm V(X)=\frac{15}{2}-\frac{25}{4}=\frac54,
    $$
    $$
    \mathrm V\left(\frac1aX\right)=\mathrm V(6X)=36\times\frac54=45.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_csat/prob_stat/q28": { answer: 2, html: String.raw`
  <div class="sol-box">한 번의 시행에서 들어가는 공의 개수는 \(k\)가 홀수면 \(3\), \(k=2\)면 \(2\), \(k=4\)면 \(3\), \(k=6\)이면 \(4\)이다. 즉 <b>홀수 개가 들어가는 것은 \(k\)가 홀수일 때와 \(k=4\)일 때뿐</b>이므로, 총합의 홀짝은 이 두 종류가 몇 번 나오는지로만 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 한 번의 시행을 정리한다</div>
    <p>\(k\)가 홀수면 상자 \(1,3,5\)에 한 개씩 들어가 \(3\)개, \(k=2\)면 \(1,2\)에 들어가 \(2\)개, \(k=4\)면 \(1,2,4\)에 들어가 \(3\)개, \(k=6\)이면 \(1,2,3,6\)에 들어가 \(4\)개이다. 각 경우의 확률은 차례로 \(\dfrac36\), \(\dfrac16\), \(\dfrac16\), \(\dfrac16\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사건 \(A\)의 확률을 구한다</div>
    <p>\(4\)번의 시행에서 홀수인 눈이 나온 횟수를 \(a\), \(k=4\)인 횟수를 \(b\)라 하면 총합이 홀수일 조건은 \(a+b\)가 홀수인 것이다. 나머지(\(k=2\) 또는 \(6\))의 확률은 \(\dfrac26\)이다.</p>
    $$
    \mathrm P(A)=\frac{216+216+168+40}{6^4}=\frac{640}{6^4}.
    $$
    <p>여기서 각 항은 \(a=3\), \(a=2\), \(a=1\), \(a=0\)인 경우를 모은 것이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 사건 \(A\cap B\)를 정리한다</div>
    <p>상자 \(3\)에는 \(k\)가 홀수일 때와 \(k=6\)일 때 공이 들어가고, 상자 \(2\)에는 \(k=2,4,6\)일 때 들어간다. \(k=2\), \(k=4\), \(k=6\)인 횟수를 각각 \(p\), \(b\), \(r\)라 하면 조건은</p>
    $$
    a+r=(p+b+r)+1,\qquad a=p+b+1.
    $$
    <p>\(a+p+b+r=4\)와 함께 풀면 \(r=5-2a\)이므로 \(a\le2\)이고, 총합이 홀수라는 조건(\(a+b\)가 홀수)까지 쓰면</p>
    $$
    (a,\ p,\ b,\ r)=(2,\ 0,\ 1,\ 1)\quad\text{또는}\quad(1,\ 0,\ 0,\ 3)
    $$
    <p>뿐이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 확률을 계산한다</div>
    $$
    \mathrm P(A\cap B)=\frac{4!}{2!}\left(\frac36\right)^2\left(\frac16\right)\left(\frac16\right)+\frac{4!}{3!}\left(\frac36\right)\left(\frac16\right)^3=\frac{108+12}{6^4}=\frac{120}{6^4},
    $$
    $$
    \mathrm P(B\,|\,A)=\frac{120}{640}=\frac3{16}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_csat/prob_stat/q29": { answer: 977, html: String.raw`
  <div class="sol-box">한 번의 시행에서 "기록한 수가 \(3\)"일 확률을 \(a\)로 나타내면, \(X\)가 그 확률의 이항분포를 따른다. 평균 조건이 \(a\)를 정해 준다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 한 번의 시행에서 \(3\)을 기록할 확률을 구한다</div>
    <p>눈의 수가 \(a\) 이하일 확률은 \(\dfrac a6\)이고 이때 동전을 \(5\)번 던져 앞면이 \(3\)번 나와야 하며, \(a\)보다 클 확률은 \(\dfrac{6-a}{6}\)이고 이때는 \(3\)번 던져 모두 앞면이어야 한다.</p>
    $$
    \frac a6\times{}_5\mathrm C_3\left(\frac12\right)^5+\frac{6-a}{6}\times\left(\frac12\right)^3
    =\frac{10a}{6\times32}+\frac{6-a}{48}=\frac{a+4}{32}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 평균 조건에서 \(a\)를 구한다</div>
    <p>\(X\)는 이항분포 \(\mathrm B\left(19200,\ \dfrac{a+4}{32}\right)\)를 따르므로</p>
    $$
    19200\times\frac{a+4}{32}=4800,\qquad a+4=8,\qquad a=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 정규분포로 근사한다</div>
    <p>\(X\sim\mathrm B\left(19200,\ \dfrac14\right)\)이므로</p>
    $$
    \mathrm V(X)=19200\times\frac14\times\frac34=3600,\qquad \sigma=60,
    $$
    <p>즉 \(X\)는 근사적으로 \(\mathrm N\left(4800,\ 60^2\right)\)을 따른다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 확률을 구한다</div>
    $$
    k=\mathrm P(X\le4800+120)=\mathrm P\left(Z\le\frac{120}{60}\right)=\mathrm P(Z\le2)=0.5+0.477=0.977,
    $$
    $$
    1000k=977.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{977}\)</div>
` },
