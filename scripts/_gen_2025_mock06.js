"2025_mock06/common/q01": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(5\)로 통일한다</div>
    $$
    \left(\frac{5}{\sqrt[3]{25}}\right)^{\frac32}=\left(\frac{5}{5^{\frac23}}\right)^{\frac32}
    =\left(5^{\frac13}\right)^{\frac32}=5^{\frac12}=\sqrt5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_mock06/common/q02": { answer: 5, html: String.raw`
  <div class="sol-box">주어진 극한은 \(x=2\)에서의 미분계수의 정의 그대로이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미분계수로 바꾼다</div>
    $$
    \lim_{h\to0}\frac{f(2+h)-f(2)}{h}=f'(2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 미분해서 대입한다</div>
    $$
    f'(x)=2x+1,\qquad f'(2)=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock06/common/q03": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합의 기호를 분리해 \(\sum_{k=1}^{5}a_k\)를 구한다</div>
    $$
    \sum_{k=1}^{5}(a_k+1)=\sum_{k=1}^{5}a_k+1\times5=9\ \Longrightarrow\ \sum_{k=1}^{5}a_k=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 한 항을 더한다</div>
    $$
    \sum_{k=1}^{6}a_k=\sum_{k=1}^{5}a_k+a_6=4+4=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock06/common/q04": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그래프에서 한쪽 극한을 각각 읽는다</div>
    $$
    \lim_{x\to0+}f(x)=2,\qquad \lim_{x\to1-}f(x)=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 더한다</div>
    $$
    2+1=3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock06/common/q05": { answer: 5, html: String.raw`
  <div class="sol-box">\(x=1\)을 넣으면 \(x^2-1=0\)이 되어 뒷항이 통째로 사라진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 쓴다</div>
    $$
    f'(x)=2x(x^2+2x+2)+(x^2-1)(2x+2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입한다</div>
    $$
    f'(1)=2\times(1+2+2)+0=10.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock06/common/q06": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 주어진 값을 코사인으로 바꾼다</div>
    $$
    \sin\left(\theta-\frac\pi2\right)=\sin\left\{-\left(\frac\pi2-\theta\right)\right\}
    =-\sin\left(\frac\pi2-\theta\right)=-\cos\theta
    $$
    <p>이므로 \(-\cos\theta=\dfrac35\), 즉 \(\cos\theta=-\dfrac35\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사분면을 보고 부호를 정한다</div>
    <p>\(\pi&lt;\theta&lt;\dfrac32\pi\)이므로 \(\theta\)는 제3사분면의 각이고 \(\sin\theta&lt;0\)이다.</p>
    $$
    \sin\theta=-\sqrt{1-\frac9{25}}=-\sqrt{\frac{16}{25}}=-\frac45.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_mock06/common/q07": { answer: 4, html: String.raw`
  <div class="sol-box">삼차함수의 그래프와 \(x\)축의 교점이 \(2\)개가 되는 것은 <b>극값 중 하나가 \(0\)</b>일 때뿐이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극값을 구한다</div>
    <p>\(f(x)=x^3-3x^2-9x+k\)라 하면</p>
    $$
    f'(x)=3x^2-6x-9=3(x+1)(x-3),
    $$
    <p>이므로 \(f\)는 \(x=-1\)에서 극댓값 \(f(-1)=k+5\), \(x=3\)에서 극솟값 \(f(3)=k-27\)을 갖는다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 실근이 \(2\)개일 조건을 쓴다</div>
    $$
    k+5=0\quad\text{또는}\quad k-27=0,\qquad k=-5\ \text{또는}\ k=27.
    $$
    $$
    -5+27=22.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_mock06/common/q08": { answer: 1, html: String.raw`
  <div class="sol-box">모든 항을 \(a_6\)과 공비로 나타내면 미지수가 \(r\) 하나로 줄어든다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 공비에 대한 방정식을 세운다</div>
    <p>공비를 \(r\)라 하면 \(a_7=16r\), \(a_8=16r^2\)이므로</p>
    $$
    2\times16r^2-3\times16r=32,\qquad 2r^2-3r-2=0,\qquad (2r+1)(r-2)=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부호 조건으로 공비를 고른다</div>
    <p>\(a_1a_2=a_1^2r&lt;0\)이므로 \(r&lt;0\)이고, 따라서 \(r=-\dfrac12\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 값을 구한다</div>
    $$
    a_9+a_{11}=16r^3+16r^5=16\times\left(-\frac18\right)+16\times\left(-\frac1{32}\right)=-2-\frac12=-\frac52.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },
