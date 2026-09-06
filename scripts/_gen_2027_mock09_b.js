"2027_mock09/common/q12": { answer: 4, html: String.raw`
  <div class="sol-box">삼각형 ABC와 삼각형 BCD의 외접원이 같으므로, 삼각형 ABC에서 구한 외접원의 반지름을 삼각형 BCD에 그대로 쓴다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 코사인법칙으로 \(\overline{\mathrm{BC}}\)를 구한다</div>
    $$
    \overline{\mathrm{BC}}^2=4^2+5^2-2\times4\times5\times\frac18=36,\qquad \overline{\mathrm{BC}}=6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사인법칙으로 외접원의 지름을 구한다</div>
    <p>\(\angle\mathrm{BAC}\)는 삼각형의 내각이므로 \(\sin(\angle\mathrm{BAC})&gt;0\)이고</p>
    $$
    \sin(\angle\mathrm{BAC})=\sqrt{1-\frac1{64}}=\frac{3\sqrt7}{8}.
    $$
    <p>외접원의 반지름을 \(R\)라 하면</p>
    $$
    2R=\frac{\overline{\mathrm{BC}}}{\sin(\angle\mathrm{BAC})}=\frac{6}{\frac{3\sqrt7}{8}}=\frac{16}{\sqrt7}=\frac{16\sqrt7}{7}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 삼각형 BCD에서 사인법칙을 쓴다</div>
    <p>삼각형 BCD의 외접원도 반지름이 \(R\)이므로</p>
    $$
    \overline{\mathrm{BD}}=2R\sin(\angle\mathrm{BCD})=\frac{16\sqrt7}{7}\times\frac{\sqrt{14}}{4}=\frac{4\sqrt{98}}{7}=\frac{4\times7\sqrt2}{7}=4\sqrt2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2027_mock09/common/q13": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f(x)\)를 정한다</div>
    <p>\(f(0)=0\)이고 최고차항의 계수가 \(6\)이므로 \(f(x)=6x(x-t)\)라 하면</p>
    $$
    \int_0^2 6x(x-t)\,dx=\Big[2x^3-3tx^2\Big]_0^2=16-12t=4,\qquad t=1.
    $$
    <p>따라서 \(f(x)=6x(x-1)\)이고, \(0\le x\le1\)에서 \(f(x)\le0\), \(1\le x\le2\)에서 \(f(x)\ge0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄱ. 절댓값을 구간별로 벗긴다</div>
    $$
    \int_0^2|f(x)|dx=-\int_0^1 f(x)dx+\int_1^2 f(x)dx=-\Big[2x^3-3x^2\Big]_0^1+\Big[2x^3-3x^2\Big]_1^2=1+5=6.
    $$
    <p>(참)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄴ. \(g\)의 정적분이 \(0\)이다</div>
    <p>\(g(1)=0\)인 일차함수는 \(g(x)=m(x-1)\ (m\ne0)\) 꼴이므로</p>
    $$
    \int_0^2 g(x)dx=m\Big[\frac12x^2-x\Big]_0^2=0,\qquad \int_0^2\{f(x)+g(x)\}dx=4+0=4.
    $$
    <p>(참)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> ㄷ. \(h(x)=m(x-1)\)로 잡고 \(k\)를 맞춘다</div>
    <p>\(\displaystyle\int_0^2\{f(x)+h(x)\}dx=4\)에서 \(\displaystyle\int_0^2 h(x)dx=0\)이므로 \(h(x)=mx+n\)이라 하면 \(2m+2n=0\), 즉 \(h(x)=m(x-1)\)이다. \(m=0\)이면 적분값이 \(6\)이 되어 \(k&gt;6\)에 맞지 않으므로 \(m&gt;0\)인 경우를 본다.</p>
    <p>\(f(x)+h(x)=(6x+m)(x-1)\)이고 \(0\le x\le2\)에서 \(6x+m&gt;0\)이므로</p>
    $$
    |f(x)+h(x)|=(6x+m)|x-1|=|f(x)|+m|x-1|,
    $$
    $$
    \int_0^2|f(x)+h(x)|dx=6+m\int_0^2|x-1|dx=6+m\left(\frac12+\frac12\right)=6+m.
    $$
    <p>따라서 \(k&gt;6\)인 각각의 \(k\)에 대하여 \(m=k-6&gt;0\)으로 잡으면 두 조건을 동시에 만족시키는 일차함수 \(h(x)=(k-6)(x-1)\)이 존재한다. (참)</p>
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2027_mock09/common/q14": { answer: 5, html: String.raw`
  <div class="sol-box">\(k\)가 세제곱수가 아니면 각 항은 자연수 \(k\)이고, \(k=m^3\)이면 \(\dfrac{m^2}{5}\)이다. 그러므로 세제곱수에서 나오는 \(\dfrac{m^2}{5}\)들의 누적합이 자연수인지만 보면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 각 항의 값을 구한다</div>
    <p>\(k\)는 자연수이므로 \(f(k)=\dfrac1k\)이다.</p>
    <p>\(k=m^3\ (m\)은 자연수\()\)이면 \(\sqrt[3]{k}=m\)이 자연수이므로</p>
    $$
    \frac{f(\sqrt[3]{k})}{5f(k)}=\frac{\frac1m}{\frac5{m^3}}=\frac{m^2}{5}.
    $$
    <p>\(k\)가 세제곱수가 아니면 \(\sqrt[3]{k}\)가 자연수가 아니므로</p>
    $$
    \frac{f(\sqrt[3]{k})}{5f(k)}=\frac{5}{\frac5k}=k.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 세제곱수 항의 누적합을 따라간다</div>
    <p>\(300\) 이하의 세제곱수는 \(1,\,8,\,27,\,64,\,125,\,216\)이고(\(7^3=343&gt;300\)), 각각 \(\dfrac15,\ \dfrac45,\ \dfrac95,\ \dfrac{16}5,\ 5,\ \dfrac{36}5\)를 더한다. 나머지 항은 모두 자연수이므로 합이 자연수일 조건은 이 값들의 누적합이 자연수인 것이다.</p>
    <table class="sol-table">
      <tr><th>\(n\)의 범위</th><th>\(1\sim7\)</th><th>\(8\sim26\)</th><th>\(27\sim63\)</th><th>\(64\sim124\)</th><th>\(125\sim215\)</th><th>\(216\sim300\)</th></tr>
      <tr><th>누적합</th><td>\(\frac15\)</td><td>\(1\)</td><td>\(\frac{14}5\)</td><td>\(6\)</td><td>\(11\)</td><td>\(\frac{91}5\)</td></tr>
      <tr><th>판정</th><td class="sol-no">✗</td><td class="sol-ok">○</td><td class="sol-no">✗</td><td class="sol-ok">○</td><td class="sol-ok">○</td><td class="sol-no">✗</td></tr>
    </table>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 개수를 센다</div>
    <p>조건을 만족시키는 \(n\)은 \(8\le n\le26\) 또는 \(64\le n\le215\)이므로</p>
    $$
    19+152=171.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2027_mock09/common/q15": { answer: 4, html: String.raw`
  <div class="sol-box">분모가 \(0\)이 되지 않으면 극한은 항상 존재한다. 조건의 집합이 \(t=\dfrac32\)를 포함하는 구간이므로 \(t=\dfrac32\)에서 분모가 중근을 갖고, 그 중근이 분자의 중근이기도 해야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분모를 정리하고 판별식을 구한다</div>
    <p>\(f(x)=x^2+px+q\)라 하고 분모를 \(g(x)=f(x)+f(x-t)\)라 하면</p>
    $$
    g(x)=2x^2+2(p-t)x+t^2-pt+2q,\qquad \frac D4=(p-t)^2-2\left(t^2-pt+2q\right)=p^2-4q-t^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 판별식의 부호와 \(t\)의 범위를 연결한다</div>
    <p>\(D&lt;0\)이면 \(g(x)=0\)인 실수가 없으므로 모든 \(a\)에서 극한이 존재한다. \(p^2-4q\le0\)이면 모든 양수 \(t\)에서 \(D&lt;0\)이 되어 조건에 맞지 않으므로 \(p^2-4q&gt;0\)이고, \(D&lt;0\)인 \(t\)는 \(t&gt;\sqrt{p^2-4q}\)이다.</p>
    <p>\(D&gt;0\)이면 \(g(x)=0\)의 서로 다른 두 실근이 모두 분자 \((2x+1)f(x)=0\)의 근(\(t\)와 무관한 \(3\)개 이하의 값)이어야 하는데, 두 근의 합 \(t-p\)는 \(t\)마다 다르므로 그런 \(t\)는 있어도 유한 개뿐이다.</p>
    <p>조건을 만족시키는 \(t\)의 집합이 구간 \(\left\{t\,\middle|\,t\ge\dfrac32\right\}\)이므로 \(\sqrt{p^2-4q}=\dfrac32\), 즉</p>
    $$
    p^2-4q=\frac94\qquad\cdots\ ㉠
    $$
    <p>이고, \(t=\dfrac32\)일 때 \(D=0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=\dfrac32\)에서 중근 조건으로 \(p,\ q\)를 정한다</div>
    <p>\(t=\dfrac32\)일 때 \(g(x)=0\)의 중근은 \(x=-\dfrac{p-t}{2}=\dfrac{3-2p}{4}\)이고, 극한이 존재하려면 이 값이 분자 \((2x+1)f(x)=0\)의 중근이어야 한다. ㉠에서 \(f(x)=0\)은 서로 다른 두 실근을 가지므로 분자가 중근을 가지려면 \(x=-\dfrac12\)가 \(f(x)=0\)의 근이어야 한다.</p>
    $$
    \frac{3-2p}{4}=-\frac12\ \Rightarrow\ p=\frac52,\qquad f\!\left(-\frac12\right)=\frac14-\frac54+q=0\ \Rightarrow\ q=1.
    $$
    <p>이때 \(p^2-4q=\dfrac{25}4-4=\dfrac94\)로 ㉠을 만족시킨다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(t&lt;\dfrac32\)에서 극한이 존재하지 않음을 확인하고 답을 구한다</div>
    <p>\(f(x)=x^2+\dfrac52x+1=\left(x+\dfrac12\right)(x+2)\)이므로 분자의 근은 \(-\dfrac12,\ -2\)뿐이다. \(0&lt;t&lt;\dfrac32\)이면 \(D&gt;0\)이고 \(g(x)=0\)의 서로 다른 두 근이 \(-\dfrac12,\ -2\)여야 하므로 두 근의 합 \(t-\dfrac52=-\dfrac52\), 즉 \(t=0\)이 되어 모순이다. 따라서 조건에 맞는다.</p>
    $$
    f(2)=4+5+1=10.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2027_mock09/common/q16": { answer: 6, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 진수 조건과 밑 통일</div>
    <p>\(x-3&gt;0\), \(2x-3&gt;0\)에서 \(x&gt;3\)이다. \(\log_9(2x-3)=\dfrac12\log_3(2x-3)\)이므로 양변에 \(2\)를 곱하면</p>
    $$
    \log_3(x-3)^2=\log_3(2x-3),\qquad (x-3)^2=2x-3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 이차방정식을 푼다</div>
    $$
    x^2-8x+12=0,\qquad (x-2)(x-6)=0.
    $$
    <p>\(x&gt;3\)이므로 \(x=6\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{6}\)</div>
` },

"2027_mock09/common/q17": { answer: 11, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부정적분으로 \(f(x)\)를 구한다</div>
    $$
    f(x)=\int\left(6x^2-2x\right)dx=2x^3-x^2+C.
    $$
    <p>\(f(0)=10\)에서 \(C=10\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 값을 구한다</div>
    $$
    f(1)=2-1+10=11.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{11}\)</div>
` },

"2027_mock09/common/q18": { answer: 38, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 홀짝을 확인하며 차례로 구한다</div>
    <table class="sol-table">
      <tr><th>\(a_1\)</th><th>\(a_2\)</th><th>\(a_3\)</th><th>\(a_4\)</th><th>\(a_5\)</th><th>\(a_6\)</th></tr>
      <tr><td>\(28\)</td><td>\(14\)</td><td>\(7\)</td><td>\(2\times7+12=26\)</td><td>\(13\)</td><td>\(2\times13+12=38\)</td></tr>
    </table>
    <p>\(28,\ 14,\ 26\)은 짝수이므로 반으로 나누고, \(7,\ 13\)은 홀수이므로 \(2a_n+12\)를 쓴다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{38}\)</div>
` },

"2027_mock09/common/q19": { answer: 15, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 기울기가 \(8\)인 접점을 찾는다</div>
    <p>\(f(x)=x^3-3x^2-x+2\)라 하면 \(f'(x)=3x^2-6x-1\)이고, 접점의 \(x\)좌표를 \(t\)라 하면</p>
    $$
    3t^2-6t-1=8,\qquad 3(t+1)(t-3)=0,\qquad t=-1\ \text{또는}\ t=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(y\)절편이 양수인 쪽을 고른다</div>
    <p>\(f(-1)=-1\), \(f(3)=-1\)이므로 두 접선은</p>
    $$
    y=8(x+1)-1=8x+7,\qquad y=8(x-3)-1=8x-25.
    $$
    <p>\(y\)절편이 양수인 것은 \(y=8x+7\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(k\)를 구한다</div>
    $$
    k=8\times1+7=15.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{15}\)</div>
` },

"2027_mock09/common/q20": { answer: 17, html: String.raw`
  <div class="sol-box">\(y=-k\cos x\)의 그래프는 직선 \(x=\pi\)에 대하여 대칭이고 점 \(\left(\dfrac{\pi}2,\,0\right)\)에 대하여 대칭이다. 두 대칭성으로 B, C, D의 좌표를 A의 좌표 \(a\)로 나타낸다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> (가) — 점 B의 좌표</div>
    <p>두 곡선의 교점에서 \(\sin x=-k\cos x\), 즉 \(\tan x=-k\)이다. A\((a,\ \sin a)\)는 제1사분면의 점이고 \(k&gt;0\)이므로 \(\cos a&lt;0\), 즉 \(\dfrac{\pi}2&lt;a&lt;\pi\)이다.</p>
    <p>\(\tan x=-k\)의 \(0\le x\le2\pi\)에서의 나머지 해는 \(x=a+\pi\)이고 \(\sin(a+\pi)=-\sin a&lt;0\)이므로 제4사분면의 교점은</p>
    $$
    \mathrm{B}(\pi+a,\ -\sin a),\qquad (가)=\pi+a.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> (나) — 점 D와 점 C의 좌표</div>
    <p>\(g(2\pi-x)=-k\cos(2\pi-x)=-k\cos x=g(x)\)이므로 곡선 \(y=g(x)\)는 직선 \(x=\pi\)에 대하여 대칭이다. 따라서 B와 같은 \(y\)좌표를 갖는 다른 점 D, A와 같은 \(y\)좌표를 갖는 다른 점 C는</p>
    $$
    \mathrm{D}(\pi-a,\ -\sin a),\qquad \mathrm{C}(2\pi-a,\ \sin a),\qquad (나)=\pi-a.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 삼각형 CDB의 넓이</div>
    <p>\(\overline{\mathrm{DB}}=(\pi+a)-(\pi-a)=2a\)이고 선분 DB는 직선 \(y=-\sin a\) 위에 있으며 C의 \(y\)좌표는 \(\sin a\)이므로 높이는 \(2\sin a\)이다.</p>
    $$
    (\text{삼각형 CDB의 넓이})=\frac12\times2a\times2\sin a=2a\sin a.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 삼각형 AOD의 넓이</div>
    <p>A\((a,\ \sin a)\)와 D\((\pi-a,\ -\sin a)\)의 중점은 E\(\left(\dfrac{\pi}2,\ 0\right)\)이므로 E는 선분 AD 위의 점이다. 두 삼각형 AOE, DOE는 밑변 \(\overline{\mathrm{OE}}=\dfrac{\pi}2\)를 공유하고 높이가 각각 \(\sin a\)이므로</p>
    $$
    (\text{삼각형 AOD의 넓이})=2\times\frac12\times\frac{\pi}2\times\sin a=\frac{\pi}2\sin a.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> (다) — 넓이의 비에서 \(a\)를 구한다</div>
    $$
    \frac{\pi}2\sin a=\frac5{14}\times2a\sin a,\qquad \frac{\pi}2=\frac{5a}7,\qquad a=\frac{7}{10}\pi.
    $$
    <p>\(\dfrac{\pi}2&lt;\dfrac7{10}\pi&lt;\pi\)이므로 조건에 맞고, \(\tan a=-k\)에서 \(k=-\tan\dfrac7{10}\pi\)이다. 즉 \((다)=\dfrac7{10}\pi\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 답을 구한다</div>
    <p>\(p(a)=\pi+a\), \(q(a)=\pi-a\), \(\alpha=\dfrac7{10}\pi\)이므로</p>
    $$
    3\times\frac{p(\alpha)}{q(\alpha)}=3\times\frac{\frac{17}{10}\pi}{\frac3{10}\pi}=3\times\frac{17}3=17.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{17}\)</div>
` },

"2027_mock09/common/q21": { answer: 12, html: String.raw`
  <div class="sol-box">\(g\)는 \(f\)의 단순근 \(\beta\)에서만 꺾이고, \(|(x-1)(x-a)(x-4+a)|\)는 단순근에서만 꺾인다. 합이 매끄러우려면 두 함수가 같은 한 점 \(x=\beta\)에서만 꺾이고, 거기서 꺾임이 서로 상쇄되어야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f\), \(g\)의 꼴과 \(g\)가 미분가능하지 않은 점</div>
    <p>조건 (가)에서 \(f(x)=(x-\alpha)^2(x-\beta)\ (\alpha\ne\beta)\)이다. \(x&lt;\beta\)에서 \(f(x)\le0\), \(x\ge\beta\)에서 \(f(x)\ge0\)이고 \(f(\alpha)=0\)이므로</p>
    $$
    g(x)=\begin{cases}7f(x)&amp;(x&lt;\beta)\\-f(x)&amp;(x\ge\beta)\end{cases}
    $$
    <p>\(f'(x)=2(x-\alpha)(x-\beta)+(x-\alpha)^2\)에서 \(f'(\beta)=(\beta-\alpha)^2\)이므로 \(x=\beta\)에서 \(g\)의 좌미분계수는 \(7(\beta-\alpha)^2\), 우미분계수는 \(-(\beta-\alpha)^2\)로 서로 다르다. 즉 \(g\)는 \(x=\beta\)에서만 미분가능하지 않다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(|p(x)|\)가 꺾이는 점은 \(x=\beta\) 하나여야 한다</div>
    <p>\(p(x)=(x-1)(x-a)(x-4+a)\)라 하면 \(|p(x)|\)는 \(p(x)=0\)의 근 중 부호가 바뀌는 근(단순근)에서만 미분가능하지 않다. \(1=a=4-a\)는 불가능하므로 단순근이 적어도 하나 있고, \(h=g+|p|\)가 실수 전체에서 미분가능하려면 \(|p|\)의 단순근이 \(x=\beta\) 하나뿐이어야 한다. 세 근 \(1,\ a,\ 4-a\) 중 둘이 같아야 하므로</p>
    <table class="sol-table">
      <tr><th>\(a\)</th><th>\(p(x)\)</th><th>단순근 \(=\beta\)</th><th>\(p'(\beta)\)</th></tr>
      <tr><td>\(1\) 또는 \(3\)</td><td>\((x-1)^2(x-3)\)</td><td>\(3\)</td><td>\(4\)</td></tr>
      <tr><td>\(2\)</td><td>\((x-1)(x-2)^2\)</td><td>\(1\)</td><td>\(1\)</td></tr>
    </table>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(x=\beta\)에서 미분가능할 조건</div>
    <p>두 경우 모두 \(x=\beta\) 근방에서 \(p(x)\)의 부호가 음에서 양으로 바뀌므로 \(|p(x)|=-p(x)\ (x&lt;\beta)\), \(|p(x)|=p(x)\ (x\ge\beta)\)이고</p>
    $$
    h(x)=\begin{cases}7f(x)-p(x)&amp;(x&lt;\beta)\\-f(x)+p(x)&amp;(x\ge\beta)\end{cases}
    $$
    <p>\(f(\beta)=p(\beta)=0\)이므로 \(x=\beta\)에서의 좌·우미분계수가 같을 조건은</p>
    $$
    7f'(\beta)-p'(\beta)=-f'(\beta)+p'(\beta),\qquad p'(\beta)=4f'(\beta)=4(\beta-\alpha)^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 경우별로 \(\alpha\)와 \(f(0)\)을 구한다</div>
    <p>\(\beta=3\), \(p'(3)=4\)일 때: \((3-\alpha)^2=1\)에서 \(\alpha=2\) 또는 \(\alpha=4\)이고 \(f(0)=-3\alpha^2\)이므로 \(f(0)=-12\) 또는 \(-48\).</p>
    <p>\(\beta=1\), \(p'(1)=1\)일 때: \((1-\alpha)^2=\dfrac14\)에서 \(\alpha=\dfrac12\) 또는 \(\alpha=\dfrac32\)이고 \(f(0)=-\alpha^2\)이므로 \(f(0)=-\dfrac14\) 또는 \(-\dfrac94\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 최댓값과 최솟값의 곱</div>
    $$
    \left(-\frac14\right)\times(-48)=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{12}\)</div>
` },

"2027_mock09/common/q22": { answer: 97, html: String.raw`
  <div class="sol-box">(나)의 포물선은 (가)의 포물선을 \(x\)축 방향으로 \(1\), \(y\)축 방향으로 \(-1\)만큼 평행이동한 것이다. 직사각형의 변 AB를 변 DC로 옮기는 평행이동이 바로 이것임을 보이면 AB의 기울기가 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 포물선의 관계와 좌표 설정</div>
    <p>\(f(x)=2x^2-\dfrac72x+3\)이라 하면</p>
    $$
    f(x-1)-1=2x^2-\frac{15}2x+\frac{15}2
    $$
    <p>이므로 (나)의 포물선은 \(y=f(x-1)-1\)이다. A\((r,\ f(r))\), B\((s,\ f(s))\ (r&lt;s)\)라 하자.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 직사각형 조건에서 C, D의 좌표를 정한다</div>
    <p>직사각형 ABCD에서 \(\overline{\mathrm{AB}}\)와 \(\overline{\mathrm{DC}}\)는 평행하고 길이가 같으므로, B를 C로 옮기는 평행이동은 A를 D로 옮긴다. 이 평행이동을 \((x,\ y)\to(x+m,\ y+n)\)이라 하면 C\((s+m,\ f(s)+n)\), D\((r+m,\ f(r)+n)\)이 모두 \(y=f(x-1)-1\) 위에 있으므로</p>
    $$
    f(s+m-1)-f(s)=n+1=f(r+m-1)-f(r).
    $$
    <p>\(c=m-1\)이라 하면 \(f(x+c)-f(x)=4cx+2c^2-\dfrac72c\)이므로 위 식은 \(4cs=4cr\), \(r\ne s\)에서 \(c=0\)이다. 따라서 \(m=1\), \(n=-1\)이고</p>
    $$
    \mathrm{C}(s+1,\ f(s)-1),\qquad \mathrm{D}(r+1,\ f(r)-1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 직선 AB의 기울기는 \(1\)이다</div>
    <p>직선 BC의 기울기는 \(\dfrac{(f(s)-1)-f(s)}{(s+1)-s}=-1\)이고 \(\overline{\mathrm{AB}}\perp\overline{\mathrm{BC}}\)이므로 직선 AB의 기울기는 \(1\)이다. 직선 AB를 \(y=x+k\)라 하면 A, B가 곡선 \(y=a^x\) 위의 점이므로</p>
    $$
    a^r=r+k,\qquad a^s=s+k.\qquad\cdots\ ㉠
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> C, D가 로그곡선 위에 있다는 조건에서 \(k\)를 구한다</div>
    <p>C\((s+1,\ s+k-1)\)이 \(y=\log_a\!\left(x-\dfrac14\right)-\dfrac14\) 위에 있으므로</p>
    $$
    s+k-\frac34=\log_a\!\left(s+\frac34\right),\qquad s+\frac34=a^{s+k-\frac34}=a^s\times a^{k-\frac34}=(s+k)\,a^{k-\frac34}.
    $$
    <p>D\((r+1,\ r+k-1)\)에 대해서도 같은 방법으로 \(r+\dfrac34=(r+k)\,a^{k-\frac34}\)이다. 두 식을 빼면</p>
    $$
    s-r=(s-r)\,a^{k-\frac34},\qquad a^{k-\frac34}=1,\qquad k=\frac34\quad(a&gt;1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> A의 좌표에서 \(a^3\)을 구한다</div>
    <p>A, B는 포물선 \(y=f(x)\)와 직선 \(y=x+\dfrac34\)의 교점이므로</p>
    $$
    2x^2-\frac72x+3=x+\frac34,\qquad 8x^2-18x+9=0,\qquad (2x-3)(4x-3)=0.
    $$
    <p>\(r&lt;s\)이므로 \(r=\dfrac34\), \(s=\dfrac32\)이고 A\(\left(\dfrac34,\ \dfrac32\right)\)이다. ㉠에서 \(a^{\frac34}=\dfrac32\)이므로</p>
    $$
    a^3=\left(a^{\frac34}\right)^4=\left(\frac32\right)^4=\frac{81}{16}.
    $$
    <p>따라서 \(p=16\), \(q=81\)이고 \(p+q=97\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{97}\)</div>
` },
