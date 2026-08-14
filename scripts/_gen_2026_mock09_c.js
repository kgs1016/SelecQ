"2026_mock09/prob_stat/q23": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 중복순열의 수를 쓴다</div>
    <p>세 문자에서 중복을 허락하여 \(4\)개를 택해 일렬로 나열하므로</p>
    $$
    {}_3\Pi_4=3^4=81.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock09/prob_stat/q24": { answer: 3, html: String.raw`
  <div class="sol-box">\(A\cup B\)에서 \(A^{C}\cap B\)를 빼면 정확히 \(A\)가 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(A)\)를 구한다</div>
    $$
    \mathrm P(A)=\mathrm P(A\cup B)-\mathrm P(A^{C}\cap B)=\frac56-\frac14=\frac7{12}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건의 확률을 구한다</div>
    $$
    \mathrm P(A^{C})=1-\frac7{12}=\frac5{12}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock09/prob_stat/q25": { answer: 5, html: String.raw`
  <div class="sol-box">\(1\)학년이 \(1\)명뿐이므로 \(5\)명을 뽑을 때 \(2\)학년과 \(3\)학년 수가 같으려면 \(1+2+2\)로 갈릴 수밖에 없다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 구한다</div>
    $$
    {}_8\mathrm C_5={}_8\mathrm C_3=56.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건을 만족시키는 경우를 센다</div>
    <p>\(2\)학년과 \(3\)학년을 \(k\)명씩 뽑으면 \(2k\le5\)이고 \(1\)학년은 최대 \(1\)명이므로 \(2k=4\), 즉 \(k=2\)이고 \(1\)학년 \(1\)명을 뽑아야 한다.</p>
    $$
    1\times{}_3\mathrm C_2\times{}_4\mathrm C_2=1\times3\times6=18.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 확률을 구한다</div>
    $$
    \frac{18}{56}=\frac9{28}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock09/prob_stat/q26": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 신뢰구간의 폭을 쓴다</div>
    <p>신뢰구간이 \(\overline x-c\le m\le\overline x+c\)이므로</p>
    $$
    c=1.96\times\frac{2\sqrt2}{\sqrt{128}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 계산한다</div>
    <p>\(\sqrt{128}=8\sqrt2\)이므로</p>
    $$
    c=1.96\times\frac{2\sqrt2}{8\sqrt2}=1.96\times\frac14=0.49.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock09/prob_stat/q27": { answer: 4, html: String.raw`
  <div class="sol-box">각 면의 수는 \(1,2,2,3\)이므로 한 상자에서 \(2\)가 나올 확률만 \(\dfrac24\)이고 나머지는 \(\dfrac14\)이다. 두 수의 차는 \(0\), \(1\), \(2\) 중 하나다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 확률분포를 구한다</div>
    <p>두 수가 같을 때 \(X=0\)이므로</p>
    $$
    \mathrm P(X=0)=\frac14\times\frac14+\frac24\times\frac24+\frac14\times\frac14=\frac6{16}.
    $$
    <p>두 수가 \(\{1,2\}\) 또는 \(\{2,3\}\)일 때 \(X=1\)이므로</p>
    $$
    \mathrm P(X=1)=2\times\frac14\times\frac24+2\times\frac24\times\frac14=\frac8{16}.
    $$
    <p>두 수가 \(\{1,3\}\)일 때 \(X=2\)이므로</p>
    $$
    \mathrm P(X=2)=2\times\frac14\times\frac14=\frac2{16}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 평균과 \(\mathrm E(X^2)\)을 구한다</div>
    $$
    \mathrm E(X)=\frac{0\times6+1\times8+2\times2}{16}=\frac{12}{16}=\frac34,
    $$
    $$
    \mathrm E(X^2)=\frac{0\times6+1\times8+4\times2}{16}=\frac{16}{16}=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 분산을 구한다</div>
    $$
    \mathrm V(X)=1-\left(\frac34\right)^2=\frac7{16}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock09/prob_stat/q28": { answer: 2, html: String.raw`
  <div class="sol-box">같은 색 카드는 구별하지 않으므로 색깔별로 따로 세어 곱하면 된다. 두 조건은 모두 "빼는" 조건이므로, 전체에서 (가)를 어기는 경우를 빼고 다시 (나)를 어기는 경우를 빼면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 없이 나누는 경우를 센다</div>
    <p>빨간색·파란색은 각각 \({}_3\mathrm C_1=3\)가지, 노란색·보라색은 각각 \({}_3\mathrm H_3={}_5\mathrm C_2=10\)가지이므로</p>
    $$
    3\times3\times10\times10=900.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (가)를 만족시키는 경우를 센다</div>
    <p>\(\mathrm A\)가 한 장도 못 받는 경우는 두 학생에게만 나누는 경우이므로 \(2\times2\times{}_2\mathrm H_3\times{}_2\mathrm H_3=2\times2\times4\times4=64\)가지이고, \(\mathrm B\)도 마찬가지로 \(64\)가지이다. 둘 다 못 받는 경우는 \(\mathrm C\)에게 몰아주는 \(1\)가지이므로</p>
    $$
    900-(64+64-1)=773.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건 (나)를 어기는 경우를 센다</div>
    <p>\(\mathrm A\)가 네 색을 모두 받으면, 빨강·파랑은 \(\mathrm A\)의 몫이고 노랑·보라도 한 장씩 \(\mathrm A\)에게 간다. 남은 노랑 \(2\)장과 보라 \(2\)장을 세 학생에게 나누는 경우는</p>
    $$
    {}_3\mathrm H_2\times{}_3\mathrm H_2=6\times6=36.
    $$
    <p>이 중 \(\mathrm B\)가 한 장도 못 받는 경우는 남은 카드를 \(\mathrm A\), \(\mathrm C\)에게만 나누는 \({}_2\mathrm H_2\times{}_2\mathrm H_2=3\times3=9\)가지이므로, 조건 (가)를 지키면서 (나)를 어기는 경우는 \(36-9=27\)가지이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 빼서 구한다</div>
    $$
    773-27=746.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },
