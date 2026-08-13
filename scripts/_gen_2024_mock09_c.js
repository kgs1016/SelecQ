"2024_mock09/common/q14": { answer: 2, html: String.raw`
  <div class="sol-box">\(x\le-8\)에서는 증가하는 지수함수, \(x&gt;-8\)에서는 감소하는 지수함수다. 각 조각이 <b>어떤 값들을 훑는지</b>를 구간으로 적어 놓고 정수를 세면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 조각이 훑는 값의 범위를 적는다</div>
    <p>\(x\le-8\)에서 \(2^{x+a}+b\)는 증가하고 \(x\to-\infty\)일 때 \(b\)에 한없이 가까워지므로, 이 조각의 값은</p>
    $$
    \left(b,\ 2^{a-8}+b\right]
    $$
    <p>를 훑는다. \(x&gt;-8\)에서 \(-3^{x-3}+8\)은 감소하고 \(x\to-8+\)일 때 \(8\)보다 조금 작은 값에서 시작하므로, \(x\le k\)까지 보면 이 조각의 값은</p>
    $$
    \left[-3^{k-3}+8,\ 8\right)
    $$
    <p>을 훑는다. (\(-3^{-11}+8&lt;8\)이므로 \(8\)은 들어가지 않는다.)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 오른쪽 조각이 정수를 얻는 시점을 본다</div>
    <p>\(-3^{k-3}+8=7\)에서 \(k=3\), \(=6\)에서 \(k=3+\log_3 2\), \(=5\)에서 \(k=4\)이다. 즉 오른쪽 조각이 주는 정수는</p>
    $$
    k&lt;3:\ \text{없음},\qquad 3\le k&lt;3+\log_3 2:\ 7,\qquad 3+\log_3 2\le k&lt;4:\ 6,\ 7.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 왼쪽 조각이 주는 정수를 확정한다</div>
    <p>정수의 개수가 \(2\)인 범위가 \(3\le k&lt;4\) <b>전체</b>여야 한다. 그런데 \(k\)가 \(3+\log_3 2\)를 넘는 순간 오른쪽 조각에 \(6\)이 새로 들어오므로, 개수가 늘지 않으려면 왼쪽 조각이 이미 \(6\)을 가지고 있어야 한다.</p>
    <p>또 \(k&lt;3\)일 때는 개수가 \(2\)가 아니어야 하므로 왼쪽 조각이 주는 정수는 \(6\) 하나뿐이다. 따라서 구간 \(\left(b,\ 2^{a-8}+b\right]\)에 들어가는 정수가 \(6\)뿐이어야 하므로</p>
    $$
    b=5,\qquad 6\le 2^{a-8}+5&lt;7.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(a\)를 구한다</div>
    $$
    1\le2^{a-8}&lt;2,\qquad 0\le a-8&lt;1,\qquad 8\le a&lt;9.
    $$
    <p>\(a\)가 자연수이므로 \(a=8\)이고</p>
    $$
    a+b=8+5=13.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock09/common/q15": { answer: 4, html: String.raw`
  <div class="sol-box">\(g\)가 \(x=3\)에서 불연속이라는 것이 \(f(3)=0\)을 주고, 극한값이 존재한다는 것이 \(f(6)=0\)을 준다. 삼차함수의 세 근 중 둘이 이렇게 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f(3)=0\)을 얻는다</div>
    <p>\(f\)는 연속함수이므로 \(f(x)\ne0\)인 곳에서 \(g\)는 연속이다. \(g\)가 \(x=3\)에서 연속이 아니려면</p>
    $$
    f(3)=0,\qquad g(3)=3.
    $$
    <p>주어진 조건에서 \(\displaystyle\lim_{x\to3}g(x)=g(3)-1=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(6)=0\)을 얻는다</div>
    <p>\(x\to3\)일 때 분모 \(f(x)\to f(3)=0\)인데 극한값이 존재하므로 분자도 \(0\)으로 가야 한다.</p>
    $$
    f(6)\{f(3)+1\}=0\ \Longrightarrow\ f(6)=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 남은 근을 구한다</div>
    <p>최고차항의 계수가 \(1\)이므로 \(f(x)=(x-3)(x-6)(x+k)\)로 놓을 수 있다. \(f(x+3)=x(x-3)(x+3+k)\)이므로</p>
    $$
    2=\lim_{x\to3}\frac{x(x-3)(x+3+k)\{f(x)+1\}}{(x-3)(x-6)(x+k)}
    =\frac{3(6+k)\times1}{(-3)(3+k)}=-\frac{6+k}{3+k},
    $$
    $$
    -(6+k)=2(3+k),\qquad 3k=-12,\qquad k=-4.
    $$
    <p>따라서 \(f(x)=(x-3)(x-6)(x-4)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(g(5)\)를 구한다</div>
    $$
    f(5)=2\times(-1)\times1=-2\ne0,\qquad f(8)=5\times2\times4=40,
    $$
    $$
    g(5)=\frac{f(8)\{f(5)+1\}}{f(5)}=\frac{40\times(-1)}{-2}=20.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_mock09/common/q16": { answer: 6, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(4\)로 맞춘다</div>
    <p>진수 조건에서 \(x&gt;1\)이다. \(\log_2(x-1)=\log_4(x-1)^2\)이므로 주어진 식은</p>
    $$
    \log_4(x-1)^2=\log_4(13+2x).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 진수를 비교해 푼다</div>
    $$
    (x-1)^2=13+2x,\qquad x^2-4x-12=0,\qquad (x-6)(x+2)=0.
    $$
    <p>\(x&gt;1\)이므로 \(x=6\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{6}\)</div>
` },

"2024_mock09/common/q17": { answer: 24, html: String.raw`
  <div class="sol-box">구하려는 식을 주어진 두 합의 <b>차</b>로 만들면 \(b_k\)를 따로 구할 필요가 없다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 식을 변형한다</div>
    $$
    \sum_{k=1}^{10}(a_k-b_k)=\sum_{k=1}^{10}\{(2a_k-b_k)-a_k\}
    =\sum_{k=1}^{10}(2a_k-b_k)-\sum_{k=1}^{10}a_k.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 값을 대입한다</div>
    $$
    34-10=24.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{24}\)</div>
` },

"2024_mock09/common/q18": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법으로 \(f'\)를 구한다</div>
    $$
    f'(x)=2x(x^2+ax+3)+(x^2+1)(2x+a).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입해 \(a\)를 구한다</div>
    $$
    f'(1)=2(1+a+3)+2(2+a)=4a+12=32,\qquad a=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{5}\)</div>
` },

"2024_mock09/common/q19": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 교점의 \(x\)좌표를 구한다</div>
    $$
    3x^3-7x^2=-x^2,\qquad 3x^3-6x^2=0,\qquad 3x^2(x-2)=0,
    $$
    <p>이므로 \(x=0\) 또는 \(x=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 넓이를 정적분으로 구한다</div>
    <p>\(0&lt;x&lt;2\)에서 \(-x^2-(3x^3-7x^2)=-3x^3+6x^2=3x^2(2-x)&gt;0\)이므로 \(y=-x^2\)이 위에 있다.</p>
    $$
    \int_0^2(-3x^3+6x^2)\,dx=\left[-\frac34x^4+2x^3\right]_0^2=-12+16=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{4}\)</div>
` },

"2024_mock09/common/q20": { answer: 98, html: String.raw`
  <div class="sol-box">두 외접원의 반지름을 각각 \(\overline{\mathrm{BD}}\)로 나타낸 뒤, 코사인법칙으로 \(\overline{\mathrm{BD}}^{\,2}\)을 구해 곱에 대입하는 흐름이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(R_1\)을 구한다</div>
    <p>삼각형 \(\mathrm{BCD}\)에서 사인법칙에 의하여</p>
    $$
    \frac{\overline{\mathrm{BD}}}{\sin\frac34\pi}=2R_1,\qquad
    \frac{\overline{\mathrm{BD}}}{\frac{1}{\sqrt2}}=2R_1,\qquad
    R_1=\frac{\sqrt2}{2}\times\overline{\mathrm{BD}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(R_2\)를 구한다 <span class="sol-no">(가)</span></div>
    <p>삼각형 \(\mathrm{ABD}\)에서 사인법칙에 의하여</p>
    $$
    \frac{\overline{\mathrm{BD}}}{\sin\frac23\pi}=2R_2,\qquad
    \frac{\overline{\mathrm{BD}}}{\frac{\sqrt3}{2}}=2R_2,\qquad
    R_2=\frac{\sqrt3}{3}\times\overline{\mathrm{BD}},
    $$
    <p>즉 \(p=\dfrac{\sqrt3}{3}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\overline{\mathrm{BD}}^{\,2}\)을 구한다 <span class="sol-no">(나)</span></div>
    <p>삼각형 \(\mathrm{ABD}\)에서 코사인법칙에 의하여</p>
    $$
    \overline{\mathrm{BD}}^{\,2}=2^2+1^2-2\times2\times1\times\cos\frac23\pi=2^2+1^2-(-2)=7,
    $$
    <p>즉 \(q=-2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 두 반지름의 곱을 구한다 <span class="sol-no">(다)</span></div>
    $$
    R_1\times R_2=\left(\frac{\sqrt2}{2}\times\overline{\mathrm{BD}}\right)\left(\frac{\sqrt3}{3}\times\overline{\mathrm{BD}}\right)
    =\frac{\sqrt6}{6}\times\overline{\mathrm{BD}}^{\,2}=\frac{7\sqrt6}{6},
    $$
    <p>즉 \(r=\dfrac{7\sqrt6}{6}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 답을 계산한다</div>
    $$
    p\times q\times r=\frac{\sqrt3}{3}\times(-2)\times\frac{7\sqrt6}{6}=-\frac{7\sqrt2}{3},
    $$
    $$
    9\times(p\times q\times r)^2=9\times\frac{98}{9}=98.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{98}\)</div>
` },
