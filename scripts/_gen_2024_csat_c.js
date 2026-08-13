"2024_csat/common/q15": { answer: 3, html: String.raw`
  <div class="sol-box">한 단계 <b>거꾸로</b> 갈 때 후보가 둘뿐이다. \(a_{n+1}=v\)이면 \(a_n=2v\)(짝수 쪽)이거나, \(v=2^{a_n}\)에서 \(a_n=\log_2 v\)(홀수 쪽)인데 뒤쪽은 \(\log_2 v\)가 <b>홀수인 자연수</b>일 때만 살아남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a_6\), \(a_7\)을 정한다</div>
    <p>모든 항이 자연수이고 \(a_6+a_7=3\)이므로 \((a_6,a_7)\)은 \((1,2)\) 또는 \((2,1)\)이다. 두 경우 모두 규칙과 어긋나지 않는다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_6=1\)에서 거슬러 올라간다</div>
    $$
    a_5:\ \{2\}\ \to\ a_4:\ \{1,\ 4\}\ \to\ a_3:\ \{2,\ 8\}\ \to\ a_2:\ \{1,\ 3,\ 4,\ 16\}
    $$
    <p>(예를 들어 \(a_4=4\)에서 \(a_3\)은 \(2\times4=8\), 또는 \(\log_2 4=2\)인데 이는 짝수라 홀수 쪽 조건에 어긋나므로 \(8\)뿐이다.)</p>
    <p>마지막으로 \(a_1\)은 \(1\to2\), \(3\to6\), \(4\to8\), \(16\to32\)로</p>
    $$
    a_1\in\{2,\ 6,\ 8,\ 32\},\qquad \text{합}=48.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_6=2\)에서 거슬러 올라간다</div>
    $$
    a_5:\ \{1,\ 4\}\ \to\ a_4:\ \{2,\ 8\}\ \to\ a_3:\ \{1,\ 3,\ 4,\ 16\}\ \to\ a_2:\ \{2,\ 6,\ 8,\ 32\}
    $$
    <p>여기서 \(a_1\)은 \(2\to1,4\), \(6\to12\), \(8\to3,16\), \(32\to5,64\)이므로</p>
    $$
    a_1\in\{1,\ 3,\ 4,\ 5,\ 12,\ 16,\ 64\},\qquad \text{합}=105.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 모두 더한다</div>
    $$
    48+105=153.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_csat/common/q16": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(3\)으로 통일한다</div>
    $$
    \left(\frac1{27}\right)^{x}=(3^{-3})^{x}=3^{-3x}
    $$
    <p>이므로 주어진 방정식은 \(3^{\,x-8}=3^{-3x}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 비교한다</div>
    $$
    x-8=-3x,\qquad 4x=8,\qquad x=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{2}\)</div>
` },

"2024_csat/common/q21": { answer: 10, html: String.raw`
  <div class="sol-box">\(g(t)\)는 길이 \(2\)인 창을 옮기며 본 최댓값이다. 창이 \(f\ge5\)인 구간 \([1,5]\)를 스치는 동안은 \(g(t)\ge5\)가 저절로 보장되고, 창이 그곳을 <b>막 벗어나는 순간</b>이 문제가 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f(x)\ge5\)인 구간을 찾는다</div>
    $$
    -x^2+6x\ge5\ \Longleftrightarrow\ x^2-6x+5\le0\ \Longleftrightarrow\ 1\le x\le5.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(0\le t\le6\)에서는 항상 \(g(t)\ge5\)</div>
    <p>창 \([t-1,\ t+1]\)이 구간 \([1,5]\)와 만나는 것은 \(t-1\le5\), 즉 \(t\le6\)일 때이다. 이때 창 안에 \(f\ge5\)인 점이 있으므로 \(g(t)\ge5\)이고, 특히</p>
    $$
    g(0)=f(1)=5
    $$
    <p>이므로 \(5\)는 실제로 도달하는 값이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t&gt;6\)에서 조건을 따진다</div>
    <p>\(t&gt;6\)이면 창은 \([t-1,\ t+1]\subset(5,\infty)\)이다. 여기서 \(5&lt;x&lt;6\) 부분의 \(f\)는 \(5\)보다 작고(감소해서 \(0\)까지 내려간다), \(x\ge6\) 부분의 \(f=a\log_4(x-5)\)는 증가하므로</p>
    $$
    g(t)=\max\Big(f(t-1),\ a\log_4(t-4)\Big),\qquad f(t-1)&lt;5.
    $$
    <p>따라서 \(g(t)\ge5\)이려면 \(a\log_4(t-4)\ge5\)이어야 한다. 이 값은 \(t\)에 대하여 증가하므로 \(t\to6+\)일 때가 가장 작고, 그 극한이</p>
    $$
    a\log_4 2=\frac a2
    $$
    <p>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(a\)의 최솟값을 구한다</div>
    $$
    \frac a2\ge5,\qquad a\ge10.
    $$
    <p>\(a=10\)이면 \(t&gt;6\)에서 \(g(t)&gt;5\)이고 \(g(0)=5\)이므로 최솟값이 정확히 \(5\)가 된다. 따라서 구하는 최솟값은 \(10\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{10}\)</div>
` },

"2024_csat/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 같은 것이 있는 순열의 수를 쓴다</div>
    <p>\(x\)가 \(2\)개, \(y\)가 \(2\)개, \(z\)가 \(1\)개이므로</p>
    $$
    \frac{5!}{2!\times2!}=\frac{120}{4}=30.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_csat/prob_stat/q24": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(A)\)를 구한다</div>
    $$
    \mathrm P(A^{C})=2\mathrm P(A)\ \Longrightarrow\ 1-\mathrm P(A)=2\mathrm P(A),\qquad \mathrm P(A)=\frac13.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 독립의 뜻을 쓴다</div>
    <p>두 사건이 서로 독립이므로 \(\mathrm P(A\cap B)=\mathrm P(A)\mathrm P(B)\)이다.</p>
    $$
    \frac13\times\mathrm P(B)=\frac14,\qquad \mathrm P(B)=\frac34.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_csat/prob_stat/q25": { answer: 5, html: String.raw`
  <div class="sol-box">"합이 \(10\) 이하"의 여사건은 \(5+6=11\) 하나뿐이라 세기가 훨씬 쉽다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 여사건을 파악한다</div>
    <p>\(1\)부터 \(6\)까지의 수 중 두 수의 합이 \(10\)보다 큰 경우는 \(5+6=11\)뿐이다. 따라서 양 끝에 놓인 두 수의 합이 \(10\) 이하인 사건을 \(A\)라 하면, \(A^{C}\)는 양 끝이 \(5\)와 \(6\)인 사건이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건의 확률을 센다</div>
    <p>양 끝에 \(5,6\)을 놓는 경우가 \(2!\)가지, 나머지 \(4\)장을 가운데 배열하는 경우가 \(4!\)가지이므로</p>
    $$
    \mathrm P(A^{C})=\frac{2!\times4!}{6!}=\frac{48}{720}=\frac1{15}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 답을 구한다</div>
    $$
    \mathrm P(A)=1-\frac1{15}=\frac{14}{15}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_csat/prob_stat/q26": { answer: 2, html: String.raw`
  <div class="sol-box">\(Y=2\)는 \(X\ge2\)를 통째로 모은 것이므로, \(Y=0\)과 \(Y=1\)만 구하고 나머지는 \(1\)에서 빼면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(X\)의 분포를 쓴다</div>
    <p>\(X\)는 이항분포 \(\mathrm B\!\left(4,\ \dfrac12\right)\)를 따르므로</p>
    $$
    \mathrm P(Y=0)=\mathrm P(X=0)={}_4\mathrm C_0\left(\frac12\right)^4=\frac1{16},
    $$
    $$
    \mathrm P(Y=1)=\mathrm P(X=1)={}_4\mathrm C_1\left(\frac12\right)^4=\frac4{16}=\frac14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 나머지를 채운다</div>
    $$
    \mathrm P(Y=2)=1-\frac1{16}-\frac14=\frac{11}{16}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 평균을 구한다</div>
    $$
    \mathrm E(Y)=0\times\frac1{16}+1\times\frac14+2\times\frac{11}{16}=\frac4{16}+\frac{22}{16}=\frac{26}{16}=\frac{13}{8}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_csat/prob_stat/q27": { answer: 2, html: String.raw`
  <div class="sol-box">신뢰구간의 두 끝이 \(\overline{x}\)에서 같은 거리만큼 떨어져 있다는 점을 쓰면 \(a\)와 \(\overline{x}\)가 한 번에 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 신뢰구간을 쓴다</div>
    <p>모표준편차가 \(5\), 표본의 크기가 \(49\)이므로 모평균 \(m\)에 대한 신뢰도 \(95\%\)의 신뢰구간은</p>
    $$
    \overline{x}-1.96\times\frac{5}{\sqrt{49}}\le m\le\overline{x}+1.96\times\frac{5}{\sqrt{49}},
    $$
    $$
    \overline{x}-1.4\le m\le\overline{x}+1.4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 주어진 구간과 비교한다</div>
    $$
    a=\overline{x}-1.4,\qquad \frac65a=\overline{x}+1.4.
    $$
    <p>두 식을 빼면</p>
    $$
    \frac65a-a=\frac a5=2.8,\qquad a=14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 표본평균을 구한다</div>
    $$
    \overline{x}=a+1.4=15.4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },
