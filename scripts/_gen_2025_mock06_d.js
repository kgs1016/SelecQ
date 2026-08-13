"2025_mock06/prob_stat/q26": { answer: 3, html: String.raw`
  <div class="sol-box">"한 개만 포함"은 그 문자가 놓일 자리를 고른 뒤 <b>나머지 자리에는 그 문자를 빼고</b> 중복순열로 채우면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 구한다</div>
    <p>네 문자 \(a,b,c,d\)에서 중복을 허락하여 \(4\)개를 택해 일렬로 나열하므로 모든 문자열의 개수는 \({}_4\Pi_4=4^4\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm P(A)\), \(\mathrm P(B)\)를 구한다</div>
    <p>\(a\)가 한 개만 포함되려면 \(a\)가 놓일 한 자리를 고르고(\({}_4\mathrm C_1\)), 나머지 세 자리는 \(b,c,d\)로 채운다(\({}_3\Pi_3\)).</p>
    $$
    \mathrm P(A)=\frac{4\times3^3}{4^4}=\frac{108}{256}=\frac{27}{64}.
    $$
    <p>\(b\)에 대해서도 같은 방법이므로 \(\mathrm P(B)=\dfrac{27}{64}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\mathrm P(A\cap B)\)를 구한다</div>
    <p>\(a\)와 \(b\)가 각각 한 개만 포함되려면 두 문자가 놓일 두 자리를 순서까지 정하고(\({}_4\mathrm P_2\)), 남은 두 자리는 \(c,d\)로 채운다(\({}_2\Pi_2\)).</p>
    $$
    \mathrm P(A\cap B)=\frac{12\times4}{4^4}=\frac{48}{256}=\frac3{16}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 덧셈정리를 쓴다</div>
    $$
    \mathrm P(A\cup B)=\frac{27}{64}+\frac{27}{64}-\frac3{16}=\frac{54-12}{64}=\frac{21}{32}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock06/prob_stat/q27": { answer: 1, html: String.raw`
  <div class="sol-box">\(1\)부터 \(6\)까지 중 합이 \(11\)인 두 수는 \(5\)와 \(6\)뿐이다. 따라서 "합이 \(11\)인 이웃이 없다"의 여사건은 <b>\(5\)와 \(6\)이 이웃한다</b> 하나뿐이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 원순열의 수를 구한다</div>
    $$
    (6-1)!=120.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(5\)와 \(6\)이 이웃하는 경우를 센다</div>
    <p>\(5\)와 \(6\)이 적힌 의자를 하나로 묶으면 \(5\)개를 원형으로 배열하는 것과 같고, 묶음 안에서 둘의 자리를 바꾸는 경우가 \(2\)가지이므로</p>
    $$
    (5-1)!\times2=24\times2=48.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 빼서 구한다</div>
    $$
    120-48=72.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_mock06/calculus/q23": { answer: 2, html: String.raw`
  <div class="sol-box">\(\left(\dfrac12\right)^n\)이 \(\left(\dfrac13\right)^n\)보다 천천히 \(0\)에 가므로, 분자와 분모를 \(\left(\dfrac12\right)^n\)으로 나눈다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\left(\dfrac12\right)^n\)으로 나눈다</div>
    $$
    \frac{\left(\frac12\right)^n+\left(\frac13\right)^{n+1}}{\left(\frac12\right)^{n+1}+\left(\frac13\right)^{n}}
    =\frac{1+\frac13\left(\frac23\right)^n}{\frac12+\left(\frac23\right)^n}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    <p>\(\left|\dfrac23\right|&lt;1\)이므로 \(\left(\dfrac23\right)^n\to0\)이고</p>
    $$
    \frac{1+0}{\frac12+0}=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock06/calculus/q24": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 음함수의 미분법을 쓴다</div>
    <p>\(y\)를 \(x\)의 함수로 보고 \(x\sin2y+3x=3\)의 각 항을 \(x\)에 대하여 미분하면</p>
    $$
    \sin2y+x\cos2y\times2\times\frac{dy}{dx}+3=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\dfrac{dy}{dx}\)에 대해 푼다</div>
    $$
    \frac{dy}{dx}=\frac{\sin2y+3}{-2x\cos2y}\qquad(x\cos2y\ne0).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 점 \(\left(1,\dfrac\pi2\right)\)를 대입한다</div>
    $$
    \frac{\sin\pi+3}{-2\times1\times\cos\pi}=\frac{3}{-(-2)}=\frac32.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock06/calculus/q25": { answer: 3, html: String.raw`
  <div class="sol-box">급수가 수렴하면 그 일반항은 \(0\)으로 간다. 이걸 쓰면 \(a_n\)의 극한을 나머지 항에서 읽어낼 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 급수의 성질을 쓴다</div>
    <p>주어진 급수가 수렴하므로 그 일반항이 \(0\)으로 간다.</p>
    $$
    \lim_{n\to\infty}\left(a_n-\frac{3n^2-n}{2n^2+1}\right)=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\lim a_n\)을 구한다</div>
    $$
    \lim_{n\to\infty}\frac{3n^2-n}{2n^2+1}=\lim_{n\to\infty}\frac{3-\frac1n}{2+\frac1{n^2}}=\frac32
    $$
    <p>이므로</p>
    $$
    \lim_{n\to\infty}a_n=\lim_{n\to\infty}\left(a_n-\frac{3n^2-n}{2n^2+1}\right)+\lim_{n\to\infty}\frac{3n^2-n}{2n^2+1}=0+\frac32=\frac32.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 구하는 극한값을 계산한다</div>
    $$
    \lim_{n\to\infty}(a_n^2+2a_n)=\left(\frac32\right)^2+2\times\frac32=\frac94+3=\frac{21}{4}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },
