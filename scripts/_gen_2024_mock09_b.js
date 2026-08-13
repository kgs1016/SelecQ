"2024_mock09/common/q09": { answer: 3, html: String.raw`
  <div class="sol-box">\(\sin\dfrac\pi7\)을 코사인으로 바꾸면 양변이 모두 코사인이 되어 그래프 하나로 비교할 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 우변을 코사인으로 바꾼다</div>
    $$
    \sin\frac\pi7=\cos\left(\frac\pi2-\frac\pi7\right)=\cos\frac{5}{14}\pi.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 교점의 \(x\)좌표를 구한다</div>
    <p>\(0\le x\le2\pi\)에서 곡선 \(y=\cos x\)와 직선 \(y=\cos\dfrac{5}{14}\pi\)가 만나는 두 점의 \(x\)좌표를 \(x_1&lt;x_2\)라 하면, 그래프가 \(x=\pi\)에 대하여 대칭이므로</p>
    $$
    x_1=\frac{5}{14}\pi,\qquad \frac{x_1+x_2}{2}=\pi\ \Longrightarrow\ x_2=2\pi-\frac{5}{14}\pi=\frac{23}{14}\pi.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부등식의 해를 읽는다</div>
    <p>\(\cos x\)가 두 교점 사이에서 그 값보다 작거나 같으므로</p>
    $$
    \frac{5}{14}\pi\le x\le\frac{23}{14}\pi,\qquad
    \beta-\alpha=\frac{23}{14}\pi-\frac{5}{14}\pi=\frac97\pi.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock09/common/q10": { answer: 3, html: String.raw`
  <div class="sol-box">삼차함수의 그래프가 점 \((2,3)\)을 지나고 그 점에서의 접선이 \(y=3\)과 만나는 모양이므로, \(f(x)-3\)이 \((x-2)^2\)을 인수로 갖는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f\)의 꼴을 정한다</div>
    <p>곡선 위의 점 \((2,3)\)에서의 접선이 점 \((1,3)\)을 지나므로 \(f(x)-3\)은 \((x-2)^2\)을 인수로 갖는다. 최고차항의 계수가 \(1\)이므로</p>
    $$
    f(x)=(x-a)(x-2)^2+3\qquad(a\text{는 상수}).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \((-2,f(-2))\)에서의 접선을 세운다</div>
    $$
    f'(x)=(x-2)^2+2(x-a)(x-2),
    $$
    <p>이므로 그 접선은 \(y-f(-2)=f'(-2)(x+2)\)이다. 이 접선이 점 \((1,3)\)을 지나므로</p>
    $$
    3-f(-2)=3f'(-2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구한다</div>
    <p>\(f(-2)=16(-2-a)+3\), \(f'(-2)=16-8(-2-a)\)이므로</p>
    $$
    3-\{16(-2-a)+3\}=3\{16-8(-2-a)\},
    $$
    $$
    32+16a=96+24a,\qquad 8a=-64,\qquad a=-8.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(f(0)\)을 구한다</div>
    $$
    f(x)=(x+8)(x-2)^2+3,\qquad f(0)=8\times4+3=35.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock09/common/q11": { answer: 5, html: String.raw`
  <div class="sol-box">거리는 위치의 차이이므로 두 점의 위치를 각각 적분으로 구한 뒤, 움직인 거리는 속도에 절댓값을 씌워 적분한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 점의 위치를 구한다</div>
    $$
    s_1(t)=1+\int_0^t(3u^2+4u-7)\,du=t^3+2t^2-7t+1,
    $$
    $$
    s_2(t)=8+\int_0^t(2u+4)\,du=t^2+4t+8.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 거리가 \(4\)가 되는 시각을 구한다</div>
    $$
    |s_1(t)-s_2(t)|=|t^3+t^2-11t-7|=4
    $$
    <p>이므로 \(t^3+t^2-11t-11=0\) 또는 \(t^3+t^2-11t-3=0\)이다.</p>
    $$
    (t+1)(t^2-11)=0\ \Longrightarrow\ t=\sqrt{11},\qquad
    (t-3)(t^2+4t+1)=0\ \Longrightarrow\ t=3.
    $$
    <p>\(3&lt;\sqrt{11}\)이므로 처음으로 거리가 \(4\)가 되는 시각은 \(t=3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 속도의 부호를 본다</div>
    $$
    v_1(t)=3t^2+4t-7=(3t+7)(t-1)
    $$
    <p>이므로 \(0\le t&lt;1\)에서 \(v_1(t)&lt;0\), \(t\ge1\)에서 \(v_1(t)\ge0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 움직인 거리를 구한다</div>
    $$
    \int_0^3|v_1(t)|\,dt=-\Big[t^3+2t^2-7t\Big]_0^1+\Big[t^3+2t^2-7t\Big]_1^3
    =-(-4)+\{24-(-4)\}=4+28=32.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_mock09/common/q12": { answer: 1, html: String.raw`
  <div class="sol-box">\(a_1\)의 홀짝만으로는 \(a_2,a_3,a_4\)가 정해지지 않는다. \(a_1\)을 \(4\)로 나눈 나머지로 나누면 네 항까지 한 번에 따라간다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a_1=4k\)</div>
    <p>\(a_2=2k,\ a_3=k\)이다. \(k\)가 홀수이면 \(a_4=k+1\)이므로</p>
    $$
    a_2+a_4=2k+(k+1)=3k+1=40\ \Longrightarrow\ k=13,\qquad a_1=52.
    $$
    <p>\(k\)가 짝수이면 \(a_4=\dfrac k2\)이므로</p>
    $$
    2k+\frac k2=\frac52k=40\ \Longrightarrow\ k=16,\qquad a_1=64.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_1=4k-1\) (홀수)</div>
    <p>\(a_2=4k,\ a_3=2k,\ a_4=k\)이므로</p>
    $$
    4k+k=5k=40\ \Longrightarrow\ k=8,\qquad a_1=31.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_1=4k-2\) (짝수)</div>
    <p>\(a_2=2k-1,\ a_3=2k,\ a_4=k\)이므로</p>
    $$
    (2k-1)+k=3k-1=40\ \Longrightarrow\ k=\frac{41}{3},
    $$
    <p>이는 자연수가 아니므로 조건을 만족시키지 않는다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(a_1=4k-3\) (홀수)</div>
    <p>\(a_2=4k-2,\ a_3=2k-1,\ a_4=2k\)이므로</p>
    $$
    (4k-2)+2k=6k-2=40\ \Longrightarrow\ k=7,\qquad a_1=25.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 합을 구한다</div>
    $$
    52+64+31+25=172.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },
