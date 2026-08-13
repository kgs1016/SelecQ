"2024_mock09/calculus/q27": { answer: 1, html: String.raw`
  <div class="sol-box">\(1+\left(\dfrac{dy}{dx}\right)^2\)이 완전제곱이 되는 것이 이 문제의 장치다. 근호가 깔끔하게 벗겨진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x&lt;0\)에서 근호를 벗긴다</div>
    $$
    \frac{dy}{dx}=-\frac{e^{x}-e^{-x}}{2}
    \ \Longrightarrow\
    1+\left(\frac{dy}{dx}\right)^2=1+\left(\frac{e^{x}-e^{-x}}{2}\right)^2=\left(\frac{e^{x}+e^{-x}}{2}\right)^2.
    $$
    <p>\(e^{x}+e^{-x}&gt;0\)이므로</p>
    $$
    \sqrt{1+\left(\frac{dy}{dx}\right)^2}=\frac{e^{x}+e^{-x}}{2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x\ge0\)에서는 상수함수이다</div>
    <p>\(y=0\)이므로 \(\dfrac{dy}{dx}=0\)이고 \(\sqrt{1+0}=1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 구간으로 나눠 적분한다</div>
    $$
    \int_{-\ln4}^{0}\frac{e^{x}+e^{-x}}{2}\,dx
    =\left[\frac{e^{x}-e^{-x}}{2}\right]_{-\ln4}^{0}
    =0-\frac{\frac14-4}{2}=\frac{15}{8},
    $$
    $$
    \int_0^1 1\,dx=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 더한다</div>
    $$
    \frac{15}{8}+1=\frac{23}{8}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_mock09/calculus/q29": { answer: 18, html: String.raw`
  <div class="sol-box">\(\dfrac{3^n+a^{n+1}}{3^{n+1}+a^n}\) 꼴의 극한은 <b>밑이 큰 쪽으로 나누는 것</b>이 전부다. 어느 쪽이 큰지에 따라 답이 달라지므로 대소로 경우를 나눈다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫째 식에서 \(a&gt;3\)임을 밝힌다</div>
    <p>ⅰ) \(1&lt;a&lt;3\)이면 \(\left(\dfrac a3\right)^n\to0\)이므로</p>
    $$
    \lim_{n\to\infty}\frac{3^n+a^{n+1}}{3^{n+1}+a^n}
    =\lim_{n\to\infty}\frac{1+a\left(\frac a3\right)^n}{3+\left(\frac a3\right)^n}=\frac13,
    $$
    <p>이 값이 \(a\)와 같아야 하는데 \(a=\dfrac13&lt;1\)이 되어 모순이다.</p>
    <p>ⅱ) \(a=3\)이면 그 값이 \(1\)이 되어 \(a=1\)이므로 역시 모순이다.</p>
    <p>ⅲ) \(a&gt;3\)이면 \(\left(\dfrac3a\right)^n\to0\)이므로</p>
    $$
    \lim_{n\to\infty}\frac{\left(\frac3a\right)^n+a}{3\left(\frac3a\right)^n+1}=a
    $$
    <p>가 되어 등식이 성립한다. 따라서 \(a&gt;3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 둘째 식을 \(a,b\)의 대소로 나눈다</div>
    <p>ⅰ) \(3&lt;a&lt;b\)이면 같은 방법으로 극한값이 \(b\)이다. 그런데 \(a&gt;3\)에서 \(\dfrac9a&lt;3&lt;b\)이므로 \(b\ne\dfrac9a\)이다.</p>
    <p>ⅱ) \(3&lt;b&lt;a\)이면 극한값이 \(\dfrac1a\)인데 \(\dfrac1a\ne\dfrac9a\)이다.</p>
    <p>ⅲ) \(a=b\)이면</p>
    $$
    \lim_{n\to\infty}\frac{a^n+a^{n+1}}{a^{n+1}+a^n}=1=\frac9a,\qquad a=9.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 답을 구한다</div>
    $$
    a=b=9,\qquad a+b=18.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{18}\)</div>
` },
