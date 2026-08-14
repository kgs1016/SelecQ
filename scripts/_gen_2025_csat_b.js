"2025_csat/common/q14": { answer: 4, html: String.raw`
  <div class="sol-box">원 \(O\)의 중심이 \(\mathrm A\)이므로 \(\overline{\mathrm{AD}}=\overline{\mathrm{AE}}=r\)이다. 넓이의 비는 \(\sin A\)가 공통이라 그대로 변의 곱의 비가 되고, 마지막에 \(\mathrm P\)가 지름의 반대쪽 끝에 올 때 \(\overline{\mathrm{BC}}\)까지의 거리가 가장 멀다는 점을 쓴다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 세 변을 \(r\)로 나타낸다</div>
    <p>\(\overline{\mathrm{AD}}:\overline{\mathrm{DB}}=3:2\)이고 \(\overline{\mathrm{AD}}=r\)이므로 \(\overline{\mathrm{DB}}=\dfrac23r\), \(\overline{\mathrm{AB}}=\dfrac53r\)이다. \(\overline{\mathrm{CE}}=x\)라 하면 \(\overline{\mathrm{AC}}=r+x\)이고, 두 삼각형의 넓이가</p>
    $$
    \triangle\mathrm{ADE}=\frac12r^2\sin A,\qquad
    \triangle\mathrm{ABC}=\frac12\times\frac53r\times(r+x)\times\sin A
    $$
    <p>이므로 넓이의 비 \(9:35\)에서</p>
    $$
    35r^2=9\times\frac53r(r+x),\qquad 7r=3(r+x),\qquad x=\frac43r.
    $$
    <p>따라서 \(\overline{\mathrm{AC}}=\dfrac73r\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사인법칙으로 \(\overline{\mathrm{BC}}\)를 구한다</div>
    <p>\(\sin A:\sin C=8:5\)이므로</p>
    $$
    \overline{\mathrm{BC}}=\overline{\mathrm{AB}}\times\frac{\sin A}{\sin C}=\frac53r\times\frac85=\frac83r.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 코사인법칙으로 \(\sin C\)를 구한다</div>
    <p>\(\angle\mathrm{ACB}=\theta\)라 하면</p>
    $$
    \cos\theta=\frac{\left(\frac83r\right)^2+\left(\frac73r\right)^2-\left(\frac53r\right)^2}{2\times\frac83r\times\frac73r}
    =\frac{88}{112}=\frac{11}{14},
    $$
    $$
    \sin\theta=\sqrt{1-\left(\frac{11}{14}\right)^2}=\frac{5\sqrt3}{14}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 외접원의 반지름으로 \(r\)를 확정한다</div>
    $$
    \frac{\overline{\mathrm{AB}}}{\sin\theta}=2\times7=14,\qquad \frac53r=14\times\frac{5\sqrt3}{14}=5\sqrt3,\qquad r=3\sqrt3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 넓이의 최댓값을 구한다</div>
    <p>\(\mathrm A\)에서 \(\overline{\mathrm{BC}}\)에 내린 수선의 발을 \(\mathrm H\)라 하면</p>
    $$
    \overline{\mathrm{AH}}=\overline{\mathrm{AC}}\sin\theta=\frac73\times3\sqrt3\times\frac{5\sqrt3}{14}=\frac{15}{2}.
    $$
    <p>\(\mathrm P\)는 중심이 \(\mathrm A\)인 원 위의 점이므로, \(\overline{\mathrm{BC}}\)에서 가장 먼 위치는 직선 \(\mathrm{AH}\)를 \(\mathrm A\) 너머로 연장하여 원과 만나는 점이다. 그때 밑변 \(\overline{\mathrm{BC}}\)까지의 거리는 \(r+\overline{\mathrm{AH}}\)이므로</p>
    $$
    \frac12\times\frac83\times3\sqrt3\times\left(3\sqrt3+\frac{15}{2}\right)=4\sqrt3\left(3\sqrt3+\frac{15}{2}\right)=36+30\sqrt3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_csat/common/q15": { answer: 2, html: String.raw`
  <div class="sol-box">조건 (나)의 방정식은 \(g'(x)=0\)의 해들과 그것을 \(4\)만큼 오른쪽으로 민 해들의 합집합을 묻는다. \(g'\)의 해가 세 개인데 합집합이 네 개가 되려면, 세 해가 간격 \(4\)로 나란히 놓여 있어야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미분가능 조건으로 \(f\)를 정한다</div>
    <p>\(x\le0\)에서 \(g(x)=x^3+ax^2+15x+7\)이므로 \(g(0)=7\), \(g'(0)=15\)이다. 조건 (가)에서 \(f(0)=7\), \(f'(0)=15\)이므로 최고차항의 계수를 \(p\ (p&lt;0)\)라 하면</p>
    $$
    f(x)=px^2+15x+7.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(g'(x)=0\)의 해가 셋임을 확인한다</div>
    <p>\(x&gt;0\)에서 \(f'(x)=2px+15=0\)의 해는 \(x=-\dfrac{15}{2p}&gt;0\)로 하나이고, \(g'(0)=15\ne0\)이다. 한편 \(3x^2+2ax+15=0\)은 두 근의 곱이 \(5&gt;0\)이므로 두 근의 부호가 같고, \(x&lt;0\)에서 해를 가지려면 두 근이 모두 음수여야 한다.</p>
    <p>이 이차방정식이 해를 갖지 않으면 \(g'(x)=0\)의 해가 하나뿐이라 \(g'(x)g'(x-4)=0\)의 해는 \(2\)개가 되어 조건에 어긋난다. 중근을 갖는 경우는 판별식 \(4a^2-180=0\), 즉 \(a=3\sqrt5\)인데 문제에서 이를 제외했다. 따라서 서로 다른 두 음의 실근 \(\alpha&lt;\beta&lt;0\)을 갖는다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 해가 \(4\)개가 되는 배치를 찾는다</div>
    <p>\(g'(x)=0\)의 해가 \(\alpha\), \(\beta\), \(-\dfrac{15}{2p}\)의 셋이므로 \(g'(x-4)=0\)의 해는 이들을 \(4\)만큼 민 셋이다. 합집합의 크기가 \(4\)이려면 두 개가 겹쳐야 하므로</p>
    $$
    \beta=\alpha+4,\qquad -\frac{15}{2p}=\beta+4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 근과 계수의 관계로 \(a\), \(p\)를 구한다</div>
    <p>\(3x^2+2ax+15=0\)에서 두 근의 곱은 \(5\)이므로</p>
    $$
    \alpha(\alpha+4)=5,\qquad \alpha^2+4\alpha-5=0,\qquad (\alpha+5)(\alpha-1)=0.
    $$
    <p>\(\alpha&lt;0\)이므로 \(\alpha=-5\), \(\beta=-1\)이다. 두 근의 합이 \(-\dfrac{2a}{3}\)이므로 \(-6=-\dfrac{2a}{3}\)에서 \(a=9\)이고,</p>
    $$
    -\frac{15}{2p}=-1+4=3,\qquad p=-\frac52.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 답을 구한다</div>
    $$
    g(-2)=-8+9\times4-30+7=5,\qquad g(2)=-\frac52\times4+30+7=27,
    $$
    $$
    g(-2)+g(2)=32.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_csat/common/q16": { answer: 7, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 진수 조건을 적는다</div>
    $$
    x-3&gt;0,\qquad 3x-5&gt;0\ \Longrightarrow\ x&gt;3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 밑을 \(4\)로 맞춘다</div>
    $$
    \log_2(x-3)=\log_{2^2}(x-3)^2=\log_4(x-3)^2
    $$
    <p>이므로 주어진 식은 \(\log_4(x-3)^2=\log_4(3x-5)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 풀어서 조건에 맞는 해를 고른다</div>
    $$
    (x-3)^2=3x-5,\qquad x^2-9x+14=0,\qquad (x-2)(x-7)=0.
    $$
    <p>\(x&gt;3\)이므로 \(x=7\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{7}\)</div>
` },

"2025_csat/common/q17": { answer: 33, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int\left(9x^2+4x\right)dx=3x^3+2x^2+C.
    $$
    <p>\(f(1)=6\)이므로 \(3+2+C=6\)에서 \(C=1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    f(2)=24+8+1=33.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{33}\)</div>
` },

"2025_csat/common/q18": { answer: 96, html: String.raw`
  <div class="sol-box">\(a_n+a_{n+4}=12\)는 네 칸 떨어진 두 항을 짝지으라는 뜻이다. \(16\)개를 \(8\)쌍으로 묶으면 곱셈 한 번으로 끝난다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 앞의 여덟 항을 짝짓는다</div>
    $$
    \sum_{n=1}^{8}a_n=\sum_{n=1}^{4}\left(a_n+a_{n+4}\right)=\sum_{n=1}^{4}12=48.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 뒤의 여덟 항도 같은 방법으로 묶는다</div>
    $$
    \sum_{n=9}^{16}a_n=\sum_{n=9}^{12}\left(a_n+a_{n+4}\right)=\sum_{n=9}^{12}12=48.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 더한다</div>
    $$
    \sum_{n=1}^{16}a_n=48+48=96.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{96}\)</div>
` },

"2025_csat/common/q19": { answer: 41, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극값을 갖는 \(x\)를 구한다</div>
    $$
    f'(x)=6x^2-6ax-12a^2=6(x+a)(x-2a)=0,\qquad x=-a\ \text{또는}\ x=2a.
    $$
    <p>\(a&gt;0\)이므로 \(-a&lt;2a\)이고, \(f'\)의 부호가 \(x=-a\)에서 양에서 음으로 바뀌므로 \(x=-a\)에서 극대이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극댓값 조건에서 \(a\)를 구한다</div>
    $$
    f(-a)=-2a^3-3a^3+12a^3=7a^3=\frac7{27},\qquad a^3=\frac1{27},\qquad a=\frac13.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(3)\)을 구한다</div>
    <p>\(f(x)=2x^3-x^2-\dfrac43x\)이므로</p>
    $$
    f(3)=54-9-4=41.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{41}\)</div>
` },
