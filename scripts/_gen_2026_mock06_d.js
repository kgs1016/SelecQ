"2026_mock06/calculus/q23": { answer: 1, html: String.raw`
  <div class="sol-box">밑이 큰 \(3^{n}\)이 분모를 지배하므로 분자·분모를 \(3^{n}\)으로 나눈다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(3^{n}\)으로 나눈다</div>
    $$
    \frac{4\times3^{\,n+1}}{2^{n}+3^{n}}=\frac{4\times3}{\left(\dfrac23\right)^{n}+1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    <p>\(\left(\dfrac23\right)^{n}\to0\)이므로</p>
    $$
    \frac{12}{0+1}=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock06/calculus/q24": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 음함수의 미분법을 쓴다</div>
    <p>\(3x+y+\cos(xy)=2\)의 양변을 \(x\)에 대하여 미분하면</p>
    $$
    3+\frac{dy}{dx}-\sin(xy)\times\left(y+x\frac{dy}{dx}\right)=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\dfrac{dy}{dx}\)에 대해 푼다</div>
    $$
    \{1-x\sin(xy)\}\frac{dy}{dx}=y\sin(xy)-3,\qquad
    \frac{dy}{dx}=\frac{y\sin(xy)-3}{1-x\sin(xy)}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 접선을 구한다</div>
    <p>\(x=0\), \(y=1\)을 넣으면 \(\sin0=0\)이므로 기울기는 \(\dfrac{0-3}{1-0}=-3\)이고, 접선은 \(y=-3x+1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(x\)절편을 구한다</div>
    $$
    -3x+1=0,\qquad x=\frac13.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock06/calculus/q25": { answer: 4, html: String.raw`
  <div class="sol-box">급수가 수렴하면 일반항이 \(0\)으로 간다 — 이것이 \(a\)를 준다. \(a\)를 넣으면 두 분수가 부분분수 꼴로 정리되어 소거된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항의 극한으로 \(a\)를 구한다</div>
    $$
    \lim_{n\to\infty}\left(\frac{a-3n}{n}+\frac{an+6}{n+a}\right)
    =\lim_{n\to\infty}\left(\frac an-3+\frac{a+\frac6n}{1+\frac an}\right)=-3+a=0,
    $$
    <p>따라서 \(a=3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 일반항을 부분분수로 정리한다</div>
    $$
    \frac{3-3n}{n}+\frac{3n+6}{n+3}
    =\left(\frac3n-3\right)+\left(3-\frac3{n+3}\right)
    =3\left(\frac1n-\frac1{n+3}\right).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 소거하여 합을 구한다</div>
    <p>제\(n\)항까지 더하면 앞의 세 항만 남고 뒤쪽 세 항은 \(0\)으로 가므로</p>
    $$
    \sum_{n=1}^{\infty}\left(\frac1n-\frac1{n+3}\right)=1+\frac12+\frac13=\frac{11}{6},
    $$
    $$
    S=3\times\frac{11}{6}=\frac{11}{2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답을 구한다</div>
    $$
    a+S=3+\frac{11}{2}=\frac{17}{2}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock06/calculus/q26": { answer: 2, html: String.raw`
  <div class="sol-box">역함수의 미분법 \(g'(a)=\dfrac1{f'(g(a))}\)에서 \(f'(g(a))=8\)이 바로 나온다. 남은 일은 \(g(a)=b\)로 놓고 \(b\)를 찾는 것뿐이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f'(g(a))\)를 읽는다</div>
    $$
    g'(a)=\frac1{f'(g(a))}=\frac18\ \Longrightarrow\ f'(g(a))=8.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(b=g(a)\)를 구한다</div>
    <p>\(f'(x)=3e^{3x}-6e^{2x}+4e^{x}\)이므로 \(e^{b}=t\ (t&gt;0)\)로 놓으면</p>
    $$
    3t^3-6t^2+4t-8=0,\qquad (t-2)\left(3t^2+4\right)=0.
    $$
    <p>\(3t^2+4&gt;0\)이므로 \(t=2\), 즉 \(b=\ln2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구한다</div>
    <p>\(g(a)=b\)는 \(a=f(b)\)와 같으므로</p>
    $$
    a=f(\ln2)=2^3-3\times2^2+4\times2=8-12+8=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 더한다</div>
    $$
    a+f'(g(a))=4+8=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock06/calculus/q27": { answer: 3, html: String.raw`
  <div class="sol-box">중심 \(\mathrm O\)에서 네 점 \(\mathrm A\), \(\mathrm P\), \(\mathrm Q\), \(\mathrm B\)까지의 거리가 모두 반지름 \(1\)이다. 사각형을 세 개의 이등변삼각형으로 쪼개면 넓이가 \(\theta\)의 삼각함수로 바로 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 세 중심각을 구한다</div>
    <p>\(\overline{\mathrm{AB}}\)의 중점을 \(\mathrm O\)라 하면 반지름이 \(1\)이다. 삼각형 \(\mathrm{OPA}\)는 \(\overline{\mathrm{OP}}=\overline{\mathrm{OA}}=1\)인 이등변삼각형이고 밑각이 \(\theta\)이므로 \(\angle\mathrm{AOP}=\pi-2\theta\)이다. \(\overline{\mathrm{PQ}}\parallel\overline{\mathrm{AB}}\)이므로 대칭에 의하여 \(\angle\mathrm{BOQ}=\pi-2\theta\)이고, 따라서</p>
    $$
    \angle\mathrm{POQ}=\pi-2(\pi-2\theta)=4\theta-\pi.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 넓이를 \(\theta\)로 나타낸다</div>
    <p>세 이등변삼각형의 넓이를 더하면</p>
    $$
    f(\theta)=2\times\frac12\sin(\pi-2\theta)+\frac12\sin(4\theta-\pi)=\sin2\theta-\frac12\sin4\theta.
    $$
    $$
    f'(\theta)=2\cos2\theta-2\cos4\theta.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)에서의 삼각비를 구한다</div>
    <p>\(\overline{\mathrm{AB}}\)가 지름이므로 \(\angle\mathrm{APB}=\dfrac\pi2\)이고, \(\overline{\mathrm{AP}}:\overline{\mathrm{BP}}=1:3\)에서 \(\tan a=3\), 즉 \(\cos a=\dfrac1{\sqrt{10}}\)이다.</p>
    $$
    \cos2a=2\cos^2a-1=\frac15-1=-\frac45,\qquad
    \cos4a=2\cos^22a-1=\frac{32}{25}-1=\frac7{25}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 대입한다</div>
    $$
    f'(a)=2\times\left(-\frac45\right)-2\times\frac7{25}=-\frac{40}{25}-\frac{14}{25}=-\frac{54}{25}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },
