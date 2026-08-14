"2027_mock06/common/q01": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(3\)으로 통일한다</div>
    $$
    \sqrt[3]{9}\times3^{-\frac53}=\left(3^{2}\right)^{\frac13}\times3^{-\frac53}=3^{\frac23}\times3^{-\frac53}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 더한다</div>
    $$
    3^{\frac23-\frac53}=3^{-1}=\frac13.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2027_mock06/common/q02": { answer: 5, html: String.raw`
  <div class="sol-box">이 극한은 미분계수의 정의 그대로이므로 \(f'(1)\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한을 미분계수로 바꾼다</div>
    $$
    \lim_{x\to1}\frac{f(x)-f(1)}{x-1}=f'(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    <p>\(f'(x)=6x-1\)이므로</p>
    $$
    f'(1)=6-1=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2027_mock06/common/q03": { answer: 4, html: String.raw`
  <div class="sol-box">두 조건을 \(\sum a_k\)와 \(\sum b_k\)에 대한 연립방정식으로 보면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 식을 세운다</div>
    $$
    2\sum_{k=1}^{5}a_k+\sum_{k=1}^{5}b_k=19,\qquad \sum_{k=1}^{5}a_k+\sum_{k=1}^{5}b_k=10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 빼서 구한다</div>
    $$
    \sum_{k=1}^{5}a_k=19-10=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2027_mock06/common/q04": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그래프에서 두 극한을 읽는다</div>
    $$
    \lim_{x\to-1-}f(x)=-1,\qquad \lim_{x\to1+}f(x)=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 더한다</div>
    $$
    (-1)+1=0.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2027_mock06/common/q05": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 쓴다</div>
    $$
    f'(x)=3\left(x^2-2x+2\right)+(3x-1)(2x-2)=9x^2-14x+8.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=2\)를 대입한다</div>
    $$
    f'(2)=36-28+8=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2027_mock06/common/q06": { answer: 1, html: String.raw`
  <div class="sol-box">\(\tan^2\theta=\dfrac{\sin^2\theta}{\cos^2\theta}\)로 먼저 제곱을 구하고, 사분면으로 부호를 정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sin^2\theta\)를 구한다</div>
    $$
    \sin^2\theta=1-\frac1{10}=\frac9{10}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\tan^2\theta\)를 구한다</div>
    $$
    \tan^2\theta=\frac{\frac9{10}}{\frac1{10}}=9.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부호를 정한다</div>
    <p>\(\dfrac{3\pi}{2}&lt;\theta&lt;2\pi\)는 제4사분면이므로 \(\tan\theta&lt;0\)이고 \(\tan\theta=-3\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2027_mock06/common/q07": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극대 조건에서 \(a\)를 구한다</div>
    <p>\(f'(x)=3x^2+a\)이고 \(x=-1\)에서 극대이므로</p>
    $$
    f'(-1)=3+a=0,\qquad a=-3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극소가 되는 곳을 찾는다</div>
    $$
    f'(x)=3x^2-3=3(x+1)(x-1)=0,\qquad x=-1\ \text{또는}\ x=1.
    $$
    <p>\(f'\)의 부호가 \(x=1\)에서 음에서 양으로 바뀌므로 \(x=1\)에서 극소이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 극솟값을 구한다</div>
    <p>\(f(x)=x^3-3x+9\)이므로</p>
    $$
    f(1)=1-3+9=7.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2027_mock06/common/q08": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 코사인법칙을 세운다</div>
    <p>\(\overline{\mathrm{AC}}=x\)라 하면 \(a=8\), \(b=x\), \(c=4\)이므로</p>
    $$
    \cos A=\frac{x^2+16-64}{2\times x\times4}=-\frac14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 정리해서 푼다</div>
    $$
    x^2-48=-2x,\qquad x^2+2x-48=0,\qquad (x+8)(x-6)=0.
    $$
    <p>\(x&gt;0\)이므로 \(\overline{\mathrm{AC}}=6\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2027_mock06/common/q09": { answer: 3, html: String.raw`
  <div class="sol-box">두 점 모두 원점에서 출발하므로 위치는 속도의 정적분이고, 두 위치를 같게 놓으면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 위치를 구한다</div>
    $$
    \int_0^{k}\left(t^2-t\right)dt=\left[\frac13t^3-\frac12t^2\right]_0^{k}=\frac13k^3-\frac12k^2,
    $$
    $$
    \int_0^{k}t\,dt=\frac12k^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 같게 놓고 푼다</div>
    $$
    \frac13k^3-\frac12k^2=\frac12k^2,\qquad \frac13k^2(k-3)=0.
    $$
    <p>\(k\)가 양수이므로 \(k=3\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2027_mock06/common/q10": { answer: 3, html: String.raw`
  <div class="sol-box">\(\log_9=\dfrac12\log_3\)이므로 밑을 \(3\)으로 통일하면 \(\log_3a\), \(\log_3b\)에 대한 연립일차방정식이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(3\)으로 통일한다</div>
    $$
    \frac12\log_3a+\log_3b=2,\qquad \log_3a=8\times\frac12\log_3b=4\log_3b.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 연립한다</div>
    <p>뒤 식을 앞 식에 넣으면</p>
    $$
    2\log_3b+\log_3b=2,\qquad \log_3b=\frac23,\qquad \log_3a=\frac83.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 값을 구한다</div>
    $$
    \log_3\frac ab=\frac83-\frac23=2,\qquad \frac ab=3^2=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2027_mock06/common/q11": { answer: 1, html: String.raw`
  <div class="sol-box">\(a=0\)에서는 분모가 \(0\)으로 가는데도 극한이 있으니 분자도 \(0\)이어야 하고, \(a=3\)에서는 극한이 없으니 이번엔 분모만 \(0\)이어야 한다. 두 조건이 각각 \(f(2)\), \(f(3)\)을 준다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a=0\)에서 \(f(2)\)를 얻는다</div>
    <p>\(x\to0\)일 때 분모 \(x\{f(x)-3\}\to0\)인데 극한값이 존재하므로 분자도 \(0\)으로 가야 한다.</p>
    $$
    \lim_{x\to0}f(x+2)=f(2)=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a=3\)에서 \(f(3)\)을 얻는다</div>
    <p>\(f\)가 일차함수이고 \(f(2)=0\)이므로 \(\displaystyle\lim_{x\to3}f(x+2)=f(5)\ne0\)이다. 분자가 \(0\)이 아닌데 극한값이 존재하지 않으려면 분모가 \(0\)으로 가야 하므로</p>
    $$
    3\{f(3)-3\}=0,\qquad f(3)=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f\)를 정하고 값을 구한다</div>
    <p>\(f(2)=0\), \(f(3)=3\)이므로 \(f(x)=3(x-2)\)이고</p>
    $$
    f(4)=3\times2=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2027_mock06/common/q12": { answer: 1, html: String.raw`
  <div class="sol-box">첫 조건의 양변을 \(a\)로 정리하면 \(a\)가 약분되어 공비 \(r\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 공비를 구한다</div>
    <p>첫째항을 \(a\ (a\ne0)\), 공비를 \(r\ (r&gt;0)\)라 하면</p>
    $$
    2a\left(a+ar^2\right)=5ar(a+ar),\qquad 2a^2\left(1+r^2\right)=5a^2r(1+r),
    $$
    $$
    2+2r^2=5r+5r^2,\qquad 3r^2+5r-2=(3r-1)(r+2)=0.
    $$
    <p>\(r&gt;0\)이므로 \(r=\dfrac13\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a^2\)을 구한다</div>
    <p>\(2a\left(a+ar^2\right)=20\)에서 \(a^2\left(1+r^2\right)=10\)이므로</p>
    $$
    a^2\times\frac{10}{9}=10,\qquad a^2=9.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 답을 구한다</div>
    $$
    a_1\times a_6=a\times ar^5=a^2r^5=9\times\left(\frac13\right)^5=\frac1{27}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },
