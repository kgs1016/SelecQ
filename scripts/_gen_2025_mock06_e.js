"2025_mock06/calculus/q26": { answer: 2, html: String.raw`
  <div class="sol-box">두 점의 \(x\)좌표를 \(t\)로 나타내면 넓이가 로그의 차로 정리되고, 마지막에 \(\lim\limits_{t\to0}\dfrac{\ln(1+t)}{t}=1\)로 마무리된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 점의 \(x\)좌표를 구한다</div>
    <p>\(e^{x^2}-1=t\)에서 \(x^2=\ln(1+t)\)이고 \(x&gt;0\)이므로 점 \(\mathrm A\)의 \(x\)좌표는 \(\sqrt{\ln(1+t)}\)이다. 마찬가지로 \(e^{x^2}-1=5t\)에서 점 \(\mathrm B\)의 \(x\)좌표는 \(\sqrt{\ln(1+5t)}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 넓이를 \(t\)로 나타낸다</div>
    $$
    S(t)=\frac12\times5t\times\left(\sqrt{\ln(1+5t)}-\sqrt{\ln(1+t)}\right).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 극한값을 구한다</div>
    <p>\(t\sqrt t\)로 나눌 때 \(\sqrt t\)를 근호 안으로 넣으면 \(\dfrac{\ln(1+\square)}{\square}\) 꼴이 만들어진다.</p>
    $$
    \lim_{t\to0+}\frac{S(t)}{t\sqrt t}
    =\lim_{t\to0+}\frac52\left(\sqrt{\frac{\ln(1+5t)}{t}}-\sqrt{\frac{\ln(1+t)}{t}}\right).
    $$
    $$
    \frac{\ln(1+5t)}{t}=5\times\frac{\ln(1+5t)}{5t}\to5,\qquad \frac{\ln(1+t)}{t}\to1
    $$
    <p>이므로</p>
    $$
    \lim_{t\to0+}\frac{S(t)}{t\sqrt t}=\frac52\left(\sqrt5-1\right).
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock06/calculus/q27": { answer: 2, html: String.raw`
  <div class="sol-box">\(\dfrac{\overline{\mathrm{AC}}}{\overline{\mathrm{AB}}}\)는 닮은 직각삼각형의 변의 비로 바뀐다. 그러면 \(t\)에 대한 함수 하나가 되고, 그 최댓값이 \(t=1\)에서 나온다는 조건이 \(a\)를 준다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 수직인 직선을 세운다</div>
    <p>\(y=a^{x}\)에서 \(y'=a^{x}\ln a\)이므로 점 \(\mathrm A(t,\ a^{t})\)에서의 접선 \(l\)의 기울기는 \(a^{t}\ln a\)이고, \(l\)에 수직인 직선의 기울기는 \(-\dfrac{1}{a^{t}\ln a}\)이다.</p>
    $$
    y=-\frac{1}{a^{t}\ln a}(x-t)+a^{t}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 비를 \(t\)의 함수로 만든다</div>
    <p>점 \(\mathrm A\)에서 \(y\)축에 내린 수선의 발을 \(\mathrm H\), 원점을 \(\mathrm O\)라 하면 \(\overline{\mathrm{AH}}\parallel\overline{\mathrm{OB}}\)이므로</p>
    $$
    \frac{\overline{\mathrm{AC}}}{\overline{\mathrm{AB}}}=\frac{\overline{\mathrm{CH}}}{\overline{\mathrm{HO}}}.
    $$
    <p>위 직선에 \(x=0\)을 넣으면 \(\mathrm C\left(0,\ \dfrac{t}{a^{t}\ln a}+a^{t}\right)\)이므로 \(\overline{\mathrm{CH}}=\dfrac{t}{a^{t}\ln a}\), \(\overline{\mathrm{HO}}=a^{t}\)이고</p>
    $$
    f(t)=\frac{\overline{\mathrm{CH}}}{\overline{\mathrm{HO}}}=\frac{t}{a^{2t}\ln a}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 최댓값 조건으로 \(a\)를 구한다</div>
    $$
    f'(t)=\frac{a^{-2t}(1-2t\ln a)}{\ln a}=a^{-2t}\left(\frac{1}{\ln a}-2t\right).
    $$
    <p>\(f\)가 \(t=1\)에서 최댓값을 가지므로 \(f'(1)=0\)이고</p>
    $$
    \frac{1}{\ln a}-2=0,\qquad \ln a=\frac12,\qquad a=\sqrt e.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },
