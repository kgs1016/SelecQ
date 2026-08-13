"2024_mock06/common/q11": { answer: 3, html: String.raw`
  <div class="sol-box">곡선 위의 점 중 직선까지의 거리가 최소인 점은 <b>그 점에서의 접선이 직선과 평행</b>한 점이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 점 \(\mathrm P\)를 구한다</div>
    <p>\(\mathrm P(s,s^2)\)이라 하면 접선의 기울기가 직선의 기울기 \(2t\)와 같아야 한다. \(y'=2x\)이므로</p>
    $$
    2s=2t,\qquad s=t,\qquad \mathrm P(t,\ t^2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 점 \(\mathrm Q\)를 구한다</div>
    <p>직선 \(\mathrm{OP}\)는 \(y=tx\)이므로 \(y=2tx-1\)과 연립하면</p>
    $$
    tx=2tx-1,\qquad tx=1,\qquad x=\frac1t,
    $$
    <p>따라서 \(\mathrm Q\!\left(\dfrac1t,\ 1\right)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\overline{\mathrm{PQ}}\)를 \(1-t\)로 묶는다</div>
    <p>\(\dfrac1t-t=\dfrac{1-t^2}{t}\)이고 \(0&lt;t&lt;1\)에서 \(1-t^2&gt;0\)이므로</p>
    $$
    \overline{\mathrm{PQ}}=\sqrt{\left(\frac1t-t\right)^2+(1-t^2)^2}
    =(1-t^2)\sqrt{\frac1{t^2}+1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 극한값을 구한다</div>
    $$
    \lim_{t\to1-}\frac{\overline{\mathrm{PQ}}}{1-t}
    =\lim_{t\to1-}\frac{(1-t)(1+t)}{1-t}\sqrt{\frac1{t^2}+1}
    =2\sqrt2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock06/common/q12": { answer: 5, html: String.raw`
  <div class="sol-box">\(\{b_n\}\)의 공차가 \(2d\)라는 점이 열쇠다. \(b\)가 \(a\)와 겹치기 시작하면 그 뒤로는 <b>한 칸 건너</b> 겹치므로, 겹치는 세 항은 \(a_1,a_3,a_5\)일 수밖에 없다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\{b_n\}\)도 등차수열임을 확인한다</div>
    <p>\(\{a_n\}\)의 공차를 \(d\ (d\ne0)\)라 하면</p>
    $$
    b_{n+1}-b_n=(a_{n+1}+a_{n+2})-(a_n+a_{n+1})=a_{n+2}-a_n=2d
    $$
    <p>이므로 \(\{b_n\}\)은 공차가 \(2d\)인 등차수열이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 겹치는 세 항을 특정한다</div>
    <p>어떤 \(b_j\)가 \(a_k\)와 같다면 \(b_{j+1}=a_k+2d=a_{k+2}\)이므로, 겹치는 항들은 \(a_k,\ a_{k+2},\ a_{k+4},\ \dots\)로 한 칸씩 건너뛴다. \(A\)의 원소는 \(a_1\)부터 \(a_5\)까지뿐이므로 세 개가 겹치려면</p>
    $$
    A\cap B=\{a_1,\ a_3,\ a_5\}=\{b_i,\ b_{i+1},\ b_{i+2}\}\quad(i=1,2,3)
    $$
    <p>이어야 하고, 특히 \(a_1=b_i\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(i\)에 따라 나눈다</div>
    <p>\(a_2=-4\)이므로 \(b_1=a_1+a_2=a_1-4\)이다.</p>
    <p>ⅰ) \(i=1\) : \(a_1=b_1=a_1-4\)에서 \(-4=0\)이 되어 성립하지 않는다.</p>
    <p>ⅱ) \(i=2\) : \(a_1=b_2=b_1+2d=a_1-4+2d\)에서 \(2d=4\), 즉 \(d=2\)이다.</p>
    $$
    a_{20}=a_2+18d=-4+36=32.
    $$
    <p>ⅲ) \(i=3\) : \(a_1=b_3=b_1+4d=a_1-4+4d\)에서 \(4d=4\), 즉 \(d=1\)이다.</p>
    $$
    a_{20}=a_2+18d=-4+18=14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 합을 구한다</div>
    $$
    32+14=46.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_mock06/common/q14": { answer: 3, html: String.raw`
  <div class="sol-box">\(v(t)=0\)의 근은 \(0,\ 1,\ a,\ 2a\)이다. 네 근이 모두 다르면 부호가 세 번 바뀌므로, 방향을 한 번만 바꾸려면 근이 겹쳐야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 방향을 한 번만 바꿀 \(a\)를 찾는다</div>
    <p>\(a\ne0,\ a\ne\dfrac12,\ a\ne1\)이면 \(0,\ 1,\ a,\ 2a\)가 서로 다른 네 수이므로 \(t&gt;0\)에서 \(v(t)\)의 부호가 세 번 바뀐다. 따라서</p>
    $$
    a=0,\qquad a=\frac12,\qquad a=1
    $$
    <p>세 경우만 살피면 된다. (\(a\ge0\))</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a=0\)</div>
    <p>\(v(t)=-t^3(t-1)\)로 \(t=1\)에서만 부호가 바뀐다.</p>
    $$
    \int_0^2(-t^4+t^3)\,dt=\left[-\frac15t^5+\frac14t^4\right]_0^2=-\frac{32}{5}+4=-\frac{12}{5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a=\dfrac12\)</div>
    <p>\(v(t)=-t\left(t-\dfrac12\right)(t-1)^2\)로 \(t=\dfrac12\)에서만 부호가 바뀐다. (\(t=1\)은 중근이라 부호가 그대로다.)</p>
    $$
    \int_0^2\left(-t^4+\frac52t^3-2t^2+\frac12t\right)dt
    =-\frac{32}{5}+10-\frac{16}{3}+1=-\frac{11}{15}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(a=1\)</div>
    <p>\(v(t)=-t(t-1)^2(t-2)\)로 \(t=2\)에서만 부호가 바뀐다.</p>
    $$
    \int_0^2\left(-t^4+4t^3-5t^2+2t\right)dt
    =-\frac{32}{5}+16-\frac{40}{3}+4=\frac{4}{15}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 최댓값을 고른다</div>
    <p>세 값 \(-\dfrac{12}{5},\ -\dfrac{11}{15},\ \dfrac{4}{15}\) 중 가장 큰 것은 \(\dfrac{4}{15}\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock06/common/q16": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(2\)로 통일한다</div>
    $$
    \left(\frac14\right)^{x}=(2^{-2})^{x}=2^{-2x}
    $$
    <p>이므로 주어진 부등식은 \(2^{\,x-6}\le2^{-2x}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 비교한다</div>
    <p>밑 \(2\)가 \(1\)보다 크므로 부등호 방향이 그대로이다.</p>
    $$
    x-6\le-2x,\qquad 3x\le6,\qquad x\le2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 자연수를 더한다</div>
    $$
    1+2=3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{3}\)</div>
` },

"2024_mock06/common/q17": { answer: 33, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int(8x^3-1)\,dx=2x^4-x+C.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분상수를 정하고 대입한다</div>
    <p>\(f(0)=3\)이므로 \(C=3\)이고 \(f(x)=2x^4-x+3\)이다.</p>
    $$
    f(2)=32-2+3=33.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{33}\)</div>
` },

"2024_mock06/common/q18": { answer: 6, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극소 조건을 두 식으로 옮긴다</div>
    <p>\(f(x)=ax^3+bx+a\)가 \(x=1\)에서 극솟값 \(-2\)를 가지므로</p>
    $$
    f(1)=a+b+a=-2\ \Longrightarrow\ 2a+b=-2,
    $$
    $$
    f'(x)=3ax^2+b,\qquad f'(1)=3a+b=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 연립해서 \(f\)를 확정한다</div>
    $$
    a=2,\qquad b=-6,\qquad f(x)=2x^3-6x+2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 극댓값을 구한다</div>
    $$
    f'(x)=6x^2-6=6(x+1)(x-1)
    $$
    <p>이므로 \(f\)는 \(x=-1\)에서 극대, \(x=1\)에서 극소이다.</p>
    $$
    f(-1)=-2+6+2=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{6}\)</div>
` },

"2024_mock06/common/q19": { answer: 8, html: String.raw`
  <div class="sol-box">조건 (가)는 최솟값을 \(0\) 이상으로 묶고, 조건 (나)는 근이 있어야 하므로 최솟값이 정확히 \(0\)임을 강제한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가)에서 \(a\)의 범위를 얻는다</div>
    <p>\(\sin bx\)의 최솟값이 \(-1\)이므로 \(f(x)\)의 최솟값은 \(-a+(8-a)=8-2a\)이다. 모든 실수 \(x\)에서 \(f(x)\ge0\)이려면</p>
    $$
    8-2a\ge0,\qquad a\le4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)에서 \(a\)를 확정한다</div>
    <p>\(a=1,\ 2,\ 3\)이면 최솟값 \(8-2a\)가 \(0\)보다 커서 \(f(x)=0\)이 근을 갖지 않는다. 따라서</p>
    $$
    a=4,\qquad f(x)=4\sin bx+4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 근의 위치를 쓴다</div>
    <p>\(f(x)=0\)은 \(\sin bx=-1\), 즉 \(bx=\dfrac{3}{2}\pi+2k\pi\)이므로</p>
    $$
    x=\frac{(4k+3)\pi}{2b}\qquad(k=0,1,2,\dots).
    $$
    <p>이 근들은 주기 \(\dfrac{2\pi}{b}\)마다 하나씩 나타난다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(0\le x&lt;2\pi\)에 \(4\)개가 놓일 조건</div>
    <p>\(k=0,1,2,3\)이 들어오고 \(k=4\)는 들어오지 않아야 하므로</p>
    $$
    \frac{15\pi}{2b}&lt;2\pi\le\frac{19\pi}{2b},\qquad \frac{15}{4}&lt;b\le\frac{19}{4}.
    $$
    <p>\(b\)가 자연수이므로 \(b=4\)이다.</p>
    $$
    a+b=4+4=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{8}\)</div>
` },

"2024_mock06/prob_stat/q24": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(B)\)를 구한다</div>
    $$
    \mathrm P(B)=1-\mathrm P(B^{C})=1-\frac7{18}=\frac{11}{18}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 배반인 두 사건으로 쪼갠다</div>
    <p>\(A\cup B\)는 \(A\cap B^{C}\)와 \(B\)의 합집합이고 이 둘은 서로 배반이므로</p>
    $$
    \mathrm P(A\cup B)=\mathrm P(A\cap B^{C})+\mathrm P(B)=\frac19+\frac{11}{18}=\frac{2+11}{18}=\frac{13}{18}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_mock06/prob_stat/q25": { answer: 3, html: String.raw`
  <div class="sol-box">"\(2\)장 이상"은 경우가 셋이지만 여사건 "\(0\)장 또는 \(1\)장"은 둘뿐이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 여사건을 센다</div>
    <p>흰색 손수건이 \(2\)장 이상인 사건을 \(A\)라 하면 \(A^{C}\)는 흰색이 없거나 \(1\)장인 사건이다.</p>
    $$
    \mathrm P(A^{C})=\frac{{}_4\mathrm C_0\times{}_5\mathrm C_4}{{}_9\mathrm C_4}+\frac{{}_4\mathrm C_1\times{}_5\mathrm C_3}{{}_9\mathrm C_4}
    =\frac{5}{126}+\frac{40}{126}=\frac{45}{126}=\frac5{14}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건의 확률을 이용한다</div>
    $$
    \mathrm P(A)=1-\frac5{14}=\frac9{14}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock06/prob_stat/q26": { answer: 1, html: String.raw`
  <div class="sol-box">두 인수를 각각 전개해 <b>차수의 합이 \(2\)가 되는 짝</b>만 모으면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 필요한 항들을 뽑는다</div>
    <p>\((x-1)^6\)의 전개식에서</p>
    $$
    x^2\text{항}:\ {}_6\mathrm C_2x^2(-1)^4=15x^2,\quad
    x\text{항}:\ {}_6\mathrm C_1x(-1)^5=-6x,\quad
    \text{상수항}:\ (-1)^6=1.
    $$
    <p>\((2x+1)^7\)의 전개식에서</p>
    $$
    \text{상수항}:\ 1^7=1,\quad
    x\text{항}:\ {}_7\mathrm C_1(2x)1^6=14x,\quad
    x^2\text{항}:\ {}_7\mathrm C_2(2x)^21^5=84x^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 세 짝을 더한다</div>
    $$
    15x^2\times1+(-6x)\times14x+1\times84x^2=(15-84+84)x^2=15x^2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_mock06/prob_stat/q27": { answer: 2, html: String.raw`
  <div class="sol-box">\(a\times b\)가 \(4\)의 배수가 되는 것은 <b>둘 다 짝수</b>이거나 <b>하나가 \(4\)이고 다른 하나가 홀수</b>인 경우뿐이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(A)\)를 구한다</div>
    <p>\(a\times b\)가 \(4\)의 배수인 사건을 \(A\), \(a+b\le7\)인 사건을 \(B\)라 하자.</p>
    $$
    (\text{둘 다 짝수}):\ \left(\frac12\right)^2=\frac14,\qquad
    (\text{하나가 }4,\ \text{다른 하나 홀수}):\ {}_2\mathrm C_1\times\frac16\times\frac12=\frac16,
    $$
    $$
    \mathrm P(A)=\frac14+\frac16=\frac5{12}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm P(A\cap B)\)를 센다</div>
    <p>순서쌍 \((a,b)\)는 모두 \(6\times6=36\)가지이다.</p>
    <p>둘 다 짝수이면서 \(a+b\le7\) : \((2,2),(2,4),(4,2)\)의 \(3\)가지</p>
    <p>하나가 \(4\), 다른 하나가 홀수이면서 \(a+b\le7\) : \((4,1),(4,3),(1,4),(3,4)\)의 \(4\)가지</p>
    $$
    \mathrm P(A\cap B)=\frac{3+4}{36}=\frac7{36}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건부확률을 구한다</div>
    $$
    \mathrm P(B\mid A)=\frac{\mathrm P(A\cap B)}{\mathrm P(A)}=\frac{\frac7{36}}{\frac5{12}}=\frac7{15}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },
