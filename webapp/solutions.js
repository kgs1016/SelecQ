/* SelecQ 자체 해설 데이터
 * key   : data.js 의 문항 key 와 동일 (예: "2022_csat/common/q22")
 * html  : 해설 본문. 수식은 KaTeX 표기 —  인라인 \( ... \) ,  블록 $$ ... $$
 *         그래프 등 이미지는 <img src="sol/파일명.png"> (webapp 기준 상대경로)
 *
 * ⚠️ 저작권: 여기 들어가는 풀이 서술·그래프는 모두 SelecQ 자체 제작물이어야 함.
 *    평가원/EBS/학원 해설의 문장·그림을 그대로 옮기지 말 것(방법 참조는 가능, 표현은 우리 것).
 *
 * String.raw 를 쓰는 이유: \frac, \int, \( 같은 백슬래시 표기를
 *    일반 문자열에서는 이스케이프로 오해하므로 원문 그대로 보존하기 위함.
 */
window.SOLUTIONS = {

"2022_csat/common/q22": { answer: 9, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(g(t)\)의 정체 파악</div>
    <p>\(f\)는 최고차항 계수가 \(\tfrac12\)인 삼차함수이므로, \(f'(x)\)는 최고차항 계수가
       \(\tfrac32\)인 이차함수이다. 따라서 \(f'(x)=0\)의 실근은 최대 2개이고,
       \(g(t)\)는 <b>길이 2인 구간 \([\,t,\ t+2\,]\) 안에 들어오는 극점의 개수</b>이다.</p>
  </div>

  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (가) &rArr; 두 극점 사이 거리 \(=2\)</div>
    <p>\(f'(x)=0\)이 중근이거나 실근이 없으면 \(g\)의 최댓값이 1 이하가 되어 조건 (나)의
       \(g(\cdots)=2\)를 만들 수 없다. 따라서 서로 다른 두 극점 \(\alpha&lt;\beta\)를 가지며,
       \(d=\beta-\alpha\)라 하면</p>
    <ul>
      <li>\(d&gt;2\) : 길이 2인 창에 둘 다 못 들어와 \(g\le 1\) &rarr; <span class="sol-no">(나) 위배</span></li>
      <li>\(d&lt;2\) : \(t=\beta-2\)에서 \(g\)가 \(1\to2\)로 점프하여
          \(\displaystyle\lim_{t\to a^+}g(t)+\lim_{t\to a^-}g(t)=3&gt;2\) &rarr;
          <span class="sol-no">(가) 위배</span></li>
      <li>\(\therefore\ d=2\)</li>
    </ul>
    <div class="sol-box">
      \(g(t)=2 \iff t=\alpha\) &nbsp;(오직 한 점)<br>
      \(g(t)=1 \iff t\in[\alpha-2,\ \alpha)\cup(\alpha,\ \alpha+2]\)
    </div>
    <p>\(f'\)의 부호가 \(+\to-\to+\)이므로 작은 근 \(x=\alpha\)가 <b>극대점</b>이다.</p>
  </div>

  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건 (나) 옮기기</div>
    <p>\(g(f(1))=g(f(4))=2 \ \Rightarrow\ f(1)=f(4)=\alpha\)</p>
    <p>\(g(f(0))=1 \ \Rightarrow\ f(0)\in[\alpha-2,\ \alpha)\cup(\alpha,\ \alpha+2]\)</p>
  </div>

  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 정적분으로 \(\alpha\) 구하기</div>
    <p>대입 노가다 대신 정적분을 쓴다. \(f'(x)=\tfrac32(x-\alpha)(x-\alpha-2)\)이므로</p>
    $$f(4)-f(1)=\int_{1}^{4} f'(x)\,dx=\frac32\int_{1}^{4}(x-\alpha)(x-\alpha-2)\,dx=0$$
    $$\Rightarrow\ 3\alpha^{2}-9\alpha+6=0 \ \Rightarrow\ \alpha^{2}-3\alpha+2=0 \ \Rightarrow\ \alpha=1\ \text{또는}\ 2$$
  </div>

  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(g(f(0))=1\)로 \(\alpha\) 판별</div>
    <table class="sol-table">
      <tr><th>\(\alpha\)</th><th>\(f(x)\)</th><th>\(f(0)\)</th><th>판정</th></tr>
      <tr><td>\(1\)</td><td>\(\tfrac12x^3-3x^2+\tfrac92x-1\)</td>
          <td>\(-1\in[-1,1)\)</td><td class="sol-ok">\(g=1\) ✓</td></tr>
      <tr><td>\(2\)</td><td>\(\tfrac12x^3-\tfrac92x^2+12x-6\)</td>
          <td>\(-6\notin[0,2)\cup(2,4]\)</td><td class="sol-no">✗</td></tr>
    </table>
    <p>\(\therefore\ \alpha=1,\quad f(x)=\tfrac12x^3-3x^2+\tfrac92x-1\)</p>
  </div>

  <figure class="sol-fig">
    <img src="sol/2022_csat_common_q22.png" alt="y=f(x)와 g(t) 그래프">
    <figcaption>왼쪽: \(y=f(x)\) 개형 (극대 \((1,1)\), 극소 \((3,-1)\)) · 오른쪽: 계단함수 \(y=g(t)\)</figcaption>
  </figure>

  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 답</div>
    <div class="sol-final">
      \(f(5)=\dfrac12(125)-3(25)+\dfrac92(5)-1=62.5-75+22.5-1=\mathbf{9}\)
    </div>
  </div>
` },

/* ── 2022 6월 모평 파일럿 5문항 (종로학원 방법 참조·자체 재작성) ── */

"2022_mock06/common/q01": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 지수법칙 — 밑이 같으면 지수끼리 더한다</div>
    $$2^{\sqrt3}\times 2^{\,2-\sqrt3}=2^{\sqrt3+(2-\sqrt3)}=2^{2}=4$$
  </div>
  <div class="sol-final">답 &nbsp;④ &nbsp;\(4\)</div>
` },

"2022_mock06/common/q02": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f'(x)\)를 적분해 \(f(x)\) 구하기</div>
    <p>\(f'(x)=3x^2-2x\) 이므로 \(f(x)=x^3-x^2+C\).</p>
    <p>\(f(1)=1-1+C=1\) 에서 \(C=1\). \(\ \therefore f(x)=x^3-x^2+1\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=2\) 대입</div>
    $$f(2)=8-4+1=5$$
  </div>
  <div class="sol-final">답 &nbsp;⑤ &nbsp;\(5\)</div>
` },

"2022_mock06/common/q06": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 그래프의 교점</div>
    <p>\(3x^2-x=5x \Rightarrow 3x^2-6x=0 \Rightarrow 3x(x-2)=0\), 즉 \(x=0,\ 2\).</p>
    <p>구간 \([0,2]\)에서는 직선 \(y=5x\)가 곡선 \(y=3x^2-x\)보다 위에 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 넓이 \(=\) (위 − 아래)의 정적분</div>
    $$S=\int_{0}^{2}\{5x-(3x^2-x)\}\,dx=\int_{0}^{2}(6x-3x^2)\,dx=\big[\,3x^2-x^3\,\big]_{0}^{2}=12-8=4$$
  </div>
  <figure class="sol-fig"><img src="sol/2022_mock06_common_q06.png" alt="넓이 그래프">
    <figcaption>\(y=5x\)와 \(y=3x^2-x\)로 둘러싸인 영역 (넓이 \(=4\))</figcaption></figure>
  <div class="sol-final">답 &nbsp;④ &nbsp;\(4\)</div>
` },

"2022_mock06/common/q19": { answer: 6, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 상수 \(k\) 결정</div>
    <p>위치 \(x(t)=\displaystyle\int v(t)\,dt=t^3-2t^2+kt+C\). \(t=0\)에서 위치가 \(0\)이므로 \(C=0\).</p>
    <p>\(t=1\)에서 위치가 \(-3\): \(\ 1-2+k=-3 \Rightarrow k=-2\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 위치의 변화량 \(=\displaystyle\int_{1}^{3} v(t)\,dt\)</div>
    $$\int_{1}^{3}(3t^2-4t-2)\,dt=\big[\,t^3-2t^2-2t\,\big]_{1}^{3}=(27-18-6)-(1-2-2)=3-(-3)=6$$
  </div>
  <div class="sol-final">답 &nbsp;\(6\)</div>
` },

"2022_mock06/common/q22": { answer: 61, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (나)를 직선과의 교점으로 바꾸기</div>
    <p>(가)에서 \(f(x)=0\)의 서로 다른 두 실근을 \(\alpha,\ \beta\)라 하자. (나)에서 \(x-f(x)=t\)로 놓으면
       \(f(t)=0\)이므로 \(t=\alpha\) 또는 \(t=\beta\). 따라서</p>
    <div class="sol-box">\(f(x)=x-\alpha\) &nbsp;또는&nbsp; \(f(x)=x-\beta\)</div>
    <p>즉 <b>\(y=f(x)\)와 기울기 \(1\)인 두 평행선의 교점이 모두 3개</b>라는 뜻이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 최고차항의 계수는 음수</div>
    <p>최고차항 계수가 양수이면 두 평행선과의 교점이 5개 이상이 되어 (나)(교점 3개)에 모순이다(그림 참고).
       \(\therefore\) <b>최고차항의 계수는 음수.</b></p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 접선 조건으로 한 직선 확정</div>
    <p>교점이 3개이려면 한 직선은 \(f\)에 <b>접하여</b> 2개, 다른 직선은 1개여야 한다.
       기울기 \(1\)로 접하는 점은 \(f'(x)=1\)인 곳인데, \(f'(1)=1,\ f(1)=4\)이므로 점 \((1,4)\)에서의 접선</p>
    $$y-4=1\cdot(x-1)\ \Rightarrow\ y=x+3$$
    <p>이 곧 \(y=x-\alpha\) 꼴이므로 \(\alpha=-3\). (\(f'(0)&gt;1\)은 이 접선 구성이 유일함을 보장.)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(f(x)\) 세우기</div>
    <p>접선 \(y=x+3\)은 \(f\)와 \(x=1\)(접점)·\(x=-3\)에서 만나므로</p>
    $$f(x)-(x+3)=a(x-1)^2(x+3)\quad(a&lt;0)\ \Rightarrow\ f(x)=(x+3)\{a(x-1)^2+1\}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> (가) 서로 다른 실근 2개 &rArr; \(a\) 결정</div>
    <p>\(f(x)=0 \Rightarrow x=-3\) 또는 \((x-1)^2=-\dfrac1a\). 실근이 2개가 되려면 이 근이 \(-3\)과 겹쳐야 하므로</p>
    $$1-\sqrt{-\tfrac1a}=-3\ \Rightarrow\ \sqrt{-\tfrac1a}=4\ \Rightarrow\ a=-\tfrac1{16}$$
    $$\therefore\ f(x)=-\tfrac1{16}(x+3)^2(x-5)$$
    <p>검토: 계수 \(-\tfrac1{16}&lt;0\) ✓, \(\ f'(0)=\tfrac{21}{16}&gt;1\) ✓, 근은 \(-3\)(중근)·\(5\).</p>
  </div>
  <figure class="sol-fig"><img src="sol/2022_mock06_common_q22.png" alt="f(x)와 두 평행선">
    <figcaption>\(y=f(x)\)와 두 평행선 — \(y=x+3\)은 접하여 2개, \(y=x-5\)는 1개 → 교점 3개</figcaption></figure>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 답</div>
    <div class="sol-final">
      \(f(0)=-\dfrac1{16}\,(3)^2(-5)=\dfrac{45}{16}=\dfrac{q}{p}\)<br>
      \(45\)와 \(16\)은 서로소이므로 \(p=16,\ q=45\) &nbsp;→&nbsp; \(p+q=\mathbf{61}\)
    </div>
  </div>
` },

/* ── 2022 6월 모평 킬러(정답률<35%) 1차: 공통 q15·q21 ── */

"2022_mock06/common/q21": { answer: 24, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가) — 각 실근이 중근이 되는 구조</div>
    <p>\(f(x)=x^2+bx+c\) (최고차항 계수 1). \((x^n-64)f(x)=0\)의 실근은
       \(x^n=64\)의 실근과 \(f(x)=0\)의 실근이다.</p>
    <p>\(x^n-64\)의 실근은 모두 <b>단순근</b>이므로, 어떤 실근이 <b>중근</b>이 되려면
       그 실근이 \(x^n=64\)와 \(f(x)=0\)의 공통근이어야 한다(중복도 \(1+1=2\)).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(n\)의 홀·짝으로 나누기</div>
    <ul>
      <li>\(n\)이 <b>홀수</b>: \(x^n=64\)의 실근은 \(\sqrt[n]{64}\) 하나뿐 → 서로 다른 두 실근(각각 중근)을 만들 수 없다. 불가.</li>
      <li>\(n\)이 <b>짝수</b>: 실근은 \(\pm 2^{6/n}\) 둘 (\(\sqrt[n]{64}=\sqrt[n]{2^6}=2^{6/n}\)). 둘 다 \(f(x)=0\)의 근이어야 하므로</li>
    </ul>
    $$f(x)=(x-2^{6/n})(x+2^{6/n})=x^2-2^{12/n}$$
    <p>이때 \(\pm\sqrt[n]{64}\)가 각각 중근인 서로 다른 두 실근이 되어 (가) 성립.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건 (나) — 최솟값이 음의 정수</div>
    <p>\(f(x)=x^2-2^{12/n}\)의 최솟값은 \(f(0)=-2^{12/n}\).</p>
    <p>이 값이 (음의) 정수이려면 \(2^{12/n}\)이 정수, 즉 \(\dfrac{12}{n}\)이 자연수여야 한다. 따라서 \(n\)은 \(12\)의 약수.</p>
    <p>짝수이면서 \(12\)의 약수인 \(n\): \(\ n=2,\ 4,\ 6,\ 12\) &nbsp;(최솟값 \(-64,-8,-4,-2\), 모두 음의 정수).</p>
  </div>
  <div class="sol-final">모든 \(n\)의 값의 합 \(=2+4+6+12=\mathbf{24}\)</div>
` },

"2022_mock06/common/q15": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 상황 파악</div>
    <p>\(0\le x&lt;4\)에서 두 곡선 \(y=\sin\dfrac{\pi x}{2}\), \(y=\cos\dfrac{\pi x}{2}\)와 직선 \(y=t\)의
       교점의 \(x\)좌표가 실근이다. 그중 최소가 \(\alpha(t)\), 최대가 \(\beta(t)\).</p>
  </div>
  <figure class="sol-fig"><img src="sol/2022_mock06_common_q15.png" alt="sin·cos 그래프와 y=t">
    <figcaption>\(y=\sin\frac{\pi x}{2}\)(파랑) · \(y=\cos\frac{\pi x}{2}\)(초록)와 \(y=t\)의 교점</figcaption></figure>

  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄱ. \(-1\le t&lt;0\)에서 \(\alpha+\beta=5\) &nbsp;<span class="sol-ok">참</span></div>
    <p>\(y=\cos\dfrac{\pi x}{2}\)는 \(x=2\)에 대칭 → \(\cos\dfrac{\pi x}{2}=t\)의 두 근은 \(2-p,\ 2+p\).
       \(y=\sin\dfrac{\pi x}{2}\)는 \(x=3\)에 대칭 → \(\sin\dfrac{\pi x}{2}=t\,(t&lt;0)\)의 두 근은 \(3-q,\ 3+q\).</p>
    <p>\(t&lt;0\)이면 최소 \(\alpha=2-p\), 최대 \(\beta=3+q\). 대입하면 \(\cos\dfrac{\pi p}{2}=-t=\cos\dfrac{\pi q}{2}\)이므로 \(p=q\).</p>
    $$\therefore\ \alpha+\beta=(2-p)+(3+q)=5$$
  </div>

  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄴ. \(\beta-\alpha=\beta(0)-\alpha(0)\)인 \(t\)는 \(0\le t\le\dfrac{\sqrt2}{2}\) &nbsp;<span class="sol-ok">참</span></div>
    <p>\(t=0\)이면 근이 \(0,1,2,3\)이라 \(\beta(0)-\alpha(0)=3\).</p>
    <p>\(0&lt;t&lt;1\)에서 \((0,1)\) 안의 근을 \(\sin\dfrac{\pi x_1}{2}=t\), \(\cos\dfrac{\pi x_2}{2}=t\)로 두면,
       \(\cos\dfrac{\pi x_2}{2}=\sin\dfrac{\pi(1-x_2)}{2}\)이고 \((0,1)\)에서 \(\sin\)이 일대일이므로 \(x_1=1-x_2\), 즉 \(x_1+x_2=1\).</p>
    <p>최대 근은 \(\beta=4-x_2\). \(0&lt;t\le\dfrac{\sqrt2}{2}\)이면 최소 근이 \(\alpha=x_1\)이므로</p>
    $$\beta-\alpha=(4-x_2)-x_1=4-(x_1+x_2)=3$$
    <p>\(\dfrac{\sqrt2}{2}&lt;t&lt;1\)이면 \(\alpha=x_2\)라 \(\beta-\alpha=4-2x_2&gt;3\), \(t&lt;0\)이면 \(\beta-\alpha&lt;3\).
       따라서 \(\beta-\alpha=3\)인 범위는 \(0\le t\le\dfrac{\sqrt2}{2}\).</p>
  </div>

  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> ㄷ. \(t_2-t_1=\dfrac12\)이면 \(t_1t_2=\dfrac13\)? &nbsp;<span class="sol-no">거짓</span></div>
    <p>\(0&lt;t&lt;1\)에서 \(\alpha(t)\)는 \(t=\dfrac{\sqrt2}{2}\)에서 최대인 <b>텐트 모양</b>(그 전엔 \(\sin\)쪽, 그 후엔 \(\cos\)쪽 근이 최소).
       그래서 \(\alpha(t_1)=\alpha(t_2)\,(t_1&lt;t_2)\)이면 \(t_1\)은 \(\sin\)쪽, \(t_2\)는 \(\cos\)쪽:</p>
    $$\sin\dfrac{\pi\alpha}{2}=t_1,\quad \cos\dfrac{\pi\alpha}{2}=t_2\ \Rightarrow\ t_1^{\,2}+t_2^{\,2}=1$$
    <p>\(t_2-t_1=\dfrac12\)이면 \(\,1-2t_1t_2=(t_2-t_1)^2=\dfrac14\,\)이므로 \(\ t_1t_2=\dfrac{3}{8}\neq\dfrac13\).</p>
  </div>

  <div class="sol-final">옳은 것은 ㄱ, ㄴ &nbsp;→&nbsp; 답 &nbsp;②</div>
` },

/* ── 2022 6월 선택 킬러 (GPT가 종로 해설 참조 → 자체 재작성) ── */

"2022_mock06/prob_stat/q30": { answer: 47, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱이 6의 배수일 조건</div>
    <p>\(1,2,3\)에서 5번 복원추출하므로 전체 경우의 수는 \(3^5=243\).</p>
    <p>다섯 수의 곱이 \(6=2\times3\)의 배수이려면 <b>\(2\)가 적어도 한 번, \(3\)이 적어도 한 번</b> 나와야 한다
       (\(1\)은 소인수 \(2,3\)을 주지 않음).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건 · 포함배제</div>
    <ul>
      <li>\(2\)가 한 번도 안 나옴 (\(1,3\)만): \(2^5=32\)</li>
      <li>\(3\)이 한 번도 안 나옴 (\(1,2\)만): \(2^5=32\)</li>
      <li>\(2,3\) 모두 안 나옴 (\(1\)만): \(1^5=1\)</li>
    </ul>
    <p>\(2\)와 \(3\)이 모두 적어도 한 번 나오는 경우의 수는</p>
    $$243-32-32+1=180$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 확률</div>
    $$P=\frac{180}{243}=\frac{20}{27}=\frac{q}{p}$$
    <p>\(20\)과 \(27\)은 서로소이므로 \(p=27,\ q=20\).</p>
  </div>
  <div class="sol-final">\(p+q=27+20=\mathbf{47}\)</div>
` },

"2022_mock06/calculus/q29": { answer: 17, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극대 조건 \(f'(k)=0\)</div>
    <p>\(f(x)=t(\ln x)^2-x^2\)에서</p>
    $$f'(x)=2t\ln x\cdot\frac1x-2x=\frac{2}{x}\left(t\ln x-x^2\right)$$
    <p>\(x=k\,(=g(t))\)에서 극대이므로 \(f'(k)=0\), 즉 \(t\ln g(t)=\{g(t)\}^2\). 이 식을 (㉠)이라 하자.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(g(\alpha)=e^2\)로 \(\alpha\) 구하기</div>
    <p>(㉠)에 \(t=\alpha,\ g(\alpha)=e^2\)를 대입하면 \(\ \alpha\ln e^2=(e^2)^2\Rightarrow 2\alpha=e^4\).</p>
    $$\therefore\ \alpha=\frac{e^4}{2}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> (㉠)을 \(t\)로 미분해 \(g'(\alpha)\)</div>
    <p>양변을 \(t\)에 대하여 미분하면</p>
    $$\ln g(t)+t\cdot\frac{g'(t)}{g(t)}=2\,g(t)\,g'(t)$$
    <p>\(t=\alpha\) 대입 (\(g(\alpha)=e^2\)):</p>
    $$2+\frac{e^2}{2}\,g'(\alpha)=2e^2 g'(\alpha)\ \Rightarrow\ g'(\alpha)=\frac{4}{3e^2}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답</div>
    $$\alpha\{g'(\alpha)\}^2=\frac{e^4}{2}\cdot\frac{16}{9e^4}=\frac{8}{9}=\frac{q}{p}$$
  </div>
  <div class="sol-final">\(8\)과 \(9\)는 서로소이므로 \(p=9,\ q=8\), \(\ p+q=\mathbf{17}\)</div>
` },

"2022_mock06/calculus/q30": { answer: 11, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 로그방정식을 지수방정식으로</div>
    <p>교점에서 \(\ln(1+e^{2x}-e^{-2t})=x+t\), 즉</p>
    $$1+e^{2x}-e^{-2t}=e^{x+t}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(e^x=k\) 치환 후 인수분해</div>
    $$k^2-e^{t}k+1-e^{-2t}=0\ \Rightarrow\ (k-e^{-t})(k+e^{-t}-e^{t})=0$$
    <p>\(\therefore\ k=e^{-t}\) 또는 \(k=e^{t}-e^{-t}\). \(\ t&gt;\tfrac12\ln2\)이면 \(e^{t}-e^{-t}&gt;e^{-t}&gt;0\)이라 둘 다 양수.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 교점 사이 거리 \(f(t)\)</div>
    <p>\(e^{x}=k\)에서 두 근은 \(\alpha=-t,\ \ \beta=\ln(e^{t}-e^{-t})\ (\alpha&lt;\beta)\). 직선 기울기가 \(1\)이므로</p>
    $$f(t)=\sqrt2\,(\beta-\alpha)=\sqrt2\left\{\ln(e^{t}-e^{-t})+t\right\}=\sqrt2\,\ln(e^{2t}-1)$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 미분 후 대입</div>
    $$f'(t)=\sqrt2\cdot\frac{2e^{2t}}{e^{2t}-1},\qquad f'(\ln2)=\sqrt2\cdot\frac{2\cdot4}{4-1}=\frac{8}{3}\sqrt2$$
  </div>
  <div class="sol-final">\(\dfrac{q}{p}=\dfrac83\), \(\ 8\)과 \(3\)은 서로소 → \(p+q=3+8=\mathbf{11}\)</div>
` },

/* ── 2022 9월 모평 킬러 (GPT 종로 참조 → 자체 재작성) ── */

"2022_mock09/common/q21": { answer: 192, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 평행이동으로 역함수 관계 만들기</div>
    <p>\(y=a^{x-1}\)을 \(x\)축으로 \(-1\), \(y\)축으로 \(+1\) 평행이동하면 \(y=a^{x}+1\)이고,
       이는 \(y=\log_a(x-1)\)의 <b>역함수</b>이다 (\(\therefore\) 직선 \(y=x\)에 대칭).</p>
  </div>
  <figure class="sol-fig"><img src="sol/2022_mock09_common_q21.png" alt="공통21 그래프">
    <figcaption>두 곡선·직선·삼각형 \(ABC\) (\(\overline{AB}=2\sqrt2\))</figcaption></figure>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대칭으로 \(a\) 구하기</div>
    <p>A를 \((-1,+1)\)만큼 옮긴 A′은 \(y=a^{x}+1\) 위에 있고, 방향 \((-1,1)\)이 직선(기울기 \(-1\))과 나란하므로 A′도 직선 위 → A′ \(=\) (직선 \(\cap\ y=a^{x}+1\)).</p>
    <p>B \(=\) (직선 \(\cap\ y=\log_a(x-1)\)). A′·B는 \(y=x\)에 대칭이므로 A′\((t,\,4-t)\)라 하면 B\((4-t,\,t)\), A \(=\) A′\(+(1,-1)=(t+1,\,3-t)\).</p>
    $$\overline{AB}^{\,2}=2(3-2t)^2=(2\sqrt2)^2=8\ \Rightarrow\ (3-2t)^2=4\ \Rightarrow\ t=\tfrac12$$
    <p>\(\therefore\) A′\(=\left(\tfrac12,\tfrac72\right)\)이고 \(a^{1/2}+1=\tfrac72\Rightarrow a^{1/2}=\tfrac52\Rightarrow a=\tfrac{25}{4}\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 세 점과 넓이</div>
    <p>A\(\left(\tfrac32,\tfrac52\right)\), B\(\left(\tfrac72,\tfrac12\right)\), C\(=(0,\,a^{-1})=\left(0,\tfrac4{25}\right)\).</p>
    <p>밑변 \(\overline{AB}=2\sqrt2\) (직선 \(x+y-4=0\)), 높이 \(=\) C에서 직선까지 거리 \(=\dfrac{\left|\tfrac4{25}-4\right|}{\sqrt2}=\dfrac{96}{25\sqrt2}\).</p>
    $$S=\tfrac12\cdot 2\sqrt2\cdot\dfrac{96}{25\sqrt2}=\dfrac{96}{25}$$
  </div>
  <div class="sol-final">\(50S=50\cdot\dfrac{96}{25}=\mathbf{192}\)</div>
` },

"2022_mock09/common/q22": { answer: 108, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한 \(L(x)\)을 부호로 나누기</div>
    <p>\(L(x)=\displaystyle\lim_{h\to0+}\frac{|f(x+h)|-|f(x-h)|}{h}\)라 하면</p>
    <div class="sol-box">
      \(f(x)&gt;0\Rightarrow L=2f'(x)\), &nbsp; \(f(x)&lt;0\Rightarrow L=-2f'(x)\), &nbsp; \(f(x)=0\Rightarrow L=0\)
    </div>
    <p>따라서 \(g(x)=f(x-3)\,L(x)\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (가): 연속</div>
    <p>\(f(x)=0\)인 점에서 \(L\)의 값이 \(2f'\leftrightarrow -2f'\)로 바뀌므로, \(g\)가 연속이려면 그 점에서
       \(f(x-3)=0\) 또는 \(f'(x)=0\)이어야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f\)의 개형 결정</div>
    <p>\(f\)의 단순근 \(r\)에서는 \(f(r-3)=0\), 즉 \(r-3\)도 \(f\)의 근이어야 한다. 이를 만족하는
       최고차항 계수 \(1\)인 삼차함수는 \(x=\alpha\) 중근 · \(x=\alpha+3\) 단순근:</p>
    $$f(x)=(x-\alpha)^2\,(x-\alpha-3)$$
  </div>
  <figure class="sol-fig"><img src="sol/2022_mock09_common_q22.png" alt="f(x) 개형">
    <figcaption>\(f(x)=(x+1)^2(x-2)\) — \(x=-1\) 중근(극대\(=0\)), 극소 \((1,-4)\)</figcaption></figure>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 조건 (나): 네 근의 합 \(=7\)</div>
    <p>\(g(x)=0\)의 근은 세 방정식의 근의 합집합이다.</p>
    <ul>
      <li>\(f(x)=0:\ x=\alpha,\ \alpha+3\)</li>
      <li>\(f'(x)=0:\ x=\alpha,\ \alpha+2\)</li>
      <li>\(f(x-3)=0:\ x=\alpha+3,\ \alpha+6\)</li>
    </ul>
    <p>서로 다른 네 근 \(\alpha,\ \alpha+2,\ \alpha+3,\ \alpha+6\)의 합 \(=4\alpha+11=7\Rightarrow\alpha=-1\).</p>
  </div>
  <div class="sol-final">\(f(x)=(x+1)^2(x-2),\quad f(5)=6^2\cdot3=\mathbf{108}\)</div>
` },

"2022_mock09/prob_stat/q30": { answer: 218, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 변수 치환</div>
    <p>A,B,C,D가 받는 개수를 \(a,b,c,d\)라 하면 \(a+b+c+d=14\), (가)(나)에서 \(1\le a,b,c,d\le9\).</p>
    <p>\(a=a'+1,\ \dots\)로 놓으면 \(a'+b'+c'+d'=10,\ \ 0\le a',b',c',d'\le8\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (다)의 여사건</div>
    <p>"적어도 한 명 짝수"의 여사건은 "모두 홀수". \(a\)가 홀수 \(\Leftrightarrow a'\)가 짝수이므로,
       (다) 위반 \(=\) \(a',b',c',d'\)가 <b>모두 짝수</b>인 경우.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 포함배제</div>
    <ul>
      <li>전체(음 아닌 정수해): \({}_{4}\mathrm{H}_{10}={}_{13}\mathrm{C}_{3}=286\)</li>
      <li>(나) 위반 [어떤 변수 \(\ge 9\)]: 한 변수 \(9\to {}_4\mathrm C_1\cdot{}_3\mathrm H_1=12\), 한 변수 \(10\to4\). 합 \(16\)</li>
      <li>(다) 위반 [모두 짝수, \(a'=2a''\)]: \(a''+b''+c''+d''=5,\ {}_4\mathrm H_5={}_8\mathrm C_3=56\)</li>
      <li>(나)·(다) 동시 위반 [\(10\)이면서 짝수]: \(4\)</li>
    </ul>
    $$286-16-56+4=218$$
  </div>
  <div class="sol-final">경우의 수 \(=\mathbf{218}\)</div>
` },

"2022_mock09/calculus/q29": { answer: 24, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(g'(x)\) 인수분해</div>
    <p>\(g(x)=\{f(x)+2\}e^{f(x)}\)이므로</p>
    $$g'(x)=f'(x)e^{f(x)}+\{f(x)+2\}e^{f(x)}f'(x)=e^{f(x)}f'(x)\{f(x)+3\}$$
    <p>\(e^{f(x)}&gt;0\)이므로 \(g'(x)=0\Leftrightarrow f'(x)=0\) 또는 \(f(x)+3=0\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대칭성으로 근 배치</div>
    <p>\(f\)가 이차함수라 \(g\)의 극점은 \(f\)의 대칭축에 대해 대칭. (나)의 최소점 \(x=b,\ b+6\)은
       \(f(x)+3=0\)의 두 근, (가)의 최대점 \(x=a\)는 \(f'(x)=0\)의 근이자 대칭축.</p>
    <p>\(b,\ b+6\)의 중점이 \(a\)이므로 \(a=b+3\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(x)\) 결정</div>
    <p>음수 \(k\)에 대해 \(f(x)+3=k(x-b)(x-b-6)\). \(f(a)=6,\ a=b+3\)이므로</p>
    $$6+3=k\cdot3\cdot(-3)\Rightarrow k=-1,\qquad f(x)=-(x-b)(x-b-6)-3$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 두 근의 차</div>
    <p>\(f(x+b)=-x(x-6)-3\)이고 \(f(x+b)=0\Rightarrow x^2-6x+3=0\Rightarrow x=3\pm\sqrt6\).
       평행이동해도 두 근의 차는 같으므로</p>
    $$(\alpha-\beta)^2=(2\sqrt6)^2=24$$
  </div>
  <div class="sol-final">\((\alpha-\beta)^2=\mathbf{24}\)</div>
` },

"2022_mock09/calculus/q30": { answer: 115, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가): \(f(0),\ f'(0)\)</div>
    <p>\(\displaystyle\lim_{x\to0}\frac{\sin(\pi f(x))}{x}=0\)에서 분모\(\to0\)이므로 분자\(\to0\):
       \(\sin(\pi f(0))=0\Rightarrow f(0)=n\) (정수).</p>
    <p>\(p(x)=\sin(\pi f(x))\)라 하면 \(p(0)=0\)이고 \(\dfrac{p(x)}{x}\to p'(0)=\cos(n\pi)\cdot\pi f'(0)=0\Rightarrow f'(0)=0\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(g\) 연속(주기 1)으로 \(f\) 결정</div>
    <p>\(f'(0)=0\)이므로 \(f(x)=9x^3-ax^2+n\). \(g(x+1)=g(x)\), \(x=1\)에서 연속이라 \(f(1)=f(0)\):</p>
    $$9-a+n=n\Rightarrow a=9,\qquad f(x)=9x^3-9x^2+n$$
    <p>\(f'(x)=9x(3x-2)\)라 극대 \(f(0)=n\), 극소 \(f\!\left(\tfrac23\right)=n-\tfrac43\). (나)에서 곱 \(=5\):</p>
    $$n\left(n-\tfrac43\right)=5\Rightarrow(n-3)(3n+5)=0\Rightarrow n=3$$
    <p>\(\therefore f(x)=9x^3-9x^2+3\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 정적분 (주기성 이용)</div>
    <p>정수 \(m\)에 대해 \(\displaystyle\int_m^{m+1}xg(x)\,dx=\int_0^1(x+m)f(x)\,dx=\int_0^1 xf\,dx+m\int_0^1 f\,dx\).</p>
    $$\int_0^1 xf\,dx=\frac{21}{20},\qquad \int_0^1 f\,dx=\frac94$$
    $$\int_0^5 xg\,dx=\sum_{m=0}^{4}\left(\frac{21}{20}+\frac94m\right)=\frac{21}{4}+\frac{45}{2}=\frac{111}{4}$$
  </div>
  <div class="sol-final">\(\dfrac{q}{p}=\dfrac{111}{4}\), 서로소 → \(p+q=4+111=\mathbf{115}\)</div>
` },

/* ── 2022 수능 킬러 (GPT EBS 참조 → 자체 재작성). 공통22는 별도(맨 위) ── */

"2022_csat/common/q14": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 처음·끝 위치와 이동거리</div>
    <p>\(x(t)=t(t-1)(at+b)\)이므로 \(x(0)=x(1)=0\) (원점에서 출발해 원점으로 복귀).
       또 \(\displaystyle\int_0^1|v(t)|\,dt=2\)이므로 \([0,1]\)에서 움직인 <b>거리는 2</b>.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄱ. \(\displaystyle\int_0^1 v\,dt=0\) &nbsp;<span class="sol-ok">참</span></div>
    <p>위치의 변화량 \(=x(1)-x(0)=0\). (참)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄴ. \(|x(t_1)|&gt;1\)인 \(t_1\) 존재 &nbsp;<span class="sol-no">거짓</span></div>
    <p>어떤 시각에 \(|x(t_1)|&gt;1\)이면 원점에서 출발·복귀하므로 이동거리가 \(2|x(t_1)|&gt;2\)가 되어 거리 \(2\)에 모순.
       따라서 그런 \(t_1\)은 없다. (거짓)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> ㄷ. \(|x(t)|&lt;1\)이면 원점 통과 &nbsp;<span class="sol-ok">참</span></div>
    <p>\((0,1)\)에서 원점을 지나지 않으면 \(x\)의 부호가 일정하고, \(x\)는 삼차함수라 봉우리가 하나뿐이므로
       이동거리 \(=2\times(\text{최댓값})&lt;2\)가 되어 거리 \(2\)에 모순. 따라서 \(x(t_2)=0\)인 \(t_2\)가 \((0,1)\)에 존재. (참)</p>
  </div>
  <div class="sol-final">옳은 것은 ㄱ, ㄷ &nbsp;→&nbsp; 답 &nbsp;③</div>
` },

"2022_csat/common/q20": { answer: 110, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(b\) 구하기</div>
    <p>\(f(x+1)-xf(x)=ax+b\)에 \(x=0\): \(f(1)=b\). \([0,1]\)에서 \(f(x)=x\)라 \(f(1)=1\), \(\therefore b=1\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \([1,2]\)에서의 \(f(x)\)</div>
    <p>\(0\le x\le1\)일 때 \(f(x+1)=xf(x)+ax+1=x^2+ax+1\). \(x+1=t\)로 놓으면</p>
    $$f(t)=(t-1)^2+a(t-1)+1=t^2+(a-2)t+(2-a)\quad(1\le t\le2)$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 미분가능성으로 \(a\)</div>
    <p>\([0,1]\)에서 \(f(x)=x\)라 \(x=1\)에서 좌미분계수 \(1\). \(f\)가 미분가능하므로 \(f'(1)=1\):</p>
    $$f'(t)=2t+(a-2),\quad f'(1)=a=1$$
    <p>\(\therefore\ 1\le x\le2\)에서 \(f(x)=x^2-x+1\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 정적분</div>
    $$\int_1^2 f\,dx=\int_1^2(x^2-x+1)\,dx=\left[\tfrac13x^3-\tfrac12x^2+x\right]_1^2=\tfrac{11}{6}$$
  </div>
  <div class="sol-final">\(60\displaystyle\int_1^2 f\,dx=60\cdot\tfrac{11}{6}=\mathbf{110}\)</div>
` },

"2022_csat/prob_stat/q28": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가): 각 값의 범위</div>
    <p>\(f(x)\ge\sqrt x\)에서 \(f(1)\in\{1,2,3,4\}\), \(f(2),f(3),f(4)\in\{2,3,4\}\), \(f(5)\in\{3,4\}\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나): 치역(원소 3개) 분류</div>
    <p>가능한 치역: \(\{1,2,3\},\ \{1,2,4\},\ \{1,3,4\},\ \{2,3,4\}\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 각 경우의 함수 개수</div>
    <ul>
      <li>\(\{1,2,3\}\): \(f(1)=1,\ f(5)=3\) 고정, \(f(2),f(3),f(4)\in\{2,3\}\) 중 \(2\)가 나오도록 \(=2^3-1=7\)</li>
      <li>\(\{1,2,4\}\): 같은 방법 \(=7\)</li>
      <li>\(\{1,3,4\}\): \(f(1)=1\) 고정, 나머지 넷 \(\in\{3,4\}\) 중 \(3,4\) 모두 나오도록 \(=2^4-2=14\)</li>
      <li>\(\{2,3,4\}\): \(f(5)=3\) 또는 \(4\). 각 경우 나머지 넷 \(\in\{2,3,4\}\)에서 부족한 두 값이 모두 나오도록 \(=3^4-31=50\) → \(100\)</li>
    </ul>
  </div>
  <div class="sol-final">\(7+7+14+100=128\) &nbsp;→&nbsp; 답 &nbsp;①</div>
` },

"2022_csat/prob_stat/q29": { answer: 31, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 상수 \(k\)</div>
    <p>\(g(x)=k-f(x)\ge0\)이고 \(g\)도 확률밀도함수라 \(\displaystyle\int_0^6 g\,dx=1\). \(\int_0^6 f\,dx=1\)이므로</p>
    $$6k-1=1\ \Rightarrow\ k=\tfrac13$$
  </div>
  <figure class="sol-fig"><img src="sol/2022_csat_prob_stat_q29.png" alt="확통29 그래프">
    <figcaption>색칠 부분 \(=\mathrm P(2\le Y\le5)\) (직선 \(y=\tfrac13\)과 \(y=f(x)\) 사이)</figcaption></figure>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 확률 \(=\) 넓이</div>
    <p>\(\mathrm P(6k\le Y\le15k)=\mathrm P(2\le Y\le5)=\displaystyle\int_2^5(k-f)\,dx\). \([0,3]\)에서 \(f=\tfrac{x}{12}\), \([3,5]\)에서 \(f=\tfrac14\)이므로</p>
    $$\int_2^3\!\left(\tfrac13-\tfrac{x}{12}\right)dx+\int_3^5\!\left(\tfrac13-\tfrac14\right)dx=\tfrac18+\tfrac16=\tfrac{7}{24}$$
  </div>
  <div class="sol-final">\(\dfrac{q}{p}=\dfrac{7}{24}\) → \(p+q=24+7=\mathbf{31}\)</div>
` },

"2022_csat/prob_stat/q30": { answer: 191, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 사건 정의</div>
    <p>5번 중 눈 \(\ge5\)가 \(j\)번이면 \(a_5=2j,\ b_5=5-j\), \(a_5+b_5=j+5\).
       \(A:\,a_5+b_5\ge7\)(즉 \(j\ge2\)), \(B:\,a_k=b_k\)인 \(k\) 존재. 눈 \(\ge5\) 확률 \(\tfrac13\), \(\le4\) 확률 \(\tfrac23\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm P(A)\)</div>
    $$\mathrm P(A)=\sum_{j=2}^{5}{}_5\mathrm C_j\left(\tfrac13\right)^{j}\left(\tfrac23\right)^{5-j}=\frac{80+40+10+1}{3^5}=\frac{131}{243}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\mathrm P(A\cap B)\)</div>
    <p>\(a_k=b_k\)는 \(j=2,3\)에서만 가능하고, 세 번째 시행까지 눈 \(\ge5\) 1번·\(\le4\) 2번일 때:</p>
    $$\mathrm P(A\cap B)={}_3\mathrm C_1\tfrac13\!\left(\tfrac23\right)^2\!\left[{}_2\mathrm C_1\tfrac13\tfrac23+\left(\tfrac13\right)^2\right]=\frac{48+12}{3^5}=\frac{60}{243}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 조건부확률</div>
    $$\mathrm P(B\mid A)=\frac{\mathrm P(A\cap B)}{\mathrm P(A)}=\frac{60}{131}=\frac{q}{p}$$
  </div>
  <div class="sol-final">\(p+q=131+60=\mathbf{191}\)</div>
` },

"2022_csat/calculus/q29": { answer: 11, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f(\theta)\) 구하기 (위 그림 참고)</div>
    <p>\(\overline{AB}\)의 중점(반원 중심) \(M\), 반지름 \(1\). 중심각 \(\angle AMQ=2\angle ABQ=4\theta\).</p>
    <ul>
      <li>부채꼴 \(AMQ=\tfrac12\cdot1^2\cdot4\theta=2\theta\)</li>
      <li>삼각형 \(MBQ=\tfrac12\sin(\pi-4\theta)=\tfrac12\sin4\theta\)</li>
      <li>삼각형 \(RAB\): \(\angle ARB=\pi-3\theta\), 사인법칙으로 \(\overline{BR}=\dfrac{2\sin\theta}{\sin3\theta}\), 넓이 \(=\dfrac{2\sin\theta\sin2\theta}{\sin3\theta}\)</li>
    </ul>
    $$f(\theta)=2\theta+\tfrac12\sin4\theta-\frac{2\sin\theta\sin2\theta}{\sin3\theta}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\displaystyle\lim_{\theta\to0+}\frac{f(\theta)}{\theta}\)</div>
    <p>각 항을 \(\dfrac{\sin k\theta}{k\theta}\to1\)로 정리하면</p>
    $$\lim_{\theta\to0+}\frac{f(\theta)}{\theta}=2+2-\frac{4}{3}=\frac83$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 정삼각형 \(STU\)의 한 변 \(a\)</div>
    <p>\(\overline{UT}\parallel\overline{AB}\)에서 \(\triangle RUT\sim\triangle RAB\). 사인법칙·닮음으로 \(a\)를 구하면</p>
    $$\lim_{\theta\to0+}\frac{a}{\theta}=\frac43\cdot\frac{6}{3\sqrt3}=\frac{8}{3\sqrt3}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 극한</div>
    <p>\(g(\theta)=\dfrac{\sqrt3}{4}a^2\)이므로 \(\displaystyle\lim_{\theta\to0+}\frac{g(\theta)}{\theta^2}=\frac{\sqrt3}{4}\left(\frac{8}{3\sqrt3}\right)^2=\frac{16\sqrt3}{27}\).</p>
    $$\lim_{\theta\to0+}\frac{g(\theta)}{\theta f(\theta)}=\frac{16\sqrt3/27}{8/3}=\frac{2\sqrt3}{9}=\frac{q}{p}\sqrt3$$
  </div>
  <div class="sol-final">\(\dfrac{q}{p}=\dfrac29\) → \(p+q=2+9=\mathbf{11}\)</div>
` },

"2022_csat/calculus/q30": { answer: 143, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f(2),f(4),f(8)\) 구하기</div>
    <p>\(g\)는 \(f\)의 역함수이고 \(g(2x)=2f(x)\). \(f(1)=1\)에서 \(g(2)=2f(1)=2\Rightarrow f(2)=2\).
       같은 방법으로 \(f(4)=4,\ f(8)=8\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부분적분</div>
    $$\int_1^8 xf'(x)\,dx=\big[xf(x)\big]_1^8-\int_1^8 f\,dx=63-\int_1^8 f\,dx$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 역함수 대칭 + 치환으로 \(\int_1^8 f\)</div>
    <p>\(\int_1^2 f=\tfrac54\)(조건). 역함수 대칭 \(\int_c^d f=d\,f(d)-c\,f(c)-\int_{f(c)}^{f(d)}g\)와 \(y=2t\) 치환(\(g(2t)=2f(t)\)) 이용:</p>
    $$\int_2^4 f=12-\int_2^4 g=12-4\!\int_1^2 f=12-5=7$$
    $$\int_4^8 f=48-\int_4^8 g=48-4\!\int_2^4 f=48-28=20$$
    $$\therefore\ \int_1^8 f=\tfrac54+7+20=\tfrac{113}{4}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답</div>
    $$\int_1^8 xf'\,dx=63-\tfrac{113}{4}=\tfrac{139}{4}=\tfrac{q}{p}$$
  </div>
  <div class="sol-final">\(p+q=4+139=\mathbf{143}\)</div>
` },

/* ── 2023 6월 모평 킬러 (GPT 종로 참조 → 자체 재작성) ── */

"2023_mock06/common/q20": { answer: 13, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(g'(x)\) 구하기</div>
    <p>\(|f(t)|\)의 한 부정적분을 \(F\)라 하면 \(g(x)=F(x+1)-F(x)\)이므로</p>
    $$g'(x)=|f(x+1)|-|f(x)|$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f\)는 서로 다른 두 실근을 가진다</div>
    <p>\(f(x)=2x^2+bx+c\)라 하자. 만약 모든 \(x\)에서 \(f(x)\ge0\)이면
       \(g'(x)=f(x+1)-f(x)=4x+2+b\)로 <b>증가하는 일차함수</b>라 부호가 한 번만 바뀐다.
       그러면 극소가 하나뿐이라 \(x=1,\ 4\) 두 곳에서 극소인 조건에 모순.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 극소가 되는 지점</div>
    <p>\(g'(x)=0 \iff |f(x+1)|=|f(x)| \iff f(x+1)=f(x)\) 또는 \(f(x+1)=-f(x)\).</p>
    <ul>
      <li>\(f(x+1)=f(x)\) : \(4x+2+b=0\) → 해가 <b>하나뿐</b>이고, 이 점은 두 극소 사이의 <b>극대</b></li>
      <li>따라서 극소인 \(x=1,\ 4\)는 <b>\(f(x)+f(x+1)=0\)의 두 근</b></li>
    </ul>
  </div>
  <figure class="sol-fig"><img src="sol/2023_mock06_common_q20.png" alt="y=|f(x)| 그래프">
    <figcaption>\(|f(1)|=|f(2)|\), \(|f(4)|=|f(5)|\) — 두 지점에서 \(g'\)의 부호가 \(-\to+\)</figcaption></figure>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 근과 계수의 관계</div>
    $$f(x)+f(x+1)=4x^2+(2b+4)x+(b+2c+2)$$
    <p>두 근이 \(1,\ 4\)이므로</p>
    $$\text{합}:\ -\frac{2b+4}{4}=5\ \Rightarrow\ b=-12,\qquad
      \text{곱}:\ \frac{b+2c+2}{4}=4\ \Rightarrow\ c=13$$
    <p>\(\therefore f(x)=2x^2-12x+13=2(x-3)^2-5\) (실근 두 개 ✓)</p>
  </div>
  <div class="sol-final">\(f(0)=c=\mathbf{13}\)</div>
` },

"2023_mock06/common/q21": { answer: 426, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 2로 통일</div>
    $$4\log_{64}\frac{3}{4n+16}=\frac{4}{6}\log_{2}\frac{3}{4n+16}=-\frac23\log_2\frac{4n+16}{3}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 정수로</div>
    <p>\(\dfrac{4n+16}{3}=2^{L}\)로 놓으면 \(4n+16=3\cdot2^{L}\). 좌변이 자연수이므로 \(2^{L}\)은 유리수,
       즉 <b>\(L\)은 정수</b>이다. 또 \(4n+16\ge20\)이라 \(L\ge3\).</p>
    <p>주어진 값 \(-\dfrac23 L\)이 정수이려면 <b>\(L\)은 3의 배수</b>.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(n\) 구하기</div>
    <p>\(L=3k\ (k\) 자연수\()\)라 하면 \(4n+16=3\cdot2^{3k}\), 즉 \(n=3\cdot2^{3k-2}-4\).</p>
    <ul>
      <li>\(k=1:\ n=3\cdot2-4=2\)</li>
      <li>\(k=2:\ n=3\cdot2^4-4=44\)</li>
      <li>\(k=3:\ n=3\cdot2^7-4=380\)</li>
      <li>\(k=4:\ n=3\cdot2^{10}-4=3068&gt;1000\) (제외)</li>
    </ul>
  </div>
  <div class="sol-final">\(2+44+380=\mathbf{426}\)</div>
` },

"2023_mock06/common/q22": { answer: 19, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(g(t)\ne0\)인 경우 — 유리화</div>
    <p>\(x\to-3\)이므로 \(x&lt;0\)쪽, 즉 \(g(x)=(x+3)f(x)\)를 쓴다. 분자를 유리화하면</p>
    $$\frac{\sqrt{|g(x)|+\{g(t)\}^2}-|g(t)|}{(x+3)^2}
      =\frac{|g(x)|}{(x+3)^2\left(\sqrt{|g(x)|+\{g(t)\}^2}+|g(t)|\right)}
      \ \longrightarrow\ \frac{|f(x)|}{2|g(t)|\,|x+3|}$$
    <p>이 값이 수렴하려면 \(f(-3)=0\), 즉 <b>\(f(x)=(x+3)(x-p)\)</b>.
       (아니라면 \(g(t)\ne0\)인 <i>모든</i> \(t\)에서 발산하여 "\(t=-3,6\)뿐"에 모순)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(g(t)=0\)인 경우 — 항상 발산</div>
    <p>\(|g(x)|=(x+3)^2|x-p|\)이므로</p>
    $$\frac{\sqrt{|g(x)|}}{(x+3)^2}=\frac{\sqrt{|x-p|}}{|x+3|}\ \longrightarrow\ \infty$$
    <p>\(\therefore\) <b>극한이 존재하지 않는 \(t\) \(\iff\) \(g(t)=0\)</b>. 즉 \(g(t)=0\)의 해가 \(-3,\ 6\)뿐이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a,\ b,\ p\) 결정</div>
    <ul>
      <li>\(x&lt;0\) : \(g(x)=(x+3)^2(x-p)\) → 근은 \(-3\), (그리고 \(p&lt;0\)이면 \(p\))</li>
      <li>\(x\ge0\) : \(g(x)=(x+a)(x-b+3)(x-b-p)\), \(a&gt;0\)이라 \(-a\)는 제외 → 근은 \(b-3\), \(b+p\)</li>
    </ul>
    <p>\(b&gt;3\)이라 \(b-3&gt;0\)이므로 \(b-3=6\Rightarrow b=9\). 남은 근 \(9+p\)도 \(6\)이어야 하므로 \(p=-3\)
       (\(p\ge0\)이면 \(9+p\ne6\)인 새 근이 생겨 모순).</p>
    <p>\(\therefore f(x)=(x+3)^2\), \(\ x&lt;0\)에서 \(g(x)=(x+3)^3\), \(\ x\ge0\)에서 \(g(x)=(x+a)(x-6)^2\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(x=0\)에서 연속</div>
    $$27=36a\ \Rightarrow\ a=\frac34$$
  </div>
  <div class="sol-final">\(g(4)=\left(4+\dfrac34\right)(4-6)^2=\dfrac{19}{4}\cdot4=\mathbf{19}\)</div>
` },

"2023_mock06/prob_stat/q29": { answer: 115, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f(1)\)의 값 제한</div>
    <ul>
      <li>\(f(1)=1\) : \(f(f(1))=f(1)=1\ne4\) → 불가</li>
      <li>\(f(1)=5\) : \(f(5)=4\)인데 \(f(1)\le f(3)\le f(5)\)에서 \(5\le f(3)\le4\) → 불가</li>
    </ul>
    <p>\(\therefore f(1)\in\{2,3,4\}\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 경우별 개수</div>
    <ul>
      <li><b>\(f(1)=2\)</b> : \(f(2)=4\) 고정. \(2\le f(3)\le f(5)\)에서 \(f(3),f(5)\in\{2,3,4,5\}\) →
          \({}_4\mathrm H_2={}_5\mathrm C_2=10\), \(f(4)\)는 \(5\)가지 → \(10\times5=50\)</li>
      <li><b>\(f(1)=3\)</b> : \(f(3)=4\) 고정. \(3\le4\le f(5)\)에서 \(f(5)\in\{4,5\}\) → \(2\)가지,
          \(f(2),f(4)\)는 \(5^2=25\) → \(2\times25=50\)</li>
      <li><b>\(f(1)=4\)</b> : \(f(4)=4\) 고정. \(4\le f(3)\le f(5)\)에서 \(f(3),f(5)\in\{4,5\}\) →
          \({}_2\mathrm H_2=3\), \(f(2)\)는 \(5\)가지 → \(3\times5=15\)</li>
    </ul>
  </div>
  <div class="sol-final">\(50+50+15=\mathbf{115}\)</div>
` },

"2023_mock06/prob_stat/q30": { answer: 9, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 사건 정의와 \(n(A)\)</div>
    <p>\(A:\ b-a\ge5\), \(B:\ c-a\ge10\). \(1\le a&lt;b&lt;c\le12\)에서</p>
    $$(a-1)+(b-a-5)+(c-b-1)+(12-c)=5$$
    <p>각 항이 \(0\) 이상인 정수이므로 (중복조합)</p>
    $$n(A)={}_4\mathrm H_5={}_8\mathrm C_3=56$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(n(A\cap B)\)</div>
    <p>\(c\le12\), \(c-a\ge10\)에서 \(a\le2\).</p>
    <ul>
      <li>\(a=1\) : \(b\ge6,\ c\ge11\). \(c=11\)이면 \(b=6\!\sim\!10\) (5), \(c=12\)이면 \(b=6\!\sim\!11\) (6) → \(11\)</li>
      <li>\(a=2\) : \(b\ge7,\ c\ge12\Rightarrow c=12,\ b=7\!\sim\!11\) → \(5\)</li>
    </ul>
    <p>\(\therefore n(A\cap B)=11+5=16\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건부확률</div>
    $$\mathrm P(B\mid A)=\frac{n(A\cap B)}{n(A)}=\frac{16}{56}=\frac{2}{7}=\frac{q}{p}$$
  </div>
  <div class="sol-final">\(p+q=7+2=\mathbf{9}\)</div>
` },

"2023_mock06/calculus/q29": { answer: 50, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 각도 정리 (문제의 그림 참고)</div>
    <p>\(\triangle AHP\)는 \(\angle H=\dfrac{\pi}{2}\), \(\angle APH=\theta\)이므로 \(\angle OAP=\dfrac{\pi}{2}-\theta\).
       \(\overline{OA}=\overline{OP}=1\)인 이등변삼각형이므로 \(\angle AOP=\pi-2\left(\dfrac{\pi}{2}-\theta\right)=2\theta\).</p>
    $$\overline{AH}=1-\cos2\theta,\qquad \overline{AP}=\frac{\overline{AH}}{\sin\theta}=\frac{2\sin^2\theta}{\sin\theta}=2\sin\theta$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(\theta)\) — 삼각형 \(AQH\)</div>
    <p>\(\overline{AQ}\)가 \(\angle OAP\)의 이등분선이므로 \(\angle HAQ=\dfrac{\pi}{4}-\dfrac{\theta}{2}\).</p>
    $$\overline{HQ}=\overline{AH}\tan\!\left(\tfrac{\pi}{4}-\tfrac{\theta}{2}\right),\qquad
      f(\theta)=\tfrac12(1-\cos2\theta)^2\tan\!\left(\tfrac{\pi}{4}-\tfrac{\theta}{2}\right)$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(g(\theta)\) — 삼각형 \(PSR\)</div>
    <p>\(\overline{OS}=\overline{OA}\tan\!\left(\tfrac{\pi}{4}-\tfrac{\theta}{2}\right)\), \(\angle POS=\dfrac{\pi}{2}-2\theta\)이므로</p>
    $$\triangle OPS=\tfrac12\tan\!\left(\tfrac{\pi}{4}-\tfrac{\theta}{2}\right)\cos2\theta$$
    <p>각의 이등분선 정리로 \(\overline{OR}:\overline{RP}=\overline{AO}:\overline{AP}=1:2\sin\theta\).
       두 삼각형 \(PSR,\ PSO\)는 높이가 같으므로 넓이비 \(=\overline{RP}:\overline{OP}\):</p>
    $$g(\theta)=\triangle OPS\times\frac{2\sin\theta}{1+2\sin\theta}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 극한 (\(1-\cos2\theta=2\sin^2\theta\))</div>
    $$\frac{\theta^3 g(\theta)}{f(\theta)}
      =\frac{2\theta^3\sin\theta\cos2\theta}{(1+2\sin\theta)(2\sin^2\theta)^2}
      =\frac{\cos2\theta}{2(1+2\sin\theta)}\left(\frac{\theta}{\sin\theta}\right)^{3}$$
    $$\therefore\ k=\lim_{\theta\to0+}\frac{\theta^3g(\theta)}{f(\theta)}=\frac12$$
  </div>
  <div class="sol-final">\(100k=\mathbf{50}\)</div>
` },

"2023_mock06/calculus/q30": { answer: 16, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극값과 변곡점의 개수</div>
    $$f'(x)=e^{-x}\left(-x^2+(a+2)x-a\right),\qquad
      f''(x)=e^{-x}\left(x^2-(a+4)x+2a+2\right)$$
    <p>판별식이 각각 \(a^2+4&gt;0\), \(a^2+8&gt;0\)이므로 <b>극값 2개 · 변곡점 2개</b>.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(g(t)\)의 의미</div>
    <p>\(g(t)\)는 점 \((t,f(t))\)에서의 접선과 곡선 \(y=f(x)\)의 <b>교점의 개수</b>이다.</p>
    <p>변곡점에서는 접점 근처의 두 교점이 하나로 합쳐져 그 점에서만 값이 줄어든다 → <b>좌우극한은 같고 함숫값만 다름</b>.
       \(g(5)+\lim\limits_{t\to5}g(t)=5\)(홀수)이려면 두 값이 달라야 하므로 <b>\(t=5\)는 변곡점</b>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\) 구하기</div>
    $$f''(5)=0:\ 25-5(a+4)+2a+2=0\ \Rightarrow\ 7-3a=0\ \Rightarrow\ a=\frac73$$
    <p>검토: \(x^2-\tfrac{19}{3}x+\tfrac{20}{3}=0\Rightarrow(x-5)(3x-4)=0\) → 변곡점 \(x=\tfrac43,\ 5\) ✓</p>
  </div>
  <figure class="sol-fig"><img src="sol/2023_mock06_calculus_q30.png" alt="f(x) 그래프">
    <figcaption>\(a=\tfrac73\)일 때 극값 2개(빨강) · 변곡점 2개(보라)</figcaption></figure>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 좌우극한이 다른 \(k\)</div>
    <p>극값을 갖는 점에서는 접선이 수평이고 그 전후로 접선의 기울기 부호가 바뀌어 교점 개수가 달라진다.
       즉 \(k\)는 <b>\(f'(x)=0\)의 두 근</b>이므로, 근과 계수의 관계에서</p>
    $$\text{모든 }k\text{의 합}=a+2=\frac73+2=\frac{13}{3}=\frac{q}{p}$$
  </div>
  <div class="sol-final">\(p+q=3+13=\mathbf{16}\)</div>
` },

/* ── 2023 9월 모평 킬러 (GPT 종로 참조 → 자체 재작성) ── */

"2023_mock09/common/q21": { answer: 220, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 \(\overline{AB}=4\overline{PB}\)</div>
    <p>같은 직선 위의 두 점 사이의 거리는 <b>\(x\)좌표 차에 비례</b>한다.
       \(P(a,2^a)\)를 지나고 기울기가 \(-m\)인 직선에서</p>
    <ul>
      <li>\(y\)절편 \(B\)까지 : \(\Delta x=a\)</li>
      <li>\(x\)절편 \(A\)까지 : \(0-2^a=-m(x-a)\)에서 \(\Delta x=\dfrac{2^a}{m}\)</li>
    </ul>
    <p>\(\overline{AB}=4\overline{PB}\ \Rightarrow\ a+\dfrac{2^a}{m}=4a\ \Rightarrow\ \dfrac{2^a}{m}=3a\),
       즉 \(\ m=\dfrac{2^a}{3a}\) &nbsp;⋯㉠ &nbsp;(\(A(4a,\,0)\))</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 \(\overline{CQ}=3\overline{AB}\) → \(b=a+2\)</div>
    <p>\(Q(b,2^b)\)를 지나는 기울기 \(-m\)인 직선의 \(x\)절편까지 \(\Delta x=\dfrac{2^b}{m}\).
       \(\overline{AB}\)의 \(\Delta x=4a=\dfrac43\cdot\dfrac{2^a}{m}\)이므로</p>
    $$\frac{2^b}{m}=3\cdot 4a=4\cdot\frac{2^a}{m}\ \Rightarrow\ 2^b=4\cdot2^a=2^{a+2}\ \Rightarrow\ b=a+2\ \ ⋯㉡$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 직선 \(PQ\)의 기울기</div>
    $$m=\frac{2^b-2^a}{b-a}\overset{㉡}{=}\frac{4\cdot2^a-2^a}{2}=\frac{3\cdot2^a}{2}\ \ ⋯㉢$$
    <p>㉠\(=\)㉢ : \(\ \dfrac{2^a}{3a}=\dfrac{3\cdot2^a}{2}\ \Rightarrow\ \dfrac{1}{3a}=\dfrac32\ \Rightarrow\ a=\dfrac29\)</p>
  </div>
  <div class="sol-final">\(b=\dfrac29+2=\dfrac{20}{9}\), \(\ 90(a+b)=90\cdot\dfrac{22}{9}=\mathbf{220}\)</div>
` },

"2023_mock09/common/q22": { answer: 58, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(h(t)\)의 정체</div>
    <p>\(g(x)=0\)을 풀면 \(x\ge t\)에서 \(f(x)=0\), \(x&lt;t\)에서 \(f(x)=2f(t)\). 따라서</p>
    <div class="sol-box">
      \(h(t)=\#\{x\ge t:\ f(x)=0\}\ +\ \#\{x&lt;t:\ f(x)=2f(t)\}\)
    </div>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 불연속이 생기는 곳</div>
    <ul>
      <li><b>\(f(t)=0\)의 실근</b> — 앞항의 개수가 바뀐다</li>
      <li><b>\(2f(t)=8\)(극댓값), 즉 \(f(t)=4\)이면서 \(t&gt;3\)</b> — 수평선이 극대점에 접하며 뒷항의 개수가 바뀐다</li>
    </ul>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 극솟값 결정</div>
    <p>\(f(x)=0\)이 서로 다른 실근을 2개 이상 가지면 극솟값이 \(0\) 이하라
       \(f(t)=4\,(t&gt;3)\)인 점도 2개 → 불연속점이 4개 이상이라 모순.</p>
    <p>따라서 \(f(x)=0\)의 실근은 1개(극솟값 \(&gt;0\)). 극솟값을 \(n\)이라 하면</p>
    <table class="sol-table">
      <tr><th>극솟값 \(n\)</th><th>\(f(t)=4\,(t&gt;3)\)</th><th>\(f(t)=0\)</th><th>불연속점</th></tr>
      <tr><td>\(n&lt;4\)</td><td>2개</td><td>1개</td><td class="sol-no">3개</td></tr>
      <tr><td>\(n=4\)</td><td>1개</td><td>1개</td><td class="sol-ok">2개 ✓</td></tr>
      <tr><td>\(n&gt;4\)</td><td>0개</td><td>1개</td><td class="sol-no">1개</td></tr>
    </table>
    <p>\(\therefore\) 극솟값 \(=4\) &nbsp;(극댓값 \(8\)의 절반)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(f(x)\) 구하기</div>
    <p>\(x=3\)에서 극댓값 \(8\)이므로 \(f(x)-8=(x-3)^2(x-q)\). 이때
       \(f'(x)=(x-3)(3x-2q-3)\)이라 극소점은 \(x=\dfrac{2q+3}{3}\)이고, 그 값이 \(4\)이므로</p>
    $$8-\frac{4(q-3)^3}{27}=4\ \Rightarrow\ (q-3)^3=27\ \Rightarrow\ q=6$$
    $$\therefore\ f(x)=(x-3)^2(x-6)+8\quad(\text{극소}\ (5,4)\ ✓)$$
  </div>
  <figure class="sol-fig"><img src="sol/2023_mock09_common_q22.png" alt="f(x) 그래프">
    <figcaption>극대 \((3,8)\) · 극소 \((5,4)\) — 극솟값이 극댓값의 절반일 때 불연속점이 2개</figcaption></figure>
  <div class="sol-final">\(f(8)=(8-3)^2(8-6)+8=50+8=\mathbf{58}\)</div>
` },

"2023_mock09/calculus/q29": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 최소 거리 ⟹ 수직</div>
    <p>거리가 최소인 점 \((s,f(s))\)에서는 \((t,0)\)과 잇는 직선과 접선이 서로 <b>수직</b>이다.</p>
    $$\frac{f(s)}{s-t}\cdot f'(s)=-1\ \Longrightarrow\ t=s+f(s)f'(s)\quad ⋯㉠$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(h(1)\)의 값</div>
    <p>\(h(1)=\alpha\)라 하면 \(g(\alpha)=1\), 즉 \(f(s)=1\)에서 \(e^{s}+s=1\Rightarrow s=0\).</p>
    <p>\(f(0)=1,\ f'(0)=2\)이므로 ㉠에서 \(\ \alpha=0+1\cdot2=2\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(g'(2)\) — 매개변수처럼 \(s\)로 미분</div>
    $$\frac{dt}{ds}=1+\{f'(s)\}^2+f(s)f''(s)=1+(e^{s}+1)^2+(e^{s}+s)e^{s}$$
    <p>\(s=0\)일 때 \(\dfrac{dt}{ds}=1+4+1=6\). 또 \(g(t)=f(s)\)에서 \(\dfrac{dg}{ds}=f'(s)=2\)이므로</p>
    $$g'(2)=\frac{dg/ds}{dt/ds}=\frac{2}{6}=\frac13$$
  </div>
  <div class="sol-final">역함수의 미분법 : \(h'(1)=\dfrac{1}{g'(2)}=\mathbf{3}\)</div>
` },

"2023_mock09/calculus/q30": { answer: 283, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f'\)의 부호</div>
    <p>\(x&gt;-3\)이면 \(x+3&gt;0\)이라 \(g(x+3)\ge0\). (나)에서
       \(f'(x)=g(x+3)\{f(x)-f(0)\}^2\ge0\).</p>
    <p>(가)에서 \(x\le-3\)일 때 \(f(x)\ge f(-3)\)이므로 \(f\)는 \(x=-3\)에서 최소, 즉 \(x&lt;-3\)에서 \(f'\le0\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f'(x)\) 결정</div>
    <p>(나)에 \(x=0\)을 넣으면 \(f'(0)=0\). \(f\)가 최고차항 계수 \(1\)인 사차함수이므로
       \(f'\)은 최고차항 계수 \(4\)인 삼차함수이고 \(f'(-3)=f'(0)=0\).</p>
    <p>부호가 \(x=-3\)에서만 바뀌므로 \(x=0\)은 <b>중근</b>이다.</p>
    $$f'(x)=4x^2(x+3)=4x^3+12x^2\ \Longrightarrow\ f(x)=x^4+4x^3+C$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 적분 — \(x\to x+3\) 이동 후 치환</div>
    $$\int_4^5 g(x)\,dx=\int_1^2 g(u+3)\,du=\int_1^2\frac{f'(u)}{\{f(u)-f(0)\}^2}\,du$$
    <p>\(w=f(u)-f(0)=u^4+4u^3\)로 놓으면 \(dw=f'(u)\,du\)이고 \(u=1\to w=5\), \(u=2\to w=48\).</p>
    $$=\int_5^{48}\frac{dw}{w^2}=\left[-\frac1w\right]_5^{48}=\frac15-\frac1{48}=\frac{43}{240}$$
  </div>
  <div class="sol-final">\(p+q=240+43=\mathbf{283}\)</div>
` },

"2023_mock09/prob_stat/q29": { answer: 175, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합으로 바꾸기</div>
    <p>\(\overline X=\dfrac{11}{4}\ \iff\) 네 수의 합이 \(11\). 전체 경우의 수는 \(6^4=1296\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 합이 11인 경우 (크기순 나열)</div>
    <div class="sol-box">
      \((1,1,3,6)\ (1,1,4,5)\ (1,2,2,6)\ (1,2,3,5)\ (1,2,4,4)\)<br>
      \((1,3,3,4)\ (2,2,2,5)\ (2,2,3,4)\ (2,3,3,3)\) &nbsp;— 모두 9가지
    </div>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 같은 것이 있는 순열</div>
    <ul>
      <li>네 수가 모두 다름 \((1,2,3,5)\) : \(4!=24\) → 1가지</li>
      <li>세 수가 같음 \((2,2,2,5),(2,3,3,3)\) : \(\dfrac{4!}{3!}=4\) → 2가지</li>
      <li>두 수가 같음 (나머지 6가지) : \(\dfrac{4!}{2!}=12\)</li>
    </ul>
    $$24+2\times4+6\times12=104$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 확률</div>
    $$\mathrm P\!\left(\overline X=\tfrac{11}{4}\right)=\frac{104}{1296}=\frac{13}{162}=\frac{q}{p}$$
  </div>
  <div class="sol-final">\(p+q=162+13=\mathbf{175}\)</div>
` },

"2023_mock09/prob_stat/q30": { answer: 260, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (나)의 해석 — 핵심</div>
    <p>\(A=f(X)\)이므로 \(B=f(f(X))=f(A)\subseteq f(X)=A\).
       여기에 \(n(A)=n(B)\)를 쓰면 \(f(A)=A\), 즉 <b>\(f|_A\)는 \(A\)에서 \(A\)로의 일대일대응</b>이다.</p>
    <p>조건 (다) \(f(x)\ne x\)를 더하면 \(f|_A\)는 \(A\)의 <b>완전순열</b>(고정점이 없는 순열).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(n(A)\)의 범위</div>
    <p>\(n(A)=1\)이면 \(A=\{a\}\)에서 \(f(a)=a\)가 되어 (다)에 모순. (가)와 합쳐 \(n(A)=2\) 또는 \(3\).</p>
    <p>\(x\notin A\)인 원소는 \(f(x)\in A\)이고 \(x\notin A\)이므로 \(f(x)\ne x\)가 <b>자동으로</b> 성립한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 경우별 개수</div>
    <ul>
      <li><b>\(n(A)=2\)</b> : \(A\) 선택 \({}_5\mathrm C_2=10\), 완전순열 \(1\)가지(서로 맞바꿈),
          \(A\) 밖 \(3\)개의 값은 각각 \(2\)가지 → \(10\times1\times2^3=80\)</li>
      <li><b>\(n(A)=3\)</b> : \(A\) 선택 \({}_5\mathrm C_3=10\), 완전순열 \(2\)가지(두 개의 3-순환),
          \(A\) 밖 \(2\)개의 값은 각각 \(3\)가지 → \(10\times2\times3^2=180\)</li>
    </ul>
  </div>
  <div class="sol-final">\(80+180=\mathbf{260}\)</div>
` },

/* ── 2023 수능 킬러 (GPT EBS 참조 → 자체 재작성) ── */

"2023_csat/common/q14": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(h(x)\)의 구조</div>
    <p>\(A(x)=\lim\limits_{t\to0+}g(x+t)\)는 \(g\)의 <b>우극한</b>이고, 뒤 인수는 \(A(x+2)\)이다. 즉 \(h(x)=A(x)\,A(x+2)\).</p>
    <div class="sol-box">
      \(A(x)=x\ (x&lt;-1)\), &nbsp;\(A(x)=f(x)\ (-1\le x&lt;1)\), &nbsp;\(A(1)=1\), &nbsp;\(A(x)=x\ (x&gt;1)\)
    </div>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄱ. \(h(1)=3\) &nbsp;<span class="sol-ok">참</span></div>
    <p>\(h(1)=A(1)\cdot A(3)=1\times3=3\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄴ. 실수 전체에서 연속 &nbsp;<span class="sol-no">거짓</span></div>
    <p>\(x=-3\) 근처를 보면</p>
    <ul>
      <li>\(x&lt;-3\) : \(h(x)=x(x+2)\to(-3)(-1)=3\)</li>
      <li>\(-3&lt;x&lt;-1\) : \(h(x)=x\,f(x+2)\to-3f(-1)\)</li>
    </ul>
    <p>\(f(-1)\ne-1\)이면 두 값이 달라 불연속. 반례가 있으므로 거짓.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> ㄷ. 최솟값 존재 &nbsp;<span class="sol-no">거짓</span></div>
    <p>\(g\)가 \([-1,1]\)에서 감소하고 \(g(-1)=f(-1)=-2\)이면 \([-1,1]\)에서 \(f(x)\le-2&lt;0\).</p>
    <p>\(-1&lt;x&lt;1\)에서 \(h(x)=f(x)(x+2)\)이고
       \(h'(x)=f'(x)(x+2)+f(x)&lt;0\) (\(f'\le0,\ x+2&gt;0,\ f&lt;0\)) → <b>감소</b>.</p>
    <p>그런데 \(x\to1^-\)에서 \(h\to 3f(1)\)이지만 \(h(1)=3\)으로 <b>점프</b>한다.
       즉 하한 \(3f(1)\)에 도달하지 못하므로 최솟값이 없다.</p>
  </div>
  <div class="sol-final">옳은 것은 ㄱ뿐 &nbsp;→&nbsp; 답 &nbsp;①</div>
` },

"2023_csat/common/q21": { answer: 33, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 각 조각의 모양</div>
    <ul>
      <li>\(x&lt;0\) : \(3^{x+2}\)는 \((0,\,9)\)에서 증가 → \(|3^{x+2}-n|\)은
          \(n&lt;9\)이면 <b>V자</b>(값 \(0\)까지 내려옴), \(n\ge9\)이면 단조감소</li>
      <li>\(x\ge0\) : \(\log_2(x+4)\)는 \([2,\,\infty)\)에서 증가 → \(|\log_2(x+4)-n|\)은
          \(n&gt;2\)이면 <b>V자</b>, \(n\le2\)이면 단조증가</li>
    </ul>
    <p>따라서 각 조각이 \(y=t\)와 만나는 점은 <b>최대 2개</b>이고, \(g(t)\)의 최댓값 \(4\)는
       <b>두 조각이 동시에 2개씩</b> 만날 때만 가능하다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건</div>
    <p>왼쪽이 V자 \(\Rightarrow n&lt;9\), 오른쪽이 V자 \(\Rightarrow n&gt;2\).</p>
    <p>이때 \(0&lt;t&lt;\min\{n,\ 9-n,\ n-2\}\)인 \(t\)에서 실제로 \(g(t)=4\)가 된다.</p>
    $$\therefore\ 2&lt;n&lt;9$$
  </div>
  <figure class="sol-fig"><img src="sol/2023_csat_common_q21.png" alt="n=3일 때 그래프">
    <figcaption>\(n=3\) 예시 — 왼쪽 조각 2개 + 오른쪽 조각 2개 \(=4\)개</figcaption></figure>
  <div class="sol-final">\(n=3,4,5,6,7,8\) &nbsp;→&nbsp; 합 \(=\mathbf{33}\)</div>
` },

"2023_csat/common/q22": { answer: 13, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가)를 이차식으로</div>
    <p>(다)에서 \(f(0)=-3\)이므로 \(f(x)=x^3+ax^2+bx-3\). \(x\ne1\)일 때 (가)에서</p>
    $$f'(g(x))=\frac{f(x)-f(1)}{x-1}=x^2+(a+1)x+(a+b+1)\quad ⋯㉠$$
    <p>양변이 연속이므로 ㉠은 모든 실수 \(x\)에서 성립한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대칭축으로 \(a\) 구하기</div>
    <p>㉠의 우변은 \(x=\alpha=-\dfrac{a+1}{2}\)에서 최소이고, 좌변 \(f'(g(x))\)는
       \(g(x)\)가 최소 \(\dfrac52\)일 때 최소가 된다(아래 3단계 참고). 두 최소 지점이 같으므로 \(g(\alpha)=\dfrac52\).</p>
    <p>㉠에 \(x=\alpha\)를 대입하면 \(f'\!\left(\dfrac52\right)=-\dfrac{(a+1)^2}{4}+a+b+1\)이고,
       \(f'(x)=3x^2+2ax+b\)이므로</p>
    $$\frac{75}{4}+5a+b=-\frac{(a+1)^2}{4}+a+b+1\ \Rightarrow\ a^2+18a+72=0\ \Rightarrow\ a=-6\ \text{또는}\ -12$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a=-12\) 배제</div>
    <p>\(f'(t)=3\left(t+\dfrac{a}{3}\right)^2+\text{(상수)}\)는 \(t=-\dfrac a3\)에서 최소이고, \(g\)의 값의 범위는 \(\left[\dfrac52,\infty\right)\).</p>
    <ul>
      <li>\(a=-6\) : \(-\dfrac a3=2\le\dfrac52\) → \(f'(g)\)는 \(g=\dfrac52\)에서 최소 ✓</li>
      <li>\(a=-12\) : \(-\dfrac a3=4&gt;\dfrac52\) → \(g=4\)인 <b>두 점</b>에서 최소가 되어 ㉠의 이차함수(최소점 1개)와 모순 ✗</li>
    </ul>
    <p>\(\therefore a=-6,\ \ f(x)=x^3-6x^2+bx-3,\ \ f'(x)=3x^2-12x+b\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 조건 (다)로 \(b\) 결정</div>
    <p>㉠에 \(x=1\)을 넣으면 \(f'(g(1))=1+(a+1)+(a+b+1)=b-9\). \(g(1)=k\)라 하면</p>
    $$3k^2-12k+b=b-9\ \Rightarrow\ k^2-4k+3=0\ \Rightarrow\ k=1\ \text{또는}\ 3$$
    <p>\(g\)의 최솟값이 \(\dfrac52\)이므로 \(k=1\)은 불가 → \(g(1)=3\).</p>
    <p>\(f(g(1))=f(3)=6\) : \(\ 27-54+3b-3=6\Rightarrow b=12\)</p>
  </div>
  <div class="sol-final">\(f(x)=x^3-6x^2+12x-3,\quad f(4)=64-96+48-3=\mathbf{13}\)</div>
` },

"2023_csat/calculus/q29": { answer: 26, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가)로 \(b,\ c\)</div>
    $$\frac{f(x)+6}{e^x}=ae^{x}+b+\frac{c+6}{e^{x}}$$
    <p>\(x\to-\infty\)에서 \(e^{-x}\to\infty\)이므로 수렴하려면 \(c+6=0\), 그러면 극한값은 \(b=1\).</p>
    <p>\(\therefore\ b=1,\ c=-6,\ \ f(x)=ae^{2x}+e^{x}-6\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)로 \(a\)</div>
    <p>\(f(\ln2)=4a+2-6=0\Rightarrow a=1\). \(\ \therefore f(x)=e^{2x}+e^{x}-6\)</p>
    <p>\(f(\ln2)=0,\ f(\ln4)=16+4-6=14\)이므로 \(g(0)=\ln2,\ g(14)=\ln4\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(x=f(t)\) 치환 후 부분적분</div>
    $$\int_0^{14}g(x)\,dx=\int_{\ln2}^{\ln4}t\,f'(t)\,dt
      =\Big[t\,f(t)\Big]_{\ln2}^{\ln4}-\int_{\ln2}^{\ln4}f(t)\,dt$$
    $$=14\ln4-\left[\tfrac12e^{2t}+e^{t}-6t\right]_{\ln2}^{\ln4}
      =28\ln2-\big(8-6\ln2\big)=34\ln2-8$$
  </div>
  <div class="sol-final">\(p=-8,\ q=34\) → \(p+q=\mathbf{26}\)</div>
` },

"2023_csat/calculus/q30": { answer: 31, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가) — \(f(0)\)은 정수, \(f'(0)=0\)</div>
    <p>\(f(x)=ax^3+bx^2+cx+d\ (a&gt;0)\). \(h(0)=e^{\sin\pi d}-1=0\Rightarrow\sin\pi d=0\Rightarrow d\)는 정수.</p>
    <p>\(h'(x)=g'(f(x))f'(x)\)이고 \(g'(d)=\pi\cos\pi d\ne0\)이므로 \(f'(0)=c=0\).</p>
    <p>\(f'(3)=0\)과 합치면 \(f'(x)=3ax(x-3)\) → \(x=0\)에서 극대 \(f(0)=d\), \(x=3\)에서 극소 \(f(3)=\dfrac12\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(d\)는 <b>짝수</b></div>
    <p>\(x=0\) 근처에서 \(f(x)=d-\varepsilon\ (\varepsilon\ge0)\)이므로</p>
    $$\sin(\pi f(x))=\sin(\pi d-\pi\varepsilon)=-\cos(\pi d)\sin(\pi\varepsilon)\approx-(-1)^d\pi\varepsilon$$
    <p>\(h\approx-(-1)^d\pi\varepsilon\)이 \(x=0\)에서 <b>극대</b>(즉 \(h\le0\))가 되려면 \((-1)^d=1\), 즉 \(d\)는 짝수.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건 (나)로 \(d=8\)</div>
    <p>\((0,3)\)에서 \(f\)는 \(d\)에서 \(\dfrac12\)까지 <b>감소하는 일대일대응</b>이므로,
       \(h(x)=1\)의 실근 개수 \(=\) \(\sin\pi t=\ln2\)를 만족하는 \(t\in\left(\dfrac12,\ d\right)\)의 개수이다.</p>
    <p>\(s=\dfrac{\arcsin(\ln2)}{\pi}\approx0.244\)라 하면 해는 \(t=2k+s,\ 2k+1-s\) 꼴이다.
       \(t&gt;\dfrac12\)인 해를 작은 것부터 나열하면</p>
    <div class="sol-box">\(0.76,\ 2.24,\ 2.76,\ 4.24,\ 4.76,\ 6.24,\ 6.76,\ 8.24,\ \cdots\)</div>
    <p>7개가 되려면 \(6.76&lt;d\le8.24\)이고 \(d\)는 짝수 → \(d=8\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 계수 결정</div>
    <p>\(f'(3)=0\)에서 \(9a+2b=0\), \(f(3)=\dfrac12\)에서 \(3b+d=\dfrac12\).</p>
    $$3b=\tfrac12-8=-\tfrac{15}{2}\Rightarrow b=-\tfrac52,\qquad a=\tfrac59$$
    $$f(x)=\tfrac59x^3-\tfrac52x^2+8$$
  </div>
  <div class="sol-final">\(f(2)=\dfrac{40}{9}-10+8=\dfrac{22}{9}\) → \(p+q=9+22=\mathbf{31}\)</div>
` },

"2023_csat/prob_stat/q29": { answer: 49, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합의 홀짝 판정</div>
    <p>처음 합은 \(1+2+\cdots+6=21\)로 <b>홀수</b>. 카드 \(k\)를 뒤집으면 합이 \(k\)만큼 변하므로,
       <b>홀수 눈</b>이 나올 때만 합의 홀짝이 바뀐다.</p>
    <p>3번 시행 후 합이 짝수 \(\iff\) 홀수 눈이 나온 횟수가 <b>홀수</b>(1번 또는 3번). 이 사건을 \(A\)라 하자.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm P(A)\)</div>
    <p>홀수 눈이 나올 확률은 \(\dfrac12\)이므로</p>
    $$\mathrm P(A)={}_3\mathrm C_3\left(\tfrac12\right)^3+{}_3\mathrm C_1\left(\tfrac12\right)^3=\tfrac18+\tfrac38=\tfrac12$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\mathrm P(A\cap B)\) &nbsp;(\(B\) : \(1\)의 눈이 정확히 한 번)</div>
    <ul>
      <li>홀수 3번 : \(1\)이 한 번, 나머지 둘은 \(3\) 또는 \(5\) →
          \({}_3\mathrm C_1\cdot\dfrac16\cdot\left(\dfrac26\right)^2=\dfrac1{18}\)</li>
      <li>홀수 1번 : 그 한 번이 \(1\)이고 나머지 둘은 짝수 →
          \({}_3\mathrm C_1\cdot\dfrac16\cdot\left(\dfrac12\right)^2=\dfrac18\)</li>
    </ul>
    $$\mathrm P(A\cap B)=\tfrac1{18}+\tfrac18=\tfrac{13}{72}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 조건부확률</div>
    $$\mathrm P(B\mid A)=\frac{13/72}{1/2}=\frac{13}{36}=\frac{q}{p}$$
  </div>
  <div class="sol-final">\(p+q=36+13=\mathbf{49}\)</div>
` },

"2023_csat/prob_stat/q30": { answer: 100, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 양 끝값 고정</div>
    <p>(나)에서 \(f(1)\le1\Rightarrow f(1)=1\), \(f(10)\ge10\Rightarrow f(10)=10\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(5)\)의 범위</div>
    <p>(다) \(f(6)=f(5)+6\)이고 \(f(6)\le10\)이므로 \(f(5)\le4\). 또 \(f(5)\ge f(1)=1\).</p>
    <p>\(\therefore\ f(5)\in\{1,2,3,4\}\), \(\ f(6)=f(5)+6\in\{7,8,9,10\}\) — 네 경우로 나눈다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 왼쪽 \((f(2),f(3),f(4))\) · 오른쪽 \((f(7),f(8),f(9))\) 세기</div>
    <p>왼쪽은 \(1\le f(2)\le f(3)\le f(4)\le f(5)\)이면서 \(f(k)\le k\),
       오른쪽은 \(f(6)\le f(7)\le f(8)\le f(9)\le10\)이면서 \(f(k)\ge k\).</p>
    <table class="sol-table">
      <tr><th>\(f(5)\)</th><th>왼쪽</th><th>\(f(6)\)</th><th>오른쪽</th><th>곱</th></tr>
      <tr><td>\(1\)</td><td>\(1\)</td><td>\(7\)</td><td>\(14\)</td><td>\(14\)</td></tr>
      <tr><td>\(2\)</td><td>\(4\)</td><td>\(8\)</td><td>\(9\)</td><td>\(36\)</td></tr>
      <tr><td>\(3\)</td><td>\(9\)</td><td>\(9\)</td><td>\(4\)</td><td>\(36\)</td></tr>
      <tr><td>\(4\)</td><td>\(14\)</td><td>\(10\)</td><td>\(1\)</td><td>\(14\)</td></tr>
    </table>
    <p>(예: \(f(5)=2\)이면 왼쪽은 \(\{1,2\}\)에서 증가하는 3개 뽑기 \({}_2\mathrm H_3=4\),
       \(f(5)=3\)이면 \(f(2)\le2\) 제약을 빼서 \({}_3\mathrm H_3-1=9\))</p>
  </div>
  <div class="sol-final">\(14+36+36+14=\mathbf{100}\)</div>
` },

/* ── 2024 6월 모평 킬러 (GPT 이투스 참조 → 자체 재작성) ── */

"2024_mock06/common/q13": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 원의 지름을 이용한 사인법칙</div>
    <p>\(\overline{AE}\)가 지름인 원에서 현 \(\overline{P_1P_2}\)에 대한 원주각이 \(\angle BAD=\theta\)이므로</p>
    $$\overline{P_1P_2}=\overline{AE}\sin\theta,\qquad \overline{Q_1Q_2}=\overline{EC}\sin(\angle BCD)$$
    <p>\(\overline{AE}:\overline{EC}=1:2\)이고 \(\cos(\angle BCD)=-\dfrac13\Rightarrow\sin(\angle BCD)=\dfrac{2\sqrt2}{3}\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\sin\theta\) 구하기</div>
    $$\frac{\overline{P_1P_2}}{\overline{Q_1Q_2}}=\frac{\overline{AE}\sin\theta}{\overline{EC}\sin(\angle BCD)}
      =\frac12\cdot\frac{\sin\theta}{\frac{2\sqrt2}{3}}=\frac{3}{5\sqrt2}$$
    $$\Rightarrow\ \sin\theta=\frac45,\qquad \angle DAB&gt;\frac{\pi}{2}\ \Rightarrow\ \cos\theta=-\frac35$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 넓이와 코사인법칙</div>
    <p>\(\overline{AB}=x,\ \overline{AD}=y\)라 하면 \(\triangle ABD=\dfrac12xy\sin\theta=2\Rightarrow xy=5\).</p>
    <p>\(\triangle BCD\)에서 \(\overline{BD}^2=3^2+2^2-2\cdot3\cdot2\cdot\left(-\tfrac13\right)=17\).</p>
    <p>\(\triangle ABD\)에서 \(x^2+y^2-2xy\cos\theta=17\Rightarrow x^2+y^2+6=17\Rightarrow x^2+y^2=11\).</p>
  </div>
  <div class="sol-final">\((x+y)^2=11+2\cdot5=21\) → \(\overline{AB}+\overline{AD}=\sqrt{21}\) &nbsp;→&nbsp; 답 &nbsp;①</div>
` },

"2024_mock06/common/q15": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a_2\)는 항상 \(-2\)</div>
    <p>\(a_1=k&gt;0\)이므로 \(a_2=a_1-2\cdot1-k=k-2-k=-2\). 이어서 \(a_3=a_2+2\cdot2-k=2-k\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(k=1\sim6\) 직접 계산</div>
    <table class="sol-table">
      <tr><th>\(k\)</th><th>\(a_3\)</th><th>\(a_4\)</th><th>\(a_5\)</th><th>\(a_6\)</th><th>곱</th></tr>
      <tr><td>1</td><td>1</td><td>\(-6\)</td><td>1</td><td>\(-10\)</td><td class="sol-no">\(+\)</td></tr>
      <tr><td>2</td><td>0</td><td>4</td><td>\(-6\)</td><td>2</td><td class="sol-no">0</td></tr>
      <tr><td>3</td><td>\(-1\)</td><td>2</td><td>\(-9\)</td><td>\(-2\)</td><td class="sol-ok">\(-\) ✓</td></tr>
      <tr><td>4</td><td>\(-2\)</td><td>0</td><td>4</td><td>\(-10\)</td><td class="sol-no">0</td></tr>
      <tr><td>5</td><td>\(-3\)</td><td>\(-2\)</td><td>1</td><td>\(-14\)</td><td class="sol-ok">\(-\) ✓</td></tr>
      <tr><td>6</td><td>\(-4\)</td><td>\(-4\)</td><td>\(-2\)</td><td>2</td><td class="sol-ok">\(-\) ✓</td></tr>
    </table>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(k\ge7\)은 모두 불가</div>
    <p>\(a_3=2-k,\ a_4=8-2k,\ a_5=16-3k,\ a_6=26-4k\)가 모두 음수(\(k\ge7\))이므로 곱이 양수.</p>
  </div>
  <div class="sol-final">\(k=3,\ 5,\ 6\) → 합 \(=14\) &nbsp;→&nbsp; 답 &nbsp;②</div>
` },

"2024_mock06/common/q20": { answer: 39, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(g\)의 성질</div>
    <p>\(g(0)=0,\ g'(x)=f(x)\)이고 \(g\)는 최고차항 계수 \(\dfrac13\)인 삼차함수.</p>
    <p>\(x\ge1\)에서 \(g(x)\ge g(4)\) → \(x=4\)에서 최소, 즉 <b>\(f(4)=g'(4)=0\)</b>.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(g(3)=0\)임을 보이기</div>
    <p>\(x\ge1\)에서 \(|g(x)|\)는 \(x=3\)에서 최소이다. 만약 \(g(3)\ne0\)이면 \(g\)는 \([1,\infty)\)에서 부호가 일정한데,</p>
    <ul>
      <li>\(g&gt;0\)이면 \(|g|\)의 최소 \(=\) \(g\)의 최소이므로 최소점이 \(3\)과 \(4\)로 달라 모순</li>
      <li>\(g&lt;0\)이면 \(x\to\infty\)에서 \(g\to\infty\)라 모순</li>
    </ul>
    <p>\(\therefore g(3)=0\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(g\) 결정</div>
    <p>\(g(0)=g(3)=0\)이므로 \(g(x)=\dfrac13x(x-3)(x-\alpha)\). \(g'(4)=0\)에서</p>
    $$48-8(3+\alpha)+3\alpha=0\ \Rightarrow\ \alpha=\frac{24}{5}$$
    $$f(x)=g'(x)=(x-4)\left(x-\frac65\right)$$
  </div>
  <figure class="sol-fig"><img src="sol/2024_mock06_common_q20.png" alt="g(x) 그래프">
    <figcaption>\(x\ge1\)에서 \(g\)의 최소는 \(x=4\), \(|g|\)의 최소는 \(g(3)=0\)</figcaption></figure>
  <div class="sol-final">\(f(9)=5\cdot\dfrac{39}{5}=\mathbf{39}\)</div>
` },

"2024_mock06/common/q21": { answer: 110, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 교점 방정식 정리</div>
    <p>\(t-\log_2x=2^{x-t}\ \iff\ \log_2x=-2^{x-t}+t\).
       왼쪽은 <b>증가</b>, 오른쪽은 <b>감소</b>하므로 교점은 항상 하나 → \(f(t)\)가 잘 정의된다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄱ &nbsp;<span class="sol-ok">참</span></div>
    <p>\(t=1,x=1\) : \(\log_21=0,\ -2^{0}+1=0\) ✓ → \(f(1)=1\)</p>
    <p>\(t=2,x=2\) : \(\log_22=1,\ -2^{0}+2=1\) ✓ → \(f(2)=2\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄴ &nbsp;<span class="sol-ok">참</span></div>
    <p>\(y=-2^{x-t}+t\)는 \(y=-2^{x}\)를 \(x\)축·\(y\)축 방향으로 각각 \(t\)만큼, 즉 <b>직선 \(y=x\) 방향</b>으로 평행이동한 것이다.</p>
    <p>\(t\)가 커지면 이 감소곡선이 위·오른쪽으로 이동하므로 증가곡선 \(y=\log_2x\)와의 교점도 오른쪽으로 이동 → \(f(t)\) 증가.</p>
  </div>
  <figure class="sol-fig"><img src="sol/2024_mock06_common_q21.png" alt="교점 그래프">
    <figcaption>\(t=1,\ 1.5,\ 2\)일 때의 교점 — \(t=1.5\)에서는 \(f(t)&lt;t\)</figcaption></figure>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> ㄷ &nbsp;<span class="sol-no">거짓</span></div>
    <p>\(t=\dfrac32,\ x=\dfrac32\)를 넣으면 \(\log_2\dfrac32\approx0.585\)이고 \(-2^{0}+\dfrac32=0.5\)이므로
       \(\log_2x&gt;-2^{x-t}+t\).</p>
    <p>왼쪽은 증가·오른쪽은 감소이므로 교점은 \(x=\dfrac32\)보다 <b>왼쪽</b>에 있다.
       즉 \(f\!\left(\tfrac32\right)&lt;\tfrac32\) (실제 \(\approx1.45\)). 반례 존재.</p>
  </div>
  <div class="sol-final">\(A=100,\ B=10,\ C=0\) → \(A+B+C=\mathbf{110}\)</div>
` },

"2024_mock06/common/q22": { answer: 380, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건을 \(f'\)의 부호변화로 바꾸기</div>
    <p>평균값정리에 의해 두 평균변화율은 각각 \(f'(c_1),\ f'(c_2)\)와 같다.
       곱이 음수 \(\iff\) 구간 안에서 \(f'\)의 <b>부호가 바뀐다</b>.</p>
    <p>\(f'(x)=3x^2-4ax=x\left(3x-4a\right)\)의 두 근은 \(0\)과 \(\dfrac{4a}{3}\) (모두 단순근).</p>
    <div class="sol-box">조건을 만족하는 \(k\) \(\iff\) 구간 \(\left(k,\ k+\dfrac32\right)\)이 \(0\) 또는 \(\dfrac{4a}{3}\)를 포함</div>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(0\)에서 오는 \(k\)</div>
    <p>\(k&lt;0&lt;k+\dfrac32\Rightarrow-\dfrac32&lt;k&lt;0\) → 정수 \(k=-1\) (항상 포함).</p>
    <p>모든 \(k\)의 곱이 \(-12\)이므로 나머지 \(k\)들의 곱은 \(12\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)의 부호로 나누기</div>
    <p>길이 \(\dfrac32\)인 구간이 \(r=\dfrac{4a}{3}\)를 포함하는 정수 \(k\)는 <b>1개 또는 2개</b>이고, 2개면 연속한 정수이다.</p>
    <ul>
      <li>\(a&gt;0\) : \(r&gt;0\). 곱이 \(12\)가 되려면 \(\{12\}\) 또는 \(\{3,4\}\).
          각각 \(\dfrac{25}{2}\le r&lt;13\), \(4&lt;r&lt;\dfrac92\)이어야 하는데 정수 \(a\)가 없다.</li>
      <li>\(a&lt;0\) : \(r&lt;0\)이라 음의 정수 두 개 \(\{-4,-3\}\) (곱 \(12\)).
          이때 \(-3&lt;r&lt;-\dfrac52\), 즉 \(-\dfrac94&lt;a&lt;-\dfrac{15}{8}\) → <b>\(a=-2\)</b></li>
    </ul>
    <p>검토: \(a=-2\)면 \(r=-\dfrac83\), 구간이 \(r\)을 포함하는 \(k=-4,-3\). 곱 \((-1)(-4)(-3)=-12\) ✓</p>
  </div>
  <div class="sol-final">\(f'(x)=3x^2+8x\) → \(f'(10)=300+80=\mathbf{380}\)</div>
` },

"2024_mock06/calculus/q28": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x=0,\ 2\) 대입</div>
    <p>\(\cos0=\cos2\pi=1,\ \sin0=\sin2\pi=0\)이므로 우변은 두 경우 모두 \(a+b\). 따라서</p>
    $$\{f(0)-f(2)\}\{f(0)+f(2)+2\}=0$$
    <p>(나)에서 \(f(0)\ne f(2)\)이므로 \(f(0)+f(2)+2=0\). (나)와 연립하면</p>
    $$f(0)=-\frac12,\qquad f(2)=-\frac32$$
    <p>\(\therefore a+b=\{f(0)\}^2+2f(0)=-\dfrac34\) &nbsp;⋯㉠</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 중간값정리 — \(f(c)=-1\)인 \(c\)가 있다</div>
    <p>\(f(0)+1=\dfrac12&gt;0\), \(f(2)+1=-\dfrac12&lt;0\)이고 \(f\)가 연속이므로
       \(f(c)+1=0\)인 \(c\in(0,2)\)가 존재한다.</p>
    <p>좌변 \(=\{f(x)+1\}^2-1\ge-1\)이므로 <b>우변의 최솟값은 \(-1\)</b>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 우변의 최솟값</div>
    <p>\(u=\cos\pi x\in[-1,1]\)로 놓으면 \(\sin^2\pi x=1-u^2\)이므로 우변 \(=a\,u^3e^{1-u^2}+b\).</p>
    <p>\(\varphi(u)=u^3e^{1-u^2}\)에 대해 \(\varphi'(u)=u^2e^{1-u^2}(3-2u^2)\ge0\)이라 \([-1,1]\)에서 증가.
       따라서 최솟값은 \(\varphi(-1)=-1\), 즉 우변의 최솟값은 \(-a+b\) (\(a&gt;0\)).</p>
    $$-a+b=-1\ \ ⋯㉡$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 연립</div>
    <p>㉠, ㉡에서 \(a=\dfrac18,\ b=-\dfrac78\)</p>
  </div>
  <div class="sol-final">\(a\times b=\dfrac18\cdot\left(-\dfrac78\right)=-\dfrac{7}{64}\) &nbsp;→&nbsp; 답 &nbsp;②</div>
` },

"2024_mock06/calculus/q29": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 음함수 미분</div>
    $$2x-2y-2x\frac{dy}{dx}+4y\frac{dy}{dx}=0\ \Rightarrow\ \frac{dy}{dx}=\frac{x-y}{x-2y}$$
    <p>\(A(a,a+k)\)에서 \(x-y=-k,\ x-2y=-a-2k\)이므로 기울기는 \(\dfrac{k}{a+2k}\), 같은 방법으로 \(B\)에서는 \(\dfrac{k}{b+2k}\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 수직 조건</div>
    $$\frac{k}{a+2k}\cdot\frac{k}{b+2k}=-1\ \Rightarrow\ 5k^2+2k(a+b)+ab=0\ \ ⋯㉠$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 점이 곡선 위에 있음</div>
    <p>\(a^2-2a(a+k)+2(a+k)^2=15\)를 정리하면 \(a^2+2ak+2k^2=15\) ⋯㉡, 같은 식이 \(b\)에 대해서도 성립 ⋯㉢.</p>
    <p>㉡\(-\)㉢ : \((a-b)(a+b+2k)=0\), \(a\ne b\)이므로 \(\ a+b=-2k\).</p>
    <p>㉠에 대입하면 \(5k^2-4k^2+ab=0\Rightarrow ab=-k^2\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답</div>
    <p>\(a^2+b^2=(a+b)^2-2ab=4k^2+2k^2=6k^2\). ㉡\(+\)㉢ :</p>
    $$a^2+b^2+2k(a+b)+4k^2=30\ \Rightarrow\ 6k^2-4k^2+4k^2=30\ \Rightarrow\ 6k^2=30$$
  </div>
  <div class="sol-final">\(k^2=\mathbf{5}\)</div>
` },

"2024_mock06/calculus/q30": { answer: 24, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 공비의 부호</div>
    <p>급수가 수렴하므로 \(|r|&lt;1\)이고 \(a_n\to0\). \(b_3=-1\Rightarrow a_3=a_1r^2\le-1\Rightarrow a_1&lt;0\)이라
       <b>홀수 번째 항은 모두 음수</b>.</p>
    <p>만약 \(r&gt;0\)이면 짝수 번째 항도 음수라 \(\sum b_{2n}=8&gt;0\)에 모순. \(\therefore -1&lt;r&lt;0\)이고
       짝수 번째 항은 모두 양수 → \(b_{2n}=a_{2n}\).</p>
    $$\sum_{n=1}^{\infty}a_{2n}=\frac{a_2}{1-r^2}=8$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_{2n-1}\le-1\)인 항의 개수 \(k\)</div>
    <p>\(\sum a_{2n-1}=\dfrac1r\sum a_{2n}=\dfrac8r\)이므로</p>
    $$-3=\sum b_{2n-1}=-k+\left(\frac8r-\sum_{n=1}^{k}a_{2n-1}\right)
      \ \Rightarrow\ 8-\sum_{n=1}^{k}a_{2n}=(k-3)r\ \ ⋯㉠$$
    <p>\(\sum_{n=1}^{k}a_{2n}&lt;8\)이라 좌변\(&gt;0\), 그런데 \(r&lt;0\)이므로 \(k&lt;3\). \(b_3=-1\)에서 \(k\ge2\) → <b>\(k=2\)</b>.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(r,\ a_1\) 구하기</div>
    <p>\(a_2=8(1-r^2),\ a_4=8r^2(1-r^2)\)를 ㉠(\(k=2\), 우변 \(-r\))에 대입하면</p>
    $$8-8(1-r^2)-8r^2(1-r^2)=-r\ \Rightarrow\ 8r^4+r=0\ \Rightarrow\ r^3=-\frac18\ \Rightarrow\ r=-\frac12$$
    <p>\(a_2=8\left(1-\tfrac14\right)=6=a_1r\Rightarrow a_1=-12\)</p>
    <p>검토: \(a_1=-12,\ a_3=-3\ (\le-1)\), \(a_5=-\tfrac34\ (&gt;-1)\) → \(k=2\) ✓</p>
  </div>
  <div class="sol-final">\(\{|a_n|\}\)은 첫째항 \(12\), 공비 \(\dfrac12\) → \(\displaystyle\sum|a_n|=\dfrac{12}{1-\tfrac12}=\mathbf{24}\)</div>
` },

"2024_mock06/prob_stat/q29": { answer: 25, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 변수로 바꾸기</div>
    <p>(가)에서 흰 카드의 순서는 고정되므로, 배열은 <b>검은 카드 두 장의 위치</b>만으로 정해진다.
       왼쪽·사이·오른쪽의 흰 카드 수를 \(a,b,c\)라 하면 \(a+b+c=8\).</p>
    <p>(나) \(b\ge2\) → \(b=b'+2\)로 놓으면 \(a+b'+c=6\).</p>
    $$\text{전체}={}_3\mathrm H_6={}_8\mathrm C_2=28$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (다) 위반 제외</div>
    <p>사이에 놓이는 카드는 \(a+1,\ a+2,\ \dots,\ a+b\)로 <b>연속한 수</b>이다.
       \(3\)의 배수(\(3\) 또는 \(6\))를 하나도 포함하지 않으면서 2장 이상인 연속 구간은</p>
    <div class="sol-box">\(\{1,2\}\ (a=0,c=6)\), &nbsp;\(\{4,5\}\ (a=3,c=3)\), &nbsp;\(\{7,8\}\ (a=6,c=0)\) — 3가지</div>
  </div>
  <div class="sol-final">\(28-3=\mathbf{25}\)</div>
` },

"2024_mock06/prob_stat/q30": { answer: 51, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우</div>
    <p>\({}_8\mathrm C_2=28\). 점수가 <b>24 이하의 짝수</b>인 경우를 색깔로 나눈다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 서로 다른 색 — 점수 12</div>
    <p>\(12\)는 24 이하의 짝수이므로 모두 성공. \({}_4\mathrm C_1\times{}_4\mathrm C_1=16\)가지</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 흰 공 2개 (1,2,3,4) — 곱</div>
    <p>\({}_4\mathrm C_2=6\)가지 중 곱이 홀수인 것은 \(1\times3=3\) 하나뿐이고, 나머지는 모두 짝수이며 최대 \(3\times4=12\le24\).</p>
    <p>→ \(6-1=5\)가지</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 검은 공 2개 (4,5,6,7) — 곱</div>
    <table class="sol-table">
      <tr><th>곱</th><th>20</th><th>24</th><th>28</th><th>30</th><th>35</th><th>42</th></tr>
      <tr><td>판정</td><td class="sol-ok">✓</td><td class="sol-ok">✓</td><td class="sol-no">✗</td><td class="sol-no">✗</td><td class="sol-no">✗</td><td class="sol-no">✗</td></tr>
    </table>
    <p>→ \(4\times5,\ 4\times6\)의 \(2\)가지</p>
  </div>
  <div class="sol-final">\(\dfrac{16+5+2}{28}=\dfrac{23}{28}\) → \(p+q=28+23=\mathbf{51}\)</div>
` },

/* ── 2024 9월 모평 킬러 (GPT 이투스 참조 → 자체 재작성) ── */

"2024_mock09/common/q13": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f'(x)\)와 \(b=2a-1\)</div>
    $$f'(x)=\begin{cases}-x^2-2ax-b&(x&lt;0)\\ x^2+2ax-b&(x&gt;0)\end{cases}$$
    <p>\(x=0\)에서 좌·우 미분계수가 모두 \(-b\)로 같다. \(x=-1\)을 경계로 감소→증가이므로 \(f'(-1)=0\):</p>
    $$-1+2a-b=0\ \Rightarrow\ b=2a-1$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x&lt;0\) 조각 (위로 볼록)</div>
    <p>\(b=2a-1\)을 넣으면 \(f'(x)=-(x+1)(x-1+2a)\)로 두 근은 \(-1\)과 \(1-2a\).</p>
    <p>\((-1,0)\)에서 \(f'\ge0\)이려면 \(1-2a\ge0\), 즉 \(a\le\dfrac12\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(x&gt;0\) 조각 (아래로 볼록, 꼭짓점 \(x=-a\))</div>
    <ul>
      <li>\(a\ge0\) : 꼭짓점이 \(x\le0\)이라 \(x&gt;0\)에서 증가. \(f'(0^+)=1-2a\ge0\Rightarrow a\le\dfrac12\)</li>
      <li>\(a&lt;0\) : 꼭짓점이 \(x&gt;0\) 안에 있으므로 최솟값 \(-a^2-b=-a^2-2a+1\ge0\)
          \(\Rightarrow a^2+2a-1\le0\Rightarrow -1-\sqrt2\le a\)</li>
    </ul>
    $$\therefore\ -1-\sqrt2\le a\le\frac12$$
  </div>
  <figure class="sol-fig"><img src="sol/2024_mock09_common_q13.png" alt="f'(x) 두 경계 경우">
    <figcaption>양 끝 경우의 \(y=f'(x)\) — 어느 쪽도 \(x=-1\)에서만 부호가 바뀐다</figcaption></figure>
  <div class="sol-final">\(a+b=3a-1\) → \(M=\dfrac12,\ m=-4-3\sqrt2\) → \(M-m=\dfrac92+3\sqrt2\) &nbsp;→&nbsp; 답 &nbsp;③</div>
` },

"2024_mock09/common/q21": { answer: 19, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sum S_k=644\) 정리</div>
    <p>첫째항 \(a\), 공차 \(d\)라 하면 \(S_n=\dfrac d2n^2+\left(a-\dfrac d2\right)n\). \(\sum_{k=1}^{7}k^2=140,\ \sum_{k=1}^{7}k=28\)이므로</p>
    $$\frac d2(140)+\left(a-\frac d2\right)(28)=28a+56d=644\ \Rightarrow\ a+2d=23$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_7\)을 \(d\)로 표현</div>
    <p>모든 항이 자연수이므로 \(d\)는 \(0\) 이상의 정수이고 \(a=23-2d\ge1\Rightarrow d\le11\).</p>
    $$a_7=a+6d=(23-2d)+6d=23+4d$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(13\)의 배수 찾기</div>
    <p>\(d=0,1,\dots,11\)일 때 \(a_7=23,27,31,35,\mathbf{39},43,47,51,55,59,63,67\).</p>
    <p>\(13\)의 배수는 \(39=13\times3\) 하나뿐 → \(d=4,\ a=15\).</p>
  </div>
  <div class="sol-final">\(a_2=a+d=15+4=\mathbf{19}\)</div>
` },

"2024_mock09/common/q22": { answer: 10, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가)로 \(f(x)\) 구하기</div>
    <p>\(x=1\) 대입 : \(0=f(1)-2-1\Rightarrow f(1)=3\).</p>
    <p>양변을 미분 : \(f(x)=f(x)+xf'(x)-4x\Rightarrow f'(x)=4\). \(f(1)=3\)이므로</p>
    $$f(x)=4x-1,\qquad F(x)=2x^2-x+D$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)는 곱의 미분</div>
    <p>\(f(x)G(x)+F(x)g(x)=\{F(x)G(x)\}'=8x^3+3x^2+1\)이므로</p>
    $$F(x)G(x)=2x^4+x^3+x+C$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 계수 비교</div>
    <p>\((2x^2-x+D)G(x)=2x^4+x^3+x+C\)에서 \(G\)는 이차함수. \(G(x)=px^2+qx+r\)로 놓으면</p>
    <ul>
      <li>\(x^4\) : \(2p=2\Rightarrow p=1\)</li>
      <li>\(x^3\) : \(2q-p=1\Rightarrow q=1\)</li>
    </ul>
    <p>\(\therefore G(x)=x^2+x+r\) (상수항 \(r\)는 정적분에서 소거된다)</p>
  </div>
  <div class="sol-final">\(\displaystyle\int_1^3 g\,dx=G(3)-G(1)=(12+r)-(2+r)=\mathbf{10}\)</div>
` },

"2024_mock09/calculus/q28": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미분가능 조건</div>
    <p>\(F(x)=\displaystyle\int_{-a\pi}^{x}f(t)\,dt\)라 하면 \(F'=f\), \(g=|F|\).</p>
    <div class="sol-box">\(g=|F|\)가 미분가능 \(\iff\) <b>\(F(x)=0\)인 모든 점에서 \(f(x)=0\)</b></div>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x&lt;0\) 구간</div>
    <p>\(f=2|\sin4x|\ge0\)이라 \(F\)는 증가하므로 \(F(x)=0\)인 곳은 \(x=-a\pi\)뿐.
       여기서 \(f(-a\pi)=2|\sin4a\pi|=0\Rightarrow a=\dfrac n4\) (\(n\)은 자연수).</p>
    <p>\(\displaystyle\int_{-\frac{\pi}{4}}^{0}2|\sin4t|\,dt=1\)이고 주기가 \(\dfrac{\pi}{4}\)이므로 \(\ F(0)=n\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(x\ge0\) 구간 — \(F\)가 \(0\)이 되면 안 된다</div>
    $$F(x)=n+\int_0^x(-\sin ax)\,dt=n+\frac4n\left(\cos\frac n4x-1\right)$$
    <p>\(F(x)=0\)이면 \(\cos ax=1-\dfrac{n^2}{4}\)인데, 동시에 \(f(x)=0\)(즉 \(\cos ax=\pm1\))이려면
       \(n=0\) 또는 \(n^2=8\)이라 자연수 \(n\)에서 불가능하다.</p>
    <p>따라서 \(x\ge0\)에서 \(F&gt;0\)이어야 하고, \(\cos\)의 최솟값 \(-1\)을 넣으면</p>
    $$n-\frac8n&gt;0\ \Rightarrow\ n^2&gt;8\ \Rightarrow\ n\ge3$$
  </div>
  <div class="sol-final">\(0&lt;a&lt;2\)에서 최소는 \(n=3\) → \(a=\dfrac34\) &nbsp;→&nbsp; 답 &nbsp;②</div>
` },

"2024_mock09/calculus/q30": { answer: 32, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 대칭성으로 넓이 세우기</div>
    <p>\(\overline{PQ}\perp\overline{AB}\)이고 \(\overline{AB}\)는 지름이므로 \(P,\ Q\)는 \(\overline{AB}\)에 대칭.
       따라서 \(\overline{CP}=\overline{CQ}=a\), \(\angle PCQ=2\theta\)이고</p>
    $$S(\theta)=\frac12a^2\sin2\theta$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a\)와 \(\theta\)의 관계 (코사인법칙)</div>
    <p>중심 \(O\)에 대해 \(\overline{OP}=5,\ \overline{OC}=5-4=1\), \(\angle PCO=\theta\)이므로</p>
    $$25=a^2+1-2a\cos\theta\ \Longrightarrow\ a^2-2a\cos\theta-24=0$$
    <p>\(\theta=\dfrac{\pi}{4}\) : \(a^2-\sqrt2\,a-24=0\Rightarrow a=4\sqrt2\ (a&gt;0)\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 음함수 미분으로 \(\dfrac{da}{d\theta}\)</div>
    $$2a\frac{da}{d\theta}-2\cos\theta\frac{da}{d\theta}+2a\sin\theta=0
      \ \Rightarrow\ \frac{da}{d\theta}=\frac{a\sin\theta}{\cos\theta-a}$$
    $$\theta=\frac{\pi}{4}:\quad \frac{da}{d\theta}=\frac{4\sqrt2\cdot\frac{\sqrt2}{2}}{\frac{\sqrt2}{2}-4\sqrt2}
      =\frac{4}{-\frac{7\sqrt2}{2}}=-\frac{8}{7\sqrt2}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(S'\!\left(\dfrac{\pi}{4}\right)\)</div>
    <p>\(S'(\theta)=a\dfrac{da}{d\theta}\sin2\theta+a^2\cos2\theta\)이고 \(\theta=\dfrac{\pi}{4}\)에서 \(\sin2\theta=1,\ \cos2\theta=0\)이므로</p>
    $$S'\!\left(\frac{\pi}{4}\right)=4\sqrt2\cdot\left(-\frac{8}{7\sqrt2}\right)=-\frac{32}{7}$$
  </div>
  <div class="sol-final">\(-7\times\left(-\dfrac{32}{7}\right)=\mathbf{32}\)</div>
` },

"2024_mock09/prob_stat/q29": { answer: 62, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 한 번의 시행에서 뒤집을 확률</div>
    <p>동전 두 번 중 앞면이 2회 나올 확률 \(=\dfrac14\), 그대로 둘 확률 \(=\dfrac34\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(B\)가 보이려면 <b>홀수 번</b> 뒤집혀야</div>
    $$p={}_5\mathrm C_1\left(\tfrac14\right)\left(\tfrac34\right)^4+{}_5\mathrm C_3\left(\tfrac14\right)^3\left(\tfrac34\right)^2+{}_5\mathrm C_5\left(\tfrac14\right)^5$$
    $$=\frac{405+90+1}{4^5}=\frac{496}{1024}=\frac{31}{64}$$
    <p>(간단한 확인 : \(p=\dfrac{1-\left(\frac34-\frac14\right)^5}{2}=\dfrac{1-\frac1{32}}{2}=\dfrac{31}{64}\))</p>
  </div>
  <div class="sol-final">\(128p=128\times\dfrac{31}{64}=\mathbf{62}\)</div>
` },

"2024_mock09/prob_stat/q30": { answer: 336, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (나) 해석</div>
    <p>\(a\times d\)가 홀수 \(\Rightarrow\) \(a,\ d\) 모두 홀수. \(b+c\)가 짝수 \(\Rightarrow\) \(b,\ c\)의 홀짝이 같다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> (ⅰ) \(b,\ c\)도 홀수</div>
    <p>네 수 모두 홀수 \(\{1,3,\dots,13\}\)(7개)에서 중복을 허락해 뽑아 크지 않은 순으로 배정:</p>
    $$_{7}\mathrm H_4={}_{10}\mathrm C_4=210$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> (ⅱ) \(b,\ c\)는 짝수</div>
    <p>\(a\)는 홀수·\(b\)는 짝수라 \(a\ne b\), 마찬가지로 \(c\ne d\). 따라서 \(a&lt;b\le c&lt;d\).</p>
    <p>\(a+1,\ b,\ c,\ d-1\)은 모두 <b>짝수</b>이고 \(a+1\le b\le c\le d-1\)로 크지 않은 순.
       범위는 \(\{2,4,\dots,12\}\)(6개)이며, 거꾸로 이런 네 짝수를 뽑으면 원래 조건이 복원된다.</p>
    $$_{6}\mathrm H_4={}_{9}\mathrm C_4=126$$
  </div>
  <div class="sol-final">\(210+126=\mathbf{336}\)</div>
` },

/* ── 2024 수능 킬러 (GPT EBS 참조 → 자체 재작성) ── */

"2024_csat/common/q14": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그래프 파악</div>
    <p>\(x\le2\) : \(f'(x)=6(x-1)(x+1)\)이라 극대 \(f(-1)=5\), 극소 \(f(1)=-3\), 끝값 \(f(2)=5\).</p>
    <p>\(x&gt;2\) : \(x\to2^+\)에서 \(f\to9\)(열림)인 아래로 볼록한 포물선. \(b\ge3\)이면 꼭짓점 \(x=1+\dfrac b2\)에서 최솟값 \(m\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 합이 \(9\)가 되는 \(k\)</div>
    <p>\(g(k)=\lim\limits_{t\to k-}g=\lim\limits_{t\to k+}g=3\)인 \(k\)에서는 합이 \(9\)가 된다. 그런 \(k\)가 <b>구간</b>을 이루면 개수가 1이 아니다.</p>
    <ul>
      <li>\(b\le2\) (오른쪽이 증가) 또는 \(m&gt;-3\) : \(-3&lt;k&lt;\min(m,5)\) 전체에서 \(g=3\) → 무수히 많음 ✗</li>
      <li>\(m&lt;-3\) : \(m&lt;k&lt;-3\) 전체에서 \(g=3\) → 무수히 많음 ✗</li>
      <li><b>\(m=-3\)</b> : \(g(-3)=3,\ \lim_{t\to-3^-}g=1,\ \lim_{t\to-3^+}g=5\) → 합 \(=9\) ✓ 이때 \(k=-3\) 하나뿐</li>
    </ul>
  </div>
  <figure class="sol-fig"><img src="sol/2024_csat_common_q14.png" alt="f(x) 그래프">
    <figcaption>\((a,b)=(3,6)\) 예시 — 오른쪽 포물선의 최솟값이 왼쪽 극솟값 \(-3\)과 같아야 한다</figcaption></figure>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a(b-2)^2=48\)</div>
    $$f\!\left(1+\frac b2\right)=-\frac{a(b-2)^2}{4}+9=-3\ \Rightarrow\ a(b-2)^2=48$$
    <p>\((b-2)^2\)이 \(48\)의 약수인 제곱수 : \(1,\ 4,\ 16\) → \((a,b)=(48,3),\ (12,4),\ (3,6)\)</p>
  </div>
  <div class="sol-final">\(a+b\)의 최댓값 \(=48+3=51\) &nbsp;→&nbsp; 답 &nbsp;①</div>
` },

"2024_csat/common/q20": { answer: 25, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 점 \(A\) 구하기</div>
    <p>\(f'(0)=2\)이므로 \(O\)에서의 접선은 \(y=2x\). 교점은</p>
    $$-x^3+ax^2+2x=2x\ \Rightarrow\ x^2(a-x)=0\ \Rightarrow\ A(a,\ 2a)$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 수직 조건으로 \(a\)</div>
    <p>\(A\)가 \(\overline{OB}\)를 지름으로 하는 원 위에 있으므로 \(\angle OAB=\dfrac{\pi}{2}\) (반원의 원주각).</p>
    <p>\(\overline{OA}\)의 기울기 \(=2\), \(\overline{AB}\)(접선)의 기울기 \(=f'(a)=-a^2+2\)이므로</p>
    $$2(-a^2+2)=-1\ \Rightarrow\ a^2=\frac52\ \Rightarrow\ a=\frac{\sqrt{10}}{2}\quad(a&gt;\sqrt2)$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 점 \(B\)와 답</div>
    <p>\(A\left(\dfrac{\sqrt{10}}{2},\sqrt{10}\right)\), 접선 기울기 \(-\dfrac12\)이므로 \(y=0\)에서 \(B\left(\dfrac{5\sqrt{10}}{2},0\right)\).</p>
    <p>\(\angle A=90^\circ\)이므로 \(\ \dfrac12\overline{OA}\cdot\overline{AB}=\triangle OAB=\dfrac12\cdot\overline{OB}\cdot(\text{A의 }y\text{좌표})\), 즉</p>
    $$\overline{OA}\times\overline{AB}=\overline{OB}\times\sqrt{10}=\frac{5\sqrt{10}}{2}\cdot\sqrt{10}=\mathbf{25}$$
  </div>
  <div class="sol-final">\(\overline{OA}\times\overline{AB}=\mathbf{25}\)</div>
` },

"2024_csat/common/q22": { answer: 483, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 정리</div>
    <p>모든 정수 \(k\)에 대해 \(f(k-1)f(k+1)\ge0\). 즉 <b>두 칸 떨어진 정수에서 부호가 반대가 되면 안 된다.</b></p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 실근이 1개이거나 중근이 있는 경우 배제</div>
    <ul>
      <li>실근 1개 : \(a\)보다 작은 최대 정수를 \(m\)이라 하면 \(f(m)&lt;0&lt;f(m+2)\) → 위배</li>
      <li>중근 포함 : 같은 방법으로 근이 \(0,\ 1\)로 정해져 \(f(x)=x(x-1)^2\) 또는 \(x^2(x-1)\)인데,
          둘 다 \(f'\left(-\tfrac14\right)&gt;0\)이라 \(f'\left(-\tfrac14\right)=-\tfrac14\)에 모순</li>
    </ul>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 서로 다른 세 실근</div>
    <p>\(f(x)=(x-a)(x-b)(x-c)\ (a&lt;b&lt;c)\). 부호가 바뀌는 구간 사이에 정수가 끼면 위배되므로
       \(b=0,\ c=1\)로 정해지고 \(a&lt;0\).</p>
    $$f(x)=(x-a)x(x-1),\qquad f'\!\left(-\tfrac14\right)=\tfrac{11}{16}+\tfrac32a=-\tfrac14\ \Rightarrow\ a=-\tfrac58$$
    <p>검토 : \(f'\left(\tfrac14\right)=-\tfrac58&lt;0\) ✓, 정수에서 \(f(-1)&lt;0,\ f(0)=f(1)=0,\ f(2)&gt;0\)이라 조건 만족 ✓</p>
  </div>
  <div class="sol-final">\(f(8)=\left(8+\dfrac58\right)\cdot8\cdot7=\dfrac{69}{8}\times56=\mathbf{483}\)</div>
` },

"2024_csat/calculus/q28": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x&lt;0\)에서의 모양</div>
    <p>\(f(x)=-4xe^{4x^2}\)의 도함수는 \(-4e^{4x^2}(1+8x^2)&lt;0\)이라 <b>감소</b>하며,
       \(x\to-\infty\)에서 \(\infty\), \(x\to0^-\)에서 \(0\). 따라서 \(f(0)=0\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(2g+h=k\)로 \(x&gt;0\) 부분 결정</div>
    <p>\(g(t)=u\ (&lt;0)\)라 하면 \(h(t)=k-2u\)이고 \(f(k-2u)=f(u)\). \(x=k-2u\)로 바꾸면 \(u=\dfrac{k-x}{2}\)이므로</p>
    $$f(x)=2(x-k)e^{(x-k)^2}\quad(x&gt;k)$$
    <p>또 \(0\le x\le k\)에서 \(f(x)&gt;0\)이면 실근이 3개가 되므로 \(f(x)=0\)이어야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 적분으로 \(k\) 구하기</div>
    $$\int_0^7 f\,dx=\int_k^7 2(x-k)e^{(x-k)^2}dx=\Big[e^{(x-k)^2}\Big]_k^7=e^{(7-k)^2}-1=e^4-1$$
    $$\Rightarrow (7-k)^2=4\ \Rightarrow\ k=5$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답</div>
    <p>\(h=8\Rightarrow g=\dfrac{5-8}{2}=-\dfrac32\), \(h=9\Rightarrow g=-2\)이므로</p>
    $$\frac{f(9)}{f(8)}=\frac{f(-2)}{f\left(-\frac32\right)}=\frac{8e^{16}}{6e^{9}}=\frac43e^{7}$$
  </div>
  <div class="sol-final">답 &nbsp;② &nbsp;\(\dfrac43e^{7}\)</div>
` },

"2024_csat/calculus/q29": { answer: 162, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫 번째 조건 → \(r+s=2rs\)</div>
    <p>\(a_n=ar^{n-1},\ b_n=bs^{n-1}\), 수렴하므로 \(|r|&lt;1,\ |s|&lt;1\).</p>
    $$\frac{ab}{1-rs}=\frac{a}{1-r}\cdot\frac{b}{1-s}\ \Rightarrow\ 1-rs=(1-r)(1-s)\ \Rightarrow\ r+s=2rs$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 번째 조건 → \(r=-\dfrac12\)</div>
    <p>\(r&gt;0\)이면 \(4r^3-7r+3=0\)에서 \(r=\dfrac12\)인데, \(r+s=2rs\)를 만족하는 \(s\)가 없다(모순).</p>
    <p>\(r&lt;0\)이면 \(\{|a_{3n}|\}\)의 공비가 \(-r^3\)이므로</p>
    $$\frac{-3a_2}{1-r^2}=\frac{7a_3}{1+r^3}\ \Rightarrow\ 4r^3-7r-3=0\ \Rightarrow\ (r+1)(2r-3)(2r+1)=0$$
    <p>\(-1&lt;r&lt;0\)이므로 \(r=-\dfrac12\), 그러면 \(s=\dfrac14\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 급수 계산</div>
    <p>\(b_n=b\left(\tfrac14\right)^{n-1}\)이므로</p>
    $$\frac{b_{2n-1}+b_{3n+1}}{b_n}=\left(\frac14\right)^{n-1}+\left(\frac14\right)^{2n+1}$$
    $$S=\frac{1}{1-\frac14}+\frac{\frac1{64}}{1-\frac1{16}}=\frac43+\frac1{60}=\frac{27}{20}$$
  </div>
  <div class="sol-final">\(120S=120\times\dfrac{27}{20}=\mathbf{162}\)</div>
` },

"2024_csat/calculus/q30": { answer: 125, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극값 조건을 \(f'\)의 극값으로 바꾸기 &nbsp;<b>(핵심)</b></div>
    <p>\(g\)는 \(x=a\)에서의 접선이므로 \(h'(x)=f(x)-g(x)=\displaystyle\int_a^x\{f'(t)-f'(a)\}\,dt\).</p>
    <ul>
      <li>\(f'-f'(a)\)가 \(a\) 좌우에서 <b>같은 부호</b>이면 적분값의 부호가 반대가 되어 \(h'\)의 부호가 바뀐다 → 극값 ✓</li>
      <li>\(f'-f'(a)\)의 부호가 바뀌면 \(h'\)는 양쪽에서 같은 부호 → 극값 아님 ✗</li>
    </ul>
    <div class="sol-box">즉 \(h\)가 \(x=a\)에서 극값 \(\iff\) <b>\(f'\)이 \(x=a\)에서 극값</b></div>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f'(x)=|\sin x|\cos x\)의 극값점</div>
    <p>\(\sin x\ge0\)이면 \(f'=\tfrac12\sin2x\), \(\sin x&lt;0\)이면 \(f'=-\tfrac12\sin2x\).</p>
    <p>\(x=k\pi\)에서는 양쪽 모두 \(f'\)의 부호가 같고 \(f'(k\pi)=0\)이므로 그 자체가 극값점이다.</p>
  </div>
  <figure class="sol-fig"><img src="sol/2024_csat_calculus_q30.png" alt="f'(x) 그래프">
    <figcaption>\(y=f'(x)\)의 극값점 : \(\frac{\pi}{4},\ \frac{3\pi}{4},\ \pi,\ \frac{5\pi}{4},\ \frac{7\pi}{4},\ 2\pi,\ \cdots\)</figcaption></figure>
  <div class="sol-final">\(a_6=2\pi,\ a_2=\dfrac{3\pi}{4}\) → \(\dfrac{100}{\pi}\left(2\pi-\dfrac{3\pi}{4}\right)=\mathbf{125}\)</div>
` },

"2024_csat/prob_stat/q29": { answer: 196, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(c\)를 기준으로 세기</div>
    <p>조건은 \(a\le c,\ b\le c,\ c\le d\)이다. \(c\)를 고정하면</p>
    <ul>
      <li>\(a\) : \(1\sim c\) → \(c\)가지, &nbsp;\(b\) : \(1\sim c\) → \(c\)가지</li>
      <li>\(d\) : \(c\sim6\) → \((7-c)\)가지</li>
    </ul>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 합 계산</div>
    <table class="sol-table">
      <tr><th>\(c\)</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr>
      <tr><th>\(c^2(7-c)\)</th><td>6</td><td>20</td><td>36</td><td>48</td><td>50</td><td>36</td></tr>
    </table>
    $$\sum_{c=1}^{6}c^2(7-c)=6+20+36+48+50+36=196$$
    <p>(다른 풀이 : \(\{a\le b\le c\le d\}\)와 \(\{b\le a\le c\le d\}\)의 합집합 →
       \({}_6\mathrm H_4+{}_6\mathrm H_4-{}_6\mathrm H_3=126+126-56=196\))</p>
  </div>
  <div class="sol-final">순서쌍의 개수 \(=\mathbf{196}\)</div>
` },

"2024_csat/prob_stat/q30": { answer: 673, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(t\)의 범위</div>
    <p>\(X\sim\mathrm N(1,t^2)\)에서 \(\mathrm P(X\le5t)\ge\dfrac12\)이려면 \(5t\ge1\), 즉 \(t\ge\dfrac15\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 표준화</div>
    $$\mathrm P(t^2-t+1\le X\le t^2+t+1)
      =\mathrm P\!\left(\frac{t^2-t}{t}\le Z\le\frac{t^2+t}{t}\right)=\mathrm P(t-1\le Z\le t+1)$$
    <p>구간의 길이가 \(2\)로 <b>일정</b>하고 중점이 \(t\)이므로, \(t\)가 \(0\)에 가까울수록 확률이 커진다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 최댓값</div>
    <p>\(t\ge\dfrac15\)이므로 \(t=\dfrac15\)일 때 최대:</p>
    $$k=\mathrm P(-0.8\le Z\le1.2)=\mathrm P(0\le Z\le0.8)+\mathrm P(0\le Z\le1.2)=0.288+0.385=0.673$$
  </div>
  <div class="sol-final">\(1000k=\mathbf{673}\)</div>
` },

/* ── 2025 6월 모평 킬러 (GPT 종로 참조 → 자체 재작성) ── */

"2025_mock06/common/q20": { answer: 24, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 각 집합의 원소 개수</div>
    <p>\(A\)는 항상 점 \((\pi,\ b)\) 하나. \(B,\ C\)는 각각 \(\sin x=\dfrac{1-b}{a},\ \dfrac{3-b}{a}\)의 해에 대응한다.</p>
    <p>\((0,2\pi)\)에서 \(\sin x=t\)의 해의 개수 : \(|t|&gt;1\)이면 \(0\), \(t=\pm1\)이면 \(1\),
       \(t=0\)이면 \(1\)(\(x=\pi\), <b>\(A\)의 점과 겹침</b>), 그 밖이면 \(2\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(b\)별로 \(n(A\cup B\cup C)=3\) 찾기</div>
    <table class="sol-table">
      <tr><th>\(b\)</th><th>조건</th><th>\(a\)</th><th>\(a+b\)</th></tr>
      <tr><td>1</td><td>\(y=1\)은 \(A\)와 겹침, \(y=3\)이 2점 → \(\frac2a&lt;1\)</td><td>3,4,5</td><td>4,5,6</td></tr>
      <tr><td>2</td><td>\(y=1,3\)이 각각 1점 → \(\frac1a=1\)</td><td>1</td><td>3</td></tr>
      <tr><td>3</td><td>\(y=3\)은 \(A\)와 겹침, \(y=1\)이 2점 → \(\frac2a&lt;1\)</td><td>3,4,5</td><td>6,7,8</td></tr>
      <tr><td>4</td><td>\(y=1\)은 0점, \(y=3\)이 2점 → \(1&lt;-a+4&lt;3\)</td><td>2</td><td>6</td></tr>
      <tr><td>5</td><td>\(y=1\)은 0점, \(y=3\)이 2점 → \(1&lt;-a+5&lt;3\)</td><td>3</td><td>8</td></tr>
    </table>
  </div>
  <div class="sol-final">\(m=3,\ M=8\) → \(M\times m=\mathbf{24}\)</div>
` },

"2025_mock06/common/q21": { answer: 15, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 해석</div>
    <p>(가) \(f'(x)\le0\)인 \(x\)의 최댓값이 \(2\) → \(x=2\)가 \(f'\)의 가장 큰 근이고 \(x&gt;2\)에서 \(f'&gt;0\), 즉 \(x=2\)는 <b>극소점</b>.</p>
    <p>(나) \(f(x)=k\)의 해가 3개 이상인 최소의 \(k\)가 \(\dfrac83\) → \(f(x)=\dfrac83\)이 \(x=2\)에서 <b>접하고</b> 다른 두 점에서 만난다.</p>
    $$f(x)=(x-2)^2(x-\alpha)(x-\beta)+\frac83$$
  </div>
  <figure class="sol-fig"><img src="sol/2025_mock06_common_q21.png" alt="f(x) 그래프">
    <figcaption>\(y=\frac83\)이 \(x=2\)에서 접하고 \(\alpha,\ \beta\)에서 만난다</figcaption></figure>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\alpha\beta,\ \alpha+\beta\) 구하기</div>
    <p>\(f(0)=0\) : \(\ 4\alpha\beta+\dfrac83=0\Rightarrow \alpha\beta=-\dfrac23\)</p>
    <p>\(f'(1)=0\) : \(\ -2(1-\alpha)(1-\beta)+(1-\alpha)+(1-\beta)=0\Rightarrow \alpha+\beta-2\alpha\beta=0\)</p>
    $$\therefore\ \alpha+\beta=2\alpha\beta=-\frac43$$
    <p>(검토 : 이때 \(f'(x)=4(x+1)(x-1)(x-2)\)로 \(f'\)의 최대 근이 \(2\) ✓)</p>
  </div>
  <div class="sol-final">\(f(3)=(3-\alpha)(3-\beta)+\dfrac83=9-3\left(-\dfrac43\right)-\dfrac23+\dfrac83=\mathbf{15}\)</div>
` },

"2025_mock06/common/q22": { answer: 231, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 특수 규칙이 쓰이는 곳</div>
    <p>\(\sqrt n\)이 자연수인 \(n\)은 \(2\le n\le14\)에서 <b>\(n=4,\ 9\)뿐</b>. 나머지는 모두 \(a_{n+1}=a_n+1\).</p>
    <p>\(a_1=a\)라 하면 \(a_2=-a,\ a_3=-a+1,\ a_4=-a+2\)이고, \(a_9=a_5+4,\ a_{15}=a_{10}+5\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_4&gt;0\) 여부 (\(\iff a&lt;2\))로 분기</div>
    <ul>
      <li>\(a&lt;2\) : \(a_5=a_4-2a_2=a+2\), \(a_9=a+6\)</li>
      <li>\(a\ge2\) : \(a_5=a_4+1=-a+3\), \(a_9=-a+7\)</li>
    </ul>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_9&gt;0\) 여부로 다시 분기 (\(a_{10}=a_9-3a_3\) 또는 \(a_9+1\))</div>
    <table class="sol-table">
      <tr><th>경우</th><th>\(a_{15}\)</th><th>\(=1\)의 해</th><th>판정</th></tr>
      <tr><td>\(-6&lt;a&lt;2\)</td><td>\(4a+8\)</td><td>\(a=-\frac74\)</td><td class="sol-ok">✓</td></tr>
      <tr><td>\(a\le-6\)</td><td>\(a+12\)</td><td>\(a=-11\)</td><td class="sol-ok">✓</td></tr>
      <tr><td>\(2\le a&lt;7\)</td><td>\(2a+9\)</td><td>\(a=-4\)</td><td class="sol-no">범위 밖 ✗</td></tr>
      <tr><td>\(a\ge7\)</td><td>\(-a+13\)</td><td>\(a=12\)</td><td class="sol-ok">✓</td></tr>
    </table>
  </div>
  <div class="sol-final">\(\left(-\dfrac74\right)\times(-11)\times12=\mathbf{231}\)</div>
` },

"2025_mock06/calculus/q29": { answer: 55, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f'(x)\ge0\)</div>
    $$f'(x)=x^2-2x+\frac{2x}{x^2+1}=\frac{x^4-2x^3+x^2}{x^2+1}=\frac{x^2(x-1)^2}{x^2+1}\ge0$$
    <p>\(f\)는 증가하고 \(f'(x)=0\)인 곳은 \(x=0,\ 1\)뿐.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=b\)에서 미분가능</div>
    <p>미분계수 조건 : \(f'(b)=-f'(b-c)\). 좌변·우변 모두 \(f'\ge0\)에서 나오므로</p>
    $$f'(b)=f'(b-c)=0$$
    <p>\(b&gt;0\)이므로 \(b=1\), \(c&gt;0\)이라 \(b-c&lt;1\)이므로 \(b-c=0\Rightarrow c=1\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 연속 조건으로 \(a\)</div>
    <p>\(f(1)=-f(0)\) : \(\ \dfrac13-1+\ln2+a=-a\)</p>
    $$2a=\frac23-\ln2\ \Rightarrow\ a=\frac13-\frac12\ln2$$
  </div>
  <div class="sol-final">\(a+b+c=\dfrac73-\dfrac12\ln2\) → \(p+q=\dfrac73-\dfrac12=\dfrac{11}{6}\) → \(30(p+q)=\mathbf{55}\)</div>
` },

"2025_mock06/calculus/q30": { answer: 25, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 교점 조건과 간격</div>
    <p>\(\tan a_n=\dfrac{\sqrt{a_n}}{10}\). \(a_n\to\infty\)이고 \(\tan\)의 주기가 \(\pi\)이므로 \(a_{n+1}-a_n\to\pi\), \(\dfrac{a_{n+1}}{a_n}\to1\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 탄젠트의 차 공식</div>
    $$\tan(a_{n+1}-a_n)=\frac{\tan a_{n+1}-\tan a_n}{1+\tan a_{n+1}\tan a_n}
      =\frac{10\left(\sqrt{a_{n+1}}-\sqrt{a_n}\right)}{100+\sqrt{a_{n+1}a_n}}$$
    <p>분자를 \(\sqrt{a_{n+1}}-\sqrt{a_n}=\dfrac{a_{n+1}-a_n}{\sqrt{a_{n+1}}+\sqrt{a_n}}\)로 바꾸면</p>
    $$a_n^3\tan^2(a_{n+1}-a_n)=\frac{100\,a_n^3\,(a_{n+1}-a_n)^2}
      {\left(100+\sqrt{a_{n+1}a_n}\right)^2\left(\sqrt{a_{n+1}}+\sqrt{a_n}\right)^2}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_n^3\)으로 약분</div>
    <p>\(\dfrac{\left(100+\sqrt{a_{n+1}a_n}\right)^2}{a_n^2}\to1\), \(\dfrac{\left(\sqrt{a_{n+1}}+\sqrt{a_n}\right)^2}{a_n}\to4\)이므로</p>
    $$\lim_{n\to\infty}a_n^3\tan^2(a_{n+1}-a_n)=\frac{100\,\pi^2}{1\cdot4}=25\pi^2$$
  </div>
  <div class="sol-final">\(\dfrac1{\pi^2}\times25\pi^2=\mathbf{25}\)</div>
` },

"2025_mock06/prob_stat/q28": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 뒤집힌 횟수의 홀짝으로 판정</div>
    <p>동전 \(i\)가 뒤집힌 횟수를 \(n_i\)라 하면 \(n_1+n_2+n_3+n_4=5\).
       처음 앞면인 세 동전(1,2,3)은 \(n_i\)가 <b>짝수</b>일 때 앞면, 뒷면인 동전 4는 \(n_4\)가 <b>홀수</b>일 때 앞면.</p>
    <p>순서까지 고려한 경우의 수는 \(\dfrac{5!}{n_1!\,n_2!\,n_3!\,n_4!}\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 모두 앞면 : \(n_1,n_2,n_3\) 짝수, \(n_4\) 홀수</div>
    <ul>
      <li>\(\{4,0,0\},n_4=1\) : \(\frac{5!}{4!}=5\), 3가지 → \(15\)</li>
      <li>\(\{2,2,0\},n_4=1\) : \(\frac{5!}{2!2!}=30\), 3가지 → \(90\)</li>
      <li>\(\{2,0,0\},n_4=3\) : \(\frac{5!}{2!3!}=10\), 3가지 → \(30\)</li>
      <li>\(\{0,0,0\},n_4=5\) : \(1\)</li>
    </ul>
    <p>합 \(=15+90+30+1=136\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 모두 뒷면 : \(n_1,n_2,n_3\) 홀수, \(n_4\) 짝수</div>
    <ul>
      <li>\(\{3,1,1\},n_4=0\) : \(\frac{5!}{3!}=20\), 3가지 → \(60\)</li>
      <li>\(\{1,1,1\},n_4=2\) : \(\frac{5!}{2!}=60\) → \(60\)</li>
    </ul>
    <p>합 \(=120\)</p>
  </div>
  <div class="sol-final">\(\dfrac{136}{136+120}=\dfrac{136}{256}=\dfrac{17}{32}\) &nbsp;→&nbsp; 답 &nbsp;①</div>
` },

"2025_mock06/prob_stat/q30": { answer: 108, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가)로 값의 범위</div>
    <p>\(-2\le x+f(x)\le2\)이므로</p>
    <div class="sol-box">
      \(f(-2)\in\{0,1,2\}\), \(f(-1)\in\{-1,0,1,2\}\), \(f(0)\in X\),
      \(f(1)\in\{-2,-1,0,1\}\), \(f(2)\in\{-2,-1,0\}\)
    </div>
    <p>(나)는 \(f(-2)\ge f(-1)\ge f(0)\ge f(1)\ge f(2)\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(0)\) 기준으로 좌·우 개수 세기</div>
    <table class="sol-table">
      <tr><th>\(f(0)\)</th><th>\((f(-2),f(-1))\)</th><th>\((f(1),f(2))\)</th><th>곱</th></tr>
      <tr><td>\(2\)</td><td>\(1\)</td><td>\(9\)</td><td>\(9\)</td></tr>
      <tr><td>\(1\)</td><td>\(3\)</td><td>\(9\)</td><td>\(27\)</td></tr>
      <tr><td>\(0\)</td><td>\(6\)</td><td>\(6\)</td><td>\(36\)</td></tr>
      <tr><td>\(-1\)</td><td>\(9\)</td><td>\(3\)</td><td>\(27\)</td></tr>
      <tr><td>\(-2\)</td><td>\(9\)</td><td>\(1\)</td><td>\(9\)</td></tr>
    </table>
  </div>
  <div class="sol-final">\(9+27+36+27+9=\mathbf{108}\)</div>
` },

/* ── 2025 9월 모평 킬러 (GPT 이투스 참조 → 자체 재작성) ── */

"2025_mock09/common/q21": { answer: 31, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 양 끝이 같아지는 \(k\) 찾기</div>
    <p>\(2k-8=4k^2+14k\)에서 \(4k^2+12k+8=0\Rightarrow(k+1)(k+2)=0\), 즉 \(k=-1,\ -2\).</p>
    <p>이때는 부등식이 <b>등식</b>이 되므로</p>
    $$\frac{f(0)-f(-2)}{2}=-12,\qquad \frac{f(1)-f(-1)}{2}=-10$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 계수 결정</div>
    <p>\(f(x)=x^3+ax^2+bx+c\)라 하면</p>
    <ul>
      <li>\(f(0)-f(-2)=8-4a+2b=-24\ \Rightarrow\ 2a-b=16\)</li>
      <li>\(f(1)-f(-1)=2+2b=-20\ \Rightarrow\ b=-11\)</li>
    </ul>
    <p>\(\therefore a=\dfrac52,\ b=-11\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 모든 정수 \(k\)에서 성립하는지 검토</div>
    $$\frac{f(k+2)-f(k)}{2}=3k^2+11k-2$$
    <p>양쪽 여유를 계산하면</p>
    $$(3k^2+11k-2)-(2k-8)=3(k+1)(k+2),\qquad (4k^2+14k)-(3k^2+11k-2)=(k+1)(k+2)$$
    <p>\((k+1)(k+2)\)는 <b>연속한 두 정수의 곱</b>이라 항상 \(\ge0\) ✓</p>
  </div>
  <div class="sol-final">\(f'(x)=3x^2+5x-11\) → \(f'(3)=27+15-11=\mathbf{31}\)</div>
` },

"2025_mock09/common/q22": { answer: 8, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 가지 점화 규칙</div>
    <p>조건 (나)에서 매 단계마다 \(\ a_{n+1}=a_n-\dfrac23k\ \)(규칙 A) 또는 \(\ a_{n+1}=-ka_n\ \)(규칙 B).</p>
    <p>\(a_1=k&gt;0\)이므로 \(a_2=\dfrac k3\) 또는 \(-k^2\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (가) \(a_2a_3&lt;0\)로 걸러내기</div>
    <ul>
      <li>\(a_2=\dfrac k3&gt;0\) : \(a_3=-\dfrac k3\) 또는 \(-\dfrac{k^2}{3}\) — 둘 다 음수라 <b>모두 가능</b></li>
      <li>\(a_2=-k^2&lt;0\) : \(a_3=-k^2-\dfrac23k&lt;0\)(✗) 또는 \(k^3&gt;0\)(✓) → <b>\(a_3=k^3\)만</b></li>
    </ul>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 각 경우에서 \(a_5=0\)인 양수 \(k\)</div>
    <table class="sol-table">
      <tr><th>\((a_2,\ a_3)\)</th><th>\(a_5=0\)이 되는 식</th><th>\(k\)</th><th>\(k^2\)</th></tr>
      <tr><td>\(\left(\frac k3,\ -\frac k3\right)\)</td><td>\(\frac{k^2}{3}-\frac23k=0\)</td><td>\(2\)</td><td>\(4\)</td></tr>
      <tr><td>\(\left(\frac k3,\ -\frac{k^2}{3}\right)\)</td><td>\(\frac{k^3}{3}-\frac23k=0\)</td><td>\(\sqrt2\)</td><td>\(2\)</td></tr>
      <tr><td>\((-k^2,\ k^3)\)</td><td>\(k^3-\frac43k=0\)</td><td>\(\frac{2}{\sqrt3}\)</td><td>\(\frac43\)</td></tr>
      <tr><td>\((-k^2,\ k^3)\)</td><td>\(-k\left(k^3-\frac23k\right)=0\)</td><td>\(\sqrt{\frac23}\)</td><td>\(\frac23\)</td></tr>
    </table>
    <p>(나머지 갈래는 \(k=0\) 또는 음수만 나와 제외)</p>
  </div>
  <div class="sol-final">\(4+2+\dfrac43+\dfrac23=\mathbf{8}\)</div>
` },

"2025_mock09/calculus/q30": { answer: 25, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(F(x)\) 구하기</div>
    <p>\(f(x)=(k+x)e^{-x}\ (x&lt;0)\), \((k-x)e^{-x}\ (x\ge0)\)이므로</p>
    $$F(x)=\begin{cases}-(k+x+1)e^{-x}+C&(x&lt;0)\\ -(k-x-1)e^{-x}+C-2&(x\ge0)\end{cases}$$
    <p>(\(x=0\)에서 연속이 되도록 두 상수를 맞춘 것)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(G=F-f\)의 개형</div>
    $$G(x)=\begin{cases}-(2k+2x+1)e^{-x}+C&(x&lt;0)\\ -(2k-2x-1)e^{-x}+C-2&(x\ge0)\end{cases}$$
    $$G'(x)=\begin{cases}(2k+2x-1)e^{-x}&(x&lt;0)\\ (2k-2x+1)e^{-x}&(x&gt;0)\end{cases}$$
    <p>\(x&lt;0\)에서는 \(x=\dfrac12-k\), \(x&gt;0\)에서는 \(x=k+\dfrac12\)이 임계점.
       또 \(x\to\infty\)에서 \(G\to C-2\), \(x\to-\infty\)에서 \(G\to\infty\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(k=\dfrac14\)</div>
    <p>\(\dfrac12-k=\dfrac14&gt;0\)이라 \(x&lt;0\)에서는 임계점이 없어 감소. \(x=0\)에서 극소이고 \(G(0)=C-\dfrac32&gt;C-2\).</p>
    <p>따라서 하한은 \(x\to\infty\)의 \(C-2\) → \(C\ge2\), \(\ F(0)=C-\dfrac54\ge\dfrac34\)</p>
    $$g\!\left(\tfrac14\right)=\tfrac34$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(k=\dfrac32\)</div>
    <p>\(\dfrac12-k=-1&lt;0\)이라 \(x=-1\)에서 극소. \(G(-1)=C-2e&lt;C-2\)이므로 이것이 최솟값.</p>
    <p>\(C\ge2e\), \(\ F(0)=C-\dfrac52\ge2e-\dfrac52\)</p>
    $$g\!\left(\tfrac32\right)=2e-\tfrac52$$
  </div>
  <div class="sol-final">\(g\!\left(\tfrac14\right)+g\!\left(\tfrac32\right)=2e-\dfrac74\) → \(p+q=2-\dfrac74=\dfrac14\) → \(100(p+q)=\mathbf{25}\)</div>
` },

"2025_mock09/prob_stat/q29": { answer: 994, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이항분포 세우기</div>
    <p>\(4\) 이하가 나올 확률은 \(\dfrac23\). \(16200\)번 중 \(4\) 이하가 나온 횟수를 \(X\)라 하면 \(X\sim\mathrm B\!\left(16200,\dfrac23\right)\).</p>
    $$\mathrm E(X)=10800,\qquad \mathrm V(X)=16200\cdot\tfrac23\cdot\tfrac13=3600,\qquad \sigma(X)=60$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 위치를 \(X\)로 표현</div>
    <p>\(+1\)이 \(X\)번, \(-1\)이 \((16200-X)\)번이므로 위치는 \(2X-16200\).</p>
    $$2X-16200\le5700\ \iff\ X\le10950$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 정규근사</div>
    $$k=\mathrm P\!\left(Z\le\frac{10950-10800}{60}\right)=\mathrm P(Z\le2.5)=0.5+0.494=0.994$$
  </div>
  <div class="sol-final">\(1000k=\mathbf{994}\)</div>
` },

"2025_mock09/prob_stat/q30": { answer: 93, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(A\)가 받는 개수를 먼저 고정</div>
    <p>\(A\)가 흰 \(w\)개·검은 \(b\)개를 받는다고 하면 (가)에서 \(w+b\le2\).
       남은 공을 \(B,C\)에게 나누는 방법은 \((5-w)(5-b)\)가지.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나) 위반 제외</div>
    <p>\(B\)가 \(1\)개 이하로 받는 경우는 \((w_B,b_B)=(0,0),(1,0),(0,1)\)의 <b>3가지</b>이고,
       \(w\le2\)라 남은 공이 충분하므로 항상 3가지가 존재한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 표로 합산</div>
    <table class="sol-table">
      <tr><th>\((w,b)\)</th><th>\((0,0)\)</th><th>\((1,0)\)</th><th>\((0,1)\)</th><th>\((2,0)\)</th><th>\((1,1)\)</th><th>\((0,2)\)</th></tr>
      <tr><th>\((5-w)(5-b)-3\)</th><td>22</td><td>17</td><td>17</td><td>12</td><td>13</td><td>12</td></tr>
    </table>
  </div>
  <div class="sol-final">\(22+17+17+12+13+12=\mathbf{93}\)</div>
` },

/* ── 2025 수능 킬러 (GPT EBS 참조 → 자체 재작성) ── */

"2025_csat/common/q20": { answer: 36, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(k\)가 만족하는 식</div>
    <p>\(\left(\dfrac15\right)^{k-3}=k\ \Rightarrow\ 5^{3-k}=k\ \Rightarrow\ k\cdot5^{k}=125\)</p>
    <p>따라서 \(\ k^3\cdot5^{3k}=(k\cdot5^{k})^3=125^3=5^9\), 즉 구하는 값은 \(f(5^{-9})\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(5^{-9}\)을 \(f\)의 값으로 나타내기</div>
    <p>\(k\cdot5^k=125&lt;375=3\cdot5^3\)이므로 \(k&lt;3\). 즉 \(12&gt;k\)이고, \(x&gt;k\)에서 \(f(x)=5^{3-x}\)이므로</p>
    $$f(12)=5^{3-12}=5^{-9}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건 \(f(f(x))=3x\) 적용</div>
    $$f\!\left(\frac1{k^3\cdot5^{3k}}\right)=f\!\left(5^{-9}\right)=f(f(12))=3\times12=\mathbf{36}$$
  </div>
  <div class="sol-final">\(\mathbf{36}\)</div>
` },

"2025_csat/common/q21": { answer: 16, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 근이 근을 낳는다</div>
    <p>\(f(\beta)=0\)이면 \(\displaystyle\lim_{x\to\beta}\frac{f(2x+1)}{f(x)}\)이 존재해야 하므로 분자도 \(0\), 즉 \(f(2\beta+1)=0\).</p>
    <p>같은 논리를 반복하면 \(\beta,\ 2\beta+1,\ 4\beta+3,\ 8\beta+7,\ \dots\)이 모두 근이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 실근은 \(-1\)뿐</div>
    <p>\(2\beta+1=\beta\iff\beta=-1\). \(\beta\ne-1\)이면 위 수들이 모두 달라 근이 무한히 많아져 삼차함수에 모순.</p>
    <p>\(f(-1)=0\) : \(-1+a-b+4=0\Rightarrow b=a+3\), 따라서</p>
    $$f(x)=(x+1)\left\{x^2+(a-1)x+4\right\}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 판별식</div>
    <p>이차식이 실근을 가지면 \(-1\)이 아닌 다른 실근이 생겨 모순이므로</p>
    $$(a-1)^2-16&lt;0\ \Rightarrow\ -3&lt;a&lt;5$$
    <p>\(f(1)=1+a+(a+3)+4=2a+8\)이고 \(a\)는 정수이므로 \(a=4\)에서 최대.</p>
  </div>
  <div class="sol-final">\(f(1)=2\cdot4+8=\mathbf{16}\)</div>
` },

"2025_csat/common/q22": { answer: 64, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(|a_3|=|a_5|\)인 \(a_3\) 찾기</div>
    <ul>
      <li>\(|a_3|\) 홀수 : \(a_4=a_3-3\)(짝수), \(a_5=\dfrac{a_3-3}{2}\) →
          \(2|a_3|=|a_3-3|\Rightarrow a_3=1\) 또는 \(-3\)</li>
      <li>\(|a_3|\) 짝수(또는 \(0\)) : \(a_4=\dfrac{a_3}{2}\) →
          \(a_5=\dfrac{a_3}{4}\)에서 \(a_3=0\), \(a_5=\dfrac{a_3}{2}-3\)에서 \(a_3=2\) 또는 \(-6\)</li>
    </ul>
    <p>\(\therefore a_3\in\{1,\ -3,\ 0,\ 2,\ -6\}\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(m=3\)이 <b>최소</b>여야 함 (\(|a_2|\ne|a_4|\)) — 두 경우 탈락</div>
    <ul>
      <li>\(a_3=1\) : \(a_4=-2\), \(a_2=2\) → \(|a_2|=|a_4|=2\) ✗</li>
      <li>\(a_3=-3\) : \(a_4=-6\), \(a_2=-6\) → \(|a_2|=|a_4|=6\) ✗</li>
    </ul>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 남은 세 경우에서 \(a_1\) 역추적</div>
    <table class="sol-table">
      <tr><th>\(a_3\)</th><th>\(a_4\)</th><th>\(a_2\)</th><th>\(a_1\)</th></tr>
      <tr><td>\(0\)</td><td>\(0\)</td><td>\(3\) (\(a_2=0\)은 ✗)</td><td>\(6\)</td></tr>
      <tr><td>\(2\)</td><td>\(1\)</td><td>\(5\) / \(4\)</td><td>\(10\) / \(7,\ 8\)</td></tr>
      <tr><td>\(-6\)</td><td>\(-3\)</td><td>\(-12\) (\(a_2=-3\)은 ✗)</td><td>\(-9,\ -24\)</td></tr>
    </table>
  </div>
  <div class="sol-final">\(6+10+7+8+9+24=\mathbf{64}\)</div>
` },

"2025_csat/calculus/q28": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접선이 곡선 위쪽</div>
    <p>\(f''(x)=-1-2xe^{1-x^2}&lt;0\ (x&gt;0)\)이라 곡선은 위로 볼록 → 접선이 곡선보다 위에 있다.</p>
    $$g(t)=\int_0^t\left\{f'(t)(x-t)+f(t)-f(x)\right\}dx$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\int f\,dx\)를 부분적분 뒤집기로 구하기</div>
    <p>\(xf'(x)=-x^2+xe^{1-x^2}\)를 적분하면 \(\ xf(x)-\displaystyle\int f\,dx=-\frac{x^3}{3}-\frac12e^{1-x^2}\), 즉</p>
    $$\int f(x)\,dx=xf(x)+\frac{x^3}{3}+\frac12e^{1-x^2}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(g(t)\)와 \(g'(t)\)</div>
    $$g(t)=\frac{t^3}{6}-\frac12(t^2+1)e^{1-t^2}+\frac12e,\qquad
      g'(t)=\frac{t^2}{2}+t^3e^{1-t^2}$$
    <p>\(g(1)=\dfrac16-1+\dfrac e2=-\dfrac56+\dfrac e2\), \(\ g'(1)=\dfrac12+1=\dfrac32\)</p>
  </div>
  <div class="sol-final">\(g(1)+g'(1)=\dfrac12e+\dfrac23\) &nbsp;→&nbsp; 답 &nbsp;②</div>
` },

"2025_csat/calculus/q29": { answer: 25, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 급수로 \(a,\ r\) 결정</div>
    <p>\(|a_n|+a_n\)은 양수 항에서만, \(|a_n|-a_n\)은 음수 항에서만 살아남는다. 둘 다 양수이므로 \(r&lt;0\).</p>
    <p>\(a&gt;0\)이면 \(\dfrac{2a}{1-r^2}=\dfrac{40}{3}\), \(\dfrac{-2ar}{1-r^2}=\dfrac{20}{3}\) → 나누면 \(-r=\dfrac12\), 즉 \(r=-\dfrac12,\ a=5\).</p>
    <p>(\(a&lt;0\)이면 \(r=-2\)로 발산하여 부적합) \(\ \therefore a_n=5\left(-\dfrac12\right)^{n-1}\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부호의 주기</div>
    <p>\((-1)^{\frac{k(k+1)}2}\left(-\dfrac12\right)^k=(-1)^{\frac{k(k+3)}2}\left(\dfrac12\right)^k\)이고
       부호는 \(+,-,-,+\)가 <b>주기 4</b>로 반복된다.</p>
    $$\sum_{k=1}^{\infty}(\cdots)=\frac{\frac12-\frac14-\frac18+\frac1{16}}{1-\frac1{16}}
      =\frac{3/16}{15/16}=\frac15$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부등식 풀기</div>
    <p>\(a_{m+k}=5\left(-\frac12\right)^{m-1}\left(-\frac12\right)^{k}\)이므로 주어진 극한은
       \(5\left(-\dfrac12\right)^{m-1}\cdot\dfrac15=\left(-\dfrac12\right)^{m-1}\).</p>
    <p>\(\left(-\dfrac12\right)^{m-1}&gt;\dfrac1{700}\)이려면 \(m\)이 <b>홀수</b>이고 \(2^{m-1}&lt;700\), 즉 \(m-1\le9\).</p>
  </div>
  <div class="sol-final">\(m=1,3,5,7,9\) → 합 \(=\mathbf{25}\)</div>
` },

"2025_csat/calculus/q30": { answer: 17, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가)로 \(a,\ b\)의 후보</div>
    <p>\(f(0)=\sin b=0\Rightarrow b=k\pi\). 또 \(\sin(2\pi a+b)=2\pi a+b\)인데 \(\sin X=X\)는 \(X=0\)뿐이므로 \(b=-2\pi a\).</p>
    <p>두 식에서 \(a=-\dfrac k2\)이고 \(1\le a\le2\)이므로 \(a\in\left\{1,\ \dfrac32,\ 2\right\}\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)로 \(a=\dfrac32\)</div>
    <p>\(f'(x)=\left(a+\cos x\right)\cos(ax+b+\sin x)\)에서
       \(f'(0)=(a+1)\cos2\pi a\), \(f'(2\pi)=a+1\).</p>
    <p>\(a=1\) 또는 \(2\)면 \(\cos2\pi a=1\)이라 \(f'(0)=f'(2\pi)\) → 최솟값이 \(2\pi\)가 되어 모순.</p>
    $$\therefore a=\frac32,\quad b=-3\pi$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 극대점 세기</div>
    <p>\(g(x)=\dfrac32x-3\pi+\sin x\)라 하면 \(g'(x)=\dfrac32+\cos x&gt;0\)이라 <b>증가</b>하고
       \(g(0)=-3\pi,\ g(4\pi)=3\pi\).</p>
    <p>\(f=\sin g\)이므로 극대 \(\iff g=\dfrac{\pi}{2}+2j\pi\). \((-3\pi,3\pi)\) 안의 값은
       \(-\dfrac{3\pi}{2},\ \dfrac{\pi}{2},\ \dfrac{5\pi}{2}\) → <b>\(n=3\)</b>.</p>
    <p>가장 작은 것은 \(g(x)=-\dfrac{3\pi}{2}\), 즉 \(\dfrac32x+\sin x=\dfrac{3\pi}{2}\) → \(x=\pi\) (\(g\)가 증가라 유일).</p>
  </div>
  <div class="sol-final">\(n\alpha_1-ab=3\pi-\dfrac32(-3\pi)=\dfrac{15}{2}\pi\) → \(p+q=2+15=\mathbf{17}\)</div>
` },

"2025_csat/prob_stat/q27": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 모평균·모분산</div>
    $$\mathrm E(X)=\frac{1+3+5+7+9}{5}=5,\qquad
      \mathrm V(X)=\frac{16+4+0+4+16}{5}=8$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 표본평균의 분산</div>
    $$\mathrm V(\overline X)=\frac{\mathrm V(X)}{3}=\frac83,\qquad
      \mathrm V(a\overline X+6)=a^2\cdot\frac83=24$$
  </div>
  <div class="sol-final">\(a^2=9,\ a&gt;0\) → \(a=3\) &nbsp;→&nbsp; 답 &nbsp;③</div>
` },

"2025_csat/prob_stat/q30": { answer: 19, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 뒤집힌 횟수의 홀짝으로 판정</div>
    <p>눈 \(6\)이 나온 횟수를 \(j\), 눈 \(i\,(i\le5)\)가 나온 횟수를 \(c_i\)라 하면
       자리 \(i\)가 뒤집힌 횟수는 \(c_i+j\)이고 \(\sum c_i+j=3\).</p>
    <div class="sol-box">
      자리 1,2(처음 앞면) : \(c_i+j\)가 <b>짝수</b> &nbsp;/&nbsp; 자리 3,4,5(처음 뒷면) : \(c_i+j\)가 <b>홀수</b>
    </div>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(j\)로 경우 나누기</div>
    <ul>
      <li>\(j=0\) : \(c_3,c_4,c_5\)가 홀수라 각각 \(\ge1\), 합이 \(3\) → \(c_3=c_4=c_5=1\) → 눈 \(3,4,5\)가 한 번씩</li>
      <li>\(j=1\) : \(c_1,c_2\)가 홀수라 각각 \(\ge1\), 합이 \(2\) → \(c_1=c_2=1\) → 눈 \(1,2,6\)이 한 번씩</li>
      <li>\(j=2\) : \(c_3,c_4,c_5\) 홀수여야 하는데 합이 \(1\)뿐이라 불가능</li>
      <li>\(j=3\) : 자리 1이 3번(홀수) 뒤집혀 뒷면 → 불가능</li>
    </ul>
    <p>각 경우 \(3!\)가지이므로 확률은 각각 \(\dfrac{3!}{6^3}=\dfrac1{36}\).</p>
  </div>
  <div class="sol-final">\(\dfrac1{36}+\dfrac1{36}=\dfrac1{18}\) → \(p+q=18+1=\mathbf{19}\)</div>
` },

/* ── 2026 6월 모평 킬러 (GPT 이투스 참조 → 자체 재작성) ── */

"2026_mock06/common/q15": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x=1\)에서 우미분계수 → \(k=-2f(1)\)</div>
    <p>\(g(1)=-f(1)\)이고 \(x&gt;1\)에서 \(g=f+k\)이므로 극한이 존재하려면 분자가 \(0\)으로 가야 한다.</p>
    $$f(1)+k+f(1)=0\ \Rightarrow\ k=-2f(1),\qquad \text{그때 극한}=f'(1)\le0$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f'\)의 부호 결정</div>
    <ul>
      <li>\(x=-1\) : 우극한은 \(-f'(-1)\le0\Rightarrow f'(-1)\ge0\)</li>
      <li>\(|a|&gt;1\) : \(g'=f'(a)\le0\) &nbsp;/&nbsp; \(|a|&lt;1\) : \(g'=-f'(a)\le0\Rightarrow f'(a)\ge0\)</li>
    </ul>
    <p>즉 \(f'\ge0\)인 구간이 \((-1,1)\)이고 밖에서는 \(f'\le0\) → 최고차항 계수가 음수이고 \(f'(\pm1)=0\).</p>
    <p>\(f'(x)=m(x-1)(x+1)\), \(f'(0)=-m=6\Rightarrow m=-6\) → \(f(x)=-2x^3+6x+C\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건 (나)</div>
    <p>\(g\)는 \(x=-1\)에서 위로 점프한 뒤 계속 감소하므로, \(g(x)=t\)의 실근이 2개인 \(t\)의 최댓값은
       점프 위쪽 값 \(g(-1)=-f(-1)\).</p>
    $$-f(-1)=13\ \Rightarrow\ f(-1)=-13\ \Rightarrow\ 2-6+C=-13\ \Rightarrow\ C=-9$$
    <p>\(\therefore f(x)=-2x^3+6x-9,\quad f(1)=-5,\quad k=10\)</p>
  </div>
  <div class="sol-final">\(k+f\!\left(\tfrac12\right)=10-\dfrac{25}{4}=\dfrac{15}{4}\) &nbsp;→&nbsp; 답 &nbsp;①</div>
` },

"2026_mock06/common/q21": { answer: 42, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫 번째 극한 → \(g(1)=g(2)=0\)</div>
    <p>\(a=1\)에서 좌·우극한이 \(g(1)\)과 \(-g(1)\)이므로 같아지려면 \(g(1)=0\). 같은 방법으로 \(g(2)=0\).</p>
    <p>\(g\)는 최고차항 계수 \(1\)인 사차함수이므로 \(\ g(x)=f(x)h(x)\) (\(h\)는 최고차항 계수 \(1\)인 이차함수).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 번째 극한 → \(h(1)=h(2)=1\)</div>
    $$\frac{|g-f|}{g}=\frac{|f|\,|h-1|}{f\,h}$$
    <p>\(a=1\)에서 좌·우극한이 \(\pm\dfrac{|h(1)-1|}{h(1)}\)이므로 같아지려면 \(|h(1)-1|=0\), 즉 \(h(1)=1\).
       같은 방법으로 \(h(2)=1\).</p>
    <p>\(h(x)-1\)이 \(1,2\)를 근으로 갖는 최고차항 계수 \(1\)인 이차식이므로</p>
    $$h(x)=(x-1)(x-2)+1=x^2-3x+3$$
  </div>
  <div class="sol-final">\(g(-1)=(-2)(-3)\cdot(1+3+3)=6\times7=\mathbf{42}\)</div>
` },

"2026_mock06/common/q22": { answer: 38, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 점 \(A\)</div>
    <p>\(u=2^x\)로 놓고 정리하면 \(\ 2u^2+(4-k)u-2k=0\Rightarrow(2u-k)(u+2)=0\).
       \(u&gt;0\)이므로 \(2^x=\dfrac k2\).</p>
    $$A\left(\log_2k-1,\ k\right)$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 점 \(B\) — 이동량은 \(3\)</div>
    <p>\(B=A+(m,-m)\)이 \(y=2^{x-2}-3\) 위에 있으므로</p>
    $$k-m=k\cdot2^{m-3}-3\ \Longrightarrow\ k\left(1-2^{m-3}\right)=m-3$$
    <p>\(m&gt;3\)이면 좌변\(&lt;0&lt;\)우변, \(m&lt;3\)이면 좌변\(&gt;0&gt;\)우변이라 모순 → \(m=3\).</p>
    <p>\(\therefore \overline{AB}=\sqrt2\,m=3\sqrt2\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 넓이 조건</div>
    <p>직선 \(l:\ x+y+(1-k-\log_2k)=0\)이고 원점까지의 거리는 \(\dfrac{k+\log_2k-1}{\sqrt2}\) (\(k&gt;1\)).</p>
    $$\frac12\cdot3\sqrt2\cdot\frac{k+\log_2k-1}{\sqrt2}=16\ \Rightarrow\ k+\log_2k-1=\frac{32}{3}$$
  </div>
  <div class="sol-final">\(k+\log_2k=\dfrac{35}{3}\) → \(p+q=3+35=\mathbf{38}\)</div>
` },

"2026_mock06/calculus/q28": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 영점의 존재와 \(a\)의 범위</div>
    <p>(나)의 \(f(-3)f(3)&lt;0\)과 사잇값 정리로 \(f(c)=0\)인 \(c\in(-3,3)\)이 존재한다.</p>
    <p>(가)를 미분하면 \(\ \{5f^4+3f^2\}f'+a=\dfrac{2x+1}{x^2+x+\frac52}\). \(x=2\)를 넣으면</p>
    $$\{5f(2)^4+3f(2)^2\}f'(2)+a=\frac{10}{17},\qquad f'(2)&gt;0\ \Rightarrow\ a\le\frac{10}{17}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 한 번 더 미분 → \(c=1\) 또는 \(-2\)</div>
    <p>다시 미분한 식에 \(x=c\)(\(f(c)=0\))를 넣으면 좌변이 모두 \(0\)이 되어</p>
    $$-\frac{2(c-1)(c+2)}{\left(c^2+c+\frac52\right)^2}=0\ \Rightarrow\ c=1\ \text{또는}\ -2$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 판별</div>
    <ul>
      <li>\(c=1\) : 첫 미분식에 \(x=1\) → \(a=\dfrac{3}{9/2}=\dfrac23&gt;\dfrac{10}{17}\) ✗</li>
      <li>\(c=-2\) : \(a=\dfrac{-3}{9/2}=-\dfrac23\le\dfrac{10}{17}\) ✓</li>
    </ul>
    <p>(가)에 \(x=-2,\ f(-2)=0\)을 넣으면 \(\ \dfrac43+b=\ln\dfrac92\Rightarrow b=\ln\dfrac92-\dfrac43\)</p>
  </div>
  <div class="sol-final">\(a\,e^{b}=-\dfrac23\cdot\dfrac92\,e^{-\frac43}=-3e^{-\frac43}\) &nbsp;→&nbsp; 답 &nbsp;①</div>
` },

"2026_mock06/calculus/q29": { answer: 109, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\{a_n\}\)은 주기 4</div>
    <p>\(a_1=\alpha,\ a_2=-\beta,\ a_3=-\alpha,\ a_4=\beta\)가 반복. \(a_1a_2a_3a_4=(\alpha\beta)^2=4\Rightarrow\alpha\beta=\pm2\).</p>
    <p>\(\alpha&gt;\beta\)인 정수쌍 : \((2,1),\ (-1,-2),\ (2,-1),\ (1,-2)\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 급수 조건</div>
    <p>\(a_{4n-2}=-\beta,\ a_{4n-3}=\alpha\)이므로 \(b_n=br^{n-1}\ (b&gt;0,\ |r|&lt;1)\)에 대해</p>
    $$-\beta\cdot\frac{b}{1-r}=6,\qquad \alpha\cdot\frac{br}{1-r^2}=6
      \ \Longrightarrow\ -\frac{\beta}{\alpha}=\frac{r}{1+r}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 네 경우 판별</div>
    <table class="sol-table">
      <tr><th>\((\alpha,\beta)\)</th><th>\(r\)</th><th>판정</th></tr>
      <tr><td>\((2,1)\)</td><td>\(-\frac13\)</td><td class="sol-no">\(b=-8&lt;0\) ✗</td></tr>
      <tr><td>\((2,-1)\)</td><td>\(1\)</td><td class="sol-no">발산 ✗</td></tr>
      <tr><td>\((1,-2)\)</td><td>\(-2\)</td><td class="sol-no">발산 ✗</td></tr>
      <tr><td>\((-1,-2)\)</td><td>\(-\frac23\)</td><td class="sol-ok">\(b=5\) ✓</td></tr>
    </table>
  </div>
  <div class="sol-final">\(b_1b_3=b^2r^2=25\cdot\dfrac49=\dfrac{100}{9}\) → \(p+q=9+100=\mathbf{109}\)</div>
` },

"2026_mock06/calculus/q30": { answer: 25, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(h(x)=\dfrac{2}{1+e^{-x}}\)의 성질</div>
    <p>\(h'&gt;0\)이고 치역은 \((0,2)\). \(h(0)=1,\ h(\ln3)=\dfrac32,\ h(-\ln3)=\dfrac12\)이며
       \(h'(\pm\ln3)=\dfrac38\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(1)&lt;0\) (극대)</div>
    <p>\(f(1)&gt;0\)이면 \(x=0\)에서 극소라는 조건에서 \(f\)가 \(x=1\)에서 극소가 되고,
       그러면 \(f'\!\left(\tfrac32\right)&gt;0\)이라 \(g'(\ln3)&gt;0\)이 되어 (나)에 모순.</p>
    <p>따라서 \(f(1)&lt;0\)이고 \(f\)는 \(x=1\)에서 <b>극대</b>. 극댓값이 음수라 실근은 하나뿐이고,
       \(g\)가 미분가능하려면 그 근이 \((0,2)\) 밖이어야 하므로 \(f(2)\le0\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건 (나)를 식으로</div>
    <p>\(g'(\ln3)=-f'\!\left(\tfrac32\right)\cdot\tfrac38&lt;0\Rightarrow f'\!\left(\tfrac32\right)&gt;0\)
       → 극소점 \(k\)에 대해 \(1&lt;k&lt;\dfrac32\).</p>
    <p>\(|g'(-\ln3)|=\tfrac38f'\!\left(\tfrac12\right)\), \(g(-\ln3)=-f\!\left(\tfrac12\right)\)이므로</p>
    $$f'\!\left(\tfrac12\right)+f\!\left(\tfrac12\right)=0$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 계수 정리</div>
    <p>\(f'(x)=3(x-1)(x-k)\)에서 \(f(x)=x^3-\tfrac32(1+k)x^2+3kx+C\)이고, 위 식에서 \(C=1-\tfrac{21}{8}k\).</p>
    <p>\(f(2)=3-\tfrac{21}{8}k\le0\Rightarrow k\ge\dfrac87\). 따라서 \(\dfrac87\le k&lt;\dfrac32\).</p>
    $$g(0)=-f(1)=\frac98k-\frac12$$
  </div>
  <div class="sol-final">\(k=\dfrac87\)에서 최소 \(g(0)=\dfrac97-\dfrac12=\dfrac{11}{14}\) → \(p+q=14+11=\mathbf{25}\)</div>
` },

"2026_mock06/prob_stat/q29": { answer: 44, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 사건 정의</div>
    <p>\(A:\ a+b=8\), \(B:\ b\ge c\). 전체 경우의 수는 \(6^3=216\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 각 확률</div>
    <ul>
      <li>\(n(A)\) : \((a,b)=(2,6),(3,5),(4,4),(5,3),(6,2)\)의 5가지, \(c\)는 6가지 → \(30\)</li>
      <li>\(n(B)\) : \(b\ge c\)인 \((b,c)\)는 \({}_6\mathrm H_2={}_7\mathrm C_2=21\), \(a\)는 6가지 → \(126\)</li>
      <li>\(n(A\cap B)\) : 위 5가지 각각에 \(c\le b\)이므로 \(6+5+4+3+2=20\)</li>
    </ul>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 덧셈정리</div>
    $$\mathrm P(A\cup B)=\frac{30+126-20}{216}=\frac{136}{216}=\frac{17}{27}$$
  </div>
  <div class="sol-final">\(p+q=27+17=\mathbf{44}\)</div>
` },

"2026_mock06/prob_stat/q30": { answer: 115, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가) 정리</div>
    <p>\(f(x+1)\ge f(x)+x-3\)에 \(x=1,2,3,4\)를 넣으면</p>
    <div class="sol-box">
      \(f(1)\le f(2)+2\), &nbsp;\(f(2)-1\le f(3)\le f(4)\le f(5)-1\)
    </div>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(2)\)가 홀수인 세 경우</div>
    <table class="sol-table">
      <tr><th>\(f(2)\)</th><th>\(f(1)\)</th><th>\((f(3),f(4),f(5)-1)\)</th><th>곱</th></tr>
      <tr><td>\(1\)</td><td>\(\le3\) → 3가지</td><td>\(1\!\sim\!4\)에서 \({}_4\mathrm H_3=20\)</td><td>\(60\)</td></tr>
      <tr><td>\(3\)</td><td>5가지</td><td>\(2\!\sim\!4\)에서 \({}_3\mathrm H_3=10\)</td><td>\(50\)</td></tr>
      <tr><td>\(5\)</td><td>5가지</td><td>모두 \(4\) → \(1\)</td><td>\(5\)</td></tr>
    </table>
  </div>
  <div class="sol-final">\(60+50+5=\mathbf{115}\)</div>
` },

/* ── 2026 9월 모평 킬러 (GPT EBS 참조 → 자체 재작성) ── */

"2026_mock09/common/q15": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(g'(x)=|f(x)|-|x|\)</div>
    <p>\(g'(x)=0\iff|f(x)|=|x|\)이고, \(f(0)=0\)이라 \(x=0\)은 근. 조건 (나)에서 \(x=2,\ 6\)도 근이며
       (가)에서 근은 \(0,\ 2,\ 6,\ \alpha\)의 4개.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(6)=6,\ f(2)=-2\)</div>
    <p>\(f(6)=-6\)이면 \(f\)의 최고차항 계수가 양수라 \(x&gt;6\)에서 \(f(x)=x\)인 점이 또 생겨
       근의 개수·극값 조건과 어긋난다. \(\therefore f(6)=6\).</p>
    <p>\(f(2)=2\)이면 \([0,2]\)에서 \(g'\ge0\)이 되어 \(g(2)&gt;0\), 즉 \(f(6)g(2)&gt;0\)이라 모순.
       \(\therefore f(2)=-2\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f'(0)=1\)</div>
    <p>\(0&lt;f'(0)&lt;1\)이면 \(x&lt;0\)에서, \(f'(0)&gt;1\)이면 \(0&lt;x&lt;2\)에서 교점이 하나 더 생겨 (가)에 모순.</p>
    <p>\(f(0)=0,\ f'(0)=1,\ f(6)=6\)이므로 \(\ f(x)-x=kx^2(x-6)\).
       \(f(2)=-2\)에서 \(-4=-16k\Rightarrow k=\dfrac14\).</p>
    $$f(x)=x+\frac14x^2(x-6)$$
    <p>(검토 : \(|f|=|x|\)의 근은 \(0,2,4,6\)의 4개 ✓, \(g(2)&lt;0\) ✓)</p>
  </div>
  <div class="sol-final">\(f(8)=8+\dfrac14\cdot64\cdot2=\mathbf{40}\) &nbsp;→&nbsp; 답 &nbsp;⑤</div>
` },

"2026_mock09/common/q21": { answer: 296, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부등식을 직선으로 정리</div>
    <p>\(f(x)=x^3+ax^2+bx+c\)라 하면 \(\dfrac{f(2x)-f(0)}{2x}=4x^2+2ax+b\).</p>
    <p>왼쪽 부등식 : \(\dfrac{3x^2+2ax+b}{2}+x^2-2\le4x^2+2ax+b\Rightarrow 2ax+b\ge-3x^2-4\)</p>
    <p>오른쪽 부등식 : \(4x^2+2ax+b\le x^4\Rightarrow 2ax+b\le x^4-4x^2\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 곡선 사이의 직선</div>
    <div class="sol-box">
      \(-3x^2-4\ \le\ 2ax+b\ \le\ x^4-4x^2\) &nbsp;(모든 실수 \(x\))
    </div>
    <p>왼쪽 곡선의 <b>최댓값</b>은 \(x=0\)에서 \(-4\), 오른쪽 곡선의 <b>최솟값</b>은 \(x=\pm\sqrt2\)에서 \(-4\).</p>
    <ul>
      <li>\(x=0\) : \(b\ge-4\)</li>
      <li>\(x=\pm\sqrt2\) : \(\pm2\sqrt2\,a+b\le-4\) → 두 식을 더하면 \(b\le-4\)</li>
    </ul>
    <p>\(\therefore b=-4\), 그러면 \(\pm2\sqrt2\,a\le0\)에서 \(a=0\). 즉 직선은 \(y=-4\).</p>
  </div>
  <div class="sol-final">\(f'(x)=3x^2-4\) → \(f'(10)=300-4=\mathbf{296}\)</div>
` },

"2026_mock09/common/q22": { answer: 73, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 점 설정</div>
    <p>\(B(\alpha,\log_2\alpha),\ A(\beta,\log_2\beta)\ (0&lt;\alpha&lt;\beta)\)라 하자.
       \(y=x\)에 수직인 두 직선의 기울기는 \(-1\)이고 \(y\)절편은 각각 \(\alpha+\log_2\alpha,\ \beta+\log_2\beta\).</p>
    $$(\beta-\alpha)+\left(\log_2\beta-\log_2\alpha\right)=\frac{13}{2},\qquad
      \frac{\log_2\beta-\log_2\alpha}{\beta-\alpha}=\frac67$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\alpha,\ \beta\) 구하기</div>
    <p>두 식에서 \(\beta-\alpha=\dfrac72,\ \log_2\dfrac{\beta}{\alpha}=3\), 즉 \(\beta=8\alpha\).</p>
    $$7\alpha=\frac72\Rightarrow\alpha=\frac12,\ \beta=4
      \quad\Rightarrow\quad A(4,2),\ B\!\left(\tfrac12,-1\right)$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 사다리꼴의 넓이</div>
    <p>\(P\)는 \(A\)에서 \(y=x\)에 내린 수선의 발 \((3,3)\), \(Q\)는 \(B\)의 \(y=x\)에 대한 대칭점 \(\left(-1,\tfrac12\right)\).</p>
    $$\overline{AP}=\sqrt2,\qquad \overline{BQ}=\frac32\sqrt2,\qquad
      \overline{PM}=\frac{13}{4}\sqrt2\ \ (M:\overline{BQ}\text{의 중점})$$
    $$S=\frac12\left(\sqrt2+\frac32\sqrt2\right)\cdot\frac{13}{4}\sqrt2=\frac{65}{8}$$
  </div>
  <div class="sol-final">\(p+q=8+65=\mathbf{73}\)</div>
` },

"2026_mock09/calculus/q28": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f=h\circ g\)로 보기</div>
    <p>\(h(x)=x-\tan x\)라 하면 \(f(x)=h(g(x))\)이고 \(h'(x)=-\tan^2x\le0\)이라 각 구간에서 <b>감소</b>.</p>
    <p>\(f'(x)=g'(x)\{1-\sec^2 g(x)\}=-g'(x)\tan^2 g(x)\)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f\)의 꼴</div>
    <p>\(\sin g(\pi)=0\Rightarrow\tan g(\pi)=0\Rightarrow f'(\pi)=0\). 여기에 \(f''(\pi)=0,\ f(0)=0\)을 더하면</p>
    $$f(x)=k(x-\pi)^3+k\pi^3$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(g\)의 치역 판별</div>
    <p>\(g\)가 증가해 치역이 \(\left(\frac{\pi}{2},\frac{3\pi}{2}\right)\)이면 \(f=h\circ g\)는 감소 → \(k&lt;0\)이라 \(f(\pi)=k\pi^3&lt;0\).
       그러나 \(g(\pi)=\pi\)에서 \(f(\pi)=\pi&gt;0\)이라 모순.</p>
    <p>따라서 \(g\)는 감소하고 치역은 \(\left(\frac{3\pi}{2},\frac{5\pi}{2}\right)\), \(\ g(\pi)=2\pi\).</p>
    $$f(\pi)=2\pi=k\pi^3\ \Rightarrow\ k=\frac{2}{\pi^2}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답</div>
    <p>\(f(0)=0\)에서 \(g(0)=\tan g(0)\)이므로 \(f'(0)=-g'(0)\{g(0)\}^2\).
       한편 \(f'(0)=3k\pi^2=6\).</p>
  </div>
  <div class="sol-final">\(g'(0)\{g(0)\}^2=-6\) &nbsp;→&nbsp; 답 &nbsp;②</div>
` },

"2026_mock09/calculus/q29": { answer: 91, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 가운데 정수항은 \(6\)</div>
    <p>정수인 세 항은 연속하므로 \(a_m,a_{m+1},a_{m+2}\)라 하면 등비수열에서
       \(a_ma_{m+1}a_{m+2}=\left(a_{m+1}\right)^3=216\Rightarrow a_{m+1}=6\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 가능한 공비</div>
    <p>\(r=\dfrac{q}{p}\)(기약, \(|r|&lt;1\))라 하면 \(a_{m+2}=\dfrac{6q}{p}\), \(a_m=\dfrac{6p}{q}\)가 모두 정수이므로
       \(p\mid6,\ |q|\mid6\). \(|q|&lt;p\)에서</p>
    $$|r|\in\left\{\frac12,\ \frac13,\ \frac23,\ \frac16\right\}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_1&gt;0\), \(a_1+a_2&lt;10\), 정수항 <b>정확히 3개</b></div>
    <ul>
      <li>\(r&gt;0\) : \(a_1=a_m\)이고 \(a_1+a_2\)는 각각 \(18,\ 24,\ 15,\ 42\)로 모두 \(10\) 이상 ✗</li>
      <li>\(r&lt;0\) : \(a_m&lt;0\)이라 \(a_1=\dfrac{6}{r^2}\)이고, 이 값이 정수면 정수항이 4개가 되어 ✗.
          \(\dfrac{6}{r^2}=24,\ 54,\ \boxed{\dfrac{27}{2}},\ 216\) 중 정수가 아닌 것은 \(r=-\dfrac23\)뿐</li>
    </ul>
    <p>\(\therefore a_1=\dfrac{27}{2},\ r=-\dfrac23\) &nbsp;(\(a_1+a_2=\dfrac92&lt;10\) ✓)</p>
  </div>
  <div class="sol-final">\(\displaystyle\sum a_n=\frac{27/2}{1+\frac23}=\frac{81}{10}\) → \(p+q=10+81=\mathbf{91}\)</div>
` },

"2026_mock09/calculus/q30": { answer: 31, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(g\)가 곱의 미분 꼴임을 알아채기</div>
    <p>주어진 식에서 \(e^{f(x)}=\dfrac{g(x)}{1+xf'(x)}\), 즉 \(g(x)=\{1+xf'(x)\}e^{f(x)}\). 그런데</p>
    $$\frac{d}{dx}\left(xe^{f(x)}\right)=\{1+xf'(x)\}e^{f(x)}=g(x)$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 첫 번째 적분으로 \(e^{f(2)}\)</div>
    $$\int_1^2 g\,dx=\Big[xe^{f(x)}\Big]_1^2=2e^{f(2)}-e^{f(1)}=2e^{f(2)}-16=34
      \ \Rightarrow\ e^{f(2)}=25$$
    <p>(\(f(1)=4\ln2\Rightarrow e^{f(1)}=2^4=16\))</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 번째 적분에 부분적분</div>
    <p>\(xg(x)=xe^{f}+x^2f'e^{f}\)이고 \(\displaystyle\int_1^2x^2f'e^{f}dx=\Big[x^2e^{f}\Big]_1^2-2\int_1^2xe^{f}dx\)이므로</p>
    $$\int_1^2xg\,dx=\Big[x^2e^{f}\Big]_1^2-\int_1^2xe^{f}dx=(100-16)-\int_1^2xe^{f}dx=53$$
  </div>
  <div class="sol-final">\(\displaystyle\int_1^2xe^{f(x)}dx=84-53=\mathbf{31}\)</div>
` },

"2026_mock09/prob_stat/q29": { answer: 23, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 한 번의 시행에서 기록한 수가 \(1\)일 확률</div>
    <p>두 부분집합을 고르는 전체 경우의 수는 \(8\times4=32\).</p>
    <p>교집합의 원소가 하나이려면 \(2,\ 3\) 중 <b>정확히 하나</b>만 공통이어야 한다.
       각각 \(8-2=6\)가지이므로</p>
    $$\frac{6+6}{32}=\frac38$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 이항분포 → 정규근사</div>
    <p>\(X\sim\mathrm B\!\left(15360,\dfrac38\right)\)에서
       \(\mathrm E(X)=5760\), \(\mathrm V(X)=15360\cdot\dfrac38\cdot\dfrac58=3600\), \(\sigma=60\).</p>
    $$k=\mathrm P(X\ge5880)=\mathrm P\!\left(Z\ge\frac{5880-5760}{60}\right)=\mathrm P(Z\ge2)=0.5-0.477=0.023$$
  </div>
  <div class="sol-final">\(1000k=\mathbf{23}\)</div>
` },

"2026_mock09/prob_stat/q30": { answer: 80, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 변수 설정</div>
    <p>학생 \(B\)의 카드 중 \(n\) 이하인 것의 개수를 \(k\)라 하면 \(B\)가 카드를 내려놓을 확률은 \(\dfrac k6\),
       \(A\)가 내려놓을 확률은 \(\dfrac12\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 확률</div>
    <p>둘 다 내려놓으면 \(A\)의 카드(\(8\))가 더 크므로 \(A\)가 받고, \(B\)만 내려놓아도 \(A\)가 받는다.</p>
    $$p=\frac12\cdot\frac k6+\frac12\cdot\frac k6=\frac k6,
      \qquad q=\frac12\cdot\frac{6-k}{6}=\frac{6-k}{12}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(p=q\)</div>
    $$\frac k6=\frac{6-k}{12}\ \Rightarrow\ 2k=6-k\ \Rightarrow\ k=2$$
    <p>\(B\)의 카드 중 \(n\) 이하인 것이 \(2\)장(즉 \(2,3\))이므로 \(n=3\), 그리고 \(p=\dfrac13\).</p>
  </div>
  <div class="sol-final">\(24(n+p)=24\left(3+\dfrac13\right)=\mathbf{80}\)</div>
` },

/* ── 2026 수능 킬러 (GPT EBS 참조 → 자체 재작성) ── */

"2026_csat/common/q21": { answer: 65, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f\)의 세 근</div>
    <p>\(g\)가 \(x=t\)에서 연속이려면 \(-f(t)=f(t)\), 즉 \(f(t)=0\).</p>
    <p>(가)에서 \(a=0,\ 2\)일 때도 극한이 존재해야 하므로 분자가 \(0\)으로 가야 한다:
       \(g(0)=g(2)=0\Rightarrow f(0)=f(2)=0\).</p>
    $$f(x)=\alpha x(x-2)(x-k)\quad(\alpha&gt;0)$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건을 만족하는 \(m\)은 \(2,\ 3\)</div>
    <ul>
      <li>\(m=1\) : \(1\cdot(1-2)&lt;0\)이라 \(g(1)&gt;0\)이어야 하는데,
          \(-\frac72g(1)\)이 자연수라 \(g(1)&lt;0\) → ✗</li>
      <li>\(m=2\) : 극한이 \(\frac12f'(2)=\frac12\cdot2\alpha(2-k)&lt;0\) (\(k&gt;2\)) → ✓</li>
      <li>\(m\ge3\) : \(m(m-2)&gt;0\)이라 \(g(m)=\alpha m(m-2)(m-k)&lt;0\iff k&gt;m\)</li>
    </ul>
    <p>자연수가 정확히 2개(\(2,3\))이려면 \(\ 3&lt;k\le4\). 또 \(g(-1)&gt;0,\ g(1)&lt;0\)에서 경계는 \(t=2\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\alpha,\ k\) 결정</div>
    <p>\(g(-1)=-f(-1)=3\alpha(k+1)\), \(g(1)=-f(1)=-\alpha(k-1)\)이고
       \(\{g(-1),\ -\tfrac72g(1)\}=\{2,3\}\).</p>
    <ul>
      <li>\(g(-1)=2,\ -\tfrac72g(1)=3\) → \(k=-8\) ✗</li>
      <li>\(g(-1)=3,\ -\tfrac72g(1)=2\) → \(\dfrac1{k+1}=\dfrac{4}{7(k-1)}\Rightarrow k=\dfrac{11}{3}\) ✓ (\(3&lt;\tfrac{11}{3}\le4\))</li>
    </ul>
    <p>\(\alpha=\dfrac{1}{k+1}=\dfrac{3}{14}\)</p>
  </div>
  <div class="sol-final">\(g(-5)=-f(-5)=-\dfrac{3}{14}(-5)(-7)\left(-\dfrac{26}{3}\right)=\mathbf{65}\)</div>
` },

"2026_csat/common/q22": { answer: 457, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 곡선을 지수형으로</div>
    $$b=\log_{16}(8a+2)\iff 16^{b}=8a+2,\qquad d=4^{c-1}-\tfrac12\iff 4^{c}=4d+2$$
    <p>여기서 \(16^b=4^{2b}\)이므로, \(A(a,b)\)가 첫 곡선 위에 있으면
       \(4^{2b}=8a+2=4(2a)+2\), 즉 <b>\((2b,\ 2a)\)가 둘째 곡선 위</b>에 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(B=(2b,\ 2a)\)</div>
    <p>\(A\)를 \(y=x\)에 대칭이동한 \((b,a)\)가 직선 \(OB\) 위 \(\iff ac=bd\).
       \(B=(2b,2a)\)이면 \(a(2b)=b(2a)\)로 만족한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 중점 조건</div>
    $$a+c=a+2b=\frac{77}{4},\qquad b+d=b+2a=\frac{133}{4}$$
    <p>두 식을 더하면 \(a+b=\dfrac{35}{2}\), 빼면 \(a-b=14\) → \(a=\dfrac{63}{4},\ b=\dfrac74\).</p>
    <p>검토 : \(16^{7/4}=2^7=128=8\cdot\tfrac{63}{4}+2\) ✓, \(B\left(\tfrac72,\tfrac{63}{2}\right)\)도 제1사분면 ✓</p>
  </div>
  <div class="sol-final">\(ab=\dfrac{63}{4}\cdot\dfrac74=\dfrac{441}{16}\) → \(p+q=16+441=\mathbf{457}\)</div>
` },

"2026_csat/calculus/q30": { answer: 11, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f^{-1}\) 구하기</div>
    <p>(가)에서 \(\left(2f^{-1}\right)^2=\left\{x(x^2-5)\right\}^2\)이고 \(f^{-1}\)은 증가하므로</p>
    $$f^{-1}(x)=-\frac12x^3+\frac52x\quad(|x|\le1)$$
    <p>(나)와 연속성에서 \(x&gt;1\)이면 \(f^{-1}=e^{x-1}+1\), \(x&lt;-1\)이면 \(f^{-1}=-\left(e^{-x-1}+1\right)\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대칭으로 옮기기</div>
    <p>\((1,0)\)을 지나는 기울기 \(m\)인 직선과 \(y=f(x)\)의 교점 개수는,
       \(y=x\)에 대칭시켜 <b>\((0,1)\)을 지나는 기울기 \(\frac1m\)인 직선과 \(y=f^{-1}(x)\)</b>의 교점 개수와 같다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 접선</div>
    <p>삼차 부분에 그은 접선 : 접점 \(\alpha\)에서 \(\dfrac{-\frac12\alpha^3+\frac52\alpha-1}{\alpha}=-\dfrac32\alpha^2+\dfrac52\Rightarrow\alpha=1\), 기울기 \(1\).</p>
    <p>\(x&lt;-1\) 부분에 그은 접선 : 접점 \(\beta\)에서</p>
    $$\frac{-e^{-\beta-1}-2}{\beta}=e^{-\beta-1}\ \Longrightarrow\ (\beta+1)e^{-(\beta+1)}=-2$$
    <p>대칭시키면 \(y=f(x)\)에 대한 임계 기울기는 \(1\)과 \(e^{\beta+1}\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(g(m)\)의 불연속점</div>
    $$g(m)=\begin{cases}1&(m\le0)\\ 3&(0&lt;m&lt;e^{\beta+1})\\ 2&(m=e^{\beta+1})\\ 1&(m&gt;e^{\beta+1})\end{cases}$$
    <p>\(\therefore a=0,\ b=e^{\beta+1}\). 이때 \(\ln b=\beta+1\)이므로</p>
    $$\frac{\ln b}{b}=\frac{\beta+1}{e^{\beta+1}}=(\beta+1)e^{-(\beta+1)}=-2$$
  </div>
  <div class="sol-final">\(g(a)\cdot\lim\limits_{m\to a+}g(m)+g(b)\left(\dfrac{\ln b}{b}\right)^2=1\cdot3+2\cdot4=\mathbf{11}\)</div>
` },

"2026_csat/prob_stat/q30": { answer: 262, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 구성 파악</div>
    <p>주머니 \(10\)개, 공 \(8\)개, 각 주머니에 \(2\)개 이하. (가)에서 1개짜리는 \(4\)개 또는 \(6\)개.</p>
    <ul>
      <li>1개짜리 \(4\)개 → 남은 공 \(4\)개는 2개짜리 \(2\)개 → 빈 주머니 \(4\)개</li>
      <li>1개짜리 \(6\)개 → 남은 공 \(2\)개는 2개짜리 \(1\)개 → 빈 주머니 \(3\)개</li>
    </ul>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 빈 주머니를 먼저 배열</div>
    <p>(나)에서 2개짜리 주머니의 양옆은 반드시 빈 주머니여야 하므로,
       빈 주머니를 먼저 놓고 생긴 <b>사이·양끝의 자리</b> 중 하나를 <b>2개짜리가 독점</b>해야 한다.</p>
    <p>1개짜리 주머니끼리는 이웃해도 되므로 남은 자리에 자유롭게 분배한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 경우의 수</div>
    <table class="sol-table">
      <tr><th>경우</th><th>빈 주머니(자리)</th><th>2개짜리 배치</th><th>1개짜리 분배</th><th>곱</th></tr>
      <tr><td>1개짜리 4개</td><td>\(4\)개 → \(5\)자리</td><td>\({}_5\mathrm C_2=10\)</td><td>남은 \(3\)자리에 \(4\)개 : \({}_3\mathrm H_4=15\)</td><td>\(150\)</td></tr>
      <tr><td>1개짜리 6개</td><td>\(3\)개 → \(4\)자리</td><td>\({}_4\mathrm C_1=4\)</td><td>남은 \(3\)자리에 \(6\)개 : \({}_3\mathrm H_6=28\)</td><td>\(112\)</td></tr>
    </table>
  </div>
  <div class="sol-final">\(150+112=\mathbf{262}\)</div>
` },

/* ── 2027 6월 모평 킬러 (GPT EBS 참조 → 자체 재작성) ── */

"2027_mock06/common/q21": { answer: 11, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 우변을 \(h(t)\)로</div>
    <p>\(f(x)=x^3+ax^2+bx+c\)라 하면</p>
    $$h(t)=f'(t)-4t^2+4=-t^2+2at+(b+4)$$
    <p>이는 직선 \(t=a\)에 대칭인 <b>위로 볼록한 포물선</b>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 불연속이 생기는 지점</div>
    <p>\(f\)가 증가함수면 \(g\)는 연속이므로, \(f\)는 극댓값·극솟값을 가져야 한다.
       \(g(t)\)(가장 큰 실근)는 \(h(t)\)가 <b>\(f\)의 극솟값</b>과 같아지는 곳에서 불연속이 된다.</p>
    <p>\(h\)가 \(t=a\)에 대칭이므로 그런 \(t\)는 \(a\)를 사이에 두고 <b>쌍으로</b> 생긴다.
       불연속점이 \(t=3\) 하나뿐이려면 그 점이 대칭축이어야 하므로 \(\ a=3\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 계수 결정</div>
    <p>\(g(3)=1\)이므로 \(f\)는 \(x=1\)에서 극소 → \(f'(1)=3+2a+b=0\Rightarrow b=-9\).</p>
    <p>\(f(1)=h(3)\) : \(\ (1+3-9+c)=(-9+18-9+4)\Rightarrow c-5=4\Rightarrow c=9\)</p>
    $$f(x)=x^3+3x^2-9x+9\quad(f'(x)=3(x+3)(x-1)\ ✓)$$
  </div>
  <div class="sol-final">\(f(2)=8+12-18+9=\mathbf{11}\)</div>
` },

"2027_mock06/common/q22": { answer: 32, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 항 계산</div>
    <p>\(a_{2n}=a_n+1\), \(a_{4n+1}=a_{4n+3}=a_n+4\), \(a_1=1,\ a_3=4\).</p>
    <table class="sol-table">
      <tr><th>\(n\)</th><th>1~4</th><th>5~8</th><th>9~12</th><th>13~16</th><th>17~20</th><th>21~24</th><th>25~28</th></tr>
      <tr><th>\(a_n\)</th><td>1,2,4,3</td><td>5,5,5,4</td><td>6,6,6,6</td><td>8,6,8,5</td><td>7,7,7,7</td><td>9,7,9,7</td><td>9,9,9,7</td></tr>
    </table>
    <p>\(a_{32}=a_{16}+1=6\)이고, \(n\ge17\ (n\ne32)\)에서는 \(a_n&gt;6\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 홀수 \(k\)</div>
    <p>\(k=4n+1\) 또는 \(4n+3\)이면 \(a_k=a_n+4=10\iff a_n=6\).</p>
    <p>\(a_n=6\)인 \(n\) : \(9,10,11,12,14,32\)의 <b>6개</b> → 각각 \(k\)가 2개씩 → \(12\)개</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 짝수 \(k\)</div>
    <ul>
      <li>\(k=4m\) : \(a_k=a_m+2=10\iff a_m=8\).
        <br>\(a_m=8\)인 \(m\) : (홀수 \(m\), \(a_n=4\)인 \(n=3,8\)) \(2\times2=4\) +
        (\(m=4n\), \(a_n=6\)) \(6\) + (\(m\equiv2\ \mathrm{mod}\ 4\), \(a_n=3\)인 \(n=4\)) \(2\) = <b>12</b></li>
      <li>\(k=8n+2\) 또는 \(8n+6\) : \(a_k=a_n+5=10\iff a_n=5\).
        <br>\(a_n=5\)인 \(n\) : \(5,6,7,16\)의 4개 → \(4\times2=\)<b>8</b></li>
    </ul>
    <p>짝수 \(k\) : \(12+8=20\)개</p>
  </div>
  <div class="sol-final">\(12+20=\mathbf{32}\)</div>
` },

"2027_mock06/calculus/q29": { answer: 54, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(k=3r+4\)</div>
    <p>\(a_1=b_1=a\), 공차 \(d\), 공비 \(r\ (0&lt;r&lt;1)\)이라 하면</p>
    $$a_4=b_2:\ 3d=a(r-1),\qquad a_k=b_3:\ (k-1)d=a(r^2-1)=3d(r+1)$$
    <p>\(d\ne0\)이므로 \(k-1=3(r+1)\), 즉 \(k=3r+4\). \(0&lt;r&lt;1\)에서 \(4&lt;k&lt;7\) → \(k=5\) 또는 \(6\).</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(k=5\ (r=\frac13)\)</div>
    <p>\(d=-\frac29a\)가 음의 정수이려면 \(a=9t\) → \(a_n=t(11-2n)\)이라
       \(\cos(a_n\pi)=(-1)^{11t-2tn}=(-1)^t\)로 <b>부호가 일정</b>.</p>
    $$\left|\sum b_n\cos(a_n\pi)\right|=9t\cdot\frac{1}{1-\frac13}=\frac{27}{2}t\ \ (\ge\tfrac{27}{2})$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(k=6\ (r=\frac23)\)</div>
    <p>\(d=-\frac19a\)에서 \(a=9t\) → \(a_n=t(10-n)\), \(\cos(a_n\pi)=(-1)^{t(10-n)}\).</p>
    <ul>
      <li>\(t\) 짝수 : 부호가 모두 \(+\) → \(9t\cdot3=27t\ (\ge54)\)</li>
      <li>\(t\) 홀수 : \((-1)^{10-n}=(-1)^n\)로 <b>부호가 교대</b> →
          \(\left|-9t\cdot\dfrac{1}{1+\frac23}\right|=\dfrac{27}{5}t\)</li>
    </ul>
    <p>\(t=1\)에서 최소 \(\dfrac{27}{5}\) (\(&lt;\dfrac{27}{2}&lt;54\))</p>
  </div>
  <div class="sol-final">\(m=\dfrac{27}{5}\) → \(10m=\mathbf{54}\)</div>
` },

"2027_mock06/calculus/q30": { answer: 20, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f(0)=0\)</div>
    <p>\(g(x)=\sqrt[3]{x\{f(x)\}^2}\)가 \(x=0\)에서 미분가능하려면
       \(\dfrac{g(x)}{x}=\dfrac{\sqrt[3]{\{f(x)\}^2}}{x^{2/3}}\)의 극한이 존재해야 하므로 \(f(0)=0\).</p>
    <p>\(\therefore f(x)=x\,p(x)\) (\(p\)는 최고차항 계수 \(1\)인 이차함수)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(p(x)=0\)은 실근이 없다</div>
    <ul>
      <li>서로 다른 두 실근 \(\alpha,\beta\) : \(g(x)=x\sqrt[3]{(x-\alpha)^2(x-\beta)^2}\)이 \(x=\alpha\)에서 미분불가능 ✗</li>
      <li>중근 \(\alpha\) : \(g(x)=x(x-\alpha)^{4/3}\), \(g'=(x-\alpha)^{1/3}\left(\frac73x-\alpha\right)\)이라
          극값이 \(\alpha,\ \frac37\alpha\)인데 \(\left\{\frac{19}{7},3\right\}\)와 맞출 수 없다 ✗</li>
    </ul>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 계수 결정</div>
    <p>\(p(x)=x^2+ax+b&gt;0\)이므로 \(g(x)=x(x^2+ax+b)^{2/3}\)이고</p>
    $$g'(x)=\frac{7x^2+5ax+3b}{3\left(x^2+ax+b\right)^{1/3}}$$
    <p>\(\dfrac{19}{7},\ 3\)이 \(7x^2+5ax+3b=0\)의 두 근이므로 근과 계수의 관계에서</p>
    $$-\frac{5a}{7}=\frac{40}{7}\Rightarrow a=-8,\qquad \frac{3b}{7}=\frac{57}{7}\Rightarrow b=19$$
    <p>검토 : \(x^2-8x+19\)의 판별식 \(\frac D4=16-19=-3&lt;0\) ✓ (실근 없음)</p>
  </div>
  <div class="sol-final">\(f(x)=x(x^2-8x+19)\) → \(f(5)=5(25-40+19)=\mathbf{20}\)</div>
` },

"2027_mock06/prob_stat/q28": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 정리</div>
    <p>전체 경우의 수는 \(6^4\). 모든 동전이 앞면이 되려면 두 동전이 각각 <b>홀수 번</b> 뒤집혀야 하고,
       그러려면 홀수 눈이 나온 횟수와 짝수 눈이 나온 횟수가 각각 홀수여야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 경우 나누기</div>
    <table class="sol-table">
      <tr><th>구성</th><th>가짓수</th><th>배열</th><th>합</th></tr>
      <tr><td>\((1,1,1,6),(1,6,6,6),(2,2,2,5),(2,5,5,5)\)</td><td>4</td><td>\(\frac{4!}{3!}=4\)</td><td>16</td></tr>
      <tr><td>\((1,6)\)+같은 눈 2개, \((2,5)\)+같은 눈 2개</td><td>8</td><td>\(\frac{4!}{2!}=12\)</td><td>96</td></tr>
      <tr><td>\((1,3,5,4)\), \((2,4,6,3)\) — 네 눈 모두 다름</td><td>2</td><td>\(4!=24\)</td><td>48</td></tr>
    </table>
  </div>
  <div class="sol-final">\(\dfrac{16+96+48}{1296}=\dfrac{160}{1296}=\dfrac{10}{81}\) &nbsp;→&nbsp; 답 &nbsp;③</div>
` },

"2027_mock06/prob_stat/q30": { answer: 780, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 검은 공을 먼저 배열</div>
    <p>검은 공 \(4\)개를 놓으면 사이와 양끝에 <b>\(5\)개의 자리</b>가 생기고,
       각 자리에는 노란 공만 또는 보라 공만 들어간다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 노란 공이 차지하는 자리 수로 분류</div>
    <table class="sol-table">
      <tr><th>노란 자리</th><th>자리 선택</th><th>노란 배분</th><th>보라 배분</th><th>곱</th></tr>
      <tr><td>1</td><td>\({}_5\mathrm C_1=5\)</td><td>1</td><td>\({}_4\mathrm H_4=35\)</td><td>175</td></tr>
      <tr><td>2</td><td>\({}_5\mathrm C_2=10\)</td><td>\({}_2\mathrm H_2=3\)</td><td>\({}_3\mathrm H_4=15\)</td><td>450</td></tr>
      <tr><td>3</td><td>\({}_5\mathrm C_3=10\)</td><td>\({}_3\mathrm H_1=3\)</td><td>\({}_2\mathrm H_4=5\)</td><td>150</td></tr>
      <tr><td>4</td><td>\({}_5\mathrm C_4=5\)</td><td>1</td><td>1</td><td>5</td></tr>
    </table>
    <p>(선택한 자리마다 최소 1개씩 놓은 뒤 남은 공을 그 자리들에 중복조합으로 분배)</p>
  </div>
  <div class="sol-final">\(175+450+150+5=\mathbf{780}\)</div>
` },

"2022_mock06/common/q03": { answer: 1, html: String.raw`
  <div class="sol-box">반지름이 \(13\)인 원과 \(\theta\)의 동경이 만나는 점의 좌표를 \(\tan\theta=\dfrac{12}{5}\)와 제3사분면 조건으로 정한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> \(x^2+y^2=169\)인 원과 \(\theta\)가 나타내는 동경이 만나는 점을 \(A\)라 한다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span> \(\tan\theta=\dfrac{12}{5}\)이고 \(\pi&lt;\theta&lt;\dfrac{3}{2}\pi\)이므로 점 \(A\)의 좌표는 \((-5,-12)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   \sin\theta+\cos\theta=-\frac{12}{13}-\frac{5}{13}=-\frac{17}{13}.
   $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2022_mock06/common/q04": { answer: 1, html: String.raw`
  <div class="sol-box">주어진 그래프에서 \(x\to0^-\)일 때와 \(x\to2^+\)일 때의 함수값을 각각 읽는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그래프에서</div>
    $$
   \lim_{x\to0^-}f(x)=-2.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 그래프에서</div>
    $$
   \lim_{x\to2^+}f(x)=0.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   \lim_{x\to0^-}f(x)+\lim_{x\to2^+}f(x)=-2+0=-2.
   $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2022_mock06/common/q05": { answer: 3, html: String.raw`
  <div class="sol-box">\(g(x)=(x^2+3)f(x)\)를 곱의 미분법으로 미분한 뒤 \(x=1\)을 대입한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법에 의해</div>
    $$
   g'(x)=2xf(x)+(x^2+3)f'(x).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입하면</div>
    $$
   g'(1)=2f(1)+4f'(1).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(1)=2\), \(f'(1)=1\)이므로</div>
    $$
   g'(1)=2\times2+4\times1=8.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_mock06/common/q07": { answer: 2, html: String.raw`
  <div class="sol-box">\(S_3-S_2=a_3\)을 이용하여 공차를 구한 뒤 등차수열의 합 공식을 적용한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> 수열 \(\{a_n\}\)의 공차를 \(d\)라 하자.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_6=2(S_3-S_2)\)에서</div>
    $$
   a_6=2a_3.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   a_1+5d=2(a_1+2d)
   $$
    <p>이므로 \(a_1=d\)이다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">4</span> \(a_1=2\)이므로 \(d=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 따라서</div>
    $$
   S_{10}=\frac{10\{4+(10-1)\times2\}}{2}
   =5\times22=110.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_mock06/common/q08": { answer: 4, html: String.raw`
  <div class="sol-box">\(x\ne a\)에서는 다항함수이므로 연속이다. \(x=a\)에서 \(\{f(x)\}^2\)의 좌극한과 함숫값을 같게 둔다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> \(x\ne a\)에서 \(\{f(x)\}^2\)은 다항함수이므로 연속이다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span> 따라서 실수 전체에서 연속이려면 \(x=a\)에서 연속이면 된다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 좌극한은</div>
    $$
   \lim_{x\to a^-}\{f(x)\}^2=(-2a+6)^2.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 우극한과 함숫값은</div>
    $$
   \lim_{x\to a^+}\{f(x)\}^2=\{f(a)\}^2=(2a-a)^2=a^2.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 따라서</div>
    $$
   (-2a+6)^2=a^2.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 즉,</div>
    $$
   -2a+6=a\quad\text{또는}\quad -2a+6=-a
   $$
    <p>이므로</p>
    $$
   a=2\quad\text{또는}\quad a=6.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 모든 상수 \(a\)의 값의 합은</div>
    $$
   2+6=8.
   $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2022_mock06/common/q09": { answer: 5, html: String.raw`
  <div class="sol-box">점화식을 역으로 바꾸어 \(a_{12}\)에서 앞 항들을 차례로 구하고 반복되는 네 항의 패턴을 확인한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 주어진 점화식에서</div>
    $$
   a_n=
   \begin{cases}
   \dfrac{1}{a_{n+1}} & (n\text{이 홀수인 경우}),\\
   \dfrac{a_{n+1}}8 & (n\text{이 짝수인 경우})
   \end{cases}
   $$
    <p>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_{12}=\dfrac12\)이므로 순서대로 구하면</div>
    $$
   a_{11}=2,\qquad a_{10}=\frac14,\qquad a_9=4,\qquad a_8=\frac12.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서 수열의 항들은</div>
    $$
   4,\ \frac14,\ 2,\ \frac12
   $$
    <p>이 반복해서 나타난다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 그러므로</div>
    $$
   a_1+a_4=4+\frac12=\frac92.
   $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2022_mock06/common/q10": { answer: 2, html: String.raw`
  <div class="sol-box">두 로그함수의 교점 조건을 \(x^2+3x=n\)으로 바꾼 뒤, \(y=x^2+3x\;(x&gt;0)\)의 그래프에서 \(1&lt;x&lt;2\) 조건을 적용한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 함수를 연립하면</div>
    $$
   \log_n x=-\log_n(x+3)+1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   \log_n x+\log_n(x+3)=1
   $$
    <p>이므로</p>
    $$
   \log_n(x^2+3x)=1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   x^2+3x=n\qquad(\text{단, }x&gt;0).
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">4</span> \(y=x^2+3x\;(x&gt;0)\)의 그래프와 \(y=n\)의 교점의 \(x\)좌표가 \(1\)보다 크고 \(2\)보다 작아야 하므로</p>
    $$
   4&lt;n&lt;10.
   $$
    <figure class="sol-fig"><img src="sol/2022_mock06_common_q10.png" alt="y=x^2+3x (x>0)의 그래프와 수평선 y=n"><figcaption>\(x=1,2\)에서 함숫값이 각각 \(4,10\)이므로 \(4&lt;n&lt;10\)</figcaption></figure>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 따라서</div>
    $$
   n=5,6,7,8,9
   $$
    <p>이고, 모든 \(n\)의 값의 합은</p>
    $$
   5+6+7+8+9=35.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_mock06/common/q11": { answer: 2, html: String.raw`
  <div class="sol-box">먼저 한 주기 안의 두 구간 \([-1,0]\), \([0,1]\)에서 적분값을 구한 뒤, 주기 \(2\)를 이용해 \([-3,2]\)를 같은 적분 구간들로 나눈다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가)에 의해</div>
    $$
   \int_{-1}^{0}g(x)\,dx
   =\int_{-1}^{0}\{-f(x+1)+1\}\,dx
   =-\int_{-1}^{0}f(x+1)\,dx+1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(y=f(x+1)\)의 그래프는 \(y=f(x)\)를 \(x\)축 방향으로 \(-1\)만큼 평행이동한 것이므로</div>
    $$
   \int_{-1}^{0}f(x+1)\,dx=\int_0^1f(x)\,dx=\frac16.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   \int_{-1}^{0}g(x)\,dx=-\frac16+1=\frac56.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(g(x+2)=g(x)\)이므로</div>
    $$
   \int_{-3}^{-2}g(x)\,dx
   =\int_{-1}^{0}g(x)\,dx
   =\int_1^2g(x)\,dx
   =\frac56.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 또한</div>
    $$
   \int_{-2}^{-1}g(x)\,dx
   =\int_0^1g(x)\,dx
   =\frac16.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 그러므로</div>
    $$
   \int_{-3}^{2}g(x)\,dx
   =3\times\frac56+2\times\frac16
   =\frac{17}{6}.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_mock06/common/q12": { answer: 3, html: String.raw`
  <div class="sol-box">공통각을 \(\theta\)로 놓고, 먼저 코사인법칙으로 \(BC\), \(AD\), \(CD\)를 구한다. 이어서 삼각형 \(BCD\)에서 각을 구하고 삼각형 \(DBE\)에 사인법칙을 적용한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\triangle ABD\)는 이등변삼각형이므로</div>
    $$
   \overline{BD}=4.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span> \(\angle BAC=\angle BDA=\angle BED=\theta\)라 하자.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\cos\theta=\dfrac18\)에서</div>
    $$
   \sin\theta=\frac{3\sqrt7}{8}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(\triangle ABC\)에서 코사인법칙을 이용하면</div>
    $$
   \overline{BC}^{\,2}=4^2+5^2-2\times4\times5\times\frac18=36,
   $$
    <p>따라서</p>
    $$
   \overline{BC}=6.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(\overline{AD}=2\overline{AB}\cos\theta\)이므로</div>
    $$
   \overline{AD}=2\times4\times\frac18=1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 따라서</div>
    $$
   \overline{CD}=\overline{AC}-\overline{AD}=5-1=4.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> \(\triangle BCD\)에서 코사인법칙을 이용하면</div>
    $$
   \cos(\angle DBC)=\frac{4^2+6^2-4^2}{2\times4\times6}=\frac34,
   $$
    <p>따라서</p>
    $$
   \sin(\angle DBC)=\frac{\sqrt7}{4}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">8</span> \(\triangle DBE\)에서 사인법칙을 이용하면</div>
    $$
   \frac{\overline{DE}}{\sin(\angle DBE)}=\frac4{\sin\theta}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">9</span> 그러므로</div>
    $$
   \overline{DE}=4\times\sin(\angle DBE)\times\frac1{\sin\theta}
   =4\times\frac{\sqrt7}{4}\times\frac8{3\sqrt7}
   =\frac83.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_mock06/common/q13": { answer: 5, html: String.raw`
  <div class="sol-box">주기 \(1\)인 함수에서 \(\sqrt{k}\)가 정수인 경우와 정수가 아닌 경우로 나누어 \(f(\sqrt{k})\)를 정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 주어진 정의와 주기성에 의해</div>
    $$
   f(x)=
   \begin{cases}
   1 & (x\text{가 정수인 경우}),\\
   3 & (x\text{가 정수가 아닌 경우})
   \end{cases}
   $$
    <p>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(1\le k\le20\)에서 \(\sqrt{k}\)가 정수인 경우는</div>
    $$
   k=1,4,9,16
   $$
    <p>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   \sum_{k=1}^{20}\frac{k f(\sqrt{k})}{3}
   =\frac{1+4+9+16}{3}
   +\frac{\{(1+2+\cdots+20)-(1+4+9+16)\}\times3}{3}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 정리하면</div>
    $$
   10+\frac{20\times21}{2}-30
   =10+210-30=190.
   $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2022_mock06/common/q14": { answer: 3, html: String.raw`
  <div class="sol-box">\(h(x)=f(x-p)+q\)로 놓아 \(g(x)\)를 \(|h(x)|\)와 연결한다. 연속성으로 \(h(0)=0\)을 얻고, \(f\)의 극대·극소를 이용해 가능한 평행이동 두 경우를 검토한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> \(h(x)=f(x-p)+q\)라 하자.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (가)에서</div>
    $$
   xg(x)=|xh(x)|
   $$
    <p>이므로</p>
    $$
   g(x)=
   \begin{cases}
   -|h(x)| & (x&lt;0),\\
   g(0) & (x=0),\\
   |h(x)| & (x&gt;0)
   \end{cases}
   $$
    <p>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 함수 \(g(x)\)가 실수 전체에서 연속이므로</div>
    $$
   |h(0)|=-|h(0)|=g(0).
   $$
    <p>따라서</p>
    $$
   h(0)=g(0)=0.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">4</span> 즉, 함수 \(h(x)\)는 함수 \(f(x)\)를 \(x\)축 방향으로 \(p\), \(y\)축 방향으로 \(q\)만큼 평행이동하여 원점을 지나게 한 함수이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 미분하면</div>
    $$
   f'(x)=3x^2-6x-9=3(x+1)(x-3).
   $$
    <p>이를 이용해 \(y=f(x)\)의 그래프의 개형을 그린다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 미분불가능한 점이 어디인지 정리</div>
    <p>\(x&lt;0\)에서 \(g(x)=-|h(x)|\), \(x&gt;0\)에서 \(g(x)=|h(x)|\)이므로 \(g(x)\)는 \(h(x)\)의 <b>\(0\)이 아닌 단순근</b>에서만 미분불가능하다. (\(x=0\)에서는 좌우의 두 식이 매끄럽게 이어져 언제나 미분가능하다.)</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">7</span> 따라서 조건 (나)를 만족시키려면 삼차함수 \(h(x)\)의 세 근 중 \(0\)이 아닌 단순근이 오직 하나여야 하므로, \(h(x)\)는 중근을 가져야 한다. 즉 \(h(x)\)의 극댓값 또는 극솟값이 \(0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">8</span> \(f(-1)=-7\), \(f(3)=-39\)이므로 두 경우로 나뉜다</div>
    <p>(ⅰ) 극솟값이 \(0\)일 때 \(q=39\)이고, \(f(-p)=-39\)에서 \(f(x)+39=(x-3)^2(x+3)\)이므로 \(p&gt;0\)에서 \(p=3\)이다. 이때</p>
    $$
   h(x)=x(x-6)^2
   $$
    <p>이므로 \(0\)은 단순근이지만 \(0\)이 아닌 근 \(6\)은 중근이다. 따라서 \(g(x)\)는 모든 점에서 미분가능하여 조건 (나)를 만족시키지 않는다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">9</span> (ⅱ) 극댓값이 \(0\)일 때 \(q=7\)이고, \(f(-p)=-7\)에서 \(f(x)+7=(x+1)^2(x-5)\)이므로 \(p&gt;0\)에서 \(p=1\)이다. 이때</p>
    $$
   h(x)=x^2(x-6)
   $$
    <p>이므로 \(0\)이 아닌 단순근은 \(6\) 하나뿐이고, \(g(x)\)는 \(x=6\)에서만 미분불가능하다.</p>
    <figure class="sol-fig"><img src="sol/2022_mock06_common_q14.png" alt="두 경우의 y=g(x) 그래프 개형 비교"><figcaption>( i )은 \(x=6\)이 중근이라 매끄럽고, ( ii )는 \(x=6\)에서 첨점이 생긴다</figcaption></figure>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">10</span> 따라서</div>
    $$
   p+q=1+7=8.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_mock06/common/q16": { answer: 2, html: String.raw`
  <div class="sol-box">로그의 덧셈을 진수의 곱으로 합친다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 로그의 성질을 이용하면</div>
    $$
   \log_4\frac23+\log_4 24
   =\log_4\left(\frac23\times24\right).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   \log_4 16=2.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{2}\)</div>
` },

"2022_mock06/common/q17": { answer: 11, html: String.raw`
  <div class="sol-box">도함수의 그래프에서 부호가 음에서 양으로 바뀌는 점을 찾아 극소점의 \(x\)좌표를 정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미분하면</div>
    $$
   f'(x)=3x^2-3.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span> \(x=1\)에서 \(f'(x)\)의 부호가 \((- )\to(+ )\)로 바뀌므로 \(f(x)\)는 \(x=1\)에서 극소이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   a=1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 또한</div>
    $$
   f(a)=1-3+12=10.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 그러므로</div>
    $$
   a+f(a)=1+10=11.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{11}\)</div>
` },

"2022_mock06/common/q18": { answer: 4, html: String.raw`
  <div class="sol-box">첫째항과 공비를 두고 두 조건에서 \(r^2=\dfrac13\)을 얻은 뒤 \(a_6=a_2r^4\)로 계산한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> 수열 \(\{a_n\}\)의 첫째항을 \(a_1\), 공비를 \(r\)라 하자.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_2=36\)에서</div>
    $$
   a_1r=36.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_7=\dfrac13a_5\)에서</div>
    $$
   a_1r^6=\frac13a_1r^4
   $$
    <p>이므로</p>
    $$
   r^2=\frac13.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 따라서</div>
    $$
   a_6=a_1r^5=(a_1r)r^4
   =36\times\frac19=4.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{4}\)</div>
` },

"2022_mock06/common/q20": { answer: 8, html: String.raw`
  <div class="sol-box">적분식을 두 항으로 나누어 미분하고, \(h(x)=\int_a^x\{f(t)\}^4dt\)로 놓는다. \(h(x)=0\)의 유일한 근이 \(x=a\)임을 이용하여 \(g'(x)\)의 근 구조를 판단한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미분하면</div>
    $$
   f'(x)=3x^2-24x+45=3(x-3)(x-5).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(g(x)\)를</div>
    $$
   g(x)=f(x)\int_a^x\{f(t)\}^4\,dt-\int_a^x\{f(t)\}^5\,dt
   $$
    <p>로 나타낸다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 미분하면</div>
    $$
   \begin{aligned}
   g'(x)
   &=f'(x)\int_a^x\{f(t)\}^4\,dt+f(x)\{f(x)\}^4-\{f(x)\}^5\\
   &=3(x-3)(x-5)\int_a^x\{f(t)\}^4\,dt.
   \end{aligned}
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">4</span></p>
    $$
   h(x)=\int_a^x\{f(t)\}^4\,dt
   $$
    <p>라 하면</p>
    $$
   h(a)=0,\qquad h'(x)=\{f(x)\}^4\ge0.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">5</span> \(h(x)\)는 증가함수이므로 \(x=a\)는 방정식 \(h(x)=0\)의 유일한 실근이다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">6</span> \(g(x)\)가 오직 하나의 극값을 가지려면 방정식 \(g'(x)=0\)은 중근이 아닌 근이 하나만 존재해야 하므로</p>
    $$
   a=3\quad\text{또는}\quad a=5
   $$
    <p>이어야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 따라서 모든 \(a\)의 값의 합은</div>
    $$
   3+5=8.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{8}\)</div>
` },

"2022_mock06/calculus/q23": { answer: 2, html: String.raw`
  <div class="sol-box">분모의 켤레식을 곱하여 유리화한 뒤, 분자와 분모를 \(n\)으로 나누어 극한을 구한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분모를 유리화하면</div>
    $$
   \begin{aligned}
   \lim_{n\to\infty}\frac{1}{\sqrt{n^2+n+1}-n}
   &=\lim_{n\to\infty}
   \frac{\sqrt{n^2+n+1}+n}
   {(\sqrt{n^2+n+1}-n)(\sqrt{n^2+n+1}+n)}\\
   &=\lim_{n\to\infty}\frac{\sqrt{n^2+n+1}+n}{n+1}.
   \end{aligned}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 분자와 분모를 \(n\)으로 나누면</div>
    $$
   \lim_{n\to\infty}
   \frac{\sqrt{1+\frac1n+\frac1{n^2}}+1}{1+\frac1n}=2.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_mock06/calculus/q24": { answer: 2, html: String.raw`
  <div class="sol-box">\(dx/dt\)와 \(dy/dt\)를 각각 구하고 \(\dfrac{dy}{dx}=\dfrac{dy/dt}{dx/dt}\)를 이용한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   \frac{dy}{dt}=\cos t,\qquad \frac{dx}{dt}=e^t-\sin t.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   \frac{dy}{dx}
   =\frac{\frac{dy}{dt}}{\frac{dx}{dt}}
   =\frac{\cos t}{e^t-\sin t}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=0\)을 대입하면</div>
    $$
   \left.\frac{dy}{dx}\right|_{t=0}
   =\frac1{1-0}=1.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_mock06/calculus/q25": { answer: 4, html: String.raw`
  <div class="sol-box">곡선의 \(y\)축 대칭성을 이용하여 오른쪽 곡선 \(y=e^x\)에 원점에서 그은 접선의 접점을 구한다. 두 접선의 기울기 \(e\), \(-e\)로 두 직선 사이의 각을 계산한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> 곡선 \(y=e^{|x|}\)은 \(y\)축에 대하여 대칭이고 원점도 \(y\)축 위의 점이므로, 두 접선도 \(y\)축에 대하여 대칭이다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span> 원점에서 \(y=e^x\)에 접선을 그었을 때 접점을 \((t,e^t)\)라 하면, 이 점에서의 접선은</p>
    $$
   y-e^t=e^t(x-t)
   $$
    <p>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 이 접선이 원점을 지나므로</div>
    $$
   -e^t=-e^t t
   $$
    <p>이고, 따라서</p>
    $$
   t=1.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">4</span> 두 접선의 기울기는 각각 \(e\), \(-e\)이다.</p>
    <figure class="sol-fig"><img src="sol/2022_mock06_calculus_q25.png" alt="y=e^|x|와 원점에서 그은 두 접선, 두 접선이 이루는 예각"><figcaption>접점은 \((1,e)\), \((-1,e)\)이고 두 접선이 이루는 예각이 \(\theta\)</figcaption></figure>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 그러므로 두 접선이 이루는 예각 \(\theta\)에 대하여</div>
    $$
   \tan\theta
   =\left|\frac{e-(-e)}{1+e(-e)}\right|
   =\frac{2e}{e^2-1}.
   $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2022_mock06/calculus/q26": { answer: 3, html: String.raw`
  <div class="sol-box">첫 번째 색칠된 부채꼴의 넓이를 구하고, 사인법칙으로 다음 부채꼴과의 닮음비를 구한다. 넓이비를 공비로 하는 등비급수의 합을 계산한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그림 \(R_1\)의 색칠된 부분의 넓이는</div>
    $$
   \frac12\times1^2\times\frac\pi4=\frac\pi8.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span></p>
    $$
   \angle O_2O_1A_2=\frac\pi6,
   \qquad
   \angle O_2A_2O_1=\frac\pi4.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\triangle O_1O_2A_2\)에서 사인법칙에 의해</div>
    $$
   \frac{\overline{O_2A_2}}{\sin\frac\pi6}
   =\frac{\overline{O_1O_2}}{\sin\frac\pi4}
   $$
    <p>이므로</p>
    $$
   \overline{O_2A_2}=\frac{\sqrt2}{2}.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">4</span> 따라서 두 번째 색칠된 부채꼴과 첫 번째 색칠된 부채꼴의 닮음비는</p>
    $$
   \frac{\sqrt2}{2}:1
   $$
    <p>이고, 넓이비이자 공비는</p>
    $$
   \left(\frac{\sqrt2}{2}\right)^2=\frac12.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 그러므로</div>
    $$
   \lim_{n\to\infty}S_n
   =\frac{\frac\pi8}{1-\frac12}
   =\frac\pi4.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_mock06/calculus/q27": { answer: 4, html: String.raw`
  <div class="sol-box">양의 실근이 정확히 세 개가 되려면 \(x&gt;0\)에서 두 곡선이 한 점에서 접해야 한다. 접점에서 함수값과 도함수값을 각각 같게 둔다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> 방정식 \(f(x)=g(x)\)의 서로 다른 양의 실근의 개수가 \(3\)이려면 두 곡선 \(y=f(x)\), \(y=g(x)\)가 \(x&gt;0\)인 부분에서 서로 다른 세 교점을 가져야 한다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span> \(y=k\sin x\)는 \(x&gt;0\)에서 주기적으로 증감하므로, 교점이 정확히 세 개가 되려면 두 곡선이 한 점에서 접해야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 접점의 \(x\)좌표를 \(t\)라 하면</div>
    $$
   2\pi&lt;t&lt;\frac{5\pi}{2}
   $$
    <p>이고, 함수값과 도함수값이 같으므로</p>
    $$
   e^t=k\sin t,
   \qquad
   e^t=k\cos t.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 따라서</div>
    $$
   \tan t=1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 주어진 범위에서</div>
    $$
   t=\frac{9\pi}{4}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 그러므로</div>
    $$
   k=\frac{e^t}{\sin t}
   =\frac{e^{\frac{9\pi}{4}}}{\sin\frac{9\pi}{4}}
   =\sqrt2e^{\frac{9\pi}{4}}.
   $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2022_mock06/calculus/q28": { answer: 1, html: String.raw`
  <div class="sol-box">각의 관계로 두 삼각형의 넓이를 \(\theta\)의 삼각함수로 나타낸다. 사인법칙으로 \(QR\)을 구한 후 표준 삼각함수 극한을 적용한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\angle AOP=\pi-2\theta\)이므로</div>
    $$
   f(\theta)
   =\frac12\times1\times1\times\sin(\pi-2\theta)
   =\frac12\sin2\theta.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span></p>
    $$
   \angle OQB=\frac\pi2-2\theta
   $$
    <p>이므로</p>
    $$
   \angle PQR=\frac\pi4-\theta,
   \qquad
   \angle QPR=\theta.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   \angle PRQ=\frac{3\pi}{4}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(\triangle QOB\)에서</div>
    $$
   \cos2\theta=\frac1{\overline{OQ}}
   $$
    <p>이므로</p>
    $$
   \overline{OQ}=\frac1{\cos2\theta},
   \qquad
   \overline{PQ}=\frac1{\cos2\theta}-1
   =\frac{1-\cos2\theta}{\cos2\theta}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(\triangle PQR\)에서 사인법칙에 의해</div>
    $$
   \frac{\overline{QR}}{\sin\theta}
   =\frac{\overline{PQ}}{\sin\frac{3\pi}{4}}.
   $$
    <p>따라서</p>
    $$
   \overline{QR}
   =\sqrt2\sin\theta\times
   \frac{1-\cos2\theta}{\cos2\theta}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 그러므로</div>
    $$
   \begin{aligned}
   g(\theta)
   &=\frac12\overline{PQ}\,\overline{QR}\sin(\angle PQR)\\
   &=\frac{\sqrt2}{2}
   \left(\frac{1-\cos2\theta}{\cos2\theta}\right)^2
   \sin\theta\sin\left(\frac\pi4-\theta\right).
   \end{aligned}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 따라서</div>
    $$
   \begin{aligned}
   \lim_{\theta\to0^+}\frac{g(\theta)}{\theta^4f(\theta)}
   &=\lim_{\theta\to0^+}
   \frac{
   \frac{\sqrt2}{2}
   \left(\frac{1-\cos2\theta}{\cos2\theta}\right)^2
   \sin\theta\sin\left(\frac\pi4-\theta\right)
   }{
   \frac12\theta^4\sin2\theta
   }\\
   &=\lim_{\theta\to0^+}
   \left\{
   \frac{\sqrt2\sin\left(\frac\pi4-\theta\right)}{\cos^22\theta}
   \times\frac{\sin\theta}{\sin2\theta}
   \times\left(\frac{1-\cos2\theta}{\theta^2}\right)^2
   \right\}\\
   &=1\times\frac12\times4=2.
   \end{aligned}
   $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2022_mock06/prob_stat/q23": { answer: 4, html: String.raw`
  <div class="sol-box">이항정리의 일반항에서 \(x^3\)항에 해당하는 항을 선택한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이항정리에 의해</div>
    $$
   (2x+1)^5=\sum_{r=0}^{5}\binom5r(2x)^r1^{5-r}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x^3\)항은</div>
    $$
   \binom53(2x)^3
   $$
    <p>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서 \(x^3\)의 계수는</div>
    $$
   \binom53\times2^3=80.
   $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2022_mock06/prob_stat/q24": { answer: 2, html: String.raw`
  <div class="sol-box">진로활동 B를 선택한 사건을 조건으로 하여 1학년일 조건부확률을 계산한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> 임의로 선택한 학생이 진로활동 B를 선택한 사건을 \(X\), 1학년인 사건을 \(Y\)라 하자.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건부확률의 정의에 의해</div>
    $$
   P(Y\mid X)=\frac{P(X\cap Y)}{P(X)}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 표에서</div>
    $$
   P(X\cap Y)=\frac5{20},
   \qquad
   P(X)=\frac9{20}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 따라서</div>
    $$
   P(Y\mid X)
   =\frac{\frac5{20}}{\frac9{20}}
   =\frac59.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_mock06/prob_stat/q25": { answer: 3, html: String.raw`
  <div class="sol-box">전체 네 자리 수의 개수를 구한 뒤, \(3500\)보다 큰 수를 천의 자리와 백의 자리 조건에 따라 세 경우로 나눈다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(1,2,3,4,5\)로 만들 수 있는 네 자리 자연수는</div>
    $$
   5^4
   $$
    <p>개이다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span> \(3500\)보다 크기 위해서는 천의 자리 숫자가 \(4,5\)이거나, 천의 자리 숫자가 \(3\)이고 백의 자리 숫자가 \(5\)이어야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> (ⅰ) 천의 자리 숫자가 \(4\)인 경우</div>
    $$
   5^3=125.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> (ⅱ) 천의 자리 숫자가 \(5\)인 경우</div>
    $$
   5^3=125.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">5</span> (ⅲ) 천의 자리와 백의 자리 숫자가 각각 \(3,5\)인 경우</p>
    $$
   5^2=25.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 따라서 구하는 확률은</div>
    $$
   \frac{125+125+25}{5^4}
   =\frac{275}{625}
   =\frac{11}{25}.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_mock06/prob_stat/q26": { answer: 3, html: String.raw`
  <div class="sol-box">노란색 카드가 한 장뿐이므로 세 색을 모두 받는 학생은 정확히 한 명이다. 그 학생을 먼저 고정하고 빨간색과 파란색 카드의 분배를 중복조합으로 계산한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> 노란색 카드가 \(1\)장뿐이므로 \(3\)가지 색의 카드를 각각 한 장 이상 받는 학생은 \(1\)명이다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span> 세 학생을 A, B, C라 하면, A가 세 가지 색의 카드를 한 장 이상 받는 경우의 수를 구한 후 \(3\)배한다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">3</span> (ⅰ) A, B, C가 받는 빨간색 카드의 개수를 각각 \(A_1,B_1,C_1\)이라 하면</p>
    $$
   A_1+B_1+C_1=4,
   \qquad A_1\ge1.
   $$
    <p>경우의 수는</p>
    $$
   {}_3H_3=\binom53=10.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">4</span> (ⅱ) A, B, C가 받는 파란색 카드의 개수를 각각 \(A_2,B_2,C_2\)라 하면</p>
    $$
   A_2+B_2+C_2=2,
   \qquad A_2\ge1.
   $$
    <p>경우의 수는</p>
    $$
   {}_3H_1=3.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">5</span> (ⅲ) 노란색 카드는 \(1\)장이므로 A에게 주어야 한다. 경우의 수는 \(1\)이다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">6</span> 세 가지 색을 모두 받는 학생을 정하는 경우까지 포함하면</p>
    $$
   10\times3\times1\times3=90.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_mock06/prob_stat/q27": { answer: 1, html: String.raw`
  <div class="sol-box">동전 앞면의 개수는 \(1,2,3,4\)만 가능하므로 각 개수별로 주사위 눈의 곱이 같은 경우를 나누어 계산한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> 주사위 눈의 곱은 \(0\)이 될 수 없으므로 동전 앞면의 개수는 \(1,2,3,4\)만 가능하다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span> (ⅰ) 동전 앞면이 \(1\)개인 경우, 주사위의 눈은 \((1,1)\)만 가능하다.</p>
    $$
   \frac16\times\frac16\times\binom41\left(\frac12\right)^4
   =\frac4{36\times2^4}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> (ⅱ) 동전 앞면이 \(2\)개인 경우,</div>
    $$
   1\times2=2\times1=2.
   $$
    <p>따라서</p>
    $$
   \frac16\times\frac16\times\binom42\left(\frac12\right)^4\times2
   =\frac{12}{36\times2^4}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> (ⅲ) 동전 앞면이 \(3\)개인 경우,</div>
    $$
   1\times3=3\times1=3.
   $$
    <p>따라서</p>
    $$
   \frac16\times\frac16\times\binom43\left(\frac12\right)^4\times2
   =\frac8{36\times2^4}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> (ⅳ) 동전 앞면이 \(4\)개인 경우,</div>
    $$
   1\times4=4\times1=2\times2=4.
   $$
    <p>따라서</p>
    $$
   \frac16\times\frac16\times\binom44\left(\frac12\right)^4\times3
   =\frac3{36\times2^4}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 그러므로 구하는 확률은</div>
    $$
   \frac{4+12+8+3}{36\times2^4}
   =\frac3{64}.
   $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2022_mock06/prob_stat/q28": { answer: 5, html: String.raw`
  <div class="sol-box">한 번에 얻을 수 있는 점수 \(0,1,2,3\)으로 합이 \(4\)가 되는 네 점수의 구성을 모두 분류한다. 점수 \(0\)은 실제 주사위 눈이 \(4,5,6\)인 세 경우임을 반영한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> 한 번의 시행에서 얻을 수 있는 점수는 \(1,2,3,0\)점이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 네 점수의 합이 \(4\)가 되는 상황은</div>
    $$
   4=3+1+0+0=2+2+0+0=2+1+1+0=1+1+1+1
   $$
    <p>이다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">3</span> (ⅰ) \(4=3+1+0+0\)인 경우, 주사위의 눈이 \(3,1,4\) 이상, \(4\) 이상이 순서에 관계없이 나오면 되므로</p>
    $$
   1\times1\times3\times3\times\frac{4!}{2!}
   =9\times12=108.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> (ⅱ) \(4=2+2+0+0\)인 경우</div>
    $$
   1\times1\times3\times3\times\frac{4!}{2!2!}
   =9\times6=54.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> (ⅲ) \(4=2+1+1+0\)인 경우</div>
    $$
   1\times1\times1\times3\times\frac{4!}{2!}
   =36.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> (ⅳ) \(4=1+1+1+1\)인 경우</div>
    $$
   1\times1\times1\times1=1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 따라서</div>
    $$
   108+54+36+1=199.
   $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2022_mock06/prob_stat/q29": { answer: 48, html: String.raw`
  <div class="sol-box">전체 원순열에서 \(2\)와 \(6\)이 이웃하는 경우, \(3\)과 \(4\)가 이웃하는 경우를 제외하고 두 조건이 동시에 발생한 경우를 다시 더하는 포함배제를 사용한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(6\)개의 의자를 원형으로 배열하는 전체 경우의 수는</div>
    $$
   (6-1)!=120.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 수의 곱이 \(12\)가 되는 경우는</div>
    $$
   2\times6,
   \qquad
   3\times4
   $$
    <p>이다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">3</span> (ⅰ) \(2\)와 \(6\)이 이웃하는 경우, \(2\)와 \(6\)을 한 묶음으로 보면</p>
    $$
   (5-1)!\times2!=48.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> (ⅱ) \(3\)과 \(4\)가 이웃하는 경우도 같은 방법으로</div>
    $$
   48.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">5</span> (ⅲ) \(2\)와 \(6\)이 이웃하고 \(3\)과 \(4\)도 이웃하는 경우, 두 쌍을 각각 한 묶음으로 보면</p>
    $$
   (4-1)!\times(2!)^2=24.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 따라서 포함배제에 의해 구하는 경우의 수는</div>
    $$
   120-48-48+24=48.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{48}\)</div>
` },

"2022_mock09/common/q01": { answer: 1, html: String.raw`
  <div class="sol-box">네제곱근을 지수로 고쳐 같은 밑의 거듭제곱끼리 계산한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\dfrac{1}{\sqrt[4]{3}}=3^{-\frac14}\)이므로</div>
    $$
   3^{-\frac14}\times 3^{-\frac74}=3^{-\frac14-\frac74}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   3^{-2}=\frac19.
   $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2022_mock09/common/q02": { answer: 5, html: String.raw`
  <div class="sol-box">다항함수를 미분한 뒤 \(x=1\)을 대입한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   f'(x)=6x^2+4.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   f'(1)=6+4=10.
   $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2022_mock09/common/q03": { answer: 5, html: String.raw`
  <div class="sol-box">공비를 \(r\)라 두고 \(a_2a_4\)에서 \(r^4\)을 구한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 등비수열의 공비를 \(r\)라 하면</div>
    $$
   a_2a_4=(a_1r)(a_1r^3)=a_1^2r^4=4r^4=36.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   r^4=9.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 그러므로</div>
    $$
   \frac{a_7}{a_3}=\frac{a_1r^6}{a_1r^2}=r^4=9.
   $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2022_mock09/common/q04": { answer: 4, html: String.raw`
  <div class="sol-box">경계점 \(x=-1\)에서 함숫값과 우극한을 같게 둔다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   f(-1)=\lim_{x\to-1^-}f(x)=-2+a.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span></p>
    $$
   \lim_{x\to-1^+}f(x)=1+5-a=6-a.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 연속이므로</div>
    $$
   -2+a=6-a.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 따라서</div>
    $$
   a=4.
   $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2022_mock09/common/q05": { answer: 3, html: String.raw`
  <div class="sol-box">도함수의 영점을 구해 극대·극소가 되는 \(x\)를 찾고 함숫값을 계산한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   f'(x)=6x^2+6x-12=6(x+2)(x-1).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f'(x)=0\)이 되는 점은 \(x=-2,1\)이므로</div>
    $$
   M=f(-2)=-16+12+24+1=21,
   $$
    $$
   m=f(1)=2+3-12+1=-6.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   M+m=21-6=15.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_mock09/common/q06": { answer: 1, html: String.raw`
  <div class="sol-box">좌변을 통분하여 \(\sin^2\theta\)를 구한 뒤 제2사분면 조건으로 \(\cos\theta\)의 부호를 정한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   \frac{\sin\theta}{1-\sin\theta}-\frac{\sin\theta}{1+\sin\theta}
   =\frac{2\sin^2\theta}{1-\sin^2\theta}=4.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   2\sin^2\theta=4-4\sin^2\theta,
   \qquad \sin^2\theta=\frac23.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\dfrac\pi2&lt;\theta&lt;\pi\)이므로</div>
    $$
   \sin\theta=\frac{\sqrt6}{3},\qquad \cos\theta&lt;0.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 그러므로</div>
    $$
   \cos\theta=-\sqrt{1-\frac23}=-\frac{\sqrt3}{3}.
   $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2022_mock09/common/q07": { answer: 4, html: String.raw`
  <div class="sol-box">각 항을 \(\dfrac1{a_k}-\dfrac1{a_{k+1}}\)로 바꾸어 망원합으로 정리한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   \sum_{k=1}^{n}\frac{a_{k+1}-a_k}{a_ka_{k+1}}
   =\sum_{k=1}^{n}\left(\frac1{a_k}-\frac1{a_{k+1}}\right)
   =\frac1{a_1}-\frac1{a_{n+1}}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 주어진 조건에 의해</div>
    $$
   \frac1{a_1}-\frac1{a_{n+1}}=\frac1n,
   $$
    <p>즉</p>
    $$
   \frac1{a_{n+1}}=\frac1{a_1}-\frac1n.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(n=12\), \(a_1=-4\)를 대입하면</div>
    $$
   \frac1{a_{13}}=-\frac14-\frac1{12}=-\frac13.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 따라서</div>
    $$
   a_{13}=-3.
   $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2022_mock09/common/q08": { answer: 2, html: String.raw`
  <div class="sol-box">두 극한 조건에서 \(f(0),f(1)\)과 두 점에서의 미분계수를 읽고, 두 근을 갖는 삼차함수로 인수분해한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   \lim_{x\to0}\frac{f(x)}x=1
   $$
    <p>에서</p>
    $$
   f(0)=0,\qquad f'(0)=1.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span></p>
    $$
   \lim_{x\to1}\frac{f(x)}{x-1}=1
   $$
    <p>에서</p>
    $$
   f(1)=0,\qquad f'(1)=1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 삼차함수를</div>
    $$
   f(x)=x(x-1)(ax+b)
   $$
    <p>로 놓으면</p>
    $$
   f'(0)=-b=1,
   \qquad
   f'(1)=a+b=1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 따라서</div>
    $$
   a=2,\qquad b=-1,
   $$
    <p>이므로</p>
    $$
   f(x)=x(x-1)(2x-1).
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">5</span></p>
    $$
   f(2)=2\times1\times3=6.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_mock09/common/q09": { answer: 3, html: String.raw`
  <div class="sol-box">속도를 미분하여 \(k\)를 구하고, 해당 구간에서 속도의 부호를 확인한 뒤 절댓값 적분으로 이동거리를 구한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 가속도를 \(a(t)\)라 하면</div>
    $$
   a(t)=v'(t)=-12t^2+24t.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span></p>
    $$
   a(k)=-12k^2+24k=12
   $$
    <p>에서</p>
    $$
   k=1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서 \(t=3\)에서 \(t=4\)까지의 이동거리 \(l\)은</div>
    $$
   l=\int_3^4|-4t^3+12t^2|\,dt.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 이 구간에서 속도가 음수이므로</div>
    $$
   l=\int_3^4(4t^3-12t^2)\,dt
   =\left[t^4-4t^3\right]_3^4.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">5</span></p>
    $$
   l=(256-256)-(81-108)=27.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_mock09/common/q10": { answer: 3, html: String.raw`
  <div class="sol-box">사인함수의 주기와 \(\sin(b\pi x)=1\)이 되는 두 점의 좌표를 이용하여 넓이 조건과 기울기 조건을 연립한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(y=a\sin(b\pi x)\)의 주기는</div>
    $$
   \frac{2\pi}{b\pi}=\frac2b.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 직선 \(y=a\)와 만나는 두 점은</div>
    $$
   A\left(\frac1{2b},a\right),\qquad
   B\left(\frac5{2b},a\right).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 삼각형의 넀이가 \(5\)이므로</div>
    $$
   \frac12\times\frac4{2b}\times a=\frac ab=5.\tag{ㄱ}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 직선 \(OA\), \(OB\)의 기울기는 각각</div>
    $$
   2ab,\qquad \frac{2ab}{5}.
   $$
    <p>따라서</p>
    $$
   2ab\times\frac{2ab}{5}=\frac54.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> (ㄱ)에서 \(a=5b\)이므로</div>
    $$
   \frac45(5b)^2b^2=\frac54,
   \qquad b^4=\frac1{16}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> \(b&gt;0\)이므로</div>
    $$
   b=\frac12,
   \qquad a=\frac52.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 따라서</div>
    $$
   a+b=3.
   $$
    <figure class="sol-fig"><img src="sol/2022_mock09_common_q10.png" alt="y=a sin(bπx)와 직선 y=a, 삼각형 OAB"><figcaption>\(y=a\)와 만나는 두 점은 \(A\left(\dfrac{1}{2b},a\right)\), \(B\left(\dfrac{5}{2b},a\right)\)</figcaption></figure>
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_mock09/common/q11": { answer: 4, html: String.raw`
  <div class="sol-box">주어진 항등식에 \(x=1\)을 대입하고, 양변을 미분하여 \(f(x)\)의 식을 구한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 주어진 식을</div>
    $$
   xf(x)=2x^3+ax^2+3a+\int_1^x f(t)\,dt\tag{ㄱ}
   $$
    <p>라 하자.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> (ㄱ)에 \(x=1\)을 대입하면</div>
    $$
   f(1)=4a+2.\tag{ㄴ}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> (ㄱ)의 양변을 \(x\)에 대하여 미분하면</div>
    $$
   f(x)+xf'(x)=6x^2+2ax+f(x),
   $$
    <p>따라서</p>
    $$
   f'(x)=6x+2a.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 적분하면</div>
    $$
   f(x)=3x^2+2ax+C
   $$
    <p>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(x=1\)을 대입하여</div>
    $$
   f(1)=3+2a+C.
   $$
    <p>이를 (ㄴ)과 비교하면</p>
    $$
   C=2a-1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 따라서</div>
    $$
   f(x)=3x^2+2ax+2a-1.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">7</span></p>
    $$
   \int_0^1f(t)\,dt
   =\int_0^1(3t^2+2at+2a-1)\,dt
   =3a.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">8</span> \(f(1)=\displaystyle\int_0^1f(t)\,dt\)이므로</div>
    $$
   3+2a+2a-1=3a,
   \qquad a=-2.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">9</span></p>
    $$
   f(3)=27+6a+2a-1=8a+26=10.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">10</span> 따라서</div>
    $$
   a+f(3)=-2+10=8.
   $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2022_mock09/common/q12": { answer: 2, html: String.raw`
  <div class="sol-box">사인법칙으로 \(BC\)와 \(BD\)를 구한 뒤, 삼각형 \(BCD\)에 코사인법칙을 적용한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 사인법칙에 의해</div>
    $$
   2R=\frac{\overline{BC}}{\sin A}
   =\frac{\overline{BD}}{\sin(\angle BCD)}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   \overline{BC}=2\times2\sqrt7\times\sin\frac\pi3=2\sqrt{21},
   $$
    $$
   \overline{BD}=2\times2\sqrt7\times\frac{2\sqrt7}{7}=8.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">3</span></p>
    $$
   \sin(\angle BCD)=\frac{2\sqrt7}{7}
   $$
    <p>이므로</p>
    $$
   \cos(\angle BCD)=\frac{\sqrt{21}}7
   \qquad\left(\angle BCD&lt;\frac\pi2\right).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(\overline{CD}=x\)라 하고 삼각형 \(BCD\)에 코사인법칙을 적용하면</div>
    $$
   8^2=x^2+(2\sqrt{21})^2
   -2x\cdot2\sqrt{21}\cdot\frac{\sqrt{21}}7.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 정리하면</div>
    $$
   x^2-12x+20=0,
   $$
    <p>따라서</p>
    $$
   x=2\quad\text{또는}\quad x=10.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 두 근 중 어느 것인지 가린다</div>
    <p>네 점 \(A,B,D,C\)는 한 원 위에 있고 사각형 \(ABDC\)가 이 원에 내접하므로 마주 보는 두 각의 합은 \(\pi\)이다. 따라서</p>
    $$
   \angle BDC=\pi-\angle BAC=\pi-\frac\pi3=\frac{2\pi}{3}
   $$
    <p>이므로 \(\cos(\angle BDC)=-\dfrac12\)이다. \(\triangle BCD\)에서 코사인법칙을 쓰면</p>
    $$
   (2\sqrt{21})^2=8^2+x^2-2\times8\times x\times\left(-\frac12\right),
   $$
    <p>즉 \(x^2+8x-20=0\)에서 \(x=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 그러므로</div>
    $$
   \overline{BD}+\overline{CD}=8+2=10.
   $$
    <figure class="sol-fig"><img src="sol/2022_mock09_common_q12.png" alt="원에 내접한 삼각형 ABC와 호 BC 위의 점 D"><figcaption>사각형 \(ABDC\)가 원에 내접하므로 \(\angle BDC=\pi-\angle BAC\)</figcaption></figure>
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_mock09/common/q13": { answer: 2, html: String.raw`
  <div class="sol-box">조건 (가)에서 가능한 \((m,d)\)를 모두 구한 뒤, 부분합의 최솟값이 조건 (나)를 만족하는지 확인한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   |a_m|=|a_{m+3}|
   $$
    <p>에서</p>
    $$
   a_{m+3}=\pm a_m.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span> \(a_{m+3}=a_m\)이면 \(d=0\)이므로 조건 (나)를 만족시키지 못한다. 따라서</p>
    $$
   a_{m+3}=-a_m.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 등차수열의 일반항을 대입하면</div>
    $$
   -45+(m+2)d=45-(m-1)d,
   $$
    <p>따라서</p>
    $$
   (2m+1)d=90.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(m,d\)가 자연수일 때 가능한 순서쌍은</div>
    $$
   (m,d)=(1,30),(2,18),(4,10),(7,6),(22,2).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(a_{m+3}=-a_m\)이므로</div>
    $$
   a_{m+1}&lt;0,
   \qquad a_{m+2}&gt;0.
   $$
    <p>따라서 부분합은 \(n=m+1\)일 때 최소이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 조건 (나)를 만족하려면</div>
    $$
   \sum_{k=1}^{m+1}a_k
   =\frac{(m+1)(-90+md)}2&gt;-100
   $$
    <p>이어야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 가능한 순서쌍 중 이 부등식을 만족하는 것은</div>
    $$
   (1,30),(2,18)
   $$
    <p>뿐이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">8</span> 따라서 구하는 합은</div>
    $$
   30+18=48.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_mock09/common/q14": { answer: 5, html: String.raw`
  <div class="sol-box">\(f'(x)\)를 먼저 결정한 뒤 각 보기에서 미분계수와 정적분을 직접 확인한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 최고차항의 계수가 \(1\)이고 \(f'(0)=f'(2)=0\)이므로</div>
    $$
   f'(x)=3x(x-2).
   $$
    <p>따라서</p>
    $$
   f(x)=x^3-3x^2+C.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄱ: \(p=1\)일 때 \(x&gt;0\)에서</div>
    $$
   g(x)=f(x+1)-f(1).
   $$
    <p>그러므로</p>
    $$
   g'(1)=f'(2)=0.
   $$
    <p>따라서 참이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄴ:</div>
    $$
   \lim_{x\to0^-}g(x)=f(0)-f(0)=0,
   $$
    $$
   \lim_{x\to0^+}g(x)=f(p)-f(p)=0,
   $$
    <p>이고 \(g(0)=0\)이므로 \(g(x)\)는 연속이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(x=0\)에서 미분가능하려면</div>
    $$
   f'(0)=f'(p).
   $$
    <p>따라서</p>
    $$
   p=0\quad\text{또는}\quad p=2.
   $$
    <p>양수인 \(p\)는 \(2\) 하나뿐이므로 참이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> ㄷ: 식을 정리하면</div>
    $$
   g(x)=
   \begin{cases}
   x^3-3x^2 & (x\le0),\\
   x^3+(3p-3)x^2+(3p^2-6p)x & (x&gt;0).
   \end{cases}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 따라서</div>
    $$
   \int_{-1}^{1}g(x)\,dx
   =\int_{-1}^{0}(x^3-3x^2)\,dx
   +\int_0^1\{x^3+(3p-3)x^2+(3p^2-6p)x\}\,dx.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 계산하면</div>
    $$
   -\frac54+
   \left\{\frac14+(p-1)+\left(\frac32p^2-3p\right)\right\}
   =\frac32p^2-2p-2.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">8</span></p>
    $$
   \frac32p^2-2p-2
   =\frac32\left(p+\frac23\right)(p-2).
   $$
    <p>따라서 \(p\ge2\)일 때 적분값은 \(0\) 이상이므로 참이다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">9</span> ㄱ, ㄴ, ㄷ이 모두 옳다.</p>
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2022_mock09/common/q15": { answer: 1, html: String.raw`
  <div class="sol-box">점화식을 함수 \(a_{n+1}=f(a_n)\)로 보고 \(a_5+f(a_5)=0\)에서 \(a_5\)를 결정한 뒤, 그래프를 역추적한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   f(x)=
   \begin{cases}
   -2x-2 & \left(-1\le x&lt;-\dfrac12\right),\\
   2x & \left(-\dfrac12\le x\le\dfrac12\right),\\
   -2x+2 & \left(\dfrac12&lt;x\le1\right)
   \end{cases}
   $$
    <p>라 하면</p>
    $$
   a_{n+1}=f(a_n).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_5+a_6=0\)이므로</div>
    $$
   a_5+f(a_5)=0.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">3</span> \(a_5&gt;0\)이면 \(f(a_5)\ge0\), \(a_5&lt;0\)이면 \(f(a_5)\le0\)이므로 각각 합이 양수 또는 음수이다. 따라서</p>
    $$
   a_5=0.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(a_1&lt;0\)이면 모든 \(a_n\le0\)이 되어</div>
    $$
   \sum_{k=1}^{5}a_k\le0
   $$
    <p>이므로 모순이다. 따라서 \(a_1\ge0\)인 부분만 살핀다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 그래프에서 역상을 차례로 구하면</div>
    $$
   a_{n+1}=0\Rightarrow a_n=0,1,
   $$
    $$
   a_{n+1}=1\Rightarrow a_n=\frac12,
   $$
    $$
   a_{n+1}=\frac12\Rightarrow a_n=\frac14,\frac34,
   $$
    $$
   a_{n+1}=\frac14\Rightarrow a_n=\frac18,\frac78,
   $$
    $$
   a_{n+1}=\frac34\Rightarrow a_n=\frac38,\frac58.
   $$
    <figure class="sol-fig"><img src="sol/2022_mock09_common_q15.png" alt="점화식이 나타내는 함수 y=f(x)의 그래프와 역상 추적"><figcaption>\(f(x)=1\)인 \(x\)는 \(\frac12\) 하나뿐이고, \(f(x)=\frac12\)인 \(x\)는 \(\frac14\), \(\frac34\)의 두 개</figcaption></figure>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 가능한 수열의 앞 다섯 항은 다음과 같다.</div>
    <table class="sol-table">
    <tr><th>\(a_1\)</th><th>\(a_2\)</th><th>\(a_3\)</th><th>\(a_4\)</th><th>\(a_5\)</th></tr>
    <tr><td>\(1\)</td><td>\(0\)</td><td>\(0\)</td><td>\(0\)</td><td>\(0\)</td></tr>
    <tr><td>\(\frac12\)</td><td>\(1\)</td><td>\(0\)</td><td>\(0\)</td><td>\(0\)</td></tr>
    <tr><td>\(\frac14\)</td><td>\(\frac12\)</td><td>\(1\)</td><td>\(0\)</td><td>\(0\)</td></tr>
    <tr><td>\(\frac34\)</td><td>\(\frac12\)</td><td>\(1\)</td><td>\(0\)</td><td>\(0\)</td></tr>
    <tr><td>\(\frac18\)</td><td>\(\frac14\)</td><td>\(\frac12\)</td><td>\(1\)</td><td>\(0\)</td></tr>
    <tr><td>\(\frac78\)</td><td>\(\frac14\)</td><td>\(\frac12\)</td><td>\(1\)</td><td>\(0\)</td></tr>
    <tr><td>\(\frac38\)</td><td>\(\frac34\)</td><td>\(\frac12\)</td><td>\(1\)</td><td>\(0\)</td></tr>
    <tr><td>\(\frac58\)</td><td>\(\frac34\)</td><td>\(\frac12\)</td><td>\(1\)</td><td>\(0\)</td></tr>
    </table>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 따라서 가능한 \(a_1\)의 합은</div>
    $$
   1+\frac12+\frac14+\frac34+\frac18+\frac78+\frac38+\frac58
   =\frac92.
   $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2022_mock09/common/q16": { answer: 2, html: String.raw`
  <div class="sol-box">로그의 계수와 차의 성질을 이용한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   \log_2 100-2\log_2 5
   =\log_2 100-\log_2 5^2.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   \log_2\frac{100}{25}=\log_2 4=2.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{2}\)</div>
` },

"2022_mock09/common/q17": { answer: 8, html: String.raw`
  <div class="sol-box">도함수를 부정적분하고 초기조건으로 적분상수를 정한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   f(x)=2x^4-4x^3+7x+C.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(0)=3\)이므로</div>
    $$
   C=3.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   f(1)=2-4+7+3=8.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{8}\)</div>
` },

"2022_mock09/common/q18": { answer: 9, html: String.raw`
  <div class="sol-box">두 합의 식을 빼서 \(\sum b_k\)를 구한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> 두 식을 각각 (ㄱ), (ㄴ)이라 하면 (ㄱ)－(ㄴ)에서</p>
    $$
   \sum_{k=1}^{10}3b_k=42.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   \sum_{k=1}^{10}b_k=14.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 그러므로</div>
    $$
   \sum_{k=1}^{10}\left(b_k-\frac12\right)
   =\sum_{k=1}^{10}b_k-10\times\frac12
   =14-5=9.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{9}\)</div>
` },

"2022_mock09/common/q19": { answer: 11, html: String.raw`
  <div class="sol-box">평균변화율을 계산하여 \(f'(a)\)와 같게 놓고 이차방정식의 두 근의 곱을 이용한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 평균변화율은</div>
    $$
   \frac{f(4)-f(0)}{4-0}
   =\frac{64-96+20}{4}.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span></p>
    $$
   f'(a)=3a^2-12a+5
   $$
    <p>이므로</p>
    $$
   \frac{64-96+20}{4}=3a^2-12a+5.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 정리하면</div>
    $$
   3a^2-12a+8=0.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 두 근은 모두 \(0&lt;a&lt;4\)이고, 두 근의 곱은</div>
    $$
   \frac83.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 따라서</div>
    $$
   p=3,\qquad q=8,
   $$
    <p>이므로</p>
    $$
   p+q=11.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{11}\)</div>
` },

"2022_mock09/common/q20": { answer: 21, html: String.raw`
  <div class="sol-box">\(f(x)+x\)의 부호가 \(x\)의 부호와 같음을 보인 뒤, 방정식을 조각함수 \(g(x)=k\)의 교점 개수 문제로 바꾼다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   f(x)+x
   =\frac12x^3-\frac92x^2+11x
   =\frac12x(x^2-9x+22).
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span></p>
    $$
   x^2-9x+22
   =\left(x-\frac92\right)^2+\frac74&gt;0
   $$
    <p>이므로 \(f(x)+x\)의 부호는 \(x\)의 부호와 같다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   |f(x)+x|=
   \begin{cases}
   f(x)+x & (x\ge0),\\
   -f(x)-x & (x&lt;0).
   \end{cases}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 원래 방정식은</div>
    $$
   \begin{cases}
   x^3-9x^2+15x=k & (x\ge0),\\
   -7x=k & (x&lt;0)
   \end{cases}
   $$
    <p>로 정리된다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">5</span></p>
    $$
   g(x)=
   \begin{cases}
   x^3-9x^2+15x & (x\ge0),\\
   -7x & (x&lt;0)
   \end{cases}
   $$
    <p>라 두고 \(y=g(x)\)와 \(y=k\)의 교점 개수를 살핀다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">6</span> \(x\ge0\)인 부분의 삼차함수는 \(x=1\)에서 극댓값 \(7\), \(x=5\)에서 극솟값 \(-25\)를 갖는다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 서로 다른 교점이 \(4\)개가 되려면</div>
    $$
   0&lt;k&lt;7.
   $$
  </div>
  <div class="sol-step">
    <figure class="sol-fig"><img src="sol/2022_mock09_common_q20.png" alt="y=g(x)의 그래프와 수평선 y=k"><figcaption>\(0&lt;k&lt;7\)이면 \(x&lt;0\)에서 1개, \(x\ge0\)에서 3개로 모두 4개</figcaption></figure>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">8</span> 정수 \(k\)는</div>
    $$
   1,2,3,4,5,6
   $$
    <p>이므로 그 합은</p>
    $$
   \frac{6\times7}{2}=21.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{21}\)</div>
` },

"2022_mock09/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-box">이항분포의 평균 \(E(X)=np\)를 적용한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   E(X)=60\times\frac14=15.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_mock09/prob_stat/q24": { answer: 3, html: String.raw`
  <div class="sol-box">가능한 순서쌍 \((a,b)\)을 세고, 그중 곱이 \(31\)보다 큰 경우를 나열한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 모든 순서쌍의 개수는</div>
    $$
   4\times4=16.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(ab&gt;31\)인 순서쌍은</div>
    $$
   (5,8),(7,6),(7,8)
   $$
    <p>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서 확률은</div>
    $$
   \frac3{16}.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_mock09/prob_stat/q25": { answer: 2, html: String.raw`
  <div class="sol-box">일반항의 \(x\)의 지수를 정리하여 두 항에 해당하는 \(r\)을 각각 찾는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항은</div>
    $$
   \binom5r(x^2)^{5-r}\left(\frac ax\right)^r
   =\binom5r a^r x^{10-3r}
   \qquad(r=0,1,\ldots,5).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\dfrac1{x^2}\)의 항은</div>
    $$
   10-3r=-2
   $$
    <p>에서 \(r=4\)이므로 계수는</p>
    $$
   \binom54a^4=5a^4.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(x\)의 항은</div>
    $$
   10-3r=1
   $$
    <p>에서 \(r=3\)이므로 계수는</p>
    $$
   \binom53a^3=10a^3.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 두 계수가 같으므로</div>
    $$
   5a^4=10a^3.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(a&gt;0\)이므로</div>
    $$
   a=2.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_mock09/prob_stat/q26": { answer: 1, html: String.raw`
  <div class="sol-box">주사위 눈이 \(5\) 이상인 사건과 흰 공 두 개가 나온 사건을 두고 조건부확률을 계산한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> 주사위 눈이 \(5\) 이상인 사건을 \(X\), 꺼낸 공이 모두 흰색인 사건을 \(Y\)라 하자.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span></p>
    $$
   P(X\mid Y)=\frac{P(X\cap Y)}{P(Y)}
   =\frac{P(X\cap Y)}{P(X\cap Y)+P(X^c\cap Y)}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 각 확률을 대입하면</div>
    $$
   P(X\mid Y)
   =\frac{\frac26\times\frac{\binom22}{\binom62}}
   {\frac26\times\frac{\binom22}{\binom62}
   +\frac46\times\frac{\binom32}{\binom62}}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 따라서</div>
    $$
   P(X\mid Y)=\frac17.
   $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2022_mock09/prob_stat/q27": { answer: 5, html: String.raw`
  <div class="sol-box">\(P(\overline X\le215)\)에서 \(\sigma/\sqrt n\)을 구한 뒤, \(\overline Y\)의 표준편차를 계산하여 표준화한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 확률변수 \(X\)의 표준편차를 \(\sigma\)라 하면</div>
    $$
   X\sim N(220,\sigma^2),
   \qquad
   \overline X\sim N\left(220,\frac{\sigma^2}{n}\right).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 표준화하면</div>
    $$
   P(\overline X\le215)
   =P\left(Z\le\frac{215-220}{\sigma/\sqrt n}\right)
   =P\left(Z\le-\frac{5\sqrt n}{\sigma}\right)
   =0.1587.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 표에서</div>
    $$
   P(Z\le-1)=0.5-0.3413=0.1587
   $$
    <p>이므로</p>
    $$
   -\frac{5\sqrt n}{\sigma}=-1,
   \qquad
   \frac{\sigma}{\sqrt n}=5.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(Y\)의 표준편차는</div>
    $$
   1.5\sigma=\frac32\sigma
   $$
    <p>이므로</p>
    $$
   Y\sim N\left(240,\frac94\sigma^2\right).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 표본의 크기가 \(9n\)이므로</div>
    $$
   \overline Y\sim N\left(240,\frac{\sigma^2}{4n}\right).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 따라서</div>
    $$
   P(\overline Y\ge235)
   =P\left(Z\ge\frac{235-240}{\sigma/(2\sqrt n)}\right)
   =P(Z\ge-2).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 표에서</div>
    $$
   P(Z\ge-2)=0.5+P(0\le Z\le2)
   =0.5+0.4772=0.9772.
   $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2022_mock09/prob_stat/q28": { answer: 4, html: String.raw`
  <div class="sol-box">\(f(3)+f(4)\)가 가능한 경우를 정리하고, 각 \((f(3),f(4))\)에 대해 나머지 함수값의 경우의 수를 곱한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가)에서</div>
    $$
   f(3)+f(4)=5\quad\text{또는}\quad10.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 가능한 합은</div>
    $$
   1+4=2+3=3+2=4+1
   $$
    <p>또는</p>
    $$
   4+6=5+5=6+4.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">3</span> 조건 (나), (다)에 의해 \(f(3)\ge2\), \(f(4)\le5\)이므로 가능한 경우는</p>
    $$
   (f(3),f(4))=(2,3),(3,2),(4,1),(5,5),(6,4).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \((2,3)\)일 때</div>
    $$
   f(1),f(2)&lt;2,
   \qquad
   f(5),f(6)&gt;3
   $$
    <p>이므로 경우의 수는</p>
    $$
   1^2\times3^2=9.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \((3,2)\)일 때</div>
    $$
   2^2\times4^2=64.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> \((4,1)\)일 때</div>
    $$
   3^2\times5^2=225.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> \((5,5)\)일 때</div>
    $$
   4^2\times1^2=16.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">8</span> \((6,4)\)일 때</div>
    $$
   5^2\times2^2=100.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">9</span> 따라서 전체 개수는</div>
    $$
   9+64+225+16+100=414.
   $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2022_mock09/prob_stat/q29": { answer: 78, html: String.raw`
  <div class="sol-box">두 분포가 대칭이므로 평균이 같음을 확인하고, \(E(Y^2)-E(X^2)\)만 계산한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   E(X)=1a+3b+5c+7b+9a=10a+10b+5c.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span></p>
    $$
   E(Y)=1\left(a+\frac1{20}\right)+3b
   +5\left(c-\frac1{10}\right)+7b
   +9\left(a+\frac1{20}\right).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 정리하면</div>
    $$
   E(Y)=10a+10b+5c+\frac1{20}-\frac{10}{20}+\frac9{20}
   =E(X).
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">4</span></p>
    $$
   E(X^2)=1^2a+3^2b+5^2c+7^2b+9^2a
   =82a+58b+25c.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">5</span></p>
    $$
   E(Y^2)
   =1^2\left(a+\frac1{20}\right)+3^2b
   +5^2\left(c-\frac1{10}\right)+7^2b
   +9^2\left(a+\frac1{20}\right).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 정리하면</div>
    $$
   E(Y^2)=E(X^2)+\frac85.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 평균이 같으므로</div>
    $$
   V(Y)=E(Y^2)-\{E(Y)\}^2
   =V(X)+\frac85
   =\frac{31}{5}+\frac85
   =\frac{39}{5}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">8</span> 따라서</div>
    $$
   10V(Y)=10\times\frac{39}{5}=78.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{78}\)</div>
` },

"2022_mock09/calculus/q23": { answer: 3, html: String.raw`
  <div class="sol-box">분자와 분모를 \(3^n\)으로 나누어 \(\left(\dfrac23\right)^n\)의 극한을 이용한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   \lim_{n\to\infty}\frac{2\times3^{n+1}+5}{3^n+2^{n+1}}
   =\lim_{n\to\infty}
   \frac{6+\frac5{3^n}}{1+2\left(\frac23\right)^n}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   \frac{6+0}{1+0}=6.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_mock09/calculus/q24": { answer: 2, html: String.raw`
  <div class="sol-box">첫 번째 식에서 \(\tan\alpha\)를 구한 뒤 탄젠트의 차 공식에 대입한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   2\cos\alpha=3\sin\alpha
   $$
    <p>에서</p>
    $$
   \tan\alpha=\frac{\sin\alpha}{\cos\alpha}=\frac23.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span></p>
    $$
   \tan\beta=\tan\{(\alpha+\beta)-\alpha\}
   $$
    <p>이므로</p>
    $$
   \tan\beta
   =\frac{\tan(\alpha+\beta)-\tan\alpha}
   {1+\tan(\alpha+\beta)\tan\alpha}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 값을 대입하면</div>
    $$
   \tan\beta
   =\frac{1-\frac23}{1+1\times\frac23}
   =\frac{3-2}{3+2}
   =\frac15.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_mock09/calculus/q25": { answer: 4, html: String.raw`
  <div class="sol-box">\(\dfrac{dy}{dx}=\dfrac{dy/dt}{dx/dt}\)를 이용한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   \frac{dx}{dt}=e^t+4e^{-t},
   \qquad
   \frac{dy}{dt}=1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   \frac{dy}{dx}
   =\frac{dy/dt}{dx/dt}
   =\frac1{e^t+4e^{-t}}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=\ln2\)일 때</div>
    $$
   \frac{dy}{dx}
   =\frac1{e^{\ln2}+4e^{-\ln2}}
   =\frac1{2+4\times\frac12}
   =\frac14.
   $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2022_mock09/calculus/q26": { answer: 2, html: String.raw`
  <div class="sol-box">\(x=t\)에서 정사각형 한 변의 길이가 함수값이므로 단면적은 함수값의 제곱이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x=t\)에서 단면의 넓이는</div>
    $$
   \left(\sqrt{\frac{3t+1}{t^2}}\right)^2
   =\frac{3t+1}{t^2}
   =\frac3t+\frac1{t^2}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서 부피는</div>
    $$
   \int_1^2\left(\frac3t+\frac1{t^2}\right)dt.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 계산하면</div>
    $$
   \left[3\ln|t|-\frac1t\right]_1^2
   =\left(3\ln2-\frac12\right)-\left(0-1\right).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 따라서</div>
    $$
   \frac12+3\ln2.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_mock09/calculus/q27": { answer: 3, html: String.raw`
  <div class="sol-box">첫 그림의 색칠 넓이 \(S_1\)을 구하고, 다음 직사각형과의 닮음비로 넓이의 공비를 구해 등비급수의 합을 계산한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 도형에서</div>
    $$
   \overline{C_1E_1}=\sqrt3,
   \qquad
   \overline{C_1F_1}=\frac{\sqrt3}{3}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   \overline{E_1F_1}=\frac{2\sqrt3}{3},
   \qquad
   \overline{F_1H_1}=\frac23.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">3</span></p>
    $$
   \overline{G_1H_1}
   =\frac{2\sqrt3}{3}-\frac23
   =\frac23(\sqrt3-1).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 두 삼각형의 넓이는</div>
    $$
   [\triangle G_1E_1H_1]
   =\frac12\times\frac23(\sqrt3-1)\times\frac{2\sqrt3}{3}
   =\frac{2\sqrt3(\sqrt3-1)}9,
   $$
    $$
   [\triangle H_1F_1D_1]
   =\frac12\times\frac23\times\frac{\sqrt3}{3}
   =\frac{\sqrt3}{9}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 따라서</div>
    $$
   S_1=\frac{2\sqrt3(\sqrt3-1)+\sqrt3}{9}
   =\frac{6-\sqrt3}{9}.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">6</span> \(\overline{AB_2}=a\)라 하면 \(\overline{B_2C_2}=2a\)이다. 점 \(E_1\)에서 \(\overline{B_2C_2}\)에 내린 수선의 발을 \(T\)라 하면</p>
    $$
   \overline{B_1B_2}=\overline{E_1T}=1-a,
   $$
    $$
   \overline{C_2T}=1-a.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 또한</div>
    $$
   \overline{B_1E_1}=\overline{B_2T}=2-\sqrt3.
   $$
    <p>따라서</p>
    $$
   2-\sqrt3+1-a=2a.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">8</span></p>
    $$
   a=\frac{3-\sqrt3}{3}=\frac{\sqrt3-1}{\sqrt3}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">9</span> 두 직사각형의 닮음비가</div>
    $$
   \frac{\sqrt3-1}{\sqrt3}
   $$
    <p>이므로 넓이의 공비는</p>
    $$
   \left(\frac{\sqrt3-1}{\sqrt3}\right)^2
   =\frac{4-2\sqrt3}{3}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">10</span> 따라서</div>
    $$
   \lim_{n\to\infty}S_n
   =\frac{\frac{6-\sqrt3}{9}}{1-\frac{4-2\sqrt3}{3}}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">11</span> 정리하면</div>
    $$
   \frac{\frac13(6-\sqrt3)}{3-4+2\sqrt3}
   =\frac{\frac{\sqrt3}{3}(2\sqrt3-1)}{2\sqrt3-1}
   =\frac{\sqrt3}{3}.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_mock09/calculus/q28": { answer: 1, html: String.raw`
  <div class="sol-box">원 위의 점 \(A'=(0,2)\)를 두고 원주각과 직각삼각형을 이용하여 \(PR=f(\theta)\)를 삼각함수로 나타낸 뒤 치환적분한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(A'(0,2)\)라 하자. \(A'B\)는 지름이므로</div>
    $$
   \angle A'PB=\frac\pi2.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 원주각의 성질에 의해</div>
    $$
   \angle PA'B=\angle PAB=\theta.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">3</span> \(Q\)에서 \(A'P\)에 내린 수선의 발을 \(H\)라 하면 사각형 \(QHPR\)는 직사각형이므로</p>
    $$
   PR=QH.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">4</span></p>
    $$
   \overline{A'Q}=2-2\cos\theta.
   $$
    <p>직각삼각형 \(A'QH\)에서</p>
    $$
   QH=(2-2\cos\theta)\sin\theta.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 따라서</div>
    $$
   f(\theta)=(2-2\cos\theta)\sin\theta.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 그러므로</div>
    $$
   \int_{\pi/6}^{\pi/3}f(\theta)\,d\theta
   =\int_{\pi/6}^{\pi/3}(2-2\cos\theta)\sin\theta\,d\theta.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> \(t=\cos\theta\)로 치환하면</div>
    $$
   =\int_{1/2}^{\sqrt3/2}(2-2t)\,dt.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">8</span></p>
    $$
   =\left[2t-t^2\right]_{1/2}^{\sqrt3/2}
   =\left(\sqrt3-\frac34\right)-\left(1-\frac14\right).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">9</span> 따라서</div>
    $$
   \sqrt3-\frac32
   =\frac{2\sqrt3-3}{2}.
   $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2022_csat/common/q01": { answer: 2, html: String.raw`
  <div class="sol-box">\(4\)를 \(2^2\)로 바꾸어 밑을 \(2\)로 통일한 뒤 지수법칙을 적용한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(4=2^2\)이므로</div>
    $$
   \left(2^{\sqrt3}\times4\right)^{\sqrt3-2}
   =\left(2^{\sqrt3}\times2^2\right)^{\sqrt3-2}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 같은 밑의 거듭제곱을 정리하면</div>
    $$
   \left(2^{\sqrt3+2}\right)^{\sqrt3-2}
   =2^{(\sqrt3+2)(\sqrt3-2)}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   2^{3-4}=2^{-1}=\frac12.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_csat/common/q02": { answer: 5, html: String.raw`
  <div class="sol-box">다항함수를 미분한 후 \(x=1\)을 대입한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   f'(x)=3x^2+6x+1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   f'(1)=3+6+1=10.
   $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2022_csat/common/q03": { answer: 5, html: String.raw`
  <div class="sol-box">첫째항과 공차를 미지수로 두고 두 조건을 연립하여 구한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 등차수열 \(\{a_n\}\)의 공차를 \(d\)라 하면</div>
    $$
   a_2=a_1+d=6. \tag{㉠}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_4+a_6=36\)에서</div>
    $$
   (a_1+3d)+(a_1+5d)=36,
   $$
    <p>즉</p>
    $$
   a_1+4d=18. \tag{㉡}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㉠, ㉡을 연립하면</div>
    $$
   a_1=2,\qquad d=4.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 따라서</div>
    $$
   a_{10}=a_1+9d=2+9\times4=38.
   $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2022_csat/common/q04": { answer: 4, html: String.raw`
  <div class="sol-box">그래프에서 \(x\to-1^-\)일 때의 좌극한과 \(x\to2\)일 때의 극한을 각각 읽는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그래프에서 \(x\to-1^-\)일 때 \(f(x)\to3\)이므로</div>
    $$
   \lim_{x\to-1^-}f(x)=3.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 그래프에서 \(x\to2\)일 때 \(f(x)\to1\)이므로</div>
    $$
   \lim_{x\to2}f(x)=1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   \lim_{x\to-1^-}f(x)+\lim_{x\to2}f(x)=3+1=4.
   $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2022_csat/common/q05": { answer: 1, html: String.raw`
  <div class="sol-box">점화식에 따라 \(a_1\)부터 \(a_8\)까지 차례로 계산한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a_1=1\)이므로</div>
    $$
   a_2=2.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 같은 방법으로</div>
    $$
   a_3=4,\qquad a_4=8.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_4=8\ge7\)이므로</div>
    $$
   a_5=8-7=1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 이후 같은 과정이 반복되어</div>
    $$
   a_6=2,\qquad a_7=4,\qquad a_8=8.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 따라서</div>
    $$
   \sum_{k=1}^{8}a_k
   =2(1+2+4+8)
   =2\times15=30.
   $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2022_csat/common/q06": { answer: 3, html: String.raw`
  <div class="sol-box">삼차함수 \(f(x)=2x^3-3x^2-12x\)의 극댓값과 극솟값을 구한 뒤, 수평선 \(y=-k\)가 그래프와 세 점에서 만나도록 하는 범위를 정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 방정식을</div>
    $$
   2x^3-3x^2-12x=-k \tag{㉠}
   $$
    <p>로 쓰고</p>
    $$
   f(x)=2x^3-3x^2-12x
   $$
    <p>로 둔다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 도함수는</div>
    $$
   f'(x)=6x^2-6x-12=6(x+1)(x-2).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f'(x)=0\)에서</div>
    $$
   x=-1,\qquad x=2.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 증가·감소를 조사하면 \(x=-1\)에서 극대, \(x=2\)에서 극소이고</div>
    $$
   f(-1)=7,\qquad f(2)=-20.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">5</span> ㉠이 서로 다른 세 실근을 가지려면 직선 \(y=-k\)가 그래프와 서로 다른 세 점에서 만나야 하므로</p>
    $$
   -20&lt;-k&lt;7.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 즉,</div>
    $$
   -7&lt;k&lt;20.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 가능한 정수는</div>
    $$
   -6,-5,-4,\ldots,19
   $$
    <p>이므로 그 개수는 \(26\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_csat/common/q07": { answer: 1, html: String.raw`
  <div class="sol-box">주어진 식을 \(\tan\theta\)에 대한 이차방정식으로 바꾸고, 제3사분면 조건으로 가능한 해와 사인·코사인의 부호를 정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 양변에 \(\tan\theta\)를 곱하면</div>
    $$
   \tan^2\theta-6=\tan\theta.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   \tan^2\theta-\tan\theta-6=0,
   $$
    $$
   (\tan\theta+2)(\tan\theta-3)=0.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\pi&lt;\theta&lt;\dfrac{3\pi}{2}\)이므로 \(\tan\theta&gt;0\)이고</div>
    $$
   \tan\theta=3.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 즉,</div>
    $$
   \sin\theta=3\cos\theta.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(\sin^2\theta+\cos^2\theta=1\)에 대입하면</div>
    $$
   10\cos^2\theta=1.
   $$
    <p>제3사분면에서 \(\cos\theta&lt;0\)이므로</p>
    $$
   \cos\theta=-\frac1{\sqrt{10}}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 같은 이유로</div>
    $$
   \sin\theta=-\frac3{\sqrt{10}}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 따라서</div>
    $$
   \sin\theta+\cos\theta
   =-\frac4{\sqrt{10}}
   =-\frac{2\sqrt{10}}5.
   $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2022_csat/common/q08": { answer: 1, html: String.raw`
  <div class="sol-box">두 그래프의 교점을 구하고 전체 넓이의 절반을 \(0\)부터 \(k\)까지의 정적분으로 나타낸다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 그래프의 교점의 \(x\)좌표는</div>
    $$
   x^2-5x=x
   $$
    <p>에서</p>
    $$
   x(x-6)=0,
   $$
    <p>즉 \(x=0,6\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 둘러싸인 전체 넓이는</div>
    $$
   \int_0^6\{x-(x^2-5x)\}\,dx
   =\int_0^6(6x-x^2)\,dx.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 계산하면</div>
    $$
   \left[3x^2-\frac13x^3\right]_0^6=36.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 직선 \(x=k\)가 넓이를 이등분하므로</div>
    $$
   18=\int_0^k(6x-x^2)\,dx
   =3k^2-\frac13k^3.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 정리하면</div>
    $$
   k^3-9k^2+54=0,
   $$
    $$
   (k-3)(k^2-6k-18)=0.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> \(0&lt;k&lt;6\)이므로</div>
    $$
   k=3.
   $$
    <figure class="sol-fig"><img src="sol/2022_csat_common_q08.png" alt="포물선 y=x^2-5x와 직선 y=x가 둘러싼 넓이를 직선 x=k가 이등분"><figcaption>전체 넓이 \(36\)을 직선 \(x=3\)이 \(18\)씩 나눈다</figcaption></figure>
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2022_csat/common/q09": { answer: 4, html: String.raw`
  <div class="sol-box">두 교점의 \(x\)좌표 차를 거리 조건으로 구한 뒤, 각각의 지수함수 식에 대입하여 좌표와 \(k\)를 결정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 점 \(P,Q\)의 \(x\)좌표를 각각 \(p,q\;(p&lt;q)\)라 하면</div>
    $$
   P(p,2p+k),\qquad Q(q,2q+k).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\overline{PQ}=\sqrt5\)이므로</div>
    $$
   (q-p)^2+(2q-2p)^2=5.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   5(q-p)^2=5,
   $$
    <p>\(q-p&gt;0\)이므로</p>
    $$
   q=p+1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 점 \(P\)가 첫 번째 함수의 그래프 위에 있으므로</div>
    $$
   \left(\frac23\right)^{p+3}+1=2p+k. \tag{㉠}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 점 \(Q\)가 두 번째 함수의 그래프 위에 있으므로</div>
    $$
   \left(\frac23\right)^{p+2}+\frac83=2p+k+2. \tag{㉡}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> ㉡에서 ㉠을 빼면</div>
    <p>\(\left(\dfrac23\right)^{p+2}-\left(\dfrac23\right)^{p+3}+\dfrac83-1=2\)이므로 \(\left(\dfrac23\right)^{p+2}\left(1-\dfrac23\right)=\dfrac13\), 즉</p>
    $$
   \left(\frac23\right)^{p+2}=1.
   $$
    <p>따라서</p>
    $$
   p+2=0,\qquad p=-2.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 이를 ㉠에 대입하면</div>
    $$
   \left(\frac23\right)^1+1=-4+k,
   $$
    <p>따라서</p>
    $$
   k=\frac{17}{3}.
   $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2022_csat/common/q10": { answer: 5, html: String.raw`
  <div class="sol-box">두 접선이 일치한다는 조건으로 \(f(0),f(1),f'(0),f'(1)\)을 구하고, 삼차함수의 계수를 결정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 점 \((0,0)\)이 곡선 \(y=f(x)\) 위에 있으므로</div>
    $$
   f(0)=0. \tag{㉠}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 이 점에서의 접선은</div>
    $$
   y=f'(0)x. \tag{㉡}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 점 \((1,2)\)가 곡선 \(y=xf(x)\) 위에 있으므로</div>
    $$
   f(1)=2. \tag{㉢}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(y=xf(x)\)를 미분하면</div>
    $$
   y'=f(x)+xf'(x).
   $$
    <p>따라서 \((1,2)\)에서의 접선은</p>
    $$
   y=\{f'(1)+2\}(x-1)+2
   =\{f'(1)+2\}x-f'(1). \tag{㉣}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> ㉡과 ㉣이 같은 직선이므로</div>
    $$
   f'(1)=0,\qquad f'(0)=2.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">6</span></p>
    $$
   f(x)=ax^3+bx^2+cx+d
   $$
    <p>로 두면 ㉠에서 \(d=0\), ㉢에서</p>
    $$
   a+b+c=2. \tag{㉤}
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">7</span></p>
    $$
   f'(x)=3ax^2+2bx+c.
   $$
    <p>\(f'(0)=2\)에서 \(c=2\), \(f'(1)=0\)에서</p>
    $$
   3a+2b+2=0.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">8</span> ㉤에서 \(a+b=0\)이므로 연립하여</div>
    $$
   a=-2,\qquad b=2.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">9</span> 따라서</div>
    $$
   f'(x)=-6x^2+4x+2
   $$
    <p>이고</p>
    $$
   f'(2)=-24+8+2=-14.
   $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2022_csat/common/q11": { answer: 3, html: String.raw`
  <div class="sol-box">탄젠트함수의 주기와 원점·두 점의 공선 조건을 이용하여 정삼각형의 한 변의 길이를 구한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 함수 \(f(x)=\tan\dfrac{\pi x}{a}\)의 주기는</div>
    $$
   \frac{\pi}{\pi/a}=a.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span> \(f(x)\)는 기함수이므로 그래프는 원점에 대하여 대칭이고, 직선 \(AB\)가 원점을 지나므로 \(B(t,f(t))\)라 하면 \(A(-t,-f(t))\)이다.</p>
    <p>한편 직선 \(AC\)는 \(x\)축에 평행하고 삼각형 \(ABC\)가 정삼각형이므로 직선 \(AB\)가 \(x\)축과 이루는 각의 크기는 \(\dfrac\pi3\)이다. 즉 직선 \(AB\)의 기울기가 \(\sqrt3\)이므로 양수 \(t\)에 대하여</p>
    $$
   B(t,\sqrt3t),\qquad A(-t,-\sqrt3t)
   $$
    <p>로 둘 수 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   \overline{AB}=4t.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">4</span> 함수의 주기에 의해 \(A\)와 같은 함숫값을 갖는 다음 점 \(C\)까지의 수평거리는 \(a\)이다. 정삼각형이므로</p>
    $$
   \overline{AC}=\overline{AB}=4t=a.
   $$
    <p>따라서</p>
    $$
   C(3t,-\sqrt3t).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 점 \(C\)가 그래프 위에 있으므로</div>
    $$
   -\sqrt3t
   =\tan\left(\frac{\pi\cdot3t}{4t}\right)
   =\tan\frac{3\pi}{4}
   =-1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 따라서</div>
    $$
   t=\frac1{\sqrt3}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 정삼각형의 넓이는</div>
    $$
   \frac{\sqrt3}{4}(4t)^2
   =4\sqrt3t^2
   =\frac{4\sqrt3}{3}.
   $$
    <figure class="sol-fig"><img src="sol/2022_csat_common_q11.png" alt="정의역이 제한된 탄젠트함수의 그래프와 정삼각형 ABC"><figcaption>\(A(-t,-\sqrt3t)\), \(B(t,\sqrt3t)\), \(C(3t,-\sqrt3t)\)이고 \(a=4t\)</figcaption></figure>
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_csat/common/q12": { answer: 3, html: String.raw`
  <div class="sol-box">주어진 다항식을 \(f(x)\)에 대하여 인수분해하고, 연속성과 최댓값·최솟값 조건으로 가능한 함수를 결정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 주어진 식을 인수분해하면</div>
    $$
   \{f(x)-1\}\{f(x)+x\}\{f(x)-x\}=0.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서 각 \(x\)에서</div>
    $$
   f(x)=1,\qquad f(x)=-x,\qquad f(x)=x
   $$
    <p>중 하나이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(x=0\)일 때</div>
    $$
   f(0)=1\quad\text{또는}\quad f(0)=0.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">4</span> \(f(0)=1\)인 경우, 연속이고 최댓값이 \(1\)이므로 함수는 계속 \(1\)의 값을 가져야 한다. 이는 최솟값이 \(0\)이라는 조건에 맞지 않는다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 따라서</div>
    $$
   f(0)=0.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> \(f(x)\)를 구간별로 확정한다</div>
    <p>\(x&gt;0\)에서 \(f(x)\)는 \(1\), \(x\), \(-x\) 중 하나인데 \(-x&lt;0\)은 최솟값 \(0\)보다 작으므로 \(f(x)=1\) 또는 \(f(x)=x\)이다. \(f(0)=0\)이고 \(f(x)\)가 연속이므로 \(x=0\) 근처에서는 \(f(x)=x\)이다.</p>
    <p>\(f(x)=x\)에서 \(f(x)=1\)로 바뀔 수 있는 곳은 두 값이 같아지는 \(x=1\)뿐이고, \(x&gt;1\)에서는 \(f(x)=x&gt;1\)이 최댓값 \(1\)을 넘으므로 \(f(x)=1\)이어야 한다. 즉</p>
    $$
   f(x)=x\ (0\le x\le1),\qquad f(x)=1\ (x&gt;1).
   $$
    <p>\(x&lt;0\)에서도 같은 방법으로 \(f(x)=-x\ (-1\le x&lt;0)\), \(f(x)=1\ (x&lt;-1)\)이다. 결국 \(y=f(x)\)의 그래프는 \(|x|\le1\)에서 \(y=|x|\), \(|x|&gt;1\)에서 \(y=1\)이다.</p>
    <figure class="sol-fig"><img src="sol/2022_csat_common_q12.png" alt="|x|<=1에서 y=|x|, |x|>1에서 y=1인 연속함수의 그래프"><figcaption>최댓값 \(1\), 최솟값 \(0\)을 만족시키는 연속함수는 이것뿐이다</figcaption></figure>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 따라서</div>
    $$
   f\left(-\frac43\right)=1,
   \qquad f(0)=0,
   \qquad f\left(\frac12\right)=\frac12.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">8</span> 그러므로</div>
    $$
   1+0+\frac12=\frac32.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_csat/common/q13": { answer: 2, html: String.raw`
  <div class="sol-box">두 직선의 \(y\)절편이 같다는 조건을 정리하여 \(a^b=b^a\)를 얻고, \(f(1)\)과 \(f(2)\)를 연결한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 점 \((a,\log_2a)\), \((b,\log_2b)\)를 지나는 직선의 \(y\)절편은</div>
    $$
   \frac{b\log_2a-a\log_2b}{b-a}.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span> 두 점 \((a,\log_4a)\), \((b,\log_4b)\)를 지나는 직선의 \(y\)절편도 같은 방식으로 나타내고, \(\log_4x=\dfrac12\log_2x\)를 이용하여 주어진 조건을 정리하면</p>
    $$
   b\log a=a\log b.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   \log a^b=\log b^a,
   $$
    <p>즉</p>
    $$
   a^b=b^a. \tag{㉠}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(f(1)=40\)에서</div>
    $$
   a^b+b^a=40.
   $$
    <p>㉠에 의해 두 항이 같으므로</p>
    $$
   a^b=20,
   \qquad b^a=20.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 따라서</div>
    $$
   f(2)=a^{2b}+b^{2a}
   =(a^b)^2+(b^a)^2
   =20^2+20^2=800.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_csat/common/q15": { answer: 2, html: String.raw`
  <div class="sol-box">각의 관계로 두 삼각형의 합동을 확인한 뒤, 직각삼각형과 코사인법칙을 차례로 사용하여 (가), (나), (다)를 구한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그림에서</div>
    $$
   \angle CO_2O_1+\angle O_1O_2D=\pi
   $$
    <p>이므로</p>
    $$
   \theta_3=\frac\pi2+\frac{\theta_2}{2}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\theta_3=\theta_1+\theta_2\)이므로</div>
    $$
   2\theta_1+\theta_2=\pi.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">3</span> 각의 관계와 두 원의 반지름이 같음을 이용하면 삼각형 \(O_1O_2B\)와 삼각형 \(O_2O_1D\)가 합동이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(\overline{AB}=k\)라 하면 주어진 길이의 비와 합동에 의해</div>
    $$
   \overline{BO_2}=\overline{O_1D}=2\sqrt2k.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 직각삼각형 \(ABO_2\)에서</div>
    $$
   \overline{AO_2}
   =\sqrt{k^2+(2\sqrt2k)^2}
   =3k.
   $$
    <p>따라서</p>
    $$
   \text{(가)}=3k.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 또한</div>
    $$
   \angle BO_2A=\frac{\theta_1}{2}
   $$
    <p>이므로</p>
    $$
   \cos\frac{\theta_1}{2}
   =\frac{\overline{BO_2}}{\overline{AO_2}}
   =\frac{2\sqrt2k}{3k}
   =\frac{2\sqrt2}{3}.
   $$
    <p>따라서</p>
    $$
   \text{(나)}=\frac{2\sqrt2}{3}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 삼각형 \(O_2BC\)에서</div>
    $$
   \overline{BC}=k,
   \quad \overline{BO_2}=2\sqrt2k,
   \quad \angle CO_2B=\frac{\theta_1}{2}.
   $$
    <p>\(\overline{O_2C}=x\;(0&lt;x&lt;3k)\)라 하고 코사인법칙을 적용하면</p>
    $$
   k^2=x^2+(2\sqrt2k)^2
   -2x\cdot2\sqrt2k\cdot\frac{2\sqrt2}{3}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">8</span> 정리하면</div>
    $$
   3x^2-16kx+21k^2=0,
   $$
    $$
   (3x-7k)(x-3k)=0.
   $$
    <p>\(0&lt;x&lt;3k\)이므로</p>
    $$
   x=\frac73k.
   $$
    <p>따라서</p>
    $$
   \text{(다)}=\frac73k.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">9</span> 그러므로</div>
    $$
   f(k)=3k,
   \qquad g(k)=\frac73k,
   \qquad p=\frac{2\sqrt2}{3}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">10</span> 따라서</div>
    $$
   f(p)g(p)
   =(3p)\left(\frac73p\right)
   =7p^2
   =7\left(\frac{2\sqrt2}{3}\right)^2
   =\frac{56}{9}.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_csat/common/q16": { answer: 3, html: String.raw`
  <div class="sol-box">로그의 밑 변환 공식으로 \(\dfrac1{\log_{15}2}\)를 \(\log_2 15\)로 바꾼다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑 변환 공식에 의해</div>
    $$
   \frac1{\log_{15}2}=\log_2 15.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   \log_2 120-\frac1{\log_{15}2}
   =\log_2 120-\log_2 15.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 로그의 성질을 이용하면</div>
    $$
   \log_2\frac{120}{15}
   =\log_2 8=3.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{3}\)</div>
` },

"2022_csat/common/q17": { answer: 4, html: String.raw`
  <div class="sol-box">도함수를 부정적분하고 초기조건으로 적분상수를 정한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   f(x)=\int f'(x)\,dx
   =\int(3x^2+2x)\,dx
   =x^3+x^2+C.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(0)=2\)이므로</div>
    $$
   C=2.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 따라서</div>
    $$
   f(x)=x^3+x^2+2
   $$
    <p>이고</p>
    $$
   f(1)=1+1+2=4.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{4}\)</div>
` },

"2022_csat/common/q18": { answer: 12, html: String.raw`
  <div class="sol-box">두 번째 식을 \(2\)로 나누어 첫 번째 식과 같은 형태로 만든 뒤 두 식의 차를 이용한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫 번째 조건은</div>
    $$
   \sum_{k=1}^{10}a_k-\sum_{k=1}^{7}\frac{a_k}{2}=56. \tag{㉠}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 번째 조건의 양변을 \(2\)로 나누면</div>
    $$
   \sum_{k=1}^{10}a_k-\sum_{k=1}^{8}\frac{a_k}{2}=50. \tag{㉡}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㉠에서 ㉡을 빼면</div>
    $$
   \frac{a_8}{2}=6.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 따라서</div>
    $$
   a_8=12.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{12}\)</div>
` },

"2022_csat/common/q19": { answer: 6, html: String.raw`
  <div class="sol-box">함수가 실수 전체에서 증가하려면 도함수가 모든 실수에서 음이 아니어야 하므로, 이차식인 도함수의 판별식을 이용한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 도함수는</div>
    $$
   f'(x)=3x^2+2ax-(a^2-8a).
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span> 함수가 실수 전체에서 증가하려면 모든 실수 \(x\)에 대하여</p>
    $$
   f'(x)\ge0
   $$
    <p>이어야 한다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">3</span> 이차식 \(f'(x)\)의 최고차항의 계수가 양수이므로 판별식이 \(0\) 이하이어야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 판별식의 \(\dfrac14\)은</div>
    $$
   a^2-3(-a^2+8a)
   =4a^2-24a
   =4a(a-6).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 따라서</div>
    $$
   4a(a-6)\le0,
   $$
    <p>즉</p>
    $$
   0\le a\le6.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 그러므로 \(a\)의 최댓값은</div>
    $$
   6.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{6}\)</div>
` },

"2022_csat/common/q21": { answer: 678, html: String.raw`
  <div class="sol-box">절댓값 수열이 공비 \(2\)인 등비수열임을 이용하고, 전체 합 조건으로 각 항의 부호를 판정한다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> 조건에 의해 수열 \(\{|a_n|\}\)은 첫째항이 \(2\), 공비가 \(2\)인 등비수열이므로</p>
    $$
   |a_n|=2^n.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 처음 아홉 항의 절댓값의 합은</div>
    $$
   \sum_{k=1}^{9}|a_k|
   =\sum_{k=1}^{9}2^k
   =\frac{2(2^9-1)}{2-1}
   =2^{10}-2.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 또한</div>
    $$
   |a_{10}|=2^{10}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(a_{10}\)의 부호를 정한다</div>
    <p>\(\left|\displaystyle\sum_{k=1}^{9}a_k\right|\le\displaystyle\sum_{k=1}^{9}|a_k|=1022\)이므로, 만약 \(a_{10}=2^{10}=1024\)라면</p>
    $$
   \sum_{k=1}^{9}a_k=-14-1024=-1038
   $$
    <p>이 되어 \(|-1038|&gt;1022\)에 모순이다. 따라서</p>
    $$
   a_{10}=-2^{10}=-1024.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 처음 아홉 항의 합은</div>
    $$
   \sum_{k=1}^{9}a_k=-14-(-1024)=1010.
   $$
    <p>절댓값의 합 \(1022\)와 비교하면 처음 아홉 항 중 음수인 항들의 절댓값의 합은</p>
    $$
   \frac{1022-1010}{2}=6.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> \(2+4=6\)이므로</div>
    $$
   a_1=-2,
   \qquad a_2=-4,
   $$
    <p>이고 \(a_3,\ldots,a_9\)는 양수이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 따라서</div>
    $$
   a_1+a_3+a_5+a_7+a_9
   =-2+2^3+2^5+2^7+2^9
   =678.
   $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{678}\)</div>
` },

"2022_csat/calculus/q23": { answer: 5, html: String.raw`
  <div class="sol-box">분자와 분모에 \(n\)을 곱하여 각 항의 극한을 계산한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분자와 분모에 \(n\)을 곱하면</div>
    $$
   \frac{\dfrac5n+\dfrac3{n^2}}
   {\dfrac1n-\dfrac2{n^3}}
   =\frac{5+\dfrac3n}{1-\dfrac2{n^2}}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   \lim_{n\to\infty}
   \frac{5+\dfrac3n}{1-\dfrac2{n^2}}
   =\frac5{1}=5.
   $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2022_csat/calculus/q24": { answer: 4, html: String.raw`
  <div class="sol-box">양변을 \(x\)에 대하여 미분하고, \(x^3+x=2\)를 만족하는 \(x\)를 구해 대입한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 양변을 \(x\)에 대하여 미분하면</div>
    $$
   f'(x^3+x)(3x^2+1)=e^x.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f'(2)\)를 구하려면</div>
    $$
   x^3+x=2
   $$
    <p>를 만족하는 \(x\)를 구한다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">3</span></p>
    $$
   x^3+x-2=(x-1)(x^2+x+2)=0.
   $$
    <p>\(x^2+x+2&gt;0\)이므로</p>
    $$
   x=1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 위 미분식에 \(x=1\)을 대입하면</div>
    $$
   4f'(2)=e.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 따라서</div>
    $$
   f'(2)=\frac e4.
   $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2022_csat/calculus/q25": { answer: 2, html: String.raw`
  <div class="sol-box">첫째항과 공비를 두고 두 무한등비급수의 합을 각각 나타낸 뒤 연립한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 등비수열의 첫째항을 \(a\), 공비를 \(r\)라 하면</div>
    $$
   a_n=ar^{n-1}.
   $$
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span></p>
    $$
   a_{2n-1}-a_{2n}
   =ar^{2n-2}(1-r)
   =a(1-r)(r^2)^{n-1}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 첫 번째 급수가 수렴하므로 \(-1&lt;r&lt;1\)이고</div>
    $$
   \sum_{n=1}^{\infty}(a_{2n-1}-a_{2n})
   =\frac{a(1-r)}{1-r^2}
   =\frac{a}{1+r}=3. \tag{㉠}
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 두 번째 급수에서</div>
    $$
   \sum_{n=1}^{\infty}a_n^2
   =\frac{a^2}{1-r^2}=6.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 이를</div>
    $$
   \frac{a^2}{(1-r)(1+r)}
   =\frac{a}{1-r}\cdot\frac{a}{1+r}=6
   $$
    <p>으로 쓰고 ㉠을 대입하면</p>
    $$
   \frac{a}{1-r}\times3=6.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 따라서</div>
    $$
   \frac{a}{1-r}=2.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 이는 구하려는 무한등비급수의 합이므로</div>
    $$
   \sum_{n=1}^{\infty}a_n=2.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_csat/calculus/q26": { answer: 3, html: String.raw`
  <div class="sol-box">각 항을 \(\dfrac{k}{n}\)에 대한 식과 \(\dfrac1n\)의 곱으로 바꾸어 정적분의 정의를 적용한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분자와 분모를 \(n^3\)으로 나누면</div>
    $$
   \frac{k^2+2kn}{k^3+3k^2n+n^3}
   =\frac{\left(\dfrac{k}{n}\right)^2+2\left(\dfrac{k}{n}\right)}
   {\left(\dfrac{k}{n}\right)^3+3\left(\dfrac{k}{n}\right)^2+1}
   \cdot\frac1n.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서 정적분의 정의에 의해</div>
    $$
   \lim_{n\to\infty}
   \sum_{k=1}^{n}
   \frac{k^2+2kn}{k^3+3k^2n+n^3}
   =\int_0^1\frac{x^2+2x}{x^3+3x^2+1}\,dx.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 분모를 미분하면</div>
    $$
   \frac{d}{dx}(x^3+3x^2+1)=3x^2+6x=3(x^2+2x).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 따라서</div>
    $$
   \int_0^1\frac{x^2+2x}{x^3+3x^2+1}\,dx
   =\left[\frac13\ln(x^3+3x^2+1)\right]_0^1.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 그러므로</div>
    $$
   \frac13(\ln5-\ln1)=\frac13\ln5.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_csat/calculus/q27": { answer: 1, html: String.raw`
  <div class="sol-box">두 교점의 \(x\)좌표를 이차방정식의 두 근으로 보고 근과 계수의 관계로 중점의 좌표를 구한 뒤, 매개변수 곡선의 길이를 계산한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 교점의 \(x\)좌표를 \(\alpha,\beta\)라 하면</div>
    $$
   x^2=t^2x-\frac{\ln t}{8}
   $$
    <p>이므로</p>
    $$
   x^2-t^2x+\frac{\ln t}{8}=0.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 근과 계수의 관계에 의해</div>
    $$
   \alpha+\beta=t^2,
   \qquad
   \alpha\beta=\frac{\ln t}{8}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 교점의 중점 \(P\)의 \(x\)좌표는</div>
    $$
   \frac{\alpha+\beta}{2}=\frac{t^2}{2}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(y\)좌표는</div>
    $$
   \frac{\alpha^2+\beta^2}{2}
   =\frac{(\alpha+\beta)^2-2\alpha\beta}{2}
   =\frac{t^4}{2}-\frac{\ln t}{8}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 따라서 점 \(P\)의 좌표를</div>
    $$
   x=\frac{t^2}{2},
   \qquad
   y=\frac{t^4}{2}-\frac{\ln t}{8}
   $$
    <p>로 나타낼 수 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 미분하면</div>
    $$
   \frac{dx}{dt}=t,
   \qquad
   \frac{dy}{dt}=2t^3-\frac1{8t}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 속력은</div>
    $$
   \sqrt{\left(\frac{dx}{dt}\right)^2+
   \left(\frac{dy}{dt}\right)^2}
   =\sqrt{t^2+\left(2t^3-\frac1{8t}\right)^2}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">8</span> 식을 정리하면</div>
    $$
   \sqrt{\left(2t^3+\frac1{8t}\right)^2}
   =2t^3+\frac1{8t}
   \qquad(1\le t\le e).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">9</span> 따라서 이동거리는</div>
    $$
   \int_1^e\left(2t^3+\frac1{8t}\right)dt
   =\left[\frac12t^4+\frac18\ln t\right]_1^e.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">10</span> 계산하면</div>
    $$
   \frac{e^4}{2}+\frac18-\frac12
   =\frac{e^4}{2}-\frac38.
   $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2022_csat/calculus/q28": { answer: 2, html: String.raw`
  <div class="sol-box">\(g'(x)\)를 인수분해하여 임계점을 찾고, \(x=1\)을 기준으로 한 대칭성을 이용해 양쪽 구간의 극솟값 개수를 센다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   g(x)=3f(x)+4\cos f(x)
   $$
    <p>이므로</p>
    $$
   g'(x)=3f'(x)-4f'(x)\sin f(x)
   =f'(x)\{3-4\sin f(x)\}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f'(x)=12\pi(x-1)\)이므로</div>
    $$
   g'(x)=12\pi(x-1)
   \left\{3-4\sin\bigl(6\pi(x-1)^2\bigr)\right\}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(g'(x)=0\)이 되는 경우는</div>
    $$
   x=1
   $$
    <p>또는</p>
    $$
   \sin\bigl(6\pi(x-1)^2\bigr)=\frac34
   $$
    <p>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(x=1\) 부근에서는</div>
    $$
   3-4\sin\bigl(6\pi(x-1)^2\bigr)&gt;0
   $$
    <p>이므로 \(g'(x)\)의 부호가 음에서 양으로 바뀐다. 따라서 \(x=1\)에서 극솟값을 갖는다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(1&lt;x&lt;2\)에서</div>
    $$
   0&lt;f(x)&lt;6\pi.
   $$
    <p>\(t=f(x)\)로 놓고 함수</p>
    $$
   y=3-4\sin t
   $$
    <p>의 부호 변화를 조사하면, 이 구간에서 \(g'(x)\)가 음에서 양으로 바뀌는 점은 \(3\)개이다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">6</span></p>
    $$
   f(1-x)=f(1+x)
   $$
    <p>이므로</p>
    $$
   g(1-x)=g(1+x).
   $$
    <p>따라서 \(0&lt;x&lt;1\)에서도 극솟값을 갖는 점이 \(3\)개이다.</p>
  </div>
  <div class="sol-step">
    <figure class="sol-fig"><img src="sol/2022_csat_calculus_q28.png" alt="0<t<6π에서 y=3-4 sin t의 부호 변화"><figcaption>\(3-4\sin t\)가 음에서 양으로 바뀌는 곳이 한 주기마다 하나씩, 모두 \(3\)개</figcaption></figure>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> 전체 개수는</div>
    $$
   1+3+3=7.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2022_csat/prob_stat/q23": { answer: 4, html: String.raw`
  <div class="sol-box">이항정리의 일반항에서 \(x^5\)항에 해당하는 \(r\)을 찾는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이항정리에 의해 일반항은</div>
    $$
   \binom7r x^{7-r}2^r
   \qquad(r=0,1,\ldots,7)
   $$
    <p>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x^5\)항이 되려면</div>
    $$
   7-r=5,
   $$
    <p>따라서 \(r=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(x^5\)의 계수는</div>
    $$
   \binom72 2^2
   =21\times4=84.
   $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2022_csat/prob_stat/q24": { answer: 4, html: String.raw`
  <div class="sol-box">이항분포의 분산과 \(V(aX)=a^2V(X)\)를 이용한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이항분포의 분산은</div>
    $$
   V(X)=n\times\frac13\times\frac23
   =\frac{2n}{9}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 따라서</div>
    $$
   V(2X)=4V(X)
   =4\times\frac{2n}{9}
   =\frac{8n}{9}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 주어진 조건에 의해</div>
    $$
   \frac{8n}{9}=40.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 따라서</div>
    $$
   n=45.
   $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2022_csat/prob_stat/q25": { answer: 1, html: String.raw`
  <div class="sol-box">\(|a^2-b^2|=5\)를 두 경우로 나누어 \((a,b)\)를 구한 뒤, 남은 세 자연수의 합을 중복조합으로 센다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span></p>
    $$
   |a^2-b^2|=5
   $$
    <p>이므로 두 경우로 나눈다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(b^2-a^2=5\)이면</div>
    $$
   (b-a)(b+a)=5.
   $$
    <p>자연수 조건에서</p>
    $$
   b-a=1,
   \qquad b+a=5
   $$
    <p>이므로</p>
    $$
   (a,b)=(2,3).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a^2-b^2=5\)이면 같은 방법으로</div>
    $$
   (a,b)=(3,2).
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 두 경우 모두</div>
    $$
   c+d+e=7.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(c'=c-1,d'=d-1,e'=e-1\)로 놓으면</div>
    $$
   c'+d'+e'=4
   $$
    <p>이고 \(c',d',e'\)는 음이 아닌 정수이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 그 해의 개수는 중복조합으로</div>
    $$
   {}_3H_4=\binom{6}{4}=15.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">7</span> \((a,b)\)가 두 가지이므로 전체 개수는</div>
    $$
   2\times15=30.
   $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2022_csat/prob_stat/q26": { answer: 3, html: String.raw`
  <div class="sol-box">구하려는 사건의 여사건은 세 수의 최솟값이 \(5\) 또는 \(6\)인 경우이므로, 조합으로 세어 전체에서 뺀다.</div>
  <div class="sol-step">
    <p><span class="sol-num">1</span> 구하려는 사건을 \(A\)라 하자.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">2</span> 사건 \(A\)의 여사건은 뽑힌 세 수의 최솟값이 \(5\) 또는 \(6\)인 경우이다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">3</span> 최솟값이 \(5\)인 경우, 나머지 두 수는 \(6,7,8,9,10\) 중에서 고르므로</p>
    $$
   \binom52
   $$
    <p>가지이다.</p>
  </div>
  <div class="sol-step">
    <p><span class="sol-num">4</span> 최솟값이 \(6\)인 경우, 나머지 두 수는 \(7,8,9,10\) 중에서 고르므로</p>
    $$
   \binom42
   $$
    <p>가지이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 전체 경우의 수는</div>
    $$
   \binom{10}{3}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 따라서</div>
    $$
   P(A)
   =1-\frac{\binom52+\binom42}{\binom{10}{3}}
   =1-\frac{10+6}{120}
   =\frac{13}{15}.
   $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2022_csat/prob_stat/q27": { answer: 2, html: String.raw`
  <div class="sol-box">두 신뢰구간의 왼쪽 끝점이 같다는 조건을 이용하여 모표준편차 \(\sigma\)를 구한 뒤, 첫 번째 신뢰구간의 폭을 계산한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 표본의 크기가 \(100\)일 때 신뢰도 \(95\%\)의 신뢰구간은</div>
    $$
   \left[
   \overline x_1-1.96\frac{\sigma}{10},
   \overline x_1+1.96\frac{\sigma}{10}
   \right].
   $$
    <p>따라서</p>
    $$
   a=\overline x_1-1.96\frac{\sigma}{10}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 표본의 크기가 \(400\)일 때 신뢰도 \(99\%\)의 신뢰구간은</div>
    $$
   \left[
   \overline x_2-2.58\frac{\sigma}{20},
   \overline x_2+2.58\frac{\sigma}{20}
   \right].
   $$
    <p>따라서</p>
    $$
   c=\overline x_2-2.58\frac{\sigma}{20}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a=c\)이므로</div>
    $$
   \overline x_1-\overline x_2
   =1.96\frac{\sigma}{10}
   -2.58\frac{\sigma}{20}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(\overline x_1-\overline x_2=1.34\)를 대입하면</div>
    $$
   1.34
   =\left(1.96-1.29\right)\frac{\sigma}{10}
   =0.67\frac{\sigma}{10}.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 따라서</div>
    $$
   \sigma=20.
   $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 첫 번째 신뢰구간의 길이는</div>
    $$
   b-a
   =2\times1.96\frac{\sigma}{10}
   =2\times1.96\times2
   =7.84.
   $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_mock06/common/q01": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(2\)로 통일한다</div>
    <p>\((-\sqrt2)^4=(\sqrt2)^4=2^2\)이고 \(8^{-\frac23}=(2^3)^{-\frac23}=2^{-2}\)이므로</p>
    $$
    (-\sqrt2)^4\times8^{-\frac23}=2^{2}\times2^{-2}=2^{0}=1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2023_mock06/common/q02": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 주어진 극한은 미분계수의 정의이다</div>
    <p>\(\displaystyle\lim_{h\to0}\dfrac{f(2+h)-f(2)}{h}=f'(2)\)이고 \(f'(x)=3x^2\)이므로</p>
    $$
    f'(2)=3\times2^2=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_mock06/common/q03": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\cos\theta\)의 부호를 정한다</div>
    <p>\(\dfrac\pi2&lt;\theta&lt;\pi\)이므로 \(\cos\theta&lt;0\)이고, \(\cos^2\theta=\dfrac49\)에서</p>
    $$
    \cos\theta=-\frac23.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\sin^2\theta=1-\cos^2\theta\)를 이용한다</div>
    $$
    \sin^2\theta+\cos\theta=\left(1-\frac49\right)+\left(-\frac23\right)
    =\frac59-\frac69=-\frac19.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_mock06/common/q04": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그래프에서 두 극한을 읽는다</div>
    <p>\(x\)가 \(0\)보다 작은 값에서 \(0\)에 가까워질 때 그래프는 \(-2\)에 가까워지고, \(x\)가 \(1\)보다 큰 값에서 \(1\)에 가까워질 때 그래프는 \(1\)에 가까워지므로</p>
    $$
    \lim_{x\to0-}f(x)=-2,\qquad \lim_{x\to1+}f(x)=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 값을 더한다</div>
    $$
    \lim_{x\to0-}f(x)+\lim_{x\to1+}f(x)=-2+1=-1.
    $$
    <div class="sol-box">극한값은 그 점에서의 함숫값과 무관하다. \(f(0)=2\), \(f(1)=-2\)이지만 위 극한값과는 관계없다.</div>
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_mock06/common/q05": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 공비를 구한다</div>
    <p>공비를 \(r\)라 하면 \(a_2+a_3=a_1r+a_1r^2=\dfrac14(r+r^2)=\dfrac32\)이므로</p>
    $$
    r^2+r-6=0,\qquad (r+3)(r-2)=0.
    $$
    <p>모든 항이 양수이므로 \(r=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_6+a_7\)을 \(a_2+a_3\)으로 묶는다</div>
    $$
    a_6+a_7=a_1r^5+a_1r^6=r^4(a_1r+a_1r^2)=2^4\times\frac32=24.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_mock06/common/q06": { answer: 5, html: String.raw`
  <div class="sol-box">\(x\ne-1,\ x\ne3\)에서는 다항함수이므로 연속이다. 두 경계에서 \(|f(x)|\)의 좌극한과 우극한, 함숫값이 같아야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x=-1\)에서의 조건</div>
    <p>\(\displaystyle\lim_{x\to-1-}|f(x)|=|-1+a|\)이고 \(|f(-1)|=|-1|=1\)이므로</p>
    $$
    |a-1|=1,\qquad a=0\ \text{또는}\ a=2.
    $$
    <p>\(a\)는 양수이므로 \(a=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=3\)에서의 조건</div>
    <p>\(\displaystyle\lim_{x\to3-}|f(x)|=|3|=3\)이고 \(|f(3)|=|3b-2|\)이므로</p>
    $$
    |3b-2|=3,\qquad b=\frac53\ \text{또는}\ b=-\frac13.
    $$
    <p>\(b\)는 양수이므로 \(b=\dfrac53\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 값을 더한다</div>
    $$
    a+b=2+\frac53=\frac{11}{3}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_mock06/common/q07": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 최댓값·최솟값을 갖는 \(x\)를 찾는다</div>
    <p>\(0\le x\le\pi\)에서 \(0\le 2x\le 2\pi\)이다. \(f(x)=-\sin2x\)가 최대가 되려면 \(\sin2x=-1\), 최소가 되려면 \(\sin2x=1\)이어야 하므로</p>
    $$
    2x=\frac{3\pi}{2}\ \Rightarrow\ a=\frac{3\pi}{4},
    \qquad
    2x=\frac{\pi}{2}\ \Rightarrow\ b=\frac{\pi}{4}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 점을 지나는 직선의 기울기를 구한다</div>
    <p>\(f(a)=1\), \(f(b)=-1\)이므로</p>
    $$
    \frac{f(a)-f(b)}{a-b}
    =\frac{1-(-1)}{\frac{3\pi}{4}-\frac{\pi}{4}}
    =\frac{2}{\frac{\pi}{2}}=\frac4\pi.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_mock06/common/q08": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 평균값 정리를 적용한다</div>
    <p>\(f(x)\)는 닫힌구간 \([1,5]\)에서 연속이고 열린구간 \((1,5)\)에서 미분가능하므로</p>
    $$
    \frac{f(5)-f(1)}{5-1}=f'(c)
    $$
    <p>인 \(c\)가 \(1\)과 \(5\) 사이에 존재한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)를 대입한다</div>
    <p>\(f'(c)\ge5\)이므로 \(f(5)-f(1)\ge5\times4=20\)이고, \(f(1)=3\)이므로</p>
    $$
    f(5)\ge23.
    $$
    <p>\(f(x)=5x-2\)이면 두 조건을 모두 만족시키고 \(f(5)=23\)이므로 최솟값은 \(23\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_mock06/common/q09": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 차를 새 함수로 놓는다</div>
    <p>\(h(x)=f(x)-g(x)\)라 하면</p>
    $$
    h(x)=x^3-x^2-x+6-a
    $$
    <p>이고, 구하는 조건은 \(x\ge0\)에서 \(h(x)\ge0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x\ge0\)에서 \(h(x)\)의 최솟값을 찾는다</div>
    $$
    h'(x)=3x^2-2x-1=(3x+1)(x-1)
    $$
    <p>이므로 \(x\ge0\)에서 \(h(x)\)는 \(x=1\)에서 극소이면서 최소이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 최솟값이 \(0\) 이상이면 된다</div>
    $$
    h(1)=1-1-1+6-a=5-a\ge0,\qquad a\le5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_mock06/common/q10": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 코사인법칙으로 \(\overline{\mathrm{AC}}\)를 구한다</div>
    <p>\(\overline{\mathrm{AC}}=b\)라 하면 \(\overline{\mathrm{BC}}^2=\overline{\mathrm{AB}}^2+b^2-2\cdot\overline{\mathrm{AB}}\cdot b\cos(\angle\mathrm{BAC})\)에서</p>
    $$
    4=9+b^2-2\times3\times b\times\frac78,
    $$
    $$
    4b^2-21b+20=0,\qquad (4b-5)(b-4)=0.
    $$
    <p>\(\overline{\mathrm{AC}}&gt;3\)이므로 \(\overline{\mathrm{AC}}=4\)이고, \(\mathrm{M}\)이 중점이므로 \(\overline{\mathrm{AM}}=\overline{\mathrm{MC}}=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 삼각형 \(\mathrm{ABM}\)에서 \(\overline{\mathrm{BM}}\)을 구한다</div>
    $$
    \overline{\mathrm{BM}}^2=3^2+2^2-2\times3\times2\times\frac78=13-\frac{21}{2}=\frac52,
    $$
    $$
    \overline{\mathrm{BM}}=\frac{\sqrt{10}}{2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 삼각형이 닮음임을 이용한다</div>
    <p>호 \(\mathrm{AB}\)에 대한 원주각이 같으므로 \(\angle\mathrm{ADM}=\angle\mathrm{BCM}\)이고, 맞꼭지각에서 \(\angle\mathrm{AMD}=\angle\mathrm{BMC}\)이다. 따라서 \(\triangle\mathrm{AMD}\)와 \(\triangle\mathrm{BMC}\)는 닮은 삼각형이고</p>
    $$
    \frac{\overline{\mathrm{MD}}}{\overline{\mathrm{MC}}}=\frac{\overline{\mathrm{MA}}}{\overline{\mathrm{MB}}},
    \qquad
    \overline{\mathrm{MA}}\times\overline{\mathrm{MC}}=\overline{\mathrm{MB}}\times\overline{\mathrm{MD}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(\overline{\mathrm{MD}}\)를 구한다</div>
    $$
    \overline{\mathrm{MD}}=\frac{2\times2}{\frac{\sqrt{10}}{2}}=\frac{8}{\sqrt{10}}=\frac{4\sqrt{10}}{5}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_mock06/common/q11": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 점 \(\mathrm P\)가 원점으로 돌아오는 시각을 구한다</div>
    <p>점 \(\mathrm P\)의 시각 \(t\)에서의 위치는</p>
    $$
    \int_0^t(2-s)\,ds=2t-\frac12t^2=\frac12t(4-t)
    $$
    <p>이므로 \(t&gt;0\)에서 위치가 \(0\)이 되는 시각은 \(t=4\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 점 \(\mathrm Q\)가 움직인 거리를 구한다</div>
    <p>\(0\le t\le4\)에서 \(v_2(t)=3t\ge0\)이므로 움직인 거리는</p>
    $$
    \int_0^4|3t|\,dt=\int_0^4 3t\,dt=\left[\frac32t^2\right]_0^4=24.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_mock06/common/q12": { answer: 3, html: String.raw`
  <div class="sol-box">조건 (가)로 \(a_1\)의 범위를 좁히고, (나)의 양변에서 공통으로 들어 있는 항을 지운 뒤 \(a_6\)의 부호로 경우를 나눈다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가)에서 \(a_1\)의 범위를 구한다</div>
    <p>\(a_n=a_1+3(n-1)\)이므로 \(a_5=a_1+12\), \(a_7=a_1+18\)이다. \(a_5a_7&lt;0\)에서</p>
    $$
    -18&lt;a_1&lt;-12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)를 정리한다</div>
    <p>좌변은 \(|a_7|+|a_8|+\cdots+|a_{12}|\), 우변의 합은 \(|a_2|+|a_4|+|a_6|+|a_8|+|a_{10}|+|a_{12}|\)이므로 양변의 \(|a_8|,|a_{10}|,|a_{12}|\)를 지우면</p>
    $$
    |a_7|+|a_9|+|a_{11}|=6+|a_2|+|a_4|+|a_6|.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 각 항의 부호를 정한다</div>
    <p>\(a_1=t\)라 하면 \(-18&lt;t&lt;-12\)에서 \(a_2=t+3&lt;0\), \(a_4=t+9&lt;0\)이고 \(a_7=t+18&gt;0\), \(a_9=t+24&gt;0\), \(a_{11}=t+30&gt;0\)이다. 부호가 정해지지 않는 것은 \(a_6=t+15\)뿐이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(a_6\)의 부호로 나눈다</div>
    <p>(ⅰ) \(a_6\ge0\), 즉 \(-15\le t&lt;-12\)이면</p>
    $$
    (t+18)+(t+24)+(t+30)=6-(t+3)-(t+9)+(t+15),
    $$
    <p>즉 \(3t+72=9-t\)에서 \(t=-\dfrac{63}{4}\)이므로 범위에 맞지 않는다.</p>
    <p>(ⅱ) \(a_6&lt;0\), 즉 \(-18&lt;t&lt;-15\)이면</p>
    $$
    3t+72=6-(t+3)-(t+9)-(t+15)=-3t-21,
    $$
    <p>즉 \(6t=-93\)에서 \(t=-\dfrac{31}{2}\)이고 이는 범위에 맞는다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(a_{10}\)을 구한다</div>
    $$
    a_{10}=a_1+27=-\frac{31}{2}+27=\frac{23}{2}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_mock06/common/q13": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 한 단계에서 \(x\)좌표가 어떻게 변하는지 본다</div>
    <p>\(y\)좌표가 \(2^{p}\)인 점에서 \(x\)축에 평행한 직선이 \(y=16^x\)과 만나는 점의 \(x\)좌표는 \(16^x=2^{p}\), 즉 \(2^{4x}=2^{p}\)에서 \(\dfrac p4\)이다. 이 \(x\)좌표에서 \(y=2^x\) 위의 점을 잡으므로 \(y\)좌표는 \(2^{p/4}\)가 된다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x_n\)을 구한다</div>
    <p>\(\mathrm A(64,2^{64})\)에서 시작하면 지수가 \(64\to16\to4\to\cdots\)로 매번 \(\dfrac14\)배가 되고, \(x_n\)은 그 단계의 지수와 같으므로</p>
    $$
    x_1=16,\quad x_2=4,\quad x_3=1,\quad x_4=\frac14,\quad\cdots,\qquad
    x_n=4^{\,3-n}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 최솟값이 \(6\)이 될 조건을 세운다</div>
    <p>\(\{x_n\}\)은 감소하므로 \(x_n&lt;\dfrac1k\)를 만족시키는 \(n\)의 최솟값이 \(6\)이려면</p>
    $$
    x_6&lt;\frac1k\quad\text{이고}\quad x_5\ge\frac1k,
    $$
    <p>즉 \(\dfrac1{64}&lt;\dfrac1k\)이고 \(\dfrac1{16}\ge\dfrac1k\)이어야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 자연수 \(k\)의 개수를 센다</div>
    $$
    16\le k\le63,\qquad 63-16+1=48.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2023_mock06/common/q14": { answer: 4, html: String.raw`
  <div class="sol-box">\(g(x)\)가 삼차함수라는 조건에서 \(f(x)\)의 꼴을 먼저 확정한 뒤 세 보기를 확인한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x\ge0\)에서 \(f(x)\)를 구한다</div>
    <p>\(x\ge0\)에서 \(g(x)=\displaystyle\int_0^xf(t)\,dt\)이고 \(g(x)\)는 최고차항의 계수가 \(1\)인 삼차함수이므로 \(g(0)=0\)에서</p>
    $$
    g(x)=x^3+bx^2+cx\quad(x\ge0).
    $$
    <p>양변을 미분하면 \(f(x)=3x^2+2bx+c\ (x&gt;0)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x&lt;0\)에서 \(f(x)\)를 구하고 \(c\)를 정한다</div>
    <p>\(x&lt;0\)에서는 \(g(x)=-\displaystyle\int_0^xf(t)\,dt\)이므로 \(\displaystyle\int_0^xf(t)\,dt=-g(x)\)이고, 미분하면 \(f(x)=-(3x^2+2bx+c)\)이다. \(f(x)\)가 \(x=0\)에서 연속이므로</p>
    $$
    c=-c,\qquad c=0.
    $$
    <p>따라서 \(f(x)=3x^2+2bx\ (x\ge0)\), \(f(x)=-3x^2-2bx\ (x&lt;0)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄱ의 판정</div>
    <p>위 식에서 \(f(0)=0\)이므로 <b>ㄱ은 옳다</b>.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> ㄴ의 판정</div>
    <p>\(b=0\)이면 \(g(x)=x^3\)으로 조건을 만족시키고, 이때</p>
    $$
    f(x)=3x^2\ (x\ge0),\qquad f(x)=-3x^2\ (x&lt;0)
    $$
    <p>이다. 이 함수는 실수 전체에서 증가하므로 극댓값을 갖지 않는다. 따라서 <b>ㄴ은 옳지 않다</b>.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> ㄷ의 판정</div>
    <p>\(f(1)=3+2b\)이므로 \(2&lt;f(1)&lt;4\)에서 \(-\dfrac12&lt;b&lt;\dfrac12\)이다. 방정식 \(f(x)=x\)를 구간별로 풀면</p>
    $$
    x\ge0:\ 3x^2+2bx=x\ \Rightarrow\ x(3x+2b-1)=0,
    $$
    $$
    x&lt;0:\ -3x^2-2bx=x\ \Rightarrow\ x(3x+2b+1)=0.
    $$
    <p>\(-\dfrac12&lt;b&lt;\dfrac12\)이면 \(\dfrac{1-2b}{3}&gt;0\), \(-\dfrac{1+2b}{3}&lt;0\)이므로 실근은</p>
    $$
    x=0,\qquad x=\frac{1-2b}{3},\qquad x=-\frac{1+2b}{3}
    $$
    <p>의 서로 다른 \(3\)개이다. 따라서 <b>ㄷ은 옳다</b>.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_mock06/common/q15": { answer: 2, html: String.raw`
  <div class="sol-box">항이 \(0\) 이하이면 \(\dfrac1{k+1}\)을 더하고 양수이면 \(\dfrac1k\)를 빼므로, 다시 \(0\)이 되려면 더한 총량과 뺀 총량이 같아야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 다시 \(0\)이 되는 조건을 세운다</div>
    <p>\(a_1=0\)에서 출발하여 \(\dfrac1{k+1}\)을 \(\alpha\)번 더하고 \(\dfrac1k\)를 \(\beta\)번 뺀 뒤 다시 \(0\)이 되었다면</p>
    $$
    \frac{\alpha}{k+1}=\frac{\beta}{k},\qquad \alpha k=\beta(k+1).
    $$
    <p>\(k\)와 \(k+1\)은 서로소이므로 \(\alpha\)는 \(k+1\)의 배수, \(\beta\)는 \(k\)의 배수이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 처음으로 \(0\)이 되는 항의 번호를 구한다</div>
    <p>가장 작은 경우는 \(\alpha=k+1\), \(\beta=k\)이고 이때 시행 횟수는 \(2k+1\)이다. 따라서 \(a_n=0\)이 되는 \(n\)은</p>
    $$
    n=1,\ 1+(2k+1),\ 1+2(2k+1),\ \cdots
    $$
    <p>즉 \(n-1\)이 \(2k+1\)의 배수인 항뿐이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_{22}=0\)일 조건을 구한다</div>
    <p>\(22-1=21\)이 \(2k+1\)의 배수이어야 하므로 \(2k+1\)은 \(21\)의 약수이다.</p>
    $$
    2k+1\in\{1,\ 3,\ 7,\ 21\}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 자연수 \(k\)를 고른다</div>
    <p>\(2k+1=1\)이면 \(k=0\)이므로 자연수가 아니고, 나머지에서</p>
    $$
    k=1,\qquad k=3,\qquad k=10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 합을 구한다</div>
    $$
    1+3+10=14.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_mock06/common/q16": { answer: 6, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 로그의 성질로 진수를 합친다</div>
    $$
    \log_2(x+2)+\log_2(x-2)=\log_2(x^2-4)=5,
    $$
    $$
    x^2-4=2^5=32,\qquad x^2=36.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 진수 조건을 확인한다</div>
    <p>\(x+2&gt;0\)이고 \(x-2&gt;0\)이므로 \(x&gt;2\)이다. 따라서 \(x=6\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{6}\)</div>
` },

"2023_mock06/common/q17": { answer: 15, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부정적분으로 \(f(x)\)를 구한다</div>
    $$
    f(x)=\int(8x^3+6x^2)\,dx=2x^4+2x^3+C.
    $$
    <p>\(f(0)=-1\)이므로 \(C=-1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=-2\)를 대입한다</div>
    $$
    f(-2)=2\times16+2\times(-8)-1=32-16-1=15.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{15}\)</div>
` },

"2023_mock06/common/q18": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 시그마를 나누어 계산한다</div>
    $$
    \sum_{k=1}^{10}(4k+a)=4\sum_{k=1}^{10}k+10a
    =4\times\frac{10\times11}{2}+10a=220+10a.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a\)를 구한다</div>
    $$
    220+10a=250,\qquad a=3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{3}\)</div>
` },

"2023_mock06/common/q19": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x=1\)이 극점임을 이용해 \(a\)를 구한다</div>
    $$
    f'(x)=4x^3+2ax=2x(2x^2+a)
    $$
    <p>이고 \(f'(1)=0\)이므로 \(2(2+a)=0\), 즉 \(a=-2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극댓값이 되는 곳을 찾는다</div>
    $$
    f'(x)=4x^3-4x=4x(x+1)(x-1)
    $$
    <p>이므로 \(f'(x)\)의 부호는 \(x=-1\)에서 음에서 양, \(x=0\)에서 양에서 음, \(x=1\)에서 음에서 양으로 바뀐다. 따라서 \(f(x)\)는 \(x=0\)에서 극대이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(b\)를 구하고 답을 낸다</div>
    <p>극댓값이 \(f(0)=b=4\)이므로</p>
    $$
    a+b=-2+4=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{2}\)</div>
` },

"2023_mock06/prob_stat/q23": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 같은 것이 있는 순열</div>
    <p>\(a\)가 \(3\)개, \(b\)와 \(c\)가 각각 \(1\)개이므로</p>
    $$
    \frac{5!}{3!}=\frac{120}{6}=20.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_mock06/prob_stat/q24": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 구한다</div>
    <p>주머니 \(\mathrm A\)에서 \(3\)가지, \(\mathrm B\)에서 \(5\)가지이므로 전체는 \(3\times5=15\)가지이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 차가 \(1\)인 경우를 센다</div>
    <p>\(\mathrm A\)에서 꺼낸 수를 \(a\), \(\mathrm B\)에서 꺼낸 수를 \(b\)라 하면 \(|a-b|=1\)인 순서쌍 \((a,b)\)는</p>
    $$
    (1,2),\ (2,1),\ (2,3),\ (3,2),\ (3,4)
    $$
    <p>의 \(5\)가지이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 확률을 구한다</div>
    $$
    \frac5{15}=\frac13.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2023_mock06/prob_stat/q25": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 한 번의 시행에서 이동할 확률을 구한다</div>
    <p>\(6\)의 약수는 \(1,2,3,6\)의 \(4\)개이므로 한 번의 시행에서 점 \(\mathrm P\)가 이동할 확률은 \(\dfrac46=\dfrac23\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 이항분포로 나타낸다</div>
    <p>\(4\)번의 시행에서 이동한 횟수를 \(X\)라 하면 \(X\)는 이항분포 \(\mathrm B\!\left(4,\dfrac23\right)\)를 따르고, \(4\)번째 시행 후 점 \(\mathrm P\)의 좌표가 \(X\)이므로 구하는 확률은 \(\mathrm P(X\ge2)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 여사건을 이용한다</div>
    $$
    \mathrm P(X=0)=\left(\frac13\right)^4=\frac1{81},
    \qquad
    \mathrm P(X=1)={}_4\mathrm C_1\left(\frac23\right)\left(\frac13\right)^3=\frac8{81},
    $$
    $$
    \mathrm P(X\ge2)=1-\frac1{81}-\frac8{81}=1-\frac19=\frac89.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_mock06/prob_stat/q26": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 전개식의 항을 정리한다</div>
    <p>\((x^2+1)^4\)의 일반항은 \({}_4\mathrm C_i\,x^{2i}\), \((x^3+1)^n\)의 일반항은 \({}_n\mathrm C_j\,x^{3j}\)이므로 곱에서는 \(x^{2i+3j}\) 꼴의 항이 나온다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x^5\)의 계수로 \(n\)을 구한다</div>
    <p>\(2i+3j=5\)를 만족시키는 음이 아닌 정수 \((i,j)\)는 \((1,1)\)뿐이므로 \(x^5\)의 계수는</p>
    $$
    {}_4\mathrm C_1\times{}_n\mathrm C_1=4n=12,\qquad n=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(x^6\)의 계수를 구한다</div>
    <p>\(n=3\)일 때 \(2i+3j=6\)인 경우는 \((i,j)=(3,0)\), \((0,2)\)이므로</p>
    $$
    {}_4\mathrm C_3\times{}_3\mathrm C_0+{}_4\mathrm C_0\times{}_3\mathrm C_2=4+3=7.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_mock06/prob_stat/q27": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 양 끝을 먼저 정한다</div>
    <p>조건 (가)에서 양 끝은 각각 \(\mathrm X\), \(\mathrm Y\) 중 하나이므로</p>
    $$
    2\times2=4\ \text{(가지)}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 가운데 네 자리를 정한다</div>
    <p>양 끝이 대문자이므로 \(a\)는 가운데 네 자리에만 올 수 있고, 조건 (나)에서 정확히 한 번만 나온다. \(a\)의 자리를 정하는 경우가 \(4\)가지이고 나머지 세 자리에는 \(b,\mathrm X,\mathrm Y\)를 중복을 허락하여 놓으므로</p>
    $$
    4\times3^3=4\times27=108\ \text{(가지)}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 곱의 법칙으로 마무리한다</div>
    $$
    4\times108=432.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_mock06/prob_stat/q28": { answer: 4, html: String.raw`
  <div class="sol-box">\(5\)의 배수인 사건을 \(A\), \(3500\) 이상인 사건을 \(B\)라 하고 \(\mathrm n(A\cup B)=\mathrm n(A)+\mathrm n(B)-\mathrm n(A\cap B)\)로 센다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수</div>
    $$
    {}_5\mathrm P_4=5\times4\times3\times2=120.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(5\)의 배수인 경우</div>
    <p>일의 자리가 \(5\)이고 나머지 세 자리는 \(1,2,3,4\)에서 뽑아 나열하므로</p>
    $$
    \mathrm n(A)={}_4\mathrm P_3=24.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(3500\) 이상인 경우</div>
    <p>천의 자리가 \(4\) 또는 \(5\)이면 언제나 \(3500\) 이상이므로 \(2\times{}_4\mathrm P_3=48\)이고, 천의 자리가 \(3\)이면 백의 자리가 \(5\)이어야 하므로 \({}_3\mathrm P_2=6\)이다.</p>
    $$
    \mathrm n(B)=48+6=54.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 두 조건을 모두 만족시키는 경우</div>
    <p>일의 자리가 \(5\)이므로 천의 자리는 \(1,2,3,4\) 중 하나이다. 천의 자리가 \(3\)이면 백의 자리에 \(5\)를 다시 쓸 수 없어 \(3500\) 이상이 될 수 없으므로 천의 자리는 \(4\)이고, 남은 두 자리는 \(1,2,3\)에서 뽑아 나열하므로</p>
    $$
    \mathrm n(A\cap B)={}_3\mathrm P_2=6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 확률을 구한다</div>
    $$
    \frac{24+54-6}{120}=\frac{72}{120}=\frac35.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_mock06/calculus/q23": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분모를 유리화한다</div>
    $$
    \frac{1}{\sqrt{n^2+3n}-\sqrt{n^2+n}}
    =\frac{\sqrt{n^2+3n}+\sqrt{n^2+n}}{(n^2+3n)-(n^2+n)}
    =\frac{\sqrt{n^2+3n}+\sqrt{n^2+n}}{2n}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 분자와 분모를 \(n\)으로 나눈다</div>
    $$
    \lim_{n\to\infty}\frac{\sqrt{1+\frac3n}+\sqrt{1+\frac1n}}{2}
    =\frac{1+1}{2}=1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2023_mock06/calculus/q24": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 점이 곡선 위에 있는지 확인한다</div>
    <p>\(x=e\), \(y=e^2\)을 대입하면 \(e^2-e^2\ln e+e=e^2-e^2+e=e\)이므로 점 \((e,e^2)\)은 곡선 위의 점이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 음함수의 미분법을 이용한다</div>
    <p>\(x^2-y\ln x+x=e\)의 양변을 \(x\)에 대하여 미분하면</p>
    $$
    2x-\left(\frac{dy}{dx}\ln x+y\cdot\frac1x\right)+1=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 접점의 좌표를 대입한다</div>
    <p>\(\ln e=1\)이므로</p>
    $$
    2e-\left(\frac{dy}{dx}+\frac{e^2}{e}\right)+1=0,
    \qquad
    \frac{dy}{dx}=2e-e+1=e+1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2023_mock06/calculus/q25": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(g(3)\)을 구한다</div>
    <p>\(g\)가 \(f\)의 역함수이므로 \(f(x)=3\)인 \(x\)의 값이 \(g(3)\)이다.</p>
    $$
    x^3+2x+3=3,\qquad x(x^2+2)=0,\qquad x=0.
    $$
    <p>따라서 \(g(3)=0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 역함수의 미분법을 이용한다</div>
    $$
    f'(x)=3x^2+2,\qquad f'(0)=2,
    $$
    $$
    g'(3)=\frac{1}{f'(g(3))}=\frac{1}{f'(0)}=\frac12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_mock06/calculus/q26": { answer: 2, html: String.raw`
  <div class="sol-box">첫 도형의 넓이를 구하고, 다음 도형이 처음 도형과 닮음임을 이용해 넓이의 공비를 구한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 삼각형 \(\mathrm A_1\mathrm A_2\mathrm B_1\)의 넓이와 \(\overline{\mathrm A_2\mathrm B_2}\)를 구한다</div>
    $$
    \triangle\mathrm A_1\mathrm A_2\mathrm B_1=\frac12\times2\times3\times\sin\frac\pi3=\frac{3\sqrt3}{2}.
    $$
    <p>코사인법칙에서 \(\overline{\mathrm A_1\mathrm A_2}^{\,2}=4+9-2\times2\times3\times\dfrac12=7\)이므로 \(\overline{\mathrm A_1\mathrm A_2}=\sqrt7\)이고, 사인법칙에서 외접원의 반지름은 \(R=\dfrac{\sqrt7}{2\sin\frac\pi3}=\dfrac{\sqrt{21}}{3}\)이다.</p>
    <p>\(\overline{\mathrm A_2\mathrm B_2}\parallel\overline{\mathrm A_1\mathrm B_1}\)이고 네 점이 한 원 위에 있으므로 사각형 \(\mathrm A_1\mathrm B_1\mathrm B_2\mathrm A_2\)는 등변사다리꼴이고, 중심각을 계산하면</p>
    $$
    \overline{\mathrm A_2\mathrm B_2}=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 색칠한 부분의 넓이 \(S_1\)을 구한다</div>
    <p>\(\overline{\mathrm A_1\mathrm B_1}\parallel\overline{\mathrm A_2\mathrm B_2}\)이므로 \(\triangle\mathrm C_1\mathrm A_1\mathrm B_1\)과 \(\triangle\mathrm C_1\mathrm B_2\mathrm A_2\)는 닮음비가 \(2:1\)인 닮은 삼각형이다. \(\triangle\mathrm C_1\mathrm B_2\mathrm A_2\)의 넓이를 \(S\)라 하면 네 삼각형의 넓이는</p>
    $$
    \triangle\mathrm C_1\mathrm A_1\mathrm B_1=4S,\qquad
    \triangle\mathrm C_1\mathrm A_1\mathrm A_2=\triangle\mathrm C_1\mathrm B_1\mathrm B_2=2S,\qquad
    \triangle\mathrm C_1\mathrm B_2\mathrm A_2=S
    $$
    <p>이다. \(\triangle\mathrm A_1\mathrm A_2\mathrm B_1=4S+2S=6S=\dfrac{3\sqrt3}{2}\)에서 \(S=\dfrac{\sqrt3}{4}\)이므로</p>
    $$
    S_1=2S+2S=4S=\sqrt3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 닮음비를 구한다</div>
    <p>\(\overline{\mathrm A_2\mathrm B_2}\parallel\overline{\mathrm A_1\mathrm B_1}\)이고 \(\overline{\mathrm B_2\mathrm A_3}\parallel\overline{\mathrm B_1\mathrm A_2}\)이므로 \(\angle\mathrm A_2\mathrm B_2\mathrm A_3=\angle\mathrm A_1\mathrm B_1\mathrm A_2=\dfrac\pi3\)이고, \(\overline{\mathrm A_2\mathrm B_2}:\overline{\mathrm A_1\mathrm B_1}=1:2\)이다. 따라서 닮음비는 \(\dfrac12\), 넓이의 비는 \(\dfrac14\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 등비급수의 합을 구한다</div>
    $$
    \lim_{n\to\infty}S_n=\frac{\sqrt3}{1-\frac14}=\frac{4\sqrt3}{3}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_mock06/calculus/q27": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 각 항을 정리한다</div>
    <p>공차를 \(d\)라 하면 \(a_n=4+(n-1)d\)이므로</p>
    $$
    \frac{a_n}{n}=d+\frac{4-d}{n},
    \qquad
    \frac{3n+7}{n+2}=3+\frac{1}{n+2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 수렴 조건에서 \(d\)를 정한다</div>
    <p>일반항은 \((d-3)+\dfrac{4-d}{n}-\dfrac1{n+2}\)이고, 급수가 수렴하려면 일반항이 \(0\)에 수렴해야 하므로</p>
    $$
    d-3=0,\qquad d=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부분합을 구해 극한을 계산한다</div>
    <p>\(d=3\)이면 일반항은 \(\dfrac1n-\dfrac1{n+2}\)이므로</p>
    $$
    \sum_{n=1}^{N}\left(\frac1n-\frac1{n+2}\right)
    =1+\frac12-\frac1{N+1}-\frac1{N+2},
    $$
    $$
    S=\lim_{N\to\infty}\left(1+\frac12-\frac1{N+1}-\frac1{N+2}\right)=\frac32.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_mock06/calculus/q28": { answer: 5, html: String.raw`
  <div class="sol-box">\(\ln|f(x)|\)는 \(f(x)=0\)인 점에서 발산하므로, 연속 조건이 \(f(x)\)의 실근 위치를 결정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가)에서 \(f(x)\)의 실근을 정한다</div>
    <p>\(f(a)=0\)이면 \(x\to a\)일 때 \(\ln|f(x)|\to-\infty\)이므로 \(g(x)\)는 \(x=a\)에서 연속일 수 없다. 조건 (가)에서 그러한 점은 \(x=1\)뿐이므로 \(f(x)\)의 실근은 \(1\)뿐이다. 따라서</p>
    $$
    f(x)=\frac12(x-1)(x^2+bx+c)\qquad(b^2-4c&lt;0)
    $$
    <p>로 놓을 수 있고, \(x&lt;1\)에서 \(f(x)&lt;0\), \(x&gt;1\)에서 \(f(x)&gt;0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)에서 \(f'(2)=0\)을 얻는다</div>
    <p>\(x&gt;1\)에서 \(g(x)=\ln f(x)\)이고 로그함수는 증가하므로, \(g(x)\)가 \(x=2\)에서 극대이면 \(f(x)\)도 \(x=2\)에서 극대이다.</p>
    $$
    f'(x)=\frac12\left\{3x^2+2(b-1)x+(c-b)\right\},\qquad f'(2)=0
    $$
    <p>에서 \(3b+c+8=0\), 즉 \(c=-3b-8\)이다. 이를 \(b^2-4c&lt;0\)에 넣으면 \((b+4)(b+8)&lt;0\), 즉 \(-8&lt;b&lt;-4\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(|g(x)|\)가 \(x=2\)에서 극소일 조건</div>
    <p>\(g(x)\)가 \(x=2\)에서 극대인데 \(|g(x)|\)가 \(x=2\)에서 극소이려면 \(x=2\) 부근에서 \(g(x)\le0\)이어야 하므로 \(g(2)\le0\), 즉 \(f(2)\le1\)이다.</p>
    $$
    f(2)=\frac12(4+2b+c)=\frac{-b-4}{2}\le1,\qquad b\ge-6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 조건 (다)로 \(b\)를 확정한다</div>
    <p>\(g(x)=0\)은 \(|f(x)|=1\)과 같다. \(x&lt;1\)에서 \(f(x)\)는 증가하면서 \(-\infty\)부터 \(0\)까지 변하므로 \(f(x)=-1\)의 실근은 \(1\)개이다. 따라서 \(x&gt;1\)에서 \(f(x)=1\)의 실근이 \(2\)개이어야 한다.</p>
    <p>\(x&gt;1\)에서 \(f(x)\)는 \(0\)에서 시작해 \(x=2\)에서 극대가 된 뒤 극소를 지나 한없이 커진다. \(f(2)&lt;1\)이면 극대인 부분에서는 \(y=1\)과 만나지 않아 실근이 \(1\)개뿐이므로</p>
    $$
    f(2)=1,\qquad \frac{-b-4}{2}=1,\qquad b=-6,\quad c=10,
    $$
    $$
    f(x)=\frac12(x-1)(x^2-6x+10).
    $$
    <figure class="sol-fig"><img src="sol/2023_mock06_calculus_q28.png" alt="f(x)의 그래프와 두 직선 y=1, y=-1"><figcaption>\(y=1\)이 극대점 \((2,1)\)에 접하므로 \(|f(x)|=1\)의 실근이 정확히 \(3\)개가 된다</figcaption></figure>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 극솟값을 구한다</div>
    <p>\(f'(x)=\dfrac32(x-2)\left(x-\dfrac83\right)\)이므로 \(f(x)\)는 \(x=\dfrac83\)에서 극소이고, 이때 \(g(x)\)도 극소이다.</p>
    $$
    f\!\left(\frac83\right)=\frac12\times\frac53\times\left(\frac{64}{9}-16+10\right)
    =\frac12\times\frac53\times\frac{10}{9}=\frac{25}{27},
    $$
    $$
    g\!\left(\frac83\right)=\ln\frac{25}{27}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_mock09/common/q01": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(2\)로 통일한다</div>
    <p>\(\dfrac{2^{\sqrt3}}{2}=2^{\sqrt3-1}\)이므로</p>
    $$
    \left(\frac{2^{\sqrt3}}{2}\right)^{\sqrt3+1}
    =\left(2^{\sqrt3-1}\right)^{\sqrt3+1}
    =2^{(\sqrt3-1)(\sqrt3+1)}=2^{3-1}=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_mock09/common/q02": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 주어진 극한은 미분계수의 정의이다</div>
    <p>\(\displaystyle\lim_{x\to2}\dfrac{f(x)-f(2)}{x-2}=f'(2)\)이고 \(f'(x)=4x\)이므로</p>
    $$
    f'(2)=4\times2=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2023_mock09/common/q03": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sin\theta\)를 구한다</div>
    <p>\(\sin(\pi-\theta)=\sin\theta\)이므로 \(\sin\theta=\dfrac5{13}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\cos\theta\)의 부호를 정한다</div>
    <p>\(\cos^2\theta=1-\dfrac{25}{169}=\dfrac{144}{169}\)이고 \(\cos\theta&lt;0\)이므로 \(\cos\theta=-\dfrac{12}{13}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\tan\theta\)를 구한다</div>
    $$
    \tan\theta=\frac{\sin\theta}{\cos\theta}
    =\frac{\frac5{13}}{-\frac{12}{13}}=-\frac5{12}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_mock09/common/q04": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x=a\)에서의 연속 조건을 세운다</div>
    <p>\(x\ne a\)에서는 다항함수이므로 연속이다. \(f(a)=-2a+a=-a\)이고</p>
    $$
    \lim_{x\to a+}f(x)=a\cdot a-6=a^2-6
    $$
    <p>이므로 \(-a=a^2-6\)이어야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a\)를 구해 합한다</div>
    $$
    a^2+a-6=0,\qquad (a+3)(a-2)=0,
    $$
    <p>따라서 \(a=-3\) 또는 \(a=2\)이고 모든 \(a\)의 값의 합은</p>
    $$
    -3+2=-1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2023_mock09/common/q05": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫째항과 공차의 관계를 구한다</div>
    <p>공차를 \(d\)라 하면 \(a_1=2a_5=2(a_1+4d)\)에서</p>
    $$
    a_1=-8d.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 번째 조건을 대입한다</div>
    $$
    a_8+a_{12}=(a_1+7d)+(a_1+11d)=2a_1+18d=-6,
    $$
    <p>여기에 \(a_1=-8d\)를 넣으면 \(2d=-6\), 즉 \(d=-3\)이고 \(a_1=24\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_2\)를 구한다</div>
    $$
    a_2=a_1+d=24-3=21.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_mock09/common/q06": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극대·극소가 되는 \(x\)를 찾는다</div>
    $$
    f'(x)=3x^2-6x=3x(x-2)
    $$
    <p>이므로 \(f(x)\)는 \(x=0\)에서 극대, \(x=2\)에서 극소이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극댓값으로 \(k\)를 정한 뒤 극솟값을 구한다</div>
    <p>극댓값이 \(f(0)=k=9\)이므로</p>
    $$
    f(2)=8-12+9=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_mock09/common/q07": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(S_k-a_k\)를 간단히 한다</div>
    <p>\(k\ge2\)일 때 \(a_k=S_k-S_{k-1}\)이므로 \(S_k-a_k=S_{k-1}\)이고, \(k=1\)일 때는 \(a_1=S_1\)이므로 \(S_1-a_1=0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 합을 \(S_j\)의 합으로 바꾼다</div>
    $$
    \sum_{k=1}^{10}(S_k-a_k)=0+\sum_{k=2}^{10}S_{k-1}=\sum_{j=1}^{9}S_j.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부분분수로 계산한다</div>
    $$
    \sum_{j=1}^{9}\frac{1}{j(j+1)}
    =\sum_{j=1}^{9}\left(\frac1j-\frac1{j+1}\right)
    =1-\frac1{10}=\frac9{10}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_mock09/common/q08": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접선의 방정식을 구한다</div>
    <p>\(y=x^3-4x+5\)에서 \(y'=3x^2-4\)이므로 점 \((1,2)\)에서의 접선의 기울기는 \(-1\)이고</p>
    $$
    y-2=-(x-1),\qquad y=-x+3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 접한다는 조건을 중근으로 바꾼다</div>
    <p>이 직선이 \(y=x^4+3x+a\)에 접하므로 \(x^4+3x+a=-x+3\), 즉</p>
    $$
    h(x)=x^4+4x+a-3=0
    $$
    <p>이 중근을 가져야 하고, 접점에서는 \(h'(x)=0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 접점을 구해 \(a\)를 정한다</div>
    $$
    h'(x)=4x^3+4=4(x+1)(x^2-x+1)=0
    $$
    <p>에서 \(x=-1\)이고, \(h(-1)=1-4+a-3=0\)이므로</p>
    $$
    a=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2023_mock09/common/q09": { answer: 3, html: String.raw`
  <div class="sol-box">\(f(x)\)와 \(g(x)\)는 모두 \(\cos\dfrac{\pi x}{6}\)의 값으로 정해지므로, 먼저 \(|\alpha_1-\alpha_2|=8\)에서 \(k\)를 구한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(k\)의 값을 구한다</div>
    <p>\(f(x)=\cos\dfrac{\pi x}{6}\)의 주기는 \(12\)이므로 닫힌구간 \([0,12]\)에서 그래프는 \(x=6\)에 대하여 대칭이다. 따라서 두 교점은 \(6-t\), \(6+t\) 꼴이고 \(|\alpha_1-\alpha_2|=2t=8\)에서 \(t=4\), 즉 두 교점의 \(x\)좌표는 \(2\), \(10\)이다.</p>
    $$
    k=f(2)=\cos\frac{\pi}{3}=\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(g(x)=k\)를 푼다</div>
    $$
    -3\cos\frac{\pi x}{6}-1=\frac12,\qquad \cos\frac{\pi x}{6}=-\frac12.
    $$
    <p>\(0\le x\le12\)에서 \(0\le\dfrac{\pi x}{6}\le2\pi\)이므로</p>
    $$
    \frac{\pi x}{6}=\frac{2\pi}{3}\ \text{또는}\ \frac{4\pi}{3},
    \qquad x=4\ \text{또는}\ x=8.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 차를 구한다</div>
    $$
    |\beta_1-\beta_2|=|4-8|=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_mock09/common/q10": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 점 \(\mathrm P\)의 위치를 구한다</div>
    <p>원점에서 출발하므로 시각 \(t\)에서의 위치는</p>
    $$
    x(t)=\int_0^t(3s^2+as)\,ds=t^3+\frac a2t^2.
    $$
    <p>따라서 \(x(2)=8+2a\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 거리 조건을 세운다</div>
    <p>점 \(\mathrm A\)의 좌표가 \(6\)이므로</p>
    $$
    |x(2)-6|=|2+2a|=10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구한다</div>
    <p>\(2+2a=10\)에서 \(a=4\)이고, \(2+2a=-10\)에서 \(a=-6\)은 \(a&gt;0\)에 맞지 않는다.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_mock09/common/q11": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 네제곱근 중 실수인 것의 곱을 구한다</div>
    <p>\(A=\left(\sqrt3\right)^{f(n)}=3^{\frac{f(n)}{2}}\)이라 하면 \(A&gt;0\)이므로 \(x^4=A\)의 실근은 \(\pm\sqrt[4]{A}\)의 두 개이고, 그 곱은</p>
    $$
    -\sqrt[4]{A}\times\sqrt[4]{A}=-\sqrt{A}=-3^{\frac{f(n)}{4}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건에서 \(f(n)\)을 정한다</div>
    $$
    -3^{\frac{f(n)}{4}}=-9=-3^2,\qquad \frac{f(n)}{4}=2,\qquad f(n)=8.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 자연수 \(n\)이 \(2\)개일 조건을 찾는다</div>
    <p>\(-(n-2)^2+k=8\)에서 \((n-2)^2=k-8\)이다. 이를 만족시키는 자연수 \(n\)이 존재하려면 \(k-8\)이 어떤 자연수 \(m\)에 대하여 \(m^2\) 꼴이어야 하고, 이때 \(n=2+m\) 또는 \(n=2-m\)이다.</p>
    <p>두 값이 모두 자연수이려면 \(2-m\ge1\), 즉 \(m\le1\)이므로 \(m=1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(k\)를 구한다</div>
    $$
    k-8=1,\qquad k=9.
    $$
    <p>이때 \(n=1\), \(n=3\)의 \(2\)개이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_mock09/common/q12": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 교점의 \(x\)좌표를 근으로 본다</div>
    <p>\(x^2=x+t\)에서 \(x^2-x-t=0\)이고, 두 근을 \(\alpha\)(점 \(\mathrm A\)), \(\beta\)(점 \(\mathrm B\))라 하면 근과 계수의 관계에서</p>
    $$
    \alpha+\beta=1,\qquad \alpha\beta=-t.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 세 점 \(\mathrm C\), \(\mathrm H\)의 좌표를 구한다</div>
    <p>점 \(\mathrm C\)는 \(y=x^2\) 위에서 \(\mathrm A(\alpha,\alpha^2)\)와 \(y\)좌표가 같은 다른 점이므로 \(\mathrm C(-\alpha,\alpha^2)\)이고, 선분 \(\mathrm{AC}\)가 \(x\)축에 평행하므로 수선의 발은 \(\mathrm H(\beta,\alpha^2)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 길이를 구한다</div>
    $$
    \overline{\mathrm{AH}}=\alpha-\beta=\sqrt{(\alpha+\beta)^2-4\alpha\beta}=\sqrt{1+4t},
    $$
    $$
    \overline{\mathrm{CH}}=|\beta-(-\alpha)|=|\alpha+\beta|=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 극한을 계산한다</div>
    $$
    \lim_{t\to0+}\frac{\sqrt{1+4t}-1}{t}
    =\lim_{t\to0+}\frac{4t}{t\left(\sqrt{1+4t}+1\right)}
    =\frac42=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_mock09/common/q13": { answer: 5, html: String.raw`
  <div class="sol-box">\(\angle\mathrm{CEA}=\dfrac34\pi\)이므로 \(\angle\mathrm{CED}=\dfrac\pi4\), \(\angle\mathrm{OED}=\dfrac34\pi\)이다. 반지름을 미지수로 두고 삼각형 \(\mathrm{OED}\)에서 코사인법칙을 쓴다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\overline{\mathrm{CD}}\)를 구한다</div>
    <p>세 점 \(\mathrm A\), \(\mathrm E\), \(\mathrm D\)가 한 직선 위에 있으므로 \(\angle\mathrm{CED}=\pi-\dfrac34\pi=\dfrac\pi4\)이고, 삼각형 \(\mathrm{CED}\)에서</p>
    $$
    \overline{\mathrm{CD}}^{\,2}=4^2+(3\sqrt2)^2-2\times4\times3\sqrt2\times\frac{\sqrt2}{2}=34-24=10,
    $$
    $$
    \overline{\mathrm{CD}}=\sqrt{10}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 반원의 반지름을 구한다</div>
    <p>반지름을 \(r\)라 하면 \(\overline{\mathrm{OC}}=\overline{\mathrm{OD}}=r\)이고 점 \(\mathrm E\)가 선분 \(\mathrm{CO}\) 위에 있으므로 \(\overline{\mathrm{OE}}=r-4\)이다. 또 \(\angle\mathrm{OED}=\pi-\dfrac\pi4=\dfrac34\pi\)이므로 삼각형 \(\mathrm{OED}\)에서</p>
    $$
    r^2=(r-4)^2+18-2(r-4)\times3\sqrt2\times\left(-\frac{\sqrt2}{2}\right),
    $$
    $$
    0=-8r+34+6(r-4)=-2r+10,\qquad r=5.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\overline{\mathrm{AE}}\)를 구한다</div>
    <p>\(\overline{\mathrm{OA}}=5\), \(\overline{\mathrm{OE}}=1\), \(\angle\mathrm{AEO}=\pi-\dfrac34\pi=\dfrac\pi4\)이므로 삼각형 \(\mathrm{AEO}\)에서</p>
    $$
    25=\overline{\mathrm{AE}}^{\,2}+1-2\times\overline{\mathrm{AE}}\times\frac{\sqrt2}{2},
    $$
    $$
    \overline{\mathrm{AE}}^{\,2}-\sqrt2\,\overline{\mathrm{AE}}-24=0,\qquad \overline{\mathrm{AE}}=4\sqrt2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(\overline{\mathrm{AC}}\)를 구해 답을 낸다</div>
    <p>삼각형 \(\mathrm{AEC}\)에서 \(\angle\mathrm{AEC}=\dfrac34\pi\)이므로</p>
    $$
    \overline{\mathrm{AC}}^{\,2}=32+16-2\times4\sqrt2\times4\times\left(-\frac{\sqrt2}{2}\right)=48+32=80,
    $$
    $$
    \overline{\mathrm{AC}}=4\sqrt5,
    \qquad
    \overline{\mathrm{AC}}\times\overline{\mathrm{CD}}=4\sqrt5\times\sqrt{10}=20\sqrt2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_mock09/common/q14": { answer: 5, html: String.raw`
  <div class="sol-box">\(f(0)=f(1)=0\)이므로 \(f(x)=x(x-1)(x-a)\)로 놓고, \(M=\displaystyle\int_0^1|f(x)|dx\)를 이용해 \(g(-1)\)과 \(g(0)\)을 \(a\)로 나타낸다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> ㄱ의 판정</div>
    <p>\(g(0)=\displaystyle\int_0^1f(x)dx-M=\int_0^1\{f(x)-|f(x)|\}dx\le0\)이고, 등호는 \([0,1]\)에서 \(f(x)\ge0\)일 때 성립한다. \(0&lt;x&lt;1\)에서 \(x(x-1)&lt;0\)이므로 \(f(x)\ge0\)이려면 \(x-a\le0\), 즉 \(a\ge1\)이다.</p>
    <p>이때 \(-1&lt;x&lt;0\)에서는 \(x(x-1)&gt;0\), \(x-a&lt;0\)이므로 \(f(x)&lt;0\)이고</p>
    $$
    g(-1)=\int_{-1}^{0}f(x)\,dx-M&lt;0.
    $$
    <p>따라서 <b>ㄱ은 옳다</b>.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\displaystyle\int_{-1}^{1}f(x)dx\)를 구한다</div>
    <p>\(f(x)=x^3-(1+a)x^2+ax\)이고 홀수차 항의 정적분은 \(0\)이므로</p>
    $$
    \int_{-1}^{1}f(x)\,dx=-(1+a)\int_{-1}^{1}x^2\,dx=-\frac23(1+a).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄴ의 판정</div>
    <p>\(g(-1)&gt;0\)이면 \(\displaystyle\int_{-1}^{0}f\,dx&gt;M&gt;0\)이므로 \(-1&lt;x&lt;0\)의 일부에서 \(f(x)&gt;0\)이고, 그곳에서 \(x-a&gt;0\)이어야 하므로 \(a&lt;0\)이다.</p>
    <p>\(a&lt;0\)이면 \(0&lt;x&lt;1\)에서 \(f(x)&lt;0\)이므로 \(M=-\displaystyle\int_0^1f\,dx\)이고</p>
    $$
    g(-1)=\int_{-1}^{0}f\,dx-M=\int_{-1}^{1}f\,dx=-\frac23(1+a).
    $$
    <p>\(g(-1)&gt;0\)에서 \(1+a&lt;0\), 즉 \(a&lt;-1\)이다. \(f(a)=0\)이므로 \(k=a\)가 조건을 만족시킨다. 따라서 <b>ㄴ은 옳다</b>.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> ㄷ의 판정</div>
    <p>\(g(-1)&gt;1\)이면 위 식에서 \(-\dfrac23(1+a)&gt;1\), 즉 \(a&lt;-\dfrac52\)이다. 한편</p>
    $$
    M=-\int_0^1f(x)\,dx=-\left\{\frac14-\frac{1+a}{3}+\frac a2\right\}=\frac1{12}-\frac a6
    $$
    <p>이므로 \(a&lt;-\dfrac52\)에서 \(M&gt;\dfrac1{12}+\dfrac5{12}=\dfrac12\)이다. 또 \(a&lt;0\)이므로</p>
    $$
    g(0)=\int_0^1f\,dx-M=-M-M=-2M&lt;-1.
    $$
    <p>따라서 <b>ㄷ은 옳다</b>.</p>
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_mock09/common/q15": { answer: 3, html: String.raw`
  <div class="sol-box">조건 (가)에서 \(|a_{4k}|=|r|^k&lt;1\)이므로, \(a_{4k}\)를 출발점으로 네 항을 진행시켜 \(r\)를 먼저 결정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 한 주기를 진행시켜 \(r\)를 구한다</div>
    <p>\(a_{4k}=v\)라 하면 \(|v|&lt;1\)이므로</p>
    $$
    a_{4k+1}=v+3,\qquad a_{4k+2}=v+6
    $$
    <p>이고, \(v+6\)은 \(5\)와 \(7\) 사이의 수이므로 \(|a_{4k+2}|\ge5\)이다. 따라서</p>
    $$
    a_{4k+3}=-\frac{v+6}{2}=-\frac v2-3,
    \qquad
    a_{4k+4}=-\frac v2.
    $$
    <p>즉 \(a_{4(k+1)}=-\dfrac12a_{4k}\)이므로 \(r=-\dfrac12\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_1\)을 역추적한다</div>
    <p>\(a_4=r=-\dfrac12\)이다. \(a_3+3=-\dfrac12\)이면 \(a_3=-\dfrac72\)이고 \(\left|-\dfrac72\right|&lt;5\)이므로 알맞다.</p>
    <p>\(a_2\)는 \(a_2+3=-\dfrac72\)이면 \(a_2=-\dfrac{13}{2}\)이 되어 \(|a_2|\ge5\)와 어긋나므로, \(-\dfrac{a_2}{2}=-\dfrac72\)에서 \(a_2=7\)이다.</p>
    <p>\(a_1\)은 \(a_1+3=7\)이면 \(a_1=4&gt;0\)이 되어 조건에 맞지 않으므로, \(-\dfrac{a_1}{2}=7\)에서</p>
    $$
    a_1=-14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(|a_m|\ge5\)인 \(m\)을 센다</div>
    <p>\(a_1=-14\), \(a_2=7\)은 모두 절댓값이 \(5\) 이상이고, \(a_3=-\dfrac72\), \(a_4=-\dfrac12\)는 그렇지 않다. 1단계에서 보았듯 \(k\ge1\)일 때 네 항 \(a_{4k},a_{4k+1},a_{4k+2},a_{4k+3}\) 중 절댓값이 \(5\) 이상인 것은 \(a_{4k+2}\) 하나뿐이다.</p>
    <p>따라서 \(|a_m|\ge5\)인 \(m\)은 \(m=1\)과 \(m\equiv2\pmod4\)인 \(m\)이다. \(100\) 이하에서</p>
    $$
    m=2,6,10,\ \cdots,\ 98\ (25\text{개}),\qquad m=1\ (1\text{개}),
    $$
    $$
    p=26.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답을 구한다</div>
    $$
    p+a_1=26+(-14)=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_mock09/common/q16": { answer: 7, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(3\)으로 통일한다</div>
    <p>\(\log_9(x+2)=\dfrac12\log_3(x+2)\)이므로</p>
    $$
    2\log_3(x-4)=\log_3(x+2),\qquad (x-4)^2=x+2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 방정식을 풀고 진수 조건을 확인한다</div>
    $$
    x^2-9x+14=0,\qquad (x-2)(x-7)=0.
    $$
    <p>진수 조건에서 \(x-4&gt;0\)이므로 \(x=7\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{7}\)</div>
` },

"2023_mock09/common/q17": { answer: 16, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부정적분으로 \(f(x)\)를 구한다</div>
    $$
    f(x)=\int(6x^2-4x+3)\,dx=2x^3-2x^2+3x+C.
    $$
    <p>\(f(1)=2-2+3+C=5\)이므로 \(C=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=2\)를 대입한다</div>
    $$
    f(2)=16-8+6+2=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{16}\)</div>
` },

"2023_mock09/common/q18": { answer: 13, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 시그마의 성질로 정리한다</div>
    $$
    \sum_{k=1}^{5}ca_k=c\sum_{k=1}^{5}a_k=10c,
    \qquad
    \sum_{k=1}^{5}c=5c.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(c\)를 구한다</div>
    $$
    10c=65+5c,\qquad 5c=65,\qquad c=13.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{13}\)</div>
` },

"2023_mock09/common/q19": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 방정식을 \(y=h(x)\)와 \(y=-k\)의 교점 문제로 바꾼다</div>
    <p>\(h(x)=3x^4-4x^3-12x^2\)이라 하면 주어진 방정식은 \(h(x)=-k\)이다.</p>
    $$
    h'(x)=12x^3-12x^2-24x=12x(x+1)(x-2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극값을 구한다</div>
    $$
    h(-1)=-5,\qquad h(0)=0,\qquad h(2)=-32
    $$
    <p>이므로 \(h(x)\)는 \(x=-1\)에서 극소 \(-5\), \(x=0\)에서 극대 \(0\), \(x=2\)에서 극소 \(-32\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 실근이 \(4\)개일 조건을 쓴다</div>
    <p>직선 \(y=-k\)가 두 극솟값 중 큰 값과 극댓값 사이에 있어야 하므로</p>
    $$
    -5&lt;-k&lt;0,\qquad 0&lt;k&lt;5.
    $$
    <p>자연수 \(k\)는 \(1,2,3,4\)의 \(4\)개이다.</p>
    <figure class="sol-fig"><img src="sol/2023_mock09_common_q19.png" alt="y=3x^4-4x^3-12x^2의 그래프와 수평선 y=-k"><figcaption>\(y=-k\)가 두 극솟값 중 큰 값 \(-5\)와 극댓값 \(0\) 사이에 있을 때만 교점이 \(4\)개</figcaption></figure>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{4}\)</div>
` },

"2023_mock09/common/q20": { answer: 80, html: String.raw`
  <div class="sol-box">\(g(x)=4|x|+k\)이므로 \(x\ge0\)과 \(x&lt;0\)으로 나누어 교점의 개수를 센 뒤, 그 개수가 \(2\)가 되도록 \(k\)를 정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 구간별로 교점의 방정식을 세운다</div>
    <p>\(x\ge0\)에서는 \(x^3+x^2-x=4x+k\), 즉 \(p(x)=x^3+x^2-5x=k\)이고,</p>
    <p>\(x&lt;0\)에서는 \(x^3+x^2-x=-4x+k\), 즉 \(q(x)=x^3+x^2+3x=k\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x&lt;0\)에서는 언제나 교점이 하나임을 확인한다</div>
    <p>\(q'(x)=3x^2+2x+3\)의 판별식이 \(4-36&lt;0\)이므로 \(q'(x)&gt;0\)이고 \(q(x)\)는 증가함수이다. \(q(0)=0\)이므로 \(k&lt;0\)일 때 \(x&lt;0\)에서 교점은 정확히 \(1\)개이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(x\ge0\)에서 교점이 하나가 되도록 \(k\)를 정한다</div>
    $$
    p'(x)=3x^2+2x-5=(3x+5)(x-1)
    $$
    <p>이므로 \(x\ge0\)에서 \(p(x)\)는 \(x=1\)에서 극소이면서 최소이고 \(p(0)=0\), \(p(1)=-3\)이다. \(k&lt;0\)이므로 교점이 \(1\)개이려면</p>
    $$
    k=p(1)=-3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 두 그래프의 차를 인수분해한다</div>
    <p>\(k=-3\)일 때 \(x&lt;0\)에서의 교점은 \(x^3+x^2+3x+3=(x+1)(x^2+3)=0\)에서 \(x=-1\)이다. 또</p>
    $$
    -1\le x&lt;0:\ f(x)-g(x)=(x+1)(x^2+3),
    $$
    $$
    0\le x\le1:\ f(x)-g(x)=x^3+x^2-5x+3=(x-1)^2(x+3)
    $$
    <p>이고 두 식 모두 이 구간에서 \(0\) 이상이므로, 둘러싸인 부분은 \(-1\le x\le1\)이다.</p>
    <figure class="sol-fig"><img src="sol/2023_mock09_common_q20.png" alt="f(x)와 g(x)=4|x|-3의 그래프, 둘러싸인 부분"><figcaption>\(x=1\)에서 접하고 \(x=-1\)에서 만나므로 교점은 \(2\)개</figcaption></figure>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 넓이를 구한다</div>
    $$
    \int_{-1}^{0}(x^3+x^2+3x+3)\,dx=\frac{19}{12},
    \qquad
    \int_{0}^{1}(x^3+x^2-5x+3)\,dx=\frac{13}{12},
    $$
    $$
    S=\frac{19}{12}+\frac{13}{12}=\frac83,
    \qquad
    30S=30\times\frac83=80.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{80}\)</div>
` },

"2023_mock09/prob_stat/q23": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이항정리의 일반항을 세운다</div>
    $$
    {}_6\mathrm C_r(x^2)^r2^{6-r}={}_6\mathrm C_r2^{6-r}x^{2r}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x^4\)의 계수를 구한다</div>
    <p>\(2r=4\)에서 \(r=2\)이므로</p>
    $$
    {}_6\mathrm C_2\times2^4=15\times16=240.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2023_mock09/prob_stat/q24": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건부확률이 같다는 조건을 해석한다</div>
    $$
    \mathrm P(A|B)=\frac{\mathrm P(A\cap B)}{\mathrm P(B)},
    \qquad
    \mathrm P(B|A)=\frac{\mathrm P(A\cap B)}{\mathrm P(A)}
    $$
    <p>이고 두 값이 같으므로 \(\mathrm P(A)=\mathrm P(B)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 확률의 덧셈정리를 쓴다</div>
    $$
    \mathrm P(A\cup B)=\mathrm P(A)+\mathrm P(B)-\mathrm P(A\cap B)
    =2\mathrm P(A)-\frac14=1,
    $$
    $$
    \mathrm P(A)=\frac58.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_mock09/prob_stat/q25": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> A 제품의 확률을 표준화한다</div>
    <p>A 제품의 중량을 \(X\)라 하면 \(X\)는 정규분포 \(\mathrm N(9,\ 0.4^2)\)를 따르므로</p>
    $$
    \mathrm P(8.9\le X\le9.4)
    =\mathrm P\!\left(\frac{8.9-9}{0.4}\le Z\le\frac{9.4-9}{0.4}\right)
    =\mathrm P(-0.25\le Z\le1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> B 제품의 확률을 표준화한다</div>
    <p>B 제품의 중량을 \(Y\)라 하면 \(Y\)는 \(\mathrm N(20,\ 1^2)\)을 따르므로</p>
    $$
    \mathrm P(19\le Y\le k)=\mathrm P(-1\le Z\le k-20).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 대칭성을 이용해 \(k\)를 구한다</div>
    <p>표준정규분포는 \(z=0\)에 대하여 대칭이므로 \(\mathrm P(-0.25\le Z\le1)=\mathrm P(-1\le Z\le0.25)\)이다. 따라서</p>
    $$
    k-20=0.25,\qquad k=20.25.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_mock09/prob_stat/q26": { answer: 2, html: String.raw`
  <div class="sol-box">여사건인 "A가 B와도 C와도 이웃하지 않는" 경우를 세는 편이 간단하다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 구한다</div>
    <p>\(7\)명의 원순열이므로</p>
    $$
    (7-1)!=720.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건의 경우의 수를 센다</div>
    <p>A의 자리를 고정하면 나머지 \(6\)자리 중 A의 양옆 \(2\)자리를 뺀 \(4\)자리에 B와 C를 앉히고, 남은 \(4\)명을 나머지 \(4\)자리에 앉히면 되므로</p>
    $$
    4\times3\times4!=12\times24=288.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 확률을 구한다</div>
    $$
    1-\frac{288}{720}=1-\frac25=\frac35.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_mock09/prob_stat/q27": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 평균과 \(\mathrm E(X^2)\)을 \(a\)로 나타낸다</div>
    $$
    \mathrm E(X)=0\times\frac1{10}+1\times\frac12+a\times\frac25=\frac12+\frac{2a}{5},
    $$
    $$
    \mathrm E(X^2)=0+1\times\frac12+a^2\times\frac25=\frac12+\frac{2a^2}{5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 \(\sigma(X)=\mathrm E(X)\)를 식으로 바꾼다</div>
    <p>양변을 제곱하면 \(\mathrm V(X)=\{\mathrm E(X)\}^2\)이고 \(\mathrm V(X)=\mathrm E(X^2)-\{\mathrm E(X)\}^2\)이므로</p>
    $$
    \mathrm E(X^2)=2\{\mathrm E(X)\}^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구한다</div>
    $$
    \frac12+\frac{2a^2}{5}=2\left(\frac12+\frac{2a}{5}\right)^2
    =\frac12+\frac{4a}{5}+\frac{8a^2}{25},
    $$
    $$
    \frac{2a^2}{25}=\frac{4a}{5},\qquad a^2=10a,\qquad a=10\ (a&gt;1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 값을 구한다</div>
    $$
    \mathrm E(X)=\frac12+4=\frac92,
    \qquad
    \mathrm E(X^2)=\frac12+40=\frac{81}{2},
    $$
    $$
    \mathrm E(X^2)+\mathrm E(X)=\frac{81}{2}+\frac92=45.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_mock09/prob_stat/q28": { answer: 3, html: String.raw`
  <div class="sol-box">합이 \(3\)의 배수인 경우를 \(3\)으로 나눈 나머지로 분류해 세고, 그중 \(5\)와 \(10\)을 모두 포함하지 않는 것을 빼면 곱이 \(5\)의 배수인 경우가 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 나머지로 분류한다</div>
    <p>\(1\)부터 \(10\)까지의 수를 \(3\)으로 나눈 나머지로 나누면</p>
    $$
    \text{나머지 }0:\ 3,6,9\ (3\text{개}),\quad
    \text{나머지 }1:\ 1,4,7,10\ (4\text{개}),\quad
    \text{나머지 }2:\ 2,5,8\ (3\text{개}).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 합이 \(3\)의 배수인 경우를 센다</div>
    <p>같은 나머지끼리 \(3\)개를 뽑거나, 세 나머지에서 하나씩 뽑으면 된다.</p>
    $$
    {}_3\mathrm C_3+{}_4\mathrm C_3+{}_3\mathrm C_3+3\times4\times3=1+4+1+36=42.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 곱이 \(5\)의 배수가 아닌 경우를 뺀다</div>
    <p>곱이 \(5\)의 배수가 아니려면 \(5\)와 \(10\)을 모두 뽑지 않아야 한다. 남는 수는 \(1,2,3,4,6,7,8,9\)이고 나머지별 개수는 각각 \(3,3,2\)이므로 합이 \(3\)의 배수인 경우는</p>
    $$
    {}_3\mathrm C_3+{}_3\mathrm C_3+{}_2\mathrm C_3+3\times3\times2=1+1+0+18=20.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 확률을 구한다</div>
    $$
    \frac{42-20}{{}_{10}\mathrm C_3}=\frac{22}{120}=\frac{11}{60}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_mock09/calculus/q23": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 항으로 나눈다</div>
    $$
    \frac{4^x-2^x}{x}=\frac{4^x-1}{x}-\frac{2^x-1}{x}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수함수의 극한 공식을 쓴다</div>
    $$
    \lim_{x\to0}\frac{a^x-1}{x}=\ln a
    $$
    <p>이므로</p>
    $$
    \ln4-\ln2=2\ln2-\ln2=\ln2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2023_mock09/calculus/q24": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 피적분함수를 간단히 한다</div>
    <p>\(\cos\!\left(\dfrac\pi2-x\right)=\sin x\)이므로 구하는 값은 \(\displaystyle\int_0^{\pi}x\sin x\,dx\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부분적분법을 적용한다</div>
    $$
    \int_0^{\pi}x\sin x\,dx
    =\Big[-x\cos x\Big]_0^{\pi}+\int_0^{\pi}\cos x\,dx
    =\pi+\Big[\sin x\Big]_0^{\pi}=\pi.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_mock09/calculus/q25": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a_n\)의 극한을 구한다</div>
    <p>\(\displaystyle\lim_{n\to\infty}\frac{a_n+2}{2}=6\)에서 \(\displaystyle\lim_{n\to\infty}a_n=10\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 분자와 분모를 \(n\)으로 나눈다</div>
    $$
    \lim_{n\to\infty}\frac{na_n+1}{a_n+2n}
    =\lim_{n\to\infty}\frac{a_n+\frac1n}{\frac{a_n}{n}+2}
    =\frac{10+0}{0+2}=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_mock09/calculus/q26": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 단면의 넓이를 구한다</div>
    <p>단면이 한 변의 길이가 \(y\)인 정사각형이므로 넓이는</p>
    $$
    y^2=\frac{kx}{2x^2+1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부피를 정적분으로 나타내고 치환한다</div>
    <p>\(2x^2+1=t\)로 놓으면 \(4x\,dx=dt\)이고 \(x=1\)일 때 \(t=3\), \(x=2\)일 때 \(t=9\)이므로</p>
    $$
    \int_1^2\frac{kx}{2x^2+1}\,dx
    =\frac k4\int_3^9\frac{dt}{t}
    =\frac k4\Big[\ln t\Big]_3^9
    =\frac k4\ln3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(k\)를 구한다</div>
    $$
    \frac k4\ln3=2\ln3,\qquad k=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_mock09/calculus/q27": { answer: 3, html: String.raw`
  <div class="sol-box">직각을 낀 두 변의 길이가 대각선의 절반과 같은 직각삼각형 두 개가 색칠되므로, 먼저 \(S_1\)을 구하고 다음 직사각형과의 닮음비를 찾는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(S_1\)을 구한다</div>
    <p>직사각형의 대각선의 길이가 \(\sqrt{4^2+1^2}=\sqrt{17}\)이므로</p>
    $$
    \overline{\mathrm D_1\mathrm E_1}=\overline{\mathrm C_1\mathrm E_1}=\frac{\sqrt{17}}{2}.
    $$
    <p>두 삼각형 \(\mathrm A_2\mathrm D_1\mathrm E_1\), \(\mathrm B_2\mathrm C_1\mathrm E_1\)은 각각 직각을 낀 두 변의 길이가 \(\dfrac{\sqrt{17}}{2}\)인 직각삼각형이므로</p>
    $$
    S_1=2\times\frac12\times\left(\frac{\sqrt{17}}{2}\right)^2=\frac{17}{4}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\overline{\mathrm A_2\mathrm B_2}\)를 구한다</div>
    <p>\(\mathrm A_1(0,0)\), \(\mathrm B_1(4,0)\), \(\mathrm C_1(4,1)\), \(\mathrm D_1(0,1)\)로 두면 \(\mathrm E_1(2,\tfrac12)\)이다. \(\overrightarrow{\mathrm D_1\mathrm E_1}=\left(2,-\tfrac12\right)\)에 수직이고 길이가 같은 벡터가 \(\left(\tfrac12,2\right)\)이므로</p>
    $$
    \mathrm A_2\!\left(\frac12,\,3\right),\qquad \mathrm B_2\!\left(\frac72,\,3\right),
    \qquad \overline{\mathrm A_2\mathrm B_2}=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 닮음비와 넓이의 비를 구한다</div>
    <p>새 직사각형도 가로와 세로의 비가 \(4:1\)이므로 처음 직사각형과 닮음이고</p>
    $$
    \text{닮음비}=\frac{\overline{\mathrm A_2\mathrm B_2}}{\overline{\mathrm A_1\mathrm B_1}}=\frac34,
    \qquad
    \text{넓이의 비}=\frac9{16}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 등비급수의 합을 구한다</div>
    $$
    \lim_{n\to\infty}S_n=\frac{\frac{17}{4}}{1-\frac9{16}}=\frac{17}{4}\times\frac{16}{7}=\frac{68}{7}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_mock09/calculus/q28": { answer: 4, html: String.raw`
  <div class="sol-box">\(\mathrm O\)를 원점, \(\mathrm A(1,0)\)으로 두고 \(\mathrm P(\cos\theta,\sin\theta)\)라 하면 \(\mathrm C\), \(\mathrm D\)의 좌표를 \(\theta\)로 쓸 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 점 \(\mathrm C\), \(\mathrm D\)를 구한다</div>
    <p>\(\mathrm D(d,0)\)이라 하면 \(\overline{\mathrm{PD}}=\overline{\mathrm{PA}}\)에서</p>
    $$
    d^2-2d\cos\theta+(2\cos\theta-1)=0,\qquad (d-1)\{d-(2\cos\theta-1)\}=0
    $$
    <p>이고 \(\mathrm D\ne\mathrm A\)이므로 \(\mathrm D(2\cos\theta-1,\ 0)\)이다.</p>
    <p>또 \(\overline{\mathrm{PC}}=\overline{\mathrm{PA}}\)이므로 두 현의 중심각이 같아 \(\mathrm C(\cos2\theta,\ \sin2\theta)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(g(\theta)\)를 구한다</div>
    <p>\(\overline{\mathrm{DA}}=1-(2\cos\theta-1)=2(1-\cos\theta)\)이다. 삼각형 \(\mathrm{OPA}\)가 이등변삼각형이므로 \(\angle\mathrm{DAE}=\angle\mathrm{OAP}=\dfrac{\pi-\theta}{2}\)이고, \(\overline{\mathrm{DE}}\parallel\overline{\mathrm{OP}}\)에서 \(\angle\mathrm{ADE}=\theta\)이므로 \(\angle\mathrm{AED}=\dfrac\pi2-\dfrac\theta2\)이다.</p>
    <p>사인법칙에서 \(\sin\angle\mathrm{DAE}=\sin\angle\mathrm{AED}=\cos\dfrac\theta2\)이므로 \(\overline{\mathrm{DE}}=\overline{\mathrm{DA}}\)이고</p>
    $$
    g(\theta)=\frac12\,\overline{\mathrm{DA}}\cdot\overline{\mathrm{DE}}\sin\theta
    =2(1-\cos\theta)^2\sin\theta.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(\theta)\)를 구한다</div>
    <p>\(\overrightarrow{\mathrm{PC}}=2\sin\dfrac\theta2\left(-\sin\dfrac{3\theta}{2},\ \cos\dfrac{3\theta}{2}\right)\), \(\overrightarrow{\mathrm{PD}}=-2\sin\dfrac\theta2\left(\sin\dfrac\theta2,\ \cos\dfrac\theta2\right)\)이므로 두 벡터가 이루는 각은 \(\pi-2\theta\)이다. \(\overline{\mathrm{PC}}=\overline{\mathrm{PD}}=2\sin\dfrac\theta2\)이므로</p>
    $$
    f(\theta)=\frac12\left(2\sin\frac\theta2\right)^2\sin(\pi-2\theta)
    =2\sin^2\frac\theta2\,\sin2\theta.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 극한을 계산한다</div>
    <p>\(1-\cos\theta=2\sin^2\dfrac\theta2\), \(\sin2\theta=2\sin\theta\cos\theta\)를 대입하면</p>
    $$
    \frac{g(\theta)}{\theta^2f(\theta)}
    =\frac{8\sin^4\frac\theta2\,\sin\theta}{2\theta^2\sin^2\frac\theta2\,\sin2\theta}
    =\frac{2\sin^2\frac\theta2}{\theta^2\cos\theta},
    $$
    $$
    \lim_{\theta\to0+}\frac{2\sin^2\frac\theta2}{\theta^2\cos\theta}
    =\lim_{\theta\to0+}\frac12\left(\frac{\sin\frac\theta2}{\frac\theta2}\right)^2\frac{1}{\cos\theta}
    =\frac12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },


"2023_csat/common/q01": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(2\)로 통일한다</div>
    $$
    \left(\frac{4}{2^{\sqrt2}}\right)^{2+\sqrt2}
    =\left(2^{2-\sqrt2}\right)^{2+\sqrt2}
    =2^{(2-\sqrt2)(2+\sqrt2)}=2^{4-2}=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_csat/common/q02": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분자와 분모를 \(x\)로 나눈다</div>
    <p>\(x\to\infty\)이므로 \(x&gt;0\)으로 보아 \(\sqrt{x^2-2}=x\sqrt{1-\dfrac2{x^2}}\)이다.</p>
    $$
    \lim_{x\to\infty}\frac{\sqrt{x^2-2}+3x}{x+5}
    =\lim_{x\to\infty}\frac{\sqrt{1-\frac2{x^2}}+3}{1+\frac5x}
    =\frac{1+3}{1}=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_csat/common/q03": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 조건을 공비로 연결한다</div>
    <p>공비를 \(r\ (r&gt;0)\)라 하면 \(a_4+a_6=r^2(a_2+a_4)\)이므로</p>
    $$
    r^2\times30=\frac{15}{2},\qquad r^2=\frac14,\qquad r=\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 첫째항을 구한다</div>
    $$
    a_2+a_4=a_1r+a_1r^3=a_1\left(\frac12+\frac18\right)=\frac58a_1=30,
    $$
    $$
    a_1=30\times\frac85=48.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2023_csat/common/q04": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 적용한다</div>
    $$
    g'(x)=2xf(x)+x^2f'(x).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=2\)를 대입한다</div>
    $$
    g'(2)=4f(2)+4f'(2)=4\times1+4\times3=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_csat/common/q05": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sin\theta\)를 구한다</div>
    <p>\(\cos\!\left(\dfrac\pi2+\theta\right)=-\sin\theta\)이므로</p>
    $$
    \sin\theta=-\frac{\sqrt5}{5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\theta\)가 있는 사분면을 정한다</div>
    <p>\(\tan\theta&lt;0\)이고 \(\sin\theta&lt;0\)이므로 \(\theta\)는 제4사분면의 각이고 \(\cos\theta&gt;0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\cos\theta\)를 구한다</div>
    $$
    \cos^2\theta=1-\left(\frac{\sqrt5}{5}\right)^2=\frac45,
    \qquad
    \cos\theta=\frac{2\sqrt5}{5}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_csat/common/q06": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x=1\)이 극점임을 이용해 \(a\)를 구한다</div>
    $$
    f'(x)=6x^2-18x+a,\qquad f'(1)=6-18+a=0,\qquad a=12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극소가 되는 \(x\)를 찾는다</div>
    $$
    f'(x)=6x^2-18x+12=6(x-1)(x-2)
    $$
    <p>이므로 \(f'(x)\)의 부호는 \(x=1\)에서 양에서 음, \(x=2\)에서 음에서 양으로 바뀐다. 따라서 \(f(x)\)는 \(x=2\)에서 극소이고 \(b=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 답을 구한다</div>
    $$
    a+b=12+2=14.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_csat/common/q07": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항을 쓴다</div>
    <p>첫째항과 공차가 같으므로 그 값을 \(a\)라 하면</p>
    $$
    a_n=a+(n-1)\times a=an.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 분모를 유리화해 망원합으로 만든다</div>
    $$
    \frac{1}{\sqrt{a_k}+\sqrt{a_{k+1}}}
    =\frac{\sqrt{a_{k+1}}-\sqrt{a_k}}{a_{k+1}-a_k}
    =\frac{\sqrt{a_{k+1}}-\sqrt{a_k}}{a}
    $$
    <p>이므로</p>
    $$
    \sum_{k=1}^{15}\frac{1}{\sqrt{a_k}+\sqrt{a_{k+1}}}
    =\frac{\sqrt{a_{16}}-\sqrt{a_1}}{a}
    =\frac{\sqrt{16a}-\sqrt{a}}{a}
    =\frac{3\sqrt a}{a}=\frac{3}{\sqrt a}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구해 \(a_4\)를 계산한다</div>
    $$
    \frac{3}{\sqrt a}=2,\qquad \sqrt a=\frac32,\qquad a=\frac94,
    $$
    $$
    a_4=4a=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_csat/common/q08": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접점을 문자로 두고 접선을 세운다</div>
    <p>접점을 \((t,\,t^3-t+2)\)라 하자. \(y'=3x^2-1\)이므로 접선의 방정식은</p>
    $$
    y-(t^3-t+2)=(3t^2-1)(x-t).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 점 \((0,4)\)를 지나는 조건으로 \(t\)를 구한다</div>
    $$
    4-(t^3-t+2)=(3t^2-1)(0-t)=-3t^3+t,
    $$
    $$
    -t^3+t+2=-3t^3+t,\qquad 2t^3=-2,\qquad t=-1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 접선을 확정하고 \(x\)절편을 구한다</div>
    <p>접점은 \((-1,\,2)\), 기울기는 \(3(-1)^2-1=2\)이므로 접선은 \(y=2x+4\)이고</p>
    $$
    2x+4=0,\qquad x=-2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_csat/common/q09": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f\)가 감소함수임을 확인한다</div>
    <p>\(y=\tan 2x\)는 \(2x\)가 \(-\dfrac\pi2\)와 \(\dfrac\pi2\) 사이, 즉 \(-\dfrac\pi4&lt;x&lt;\dfrac\pi4\)에서 증가한다. 앞에 \(-\sqrt3\)이 곱해져 있으므로 이 범위에서 \(f(x)=a-\sqrt3\tan 2x\)는 감소한다.</p>
    <p>따라서 닫힌구간 \(\left[-\dfrac\pi6,\,b\right]\)에서 최댓값은 \(x=-\dfrac\pi6\), 최솟값은 \(x=b\)에서 나온다. (\(b&lt;\dfrac\pi4\))</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 최댓값에서 \(a\)를 구한다</div>
    $$
    f\!\left(-\frac\pi6\right)=a-\sqrt3\tan\!\left(-\frac\pi3\right)=a-\sqrt3\times(-\sqrt3)=a+3=7,
    $$
    $$
    a=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 최솟값에서 \(b\)를 구한다</div>
    $$
    4-\sqrt3\tan 2b=3,\qquad \tan 2b=\frac{1}{\sqrt3},
    $$
    <p>\(0&lt;2b&lt;\dfrac\pi2\)이므로 \(2b=\dfrac\pi6\), 즉 \(b=\dfrac\pi{12}\)이다.</p>
    $$
    a\times b=4\times\frac\pi{12}=\frac\pi3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_csat/common/q10": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 곡선의 차를 하나의 함수로 둔다</div>
    <p>\(h(x)=(-x^2+k)-(x^3+x^2)=-x^3-2x^2+k\)라 하자. 두 곡선이 만나는 \(x\)좌표를 \(\alpha\ (0&lt;\alpha&lt;2)\)라 하면 그림에서 \(0&lt;x&lt;\alpha\)일 때 \(h(x)&gt;0\), \(\alpha&lt;x&lt;2\)일 때 \(h(x)&lt;0\)이다. 따라서</p>
    $$
    A=\int_0^{\alpha}h(x)\,dx,\qquad B=\int_{\alpha}^{2}\{-h(x)\}\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(A=B\)를 하나의 정적분으로 바꾼다</div>
    <p>\(A-B=\displaystyle\int_0^{\alpha}h(x)\,dx+\int_{\alpha}^{2}h(x)\,dx=\int_0^{2}h(x)\,dx\)이므로 \(A=B\)는 다음과 같다.</p>
    $$
    \int_0^{2}(-x^3-2x^2+k)\,dx=0.
    $$
    <p>이렇게 두면 \(\alpha\)를 직접 구하지 않아도 된다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 계산해 \(k\)를 구한다</div>
    $$
    \left[-\frac{x^4}{4}-\frac{2}{3}x^3+kx\right]_0^{2}=-4-\frac{16}{3}+2k=0,
    $$
    $$
    2k=\frac{28}{3},\qquad k=\frac{14}{3}.
    $$
    <p>\(4&lt;\dfrac{14}{3}&lt;5\)이므로 조건에 맞는다.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_csat/common/q11": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\overline{\mathrm{BC}}=\overline{\mathrm{CD}}\)임을 이용해 식을 만든다</div>
    <p>\(\angle\mathrm{BAC}=\angle\mathrm{CAD}=\theta\)라 하면, 크기가 같은 원주각에 대한 현의 길이가 같으므로 \(\overline{\mathrm{BC}}=\overline{\mathrm{CD}}\)이다.</p>
    <p>삼각형 \(\mathrm{ABC}\)와 삼각형 \(\mathrm{ACD}\)에서 코사인법칙을 쓰면</p>
    $$
    \overline{\mathrm{BC}}^{\,2}=5^2+(3\sqrt5)^2-2\times5\times3\sqrt5\cos\theta=70-30\sqrt5\cos\theta,
    $$
    $$
    \overline{\mathrm{CD}}^{\,2}=(3\sqrt5)^2+7^2-2\times3\sqrt5\times7\cos\theta=94-42\sqrt5\cos\theta.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\cos\theta\)와 \(\overline{\mathrm{BC}}\)를 구한다</div>
    $$
    70-30\sqrt5\cos\theta=94-42\sqrt5\cos\theta,\qquad 12\sqrt5\cos\theta=24,
    $$
    $$
    \cos\theta=\frac{2}{\sqrt5}=\frac{2\sqrt5}{5}.
    $$
    <p>이를 대입하면</p>
    $$
    \overline{\mathrm{BC}}^{\,2}=70-30\sqrt5\times\frac{2}{\sqrt5}=10,\qquad \overline{\mathrm{BC}}=\sqrt{10}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 사인법칙으로 반지름을 구한다</div>
    <p>\(0&lt;\theta&lt;\dfrac\pi2\)이므로 \(\sin\theta=\sqrt{1-\dfrac45}=\dfrac{\sqrt5}{5}\)이다. 삼각형 \(\mathrm{ABC}\)의 외접원이 곧 주어진 원이므로</p>
    $$
    \frac{\overline{\mathrm{BC}}}{\sin\theta}=2R,\qquad
    \frac{\sqrt{10}}{\frac{\sqrt5}{5}}=5\sqrt2=2R,
    $$
    $$
    R=\frac{5\sqrt2}{2}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2023_csat/common/q12": { answer: 2, html: String.raw`
  <div class="sol-box">각 구간에서 \(f\)의 부호만 두 가지뿐이므로, 구간마다 \(\int f=\pm1\)이라는 사실로 문제를 정수 맞추기로 바꾼다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(g\)를 미분한다</div>
    $$
    g(x)=\int_0^x f(t)\,dt-\int_x^4 f(t)\,dt
    \;\Longrightarrow\;
    g'(x)=f(x)-\{-f(x)\}=2f(x).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 각 구간에서 \(f\)의 모양을 정리한다</div>
    <p>조건에서 \(n-1\le x&lt;n\)일 때 \(|f(x)|=|6(x-n+1)(x-n)|\)이고 \(f\)가 연속이므로, 각 구간에서</p>
    $$
    f(x)=6(x-n+1)(x-n)\quad\text{또는}\quad f(x)=-6(x-n+1)(x-n)
    $$
    <p>중 하나이다. 어느 쪽이든 양 끝 \(x=n-1,\ n\)에서 \(f=0\)이라 연속으로 이어붙는다. 또 \(u=x-(n-1)\)로 놓으면</p>
    $$
    \int_{n-1}^{n}6(x-n+1)(x-n)\,dx=\int_0^1 6u(u-1)\,du=-1
    $$
    <p>이므로, 각 구간의 정적분 값은 \(-1\) 또는 \(+1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(x=2\)에서 최소인 조건으로 두 구간을 확정한다</div>
    <p>\(g'=2f\)이고 \(g\)가 \(x=2\)에서 최솟값을 가지므로 \(f\)의 부호가 \(x=2\)의 좌우에서 음에서 양으로 바뀌어야 한다. 따라서</p>
    $$
    1&lt;x&lt;2:\ f(x)=6(x-1)(x-2)&lt;0,\qquad
    2&lt;x&lt;3:\ f(x)=-6(x-2)(x-3)&gt;0,
    $$
    $$
    \int_1^2 f=-1,\qquad \int_2^3 f=+1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 최솟값이 \(0\)인 조건으로 나머지 두 구간을 확정한다</div>
    $$
    g(2)=\int_0^2 f-\int_2^4 f=0
    \;\Longrightarrow\;
    \left(\int_0^1 f\right)-1=1+\left(\int_3^4 f\right).
    $$
    <p>양변의 값이 모두 \(\pm1\)이므로 이 등식이 성립하려면</p>
    $$
    \int_0^1 f=1,\qquad \int_3^4 f=-1,
    $$
    <p>즉 \(0&lt;x&lt;1\)에서 \(f(x)=-6x(x-1)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 구하는 정적분을 계산한다</div>
    $$
    \int_{\frac12}^{4}f
    =\int_{\frac12}^{1}f+\int_1^2 f+\int_2^3 f+\int_3^4 f
    =\int_{\frac12}^{1}f-1.
    $$
    <p>\(\displaystyle\int_{\frac12}^{1}f=\int_0^1 f-\int_0^{\frac12}f=1-\int_0^{\frac12}f\)이므로</p>
    $$
    \int_{\frac12}^{4}f=-\int_0^{\frac12}f
    =-\int_0^{\frac12}(-6x^2+6x)\,dx
    =-\Big[-2x^3+3x^2\Big]_0^{\frac12}
    =-\left(-\frac14+\frac34\right)=-\frac12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_csat/common/q13": { answer: 3, html: String.raw`
  <div class="sol-box">\(m^{12}\)을 소인수분해해 두면, 정수인 \(n\)제곱근이 있을 조건이 "\(n\)이 지수를 나눈다"로 바뀐다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f(m)\)의 정체를 밝힌다</div>
    <p>\(m^{12}\)의 \(n\)제곱근 중 정수가 있다는 것은 \(x^n=m^{12}\)을 만족하는 정수 \(x\)가 있다는 뜻이다. \(m=p_1^{e_1}p_2^{e_2}\cdots\)라 하고 \(|x|=p_1^{c_1}p_2^{c_2}\cdots\)라 하면</p>
    $$
    nc_i=12e_i\quad(\text{모든 }i)
    $$
    <p>이어야 하므로, 조건은 <b>\(n\)이 모든 \(12e_i\)의 약수</b>인 것과 같다. (\(n\)이 짝수면 \(x&lt;0\)도 되지만 존재 여부는 달라지지 않는다.)</p>
    <p>따라서 지수 \(e_1,\ e_2,\ \dots\)의 최대공약수를 \(g\)라 하면 \(n\)은 \(12g\)의 약수이고, \(n\ge2\)이므로</p>
    $$
    f(m)=(12g\text{의 약수의 개수})-1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(m=2,3,\dots,9\)를 세 묶음으로 나눈다</div>
    <p>\(g=1\)인 경우: \(m=2,3,5,6,7\). \(12\)의 약수는 \(1,2,3,4,6,12\)의 \(6\)개이므로</p>
    $$
    f(2)=f(3)=f(5)=f(6)=f(7)=6-1=5.
    $$
    <p>\(g=2\)인 경우: \(m=4=2^2,\ 9=3^2\). \(24\)의 약수는 \(1,2,3,4,6,8,12,24\)의 \(8\)개이므로</p>
    $$
    f(4)=f(9)=8-1=7.
    $$
    <p>\(g=3\)인 경우: \(m=8=2^3\). \(36\)의 약수는 \(1,2,3,4,6,9,12,18,36\)의 \(9\)개이므로</p>
    $$
    f(8)=9-1=8.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 합을 구한다</div>
    $$
    \sum_{m=2}^{9}f(m)=5\times5+7\times2+8=25+14+8=47.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_csat/common/q15": { answer: 5, html: String.raw`
  <div class="sol-box">\(a_7=40\)이 주어졌으므로 \(a_6\)을 \(3\)으로 나눈 나머지로 경우를 나눈다. 나머지가 정해지면 그 앞 항들의 나머지가 <b>자동으로</b> 결정되어, 어느 규칙을 쓸지 고를 여지가 없다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a_6\)이 \(3\)의 배수인 경우</div>
    <p>이때 \(a_7=\dfrac{a_6}{3}=40\)이므로 \(a_6=120\)이다.</p>
    <p>\(a_7=40\)은 \(3\)의 배수가 아니므로 \(a_8=a_6+a_7=160\)이고, \(a_8=160\)도 \(3\)의 배수가 아니므로</p>
    $$
    a_9=a_7+a_8=40+160=200.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_6\equiv1\ (\mathrm{mod}\ 3)\)인 경우</div>
    <p>\(a_6\)이 \(3\)의 배수가 아니므로 \(a_7=a_5+a_6=40\), 즉 \(a_5=40-a_6\)이다. 그런데</p>
    $$
    a_5\equiv40-1=39\equiv0\ (\mathrm{mod}\ 3)
    $$
    <p>이므로 \(a_5\)는 반드시 \(3\)의 배수이고, 따라서 \(a_6=\dfrac{a_5}{3}\), 즉 \(a_5=3a_6\)이다.</p>
    $$
    3a_6+a_6=40,\qquad a_6=10,\qquad a_5=30.
    $$
    <p>\(a_6=10\)은 \(3\)의 배수가 아니라 \(a_6\equiv1\)에 맞고, \(a_7=40\)이 \(3\)의 배수가 아니므로 \(a_8=a_6+a_7=50\), \(a_8=50\)도 \(3\)의 배수가 아니므로</p>
    $$
    a_9=a_7+a_8=40+50=90.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_6\equiv2\ (\mathrm{mod}\ 3)\)인 경우</div>
    <p>역시 \(a_7=a_5+a_6=40\)이고 이번에는</p>
    $$
    a_5\equiv40-2=38\equiv2\ (\mathrm{mod}\ 3)
    $$
    <p>이라 \(a_5\)가 \(3\)의 배수가 아니므로 \(a_6=a_4+a_5\)이다. 여기서</p>
    $$
    a_4=a_6-a_5=a_6-(40-a_6)=2a_6-40,
    $$
    $$
    a_4\equiv2\times2-40\equiv0\ (\mathrm{mod}\ 3)
    $$
    <p>이므로 \(a_4\)는 \(3\)의 배수이고 \(a_5=\dfrac{a_4}{3}\)이다. 따라서</p>
    $$
    3(40-a_6)=2a_6-40,\qquad 5a_6=160,\qquad a_6=32.
    $$
    <p>이때 \(a_5=8,\ a_4=24\)로 모두 자연수이고 나머지 조건도 맞는다. \(a_7=40\)이 \(3\)의 배수가 아니므로 \(a_8=a_6+a_7=72\)이고, 이번에는 \(a_8=72\)가 \(3\)의 배수이므로</p>
    $$
    a_9=\frac{a_8}{3}=24.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 최댓값과 최솟값을 더한다</div>
    <p>가능한 \(a_9\)의 값은 \(200,\ 90,\ 24\)뿐이므로 \(M=200,\ m=24\)이고</p>
    $$
    M+m=224.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_csat/common/q16": { answer: 10, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 양변을 하나의 로그로 묶는다</div>
    $$
    \log_2(3x+2)=2+\log_2(x-2)=\log_2 4+\log_2(x-2)=\log_2\{4(x-2)\}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 진수를 비교해 푼다</div>
    $$
    3x+2=4(x-2)=4x-8,\qquad x=10.
    $$
    <p>\(3x+2=32&gt;0\), \(x-2=8&gt;0\)으로 진수 조건도 만족한다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{10}\)</div>
` },

"2023_csat/common/q17": { answer: 15, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f'\)를 적분해 \(f\)를 구한다</div>
    $$
    f(x)=\int(4x^3-2x)\,dx=x^4-x^2+C.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분상수를 정하고 대입한다</div>
    <p>\(f(0)=3\)이므로 \(C=3\)이고 \(f(x)=x^4-x^2+3\)이다.</p>
    $$
    f(2)=16-4+3=15.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{15}\)</div>
` },

"2023_csat/common/q18": { answer: 22, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫 식에서 \(\sum a_k\)를 구한다</div>
    $$
    \sum_{k=1}^{5}(3a_k+5)=3\sum_{k=1}^{5}a_k+5\times5=55,
    $$
    $$
    3\sum_{k=1}^{5}a_k=30,\qquad \sum_{k=1}^{5}a_k=10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 둘째 식에서 \(\sum b_k\)를 구한다</div>
    $$
    \sum_{k=1}^{5}(a_k+b_k)=\sum_{k=1}^{5}a_k+\sum_{k=1}^{5}b_k=32,
    $$
    $$
    \sum_{k=1}^{5}b_k=32-10=22.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{22}\)</div>
` },

"2023_csat/common/q19": { answer: 7, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 방정식을 그래프 문제로 바꾼다</div>
    <p>\(f(x)=2x^3-6x^2+k\)라 하면 방정식 \(2x^3-6x^2+k=0\)의 실근은 \(y=f(x)\)의 그래프와 \(x\)축이 만나는 점의 \(x\)좌표이다.</p>
    $$
    f'(x)=6x^2-12x=6x(x-2),\qquad f'(x)=0\ \Longleftrightarrow\ x=0\ \text{또는}\ x=2.
    $$
    <p>따라서 \(f\)는 \(x=0\)에서 극댓값 \(f(0)=k\), \(x=2\)에서 극솟값 \(f(2)=k-8\)을 갖는다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 양의 실근이 \(2\)개일 조건을 찾는다</div>
    <p>서로 다른 실근이 \(3\)개이려면 \((\text{극댓값})&gt;0&gt;(\text{극솟값})\), 즉</p>
    $$
    k&gt;0\quad\text{그리고}\quad k-8&lt;0\ \Longrightarrow\ 0&lt;k&lt;8.
    $$
    <p>이때 \(f(0)=k&gt;0\)이고 \(x\to-\infty\)에서 \(f(x)\to-\infty\)이므로 음의 실근이 정확히 하나 있고, 나머지 두 근은 각각 \(0&lt;x&lt;2\), \(x&gt;2\)에 놓인 양의 실근이다. 즉 양의 실근이 \(2\)개인 조건이 바로 \(0&lt;k&lt;8\)이다.</p>
    <p>(실근이 \(3\)개가 아니면 양의 실근은 많아야 \(1\)개이므로 다른 경우는 없다.)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 정수 \(k\)를 센다</div>
    <p>\(k=1,2,3,4,5,6,7\)의 \(7\)개이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{7}\)</div>
` },

"2023_csat/common/q20": { answer: 17, html: String.raw`
  <div class="sol-box">움직인 거리는 \(\displaystyle\int|v|\,dt\)이므로, 먼저 \(v\)의 식을 구간별로 완성하고 부호를 확인해야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(t\ge2\)에서의 속도를 구한다</div>
    <p>가속도를 적분하면</p>
    $$
    v(t)=\int(6t+4)\,dt=3t^2+4t+C.
    $$
    <p>\(0\le t\le2\)에서 \(v(t)=2t^3-8t\)이고 \(v(2)=16-16=0\)이므로, \(t=2\)에서 이어지려면</p>
    $$
    12+8+C=0,\qquad C=-20.
    $$
    <p>따라서</p>
    $$
    v(t)=\begin{cases}2t^3-8t & (0\le t\le2)\[2pt] 3t^2+4t-20 & (2\le t\le3)\end{cases}
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 각 구간에서 \(v\)의 부호를 본다</div>
    <p>\(0&lt;t&lt;2\)에서 \(2t^3-8t=2t(t-2)(t+2)&lt;0\)이므로 \(|v|=-v\)이고,</p>
    <p>\(2&lt;t&lt;3\)에서 \(3t^2+4t-20=(3t+10)(t-2)&gt;0\)이므로 \(|v|=v\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 거리를 계산한다</div>
    $$
    \int_0^3|v(t)|\,dt=-\int_0^2(2t^3-8t)\,dt+\int_2^3(3t^2+4t-20)\,dt
    $$
    $$
    =-\left[\frac{1}{2}t^4-4t^2\right]_0^2+\Big[t^3+2t^2-20t\Big]_2^3
    $$
    $$
    =-(8-16)+\{(27+18-60)-(8+8-40)\}
    $$
    $$
    =8+\{-15-(-24)\}=8+9=17.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{17}\)</div>
` },

"2023_csat/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항을 쓴다</div>
    <p>이항정리에 의하여 \((x^3+3)^5\)의 전개식의 일반항은</p>
    $$
    {}_5\mathrm{C}_r\,(x^3)^{5-r}3^{\,r}={}_5\mathrm{C}_r\,3^{\,r}\,x^{15-3r}\qquad(r=0,1,\dots,5).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x^9\)이 되는 \(r\)를 찾아 계수를 구한다</div>
    $$
    15-3r=9\ \Longrightarrow\ r=2,
    $$
    $$
    {}_5\mathrm{C}_2\times3^2=10\times9=90.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_csat/prob_stat/q24": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 자리별 조건을 정리한다</div>
    <p>네 자리 자연수가 \(4000\) 이상이려면 천의 자리 숫자가 \(4,5\) 중 하나이고, 홀수이려면 일의 자리 숫자가 \(1,3,5\) 중 하나이다. 백의 자리와 십의 자리는 \(1\)부터 \(5\)까지 아무 숫자나 올 수 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 곱의 법칙으로 센다</div>
    <p>중복을 허락하므로 각 자리는 서로 영향을 주지 않는다.</p>
    $$
    2\times3\times5\times5=150.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_csat/prob_stat/q25": { answer: 5, html: String.raw`
  <div class="sol-box">"적어도 한 개가 흰색"의 여사건은 "\(3\)개 모두 검은색"이라 훨씬 세기 쉽다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 여사건의 확률을 구한다</div>
    <p>마스크는 모두 \(5+9=14\)개이고, 꺼낸 \(3\)개가 모두 검은색일 확률은</p>
    $$
    \frac{{}_9\mathrm{C}_3}{{}_{14}\mathrm{C}_3}
    =\frac{\frac{9\times8\times7}{3\times2\times1}}{\frac{14\times13\times12}{3\times2\times1}}
    =\frac{84}{364}=\frac{3}{13}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건의 확률을 이용한다</div>
    $$
    1-\frac{3}{13}=\frac{10}{13}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_csat/prob_stat/q26": { answer: 3, html: String.raw`
  <div class="sol-box">공에 적힌 수가 \(1\) 또는 \(2\)뿐이므로, 세 수의 곱이 \(8\)인 것은 <b>세 공 모두 \(2\)가 적힌 공</b>인 경우와 같다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 정리한다</div>
    <p>주머니에는 흰 공 \(2\)개(\(1,2\)), 검은 공 \(4\)개(\(1,2,2,2\))로 모두 \(6\)개가 있고, 여기서 \(3\)개를 꺼내는 경우의 수는 \({}_6\mathrm{C}_3=20\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm{P}(A)\), \(\mathrm{P}(B)\)를 구한다</div>
    $$
    \mathrm{P}(A)=\frac{{}_2\mathrm{C}_1\times{}_4\mathrm{C}_2}{{}_6\mathrm{C}_3}=\frac{2\times6}{20}=\frac{3}{5},
    $$
    <p>\(2\)가 적힌 공은 흰 공 \(1\)개와 검은 공 \(3\)개로 모두 \(4\)개이므로</p>
    $$
    \mathrm{P}(B)=\frac{{}_4\mathrm{C}_3}{{}_6\mathrm{C}_3}=\frac{4}{20}=\frac{1}{5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\mathrm{P}(A\cap B)\)를 구한다</div>
    <p>\(A\cap B\)는 \(2\)가 적힌 공만 꺼내면서 그중 흰 공이 \(1\)개, 검은 공이 \(2\)개인 경우이다. \(2\)가 적힌 흰 공은 \(1\)개, \(2\)가 적힌 검은 공은 \(3\)개이므로</p>
    $$
    \mathrm{P}(A\cap B)=\frac{{}_1\mathrm{C}_1\times{}_3\mathrm{C}_2}{{}_6\mathrm{C}_3}=\frac{3}{20}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 확률의 덧셈정리를 쓴다</div>
    $$
    \mathrm{P}(A\cup B)=\frac{3}{5}+\frac{1}{5}-\frac{3}{20}=\frac{12+4-3}{20}=\frac{13}{20}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_csat/prob_stat/q27": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫 신뢰구간의 길이로 \(\sigma\)를 구한다</div>
    <p>모표준편차를 \(\sigma\)라 하면 표본의 크기가 \(16\)일 때 신뢰도 \(95\%\) 신뢰구간의 길이는 \(2\times1.96\times\dfrac{\sigma}{\sqrt{16}}\)이므로</p>
    $$
    2\times1.96\times\frac{\sigma}{4}=755.9-746.1=9.8,
    $$
    $$
    0.98\sigma=9.8,\qquad \sigma=10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 둘째 신뢰구간의 길이를 \(n\)으로 나타낸다</div>
    <p>표본의 크기가 \(n\)일 때 신뢰도 \(99\%\) 신뢰구간 \(a\le m\le b\)의 길이는</p>
    $$
    b-a=2\times2.58\times\frac{10}{\sqrt n}=\frac{51.6}{\sqrt n}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건을 풀어 최솟값을 구한다</div>
    $$
    \frac{51.6}{\sqrt n}\le6\ \Longrightarrow\ \sqrt n\ge8.6\ \Longrightarrow\ n\ge73.96.
    $$
    <p>따라서 자연수 \(n\)의 최솟값은 \(74\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_csat/prob_stat/q28": { answer: 4, html: String.raw`
  <div class="sol-box">확률밀도함수 아래 넓이가 곧 확률이다. 삼각형 넓이 세 개를 세우면 \(a,b,c\)에 대한 연립방정식이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 넓이가 \(1\)</div>
    <p>확률밀도함수의 그래프는 세 점 \((0,0)\), \((b,c)\), \((a,0)\)을 꼭짓점으로 하는 삼각형이므로</p>
    $$
    \frac12\,ac=1,\qquad ac=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm{P}(X\le b)\)를 구한다</div>
    $$
    \mathrm{P}(X\le b)+\mathrm{P}(X\ge b)=1,\qquad
    \mathrm{P}(X\le b)-\mathrm{P}(X\ge b)=\frac14
    $$
    <p>를 더하고 빼면</p>
    $$
    \mathrm{P}(X\le b)=\frac58,\qquad \mathrm{P}(X\ge b)=\frac38.
    $$
    <p>\(\mathrm{P}(X\le b)\)는 밑변 \(b\), 높이 \(c\)인 삼각형의 넓이이므로</p>
    $$
    \frac12\,bc=\frac58.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\mathrm{P}(X\le\sqrt5)=\dfrac12\)에서 \(b=5c\)를 얻는다</div>
    <p>\(\mathrm{P}(X\le b)=\dfrac58&gt;\dfrac12\)이므로 \(\sqrt5&lt;b\)이고, 구간 \([0,\sqrt5]\)에서 그래프는 직선 \(y=\dfrac{c}{b}x\)이다. 따라서</p>
    $$
    \frac12\times\sqrt5\times\frac{c}{b}\sqrt5=\frac{5c}{2b}=\frac12,\qquad b=5c.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(a,b,c\)를 확정한다</div>
    $$
    bc=\frac54\ \Longrightarrow\ 5c^2=\frac54\ \Longrightarrow\ c=\frac12\ (\because c&gt;0),
    $$
    $$
    b=\frac52,\qquad a=\frac{2}{c}=4,
    $$
    $$
    a+b+c=4+\frac52+\frac12=7.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },


"2023_csat/calculus/q23": { answer: 4, html: String.raw`
  <div class="sol-box">\(\dfrac00\) 꼴이다. 분모를 유리화하고 \(\lim\limits_{x\to0}\dfrac{\ln(1+x)}{x}=1\)을 쓸 수 있게 모양을 맞춘다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분모를 유리화한다</div>
    $$
    \frac{\ln(x+1)}{\sqrt{x+4}-2}
    =\frac{\ln(x+1)\left(\sqrt{x+4}+2\right)}{(x+4)-4}
    =\frac{\ln(x+1)}{x}\times\left(\sqrt{x+4}+2\right).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    $$
    \lim_{x\to0}\frac{\ln(x+1)}{\sqrt{x+4}-2}=1\times(2+2)=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_csat/calculus/q24": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 정적분으로 바꾼다</div>
    <p>\(\dfrac{k}{n}\)을 \(x\)로, \(\dfrac1n\)을 \(dx\)로 보면</p>
    $$
    \lim_{n\to\infty}\frac1n\sum_{k=1}^{n}\sqrt{1+\frac{3k}{n}}=\int_0^1\sqrt{1+3x}\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 계산한다</div>
    $$
    \int_0^1(1+3x)^{\frac12}dx=\left[\frac{2}{9}(1+3x)^{\frac32}\right]_0^1=\frac29(8-1)=\frac{14}{9}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2023_csat/calculus/q25": { answer: 5, html: String.raw`
  <div class="sol-box">분모의 주도항은 \(2^{2n-1}=\dfrac{4^n}{2}\)이다. 분자와 분모를 \(4^n\)으로 나누면 공비 \(r\)가 어떤 값이어야 하는지 바로 보인다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(4^n\)으로 나눈다</div>
    <p>첫째항을 \(a\), 공비를 \(r\)라 하면 \(a_n=ar^{\,n-1}\)이고</p>
    $$
    \frac{a_n+1}{3^n+2^{2n-1}}
    =\frac{\dfrac{a}{4}\left(\dfrac r4\right)^{n-1}+\left(\dfrac14\right)^{n}}
           {\left(\dfrac34\right)^{n}+\dfrac12}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 공비를 확정한다</div>
    <p>분모는 \(\dfrac12\)로 수렴하고 분자의 \(\left(\dfrac14\right)^{n}\)은 \(0\)으로 가므로, 극한값은 \(\left(\dfrac r4\right)^{n-1}\)의 거동으로 결정된다.</p>
    <p>\(|r|&lt;4\)이면 극한값이 \(0\)이 되어 \(3\)이 될 수 없고, \(|r|&gt;4\)이거나 \(r=-4\)이면 수렴하지 않는다. 따라서 \(r=4\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 첫째항을 구해 \(a_2\)를 계산한다</div>
    $$
    \lim_{n\to\infty}\frac{a_n+1}{3^n+2^{2n-1}}=\frac{\frac a4}{\frac12}=\frac a2=3,\qquad a=6,
    $$
    $$
    a_2=ar=6\times4=24.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2023_csat/calculus/q26": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 단면의 넓이를 쓴다</div>
    <p>\(x=t\)에서의 단면은 한 변의 길이가 \(\sqrt{\sec^2 t+\tan t}\)인 정사각형이므로</p>
    $$
    S(t)=\left(\sqrt{\sec^2 t+\tan t}\right)^2=\sec^2 t+\tan t.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부피를 적분으로 나타낸다</div>
    $$
    V=\int_0^{\frac\pi3}(\sec^2 x+\tan x)\,dx.
    $$
    <p>\(\displaystyle\int\sec^2 x\,dx=\tan x\)이고, \(\tan x=\dfrac{\sin x}{\cos x}\)에서 분자가 분모를 미분한 것의 \(-1\)배이므로 \(\displaystyle\int\tan x\,dx=-\ln|\cos x|\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 계산한다</div>
    $$
    V=\Big[\tan x-\ln|\cos x|\Big]_0^{\frac\pi3}
    =\tan\frac\pi3-\ln\cos\frac\pi3
    =\sqrt3-\ln\frac12=\sqrt3+\ln 2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2023_csat/calculus/q27": { answer: 2, html: String.raw`
  <div class="sol-box">등비급수 도형 문제는 <b>첫 도형의 넓이 \(S_1\)</b>과 <b>닮음비</b> 두 가지만 구하면 끝난다. 닮음비는 \(\overline{\mathrm{OQ_1}}\)이 다음 부채꼴의 반지름이라는 데서 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 직사각형의 두 변을 구한다</div>
    <p>\(\overline{\mathrm{OC_1}}=3t,\ \overline{\mathrm{OD_1}}=4t\ (t&gt;0)\)라 하면 직사각형의 대각선 \(\overline{\mathrm{OP_1}}\)이 부채꼴의 반지름이므로</p>
    $$
    \overline{\mathrm{OP_1}}=\sqrt{(3t)^2+(4t)^2}=5t=1,\qquad t=\frac15.
    $$
    <p>따라서 \(\overline{\mathrm{OC_1}}=\dfrac35\), \(\overline{\mathrm{C_1P_1}}=\overline{\mathrm{OD_1}}=\dfrac45\)이고</p>
    $$
    \overline{\mathrm{A_1C_1}}=1-\frac35=\frac25.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(S_1\)을 구한다</div>
    <p>직각삼각형 \(\mathrm{A_1C_1P_1}\)에서</p>
    $$
    \overline{\mathrm{A_1P_1}}=\sqrt{\left(\frac25\right)^2+\left(\frac45\right)^2}=\frac{2}{\sqrt5}.
    $$
    <p>삼각형 \(\mathrm{P_1Q_1A_1}\)은 빗변이 \(\overline{\mathrm{A_1P_1}}\)인 직각이등변삼각형이므로 나머지 두 변의 길이는 \(\dfrac{2}{\sqrt5}\times\dfrac{1}{\sqrt2}=\dfrac{\sqrt2}{\sqrt5}\)이고</p>
    $$
    S_1=\frac12\times\left(\frac{\sqrt2}{\sqrt5}\right)^2=\frac15.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\overline{\mathrm{OQ_1}}\)을 구해 닮음비를 얻는다</div>
    <p>\(\overline{\mathrm{A_1P_1}}\)의 중점을 \(\mathrm{M}\)이라 하자. 삼각형 \(\mathrm{P_1Q_1A_1}\)이 이등변삼각형이므로 \(\overline{\mathrm{Q_1M}}\perp\overline{\mathrm{A_1P_1}}\)이고, \(\overline{\mathrm{OA_1}}=\overline{\mathrm{OP_1}}=1\)이라 삼각형 \(\mathrm{OA_1P_1}\)도 이등변삼각형이어서 \(\overline{\mathrm{OM}}\perp\overline{\mathrm{A_1P_1}}\)이다. 따라서 세 점 \(\mathrm{O},\ \mathrm{Q_1},\ \mathrm{M}\)은 한 직선 위에 있다.</p>
    $$
    \overline{\mathrm{A_1M}}=\frac12\times\frac{2}{\sqrt5}=\frac{1}{\sqrt5},\qquad
    \overline{\mathrm{OM}}=\sqrt{1^2-\left(\frac{1}{\sqrt5}\right)^2}=\frac{2}{\sqrt5}.
    $$
    <p>직각인 꼭짓점에서 빗변의 중점까지의 거리는 빗변의 절반이므로 \(\overline{\mathrm{Q_1M}}=\dfrac{1}{\sqrt5}\)이고</p>
    $$
    \overline{\mathrm{OQ_1}}=\overline{\mathrm{OM}}-\overline{\mathrm{Q_1M}}=\frac{2}{\sqrt5}-\frac{1}{\sqrt5}=\frac{1}{\sqrt5}.
    $$
    <p>다음 부채꼴의 반지름이 \(\overline{\mathrm{OQ_1}}=\dfrac{1}{\sqrt5}\)이므로 닮음비는 \(1:\dfrac{1}{\sqrt5}\), 넓이의 비는 \(1:\dfrac15\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 등비급수의 합을 구한다</div>
    $$
    \lim_{n\to\infty}S_n=\frac{\frac15}{1-\frac15}=\frac14.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2023_csat/calculus/q28": { answer: 2, html: String.raw`
  <div class="sol-box">\(f\)와 \(g\)를 \(\theta\)로 나타낸 뒤 \(3f-2g\)를 인수분해하면, \(\theta\to0\)에서 \(\theta^2\)만큼 작아지는 구조가 그대로 드러난다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f(\theta)\)를 구한다</div>
    <p>\(\overline{\mathrm{OA}}=\overline{\mathrm{OP}}=1\)이므로 삼각형 \(\mathrm{OAP}\)는 이등변삼각형이고 \(\angle\mathrm{OPA}=\angle\mathrm{OAP}=\theta\)이다. \(\angle\mathrm{BOP}\)는 이 삼각형의 외각이므로</p>
    $$
    \angle\mathrm{BOP}=2\theta,\qquad
    f(\theta)=\frac12\times1\times1\times\sin2\theta=\frac12\sin2\theta.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사각형 \(\mathrm{CQRS}\)가 사다리꼴임을 확인한다</div>
    <p>\(\overline{\mathrm{PB}}=\overline{\mathrm{QC}}\)이므로 두 현에 대한 중심각이 같아 \(\angle\mathrm{COQ}=\angle\mathrm{BOP}=2\theta\)이다. 삼각형 \(\mathrm{OCQ}\)는 \(\overline{\mathrm{OC}}=\overline{\mathrm{OQ}}=1\)인 이등변삼각형이므로</p>
    $$
    \angle\mathrm{SCQ}=\frac{\pi-2\theta}{2}=\frac\pi2-\theta.
    $$
    <p>또 직각삼각형 \(\mathrm{AOS}\)에서 \(\angle\mathrm{ASO}=\dfrac\pi2-\theta\)이므로 그 대각인 \(\angle\mathrm{CSR}=\dfrac\pi2+\theta\)이고, 사각형의 내각의 합에서</p>
    $$
    \angle\mathrm{QRS}=2\pi-\left(\frac\pi2-\theta\right)-\frac\pi2-\left(\frac\pi2+\theta\right)=\frac\pi2.
    $$
    <p>\(\angle\mathrm{CQR}=\angle\mathrm{QRS}=\dfrac\pi2\)이므로 \(\overline{\mathrm{CQ}}\parallel\overline{\mathrm{RS}}\), 즉 \(\mathrm{CQRS}\)는 사다리꼴이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 세 변의 길이를 \(\theta\)로 나타낸다</div>
    <p>\(\overline{\mathrm{OS}}=\overline{\mathrm{OA}}\tan\theta=\tan\theta\)이므로 \(\overline{\mathrm{CS}}=1-\tan\theta\)이다. 점 \(\mathrm{S}\)에서 \(\overline{\mathrm{CQ}}\)에 내린 수선의 발을 \(\mathrm{H}\)라 하면 \(\angle\mathrm{CSH}=\theta\)이므로</p>
    $$
    \overline{\mathrm{QR}}=\overline{\mathrm{SH}}=(1-\tan\theta)\cos\theta,\qquad
    \overline{\mathrm{CH}}=(1-\tan\theta)\sin\theta.
    $$
    <p>중심각이 \(2\theta\)인 현이므로 \(\overline{\mathrm{CQ}}=\overline{\mathrm{PB}}=2\sin\theta\)이고</p>
    $$
    \overline{\mathrm{RS}}=\overline{\mathrm{QH}}=\overline{\mathrm{CQ}}-\overline{\mathrm{CH}}
    =2\sin\theta-(\sin\theta-\sin\theta\tan\theta)=\sin\theta+\sin\theta\tan\theta.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(3f-2g\)를 인수분해한다</div>
    $$
    g(\theta)=\frac12\left(\overline{\mathrm{CQ}}+\overline{\mathrm{RS}}\right)\overline{\mathrm{QR}}
    =\frac12(3\sin\theta+\sin\theta\tan\theta)(1-\tan\theta)\cos\theta,
    $$
    $$
    3f(\theta)-2g(\theta)=3\sin\theta\cos\theta-\sin\theta\cos\theta(3+\tan\theta)(1-\tan\theta).
    $$
    <p>\((3+\tan\theta)(1-\tan\theta)=3-2\tan\theta-\tan^2\theta\)이므로 공통인수 \(\sin\theta\cos\theta\)를 묶은 나머지는</p>
    $$
    3-(3-2\tan\theta-\tan^2\theta)=\tan\theta(\tan\theta+2),
    $$
    $$
    3f(\theta)-2g(\theta)=\sin\theta\cos\theta\tan\theta(\tan\theta+2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 극한값을 구한다</div>
    $$
    \lim_{\theta\to0+}\frac{3f(\theta)-2g(\theta)}{\theta^2}
    =\lim_{\theta\to0+}\left\{\frac{\sin\theta}{\theta}\times\frac{\tan\theta}{\theta}\times\cos\theta\times(\tan\theta+2)\right\}
    =1\times1\times1\times2=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock06/common/q01": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 거듭제곱근을 지수로 고친다</div>
    $$
    \sqrt[3]{27}\times4^{-\frac12}=(3^3)^{\frac13}\times(2^2)^{-\frac12}
    =3\times2^{-1}=\frac32.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_mock06/common/q02": { answer: 4, html: String.raw`
  <div class="sol-box">주어진 극한은 미분계수의 정의 그대로이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미분계수로 바꾼다</div>
    $$
    \lim_{h\to0}\frac{f(3+h)-f(3)}{h}=f'(3).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 미분해서 대입한다</div>
    $$
    f'(x)=2x-2,\qquad f'(3)=2\times3-2=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_mock06/common/q03": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합의 기호를 분리한다</div>
    $$
    \sum_{k=1}^{10}(2a_k+3)=2\sum_{k=1}^{10}a_k+\sum_{k=1}^{10}3
    =2\sum_{k=1}^{10}a_k+3\times10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 값을 구한다</div>
    $$
    2\sum_{k=1}^{10}a_k+30=60,\qquad \sum_{k=1}^{10}a_k=15.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock06/common/q04": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 연속의 뜻을 쓴다</div>
    <p>\(f(x)\)가 실수 전체의 집합에서 연속이므로 \(x=1\)에서도 연속이다. 즉</p>
    $$
    \lim_{x\to1}f(x)=f(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 주어진 식에 넣는다</div>
    $$
    f(1)=4-f(1),\qquad 2f(1)=4,\qquad f(1)=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock06/common/q05": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 적용한다</div>
    $$
    g(x)=(x^3+1)f(x)\ \Longrightarrow\ g'(x)=3x^2f(x)+(x^3+1)f'(x).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입한다</div>
    $$
    g'(1)=3f(1)+2f'(1)=3\times2+2\times3=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_mock06/common/q06": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\cos\theta\)를 \(\sin\theta\)로 나타낸다</div>
    <p>\(\sin(-\theta)=-\sin\theta\)이므로 주어진 식은</p>
    $$
    -\sin\theta=\frac17\cos\theta,\qquad \cos\theta=-7\sin\theta.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 피타고라스 관계에 넣는다</div>
    $$
    \sin^2\theta+\cos^2\theta=\sin^2\theta+49\sin^2\theta=1,\qquad \sin^2\theta=\frac1{50}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부호를 정한다</div>
    <p>\(\cos\theta&lt;0\)이고 \(\sin\theta=-\dfrac17\cos\theta\)이므로 \(\sin\theta&gt;0\)이다. 따라서</p>
    $$
    \sin\theta=\frac{1}{5\sqrt2}=\frac{\sqrt2}{10}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_mock06/common/q07": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 점근선을 찾는다</div>
    <p>\(y=\log_2(x-a)\)의 그래프의 점근선은 직선 \(x=a\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 교점의 \(y\)좌표를 구한다</div>
    <p>직선 \(x=a\)가 두 곡선과 만나는 점은</p>
    $$
    \mathrm A\left(a,\ \log_2\frac a4\right),\qquad
    \mathrm B\left(a,\ \log_{\frac12}a\right).
    $$
    <p>\(a&gt;2\)이므로 \(\log_2\dfrac a4&gt;\log_2\dfrac24=-1\)이고 \(\log_{\frac12}a&lt;\log_{\frac12}2=-1\)이다. 따라서 점 \(\mathrm A\)가 위에 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 길이를 세워 \(a\)를 구한다</div>
    $$
    \overline{\mathrm{AB}}=\log_2\frac a4-\log_{\frac12}a=(\log_2 a-2)+\log_2 a=2\log_2 a-2,
    $$
    $$
    2\log_2 a-2=4,\qquad \log_2 a=3,\qquad a=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock06/common/q08": { answer: 3, html: String.raw`
  <div class="sol-box">두 곡선의 교점 개수는 \(k\)를 한쪽으로 몰아 "곡선과 가로선의 교점 개수"로 바꾸면 극값만 보면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(k\)를 분리한다</div>
    $$
    2x^2-1=x^3-x^2+k\ \Longleftrightarrow\ -x^3+3x^2-1=k.
    $$
    <p>따라서 \(f(x)=-x^3+3x^2-1\)의 그래프와 직선 \(y=k\)가 서로 다른 두 점에서 만나야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극값을 구한다</div>
    $$
    f'(x)=-3x^2+6x=-3x(x-2),\qquad f'(x)=0\ \Longleftrightarrow\ x=0\ \text{또는}\ x=2.
    $$
    <p>\(f\)는 \(x=0\)에서 극솟값 \(f(0)=-1\), \(x=2\)에서 극댓값 \(f(2)=3\)을 갖는다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 교점이 두 개일 \(k\)를 고른다</div>
    <p>삼차함수의 그래프와 가로선이 두 점에서 만나는 것은 그 가로선이 극댓값이나 극솟값을 지날 때뿐이므로 \(k=3\) 또는 \(k=-1\)이고, \(k\)가 양수이므로</p>
    $$
    k=3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock06/common/q09": { answer: 1, html: String.raw`
  <div class="sol-box">부분합이 주어졌으므로 \(S_n-S_{n-1}\)로 일반항을 뽑고, 부분분수로 갈라 망원합을 만든다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항을 구한다</div>
    <p>\(n=1\)일 때 \(\dfrac1{a_1}=3\)이므로 \(a_1=\dfrac13\)이다. \(n\ge2\)일 때</p>
    $$
    \frac{1}{(2n-1)a_n}=(n^2+2n)-\{(n-1)^2+2(n-1)\}=2n+1
    $$
    <p>이므로 \((2n-1)a_n=\dfrac1{2n+1}\), 즉</p>
    $$
    a_n=\frac{1}{(2n-1)(2n+1)}.
    $$
    <p>\(n=1\)일 때도 \(\dfrac1{1\times3}=\dfrac13\)으로 맞으므로 모든 \(n\)에서 성립한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부분분수로 갈라 더한다</div>
    $$
    \sum_{n=1}^{10}a_n=\frac12\sum_{n=1}^{10}\left(\frac1{2n-1}-\frac1{2n+1}\right)
    =\frac12\left(1-\frac1{21}\right)=\frac12\times\frac{20}{21}=\frac{10}{21}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_mock06/common/q10": { answer: 2, html: String.raw`
  <div class="sol-box">\(A\)는 \(x\)축 위쪽, \(B\)는 아래쪽 넓이이므로 두 넓이의 <b>차</b>는 부호를 그대로 살린 정적분 하나로 합쳐진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 넓이를 정적분으로 쓴다</div>
    <p>\(f(x)=0\)에서 \(x=0,\ 2,\ 3\)이므로 두 점 \(\mathrm P\), \(\mathrm Q\)의 좌표는 \((2,0)\), \((3,0)\)이다.</p>
    $$
    (A\text{의 넓이})=\int_0^2 f(x)\,dx,\qquad
    (B\text{의 넓이})=\int_2^3\{-f(x)\}\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 차를 하나의 정적분으로 합친다</div>
    $$
    (A\text{의 넓이})-(B\text{의 넓이})=\int_0^2 f(x)\,dx+\int_2^3 f(x)\,dx=\int_0^3 f(x)\,dx=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 계산해 \(k\)를 구한다</div>
    $$
    \int_0^3 k(x^3-5x^2+6x)\,dx=k\left[\frac14x^4-\frac53x^3+3x^2\right]_0^3
    =k\left(\frac{81}{4}-45+27\right)=\frac94k,
    $$
    $$
    \frac94k=3,\qquad k=\frac43.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

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

"2024_mock06/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 같은 것이 있는 순열의 수를 쓴다</div>
    <p>다섯 개 중 \(a\)가 \(2\)개로 같으므로, 다섯 개를 모두 다르다고 보고 센 \(5!\)을 \(a\)끼리 자리를 바꾼 \(2!\)로 나눈다.</p>
    $$
    \frac{5!}{2!}=5\times4\times3=60.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock06/prob_stat/q28": { answer: 5, html: String.raw`
  <div class="sol-box">조건 (가)는 \(f(1),f(3),f(5)\)가 모두 홀수라는 뜻이다. 따라서 치역에 들어가는 <b>홀수의 개수</b>로 나누면 경우가 깔끔하게 갈린다. 조건 (나)는 \(f(2)\ne f(4)\)이면서 순서가 하나로 정해진다는 뜻이므로, 두 값을 <b>집합으로 고르기만</b> 하면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건을 정리한다</div>
    <p>세 수의 곱이 홀수이려면 셋 다 홀수여야 하므로 \(f(1),f(3),f(5)\in\{1,3,5\}\)이다. 또 \(f(2)&lt;f(4)\)이므로 두 값은 서로 다르고, 값의 쌍을 정하면 순서는 저절로 결정된다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 치역에 홀수가 \(1\)개인 경우</div>
    <p>홀수 하나를 고르는 경우가 \({}_3\mathrm C_1=3\)이고 \(f(1)=f(3)=f(5)\)이다. 치역이 \(3\)개이려면 \(f(2),f(4)\)가 나머지 두 원소를 만들어야 하는데 둘 다 짝수여야 하므로 \(\{f(2),f(4)\}=\{2,4\}\), 즉 \(f(2)=2,\ f(4)=4\)로 하나뿐이다.</p>
    $$
    3\times1=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 치역에 홀수가 \(2\)개인 경우</div>
    <p>홀수 두 개를 고르는 경우가 \({}_3\mathrm C_2=3\)이고, 치역의 남은 한 자리는 짝수 \(2\) 또는 \(4\)이다.</p>
    <p>ⅰ) \(f(1),f(3),f(5)\)가 한 값만 가질 때 : 그 값을 고르는 \(2\)가지. 나머지 홀수와 짝수가 \(f(2),f(4)\)에서 나와야 하므로 짝수를 고르는 \(2\)가지.</p>
    <p>ⅱ) \(f(1),f(3),f(5)\)가 두 값을 모두 가질 때 : \({}_2\Pi_3-2=6\)가지. 짝수를 고르는 \(2\)가지와, \(f(2),f(4)\) 중 짝수가 아닌 쪽에 올 홀수를 고르는 \(2\)가지.</p>
    $$
    3\times(2\times2+6\times2\times2)=3\times28=84.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 치역에 홀수가 \(3\)개인 경우</div>
    <p>치역은 \(\{1,3,5\}\)이고 \(f(2),f(4)\)도 홀수이다.</p>
    <p>ⅰ) \(f(1),f(3),f(5)\)가 한 값일 때 : \(3\)가지. 나머지 두 홀수가 \(f(2),f(4)\)로 정해져 \(1\)가지.</p>
    <p>ⅱ) 두 값일 때 : \({}_3\mathrm C_2\times({}_2\Pi_3-2)=3\times6=18\)가지. 빠진 홀수가 반드시 \(f(2),f(4)\)에 들어가야 하므로 짝은 \(2\)가지.</p>
    <p>ⅲ) 세 값일 때 : \(3!=6\)가지. \(f(2),f(4)\)는 세 홀수 중 둘을 고르는 \({}_3\mathrm C_2=3\)가지.</p>
    $$
    3\times1+18\times2+6\times3=3+36+18=57.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 모두 더한다</div>
    $$
    3+84+57=144.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_mock06/calculus/q23": { answer: 5, html: String.raw`
  <div class="sol-box">\(\infty-\infty\) 꼴이므로 유리화한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 유리화한다</div>
    $$
    \sqrt{n^2+9n}-\sqrt{n^2+4n}
    =\frac{(n^2+9n)-(n^2+4n)}{\sqrt{n^2+9n}+\sqrt{n^2+4n}}
    =\frac{5n}{\sqrt{n^2+9n}+\sqrt{n^2+4n}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 분자와 분모를 \(n\)으로 나눈다</div>
    $$
    \lim_{n\to\infty}\frac{5}{\sqrt{1+\frac9n}+\sqrt{1+\frac4n}}=\frac{5}{1+1}=\frac52.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_mock06/calculus/q24": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(t\)로 각각 미분한다</div>
    $$
    \frac{dx}{dt}=\frac{5(t^2+1)-5t\times2t}{(t^2+1)^2}=\frac{-5t^2+5}{(t^2+1)^2},
    $$
    $$
    \frac{dy}{dt}=\frac{3}{t^2+1}\times2t=\frac{6t}{t^2+1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 매개변수로 나타낸 함수의 미분법을 쓴다</div>
    $$
    \frac{dy}{dx}=\frac{\frac{dy}{dt}}{\frac{dx}{dt}}
    =\frac{6t}{t^2+1}\times\frac{(t^2+1)^2}{-5t^2+5}
    =\frac{6t(t^2+1)}{-5t^2+5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=2\)를 대입한다</div>
    $$
    \frac{6\times2\times(2^2+1)}{-5\times2^2+5}=\frac{60}{-15}=-4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_mock06/calculus/q25": { answer: 1, html: String.raw`
  <div class="sol-box">분모가 \(0\)으로 가는데 극한값이 있으므로 분자도 \(0\)으로 가야 한다. 여기서 \(b\)가 먼저 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(b\)를 구한다</div>
    <p>\(x\to0\)일 때 \(2^{bx}-1\to0\)이고 극한값이 존재하므로 \(2^{ax+b}-8\to0\)이어야 한다. 이 함수는 연속이므로</p>
    $$
    2^{b}-8=0,\qquad b=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\lim\limits_{x\to0}\dfrac{2^{x}-1}{x}=\ln2\) 꼴로 맞춘다</div>
    $$
    \lim_{x\to0}\frac{2^{ax+3}-8}{2^{3x}-1}
    =\lim_{x\to0}\frac{8(2^{ax}-1)}{2^{3x}-1}
    =\frac{8a}{3}\times\lim_{x\to0}\frac{\frac{2^{ax}-1}{ax}}{\frac{2^{3x}-1}{3x}}
    =\frac{8a}{3}\times\frac{\ln2}{\ln2}=\frac{8a}{3}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구한다</div>
    $$
    \frac{8a}{3}=16,\qquad a=6,\qquad a+b=6+3=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_mock06/calculus/q26": { answer: 2, html: String.raw`
  <div class="sol-box">\(t\)를 분리해 놓으면 "곡선과 가로선의 교점이 \(2\)개"가 되는 \(t\)는 극값뿐이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 함수를 정하고 극점을 찾는다</div>
    <p>\(f(x)=x^2-5x+2\ln x\ (x&gt;0)\)라 하면</p>
    $$
    f'(x)=2x-5+\frac2x=\frac{2x^2-5x+2}{x}=\frac{(2x-1)(x-2)}{x}.
    $$
    <p>따라서 \(f\)는 \(x=\dfrac12\)에서 극대, \(x=2\)에서 극소이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극값을 구한다</div>
    $$
    f\!\left(\frac12\right)=\frac14-\frac52+2\ln\frac12=-\frac94-2\ln2,
    $$
    $$
    f(2)=4-10+2\ln2=-6+2\ln2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 교점이 \(2\)개일 \(t\)를 고른다</div>
    <p>\(x\to0+\)에서 \(f(x)\to-\infty\), \(x\to\infty\)에서 \(f(x)\to\infty\)이고 그래프는 극대와 극소를 하나씩 거치므로, 직선 \(y=t\)와의 교점이 \(2\)개인 것은 \(t\)가 극댓값이거나 극솟값일 때뿐이다.</p>
    $$
    \left(-\frac94-2\ln2\right)+(-6+2\ln2)=-\frac{33}{4}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock06/calculus/q27": { answer: 3, html: String.raw`
  <div class="sol-box">두 직선이 이루는 각은 <b>탄젠트의 덧셈정리</b>로 바로 쓸 수 있다. 그다음은 \(\pi-t=x\)로 바꿔 \(x\to0+\)의 익숙한 극한으로 만든다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\tan\theta\)를 \(t\)로 나타낸다</div>
    <p>\(y=\sin x\)에서 \(y'=\cos x\)이므로 점 \(\mathrm P(t,\sin t)\)에서의 접선의 기울기는 \(\cos t\)이다. 기울기가 \(\cos t\)와 \(-1\)인 두 직선이 이루는 예각이 \(\theta\)이므로</p>
    $$
    \tan\theta=\left|\frac{\cos t-(-1)}{1+\cos t\times(-1)}\right|=\left|\frac{\cos t+1}{1-\cos t}\right|.
    $$
    <p>\(0&lt;t&lt;\pi\)에서 \(\cos t+1&gt;0\), \(1-\cos t&gt;0\)이므로 절댓값을 벗길 수 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\pi-t=x\)로 바꾼다</div>
    <p>\(t\to\pi-\)일 때 \(x\to0+\)이고 \(\cos t=\cos(\pi-x)=-\cos x\)이므로</p>
    $$
    \lim_{t\to\pi-}\frac{\tan\theta}{(\pi-t)^2}
    =\lim_{x\to0+}\frac{1-\cos x}{x^2(1+\cos x)}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 분자를 유리화해 계산한다</div>
    $$
    \lim_{x\to0+}\frac{1-\cos^2x}{x^2(1+\cos x)^2}
    =\lim_{x\to0+}\left\{\left(\frac{\sin x}{x}\right)^2\times\frac{1}{(1+\cos x)^2}\right\}
    =1^2\times\frac1{2^2}=\frac14.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock09/common/q01": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 지수법칙으로 지수를 더한다</div>
    $$
    3^{1-\sqrt5}\times3^{1+\sqrt5}=3^{(1-\sqrt5)+(1+\sqrt5)}=3^2=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_mock09/common/q02": { answer: 3, html: String.raw`
  <div class="sol-box">\(f(1)=2-1=1\)이므로 주어진 식은 \(x=1\)에서의 미분계수의 정의 그대로이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미분계수로 본다</div>
    $$
    \lim_{x\to1}\frac{f(x)-1}{x-1}=\lim_{x\to1}\frac{f(x)-f(1)}{x-1}=f'(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 미분해서 대입한다</div>
    $$
    f'(x)=4x-1,\qquad f'(1)=3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock09/common/q03": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 사분면을 보고 \(\sin\theta\)의 부호를 정한다</div>
    <p>\(\dfrac32\pi&lt;\theta&lt;2\pi\)이므로 \(\theta\)는 제4사분면의 각이고 \(\sin\theta&lt;0\)이다.</p>
    $$
    \sin\theta=-\sqrt{1-\cos^2\theta}=-\sqrt{1-\left(\frac{\sqrt6}{3}\right)^2}=-\sqrt{\frac13}=-\frac{\sqrt3}{3}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 탄젠트를 구한다</div>
    $$
    \tan\theta=\frac{\sin\theta}{\cos\theta}
    =\frac{-\frac{\sqrt3}{3}}{\frac{\sqrt6}{3}}
    =-\frac{\sqrt3}{\sqrt6}=-\frac{1}{\sqrt2}=-\frac{\sqrt2}{2}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock09/common/q04": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그래프에서 한쪽 극한을 각각 읽는다</div>
    <p>\(x\)가 \(-2\)에 오른쪽에서 가까워질 때의 값과, \(1\)에 왼쪽에서 가까워질 때의 값을 읽으면</p>
    $$
    \lim_{x\to-2+}f(x)=-2,\qquad \lim_{x\to1-}f(x)=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 더한다</div>
    $$
    -2+0=-2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_mock09/common/q05": { answer: 5, html: String.raw`
  <div class="sol-box">첨자의 합이 같으면 곱이 같다는 성질을 쓰면 \(\dfrac{a_3a_8}{a_6}\)이 곧 \(a_5\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a_5\)를 구한다</div>
    <p>첫째항을 \(a\), 공비를 \(r\)라 하면 모든 항이 양수이므로 \(a&gt;0,\ r&gt;0\)이다.</p>
    $$
    \frac{a_3a_8}{a_6}=\frac{ar^2\times ar^7}{ar^5}=ar^4=a_5=12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 공비의 제곱을 구한다</div>
    $$
    a_5+a_7=36\ \Longrightarrow\ a_7=24,\qquad r^2=\frac{a_7}{a_5}=\frac{24}{12}=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_{11}\)을 구한다</div>
    $$
    \frac{a_{11}}{a_7}=r^4=(r^2)^2=4,\qquad a_{11}=24\times4=96.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_mock09/common/q06": { answer: 3, html: String.raw`
  <div class="sol-box">극대·극소가 되는 두 \(x\)를 알므로 \(f'(x)\)를 인수분해된 꼴로 바로 쓸 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f'\)를 두 가지로 표현해 비교한다</div>
    <p>\(f'(x)=3x^2+2ax+b\)이고, \(f\)가 \(x=-1\)에서 극대, \(x=3\)에서 극소이므로 \(f'(-1)=f'(3)=0\)이다. 최고차항의 계수가 \(3\)이므로</p>
    $$
    3x^2+2ax+b=3(x+1)(x-3)=3x^2-6x-9.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 계수를 맞추고 극댓값을 구한다</div>
    $$
    a=-3,\qquad b=-9,\qquad f(x)=x^3-3x^2-9x+1,
    $$
    $$
    f(-1)=-1-3+9+1=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock09/common/q07": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 통분한다</div>
    $$
    \frac1{3a}+\frac1{2b}=\frac{2b+3a}{6ab}=\frac{3a+2b}{6ab}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 밑을 \(3\)으로 통일한다</div>
    $$
    3a+2b=\log_3 32=\log_3 2^5=5\log_3 2,
    $$
    $$
    ab=\log_9 2=\log_{3^2}2=\frac12\log_3 2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 대입한다</div>
    $$
    \frac{3a+2b}{6ab}=\frac{5\log_3 2}{6\times\frac12\log_3 2}=\frac{5\log_3 2}{3\log_3 2}=\frac53.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_mock09/common/q08": { answer: 4, html: String.raw`
  <div class="sol-box">\(f(1)\)을 아직 모르는 <b>상수</b>로 두고 적분한 뒤, \(x=1\)을 대입해 그 값을 결정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분한다</div>
    $$
    f(x)=\int\{6x^2-2f(1)x\}\,dx=2x^3-f(1)x^2+C.
    $$
    <p>\(f(0)=4\)이므로 \(C=4\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입해 \(f(1)\)을 구한다</div>
    $$
    f(1)=2-f(1)+4,\qquad 2f(1)=6,\qquad f(1)=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(2)\)를 구한다</div>
    $$
    f(x)=2x^3-3x^2+4,\qquad f(2)=16-12+4=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

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

"2024_mock09/prob_stat/q23": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이항분포의 평균을 쓴다</div>
    <p>확률변수 \(X\)가 이항분포 \(\mathrm B\!\left(30,\ \dfrac15\right)\)을 따르므로</p>
    $$
    \mathrm E(X)=30\times\frac15=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_mock09/prob_stat/q24": { answer: 3, html: String.raw`
  <div class="sol-box">최단 거리로 가는 경로의 수는 오른쪽·위쪽 이동을 나열하는 <b>같은 것이 있는 순열</b>의 수이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm A\to\mathrm P\)를 센다</div>
    <p>오른쪽으로 \(3\)번, 위쪽으로 \(1\)번 가야 하므로</p>
    $$
    \frac{4!}{3!\times1!}=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm P\to\mathrm B\)를 센다</div>
    <p>오른쪽으로 \(1\)번, 위쪽으로 \(1\)번 가야 하므로</p>
    $$
    \frac{2!}{1!\times1!}=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 곱한다</div>
    $$
    4\times2=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock09/prob_stat/q25": { answer: 3, html: String.raw`
  <div class="sol-box">"\(A\)와 \(B^{C}\)가 배반"은 곧 \(A\subset B\)라는 뜻이다. 이걸 알아채면 나머지는 뺄셈이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 포함 관계를 읽는다</div>
    <p>\(A\cap B^{C}=\varnothing\)이므로 \(A\)의 원소는 모두 \(B\)에 들어간다. 즉 \(A\subset B\)이고</p>
    $$
    \mathrm P(A\cap B)=\mathrm P(A)=\frac15.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm P(B)\)를 구한다</div>
    $$
    \mathrm P(A)+\mathrm P(B)=\frac7{10}\ \Longrightarrow\ \mathrm P(B)=\frac7{10}-\frac15=\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 답을 구한다</div>
    <p>\(A\subset B\)이므로 \(B\)에서 \(A\)를 빼면 \(A^{C}\cap B\)이다.</p>
    $$
    \mathrm P(A^{C}\cap B)=\mathrm P(B)-\mathrm P(A)=\frac12-\frac15=\frac3{10}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_mock09/prob_stat/q26": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 표준화한다</div>
    <p>시험 점수를 \(X\)라 하면 \(X\)는 정규분포 \(\mathrm N(68,\ 10^2)\)을 따르므로 \(Z=\dfrac{X-68}{10}\)은 표준정규분포 \(\mathrm N(0,1)\)을 따른다.</p>
    $$
    \mathrm P(55\le X\le78)=\mathrm P\!\left(\frac{55-68}{10}\le Z\le\frac{78-68}{10}\right)=\mathrm P(-1.3\le Z\le1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(Z=0\)에서 나눠 표를 쓴다</div>
    <p>표준정규분포는 \(Z=0\)에 대하여 대칭이므로 \(\mathrm P(-1.3\le Z\le0)=\mathrm P(0\le Z\le1.3)\)이다.</p>
    $$
    \mathrm P(0\le Z\le1.3)+\mathrm P(0\le Z\le1)=0.4032+0.3413=0.7445.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock09/prob_stat/q27": { answer: 4, html: String.raw`
  <div class="sol-box">\(f(2)=2\)가 이미 인수 \(2\)를 하나 주므로, 조건 (나)는 결국 <b>\(f(1),f(3),f(4)\) 중 적어도 하나가 짝수</b>라는 뜻이다. "적어도"이므로 여사건으로 센다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 구한다</div>
    <p>\(X\)에서 \(Y\)로의 일대일함수의 개수는</p>
    $$
    {}_7\mathrm P_4=7\times6\times5\times4=840.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)를 다시 읽는다</div>
    <p>\(f(2)=2\)이므로 \(f(1)f(2)f(3)f(4)=2\times f(1)f(3)f(4)\)이다. 이것이 \(4\)의 배수이려면 \(f(1)f(3)f(4)\)가 짝수, 즉 세 값 중 적어도 하나가 짝수여야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 여사건으로 센다</div>
    <p>\(f(2)=2\)인 함수의 개수는 남은 \(6\)개 값에서 \(3\)개를 뽑아 배열하는</p>
    $$
    6\times5\times4=120.
    $$
    <p>이 중 \(f(1),f(3),f(4)\)가 모두 홀수인 것은 \(1,3,5,7\)의 \(4\)개에서 \(3\)개를 뽑아 배열하는</p>
    $$
    4\times3\times2=24.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 확률을 구한다</div>
    $$
    \frac{120-24}{840}=\frac{96}{840}=\frac4{35}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_mock09/prob_stat/q28": { answer: 5, html: String.raw`
  <div class="sol-box">한 번의 시행에서 기록되는 차 \(X\)의 분포를 먼저 구해 놓으면, 표본평균이 \(2\)라는 조건은 \(X_1+X_2=4\)로 바뀐다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 각 주머니에서 차가 나올 확률</div>
    <p>주머니 \(\mathrm A\)에서는 \({}_3\mathrm C_2=3\)가지 중 차가 \(1\)인 것이 \(2\)가지, \(2\)인 것이 \(1\)가지이다. 주머니 \(\mathrm B\)에서는 \({}_4\mathrm C_2=6\)가지 중 차가 \(1\)인 것이 \(3\)가지, \(2\)인 것이 \(2\)가지, \(3\)인 것이 \(1\)가지이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(X\)의 분포를 구한다</div>
    <p>주사위에서 \(3\)의 배수가 나올 확률이 \(\dfrac13\), 아닐 확률이 \(\dfrac23\)이므로</p>
    $$
    \mathrm P(X=2)=\frac13\times\frac13+\frac23\times\frac26=\frac19+\frac29=\frac13,
    $$
    $$
    \mathrm P(X=3)=\frac23\times\frac16=\frac19,
    $$
    $$
    \mathrm P(X=1)=1-\frac13-\frac19=\frac59.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 표본평균 조건을 바꾼다</div>
    <p>크기가 \(2\)인 표본의 평균이 \(2\)라는 것은 \(X_1+X_2=4\)라는 뜻이므로, 가능한 순서쌍은 \((1,3),\ (3,1),\ (2,2)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 확률을 더한다</div>
    <p>두 시행은 독립이므로</p>
    $$
    2\times\frac59\times\frac19+\left(\frac13\right)^2=\frac{10}{81}+\frac9{81}=\frac{19}{81}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_mock09/calculus/q23": { answer: 4, html: String.raw`
  <div class="sol-box">\(\lim\limits_{x\to0}\dfrac{e^{x}-1}{x}=1\)을 쓸 수 있게 분자와 분모를 각각 지수에 맞춰 나눈다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 꼴을 맞춘다</div>
    $$
    \frac{e^{7x}-1}{e^{2x}-1}=\frac{e^{7x}-1}{7x}\times\frac{2x}{e^{2x}-1}\times\frac72.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    $$
    \lim_{x\to0}\frac{e^{7x}-1}{e^{2x}-1}=\frac72\times1\times1=\frac72.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_mock09/calculus/q24": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(t\)로 각각 미분한다</div>
    $$
    \frac{dx}{dt}=1-2\sin2t,\qquad \frac{dy}{dt}=2\sin t\cos t.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 매개변수로 나타낸 함수의 미분법을 쓴다</div>
    $$
    \frac{dy}{dx}=\frac{2\sin t\cos t}{1-2\sin2t}\qquad(1-2\sin2t\ne0).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=\dfrac\pi4\)를 대입한다</div>
    $$
    \frac{2\times\frac{\sqrt2}{2}\times\frac{\sqrt2}{2}}{1-2\sin\frac\pi2}=\frac{1}{1-2}=-1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock09/calculus/q25": { answer: 2, html: String.raw`
  <div class="sol-box">피적분함수가 \(f'(x)f(x)\) 꼴임을 알아채면 \(\dfrac12\{f(x)\}^2\)이 원시함수가 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f'\)를 확인한다</div>
    <p>\(f(x)=x+\ln x\)이므로 \(f'(x)=1+\dfrac1x\)이다. 따라서</p>
    $$
    \int_1^{e}\left(1+\frac1x\right)f(x)\,dx=\int_1^{e}f'(x)f(x)\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 원시함수를 찾아 계산한다</div>
    $$
    \int_1^{e}f'(x)f(x)\,dx=\left[\frac12\{f(x)\}^2\right]_1^{e}
    =\frac12\{f(e)\}^2-\frac12\{f(1)\}^2.
    $$
    <p>\(f(e)=e+1\), \(f(1)=1\)이므로</p>
    $$
    \frac12(e+1)^2-\frac12=\frac{e^2+2e}{2}=\frac{e^2}{2}+e.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_mock09/calculus/q26": { answer: 5, html: String.raw`
  <div class="sol-box">두 급수의 합이 주어졌으므로, 앞의 급수를 먼저 \(d\)로 나타내면 뒤의 등비급수 합도 \(d\)로 표현된다. 등비급수 쪽을 따로 구해 두 식을 맞추면 \(d\)가 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 앞의 급수를 \(d\)로 나타낸다</div>
    <p>공차를 \(d\ (d&gt;0)\)라 하면 \(a_{n+1}-a_n=d\)이므로</p>
    $$
    \frac{1}{a_na_{n+1}}=\frac1d\left(\frac1{a_n}-\frac1{a_{n+1}}\right),
    $$
    $$
    \sum_{k=1}^{n}\frac{1}{a_ka_{k+1}}=\frac1d\left(\frac1{a_1}-\frac1{a_{n+1}}\right).
    $$
    <p>\(a_1=1\)이고 \(d&gt;0\)이라 \(a_{n+1}\to\infty\)이므로</p>
    $$
    \sum_{n=1}^{\infty}\frac{1}{a_na_{n+1}}=\frac1d(1-0)=\frac1d.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 등비급수의 합을 \(d\)로 나타낸다</div>
    <p>주어진 급수의 합이 \(2\)이므로 급수의 성질에 의하여</p>
    $$
    \sum_{n=1}^{\infty}b_n=2-\frac1d.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 공비를 구해 다시 표현한다</div>
    <p>\(\sum b_n\)이 수렴하므로 공비 \(r\)는 \(-1&lt;r&lt;1\)이다. \(a_2b_2=(1+d)r=1\)에서 \(r=\dfrac{1}{1+d}\)이고, \(b_1=1\)이므로</p>
    $$
    \sum_{n=1}^{\infty}b_n=\frac{1}{1-\frac{1}{1+d}}=\frac{1+d}{d}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 두 식을 맞춘다</div>
    $$
    2-\frac1d=\frac{1+d}{d},\qquad 2d-1=1+d,\qquad d=2,
    $$
    $$
    \sum_{n=1}^{\infty}b_n=2-\frac12=\frac32.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

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

"2024_csat/common/q01": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(24\)를 소인수분해해 지수로 고친다</div>
    $$
    \sqrt[3]{24}\times3^{\frac23}=(2^3\times3)^{\frac13}\times3^{\frac23}
    =2\times3^{\frac13+\frac23}=2\times3=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_csat/common/q02": { answer: 4, html: String.raw`
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
    f'(x)=6x^2-10x,\qquad f'(2)=24-20=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_csat/common/q03": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sin\theta\)를 구한다</div>
    <p>\(\sin(-\theta)=-\sin\theta\)이므로</p>
    $$
    -\sin\theta=\frac13,\qquad \sin\theta=-\frac13.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사분면을 보고 \(\cos\theta\)를 구한다</div>
    <p>\(\dfrac32\pi&lt;\theta&lt;2\pi\)이므로 \(\theta\)는 제4사분면의 각이고 \(\cos\theta&gt;0\)이다.</p>
    $$
    \cos\theta=\sqrt{1-\frac19}=\frac{2\sqrt2}{3}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 탄젠트를 구한다</div>
    $$
    \tan\theta=\frac{\sin\theta}{\cos\theta}=-\frac{\frac13}{\frac{2\sqrt2}{3}}=-\frac{1}{2\sqrt2}=-\frac{\sqrt2}{4}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_csat/common/q04": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이어붙인 점에서 연속임을 쓴다</div>
    <p>\(f\)가 실수 전체의 집합에서 연속이므로 \(x=2\)에서도 연속이다.</p>
    $$
    \lim_{x\to2-}f(x)=\lim_{x\to2+}f(x)=f(2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 양쪽 값을 구해 맞춘다</div>
    $$
    \lim_{x\to2-}(3x-a)=6-a,\qquad \lim_{x\to2+}(x^2+a)=4+a=f(2),
    $$
    $$
    6-a=4+a,\qquad 2a=2,\qquad a=1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_csat/common/q05": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int(3x^2-6x)\,dx=x^3-3x^2+C.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분상수를 정하고 대입한다</div>
    $$
    f(1)=1-3+C=6\ \Longrightarrow\ C=8,
    $$
    $$
    f(2)=8-12+8=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_csat/common/q06": { answer: 4, html: String.raw`
  <div class="sol-box">\(S_4-S_2\)는 \(a_3+a_4\)이므로, 주어진 관계가 곧 \(a_3\)와 \(a_4\)의 비를 준다. 공비가 바로 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 공비를 구한다</div>
    $$
    S_4-S_2=a_3+a_4=3a_4\ \Longrightarrow\ a_3=2a_4,
    $$
    <p>\(a_5=\dfrac34\ne0\)이므로 \(r\ne0\)이고</p>
    $$
    r=\frac{a_4}{a_3}=\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_1\), \(a_2\)를 구한다</div>
    $$
    a_5=a_1r^4\ \Longrightarrow\ a_1=\frac34\times2^4=12,
    $$
    $$
    a_5=a_2r^3\ \Longrightarrow\ a_2=\frac34\times2^3=6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 더한다</div>
    $$
    a_1+a_2=12+6=18.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_csat/common/q07": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 도함수의 부호를 조사한다</div>
    $$
    f'(x)=x^2-4x-12=(x+2)(x-6),\qquad f'(x)=0\ \Longleftrightarrow\ x=-2\ \text{또는}\ x=6.
    $$
    <p>\(f'\)의 부호는 \(x=-2\)에서 양에서 음으로, \(x=6\)에서 음에서 양으로 바뀐다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극대·극소인 \(x\)를 읽는다</div>
    <p>따라서 \(f\)는 \(x=-2\)에서 극대, \(x=6\)에서 극소이므로 \(\alpha=-2\), \(\beta=6\)이다.</p>
    $$
    \beta-\alpha=6-(-2)=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_csat/common/q08": { answer: 2, html: String.raw`
  <div class="sol-box">우변을 \((x-1)\)로 묶으면 항등식이 되어 \(f\)가 바로 나온다. 적분은 홀수차 항이 대칭으로 사라지는 것을 이용한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f\)를 구한다</div>
    $$
    (x-1)f(x)=3x^4-3x=3x(x^3-1)=3x(x-1)(x^2+x+1).
    $$
    <p>\(f\)가 삼차함수이고 위 식이 \(x\)에 대한 항등식이므로</p>
    $$
    f(x)=3x(x^2+x+1)=3x^3+3x^2+3x.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대칭성을 이용해 적분한다</div>
    <p>\(3x^3\)과 \(3x\)는 기함수라 \(-2\)부터 \(2\)까지의 정적분이 \(0\)이므로</p>
    $$
    \int_{-2}^{2}f(x)\,dx=\int_{-2}^{2}3x^2\,dx=2\int_0^2 3x^2\,dx=2\Big[x^3\Big]_0^2=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_csat/common/q09": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 내분점의 좌표를 식으로 쓴다</div>
    <p>선분 \(\mathrm{PQ}\)를 \(m:(1-m)\)으로 내분하는 점의 좌표는</p>
    $$
    \frac{m\log_5 12+(1-m)\log_5 3}{m+(1-m)}=m\log_5 12+(1-m)\log_5 3=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(m\)에 대해 정리한다</div>
    $$
    m(\log_5 12-\log_5 3)=1-\log_5 3,
    $$
    $$
    m\log_5 4=\log_5 5-\log_5 3=\log_5\frac53,
    $$
    $$
    m=\frac{\log_5\frac53}{\log_5 4}=\log_4\frac53.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(4^m\)을 구한다</div>
    $$
    4^{m}=4^{\log_4\frac53}=\frac53.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_csat/common/q10": { answer: 2, html: String.raw`
  <div class="sol-box">두 점의 위치를 적분으로 구해 차를 만들면 \(f\)가 절댓값 하나로 정리된다. 그 안의 함수가 \(t\ge0\)에서 음수가 되지 않는지부터 확인한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 점의 위치를 구한다</div>
    $$
    x_1(t)=\int_0^t(u^2-6u+5)\,du=\frac13t^3-3t^2+5t,
    $$
    $$
    x_2(t)=\int_0^t(2u-7)\,du=t^2-7t.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(t)\)를 정리한다</div>
    $$
    f(t)=|x_1(t)-x_2(t)|=\left|\frac13t^3-4t^2+12t\right|.
    $$
    <p>\(g(t)=\dfrac13t^3-4t^2+12t\)라 하면 \(g'(t)=t^2-8t+12=(t-2)(t-6)\)이고 \(g(0)=0\), \(g(2)=\dfrac{32}{3}\), \(g(6)=0\)이다. 따라서 \(t\ge0\)에서 \(g(t)\ge0\)이므로 \(f(t)=g(t)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\), \(b\)를 읽는다</div>
    <p>\(f\)는 \([0,2]\)에서 증가, \([2,6]\)에서 감소, \([6,\infty)\)에서 증가하므로 \(a=2\), \(b=6\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 점 \(\mathrm Q\)가 움직인 거리를 구한다</div>
    <p>\(v_2(t)=2t-7\)은 \(t=\dfrac72\)에서 부호가 바뀌므로</p>
    $$
    \int_2^6|2t-7|\,dt=\int_2^{\frac72}(7-2t)\,dt+\int_{\frac72}^{6}(2t-7)\,dt
    =\Big[7t-t^2\Big]_2^{\frac72}+\Big[t^2-7t\Big]_{\frac72}^{6}
    =\frac94+\frac{25}{4}=\frac{17}{2}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_csat/common/q11": { answer: 1, html: String.raw`
  <div class="sol-box">절댓값 조건이 \(a_6+a_8=0\)을 주고, 합 조건이 부분분수로 갈라져 \(a_1\)과 \(a_6\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a_6+a_8=0\)임을 밝힌다</div>
    <p>\(|a_6|=a_8\)에서 \(a_6=a_8\) 또는 \(-a_6=a_8\)인데, 공차가 \(0\)이 아니므로 \(a_6\ne a_8\)이다. 따라서</p>
    $$
    a_6+a_8=0.
    $$
    <p>또 \(a_8\ge0\)이고 \(a_6=-a_8\)이므로 \(a_6\le0\le a_8\)이고, 둘이 다르므로 공차 \(d\)는 양수이다.</p>
    $$
    (a_1+5d)+(a_1+7d)=0\ \Longrightarrow\ a_1=-6d.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 합을 부분분수로 갈라 정리한다</div>
    <p>\(a_{k+1}-a_k=d\)이므로</p>
    $$
    \frac{1}{a_ka_{k+1}}=\frac1d\left(\frac1{a_k}-\frac1{a_{k+1}}\right),
    $$
    $$
    \sum_{k=1}^{5}\frac{1}{a_ka_{k+1}}=\frac1d\left(\frac1{a_1}-\frac1{a_6}\right)
    =\frac1d\times\frac{5d}{a_1(a_1+5d)}=\frac{5}{a_1(a_1+5d)}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(d\)를 구한다</div>
    $$
    \frac{5}{a_1(a_1+5d)}=\frac{5}{96}\ \Longrightarrow\ a_1(a_1+5d)=96.
    $$
    <p>\(a_1=-6d\)를 넣으면 \(-6d\times(-d)=96\), 즉 \(d^2=16\)이고 \(d&gt;0\)이므로 \(d=4\), \(a_1=-24\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 합을 구한다</div>
    $$
    \sum_{k=1}^{15}a_k=\frac{15\{2\times(-24)+14\times4\}}{2}=\frac{15\times8}{2}=60.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_csat/common/q12": { answer: 3, html: String.raw`
  <div class="sol-box">넓이를 \(t\)의 식으로 적어 놓고 미분한다. 잘라 붙인 직선 부분은 밑변과 높이가 모두 \(f(t)\)인 직각삼각형이라 넓이가 \(\dfrac12\{f(t)\}^2\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 넓이 \(S(t)\)를 세운다</div>
    <p>\(x\ge t\)에서 \(g\)의 그래프는 점 \((t,f(t))\)를 지나고 기울기가 \(-1\)인 직선이므로 \(x\)축과 점 \((t+f(t),\,0)\)에서 만난다. 따라서</p>
    $$
    S(t)=\int_0^t f(x)\,dx+\frac12\{f(t)\}^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 미분해서 부호를 본다</div>
    $$
    S'(t)=f(t)+f(t)f'(t)=f(t)\{1+f'(t)\}.
    $$
    <p>\(f(x)=\dfrac19x(x-6)(x-9)\)이므로 \(0&lt;t&lt;6\)에서 \(f(t)&gt;0\)이고</p>
    $$
    1+f'(t)=1+\frac19\{(t-6)(t-9)+t(t-9)+t(t-6)\}=\frac13(t-3)(t-7).
    $$
    <p>\(0&lt;t&lt;6\)에서 \(t-7&lt;0\)이므로 \(S'(t)\)의 부호는 \(t-3\)의 부호와 반대이다. 즉 \(S\)는 \(t=3\)에서 극대이면서 최대이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 최댓값을 계산한다</div>
    <p>\(f(3)=\dfrac19\times3\times(-3)\times(-6)=6\)이므로</p>
    $$
    S(3)=\frac19\int_0^3(x^3-15x^2+54x)\,dx+\frac12\times6^2
    =\frac19\left[\frac14x^4-5x^3+27x^2\right]_0^3+18,
    $$
    $$
    =\frac19\left(\frac{81}{4}-135+243\right)+18=\left(\frac94+12\right)+18=\frac{129}{4}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_csat/common/q13": { answer: 1, html: String.raw`
  <div class="sol-box">두 삼각형이 같은 원에 내접하므로, 넓이의 비가 \(\sin(\angle\mathrm{ADC})\)를 주고 그 값이 곧 사인법칙으로 반지름을 준다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\overline{\mathrm{AC}}\)를 구한다</div>
    <p>\(\overline{\mathrm{AC}}=a\ (a&gt;0)\)라 하면 삼각형 \(\mathrm{ABC}\)에서 코사인법칙에 의하여</p>
    $$
    13=3^2+a^2-2\times3\times a\times\cos\frac\pi3=9+a^2-3a,
    $$
    $$
    a^2-3a-4=0,\qquad (a+1)(a-4)=0,\qquad a=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 넓이를 쓴다</div>
    $$
    S_1=\frac12\times3\times4\times\sin\frac\pi3=3\sqrt3,
    $$
    $$
    S_2=\frac12\times\overline{\mathrm{AD}}\times\overline{\mathrm{CD}}\times\sin(\angle\mathrm{ADC})=\frac92\sin(\angle\mathrm{ADC}).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\sin(\angle\mathrm{ADC})\)를 구한다</div>
    $$
    \frac92\sin(\angle\mathrm{ADC})=\frac56\times3\sqrt3=\frac{5\sqrt3}{2},
    \qquad
    \sin(\angle\mathrm{ADC})=\frac{5\sqrt3}{9}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 사인법칙으로 \(R\)를 구한다</div>
    <p>삼각형 \(\mathrm{ACD}\)의 외접원이 곧 주어진 원이므로</p>
    $$
    \frac{\overline{\mathrm{AC}}}{\sin(\angle\mathrm{ADC})}=2R,\qquad
    \frac{4}{\frac{5\sqrt3}{9}}=2R,\qquad R=\frac{6\sqrt3}{5}.
    $$
    $$
    \frac{R}{\sin(\angle\mathrm{ADC})}=\frac{\frac{6\sqrt3}{5}}{\frac{5\sqrt3}{9}}=\frac{54}{25}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2024_csat/common/q17": { answer: 8, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 쓴다</div>
    $$
    f(x)=(x+1)(x^2+3)\ \Longrightarrow\ f'(x)=(x^2+3)+(x+1)\times2x.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입한다</div>
    $$
    f'(1)=(1+3)+2\times2=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{8}\)</div>
` },

"2024_csat/common/q18": { answer: 9, html: String.raw`
  <div class="sol-box">\(\sum a_k\)를 \(\sum b_k\)로 바꿔 놓으면 미지수가 하나로 줄어든다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sum a_k\)를 \(\sum b_k\)로 나타낸다</div>
    $$
    \sum_{k=1}^{10}a_k=\sum_{k=1}^{10}(2b_k-1)=2\sum_{k=1}^{10}b_k-10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 둘째 식에 대입한다</div>
    $$
    3\sum_{k=1}^{10}a_k+\sum_{k=1}^{10}b_k=33,
    $$
    $$
    3\left(2\sum_{k=1}^{10}b_k-10\right)+\sum_{k=1}^{10}b_k=33,
    $$
    $$
    7\sum_{k=1}^{10}b_k=63,\qquad \sum_{k=1}^{10}b_k=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{9}\)</div>
` },

"2024_csat/common/q19": { answer: 32, html: String.raw`
  <div class="sol-box">\(f(2+x)\)와 \(f(2-x)\)가 모두 \(\cos\dfrac\pi4x\)가 되어, 부등식이 코사인 하나에 대한 범위 문제로 바뀐다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 값을 코사인으로 바꾼다</div>
    $$
    f(2+x)=\sin\left(\frac\pi2+\frac\pi4x\right)=\cos\frac\pi4x,
    $$
    $$
    f(2-x)=\sin\left(\frac\pi2-\frac\pi4x\right)=\cos\frac\pi4x.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부등식을 정리한다</div>
    $$
    \cos^2\frac\pi4x&lt;\frac14\ \Longleftrightarrow\ -\frac12&lt;\cos\frac\pi4x&lt;\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 각의 범위를 구한다</div>
    <p>\(0&lt;x&lt;16\)에서 \(0&lt;\dfrac\pi4x&lt;4\pi\)이다. 한 주기 안에서 \(\cos\theta\)가 \(-\dfrac12\)와 \(\dfrac12\) 사이인 곳은 \(\dfrac\pi3&lt;\theta&lt;\dfrac{2}{3}\pi\)와 \(\dfrac43\pi&lt;\theta&lt;\dfrac53\pi\)이므로</p>
    $$
    \frac\pi3&lt;\frac\pi4x&lt;\frac23\pi,\quad
    \frac43\pi&lt;\frac\pi4x&lt;\frac53\pi,\quad
    \frac73\pi&lt;\frac\pi4x&lt;\frac83\pi,\quad
    \frac{10}3\pi&lt;\frac\pi4x&lt;\frac{11}3\pi,
    $$
    <p>즉</p>
    $$
    \frac43&lt;x&lt;\frac83,\quad \frac{16}3&lt;x&lt;\frac{20}3,\quad
    \frac{28}3&lt;x&lt;\frac{32}3,\quad \frac{40}3&lt;x&lt;\frac{44}3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 자연수를 골라 더한다</div>
    <p>각 구간에 들어가는 자연수는 \(2,\ 6,\ 10,\ 14\)이므로</p>
    $$
    2+6+10+14=32.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{32}\)</div>
` },

"2024_csat/common/q15": { answer: 3, html: String.raw`
  <div class="sol-box">한 단계 <b>거꾸로</b> 갈 때 후보가 둘뿐이다. \(a_{n+1}=v\)이면 \(a_n=2v\)(짝수 쪽)이거나, \(v=2^{a_n}\)에서 \(a_n=\log_2 v\)(홀수 쪽)인데 뒤쪽은 \(\log_2 v\)가 <b>홀수인 자연수</b>일 때만 살아남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a_6\), \(a_7\)을 정한다</div>
    <p>모든 항이 자연수이고 \(a_6+a_7=3\)이므로 \((a_6,a_7)\)은 \((1,2)\) 또는 \((2,1)\)이다. 두 경우 모두 규칙과 어긋나지 않는다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a_6=1\)에서 거슬러 올라간다</div>
    $$
    a_5:\ \{2\}\ \to\ a_4:\ \{1,\ 4\}\ \to\ a_3:\ \{2,\ 8\}\ \to\ a_2:\ \{1,\ 3,\ 4,\ 16\}
    $$
    <p>(예를 들어 \(a_4=4\)에서 \(a_3\)은 \(2\times4=8\), 또는 \(\log_2 4=2\)인데 이는 짝수라 홀수 쪽 조건에 어긋나므로 \(8\)뿐이다.)</p>
    <p>마지막으로 \(a_1\)은 \(1\to2\), \(3\to6\), \(4\to8\), \(16\to32\)로</p>
    $$
    a_1\in\{2,\ 6,\ 8,\ 32\},\qquad \text{합}=48.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_6=2\)에서 거슬러 올라간다</div>
    $$
    a_5:\ \{1,\ 4\}\ \to\ a_4:\ \{2,\ 8\}\ \to\ a_3:\ \{1,\ 3,\ 4,\ 16\}\ \to\ a_2:\ \{2,\ 6,\ 8,\ 32\}
    $$
    <p>여기서 \(a_1\)은 \(2\to1,4\), \(6\to12\), \(8\to3,16\), \(32\to5,64\)이므로</p>
    $$
    a_1\in\{1,\ 3,\ 4,\ 5,\ 12,\ 16,\ 64\},\qquad \text{합}=105.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 모두 더한다</div>
    $$
    48+105=153.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_csat/common/q16": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(3\)으로 통일한다</div>
    $$
    \left(\frac1{27}\right)^{x}=(3^{-3})^{x}=3^{-3x}
    $$
    <p>이므로 주어진 방정식은 \(3^{\,x-8}=3^{-3x}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 비교한다</div>
    $$
    x-8=-3x,\qquad 4x=8,\qquad x=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{2}\)</div>
` },

"2024_csat/common/q21": { answer: 10, html: String.raw`
  <div class="sol-box">\(g(t)\)는 길이 \(2\)인 창을 옮기며 본 최댓값이다. 창이 \(f\ge5\)인 구간 \([1,5]\)를 스치는 동안은 \(g(t)\ge5\)가 저절로 보장되고, 창이 그곳을 <b>막 벗어나는 순간</b>이 문제가 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f(x)\ge5\)인 구간을 찾는다</div>
    $$
    -x^2+6x\ge5\ \Longleftrightarrow\ x^2-6x+5\le0\ \Longleftrightarrow\ 1\le x\le5.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(0\le t\le6\)에서는 항상 \(g(t)\ge5\)</div>
    <p>창 \([t-1,\ t+1]\)이 구간 \([1,5]\)와 만나는 것은 \(t-1\le5\), 즉 \(t\le6\)일 때이다. 이때 창 안에 \(f\ge5\)인 점이 있으므로 \(g(t)\ge5\)이고, 특히</p>
    $$
    g(0)=f(1)=5
    $$
    <p>이므로 \(5\)는 실제로 도달하는 값이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t&gt;6\)에서 조건을 따진다</div>
    <p>\(t&gt;6\)이면 창은 \([t-1,\ t+1]\subset(5,\infty)\)이다. 여기서 \(5&lt;x&lt;6\) 부분의 \(f\)는 \(5\)보다 작고(감소해서 \(0\)까지 내려간다), \(x\ge6\) 부분의 \(f=a\log_4(x-5)\)는 증가하므로</p>
    $$
    g(t)=\max\Big(f(t-1),\ a\log_4(t-4)\Big),\qquad f(t-1)&lt;5.
    $$
    <p>따라서 \(g(t)\ge5\)이려면 \(a\log_4(t-4)\ge5\)이어야 한다. 이 값은 \(t\)에 대하여 증가하므로 \(t\to6+\)일 때가 가장 작고, 그 극한이</p>
    $$
    a\log_4 2=\frac a2
    $$
    <p>이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(a\)의 최솟값을 구한다</div>
    $$
    \frac a2\ge5,\qquad a\ge10.
    $$
    <p>\(a=10\)이면 \(t&gt;6\)에서 \(g(t)&gt;5\)이고 \(g(0)=5\)이므로 최솟값이 정확히 \(5\)가 된다. 따라서 구하는 최솟값은 \(10\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{10}\)</div>
` },

"2024_csat/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 같은 것이 있는 순열의 수를 쓴다</div>
    <p>\(x\)가 \(2\)개, \(y\)가 \(2\)개, \(z\)가 \(1\)개이므로</p>
    $$
    \frac{5!}{2!\times2!}=\frac{120}{4}=30.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_csat/prob_stat/q24": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(A)\)를 구한다</div>
    $$
    \mathrm P(A^{C})=2\mathrm P(A)\ \Longrightarrow\ 1-\mathrm P(A)=2\mathrm P(A),\qquad \mathrm P(A)=\frac13.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 독립의 뜻을 쓴다</div>
    <p>두 사건이 서로 독립이므로 \(\mathrm P(A\cap B)=\mathrm P(A)\mathrm P(B)\)이다.</p>
    $$
    \frac13\times\mathrm P(B)=\frac14,\qquad \mathrm P(B)=\frac34.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_csat/prob_stat/q25": { answer: 5, html: String.raw`
  <div class="sol-box">"합이 \(10\) 이하"의 여사건은 \(5+6=11\) 하나뿐이라 세기가 훨씬 쉽다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 여사건을 파악한다</div>
    <p>\(1\)부터 \(6\)까지의 수 중 두 수의 합이 \(10\)보다 큰 경우는 \(5+6=11\)뿐이다. 따라서 양 끝에 놓인 두 수의 합이 \(10\) 이하인 사건을 \(A\)라 하면, \(A^{C}\)는 양 끝이 \(5\)와 \(6\)인 사건이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건의 확률을 센다</div>
    <p>양 끝에 \(5,6\)을 놓는 경우가 \(2!\)가지, 나머지 \(4\)장을 가운데 배열하는 경우가 \(4!\)가지이므로</p>
    $$
    \mathrm P(A^{C})=\frac{2!\times4!}{6!}=\frac{48}{720}=\frac1{15}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 답을 구한다</div>
    $$
    \mathrm P(A)=1-\frac1{15}=\frac{14}{15}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2024_csat/prob_stat/q26": { answer: 2, html: String.raw`
  <div class="sol-box">\(Y=2\)는 \(X\ge2\)를 통째로 모은 것이므로, \(Y=0\)과 \(Y=1\)만 구하고 나머지는 \(1\)에서 빼면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(X\)의 분포를 쓴다</div>
    <p>\(X\)는 이항분포 \(\mathrm B\!\left(4,\ \dfrac12\right)\)를 따르므로</p>
    $$
    \mathrm P(Y=0)=\mathrm P(X=0)={}_4\mathrm C_0\left(\frac12\right)^4=\frac1{16},
    $$
    $$
    \mathrm P(Y=1)=\mathrm P(X=1)={}_4\mathrm C_1\left(\frac12\right)^4=\frac4{16}=\frac14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 나머지를 채운다</div>
    $$
    \mathrm P(Y=2)=1-\frac1{16}-\frac14=\frac{11}{16}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 평균을 구한다</div>
    $$
    \mathrm E(Y)=0\times\frac1{16}+1\times\frac14+2\times\frac{11}{16}=\frac4{16}+\frac{22}{16}=\frac{26}{16}=\frac{13}{8}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_csat/prob_stat/q27": { answer: 2, html: String.raw`
  <div class="sol-box">신뢰구간의 두 끝이 \(\overline{x}\)에서 같은 거리만큼 떨어져 있다는 점을 쓰면 \(a\)와 \(\overline{x}\)가 한 번에 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 신뢰구간을 쓴다</div>
    <p>모표준편차가 \(5\), 표본의 크기가 \(49\)이므로 모평균 \(m\)에 대한 신뢰도 \(95\%\)의 신뢰구간은</p>
    $$
    \overline{x}-1.96\times\frac{5}{\sqrt{49}}\le m\le\overline{x}+1.96\times\frac{5}{\sqrt{49}},
    $$
    $$
    \overline{x}-1.4\le m\le\overline{x}+1.4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 주어진 구간과 비교한다</div>
    $$
    a=\overline{x}-1.4,\qquad \frac65a=\overline{x}+1.4.
    $$
    <p>두 식을 빼면</p>
    $$
    \frac65a-a=\frac a5=2.8,\qquad a=14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 표본평균을 구한다</div>
    $$
    \overline{x}=a+1.4=15.4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_csat/prob_stat/q28": { answer: 4, html: String.raw`
  <div class="sol-box">카드에 따라 <b>넣는 공의 개수</b>가 \(1,2,2,3\)이고 <b>검은 공의 개수</b>가 \(0,1,1,1\)이다. 공이 \(8\)개가 되는 조합을 먼저 나열하면 각 경우의 검은 공 개수가 저절로 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 공이 \(8\)개가 되는 조합을 찾는다</div>
    <p>한 번의 시행에서 넣는 공은 카드 \(1\)이면 \(1\)개, 카드 \(2\) 또는 \(3\)이면 \(2\)개, 카드 \(4\)이면 \(3\)개이다. 네 번의 합이 \(8\)이 되는 경우는</p>
    $$
    8=3+3+1+1,\qquad 8=3+2+2+1,\qquad 8=2+2+2+2
    $$
    <p>뿐이다. 상자 \(\mathrm B\)에 들어 있는 공의 개수가 \(8\)인 사건을 \(E\), 검은 공의 개수가 \(2\)인 사건을 \(F\)라 하자.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 각 경우의 확률과 검은 공 개수</div>
    <p>ⅰ) \(3+3+1+1\) : 카드 \(4\)를 두 번, 카드 \(1\)을 두 번. 검은 공은 \(2\)개이다.</p>
    $$
    \frac{4!}{2!\times2!}\times\left(\frac14\right)^2\left(\frac14\right)^2=6\times\left(\frac14\right)^4.
    $$
    <p>ⅱ) \(3+2+2+1\) : 카드 \(4\)를 한 번, 카드 \(2\) 또는 \(3\)을 두 번, 카드 \(1\)을 한 번. 검은 공은 \(3\)개이다.</p>
    $$
    \frac{4!}{2!}\times\frac14\times\left(\frac24\right)^2\times\frac14=48\times\left(\frac14\right)^4.
    $$
    <p>ⅲ) \(2+2+2+2\) : 카드 \(2\) 또는 \(3\)을 네 번. 검은 공은 \(4\)개이다.</p>
    $$
    \left(\frac24\right)^4=16\times\left(\frac14\right)^4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건부확률을 구한다</div>
    <p>검은 공이 \(2\)개인 것은 ⅰ)뿐이므로</p>
    $$
    \mathrm P(E)=(6+48+16)\left(\frac14\right)^4=70\left(\frac14\right)^4,\qquad
    \mathrm P(E\cap F)=6\left(\frac14\right)^4,
    $$
    $$
    \mathrm P(F\mid E)=\frac{6}{70}=\frac3{35}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_csat/calculus/q23": { answer: 3, html: String.raw`
  <div class="sol-box">\(\lim\limits_{x\to0}\dfrac{\ln(1+x)}{x}=1\)을 쓸 수 있게 분자와 분모를 각각 \(3x\), \(5x\)로 맞춘다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 꼴을 맞춘다</div>
    $$
    \frac{\ln(1+3x)}{\ln(1+5x)}
    =\frac35\times\frac{\ \dfrac{\ln(1+3x)}{3x}\ }{\ \dfrac{\ln(1+5x)}{5x}\ }.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    $$
    \lim_{x\to0}\frac{\ln(1+3x)}{\ln(1+5x)}=\frac35\times\frac11=\frac35.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_csat/calculus/q24": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(t\)로 각각 미분한다</div>
    $$
    x=\ln(t^3+1)\ \Longrightarrow\ \frac{dx}{dt}=\frac{3t^2}{t^3+1},
    $$
    $$
    y=\sin\pi t\ \Longrightarrow\ \frac{dy}{dt}=\pi\cos\pi t.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 매개변수로 나타낸 함수의 미분법을 쓴다</div>
    $$
    \frac{dy}{dx}=\frac{\pi\cos\pi t}{\frac{3t^2}{t^3+1}}=\frac{\pi(t^3+1)\cos\pi t}{3t^2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=1\)을 대입한다</div>
    $$
    \frac{\pi\times2\times(-1)}{3}=-\frac23\pi.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2024_csat/calculus/q25": { answer: 4, html: String.raw`
  <div class="sol-box">역함수 관계를 미분하면 \(g'(f(x))f'(x)=1\)이 나온다. 이걸 넣으면 피적분함수가 \(\dfrac{f'(x)}{f(x)}\)가 되어 로그로 적분된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 역함수 관계를 미분한다</div>
    <p>모든 양수 \(x\)에 대하여 \(g(f(x))=x\)이므로 양변을 \(x\)에 대하여 미분하면</p>
    $$
    g'(f(x))f'(x)=1.
    $$
    <p>또 \(g\)의 정의역이 양의 실수 전체이므로 그 역함수 \(f\)의 치역도 양의 실수 전체이고, 따라서 모든 양수 \(x\)에서 \(f(x)&gt;0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분을 계산한다</div>
    $$
    \int_1^{a}\frac{1}{g'(f(x))f(x)}\,dx=\int_1^{a}\frac{f'(x)}{f(x)}\,dx
    =\Big[\ln|f(x)|\Big]_1^{a}=\ln f(a)-\ln f(1).
    $$
    <p>\(f(1)=8\)이므로 이 값은 \(\ln f(a)-3\ln2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(a)\)를 구한다</div>
    $$
    \ln f(a)-3\ln2=2\ln a+\ln(a+1)-\ln2,
    $$
    $$
    \ln f(a)=\ln a^2+\ln(a+1)+\ln 2^2=\ln\{4a^2(a+1)\},
    $$
    $$
    f(a)=4a^2(a+1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(f(2)\)를 구한다</div>
    $$
    f(2)=4\times4\times3=48.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2024_csat/calculus/q26": { answer: 3, html: String.raw`
  <div class="sol-box">단면이 정사각형이므로 넓이가 \((1-2x)\cos x\)이고, 부피는 그것을 그대로 적분한 값이다. 부분적분으로 계산한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부피를 정적분으로 쓴다</div>
    $$
    V=\int_{\frac34\pi}^{\frac54\pi}(1-2x)\cos x\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부분적분한다</div>
    <p>\(u=1-2x\), \(v'=\cos x\)로 두면 \(u'=-2\), \(v=\sin x\)이므로</p>
    $$
    V=\Big[(1-2x)\sin x\Big]_{\frac34\pi}^{\frac54\pi}+2\int_{\frac34\pi}^{\frac54\pi}\sin x\,dx
    =\Big[(1-2x)\sin x\Big]_{\frac34\pi}^{\frac54\pi}+2\Big[-\cos x\Big]_{\frac34\pi}^{\frac54\pi}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 값을 대입한다</div>
    <p>\(\sin\dfrac54\pi=-\dfrac{\sqrt2}{2}\), \(\sin\dfrac34\pi=\dfrac{\sqrt2}{2}\), \(\cos\dfrac54\pi=\cos\dfrac34\pi=-\dfrac{\sqrt2}{2}\)이므로</p>
    $$
    V=\left(1-\frac52\pi\right)\left(-\frac{\sqrt2}{2}\right)-\left(1-\frac32\pi\right)\frac{\sqrt2}{2}
    +2\left(\frac{\sqrt2}{2}-\frac{\sqrt2}{2}\right),
    $$
    $$
    =-\frac{\sqrt2}{2}\left\{\left(1-\frac52\pi\right)+\left(1-\frac32\pi\right)\right\}
    =-\frac{\sqrt2}{2}(2-4\pi)=2\sqrt2\pi-\sqrt2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2024_csat/calculus/q27": { answer: 1, html: String.raw`
  <div class="sol-box">접점을 \(s\)로 두면 \(t\)와 \(f(t)\)가 모두 \(s\)의 식이 된다. 두 식을 \(s\)로 미분해 \(\dfrac{dt}{ds}\)를 없애면 \(f'(t)\)가 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접선이 원점을 지나는 조건을 쓴다</div>
    <p>\(y=e^{-x}+e^{t}\)에서 \(y'=-e^{-x}\)이므로 접점을 \((s,\ e^{-s}+e^{t})\)라 하면 접선은</p>
    $$
    y=-e^{-s}(x-s)+e^{-s}+e^{t}.
    $$
    <p>이 접선이 원점을 지나므로</p>
    $$
    se^{-s}+e^{-s}+e^{t}=0,\qquad e^{t}=-(s+1)e^{-s}.
    $$
    <p>또 접선의 기울기가 \(f(t)\)이므로 \(f(t)=-e^{-s}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 식을 \(s\)로 미분한다</div>
    $$
    e^{t}\frac{dt}{ds}=-e^{-s}+(s+1)e^{-s}=se^{-s},
    $$
    $$
    f'(t)\frac{dt}{ds}=e^{-s}.
    $$
    <p>두 식을 나누면 \(\dfrac{dt}{ds}\)가 사라져</p>
    $$
    \frac{e^{t}}{f'(t)}=s,\qquad f'(t)=\frac{e^{t}}{s}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(a)=-e\sqrt e\)에서 \(s\)를 구한다</div>
    $$
    -e^{-s}=-e\sqrt e=-e^{\frac32}\ \Longrightarrow\ s=-\frac32,
    $$
    $$
    e^{a}=-(s+1)e^{-s}=\frac12e^{\frac32}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(f'(a)\)를 구한다</div>
    $$
    f'(a)=\frac{e^{a}}{s}=\frac{\frac12e^{\frac32}}{-\frac32}=-\frac13e^{\frac32}=-\frac13e\sqrt e.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

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

"2025_mock06/common/q09": { answer: 3, html: String.raw`
  <div class="sol-box">\(f\)가 \(x=0\)에서만 불연속이므로, \((f(x)+a)^2\)이 연속이려면 \(x=0\)에서의 좌극한과 우극한이 같아야 한다. 제곱이므로 <b>부호가 반대여도</b> 값이 같아질 수 있다는 점이 핵심이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x=0\)에서의 두 극한을 쓴다</div>
    $$
    \lim_{x\to0-}\{f(x)+a\}^2=\left(-\frac12+a\right)^2,\qquad
    \{f(0)+a\}^2=(3+a)^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 값을 같게 놓는다</div>
    $$
    \left(a-\frac12\right)^2=(a+3)^2,
    $$
    $$
    a^2-a+\frac14=a^2+6a+9,\qquad 7a=-\frac{35}{4},\qquad a=-\frac54.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock06/common/q10": { answer: 5, html: String.raw`
  <div class="sol-box">두 조건이 각각 변의 <b>비</b>를 주므로, 세 변을 한 문자 \(k\)로 놓으면 코사인법칙 한 번으로 각이 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 세 변의 비를 구한다</div>
    <p>\(\overline{\mathrm{BC}}=a\), \(\overline{\mathrm{CA}}=b\), \(\overline{\mathrm{AB}}=c\), 외접원의 반지름을 \(R\)라 하자. 외접원의 넓이가 \(9\pi\)이므로 \(R=3\)이다.</p>
    <p>사인법칙에서 \(\sin A=\dfrac{a}{2R}\), \(\sin B=\dfrac{b}{2R}\)이므로 조건 (가) \(3\sin A=2\sin B\)는</p>
    $$
    3a=2b,\qquad b=\frac32a.
    $$
    <p>조건 (나) \(\cos B=\cos C\)에서 \(B=C\), 즉 \(b=c\)이다. 따라서 \(a=2k\), \(b=c=3k\)로 놓을 수 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\sin A\)를 구한다</div>
    $$
    \cos A=\frac{b^2+c^2-a^2}{2bc}=\frac{9k^2+9k^2-4k^2}{2\times9k^2}=\frac{7}{9},
    $$
    $$
    \sin A=\sqrt{1-\frac{49}{81}}=\frac{4\sqrt2}{9}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 실제 길이를 구해 넓이를 계산한다</div>
    $$
    a=2R\sin A=6\times\frac{4\sqrt2}{9}=\frac{8\sqrt2}{3},\qquad b=c=\frac32a=4\sqrt2,
    $$
    $$
    \frac12bc\sin A=\frac12\times4\sqrt2\times4\sqrt2\times\frac{4\sqrt2}{9}=\frac{64\sqrt2}{9}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock06/common/q11": { answer: 5, html: String.raw`
  <div class="sol-box">주어진 극한이 \(\dfrac00\) 꼴이 되어야 하므로 \(f(a)=1\)이고, 그 극한값이 곧 \(f'(a)=3\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한에서 두 정보를 얻는다</div>
    <p>\(f\)가 연속이고 극한값이 존재하므로 \(f(a)=1\)이어야 하고, 그때 주어진 극한은 미분계수이므로</p>
    $$
    f(a)=1,\qquad f'(a)=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 접선의 \(y\)절편으로 \(a\)를 구한다</div>
    <p>점 \((a,f(a))\)에서의 접선은 \(y=3(x-a)+1=3x-3a+1\)이므로 \(y\)절편이 \(-3a+1\)이다.</p>
    $$
    -3a+1=4,\qquad a=-1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f\)를 확정한다</div>
    <p>\(f(0)=0\)이고 최고차항의 계수가 \(1\)이므로 \(f(x)=x^3+px^2+qx\)로 놓으면</p>
    $$
    f(-1)=-1+p-q=1\ \Longrightarrow\ p-q=2,
    $$
    $$
    f'(-1)=3-2p+q=3\ \Longrightarrow\ 2p-q=0.
    $$
    <p>연립하면 \(p=-2\), \(q=-4\)이므로 \(f(x)=x^3-2x^2-4x\)이다.</p>
    $$
    f(1)=1-2-4=-5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock06/common/q12": { answer: 3, html: String.raw`
  <div class="sol-box">\(2^{\alpha}=t\)로 놓으면 조건이 \(t\)에 대한 삼차방정식이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 선분의 길이를 쓴다</div>
    <p>두 점 \(\mathrm A\), \(\mathrm B\)의 \(x\)좌표를 \(\alpha\), 두 점 \(\mathrm C\), \(\mathrm D\)의 \(x\)좌표를 \(\beta\)라 하면</p>
    $$
    \overline{\mathrm{AB}}=2^{\alpha}-(1-2^{-\alpha})=2^{\alpha}+2^{-\alpha}-1,
    $$
    $$
    \overline{\mathrm{CD}}=2^{\beta}-(1-2^{-\beta})=2^{\beta}+2^{-\beta}-1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 점 \(\mathrm A\), \(\mathrm C\)의 \(y\)좌표가 같음을 쓴다</div>
    $$
    2^{\beta}=1-2^{-\alpha}\ \Longrightarrow\ 2^{-\beta}=\frac{1}{1-2^{-\alpha}},
    $$
    $$
    \overline{\mathrm{CD}}=(1-2^{-\alpha})+\frac{1}{1-2^{-\alpha}}-1=-2^{-\alpha}+\frac{1}{1-2^{-\alpha}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\overline{\mathrm{AB}}=2\,\overline{\mathrm{CD}}\)를 풀어 \(\alpha\)를 구한다</div>
    <p>\(2^{\alpha}=t\ (t&gt;0)\)로 놓으면 \(2^{-\alpha}=\dfrac1t\)이고</p>
    $$
    t+\frac1t-1=2\left(-\frac1t+\frac{t}{t-1}\right).
    $$
    <p>양변에 \(t(t-1)\)을 곱해 정리하면</p>
    $$
    t^3-4t^2+4t-3=0,\qquad (t-3)(t^2-t+1)=0.
    $$
    <p>\(t^2-t+1\)의 판별식이 음수이므로 실근은 \(t=3\)뿐이다. 즉 \(\alpha=\log_2 3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(\beta\)를 구해 넓이를 계산한다</div>
    $$
    2^{\beta}=1-\frac13=\frac23\ \Longrightarrow\ \beta=\log_2\frac23=1-\log_2 3.
    $$
    <p>\(\overline{\mathrm{AB}}=3+\dfrac13-1=\dfrac73\), \(\overline{\mathrm{CD}}=\dfrac76\), \(\overline{\mathrm{AC}}=\alpha-\beta=2\log_2 3-1\)이므로 사다리꼴 \(\mathrm{ABCD}\)의 넓이는</p>
    $$
    \frac12\left(\frac73+\frac76\right)(2\log_2 3-1)=\frac74(2\log_2 3-1)=\frac72\log_2 3-\frac74.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock06/common/q13": { answer: 3, html: String.raw`
  <div class="sol-box">\(A\)는 곡선이 아래, \(B\)는 곡선이 위인 부분이므로 \(B-A\)는 부호를 살린 정적분 하나로 합쳐진다. 교점 \(\alpha\)를 구할 필요가 없다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(B-A\)를 하나의 정적분으로 만든다</div>
    <p>\(f(x)=\dfrac14x^3+\dfrac12x\), \(g(x)=mx+2\)라 하고 교점의 \(x\)좌표를 \(\alpha\)라 하면</p>
    $$
    A=\int_0^{\alpha}\{g(x)-f(x)\}\,dx,\qquad B=\int_{\alpha}^{2}\{f(x)-g(x)\}\,dx,
    $$
    $$
    B-A=\int_{\alpha}^{2}\{f-g\}\,dx+\int_0^{\alpha}\{f-g\}\,dx=\int_0^{2}\{f(x)-g(x)\}\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 계산해 \(m\)을 구한다</div>
    $$
    \int_0^{2}\left\{\frac14x^3+\left(\frac12-m\right)x-2\right\}dx
    =\left[\frac1{16}x^4+\frac12\left(\frac12-m\right)x^2-2x\right]_0^{2}
    $$
    $$
    =1+(1-2m)-4=-2-2m=\frac23,
    $$
    $$
    2m=-\frac83,\qquad m=-\frac43.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock06/common/q14": { answer: 4, html: String.raw`
  <div class="sol-box">두 진수 조건과 부등식 조건이 각각 \(n\)의 상한을 준다. <b>세 상한 중 가장 작은 것</b>이 \(12\)가 되도록 \(k\)를 고르면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 진수 조건에서 상한을 얻는다</div>
    $$
    -n^2+10n+75&gt;0\ \Longleftrightarrow\ (n+5)(n-15)&lt;0\ \Longleftrightarrow\ -5&lt;n&lt;15,
    $$
    <p>이므로 자연수 \(n\)에 대하여 \(n\le14\)이다. 또</p>
    $$
    75-kn&gt;0\ \Longleftrightarrow\ n&lt;\frac{75}{k}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부등식 조건에서 상한을 얻는다</div>
    <p>\(\log_2\sqrt{-n^2+10n+75}=\log_4(-n^2+10n+75)\)이므로 주어진 조건은</p>
    $$
    \log_4(-n^2+10n+75)&gt;\log_4(75-kn).
    $$
    <p>밑 \(4\)가 \(1\)보다 크므로</p>
    $$
    -n^2+10n+75&gt;75-kn,\qquad n^2-(10+k)n&lt;0,\qquad 0&lt;n&lt;10+k,
    $$
    <p>즉 자연수 \(n\)에 대하여 \(n\le9+k\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 개수가 \(12\)일 조건을 쓴다</div>
    <p>조건을 만족시키는 자연수 \(n\)은 \(1\)부터 세 상한 중 가장 작은 값까지이므로, 그 개수가 \(12\)라는 것은 \(n=12\)는 되고 \(n=13\)은 안 된다는 뜻이다.</p>
    $$
    \frac{75}{k}&gt;12\ \text{이고}\ 9+k\ge12,\qquad \text{그러나}\quad
    \frac{75}{k}&gt;13\ \text{이고}\ 9+k\ge13\ \text{는 아니어야 한다.}
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(k\)를 고른다</div>
    <p>앞의 조건에서 \(k&lt;6.25\)이고 \(k\ge3\)이므로 \(3\le k\le6\)이다. 뒤의 조건에서 제외할 것은 \(k&lt;\dfrac{75}{13}\)이고 \(k\ge4\)인 \(k\), 즉 \(k=4,\ 5\)이다.</p>
    <p>따라서 \(k=3\) 또는 \(k=6\)이고</p>
    $$
    3+6=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_mock06/common/q16": { answer: 7, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 진수 조건을 먼저 적는다</div>
    $$
    x+1&gt;0,\qquad x-3&gt;0\ \Longrightarrow\ x&gt;3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 밑을 \(2\)로 통일한다</div>
    <p>\(\log_{\frac12}(x-3)=-\log_2(x-3)\)이므로 주어진 식은</p>
    $$
    \log_2(x+1)-5=-\log_2(x-3),\qquad \log_2(x+1)+\log_2(x-3)=5.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 풀어서 진수 조건에 맞는 해를 고른다</div>
    $$
    (x+1)(x-3)=2^5=32,\qquad x^2-2x-35=0,\qquad (x+5)(x-7)=0.
    $$
    <p>\(x&gt;3\)이므로 \(x=7\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{7}\)</div>
` },

"2025_mock06/common/q17": { answer: 23, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int(6x^2+2)\,dx=2x^3+2x+C.
    $$
    <p>\(f(0)=3\)이므로 \(C=3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    f(2)=2\times8+2\times2+3=23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{23}\)</div>
` },

"2025_mock06/common/q18": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합의 기호를 분리한다</div>
    $$
    \sum_{k=1}^{9}(ak^2-10k)=a\sum_{k=1}^{9}k^2-10\sum_{k=1}^{9}k.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 공식을 대입한다</div>
    $$
    a\times\frac{9\times10\times19}{6}-10\times\frac{9\times10}{2}=285a-450=120,
    $$
    $$
    285a=570,\qquad a=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{2}\)</div>
` },

"2025_mock06/common/q19": { answer: 16, html: String.raw`
  <div class="sol-box">운동 방향이 바뀌는 시각은 \(v(t)=0\)인 시각이다. 두 번째로 바뀌는 시각을 \(k\)로 나타낸 뒤, 그때의 위치를 정적분으로 놓는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 방향이 바뀌는 두 시각을 구한다</div>
    <p>\(0\le t\le3\)에서 \(-t^2+t+2=0\), 즉 \((t-2)(t+1)=0\)이고 \(t&gt;0\)이므로 첫 번째는 \(t=2\)이다.</p>
    <p>\(t&gt;3\)에서 \(k(t-3)-4=0\)이므로 두 번째는</p>
    $$
    t=3+\frac4k.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 그때의 위치를 정적분으로 쓴다</div>
    <p>원점에서 출발했으므로 위치는 속도의 정적분이다.</p>
    $$
    \int_0^{3}(-t^2+t+2)\,dt+\int_3^{3+\frac4k}\{k(t-3)-4\}\,dt=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 부분을 계산한다</div>
    $$
    \int_0^{3}(-t^2+t+2)\,dt=\left[-\frac13t^3+\frac12t^2+2t\right]_0^{3}=-9+\frac92+6=\frac32.
    $$
    <p>뒤쪽은 \(t=3\)에서 \(-4\), \(t=3+\dfrac4k\)에서 \(0\)인 직선 아래 부분이므로 밑변 \(\dfrac4k\), 높이 \(4\)인 삼각형의 넓이에 음의 부호를 붙인 값이다.</p>
    $$
    -\frac12\times\frac4k\times4=-\frac8k.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(k\)를 구한다</div>
    $$
    \frac32-\frac8k=1,\qquad \frac8k=\frac12,\qquad k=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{16}\)</div>
` },

"2025_mock06/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 같은 것이 있는 순열의 수를 쓴다</div>
    <p>\(1\)이 \(2\)개이므로</p>
    $$
    \frac{4!}{2!}=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock06/prob_stat/q24": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(A)\)를 구한다</div>
    $$
    \mathrm P(A)=1-\mathrm P(A^{C})=1-\frac56=\frac16.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 배반이므로 덧셈정리가 단순해진다</div>
    <p>두 사건이 서로 배반사건이므로 \(\mathrm P(A\cap B)=0\)이고</p>
    $$
    \mathrm P(A\cup B)=\mathrm P(A)+\mathrm P(B)=\frac34,\qquad
    \mathrm P(B)=\frac34-\frac16=\frac7{12}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 여사건의 확률을 구한다</div>
    $$
    \mathrm P(B^{C})=1-\frac7{12}=\frac5{12}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock06/prob_stat/q25": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항을 쓴다</div>
    $$
    {}_5\mathrm C_r(x^2)^{r}(-2)^{5-r}={}_5\mathrm C_r(-2)^{5-r}x^{2r}\qquad(r=0,1,\dots,5).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x^6\)이 되는 \(r\)를 찾는다</div>
    $$
    2r=6\ \Longrightarrow\ r=3,
    $$
    $$
    {}_5\mathrm C_3(-2)^{2}=10\times4=40.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

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

"2025_mock06/common/q15": { answer: 2, html: String.raw`
  <div class="sol-box">\(h_1\), \(h_2\)는 절댓값과 같은 식을 더하거나 뺀 꼴이라 <b>둘 다 항상 \(0\) 이상</b>이고, 어떤 구간에서는 아예 \(0\)이다. 그러면 조건 (나)는 "\(g\)의 부호"만 따지는 문제로 바뀐다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(h_1\), \(h_2\)를 구간별로 정리한다</div>
    $$
    h_1(t)=\begin{cases}2t(t-1) & (t\le0\ \text{또는}\ t\ge1)\\[2pt] 0 & (0&lt;t&lt;1)\end{cases}
    $$
    $$
    h_2(t)=\begin{cases}0 & (t\le-2\ \text{또는}\ t\ge1)\\[2pt] -2(t-1)(t+2) & (-2&lt;t&lt;1)\end{cases}
    $$
    <p>둘 다 항상 \(0\) 이상이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)를 \(g\)의 부호로 바꾼다</div>
    <p>\(\displaystyle\int_p^{x}h(t)\,dt\ge0\)이 모든 \(x\)에서 성립하려면 \(t&gt;p\)에서 \(h(t)\ge0\), \(t&lt;p\)에서 \(h(t)\le0\)이어야 한다.</p>
    <p>첫째 식(\(p=0\))에서 \(h_1&gt;0\)인 곳은 \(t&lt;0\)과 \(t&gt;1\)이므로 \(t&lt;0\)에서 \(g(t)\le0\), \(t&gt;1\)에서 \(g(t)\ge0\)이어야 한다. \(g(t)=2t-k\)는 \(t=\dfrac k2\)에서 부호가 바뀌므로</p>
    $$
    0\le\frac k2\le1,\qquad 0\le k\le2.
    $$
    <p>둘째 식(\(p=3\))에서 \(h_2&gt;0\)인 곳은 \(-2&lt;t&lt;1\)이고 이는 모두 \(3\)보다 작으므로 그 구간에서 \(g(t)\le0\)이어야 한다.</p>
    $$
    \frac k2\ge1,\qquad k\ge2.
    $$
    <p>따라서 \(k=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건 (가)로 \(f\)의 계수를 줄인다</div>
    <p>\(f(x)=x^3+ax^2+bx+c\)라 하자. \(g\)가 \(x=2\)에서 미분가능하므로</p>
    $$
    g'(2)=f'(2)=2\ \Longrightarrow\ 12+4a+b=2,\qquad b=-4a-10,
    $$
    $$
    g(2)=f(2)=2\ \Longrightarrow\ 8+4a+2b+c=2,\qquad c=4a+14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(g\)가 증가할 조건에서 \(a\)의 범위를 얻는다</div>
    <p>\(g\)가 증가하므로 \(x\ge2\)에서 \(f'(x)\ge0\)이어야 한다.</p>
    $$
    f'(x)=3x^2+2ax+b=3\left(x+\frac a3\right)^2+b-\frac{a^2}{3}.
    $$
    <p>ⅰ) \(-\dfrac a3&lt;2\), 즉 \(a&gt;-6\)이면 \(x\ge2\)에서 \(f'\)가 증가하고 \(f'(2)=2&gt;0\)이므로 성립한다.</p>
    <p>ⅱ) \(a\le-6\)이면 꼭짓점이 \(x\ge2\)에 있으므로 최솟값이 \(0\) 이상이어야 한다.</p>
    $$
    b-\frac{a^2}{3}\ge0\ \Longleftrightarrow\ a^2-3b=a^2+12a+30\le0\ \Longleftrightarrow\ (a+6)^2\le6,
    $$
    <p>즉 \(-6-\sqrt6\le a\le-6\)이다. 두 경우를 합치면 \(a\ge-6-\sqrt6\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(g(3)\)의 최솟값을 구한다</div>
    $$
    g(3)=f(3)=27+9a-3(4a+10)+4a+14=a+11\ge5-\sqrt6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock06/prob_stat/q29": { answer: 6, html: String.raw`
  <div class="sol-box">\(p=q\)를 조합으로 세우면 \(x\)에 대한 일차방정식으로 정리되어 흰 공의 개수가 바로 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 확률을 조합으로 쓴다</div>
    <p>흰 공의 개수를 \(x\)라 하면 검은 공은 \(40-x\)개이므로</p>
    $$
    p=\frac{{}_x\mathrm C_2}{{}_{40}\mathrm C_2},\qquad
    q=\frac{{}_x\mathrm C_1\times{}_{40-x}\mathrm C_1}{{}_{40}\mathrm C_2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(p=q\)에서 \(x\)를 구한다</div>
    $$
    \frac{x(x-1)}{2}=x(40-x).
    $$
    <p>\(p&gt;0\)이므로 \(x\ne0\)이고, 양변을 \(x\)로 나누면</p>
    $$
    x-1=80-2x,\qquad 3x=81,\qquad x=27.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(r\)를 구한다</div>
    <p>검은 공은 \(40-27=13\)개이므로</p>
    $$
    r=\frac{{}_{13}\mathrm C_2}{{}_{40}\mathrm C_2}=\frac{13\times12}{40\times39}=\frac1{10},
    $$
    $$
    60r=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{6}\)</div>
` },

"2025_mock06/calculus/q28": { answer: 4, html: String.raw`
  <div class="sol-box">역함수의 미분법은 \(g'(f(x))f'(x)=1\)이다. 두 지점이 각각 어느 조각에 놓이는지만 가리면 \(f'\) 값을 바로 대입할 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 조각과 이어붙인 값을 확인한다</div>
    <p>\(h_1(x)=(x-a-2)^2e^{x}\), \(h_2(x)=e^{2a}(x-a)+4e^{a}\)라 하면</p>
    $$
    h_1'(x)=(x-a)(x-a-2)e^{x},\qquad h_2'(x)=e^{2a},
    $$
    <p>이고 \(h_1(a)=h_2(a)=4e^{a}\)이므로 \(f(a)=4e^{a}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 불연속점에서 \(e^{a}\)를 구한다</div>
    <p>\(g(t)\)는 \(f(x)=t\)를 만족시키는 \(x\)의 최솟값이므로, 왼쪽 조각의 값이 끊기는 \(t=4e^{a}\)에서 불연속이다.</p>
    $$
    4e^{a}=12,\qquad e^{a}=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 지점이 어느 조각에 놓이는지 가린다</div>
    <p>\(f(a+2)=h_1(a+2)=0&lt;4e^{a}\)이므로 이 값은 \(h_2\) 쪽이고, \(f(a+6)=h_1(a+6)=16e^{a+6}&gt;4e^{a}\)이므로 \(h_1\) 쪽이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 역함수의 미분법을 쓴다</div>
    <p>\(h_2'\)는 상수 \(e^{2a}\)이므로</p>
    $$
    g'(f(a+2))=\frac{1}{h_2'}=\frac{1}{e^{2a}}.
    $$
    <p>또 \(g(f(a+6))=a+6\)이므로</p>
    $$
    g'(f(a+6))=\frac{1}{h_1'(a+6)}=\frac{1}{6\times4\times e^{a+6}}=\frac{1}{24e^{a+6}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 비를 계산한다</div>
    $$
    \frac{g'(f(a+2))}{g'(f(a+6))}=\frac{24e^{a+6}}{e^{2a}}=\frac{24e^{6}}{e^{a}}=\frac{24e^{6}}{3}=8e^{6}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_mock09/common/q01": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(2\)로 통일한다</div>
    $$
    32^{\frac14}\times4^{-\frac18}=\left(2^{5}\right)^{\frac14}\times\left(2^{2}\right)^{-\frac18}
    =2^{\frac54}\times2^{-\frac14}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 더한다</div>
    $$
    2^{\frac54-\frac14}=2^{1}=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock09/common/q02": { answer: 5, html: String.raw`
  <div class="sol-box">이 극한은 미분계수의 정의 그대로이므로 \(f'(1)\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한을 미분계수로 바꾼다</div>
    $$
    \lim_{h\to0}\frac{f(1+h)-f(1)}{h}=f'(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 도함수를 구해 대입한다</div>
    <p>\(f(x)=x^3+3x^2-5\)이므로 \(f'(x)=3x^2+6x\)이고</p>
    $$
    f'(1)=3\times1^2+6\times1=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock09/common/q03": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫째항과 공비로 두 조건을 쓴다</div>
    <p>첫째항을 \(a\), 공비를 \(r\)라 하면</p>
    $$
    a_2a_3=ar\times ar^2=a^2r^3=2,\qquad a_4=ar^3=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 식을 나누어 \(a\)를 구한다</div>
    <p>앞 식을 뒤 식으로 나누면 \(r^3\)이 약분되어</p>
    $$
    a=\frac12.
    $$
    <p>이를 \(ar^3=4\)에 대입하면 \(r^3=8\)이고, \(r\)는 실수이므로 \(r=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_6\)을 구한다</div>
    $$
    a_6=ar^{5}=\frac12\times2^{5}=2^{4}=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_mock09/common/q04": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그래프에서 두 극한을 읽는다</div>
    <p>주어진 그래프에서 \(x=0\)의 왼쪽에서 다가가면 함숫값이 \(-2\)에, \(x=1\)의 오른쪽에서 다가가면 \(1\)에 가까워진다.</p>
    $$
    \lim_{x\to0-}f(x)=-2,\qquad \lim_{x\to1+}f(x)=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 더한다</div>
    $$
    \lim_{x\to0-}f(x)+\lim_{x\to1+}f(x)=-2+1=-1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock09/common/q05": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 쓴다</div>
    <p>\(f(x)=(x+1)(x^2+x-5)\)이므로</p>
    $$
    f'(x)=(x^2+x-5)+(x+1)(2x+1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=2\)를 대입한다</div>
    $$
    f'(2)=(4+2-5)+(2+1)(4+1)=1+15=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock09/common/q06": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\cos\theta\)를 구한다</div>
    <p>\(\cos(\pi+\theta)=-\cos\theta\)이므로</p>
    $$
    -\cos\theta=\frac{2\sqrt5}{5},\qquad \cos\theta=-\frac{2\sqrt5}{5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사분면을 보고 \(\sin\theta\)의 부호를 정한다</div>
    <p>\(\dfrac\pi2&lt;\theta&lt;\pi\)에서 \(\sin\theta&gt;0\)이므로</p>
    $$
    \sin\theta=\sqrt{1-\cos^2\theta}=\sqrt{1-\frac45}=\frac{\sqrt5}{5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 더한다</div>
    $$
    \sin\theta+\cos\theta=\frac{\sqrt5}{5}-\frac{2\sqrt5}{5}=-\frac{\sqrt5}{5}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock09/common/q07": { answer: 3, html: String.raw`
  <div class="sol-box">두 조각이 만나는 \(x=4\)에서만 연속을 따지면 된다. 좌극한과 함숫값이 같으면 실수 전체에서 연속이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x=4\)에서 좌우를 맞춘다</div>
    $$
    \lim_{x\to4-}f(x)=(4-a)^2,\qquad \lim_{x\to4+}f(x)=f(4)=2\times4-4=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a\)를 구한다</div>
    $$
    (4-a)^2=4,\qquad a^2-8a+12=0,\qquad (a-2)(a-6)=0.
    $$
    <p>따라서 \(a=2\) 또는 \(a=6\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 곱을 구한다</div>
    $$
    2\times6=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock09/common/q08": { answer: 1, html: String.raw`
  <div class="sol-box">밑변환공식으로 \(\log_a8=\dfrac{3}{\log_2a}\)로 바꾸면, \(\log_2a\)에 대한 이차방정식이 된다. 곱은 따로 계산할 필요 없이 바로 \(3\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\log_2a\)만 남긴다</div>
    $$
    \log_a8=3\log_a2=\frac{3}{\log_2a}.
    $$
    <p>\(\log_2a=X\)라 하면 \(a&gt;2\)에서 \(X&gt;1\)이고, 합이 \(4\)라는 조건은</p>
    $$
    X+\frac3X=4,\qquad X^2-4X+3=0,\qquad (X-1)(X-3)=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a\)를 구한다</div>
    <p>\(X&gt;1\)이므로 \(X=3\), 즉 \(\log_2a=3\)에서 \(a=8\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 곱 \(k\)를 구한다</div>
    <p>두 수의 곱은 \(X\)와 \(\dfrac3X\)의 곱이므로 \(X\)에 상관없이</p>
    $$
    k=\log_2a\times\frac{3}{\log_2a}=3,\qquad a+k=8+3=11.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_mock09/common/q09": { answer: 5, html: String.raw`
  <div class="sol-box">\(\displaystyle\int_0^1f(x)\,dx\)를 실제로 계산하기 전에, 두 정적분을 한 적분으로 묶으면 \(f\)가 대부분 지워진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 정적분을 항별로 나눈다</div>
    $$
    5\int_0^1f(x)\,dx-\int_0^1\{5x+f(x)\}\,dx
    =4\int_0^1f(x)\,dx-\int_0^1 5x\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 하나의 적분으로 합친다</div>
    <p>\(f(x)=x^2+x\)이므로</p>
    $$
    \int_0^1\left(4x^2+4x-5x\right)dx=\int_0^1(4x^2-x)\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 계산한다</div>
    $$
    \left[\frac43x^3-\frac12x^2\right]_0^1=\frac43-\frac12=\frac56.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock09/common/q10": { answer: 1, html: String.raw`
  <div class="sol-box">외접원의 넓이가 반지름을 주고, 사인법칙이 \(\overline{\mathrm{AB}}\)와 \(\sin C\)를 잇는다. 직각삼각형 \(\mathrm{AHC}\)에서 \(\sin C\)를 미지수로 쓰는 것이 연결 고리다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미지수를 잡고 \(\sin C\)를 나타낸다</div>
    <p>\(\overline{\mathrm{AC}}=x\)라 하면 \(\overline{\mathrm{AB}}:\overline{\mathrm{AC}}=\sqrt2:1\)에서 \(\overline{\mathrm{AB}}=\sqrt2\,x\)이다. 직각삼각형 \(\mathrm{AHC}\)에서 \(\overline{\mathrm{AH}}=2\)이므로</p>
    $$
    \sin C=\frac{2}{x}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 외접원의 반지름을 구한다</div>
    <p>외접원의 넓이가 \(50\pi\)이므로 \(\pi R^2=50\pi\)에서 \(R=5\sqrt2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 사인법칙으로 \(x\)를 구한다</div>
    $$
    \frac{\overline{\mathrm{AB}}}{\sin C}=2R\ \Longrightarrow\ \sqrt2\,x=2\times5\sqrt2\times\frac2x,
    $$
    $$
    x^2=20,\qquad x=2\sqrt5.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 직각삼각형 \(\mathrm{ABH}\)에서 \(\overline{\mathrm{BH}}\)를 구한다</div>
    <p>\(\overline{\mathrm{AB}}=\sqrt2\,x=2\sqrt{10}\)이므로</p>
    $$
    \overline{\mathrm{BH}}=\sqrt{\overline{\mathrm{AB}}^{\,2}-\overline{\mathrm{AH}}^{\,2}}=\sqrt{40-4}=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_mock09/common/q11": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 위치가 같아지는 시각을 구한다</div>
    $$
    t^2+t-6=-t^3+7t^2,\qquad t^3-6t^2+t-6=0,
    $$
    $$
    t^2(t-6)+(t-6)=0,\qquad (t-6)(t^2+1)=0.
    $$
    <p>\(t\ge0\)이므로 \(t=6\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 번 미분하여 가속도를 구한다</div>
    $$
    v_1=2t+1,\qquad a_1=2,
    $$
    $$
    v_2=-3t^2+14t,\qquad a_2=-6t+14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=6\)을 대입한다</div>
    $$
    p=2,\qquad q=-6\times6+14=-22,
    $$
    $$
    p-q=2-(-22)=24.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_mock09/common/q12": { answer: 2, html: String.raw`
  <div class="sol-box">부호가 번갈아 붙은 합은 항을 두 개씩 묶으면 공차만 남는다. 홀수째 항과 짝수째 항을 나누어 보면 \(b_n\)이 곧바로 일반항으로 정리된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(b_{2n-1}\), \(b_{2n}\)을 각각 정리한다</div>
    <p>공차를 \(d\)라 하고 \(b_n=\displaystyle\sum_{k=1}^{n}(-1)^{k+1}a_k\)에서 뒤에서부터 두 항씩 묶으면</p>
    $$
    b_{2n-1}=a_1+(a_3-a_2)+(a_5-a_4)+\cdots+(a_{2n-1}-a_{2n-2})=a_1+(n-1)d=a_n,
    $$
    $$
    b_{2n}=(a_1-a_2)+(a_3-a_4)+\cdots+(a_{2n-1}-a_{2n})=n\times(-d)=-nd.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 조건에서 \(d\)와 \(a_1\)을 구한다</div>
    <p>\(b_2=-d=-2\)에서 \(d=2\)이다. 또 \(b_3=a_2\), \(b_7=a_4\)이므로 \(b_3+b_7=0\)은</p>
    $$
    a_2+a_4=2a_3=0,\qquad a_3=0.
    $$
    <p>\(a_3=a_1+2\times2=0\)에서 \(a_1=-4\)이고 \(a_n=2n-6\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\displaystyle\sum_{n=1}^{9}b_n\)을 구한다</div>
    <p>\(b_{2n-1}=a_n=2n-6\), \(b_{2n}=-2n\)이므로</p>
    $$
    \sum_{n=1}^{9}b_n=\sum_{n=1}^{4}\{(2n-6)+(-2n)\}+b_9=(-6)\times4+a_5=-24+4=-20.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock09/common/q13": { answer: 4, html: String.raw`
  <div class="sol-box">\(f(-x)=f(x)\)이므로 그래프는 \(y\)축에 대하여 대칭이다. 그러면 \(A\)는 \(y\)축이 이등분하므로 \(A=2B\)는 곧 \(\dfrac A2=B\), 즉 \(\displaystyle\int_0^{k}f(x)\,dx=0\)이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 대칭성을 확인한다</div>
    <p>\(x&lt;0\)일 때 \(f(x)=-x^2-2x+6\), \(x\ge0\)일 때 \(f(x)=-x^2+2x+6\)이므로 \(f(-x)=f(x)\)이다. 따라서 \(y=f(x)\)의 그래프는 \(y\)축에 대하여 대칭이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 \(A=2B\)를 하나의 정적분으로 바꾼다</div>
    <p>\(y\)축이 \(A\)를 이등분하므로 \(\dfrac A2\)는 \(x=0\)부터 곡선이 \(x\)축과 만나는 곳까지 \(x\)축 위쪽의 넓이이고, \(B\)는 거기서 \(x=k\)까지 \(x\)축 아래쪽의 넓이이다. 부호를 붙여 더하면 서로 지워지므로</p>
    $$
    \int_0^{k}f(x)\,dx=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(k\)를 구한다</div>
    <p>\(k&gt;4&gt;0\)이므로 \(f(x)=-x^2+2x+6\)을 적분하면</p>
    $$
    \left[-\frac13x^3+x^2+6x\right]_0^{k}=-\frac{k}{3}\left(k^2-3k-18\right)=-\frac{k}{3}(k+3)(k-6)=0.
    $$
    <p>\(k&gt;4\)이므로 \(k=6\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_mock09/common/q14": { answer: 5, html: String.raw`
  <div class="sol-box">조건 (가)의 기울기 \(3\)을 쓰면 \((\text{가로})^2+(\text{세로})^2\)이 가로의 \(10\)배가 되어, 조건 (나)가 가로 길이를 곧바로 준다. 마지막에 두 곡선이 직선 \(y=x\)에 대하여 대칭이라는 점이 \(x_n\)을 \(\mathrm B_n\)의 \(y\)좌표로 바꾼다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 점을 문자로 놓는다</div>
    <p>\(\mathrm A_n(a_n,\ 2^{a_n})\), \(\mathrm B_n(b_n,\ 2^{b_n})\ (a_n&lt;b_n)\)이라 하면 조건 (가)에서 두 점을 지나는 직선의 기울기가 \(3\)이므로</p>
    $$
    \frac{2^{b_n}-2^{a_n}}{b_n-a_n}=3,\qquad 2^{b_n}-2^{a_n}=3(b_n-a_n).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)에 대입해 가로 길이를 얻는다</div>
    $$
    (b_n-a_n)^2+\left(2^{b_n}-2^{a_n}\right)^2=10n^2
    $$
    <p>에 위 식을 넣으면 \((b_n-a_n)^2(1+9)=10n^2\), 즉 \((b_n-a_n)^2=n^2\)이다. \(a_n&lt;b_n\)이므로</p>
    $$
    b_n-a_n=n,\qquad a_n=b_n-n.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(2^{b_n}\)을 \(n\)으로 나타낸다</div>
    $$
    2^{b_n}-2^{b_n-n}=3n,\qquad 2^{b_n}\left(1-\frac{1}{2^{n}}\right)=3n,
    $$
    $$
    2^{b_n}=3n\times\frac{2^{n}}{2^{n}-1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 대칭성으로 \(x_n\)을 읽는다</div>
    <p>두 곡선 \(y=2^{x}\)과 \(y=\log_2x\)는 직선 \(y=x\)에 대하여 대칭이므로, \(\mathrm B_n\)을 \(y=x\)에 대하여 대칭이동한 점의 \(x\)좌표가 \(x_n\)이다. 즉 \(x_n\)은 \(\mathrm B_n\)의 \(y\)좌표와 같다.</p>
    $$
    x_n=2^{b_n}=3n\times\frac{2^{n}}{2^{n}-1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 세 항을 더한다</div>
    $$
    x_1=3\times\frac21=6,\qquad x_2=6\times\frac43=8,\qquad x_3=9\times\frac87=\frac{72}{7},
    $$
    $$
    x_1+x_2+x_3=6+8+\frac{72}{7}=\frac{170}{7}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock09/common/q15": { answer: 1, html: String.raw`
  <div class="sol-box">조건 (가)를 미분하면 \(xf(x)+xg(x)\)가 나오고, 조건 (나)를 넣으면 좌변이 \(\{xg(x)\}'\)로 묶인다. 그대로 적분하면 \(g\)가 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가)를 미분한다</div>
    $$
    xf(x)+xg(x)=12x^3+24x^2-6x,\qquad f(x)+g(x)=12x^2+24x-6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (나)를 넣어 하나의 도함수로 묶는다</div>
    <p>\(f(x)=xg'(x)\)이므로</p>
    $$
    xg'(x)+g(x)=12x^2+24x-6,\qquad \{xg(x)\}'=12x^2+24x-6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 적분하여 \(g\)를 구한다</div>
    $$
    xg(x)=\int(12x^2+24x-6)\,dx=4x^3+12x^2-6x+C.
    $$
    <p>\(g\)가 다항함수이므로 우변이 \(x\)로 나누어떨어져야 하고, 따라서 \(C=0\)이다.</p>
    $$
    g(x)=4x^2+12x-6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 정적분을 계산한다</div>
    $$
    \int_0^{3}g(x)\,dx=\left[\frac43x^3+6x^2-6x\right]_0^{3}=36+54-18=72.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_mock09/common/q16": { answer: 7, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 진수 조건을 먼저 적는다</div>
    $$
    x+2&gt;0,\qquad x-4&gt;0\ \Longrightarrow\ x&gt;4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 밑을 \(3\)으로 통일한다</div>
    <p>\(\log_{\frac13}(x-4)=-\log_3(x-4)\)이므로 주어진 식은</p>
    $$
    \log_3(x+2)+\log_3(x-4)=3,\qquad \log_3(x+2)(x-4)=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 풀어서 진수 조건에 맞는 해를 고른다</div>
    $$
    (x+2)(x-4)=3^3=27,\qquad x^2-2x-35=0,\qquad (x+5)(x-7)=0.
    $$
    <p>\(x&gt;4\)이므로 \(x=7\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{7}\)</div>
` },

"2025_mock09/common/q17": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int(6x^2+2x+1)\,dx=2x^3+x^2+x+C.
    $$
    <p>\(f(0)=1\)이므로 \(C=1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    f(1)=2+1+1+1=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{5}\)</div>
` },

"2025_mock09/common/q18": { answer: 29, html: String.raw`
  <div class="sol-box">두 합을 풀어 쓰면 계수가 정확히 \(1\)씩 어긋나 있다. 빼면 \(a_1+a_2+\cdots+a_{10}\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 합을 풀어 쓴다</div>
    $$
    \sum_{k=1}^{10}ka_k=a_1+2a_2+3a_3+\cdots+10a_{10}=36,
    $$
    $$
    \sum_{k=1}^{9}ka_{k+1}=a_2+2a_3+3a_4+\cdots+9a_{10}=7.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 뺀다</div>
    <p>같은 항끼리 계수를 빼면 모두 \(1\)이 되므로</p>
    $$
    \sum_{k=1}^{10}a_k=36-7=29.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{29}\)</div>
` },

"2025_mock09/common/q19": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극소 조건에서 \(a\)를 구한다</div>
    <p>\(f'(x)=3x^2+2ax-9\)이고 \(x=1\)에서 극소이므로</p>
    $$
    f'(1)=3+2a-9=0,\qquad a=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극대가 되는 \(x\)를 찾는다</div>
    $$
    f'(x)=3x^2+6x-9=3(x+3)(x-1)=0,\qquad x=-3\ \text{또는}\ x=1.
    $$
    <p>\(f'\)의 부호가 \(x=-3\)에서 양에서 음으로 바뀌므로 \(x=-3\)에서 극대이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 극댓값 조건에서 \(b\)를 구한다</div>
    $$
    f(-3)=-27+27+27+b=27+b=28,\qquad b=1,
    $$
    $$
    a+b=3+1=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{4}\)</div>
` },

"2025_mock09/common/q20": { answer: 15, html: String.raw`
  <div class="sol-box">\(y=f(t)\)는 가로선이므로, 실근의 개수는 곧 그래프와 가로선의 교점의 개수이다. 교점이 \(3\)개가 되는 높이는 그래프의 최솟값 \(-1\)과 \(x\)축 두 곳뿐이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그래프의 모양을 파악한다</div>
    <p>\(0\le x&lt;\pi\)에서 \(y=\sin x-1\)은 최댓값 \(0\)(\(x=\dfrac\pi2\)), 양 끝에서 \(-1\)에 가깝다. \(\pi\le x\le2\pi\)에서 \(y=-\sqrt2\sin x-1\)은 최댓값 \(\sqrt2-1\)(\(x=\dfrac32\pi\)), 양 끝에서 \(-1\)이다. 두 봉우리의 높이가 다른 산 모양이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 교점이 \(3\)개인 높이를 찾는다</div>
    <p>가로선을 위에서 아래로 내리면 교점의 개수는 \(1\to2\to\cdots\)로 바뀌는데, 정확히 \(3\)개가 되는 높이는 두 곳뿐이다. 앞쪽 봉우리의 꼭대기인 \(y=0\)과, 최솟값인 \(y=-1\)이다. 즉</p>
    $$
    f(t)=-1\quad\text{또는}\quad f(t)=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 각 경우의 \(t\)를 구한다</div>
    <p>ⅰ) \(f(t)=-1\)일 때 \(t=0,\ \pi,\ 2\pi\).</p>
    <p>ⅱ) \(f(t)=0\)일 때, \(0\le t&lt;\pi\)에서는 \(\sin t=1\)이므로 \(t=\dfrac\pi2\)이고, \(\pi\le t\le2\pi\)에서는</p>
    $$
    -\sqrt2\sin t-1=0,\qquad \sin t=-\frac{\sqrt2}{2},\qquad t=\frac54\pi\ \text{또는}\ t=\frac74\pi.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 합을 구한다</div>
    $$
    0+\pi+2\pi+\frac\pi2+\frac54\pi+\frac74\pi=\frac{13}{2}\pi.
    $$
    <p>따라서 \(p=2\), \(q=13\)이므로 \(p+q=15\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{15}\)</div>
` },

"2025_mock09/prob_stat/q23": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 같은 것이 있는 순열의 수를 쓴다</div>
    <p>\(2\)가 \(2\)개, \(3\)이 \(2\)개이므로</p>
    $$
    \frac{5!}{2!\,2!}=\frac{120}{4}=30.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock09/prob_stat/q24": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 독립이므로 곱으로 분해한다</div>
    $$
    \mathrm P(A\cap B)=\mathrm P(A)\mathrm P(B)=\frac23\mathrm P(B)=\frac16,
    $$
    $$
    \mathrm P(B)=\frac16\times\frac32=\frac14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 덧셈정리를 쓴다</div>
    $$
    \mathrm P(A\cup B)=\frac23+\frac14-\frac16=\frac{8+3-2}{12}=\frac34.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_mock09/prob_stat/q25": { answer: 5, html: String.raw`
  <div class="sol-box">\(7\) 이상의 홀수는 \(7\), \(9\), \(11\) 세 개뿐이다. "적어도 하나"이므로 여사건이 훨씬 짧다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 구한다</div>
    $$
    {}_{11}\mathrm C_2=55.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건을 센다</div>
    <p>여사건은 \(7\), \(9\), \(11\)을 모두 피하는 경우, 즉 나머지 \(8\)개에서 \(2\)개를 고르는 경우이므로</p>
    $$
    {}_8\mathrm C_2=28.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 확률을 구한다</div>
    $$
    1-\frac{28}{55}=\frac{27}{55}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock09/prob_stat/q26": { answer: 3, html: String.raw`
  <div class="sol-box">두 표본평균을 각각 표준화하면 조건은 \(\mathrm P(Z\le\square)+\mathrm P(Z\ge2)=1\) 꼴이 된다. 여사건을 쓰면 \(\square=2\)가 바로 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 표본평균의 분포를 구한다</div>
    $$
    \overline X\sim\mathrm N\left(m,\ \frac{6^2}{9}\right)=\mathrm N(m,\ 2^2),\qquad
    \overline Y\sim\mathrm N\left(6,\ \frac{2^2}{4}\right)=\mathrm N(6,\ 1^2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 표준화한다</div>
    $$
    \mathrm P(\overline X\le12)=\mathrm P\left(Z\le\frac{12-m}{2}\right),\qquad
    \mathrm P(\overline Y\ge8)=\mathrm P\left(Z\ge\frac{8-6}{1}\right)=\mathrm P(Z\ge2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 여사건으로 비교한다</div>
    <p>합이 \(1\)이므로</p>
    $$
    \mathrm P\left(Z\le\frac{12-m}{2}\right)=1-\mathrm P(Z\ge2)=\mathrm P(Z\le2),
    $$
    $$
    \frac{12-m}{2}=2,\qquad m=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock09/prob_stat/q27": { answer: 4, html: String.raw`
  <div class="sol-box">\(\mathrm P(X=k)=\mathrm P(X=k+2)\)를 \(k=0,1,2\)에 대해 적용하면 확률값이 두 종류로 줄어든다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미지수를 두 개로 줄인다</div>
    <p>\(\mathrm P(X=0)=\mathrm P(X=2)=\mathrm P(X=4)=a\), \(\mathrm P(X=1)=\mathrm P(X=3)=b\)라 하면 확률의 총합이 \(1\)이므로</p>
    $$
    3a+2b=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm E(X^2)\)을 쓴다</div>
    $$
    \mathrm E(X^2)=0^2a+1^2b+2^2a+3^2b+4^2a=20a+10b=\frac{35}{6}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 연립하여 \(a\)를 구한다</div>
    <p>\(3a+2b=1\)의 양변에 \(5\)를 곱하면 \(15a+10b=5\)이므로, 위 식에서 이를 빼면</p>
    $$
    5a=\frac{35}{6}-5=\frac56,\qquad a=\frac16.
    $$
    <p>따라서 \(\mathrm P(X=0)=\dfrac16\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_mock09/prob_stat/q28": { answer: 4, html: String.raw`
  <div class="sol-box">\(X=\{1,2,3,4\}\)에서 \(a\)가 \(b\)의 약수인 쌍은 \((1,2)\), \((1,3)\), \((1,4)\), \((2,4)\) 네 개뿐이다. 즉 사건 \(A\)는 \(f(1)\)이 나머지 셋의 약수이고 동시에 \(f(2)\mid f(4)\)라는 뜻이므로, \(f(1)\)의 값으로 경우를 나누면 끝난다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수와 조건을 정리한다</div>
    <p>함수 \(f\)의 개수는 \({}_4\Pi_4=4^4\)이다. 사건 \(A\)는</p>
    $$
    f(1)\ \text{이}\ f(2),\ f(3),\ f(4)\ \text{의 약수},\qquad f(2)\ \text{가}\ f(4)\ \text{의 약수}
    $$
    <p>가 동시에 성립하는 사건이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(1)=1\)인 경우</div>
    <p>\(1\)은 모든 수의 약수이므로 \(f(3)\)은 \(4\)가지 모두 가능하고, \(f(2)\)가 \(f(4)\)의 약수인 쌍은 \(f(2)=1\)일 때 \(4\)가지, \(2\)일 때 \(2\)가지, \(3\)일 때 \(1\)가지, \(4\)일 때 \(1\)가지로 \(8\)가지이다.</p>
    $$
    4\times8=32.
    $$
    <p>이 중 \(f(4)\)가 짝수인 것은 \(f(2)=1\)일 때 \(2\)가지, \(2\)일 때 \(2\)가지, \(3\)일 때 \(0\)가지, \(4\)일 때 \(1\)가지로 \(5\)가지이므로 \(4\times5=20\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(1)=2\)인 경우</div>
    <p>\(f(2)\), \(f(3)\), \(f(4)\)는 모두 \(2\)의 배수이므로 \(2\) 또는 \(4\)이다. \(f(3)\)이 \(2\)가지, \((f(2),f(4))\)는 \((2,2)\), \((2,4)\), \((4,4)\)의 \(3\)가지이므로</p>
    $$
    2\times3=6.
    $$
    <p>이때 \(f(4)\)는 항상 짝수이므로 \(6\)가지가 모두 \(A\cap B\)에 속한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(f(1)=3\), \(f(1)=4\)인 경우</div>
    <p>\(X\) 안에서 \(3\)의 배수는 \(3\)뿐, \(4\)의 배수는 \(4\)뿐이므로 각각 \(f(2)=f(3)=f(4)=3\), \(f(2)=f(3)=f(4)=4\)인 \(1\)가지씩이다. \(f(4)\)가 짝수인 것은 뒤쪽 \(1\)가지뿐이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 조건부확률을 구한다</div>
    $$
    \mathrm P(A)=\frac{32+6+1+1}{4^4}=\frac{40}{4^4},\qquad
    \mathrm P(A\cap B)=\frac{20+6+0+1}{4^4}=\frac{27}{4^4},
    $$
    $$
    \mathrm P(B\,|\,A)=\frac{27}{40}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_mock09/calculus/q23": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분모를 각의 크기에 맞춘다</div>
    $$
    \lim_{x\to0}\frac{\sin5x}{x}=\lim_{x\to0}\left(\frac{\sin5x}{5x}\times5\right).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    $$
    1\times5=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_mock09/calculus/q24": { answer: 4, html: String.raw`
  <div class="sol-box">"점 \((t,f(t))\)에서의 접선의 기울기"가 곧 \(f'(t)\)이다. 문자만 \(x\)로 바꾸면 도함수를 얻은 셈이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 도함수를 읽는다</div>
    $$
    f'(x)=\frac1x+4e^{2x}\qquad(x&gt;0).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분하여 \(f\)를 구한다</div>
    $$
    f(x)=\int\left(\frac1x+4e^{2x}\right)dx=\ln x+2e^{2x}+C.
    $$
    <p>\(f(1)=2e^2+1\)이고 \(\ln1=0\)이므로 \(2e^2+C=2e^2+1\)에서 \(C=1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(e)\)를 구한다</div>
    $$
    f(e)=\ln e+2e^{2e}+1=2e^{2e}+2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_mock09/calculus/q25": { answer: 4, html: String.raw`
  <div class="sol-box">분모가 \(2^{n}\) 규모이므로 분자·분모를 \(2^{n}\)으로 나눈다. 그러면 \(0\)이 아닌 극한값이 존재한다는 사실만으로 공비가 결정된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(2^{n}\)으로 나눈다</div>
    <p>공비를 \(r\)라 하면 \(a_n=a_1r^{\,n-1}\)이고</p>
    $$
    \frac{4^{n}a_n-1}{3\times2^{\,n+1}}
    =\frac{2^{n}a_n-\dfrac1{2^{n}}}{6}
    =\frac{2a_1(2r)^{\,n-1}-\dfrac1{2^{n}}}{6}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 공비를 결정한다</div>
    <p>\(\dfrac1{2^{n}}\to0\)인데 전체 극한값이 \(1\)로 \(0\)이 아니므로, \((2r)^{\,n-1}\)이 \(0\)이 아닌 값으로 수렴해야 한다. 따라서</p>
    $$
    2r=1,\qquad r=\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 첫째항을 구한다</div>
    $$
    \frac{2a_1-0}{6}=1,\qquad a_1=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답을 구한다</div>
    $$
    a_2=3\times\frac12=\frac32,\qquad a_1+a_2=3+\frac32=\frac92.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_mock09/calculus/q26": { answer: 3, html: String.raw`
  <div class="sol-box">단면이 반원이므로 밑면의 세로 길이가 지름이다. 넓이를 만들면 근호가 벗겨져 \(x^3\sin x^2\) 꼴이 되고, \(x^2=u\)로 바꾸면 \(\int u\sin u\,du\)라는 익숙한 부분적분이 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 단면의 넓이를 구한다</div>
    <p>\(x=t\)에서 밑면의 세로 길이가 \(2t\sqrt{t\sin t^2}\)이고 이것이 반원의 지름이므로, 반지름은 \(t\sqrt{t\sin t^2}\)이다.</p>
    $$
    S(t)=\frac12\pi\left(t\sqrt{t\sin t^2}\right)^2=\frac\pi2\,t^3\sin t^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(t^2=u\)로 바꾼다</div>
    <p>\(2t\,dt=du\)이고 \(t=\sqrt{\dfrac\pi6}\)일 때 \(u=\dfrac\pi6\), \(t=\sqrt{\dfrac\pi2}\)일 때 \(u=\dfrac\pi2\)이므로</p>
    $$
    \int_{\sqrt{\pi/6}}^{\sqrt{\pi/2}}\frac\pi2t^3\sin t^2\,dt
    =\frac\pi4\int_{\frac\pi6}^{\frac\pi2}u\sin u\,du.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부분적분한다</div>
    $$
    \int_{\frac\pi6}^{\frac\pi2}u\sin u\,du
    =\Big[-u\cos u\Big]_{\frac\pi6}^{\frac\pi2}+\int_{\frac\pi6}^{\frac\pi2}\cos u\,du
    =\frac\pi6\times\frac{\sqrt3}{2}+\Big[\sin u\Big]_{\frac\pi6}^{\frac\pi2}.
    $$
    $$
    =\frac{\sqrt3}{12}\pi+1-\frac12=\frac{\sqrt3}{12}\pi+\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 부피를 구한다</div>
    $$
    \frac\pi4\left(\frac{\sqrt3}{12}\pi+\frac12\right)=\frac{\sqrt3\,\pi^2+6\pi}{48}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock09/calculus/q27": { answer: 2, html: String.raw`
  <div class="sol-box">양변을 미분하면 \(f'(\pi)\)와 \(f'(0)\)이 섞인 식이 나온다. \(x=0\)을 넣으면 \(f'(0)\)만 남는 식이 따로 생기므로 두 식을 이어 붙이면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 양변을 미분한다</div>
    <p>합성함수의 미분법으로 \(\left\{f\left(\tfrac12\sin x\right)\right\}'=f'\left(\tfrac12\sin x\right)\times\tfrac12\cos x\)이므로</p>
    $$
    f'(x)+f'\left(\frac12\sin x\right)\times\frac12\cos x=\cos x.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=0\)을 넣어 \(f'(0)\)을 구한다</div>
    <p>\(\sin0=0\), \(\cos0=1\)이므로</p>
    $$
    f'(0)+f'(0)\times\frac12=1,\qquad \frac32f'(0)=1,\qquad f'(0)=\frac23.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(x=\pi\)를 넣는다</div>
    <p>\(\sin\pi=0\), \(\cos\pi=-1\)이므로</p>
    $$
    f'(\pi)+f'(0)\times\left(-\frac12\right)=-1,\qquad f'(\pi)=-1+\frac12\times\frac23=-\frac23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_mock09/calculus/q28": { answer: 3, html: String.raw`
  <div class="sol-box">역함수의 정적분은 넓이로 보면 직사각형에서 원래 넓이를 뺀 것이다. \(g(0)=0\), \(g(1)=1\)이라 이 관계가 아주 단순해지고, 주어진 조건과 합치면 \(\displaystyle\int_0^1f'(2x)\sin\pi x\,dx\)의 값이 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 역함수의 정적분 관계를 세운다</div>
    <p>\(g(0)=f'(0)\sin0+0=0\), \(g(1)=f'(2)\sin\pi+1=1\)이므로</p>
    $$
    \int_0^1g(x)\,dx+\int_{g(0)}^{g(1)}g^{-1}(x)\,dx=1\times1-0\times0=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 주어진 조건을 대입한다</div>
    <p>\(I=\displaystyle\int_0^1f'(2x)\sin\pi x\,dx\)라 하면 \(\displaystyle\int_0^1g(x)\,dx=I+\int_0^1x\,dx=I+\frac12\)이고, 조건에서 \(\displaystyle\int_0^1g^{-1}(x)\,dx=2I+\frac14\)이므로</p>
    $$
    \left(I+\frac12\right)+\left(2I+\frac14\right)=1,\qquad 3I=\frac14,\qquad I=\frac1{12}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 구하는 정적분을 \(I\)로 바꾼다</div>
    <p>\(x=2t\)로 바꾸면 \(dx=2\,dt\)이고 적분구간은 \(0\)에서 \(1\)이므로</p>
    $$
    \int_0^{2}f(x)\cos\frac\pi2x\,dx=2\int_0^1f(2t)\cos\pi t\,dt.
    $$
    <p>\(u=f(2t)\), \(v=\dfrac1\pi\sin\pi t\)로 놓고 부분적분하면 \(\sin0=\sin\pi=0\)이므로 앞항이 사라져</p>
    $$
    2\left(\Big[\frac1\pi f(2t)\sin\pi t\Big]_0^1-\frac2\pi\int_0^1f'(2t)\sin\pi t\,dt\right)=-\frac4\pi I.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 값을 구한다</div>
    $$
    -\frac4\pi\times\frac1{12}=-\frac1{3\pi}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_mock09/calculus/q29": { answer: 57, html: String.raw`
  <div class="sol-box">\(\dfrac{m+1}{n(n+m+1)}\)을 부분분수로 쪼개면 급수가 통째로 소거되어, \(S_m\)이 조화수의 부분합 \(\displaystyle\sum_{k=1}^{m+1}\frac1k\)이 된다. 그러면 \(a_m=S_m-S_{m-1}\)이 한 항만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부분분수로 쪼갠다</div>
    $$
    \frac{m+1}{n(n+m+1)}=\frac1n-\frac1{n+m+1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부분합을 정리한다</div>
    <p>제\(n\)항까지 더하면 앞쪽 \(m+1\)개를 뺀 나머지가 서로 지워져</p>
    $$
    \sum_{k=1}^{n}\left(\frac1k-\frac1{k+m+1}\right)
    =\left(\frac11+\frac12+\cdots+\frac1{m+1}\right)-\left(\frac1{n+1}+\cdots+\frac1{n+m+1}\right).
    $$
    <p>뒤쪽 괄호는 항의 개수가 \(m+1\)로 고정된 채 각 항이 \(0\)으로 가므로</p>
    $$
    S_m=\sum_{k=1}^{m+1}\frac1k.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_1\), \(a_{10}\)을 구한다</div>
    $$
    a_1=S_1=1+\frac12=\frac32,
    $$
    $$
    a_{10}=S_{10}-S_{9}=\sum_{k=1}^{11}\frac1k-\sum_{k=1}^{10}\frac1k=\frac1{11}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답을 구한다</div>
    $$
    a_1+a_{10}=\frac32+\frac1{11}=\frac{33+2}{22}=\frac{35}{22}.
    $$
    <p>\(p=22\), \(q=35\)이므로 \(p+q=57\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{57}\)</div>
` },

"2025_csat/common/q01": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(5\)로 통일한다</div>
    $$
    \sqrt[3]{5}\times25^{\frac13}=5^{\frac13}\times\left(5^{2}\right)^{\frac13}=5^{\frac13}\times5^{\frac23}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 더한다</div>
    $$
    5^{\frac13+\frac23}=5^{1}=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_csat/common/q02": { answer: 4, html: String.raw`
  <div class="sol-box">이 극한은 미분계수의 정의 그대로이므로 \(f'(2)\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한을 미분계수로 바꾼다</div>
    $$
    \lim_{h\to0}\frac{f(2+h)-f(2)}{h}=f'(2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    <p>\(f'(x)=3x^2-8\)이므로</p>
    $$
    f'(2)=3\times4-8=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_csat/common/q03": { answer: 5, html: String.raw`
  <div class="sol-box">첫째항과 공비가 모두 \(k\)이면 \(a_n=k^{n}\)이므로, 이웃한 항의 비는 그냥 \(k\)의 거듭제곱이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항을 쓴다</div>
    <p>첫째항과 공비가 모두 \(k\)이므로 \(a_n=k^{n}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건을 \(k\)의 식으로 바꾼다</div>
    $$
    \frac{a_4}{a_2}+\frac{a_2}{a_1}=\frac{k^4}{k^2}+\frac{k^2}{k}=k^2+k=30.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 푼다</div>
    $$
    k^2+k-30=0,\qquad (k+6)(k-5)=0.
    $$
    <p>\(k&gt;0\)이므로 \(k=5\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_csat/common/q04": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이어붙인 점에서 연속을 따진다</div>
    <p>실수 전체에서 연속이므로 \(x=-2\)에서 좌극한과 우극한, 함숫값이 모두 같아야 한다.</p>
    $$
    \lim_{x\to-2-}(5x+a)=-10+a,\qquad \lim_{x\to-2+}(x^2-a)=4-a=f(-2).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a\)를 구한다</div>
    $$
    -10+a=4-a,\qquad 2a=14,\qquad a=7.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_csat/common/q05": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 쓴다</div>
    $$
    f'(x)=2x\left(3x^2-x\right)+\left(x^2+1\right)(6x-1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입한다</div>
    $$
    f'(1)=2\times2+2\times5=14.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_csat/common/q06": { answer: 5, html: String.raw`
  <div class="sol-box">\(1-\cos^2\theta=\sin^2\theta\)로 바꾸면 분모와 분자가 한 번 약분되어 \(\dfrac1{\sin\theta}\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sin\theta\)를 구한다</div>
    <p>\(\cos\left(\dfrac\pi2+\theta\right)=-\sin\theta\)이므로</p>
    $$
    -\sin\theta=-\frac15,\qquad \sin\theta=\frac15.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 식을 정리한다</div>
    $$
    \frac{\sin\theta}{1-\cos^2\theta}=\frac{\sin\theta}{\sin^2\theta}=\frac1{\sin\theta}=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_csat/common/q07": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 양변을 미분한다</div>
    <p>\(\displaystyle\int_0^{x}f(t)\,dt=3x^3+2x\)의 양변을 \(x\)에 대하여 미분하면</p>
    $$
    f(x)=9x^2+2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    f(1)=9+2=11.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_csat/common/q08": { answer: 1, html: String.raw`
  <div class="sol-box">\(a\)를 정리하면 \(\log_210\)이 되고 \(b=\log2\)이다. 밑과 진수가 서로 뒤바뀐 두 로그의 곱은 항상 \(1\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a\)를 정리한다</div>
    $$
    a=2\log\frac1{\sqrt{10}}+\log_220
    =2\times\left(-\frac12\right)\log10+\log_22+\log_210,
    $$
    $$
    a=-1+1+\log_210=\log_210.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 곱을 구한다</div>
    <p>\(b=\log2\)는 밑이 \(10\)인 로그이므로 밑변환공식에 의하여 \(\log_210\)의 역수이다.</p>
    $$
    a\times b=\log_210\times\log2=1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_csat/common/q09": { answer: 4, html: String.raw`
  <div class="sol-box">적분구간을 \(-2\to0\)과 \(0\to a\)로 쪼개면 조건이 \(\displaystyle\int_0^{a}f(x)\,dx=0\) 하나로 줄어든다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건을 간단히 한다</div>
    $$
    \int_{-2}^{a}f(x)\,dx=\int_{-2}^{0}f(x)\,dx+\int_0^{a}f(x)\,dx=\int_{-2}^{0}f(x)\,dx
    $$
    <p>이므로</p>
    $$
    \int_0^{a}f(x)\,dx=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분해서 \(a\)를 구한다</div>
    $$
    \int_0^{a}\left(3x^2-16x-20\right)dx=\Big[x^3-8x^2-20x\Big]_0^{a}=a^3-8a^2-20a=0,
    $$
    $$
    a(a+2)(a-10)=0.
    $$
    <p>\(a\)가 양수이므로 \(a=10\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_csat/common/q10": { answer: 3, html: String.raw`
  <div class="sol-box">\(a\)가 자연수이므로 최댓값은 \(\cos bx=1\)일 때 나온다. 즉 \(x=\dfrac\pi3\)이 주기의 정수배여야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 최댓값에서 \(a\)를 구한다</div>
    <p>\(a&gt;0\)이므로 \(f\)의 최댓값은 \(a+3\)이고, 이것이 \(13\)이므로</p>
    $$
    a+3=13,\qquad a=10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=\dfrac\pi3\)에서 최대가 되는 \(b\)를 찾는다</div>
    <p>\(f\left(\dfrac\pi3\right)=13\)이려면 \(\cos\dfrac{b\pi}{3}=1\)이어야 하므로, 자연수 \(n\)에 대하여</p>
    $$
    \frac{b\pi}{3}=2n\pi,\qquad b=6n.
    $$
    <p>따라서 \(b\)의 최솟값은 \(6\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 최솟값을 구한다</div>
    $$
    a+b\ \ge\ 10+6=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_csat/common/q11": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 속도와 가속도를 구한다</div>
    $$
    v=x'=3t^2-3t-6,\qquad a=v'=6t-3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 운동 방향이 바뀌는 시각을 구한다</div>
    $$
    3t^2-3t-6=3(t-2)(t+1)=0.
    $$
    <p>출발한 후이므로 \(t=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 그때의 가속도를 구한다</div>
    $$
    6\times2-3=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_csat/common/q12": { answer: 1, html: String.raw`
  <div class="sol-box">부분합이 \(\dfrac12n^2\)로 주어졌으니 \(n\)과 \(n-1\)을 대입해 빼면 항 하나만 남는다. 이때 \(b_{n+1}\)을 먼저 구해 두어야 \(a_n\)을 뽑을 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\{b_n\}\)을 구한다</div>
    <p>\(n=1\)을 대입하면 \(\dfrac{a_1}{b_2}=\dfrac12\)이고 \(a_1=2\)이므로 \(b_2=4\)이다. 등차수열 \(\{b_n\}\)에서 \(b_1=2\), \(b_2=4\)이므로 공차가 \(2\)이고</p>
    $$
    b_n=2n.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 빼서 \(a_n\)을 구한다</div>
    <p>\(n\) 대신 \(n-1\)을 넣은 식을 빼면</p>
    $$
    \frac{a_n}{b_{n+1}}=\frac12n^2-\frac12(n-1)^2=n-\frac12.
    $$
    <p>\(b_{n+1}=2(n+1)\)이므로</p>
    $$
    a_n=2(n+1)\left(n-\frac12\right)=2n^2+n-1\qquad(n\ge2).
    $$
    <p>\(n=1\)일 때도 \(2+1-1=2=a_1\)이므로 모든 자연수 \(n\)에서 성립한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 합을 구한다</div>
    $$
    \sum_{k=1}^{5}\left(2k^2+k-1\right)=2\times\frac{5\times6\times11}{6}+\frac{5\times6}{2}-5=110+15-5=120.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_csat/common/q13": { answer: 5, html: String.raw`
  <div class="sol-box">\(A\)와 \(B\)는 곡선과 직선의 위아래가 뒤바뀌는 구간에 놓여 있다. 그래서 \(4x-f(x)\)를 \(0\)부터 \(3\)까지 한 번에 적분하면 \(A\)는 음수로, \(B\)는 양수로 세어져 곧바로 \(B-A\)가 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f\)를 구한다</div>
    <p>\(f(1)=f(2)=0\)이고 최고차항의 계수가 \(1\)이므로 \(f(x)=(x-1)(x-2)(x-k)\)로 놓을 수 있다. 이때</p>
    $$
    f'(0)=(-2)(-k)+(-1)(-k)+(-1)(-2)=2k+k+2=-7,\qquad k=-3.
    $$
    $$
    f(x)=(x-1)(x-2)(x+3)=x^3-7x+6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 직선 \(\mathrm{OP}\)를 구한다</div>
    <p>\(f(3)=27-21+6=12\)이므로 \(\mathrm P(3,\ 12)\)이고, 직선 \(\mathrm{OP}\)의 방정식은 \(y=4x\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 한 적분으로 묶는다</div>
    <p>점 \(\mathrm Q\)의 \(x\)좌표를 \(a\)라 하면 \(0&lt;x&lt;a\)에서는 곡선이 위에, \(a&lt;x&lt;3\)에서는 직선이 위에 있으므로</p>
    $$
    B-A=\int_a^{3}\{4x-f(x)\}\,dx-\int_0^{a}\{f(x)-4x\}\,dx=\int_0^{3}\{4x-f(x)\}\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 계산한다</div>
    $$
    \int_0^{3}\left(-x^3+11x-6\right)dx=\left[-\frac14x^4+\frac{11}{2}x^2-6x\right]_0^{3}
    =-\frac{81}{4}+\frac{99}{2}-18=\frac{45}{4}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_csat/common/q14": { answer: 4, html: String.raw`
  <div class="sol-box">원 \(O\)의 중심이 \(\mathrm A\)이므로 \(\overline{\mathrm{AD}}=\overline{\mathrm{AE}}=r\)이다. 넓이의 비는 \(\sin A\)가 공통이라 그대로 변의 곱의 비가 되고, 마지막에 \(\mathrm P\)가 지름의 반대쪽 끝에 올 때 \(\overline{\mathrm{BC}}\)까지의 거리가 가장 멀다는 점을 쓴다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 세 변을 \(r\)로 나타낸다</div>
    <p>\(\overline{\mathrm{AD}}:\overline{\mathrm{DB}}=3:2\)이고 \(\overline{\mathrm{AD}}=r\)이므로 \(\overline{\mathrm{DB}}=\dfrac23r\), \(\overline{\mathrm{AB}}=\dfrac53r\)이다. \(\overline{\mathrm{CE}}=x\)라 하면 \(\overline{\mathrm{AC}}=r+x\)이고, 두 삼각형의 넓이가</p>
    $$
    \triangle\mathrm{ADE}=\frac12r^2\sin A,\qquad
    \triangle\mathrm{ABC}=\frac12\times\frac53r\times(r+x)\times\sin A
    $$
    <p>이므로 넓이의 비 \(9:35\)에서</p>
    $$
    35r^2=9\times\frac53r(r+x),\qquad 7r=3(r+x),\qquad x=\frac43r.
    $$
    <p>따라서 \(\overline{\mathrm{AC}}=\dfrac73r\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사인법칙으로 \(\overline{\mathrm{BC}}\)를 구한다</div>
    <p>\(\sin A:\sin C=8:5\)이므로</p>
    $$
    \overline{\mathrm{BC}}=\overline{\mathrm{AB}}\times\frac{\sin A}{\sin C}=\frac53r\times\frac85=\frac83r.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 코사인법칙으로 \(\sin C\)를 구한다</div>
    <p>\(\angle\mathrm{ACB}=\theta\)라 하면</p>
    $$
    \cos\theta=\frac{\left(\frac83r\right)^2+\left(\frac73r\right)^2-\left(\frac53r\right)^2}{2\times\frac83r\times\frac73r}
    =\frac{88}{112}=\frac{11}{14},
    $$
    $$
    \sin\theta=\sqrt{1-\left(\frac{11}{14}\right)^2}=\frac{5\sqrt3}{14}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 외접원의 반지름으로 \(r\)를 확정한다</div>
    $$
    \frac{\overline{\mathrm{AB}}}{\sin\theta}=2\times7=14,\qquad \frac53r=14\times\frac{5\sqrt3}{14}=5\sqrt3,\qquad r=3\sqrt3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 넓이의 최댓값을 구한다</div>
    <p>\(\mathrm A\)에서 \(\overline{\mathrm{BC}}\)에 내린 수선의 발을 \(\mathrm H\)라 하면</p>
    $$
    \overline{\mathrm{AH}}=\overline{\mathrm{AC}}\sin\theta=\frac73\times3\sqrt3\times\frac{5\sqrt3}{14}=\frac{15}{2}.
    $$
    <p>\(\mathrm P\)는 중심이 \(\mathrm A\)인 원 위의 점이므로, \(\overline{\mathrm{BC}}\)에서 가장 먼 위치는 직선 \(\mathrm{AH}\)를 \(\mathrm A\) 너머로 연장하여 원과 만나는 점이다. 그때 밑변 \(\overline{\mathrm{BC}}\)까지의 거리는 \(r+\overline{\mathrm{AH}}\)이므로</p>
    $$
    \frac12\times\frac83\times3\sqrt3\times\left(3\sqrt3+\frac{15}{2}\right)=4\sqrt3\left(3\sqrt3+\frac{15}{2}\right)=36+30\sqrt3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_csat/common/q15": { answer: 2, html: String.raw`
  <div class="sol-box">조건 (나)의 방정식은 \(g'(x)=0\)의 해들과 그것을 \(4\)만큼 오른쪽으로 민 해들의 합집합을 묻는다. \(g'\)의 해가 세 개인데 합집합이 네 개가 되려면, 세 해가 간격 \(4\)로 나란히 놓여 있어야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미분가능 조건으로 \(f\)를 정한다</div>
    <p>\(x\le0\)에서 \(g(x)=x^3+ax^2+15x+7\)이므로 \(g(0)=7\), \(g'(0)=15\)이다. 조건 (가)에서 \(f(0)=7\), \(f'(0)=15\)이므로 최고차항의 계수를 \(p\ (p&lt;0)\)라 하면</p>
    $$
    f(x)=px^2+15x+7.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(g'(x)=0\)의 해가 셋임을 확인한다</div>
    <p>\(x&gt;0\)에서 \(f'(x)=2px+15=0\)의 해는 \(x=-\dfrac{15}{2p}&gt;0\)로 하나이고, \(g'(0)=15\ne0\)이다. 한편 \(3x^2+2ax+15=0\)은 두 근의 곱이 \(5&gt;0\)이므로 두 근의 부호가 같고, \(x&lt;0\)에서 해를 가지려면 두 근이 모두 음수여야 한다.</p>
    <p>이 이차방정식이 해를 갖지 않으면 \(g'(x)=0\)의 해가 하나뿐이라 \(g'(x)g'(x-4)=0\)의 해는 \(2\)개가 되어 조건에 어긋난다. 중근을 갖는 경우는 판별식 \(4a^2-180=0\), 즉 \(a=3\sqrt5\)인데 문제에서 이를 제외했다. 따라서 서로 다른 두 음의 실근 \(\alpha&lt;\beta&lt;0\)을 갖는다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 해가 \(4\)개가 되는 배치를 찾는다</div>
    <p>\(g'(x)=0\)의 해가 \(\alpha\), \(\beta\), \(-\dfrac{15}{2p}\)의 셋이므로 \(g'(x-4)=0\)의 해는 이들을 \(4\)만큼 민 셋이다. 합집합의 크기가 \(4\)이려면 두 개가 겹쳐야 하므로</p>
    $$
    \beta=\alpha+4,\qquad -\frac{15}{2p}=\beta+4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 근과 계수의 관계로 \(a\), \(p\)를 구한다</div>
    <p>\(3x^2+2ax+15=0\)에서 두 근의 곱은 \(5\)이므로</p>
    $$
    \alpha(\alpha+4)=5,\qquad \alpha^2+4\alpha-5=0,\qquad (\alpha+5)(\alpha-1)=0.
    $$
    <p>\(\alpha&lt;0\)이므로 \(\alpha=-5\), \(\beta=-1\)이다. 두 근의 합이 \(-\dfrac{2a}{3}\)이므로 \(-6=-\dfrac{2a}{3}\)에서 \(a=9\)이고,</p>
    $$
    -\frac{15}{2p}=-1+4=3,\qquad p=-\frac52.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 답을 구한다</div>
    $$
    g(-2)=-8+9\times4-30+7=5,\qquad g(2)=-\frac52\times4+30+7=27,
    $$
    $$
    g(-2)+g(2)=32.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_csat/common/q16": { answer: 7, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 진수 조건을 적는다</div>
    $$
    x-3&gt;0,\qquad 3x-5&gt;0\ \Longrightarrow\ x&gt;3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 밑을 \(4\)로 맞춘다</div>
    $$
    \log_2(x-3)=\log_{2^2}(x-3)^2=\log_4(x-3)^2
    $$
    <p>이므로 주어진 식은 \(\log_4(x-3)^2=\log_4(3x-5)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 풀어서 조건에 맞는 해를 고른다</div>
    $$
    (x-3)^2=3x-5,\qquad x^2-9x+14=0,\qquad (x-2)(x-7)=0.
    $$
    <p>\(x&gt;3\)이므로 \(x=7\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{7}\)</div>
` },

"2025_csat/common/q17": { answer: 33, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int\left(9x^2+4x\right)dx=3x^3+2x^2+C.
    $$
    <p>\(f(1)=6\)이므로 \(3+2+C=6\)에서 \(C=1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    f(2)=24+8+1=33.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{33}\)</div>
` },

"2025_csat/common/q18": { answer: 96, html: String.raw`
  <div class="sol-box">\(a_n+a_{n+4}=12\)는 네 칸 떨어진 두 항을 짝지으라는 뜻이다. \(16\)개를 \(8\)쌍으로 묶으면 곱셈 한 번으로 끝난다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 앞의 여덟 항을 짝짓는다</div>
    $$
    \sum_{n=1}^{8}a_n=\sum_{n=1}^{4}\left(a_n+a_{n+4}\right)=\sum_{n=1}^{4}12=48.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 뒤의 여덟 항도 같은 방법으로 묶는다</div>
    $$
    \sum_{n=9}^{16}a_n=\sum_{n=9}^{12}\left(a_n+a_{n+4}\right)=\sum_{n=9}^{12}12=48.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 더한다</div>
    $$
    \sum_{n=1}^{16}a_n=48+48=96.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{96}\)</div>
` },

"2025_csat/common/q19": { answer: 41, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극값을 갖는 \(x\)를 구한다</div>
    $$
    f'(x)=6x^2-6ax-12a^2=6(x+a)(x-2a)=0,\qquad x=-a\ \text{또는}\ x=2a.
    $$
    <p>\(a&gt;0\)이므로 \(-a&lt;2a\)이고, \(f'\)의 부호가 \(x=-a\)에서 양에서 음으로 바뀌므로 \(x=-a\)에서 극대이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극댓값 조건에서 \(a\)를 구한다</div>
    $$
    f(-a)=-2a^3-3a^3+12a^3=7a^3=\frac7{27},\qquad a^3=\frac1{27},\qquad a=\frac13.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(3)\)을 구한다</div>
    <p>\(f(x)=2x^3-x^2-\dfrac43x\)이므로</p>
    $$
    f(3)=54-9-4=41.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{41}\)</div>
` },

"2025_csat/prob_stat/q23": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항을 쓴다</div>
    $$
    {}_5\mathrm C_r\times2^{\,5-r}\times\left(x^3\right)^{r}\qquad(r=0,1,\dots,5).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x^6\)이 되는 \(r\)를 찾는다</div>
    <p>\(3r=6\)에서 \(r=2\)이므로 계수는</p>
    $$
    {}_5\mathrm C_2\times2^{3}=10\times8=80.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2025_csat/prob_stat/q24": { answer: 3, html: String.raw`
  <div class="sol-box">\(\mathrm P(A\,|\,B)=\mathrm P(A)\)라는 조건은 두 사건이 서로 독립이라는 뜻이므로, 곱셈으로 \(\mathrm P(B)\)를 뽑을 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 독립임을 읽어낸다</div>
    $$
    \mathrm P(A\,|\,B)=\frac{\mathrm P(A\cap B)}{\mathrm P(B)}=\mathrm P(A)\ \Longrightarrow\ \mathrm P(A\cap B)=\mathrm P(A)\mathrm P(B).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm P(B)\)를 구한다</div>
    $$
    \frac15=\frac12\mathrm P(B),\qquad \mathrm P(B)=\frac25.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 덧셈정리를 쓴다</div>
    $$
    \mathrm P(A\cup B)=\frac12+\frac25-\frac15=\frac{5+4-2}{10}=\frac7{10}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_csat/prob_stat/q25": { answer: 1, html: String.raw`
  <div class="sol-box">신뢰구간의 길이는 \(2\times1.96\times\dfrac\sigma{\sqrt n}\)이므로 \(b-a\)에는 표본평균의 값이 들어가지 않는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 신뢰구간의 길이를 쓴다</div>
    $$
    b-a=2\times1.96\times\frac{2}{\sqrt{256}}=2\times1.96\times\frac18.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 계산한다</div>
    $$
    b-a=\frac{1.96}{4}=0.49.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_csat/prob_stat/q26": { answer: 3, html: String.raw`
  <div class="sol-box">"적어도 한 명"이므로 여사건, 즉 셋 다 과목 A를 선택하는 경우를 세는 편이 훨씬 짧다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 여사건의 확률을 구한다</div>
    <p>과목 A를 선택한 학생이 \(9\)명이므로, 뽑은 \(3\)명이 모두 과목 A를 선택했을 확률은</p>
    $$
    \frac{{}_9\mathrm C_3}{{}_{16}\mathrm C_3}=\frac{84}{560}=\frac3{20}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건의 확률을 뺀다</div>
    $$
    1-\frac3{20}=\frac{17}{20}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_csat/prob_stat/q28": { answer: 2, html: String.raw`
  <div class="sol-box">조건 (나)의 \(f(2)\le f(3)\le f(4)\le f(5)\)는 순서가 정해진 나열이므로 중복조합이다. \(f(1)\times f(6)\)이 \(6\)의 약수라는 조건으로 양 끝값을 먼저 정하면, 가운데 네 값의 범위가 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 양 끝값의 경우를 나눈다</div>
    <p>\(6\)의 약수는 \(1,2,3,6\)이므로 \(f(1)f(6)\)은 이 넷 중 하나이고, \(f(1)\le f(6)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(f(1)f(6)=1\), \(2\)인 경우</div>
    <p>ⅰ) \(f(1)=f(6)=1\)이면 조건 (나)에서 \(2\le f(2)\le\cdots\le f(5)\le2\)이므로 모두 \(2\)로 정해져 \(1\)가지이다.</p>
    <p>ⅱ) \(f(1)=1\), \(f(6)=2\)이면 \(2\le f(2)\le f(3)\le f(4)\le f(5)\le4\)이므로 \(2,3,4\) 중 중복을 허락하여 \(4\)개를 뽑는 중복조합이다.</p>
    $$
    {}_3\mathrm H_4={}_6\mathrm C_4={}_6\mathrm C_2=15.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(1)f(6)=3\)인 경우</div>
    <p>\(f(1)=1\), \(f(6)=3\)이므로 \(2\le f(2)\le\cdots\le f(5)\le6\)이고, \(2,3,4,5,6\) 중에서 뽑는 중복조합이다.</p>
    $$
    {}_5\mathrm H_4={}_8\mathrm C_4=70.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(f(1)f(6)=6\)인 경우</div>
    <p>\(f(1)=1\), \(f(6)=6\)이면 \(2\le f(2)\le\cdots\le f(5)\le12\)인데 함숫값은 \(6\) 이하이므로 \(2,3,4,5,6\)에서 뽑는 중복조합으로 \({}_5\mathrm H_4=70\)가지이다.</p>
    <p>\(f(1)=2\), \(f(6)=3\)이면 \(4\le f(2)\le\cdots\le f(5)\le6\)이므로 \(4,5,6\)에서 뽑아 \({}_3\mathrm H_4=15\)가지이다. 합하면 \(85\)가지이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 모두 더한다</div>
    $$
    1+15+70+85=171.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_csat/prob_stat/q29": { answer: 25, html: String.raw`
  <div class="sol-box">첫 조건은 \(x\)와 \(40-x\)가 평균에 대하여 대칭이라는 뜻이고, 둘째 조건은 \(Y\)의 그래프가 \(X\)의 그래프를 \(-10\)만큼 평행이동한 것이라는 뜻이다. 표준화해서 항등식으로 보면 셋 다 바로 읽힌다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫째 조건에서 \(m_1\)을 구한다</div>
    <p>\(\mathrm P(X\le x)=\mathrm P(X\ge40-x)\)를 표준화하면</p>
    $$
    \frac{x-m_1}{\sigma_1}+\frac{(40-x)-m_1}{\sigma_1}=0,\qquad 40-2m_1=0,\qquad m_1=20.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 둘째 조건에서 \(m_2\)와 \(\sigma_2\)를 구한다</div>
    $$
    \mathrm P(Y\le x)=\mathrm P\left(Z\le\frac{x-m_2}{\sigma_2}\right),\qquad
    \mathrm P(X\le x+10)=\mathrm P\left(Z\le\frac{x-10}{\sigma_1}\right)
    $$
    <p>이 모든 \(x\)에서 같으므로 \(\dfrac{x-m_2}{\sigma_2}=\dfrac{x-10}{\sigma_1}\)이 항등식이고</p>
    $$
    \sigma_2=\sigma_1,\qquad m_2=10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 셋째 조건에서 \(\sigma_1\)을 구한다</div>
    <p>\(X\sim\mathrm N(20,\ \sigma_1^{\,2})\), \(Y\sim\mathrm N(10,\ \sigma_1^{\,2})\)이므로 각각 표준화하면</p>
    $$
    \mathrm P(15\le X\le20)=\mathrm P\left(-\frac5{\sigma_1}\le Z\le0\right)=\mathrm P\left(0\le Z\le\frac5{\sigma_1}\right),
    $$
    $$
    \mathrm P(15\le Y\le20)=\mathrm P\left(\frac5{\sigma_1}\le Z\le\frac{10}{\sigma_1}\right).
    $$
    <p>두 구간이 \(\dfrac5{\sigma_1}\)에서 이어 붙으므로</p>
    $$
    \mathrm P\left(0\le Z\le\frac{10}{\sigma_1}\right)=0.4772.
    $$
    <p>표에서 \(\mathrm P(0\le Z\le2)=0.4772\)이므로 \(\dfrac{10}{\sigma_1}=2\), 즉 \(\sigma_1=5\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답을 구한다</div>
    $$
    m_1+\sigma_2=20+5=25.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{25}\)</div>
` },

"2025_csat/calculus/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\dfrac{\sin x}{x}\) 꼴로 쪼갠다</div>
    $$
    \frac{3x^2}{\sin^2x}=3\times\left(\frac{x}{\sin x}\right)^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    <p>\(\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1\)이므로</p>
    $$
    3\times1^2=3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2025_csat/calculus/q24": { answer: 4, html: String.raw`
  <div class="sol-box">분자의 차수가 분모와 같으므로 나눗셈으로 먼저 정수부를 떼어 낸다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 피적분함수를 쪼갠다</div>
    $$
    \frac{x+2}{x+1}=1+\frac1{x+1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분한다</div>
    $$
    \int_0^{10}\left(1+\frac1{x+1}\right)dx=\Big[x+\ln|x+1|\Big]_0^{10}=10+\ln11.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2025_csat/calculus/q25": { answer: 2, html: String.raw`
  <div class="sol-box">주어진 극한에서 \(\dfrac{a_n}{n}\to1\)임을 먼저 끌어내면, 무리식은 유리화 후 \(n\) 대신 \(\dfrac{a_n}{n}\)을 쓰는 문제로 바뀐다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\dfrac{a_n}{n}\)의 극한을 구한다</div>
    <p>\(b_n=\dfrac{na_n}{n^2+3}\)이라 하면 \(a_n=\dfrac{b_n\left(n^2+3\right)}{n}\)이므로</p>
    $$
    \lim_{n\to\infty}\frac{a_n}{n}=\lim_{n\to\infty}b_n\times\lim_{n\to\infty}\frac{n^2+3}{n^2}=1\times1=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 유리화한다</div>
    $$
    \sqrt{a_n^{\,2}+n}-a_n=\frac{n}{\sqrt{a_n^{\,2}+n}+a_n}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 분자와 분모를 \(n\)으로 나눈다</div>
    $$
    \frac{n}{\sqrt{a_n^{\,2}+n}+a_n}
    =\frac{1}{\sqrt{\left(\dfrac{a_n}{n}\right)^2+\dfrac1n}+\dfrac{a_n}{n}}
    \ \longrightarrow\ \frac{1}{\sqrt{1+0}+1}=\frac12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2025_csat/calculus/q26": { answer: 1, html: String.raw`
  <div class="sol-box">단면이 정사각형이므로 한 변의 제곱이 곧 넓이다. 근호가 벗겨지면 \(\dfrac{(t+\ln t)'}{t+\ln t}\) 꼴이 보여 로그로 적분된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 단면의 넓이를 구한다</div>
    $$
    S(t)=\left(\sqrt{\frac{t+1}{t(t+\ln t)}}\right)^2=\frac{t+1}{t(t+\ln t)}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(t+\ln t=s\)로 바꾼다</div>
    $$
    \frac{ds}{dt}=1+\frac1t=\frac{t+1}{t}
    $$
    <p>이므로 \(S(t)\,dt=\dfrac1s\,ds\)이고, \(t=1\)일 때 \(s=1\), \(t=e\)일 때 \(s=e+1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부피를 구한다</div>
    $$
    \int_1^{e}S(t)\,dt=\int_1^{e+1}\frac1s\,ds=\Big[\ln s\Big]_1^{e+1}=\ln(e+1).
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2025_csat/calculus/q27": { answer: 1, html: String.raw`
  <div class="sol-box">접선이 \(x\)축이라는 조건은 \(g(0)=0\)과 \(g'(0)=0\) 두 개를 준다. 여기에 "\(g\)가 역함수를 갖는다"는 조건이 더해지면 \(g'\)의 부호가 바뀌지 않아야 하므로, \(g'(0)=0\)은 최솟값이어야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접선 조건을 식으로 옮긴다</div>
    $$
    g(0)=f(1)+1=0\ \Longrightarrow\ f(1)=-1,
    $$
    <p>\(g'(x)=f'(e^{x})e^{x}+e^{x}=e^{x}\{f'(e^{x})+1\}\)이므로</p>
    $$
    g'(0)=f'(1)+1=0\ \Longrightarrow\ f'(1)=-1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 역함수 조건으로 \(f'\)를 확정한다</div>
    <p>\(g\)가 역함수를 가지려면 \(g'\)의 부호가 일정해야 한다. \(e^{x}&gt;0\)이고 \(f\)의 최고차항의 계수가 \(1\)로 양수이므로 모든 실수 \(x\)에서 \(f'(e^{x})+1\ge0\)이어야 하고, \(x=0\)에서 등호가 성립하므로 \(f'(t)+1\)은 \(t=1\)에서 최소이면서 그 값이 \(0\)이다. \(f'\)는 최고차항의 계수가 \(3\)인 이차함수이므로</p>
    $$
    f'(x)=3(x-1)^2-1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f\)와 \(g\)를 구한다</div>
    $$
    f(x)=\int\left\{3(x-1)^2-1\right\}dx=(x-1)^3-x+C,
    $$
    <p>\(f(1)=-1\)에서 \(-1+C=-1\), 즉 \(C=0\)이므로 \(f(x)=(x-1)^3-x\)이고</p>
    $$
    g(x)=f(e^{x})+e^{x}=\left(e^{x}-1\right)^3-e^{x}+e^{x}=\left(e^{x}-1\right)^3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 역함수의 미분법을 쓴다</div>
    <p>\(h(8)=k\)라 하면 \(g(k)=8\)에서 \(\left(e^{k}-1\right)^3=8\), \(e^{k}=3\), \(k=\ln3\)이다.</p>
    $$
    h'(8)=\frac{1}{g'(\ln3)}=\frac{1}{e^{\ln3}\left\{f'\left(e^{\ln3}\right)+1\right\}}
    =\frac{1}{3\left\{3\times(3-1)^2-1+1\right\}}=\frac1{36}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock06/common/q01": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(2\)로 통일한다</div>
    $$
    4^{\frac14}\times2^{\frac12}=\left(2^{2}\right)^{\frac14}\times2^{\frac12}=2^{\frac12}\times2^{\frac12}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 더한다</div>
    $$
    2^{\frac12+\frac12}=2^{1}=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock06/common/q02": { answer: 1, html: String.raw`
  <div class="sol-box">이 극한은 미분계수의 정의 그대로이므로 \(f'(1)\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한을 미분계수로 바꾼다</div>
    $$
    \lim_{h\to0}\frac{f(1+h)-f(1)}{h}=f'(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    <p>\(f'(x)=2x-1\)이므로</p>
    $$
    f'(1)=2-1=1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock06/common/q03": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합의 기호를 나눈다</div>
    $$
    \sum_{k=1}^{7}(2a_k+1)=2\sum_{k=1}^{7}a_k+\sum_{k=1}^{7}1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    <p>뒤쪽은 \(1\)을 \(7\)번 더한 것이므로</p>
    $$
    2\times8+7=23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock06/common/q04": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이어붙인 점에서만 따진다</div>
    <p>두 조각은 각각 실수 전체에서 연속이므로, \(x=3\)에서 연속이면 \(f\)는 실수 전체에서 연속이다.</p>
    $$
    \lim_{x\to3-}\left(-x^2+a\right)=-9+a,\qquad \lim_{x\to3+}(5x-a)=15-a=f(3).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a\)를 구한다</div>
    $$
    -9+a=15-a,\qquad 2a=24,\qquad a=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock06/common/q05": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부정적분을 구한다</div>
    $$
    \int_0^{2}\left(6x^2-2x+1\right)dx=\Big[2x^3-x^2+x\Big]_0^{2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    16-4+2=14.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock06/common/q06": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 최댓값에서 \(a\)를 구한다</div>
    <p>\(a&gt;0\)이므로 최댓값은 \(a+1\)이고, 이것이 \(8\)이므로 \(a=7\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 주기에서 \(b\)를 구한다</div>
    <p>\(b&gt;0\)이므로 주기는 \(\dfrac{2\pi}{b}\)이고, 이것이 \(\pi\)이므로</p>
    $$
    \frac{2\pi}{b}=\pi,\qquad b=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 더한다</div>
    $$
    a+b=7+2=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock06/common/q07": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 쓴다</div>
    <p>\(g(x)=5x^2+xf(x)\)이므로</p>
    $$
    g'(x)=10x+f(x)+xf'(x).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=3\)을 대입한다</div>
    $$
    g'(3)=30+f(3)+3f'(3)=30+2+3\times1=35.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock06/common/q08": { answer: 5, html: String.raw`
  <div class="sol-box">\(2\cos\theta=\sin\theta\)의 양변을 제곱하면 \(\sin^2\theta=1-\cos^2\theta\)로 바꿔 \(\cos\theta\)만 남길 수 있다. 부호는 \(\sin\theta&gt;0\)에서 결정된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부호를 먼저 정한다</div>
    <p>\(\sin(\pi-\theta)=\sin\theta&gt;0\)이고, \(2\cos\theta=\sin\theta&gt;0\)이므로 \(\cos\theta&gt;0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 제곱하여 \(\cos\theta\)만 남긴다</div>
    $$
    4\cos^2\theta=\sin^2\theta=1-\cos^2\theta,\qquad 5\cos^2\theta=1,\qquad \cos^2\theta=\frac15.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부호를 붙인다</div>
    $$
    \cos\theta=\frac{\sqrt5}{5}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock06/common/q09": { answer: 2, html: String.raw`
  <div class="sol-box">\((x+1)f(x)=xf(x)+f(x)\)로 쪼개면 양변의 \(\displaystyle\int_{-3}^{3}f(x)\,dx\)가 서로 지워져 \(\displaystyle\int_{-3}^{3}xf(x)\,dx=36\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건을 간단히 한다</div>
    $$
    \int_{-3}^{3}(x+1)f(x)\,dx=\int_{-3}^{3}xf(x)\,dx+\int_{-3}^{3}f(x)\,dx
    $$
    <p>이므로 주어진 등식에서</p>
    $$
    \int_{-3}^{3}xf(x)\,dx=36.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 우함수·기함수를 이용해 계산한다</div>
    <p>\(f(x)=x^2+ax\)이므로 \(xf(x)=x^3+ax^2\)이고, \(x^3\)은 기함수라 대칭구간에서 \(0\)이다.</p>
    $$
    \int_{-3}^{3}\left(x^3+ax^2\right)dx=2\int_0^{3}ax^2\,dx=2\left[\frac a3x^3\right]_0^{3}=18a.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구한다</div>
    $$
    18a=36,\qquad a=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock06/common/q10": { answer: 1, html: String.raw`
  <div class="sol-box">두 곡선은 \(y\)축에 대하여 서로 대칭이므로, 정삼각형의 꼭짓점 \(\mathrm A\)는 \(y\)축 위에 있고 밑변은 \(x\)축 위에 놓인다. 그러면 \(\tan\dfrac\pi3\) 하나로 조건이 정리된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 세 꼭짓점을 구한다</div>
    <p>\(\log_a(x+3)=\log_a(-x+3)\)에서 \(x=0\)이므로 \(\mathrm A\left(0,\ \log_a3\right)\)이다. 또 \(\log_a(x+3)=0\)에서 \(x+3=1\), 즉 \(\mathrm B(-2,\ 0)\)이고, \(\log_a(-x+3)=0\)에서 \(\mathrm C(2,\ 0)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 정삼각형 조건을 쓴다</div>
    <p>원점을 \(\mathrm O\)라 하면 \(\overline{\mathrm{OB}}=2\)이고, 직각삼각형 \(\mathrm{AOB}\)에서 \(\angle\mathrm{ABO}=\dfrac\pi3\)이므로</p>
    $$
    \tan\frac\pi3=\frac{\overline{\mathrm{OA}}}{\overline{\mathrm{OB}}},\qquad \sqrt3=\frac{\log_a3}{2},\qquad \log_a3=2\sqrt3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구한다</div>
    $$
    a^{2\sqrt3}=3,\qquad a=3^{\frac1{2\sqrt3}}=3^{\frac{\sqrt3}{6}}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock06/common/q11": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> ㄱ을 확인한다</div>
    $$
    x(1)=1^3-1^2-1+1=0.
    $$
    <p>위치가 \(1\)이 아니라 \(0\)이므로 ㄱ은 거짓이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄴ을 확인한다</div>
    $$
    v=\frac{dx}{dt}=3t^2-2t-1,\qquad v(1)=3-2-1=0.
    $$
    <p>따라서 ㄴ은 참이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄷ을 확인한다</div>
    <p>\(v=3t^2-2t-1=(3t+1)(t-1)\)이므로 \(t=1\)의 좌우에서 부호가 음에서 양으로 바뀐다. 즉 출발한 후 운동 방향이 바뀌는 시각은 \(t=1\)이고, 그때의 가속도는</p>
    $$
    a=\frac{dv}{dt}=6t-2,\qquad a(1)=4.
    $$
    <p>따라서 ㄷ도 참이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock06/common/q12": { answer: 2, html: String.raw`
  <div class="sol-box">조건 (나)가 매 단계 두 갈래이므로 \(a_1\to a_2\to a_3\)에서 네 갈래가 나온다. 조건 (가) \(a_3=a_1\)이 그중 어느 것이 가능한지를 걸러 준다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 네 갈래로 나눈다</div>
    <p>조건 (나)에서 \(a_{n+1}=a_n-3\) 또는 \(a_{n+1}=2a_n\)이다. \(a_1\to a_2\), \(a_2\to a_3\)의 선택을 조합하면 네 경우가 나오고, 각각에 조건 (가) \(a_3=a_1\)을 적용한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 각 경우를 확인한다</div>
    <p>ⅰ) 두 번 다 \(-3\)이면 \(a_3=a_1-6\)이라 \(a_3=a_1\)이 될 수 없다.</p>
    <p>ⅱ) \(a_2=2a_1\), \(a_3=a_2-3\)이면 \(a_3=2a_1-3=2a_3-3\)에서 \(a_3=3\)이다.</p>
    <p>ⅲ) \(a_2=a_1-3\), \(a_3=2a_2\)이면 \(a_3=2a_1-6=2a_3-6\)에서 \(a_3=6\)이다.</p>
    <p>ⅳ) 두 번 다 \(2\)배이면 \(a_3=4a_1=4a_3\)에서 \(a_3=0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_4\)의 최댓값을 구한다</div>
    <p>\(a_4\)는 \(a_3-3\) 또는 \(2a_3\)이므로 가능한 값은</p>
    $$
    a_3=3\ \Rightarrow\ 0,\ 6,\qquad a_3=6\ \Rightarrow\ 3,\ 12,\qquad a_3=0\ \Rightarrow\ -3,\ 0.
    $$
    <p>따라서 최댓값은 \(12\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock06/common/q13": { answer: 4, html: String.raw`
  <div class="sol-box">세 영역은 곡선과 직선의 위아래가 뒤바뀌면서 번갈아 나온다. 그래서 \((A)+(C)=(B)\)는 부호를 붙여 한 번에 적분했을 때 \(0\)이 된다는 뜻이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건을 하나의 정적분으로 옮긴다</div>
    <p>\(A\), \(C\)에서는 곡선이 직선보다 위에, \(B\)에서는 아래에 있으므로</p>
    $$
    \int_0^{k}\left\{\left(3x^2-7x+2\right)-\left(\frac13x-\frac23\right)\right\}dx=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 정리해서 적분한다</div>
    $$
    \int_0^{k}\left(3x^2-\frac{22}{3}x+\frac83\right)dx=\left[x^3-\frac{11}{3}x^2+\frac83x\right]_0^{k}=0,
    $$
    $$
    k^3-\frac{11}{3}k^2+\frac83k=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(k\)를 구한다</div>
    $$
    3k^3-11k^2+8k=k(k-1)(3k-8)=0.
    $$
    <p>\(k&gt;2\)이므로 \(k=\dfrac83\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock06/common/q14": { answer: 2, html: String.raw`
  <div class="sol-box">\(\mathrm P\)가 중점, \(\mathrm Q\)가 \(5:1\) 내분점이므로 \(\overline{\mathrm{PQ}}\)는 \(\overline{\mathrm{BC}}\)의 \(\dfrac13\)이다. 삼각형 \(\mathrm{APQ}\)의 사인법칙이 이 길이를 주면 나머지는 코사인법칙 두 번으로 풀린다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 사인법칙으로 \(\overline{\mathrm{PQ}}\)를 구한다</div>
    <p>삼각형 \(\mathrm{APQ}\)에서 \(\dfrac{\overline{\mathrm{PQ}}}{\sin(\angle\mathrm{QAP})}=\dfrac{\overline{\mathrm{AQ}}}{\sin(\angle\mathrm{APQ})}\)이고 \(\sin(\angle\mathrm{QAP}):\sin(\angle\mathrm{APQ})=\sqrt2:3\)이므로</p>
    $$
    \overline{\mathrm{PQ}}=\frac{\sqrt2}{3}\times3\sqrt2=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\overline{\mathrm{BC}}\)를 구한다</div>
    <p>\(\overline{\mathrm{BP}}=\dfrac12\overline{\mathrm{BC}}\), \(\overline{\mathrm{QC}}=\dfrac16\overline{\mathrm{BC}}\)이므로</p>
    $$
    \overline{\mathrm{BC}}=\frac12\overline{\mathrm{BC}}+2+\frac16\overline{\mathrm{BC}},\qquad \frac13\overline{\mathrm{BC}}=2,\qquad \overline{\mathrm{BC}}=6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 삼각형 \(\mathrm{ABQ}\)에서 \(\cos B\)를 구한다</div>
    <p>\(\overline{\mathrm{BQ}}=\dfrac56\times6=5\), \(\overline{\mathrm{AB}}=2\sqrt7\), \(\overline{\mathrm{AQ}}=3\sqrt2\)이므로</p>
    $$
    \cos(\angle\mathrm{ABQ})=\frac{28+25-18}{2\times2\sqrt7\times5}=\frac{35}{20\sqrt7}=\frac{\sqrt7}{4}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 삼각형 \(\mathrm{ABC}\)에서 \(\overline{\mathrm{AC}}\)를 구한다</div>
    <p>\(\angle\mathrm{ABQ}\)와 \(\angle\mathrm{ABC}\)는 같은 각이므로</p>
    $$
    \overline{\mathrm{AC}}^{\,2}=28+36-2\times2\sqrt7\times6\times\frac{\sqrt7}{4}=64-42=22,\qquad \overline{\mathrm{AC}}=\sqrt{22}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 외접원의 넓이를 구한다</div>
    $$
    \sin(\angle\mathrm{ABC})=\sqrt{1-\frac7{16}}=\frac34,\qquad
    R=\frac{\overline{\mathrm{AC}}}{2\sin(\angle\mathrm{ABC})}=\frac{\sqrt{22}}{\frac32}=\frac{2\sqrt{22}}{3},
    $$
    $$
    \pi R^2=\pi\times\frac{4\times22}{9}=\frac{88}{9}\pi.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock06/common/q16": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 진수 조건을 적는다</div>
    $$
    x+1&gt;0,\qquad x-1&gt;0\ \Longrightarrow\ x&gt;1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 밑을 \(5\)로 맞춘다</div>
    <p>\(\log_{25}9=\log_{5^2}3^2=\log_53\)이므로 주어진 식은</p>
    $$
    \log_5(x+1)(x-1)=\log_53,\qquad x^2-1=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 해를 고른다</div>
    <p>\(x^2=4\)이고 \(x&gt;1\)이므로 \(x=2\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{2}\)</div>
` },

"2026_mock06/common/q17": { answer: 6, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int\left(3x^2+4x\right)dx=x^3+2x^2+C.
    $$
    <p>\(f(0)=3\)이므로 \(C=3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    f(1)=1+2+3=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{6}\)</div>
` },

"2026_mock06/common/q18": { answer: 133, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합을 나눈다</div>
    $$
    \sum_{k=1}^{6}\left(k^2+2k\right)=\sum_{k=1}^{6}k^2+2\sum_{k=1}^{6}k.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 공식을 대입한다</div>
    $$
    \frac{6\times7\times13}{6}+2\times\frac{6\times7}{2}=91+42=133.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{133}\)</div>
` },

"2026_mock06/common/q19": { answer: 8, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극값을 갖는 \(x\)를 구한다</div>
    $$
    f'(x)=9x^2-18x=9x(x-2)=0,\qquad x=0\ \text{또는}\ x=2.
    $$
    <p>\(f'\)의 부호가 \(x=0\)에서 양에서 음으로, \(x=2\)에서 음에서 양으로 바뀌므로 \(x=0\)에서 극대, \(x=2\)에서 극소이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극댓값 조건에서 \(a\)를 구한다</div>
    <p>\(f(0)=a\)이므로 \(a=20\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 극솟값을 구한다</div>
    $$
    f(2)=3\times8-9\times4+20=24-36+20=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{8}\)</div>
` },

"2026_mock06/common/q20": { answer: 85, html: String.raw`
  <div class="sol-box">\(f(f(x))=f(x)\)는 \(f(x)\)가 방정식 \(f(t)=t\)의 해라는 뜻이다. 그 해가 \(0\)과 \(3\)이므로, 구할 것은 \(f(x)=0\) 또는 \(f(x)=3\)의 해가 된다. 그다음은 주기 \(4\)를 타고 등차수열 세 개로 갈라진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 방정식을 바꿔 놓는다</div>
    <p>\(0\le x&lt;4\)에서 \(f(x)=x\)는 \(-x^2+4x=x\), 즉 \(-x(x-3)=0\)이므로 해가 \(0\), \(3\)이다. 따라서 \(f(f(x))=f(x)\)는</p>
    $$
    f(x)\times\{f(x)-3\}=0
    $$
    <p>과 같은 방정식이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 한 주기 안의 해를 구한다</div>
    <p>\(0\le x&lt;4\)에서 \(f(x)=0\)이면 \(-x(x-4)=0\)에서 \(x=0\)이고, \(f(x)=3\)이면 \(-x^2+4x=3\), 즉 \((x-1)(x-3)=0\)에서 \(x=1\) 또는 \(x=3\)이다. 즉 한 주기 안의 해는 \(0\), \(1\), \(3\)이므로</p>
    $$
    a_1=0,\qquad a_2=1,\qquad a_3=3.
    $$
    <p>따라서 \(p=1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 세 등차수열로 나눈다</div>
    <p>\(f(x+4)=f(x)\)이므로 해도 \(4\)마다 되풀이된다. 세 수열 \(\{a_{3n-2}\}\), \(\{a_{3n-1}\}\), \(\{a_{3n}\}\)은 첫째항이 각각 \(0\), \(1\), \(3\)이고 공차가 모두 \(4\)인 등차수열이다. 따라서 \(q=4\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 세 항을 구해 더한다</div>
    $$
    a_{20}=a_{3\times7-1}=1+6\times4=25,\qquad
    a_{21}=a_{3\times7}=3+6\times4=27,
    $$
    $$
    a_{22}=a_{3\times8-2}=0+7\times4=28,\qquad
    a_{20}+a_{21}+a_{22}=80.
    $$
    <p>따라서 \(r=80\)이고</p>
    $$
    p+q+r=1+4+80=85.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{85}\)</div>
` },

"2026_mock06/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 같은 것이 있는 순열의 수를 쓴다</div>
    <p>여섯 문자 \(a,a,a,a,b,c\) 중 \(a\)가 \(4\)개이므로</p>
    $$
    \frac{6!}{4!}=6\times5=30.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock06/prob_stat/q24": { answer: 4, html: String.raw`
  <div class="sol-box">배반이므로 \(\mathrm P(A\cup B)=\mathrm P(A)+\mathrm P(B)\)인데 이 값이 \(1\)이므로, 두 사건은 서로 여사건 관계가 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(A)\)를 구한다</div>
    <p>\(\mathrm P(A^{C})=2\mathrm P(A)\)에서 \(1-\mathrm P(A)=2\mathrm P(A)\)이므로</p>
    $$
    \mathrm P(A)=\frac13.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm P(B)\)를 구한다</div>
    <p>배반사건이므로 \(\mathrm P(A\cap B)=0\)이고 \(\mathrm P(A\cup B)=\mathrm P(A)+\mathrm P(B)=1\)이므로</p>
    $$
    \mathrm P(B)=1-\frac13=\frac23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock06/prob_stat/q25": { answer: 3, html: String.raw`
  <div class="sol-box">\((x+1)\)을 곱한다는 것은 \(x\)를 곱한 것과 그대로 둔 것을 더한다는 뜻이므로, \(x^3\)의 계수는 \((2x-1)^5\)의 \(x^2\)의 계수와 \(x^3\)의 계수를 더한 값이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 문제를 두 계수의 합으로 바꾼다</div>
    $$
    (2x-1)^5(x+1)=(2x-1)^5\times x+(2x-1)^5.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 일반항을 쓴다</div>
    $$
    {}_5\mathrm C_r(2x)^{5-r}(-1)^{r}={}_5\mathrm C_r2^{\,5-r}(-1)^{r}x^{\,5-r}.
    $$
    <p>\(x^2\)항은 \(r=3\), \(x^3\)항은 \(r=2\)일 때이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 두 계수를 더한다</div>
    $$
    {}_5\mathrm C_3\times2^{2}\times(-1)^3+{}_5\mathrm C_2\times2^{3}\times(-1)^2=-40+80=40.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock06/prob_stat/q26": { answer: 5, html: String.raw`
  <div class="sol-box">"곱이 짝수"의 여사건은 "곱이 홀수", 즉 양 끝이 둘 다 홀수인 경우뿐이라 세기가 훨씬 쉽다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 여사건을 센다</div>
    <p>양 끝에 놓인 두 수의 곱이 홀수이려면 홀수 \(1,3,5,7\)이 적힌 \(4\)장 중 \(2\)장을 골라 양 끝에 놓고, 나머지 \(5\)장을 가운데에 나열해야 한다.</p>
    $$
    \mathrm P(A^{C})=\frac{{}_4\mathrm P_2\times5!}{7!}=\frac{4\times3}{7\times6}=\frac27.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건의 확률을 뺀다</div>
    $$
    \mathrm P(A)=1-\frac27=\frac57.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock06/prob_stat/q27": { answer: 1, html: String.raw`
  <div class="sol-box">여학생을 적어도 몇 명 뽑느냐가 아니라, 남학생 수로 경우를 나누면 두 가지뿐이다. 뽑은 뒤 원탁에 앉히는 경우의 수는 어느 경우든 \((5-1)!\)로 같다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 뽑는 경우의 수를 센다</div>
    <p>남학생 \(4\)명, 여학생 \(1\)명을 뽑는 경우는</p>
    $$
    {}_5\mathrm C_4\times{}_3\mathrm C_1=5\times3=15,
    $$
    <p>남학생 \(5\)명을 뽑는 경우는 \({}_5\mathrm C_5=1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 원탁에 앉히는 경우의 수를 곱한다</div>
    <p>뽑힌 \(5\)명을 원 모양의 탁자에 앉히는 경우의 수는 \((5-1)!=24\)이므로</p>
    $$
    (15+1)\times24=384.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock06/prob_stat/q28": { answer: 5, html: String.raw`
  <div class="sol-box">\(\mathrm B\)에 들어가는 공은 \(3\)의 배수일 때 \(2\)개, 아닐 때 \(1\)개이므로 홀짝은 <b>\(3\)의 배수가 아닌 눈이 나온 횟수</b>만으로 정해진다. 그러면 사건이 세 경우로 좁혀진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 사건을 정한다</div>
    <p>\(3\)의 배수가 아닌 눈이 나온 횟수를 \(n\), \(3\)의 배수인 눈이 나온 횟수를 \(m\)이라 하면 \(m+n=5\)이고, 각 확률은 \(\dfrac23\), \(\dfrac13\)이다. 상자 \(\mathrm B\)의 공의 개수는 \(2m+n=10-n\)이므로, 이것이 홀수이려면 \(n\)이 홀수여야 한다.</p>
    $$
    n=1,\ 3,\ 5.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\mathrm P(X)\)를 구한다</div>
    $$
    \mathrm P(X)={}_5\mathrm C_1\left(\frac23\right)^{1}\left(\frac13\right)^{4}+{}_5\mathrm C_3\left(\frac23\right)^{3}\left(\frac13\right)^{2}+{}_5\mathrm C_5\left(\frac23\right)^{5}
    $$
    $$
    =\frac{10+80+32}{3^5}=\frac{122}{243}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\mathrm A\)와 \(\mathrm C\)의 합을 따진다</div>
    <p>\(\mathrm A\)에는 항상 \(1\)개씩 들어가므로 \(5\)개이고, \(\mathrm C\)에는 \(3\)의 배수가 아닐 때만 \(1\)개씩 들어가므로 \(n\)개이다. 합은 \(5+n\)이므로 \(8\) 이상이려면 \(n\ge3\)이고, \(n\)이 홀수이므로 \(n=3\) 또는 \(n=5\)이다.</p>
    $$
    \mathrm P(X\cap Y)={}_5\mathrm C_3\left(\frac23\right)^{3}\left(\frac13\right)^{2}+{}_5\mathrm C_5\left(\frac23\right)^{5}=\frac{80+32}{243}=\frac{112}{243}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 조건부확률을 구한다</div>
    $$
    \mathrm P(Y\,|\,X)=\frac{112}{122}=\frac{56}{61}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

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

"2026_mock09/common/q01": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(5\)로 통일한다</div>
    $$
    5^{\sqrt2+1}\times\left(\frac15\right)^{\sqrt2}=5^{\sqrt2+1}\times5^{-\sqrt2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 더한다</div>
    $$
    5^{(\sqrt2+1)-\sqrt2}=5^{1}=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock09/common/q02": { answer: 4, html: String.raw`
  <div class="sol-box">이 극한은 미분계수의 정의 그대로이므로 \(f'(4)\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한을 미분계수로 바꾼다</div>
    $$
    \lim_{h\to0}\frac{f(4+h)-f(4)}{h}=f'(4).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    <p>\(f'(x)=2x-4\)이므로</p>
    $$
    f'(4)=8-4=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock09/common/q03": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합의 기호를 나눈다</div>
    $$
    \sum_{k=1}^{6}(2a_k-1)=2\sum_{k=1}^{6}a_k-6=30.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 풀어 준다</div>
    $$
    2\sum_{k=1}^{6}a_k=36,\qquad \sum_{k=1}^{6}a_k=18.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock09/common/q04": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 그래프에서 두 극한을 읽는다</div>
    $$
    \lim_{x\to0-}f(x)=-1,\qquad \lim_{x\to1+}f(x)=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 더한다</div>
    $$
    (-1)+2=1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock09/common/q05": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 쓴다</div>
    $$
    f'(x)=2x\left(x^2+x-3\right)+\left(x^2+2\right)(2x+1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입한다</div>
    $$
    f'(1)=2\times(-1)+3\times3=-2+9=7.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock09/common/q06": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\cos\theta\)를 구한다</div>
    <p>\(\cos(\theta-\pi)=\cos(\pi-\theta)=-\cos\theta\)이므로</p>
    $$
    -\cos\theta=\frac35,\qquad \cos\theta=-\frac35.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사분면을 정한다</div>
    <p>\(\cos\theta&lt;0\)이고 조건에서 \(\tan\theta&lt;0\)이므로 \(\theta\)는 제2사분면의 각이고 \(\sin\theta&gt;0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\sin\theta\)를 구한다</div>
    $$
    \sin\theta=\sqrt{1-\frac9{25}}=\frac45.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock09/common/q07": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접선의 기울기를 구한다</div>
    <p>\(f(x)=x^3-5x^2+6x\)라 하면 \(f'(x)=3x^2-10x+6\)이므로</p>
    $$
    f'(3)=27-30+6=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 접선을 구한다</div>
    <p>점 \((3,\ 0)\)을 지나므로</p>
    $$
    y=3(x-3)=3x-9.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구한다</div>
    $$
    a=3\times5-9=6.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock09/common/q08": { answer: 3, html: String.raw`
  <div class="sol-box">두 조건이 각각 \(a^2b\)와 \(ab^2\)을 준다. 변끼리 곱하면 \((ab)^3\)이 되어 \(ab\)가 한 번에 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 첫 조건을 정리한다</div>
    <p>\(\log_{\sqrt2}a=2\log_2a\)이므로</p>
    $$
    2\log_2a+\log_2b=\log_2a^2b=2,\qquad a^2b=2^2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 둘째 조건을 정리한다</div>
    $$
    \log_2a+\log_2b^2=\log_2ab^2=7,\qquad ab^2=2^7.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 변끼리 곱한다</div>
    $$
    a^3b^3=2^{2+7}=2^9,\qquad (ab)^3=\left(2^3\right)^3.
    $$
    <p>\(a\), \(b\)가 양의 실수이므로 \(ab=2^3=8\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock09/common/q09": { answer: 2, html: String.raw`
  <div class="sol-box">\(G(x)-2F(x)\)를 하나의 함수로 묶으면 도함수가 상수 \(1\)이 되어, 그 함수가 일차함수라는 사실만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 차를 하나의 함수로 묶는다</div>
    <p>\(H(x)=G(x)-2F(x)\)라 하면 \(F'(x)=f(x)\), \(G'(x)=2f(x)+1\)이므로</p>
    $$
    H'(x)=\{2f(x)+1\}-2f(x)=1,\qquad H(x)=x+C.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 주어진 조건으로 \(C\)를 정한다</div>
    <p>\(G(3)=2F(3)\)이므로 \(H(3)=0\)이고</p>
    $$
    3+C=0,\qquad C=-3,\qquad H(x)=x-3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 답을 구한다</div>
    $$
    G(5)-2F(5)=H(5)=5-3=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock09/common/q10": { answer: 3, html: String.raw`
  <div class="sol-box">\(-S_k+S_{k+1}=a_{k+1}\)이므로 부호가 번갈아 붙은 합은 두 개씩 묶으면 짝수째 항의 합이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 개씩 묶는다</div>
    $$
    \sum_{k=1}^{6}(-1)^{k}S_k=(-S_1+S_2)+(-S_3+S_4)+(-S_5+S_6)=a_2+a_4+a_6=21.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 공비를 구한다</div>
    <p>모든 항이 양수이므로 공비 \(r&gt;0\)이고, \(a_2=1\)이므로</p>
    $$
    1+r^2+r^4=21,\qquad \left(r^2+5\right)\left(r^2-4\right)=0.
    $$
    <p>\(r&gt;0\)이므로 \(r=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 합을 구한다</div>
    <p>\(a_1r=1\)에서 \(a_1=\dfrac12\)이므로</p>
    $$
    S_2+S_7=\frac{\frac12\left(2^2-1\right)}{2-1}+\frac{\frac12\left(2^7-1\right)}{2-1}=\frac32+\frac{127}{2}=65.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock09/common/q11": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> ㄱ을 확인한다</div>
    $$
    v(t)=3t^2-10t+7=(t-1)(3t-7)=0,\qquad t=1\ \text{또는}\ t=\frac73.
    $$
    <p>\(0&lt;t&lt;1\)에서 \(v&gt;0\), \(1&lt;t&lt;\dfrac73\)에서 \(v&lt;0\)이므로 \(t=1\)에서 운동 방향이 바뀐다. ㄱ은 참이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄴ을 확인한다</div>
    <p>원점에서 출발했으므로 위치는 속도의 정적분이다.</p>
    $$
    x(1)=\int_0^{1}\left(3t^2-10t+7\right)dt=\Big[t^3-5t^2+7t\Big]_0^{1}=1-5+7=3.
    $$
    <p>ㄴ도 참이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄷ을 확인한다</div>
    <p>움직인 거리는 속도의 절댓값을 적분한 것이고, \(t=1\)에서 부호가 바뀌므로 구간을 나눈다.</p>
    $$
    s=\int_0^{1}v\,dt-\int_1^{2}v\,dt=3-\{(8-20+14)-3\}=3-(-1)=4.
    $$
    <p>ㄷ도 참이므로 옳은 것은 ㄱ, ㄴ, ㄷ이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock09/common/q12": { answer: 1, html: String.raw`
  <div class="sol-box">이등변삼각형이므로 \(\mathrm A\)에서 내린 수선의 발이 \(\overline{\mathrm{BC}}\)의 중점이다. 그 조건이 \(a^{t}=2\)를 바로 준다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 중점 조건에서 \(a^{t}\)를 구한다</div>
    <p>\(\mathrm A(t,\ a^{t})\), \(\mathrm B(2t,\ a^{2t})\), \(\mathrm C(2t,\ 0)\)이고 \(\overline{\mathrm{AB}}=\overline{\mathrm{AC}}\)이므로, \(\mathrm A\)에서 \(\overline{\mathrm{BC}}\)에 내린 수선의 발 \(\mathrm H\)는 \(\overline{\mathrm{BC}}\)의 중점이다. \(\mathrm H\left(2t,\ a^{t}\right)\)이므로</p>
    $$
    2a^{t}=a^{2t},\qquad a^{t}=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 넓이 조건에서 \(t\)를 구한다</div>
    <p>밑변 \(\overline{\mathrm{BC}}=a^{2t}\), 높이 \(2t-t=t\)이므로</p>
    $$
    \frac12\times t\times a^{2t}=8,\qquad t\times\left(a^{t}\right)^2=16,\qquad t\times4=16,\qquad t=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구해 곱한다</div>
    <p>\(a^4=2\)이고 \(a&gt;1\)이므로 \(a=2^{\frac14}\)이고</p>
    $$
    a\times t=2^{\frac14}\times4=2^{\frac14+2}=2^{\frac94}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock09/common/q13": { answer: 4, html: String.raw`
  <div class="sol-box">\(f(x)=(x+3)^2+3&gt;0\)이므로 분자 \(x^2\)이 \(0\)이 되는 곳은 \(x=0\)뿐이다. 극한이 존재하려면 분모가 아예 \(0\)이 되지 않거나, \(0\)이 되더라도 그 지점이 \(x=0\)이어야 한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분모를 인수분해한다</div>
    $$
    \{f(x)\}^2-k(x+2)f(x)=f(x)\{f(x)-k(x+2)\}.
    $$
    <p>\(f(x)&gt;0\)이므로 분모가 \(0\)이 되는 것은 \(f(x)=k(x+2)\)일 때뿐이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 분모가 \(0\)이 되지 않는 경우</div>
    <p>\(x^2+6x+12=kx+2k\), 즉 \(x^2+(6-k)x+12-2k=0\)이 실근을 갖지 않으면 된다.</p>
    $$
    D=(6-k)^2-4(12-2k)=k^2-4k-12=(k+2)(k-6)&lt;0,\qquad -2&lt;k&lt;6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 분모가 \(0\)이 되는 경우</div>
    <p>어떤 \(a\)에서 분모가 \(0\)이면 분자도 \(0\)이어야 하므로 \(a=0\)이고</p>
    $$
    f(0)\{f(0)-2k\}=0,\qquad f(0)=12=2k,\qquad k=6.
    $$
    <p>이때 분모는 \(f(x)\{f(x)-6x-12\}=\left(x^2+6x+12\right)x^2\)이므로</p>
    $$
    \lim_{x\to0}\frac{x^2}{\left(x^2+6x+12\right)x^2}=\frac1{12}
    $$
    <p>로 극한이 존재한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 정수의 개수를 센다</div>
    <p>합치면 \(-2&lt;k\le6\)이므로 정수 \(k\)는 \(-1,0,1,\dots,6\)의 \(8\)개이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock09/common/q14": { answer: 3, html: String.raw`
  <div class="sol-box">\(\mathrm A\)와 \(\mathrm B\)는 이웃한 두 가지 위의 같은 높이의 점이므로 \(\overline{\mathrm{AB}}\)는 정확히 주기 \(k\pi\)이다. 그러면 \(\overline{\mathrm{PA}}\)가 \(\dfrac{k\pi}{3}\)로 정해져 \(p\)가 바로 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(p\)를 구한다</div>
    <p>\(f(x)=\tan\dfrac xk\)의 주기는 \(k\pi\)이고 \(\mathrm A\), \(\mathrm B\)는 이웃한 두 가지 위의 같은 높이의 점이므로 \(\overline{\mathrm{AB}}=k\pi\)이다. \(\overline{\mathrm{AB}}=3\overline{\mathrm{PA}}\)이므로 \(\overline{\mathrm{PA}}=\dfrac{k\pi}{3}\)이고, \(\mathrm P(0,\ p)\)이므로 \(\mathrm A\)의 \(x\)좌표는 \(\dfrac{k\pi}{3}\)이다.</p>
    $$
    p=\tan\left(\frac1k\times\frac{k\pi}{3}\right)=\tan\frac\pi3=\sqrt3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 삼각형 \(\mathrm{OCB}\)를 두 조각으로 나눈다</div>
    <p>\(y=f(x)\)의 그래프가 \(x\)축과 만나는 점 중 원점이 아닌 점을 \(\mathrm D\)라 하면 \(\overline{\mathrm{OD}}=k\pi\)이다. 그래프가 \(\mathrm D\)에 대하여 대칭이므로 \(\mathrm D\)는 \(\overline{\mathrm{BC}}\)의 중점이고, 따라서 \(\overline{\mathrm{OD}}\)가 삼각형 \(\mathrm{OCB}\)를 두 조각으로 나눈다.</p>
    $$
    \frac12\times\overline{\mathrm{OD}}\times p+\frac12\times\overline{\mathrm{OD}}\times p=\overline{\mathrm{OD}}\times p=\sqrt3\,k\pi.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(k\)를 구해 더한다</div>
    $$
    \sqrt3\,k\pi=\frac{5\pi}{3},\qquad k=\frac{5}{3\sqrt3}=\frac{5\sqrt3}{9},
    $$
    $$
    k+p=\frac{5\sqrt3}{9}+\sqrt3=\frac{14\sqrt3}{9}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock09/common/q16": { answer: 8, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 차례로 대입한다</div>
    <p>\(a_1=1\)이고 \(a_{n+1}=na_n+2\)이므로</p>
    $$
    a_2=1\times1+2=3,\qquad a_3=2\times3+2=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{8}\)</div>
` },

"2026_mock09/common/q17": { answer: 17, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int\left(3x^2+2x+1\right)dx=x^3+x^2+x+C.
    $$
    <p>\(f(1)=1+1+1+C=6\)이므로 \(C=3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    f(2)=8+4+2+3=17.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{17}\)</div>
` },

"2026_mock09/common/q18": { answer: 30, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 조건을 \(a_1\), \(d\)로 쓴다</div>
    $$
    a_3=a_1+2d=6,
    $$
    $$
    2a_5-a_4=2(a_1+4d)-(a_1+3d)=a_1+5d=15.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 연립한다</div>
    <p>두 식을 빼면 \(3d=9\)에서 \(d=3\)이고, \(a_1+6=6\)에서 \(a_1=0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_{11}\)을 구한다</div>
    $$
    a_{11}=0+10\times3=30.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{30}\)</div>
` },

"2026_mock09/common/q19": { answer: 10, html: String.raw`
  <div class="sol-box">극솟값이 존재하려면 \(f'(x)=6x(x-a)\)의 두 근이 서로 달라야 하므로 \(a\ne0\)이다. \(a\)의 부호에 따라 극소가 되는 지점이 갈린다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 도함수를 구한다</div>
    $$
    f'(x)=6x^2-6ax=6x(x-a).
    $$
    <p>극솟값을 가지므로 \(a\ne0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a&lt;0\)인 경우</div>
    <p>이때 극소가 되는 곳은 \(x=0\)이므로 \(f(0)=5a=a\)에서 \(a=0\)이 되어 \(a&lt;0\)에 모순이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a&gt;0\)인 경우</div>
    <p>극소가 되는 곳은 \(x=a\)이므로</p>
    $$
    f(a)=2a^3-3a^3+5a=-a^3+5a=a,\qquad a^3-4a=a(a+2)(a-2)=0.
    $$
    <p>\(a&gt;0\)이므로 \(a=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 극댓값을 구한다</div>
    <p>\(f(x)=2x^3-6x^2+10\)이고 \(x=0\)에서 극대이므로</p>
    $$
    f(0)=10.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{10}\)</div>
` },

"2026_mock09/common/q20": { answer: 12, html: String.raw`
  <div class="sol-box">원에 내접하는 사각형에서 두 변의 연장선이 만나면, 생기는 두 삼각형이 닮음이다. 여기서는 \(\triangle\mathrm{BPC}\backsim\triangle\mathrm{DPA}\)가 그 관계다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 닮음에서 \(l\)을 \(k\)로 나타낸다</div>
    <p>\(\overline{\mathrm{PB}}=7k\), \(\overline{\mathrm{PC}}=5k\), \(\overline{\mathrm{AB}}=l\), \(\overline{\mathrm{CD}}=3l\)이라 하면</p>
    $$
    \overline{\mathrm{PD}}=\overline{\mathrm{PC}}+\overline{\mathrm{CD}}=5k+3l,\qquad
    \overline{\mathrm{PA}}=\overline{\mathrm{PB}}+\overline{\mathrm{AB}}=7k+l.
    $$
    <p>닮음에서 \(\overline{\mathrm{PB}}:\overline{\mathrm{PC}}=\overline{\mathrm{PD}}:\overline{\mathrm{PA}}\)이므로</p>
    $$
    7(7k+l)=5(5k+3l),\qquad 49k+7l=25k+15l,\qquad l=3k.
    $$
    <p>따라서 \(p=3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 닮음비를 구한다</div>
    $$
    \overline{\mathrm{PD}}=5k+9k=14k,\qquad \overline{\mathrm{PB}}:\overline{\mathrm{PD}}=7k:14k=1:2.
    $$
    <p>즉 닮음비가 \(1:2\)이므로 \(\overline{\mathrm{BC}}=\dfrac12\overline{\mathrm{AD}}\)이고 \(q=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 외접원의 반지름을 구한다</div>
    <p>\(\cos\theta=\dfrac67\)이므로 \(\sin\theta=\sqrt{1-\dfrac{36}{49}}=\dfrac{\sqrt{13}}{7}\)이고, \(\overline{\mathrm{BC}}=\dfrac12\times4\sqrt{13}=2\sqrt{13}\)이므로</p>
    $$
    R=\frac{\overline{\mathrm{BC}}}{2\sin\theta}=\frac{2\sqrt{13}}{2\times\frac{\sqrt{13}}{7}}=7.
    $$
    <p>따라서 \(r=7\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 더한다</div>
    $$
    p+q+r=3+2+7=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{12}\)</div>
` },

"2026_mock09/prob_stat/q23": { answer: 4, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 중복순열의 수를 쓴다</div>
    <p>세 문자에서 중복을 허락하여 \(4\)개를 택해 일렬로 나열하므로</p>
    $$
    {}_3\Pi_4=3^4=81.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock09/prob_stat/q24": { answer: 3, html: String.raw`
  <div class="sol-box">\(A\cup B\)에서 \(A^{C}\cap B\)를 빼면 정확히 \(A\)가 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(A)\)를 구한다</div>
    $$
    \mathrm P(A)=\mathrm P(A\cup B)-\mathrm P(A^{C}\cap B)=\frac56-\frac14=\frac7{12}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건의 확률을 구한다</div>
    $$
    \mathrm P(A^{C})=1-\frac7{12}=\frac5{12}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_mock09/prob_stat/q25": { answer: 5, html: String.raw`
  <div class="sol-box">\(1\)학년이 \(1\)명뿐이므로 \(5\)명을 뽑을 때 \(2\)학년과 \(3\)학년 수가 같으려면 \(1+2+2\)로 갈릴 수밖에 없다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 구한다</div>
    $$
    {}_8\mathrm C_5={}_8\mathrm C_3=56.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건을 만족시키는 경우를 센다</div>
    <p>\(2\)학년과 \(3\)학년을 \(k\)명씩 뽑으면 \(2k\le5\)이고 \(1\)학년은 최대 \(1\)명이므로 \(2k=4\), 즉 \(k=2\)이고 \(1\)학년 \(1\)명을 뽑아야 한다.</p>
    $$
    1\times{}_3\mathrm C_2\times{}_4\mathrm C_2=1\times3\times6=18.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 확률을 구한다</div>
    $$
    \frac{18}{56}=\frac9{28}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_mock09/prob_stat/q26": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 신뢰구간의 폭을 쓴다</div>
    <p>신뢰구간이 \(\overline x-c\le m\le\overline x+c\)이므로</p>
    $$
    c=1.96\times\frac{2\sqrt2}{\sqrt{128}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 계산한다</div>
    <p>\(\sqrt{128}=8\sqrt2\)이므로</p>
    $$
    c=1.96\times\frac{2\sqrt2}{8\sqrt2}=1.96\times\frac14=0.49.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock09/prob_stat/q27": { answer: 4, html: String.raw`
  <div class="sol-box">각 면의 수는 \(1,2,2,3\)이므로 한 상자에서 \(2\)가 나올 확률만 \(\dfrac24\)이고 나머지는 \(\dfrac14\)이다. 두 수의 차는 \(0\), \(1\), \(2\) 중 하나다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 확률분포를 구한다</div>
    <p>두 수가 같을 때 \(X=0\)이므로</p>
    $$
    \mathrm P(X=0)=\frac14\times\frac14+\frac24\times\frac24+\frac14\times\frac14=\frac6{16}.
    $$
    <p>두 수가 \(\{1,2\}\) 또는 \(\{2,3\}\)일 때 \(X=1\)이므로</p>
    $$
    \mathrm P(X=1)=2\times\frac14\times\frac24+2\times\frac24\times\frac14=\frac8{16}.
    $$
    <p>두 수가 \(\{1,3\}\)일 때 \(X=2\)이므로</p>
    $$
    \mathrm P(X=2)=2\times\frac14\times\frac14=\frac2{16}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 평균과 \(\mathrm E(X^2)\)을 구한다</div>
    $$
    \mathrm E(X)=\frac{0\times6+1\times8+2\times2}{16}=\frac{12}{16}=\frac34,
    $$
    $$
    \mathrm E(X^2)=\frac{0\times6+1\times8+4\times2}{16}=\frac{16}{16}=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 분산을 구한다</div>
    $$
    \mathrm V(X)=1-\left(\frac34\right)^2=\frac7{16}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock09/prob_stat/q28": { answer: 2, html: String.raw`
  <div class="sol-box">같은 색 카드는 구별하지 않으므로 색깔별로 따로 세어 곱하면 된다. 두 조건은 모두 "빼는" 조건이므로, 전체에서 (가)를 어기는 경우를 빼고 다시 (나)를 어기는 경우를 빼면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 없이 나누는 경우를 센다</div>
    <p>빨간색·파란색은 각각 \({}_3\mathrm C_1=3\)가지, 노란색·보라색은 각각 \({}_3\mathrm H_3={}_5\mathrm C_2=10\)가지이므로</p>
    $$
    3\times3\times10\times10=900.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 조건 (가)를 만족시키는 경우를 센다</div>
    <p>\(\mathrm A\)가 한 장도 못 받는 경우는 두 학생에게만 나누는 경우이므로 \(2\times2\times{}_2\mathrm H_3\times{}_2\mathrm H_3=2\times2\times4\times4=64\)가지이고, \(\mathrm B\)도 마찬가지로 \(64\)가지이다. 둘 다 못 받는 경우는 \(\mathrm C\)에게 몰아주는 \(1\)가지이므로</p>
    $$
    900-(64+64-1)=773.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건 (나)를 어기는 경우를 센다</div>
    <p>\(\mathrm A\)가 네 색을 모두 받으면, 빨강·파랑은 \(\mathrm A\)의 몫이고 노랑·보라도 한 장씩 \(\mathrm A\)에게 간다. 남은 노랑 \(2\)장과 보라 \(2\)장을 세 학생에게 나누는 경우는</p>
    $$
    {}_3\mathrm H_2\times{}_3\mathrm H_2=6\times6=36.
    $$
    <p>이 중 \(\mathrm B\)가 한 장도 못 받는 경우는 남은 카드를 \(\mathrm A\), \(\mathrm C\)에게만 나누는 \({}_2\mathrm H_2\times{}_2\mathrm H_2=3\times3=9\)가지이므로, 조건 (가)를 지키면서 (나)를 어기는 경우는 \(36-9=27\)가지이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 빼서 구한다</div>
    $$
    773-27=746.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock09/calculus/q23": { answer: 1, html: String.raw`
  <div class="sol-box">\(e^{x}-e=f(x)-f(1)\) 꼴이므로 이 극한은 \(f(x)=e^{x}\)의 \(x=1\)에서의 미분계수이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 미분계수의 정의로 본다</div>
    $$
    \lim_{x\to1}\frac{e^{x}-e}{x-1}=\lim_{x\to1}\frac{f(x)-f(1)}{x-1}=f'(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 값을 구한다</div>
    <p>\(f'(x)=e^{x}\)이므로 \(f'(1)=e\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock09/calculus/q24": { answer: 4, html: String.raw`
  <div class="sol-box">\(\cos\left(x-\dfrac\pi4\right)\)이 \(\sin\left(x-\dfrac\pi4\right)\)의 도함수이므로, 지수의 내용을 통째로 새 문자로 놓으면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 치환한다</div>
    <p>\(\sin\left(x-\dfrac\pi4\right)=t\)로 놓으면 \(\dfrac{dt}{dx}=\cos\left(x-\dfrac\pi4\right)\)이고, \(x=\dfrac\pi4\)일 때 \(t=0\), \(x=\dfrac{3\pi}{4}\)일 때 \(t=1\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 계산한다</div>
    $$
    \int_{\frac\pi4}^{\frac{3\pi}{4}}\cos\left(x-\frac\pi4\right)e^{\sin\left(x-\frac\pi4\right)}dx=\int_0^{1}e^{t}\,dt=\Big[e^{t}\Big]_0^{1}=e-1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_mock09/calculus/q25": { answer: 2, html: String.raw`
  <div class="sol-box">분모를 유리화하면 \(3n\)이 되어 전체가 \(\dfrac{an^{b}\times(\text{2차})}{3n}\) 꼴이 된다. 그러면 \(b\)의 값에 따라 발산·수렴이 갈린다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분모를 유리화한다</div>
    $$
    \left(\sqrt{n^4+4n}-\sqrt{n^4+n}\right)\left(\sqrt{n^4+4n}+\sqrt{n^4+n}\right)=3n
    $$
    <p>이므로 주어진 극한은</p>
    $$
    \lim_{n\to\infty}\frac{an^{b}\left(\sqrt{n^4+4n}+\sqrt{n^4+n}\right)}{3n}=6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 차수를 맞춘다</div>
    <p>괄호 안은 \(n^2\) 규모이므로 분수 전체는 \(n^{\,b+1}\) 규모이다. \(b&gt;-1\)이면 발산하고, \(b&lt;-1\)이면 \(0\)으로 가므로 \(b=-1\)이어야 한다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구한다</div>
    $$
    \lim_{n\to\infty}\frac{a\left(\sqrt{n^4+4n}+\sqrt{n^4+n}\right)}{3n^2}
    =\lim_{n\to\infty}\frac{a\left(\sqrt{1+\frac4{n^3}}+\sqrt{1+\frac1{n^3}}\right)}{3}=\frac{2a}{3}=6,
    $$
    <p>따라서 \(a=9\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 더한다</div>
    $$
    a+b=9+(-1)=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_mock09/calculus/q26": { answer: 1, html: String.raw`
  <div class="sol-box">사다리꼴에서 곡선 아래 부분을 빼는 쪽이 계산이 짧다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 교점을 구한다</div>
    <p>\(\dfrac3{x-1}=1\)에서 \(x=4\)이므로 \(\mathrm A(4,\ 1)\), \(\dfrac3{x-1}=3\)에서 \(x=2\)이므로 \(\mathrm B(2,\ 3)\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사다리꼴의 넓이를 구한다</div>
    <p>두 점에서 \(x\)축에 내린 수선의 발을 각각 \(\mathrm C\), \(\mathrm D\)라 하면 사각형 \(\mathrm{ABDC}\)는 윗변 \(3\), 아랫변 \(1\), 높이 \(2\)인 사다리꼴이므로</p>
    $$
    \frac12\times(1+3)\times2=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 곡선 아래 부분을 뺀다</div>
    $$
    4-\int_2^{4}\frac3{x-1}\,dx=4-\Big[3\ln|x-1|\Big]_2^{4}=4-3\ln3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_mock09/calculus/q27": { answer: 1, html: String.raw`
  <div class="sol-box">\(g\)가 \(f(x^3+x)\)의 역함수이므로 \(g\left(f(x^3+x)\right)=x\)가 항등식이다. 여기에 \(x=1\)을 넣으면 \(g(1)\)이, 양변을 미분한 뒤 \(x=1\)을 넣으면 \(g'(1)\)에 대한 이차방정식이 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(g(1)\)을 구한다</div>
    <p>\(x^3+x=2\)에서 \(x^3+x-2=(x-1)\left(x^2+x+2\right)=0\)이고 \(x^2+x+2=\left(x+\dfrac12\right)^2+\dfrac74&gt;0\)이므로 \(x=1\)이다. 항등식 \(g\left(f(x^3+x)\right)=x\)에 \(x=1\)을 넣으면 \(g(f(2))=1\)이고 \(f(2)=1\)이므로</p>
    $$
    g(1)=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 항등식을 미분한다</div>
    $$
    g'\left(f(x^3+x)\right)\times f'(x^3+x)\times\left(3x^2+1\right)=1.
    $$
    <p>\(x=1\)을 넣으면 \(g'(1)\times f'(2)\times4=1\)이므로</p>
    $$
    4g'(1)f'(2)=1.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(g'(1)\)에 대한 방정식을 푼다</div>
    <p>\(f'(2)=8g'(1)-1\)을 대입하면</p>
    $$
    4g'(1)\{8g'(1)-1\}=1,\qquad 32\{g'(1)\}^2-4g'(1)-1=0,
    $$
    $$
    \{4g'(1)-1\}\{8g'(1)+1\}=0,\qquad g'(1)=\frac14\ \text{또는}\ g'(1)=-\frac18.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 조건 \(f'(x)&gt;0\)으로 고른다</div>
    <p>\(g'(1)=-\dfrac18\)이면 \(f'(2)=-2&lt;0\)이 되어 조건에 어긋난다. \(g'(1)=\dfrac14\)이면 \(f'(2)=1&gt;0\)이므로 이쪽이다.</p>
    $$
    g(1)+g'(1)=1+\frac14=\frac54.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_csat/common/q01": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 \(3\)으로 통일한다</div>
    $$
    9^{\frac14}\times3^{-\frac12}=\left(3^{2}\right)^{\frac14}\times3^{-\frac12}=3^{\frac12}\times3^{-\frac12}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 더한다</div>
    $$
    3^{\frac12-\frac12}=3^{0}=1.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_csat/common/q02": { answer: 4, html: String.raw`
  <div class="sol-box">이 극한은 미분계수의 정의 그대로이므로 \(f'(1)\)이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극한을 미분계수로 바꾼다</div>
    $$
    \lim_{h\to0}\frac{f(1+h)-f(1)}{h}=f'(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    <p>\(f'(x)=9x^2+4\)이므로</p>
    $$
    f'(1)=9+4=13.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_csat/common/q03": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 합의 기호를 나눈다</div>
    $$
    \sum_{k=1}^{4}(2a_k-k)=2\sum_{k=1}^{4}a_k-\frac{4\times5}{2}=2\sum_{k=1}^{4}a_k-10=0.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 풀어 준다</div>
    $$
    2\sum_{k=1}^{4}a_k=10,\qquad \sum_{k=1}^{4}a_k=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_csat/common/q04": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 이어붙인 점에서 좌우를 맞춘다</div>
    $$
    \lim_{x\to1-}(3x-2)=1,\qquad \lim_{x\to1+}\left(x^2-3x+a\right)=-2+a=f(1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(a\)를 구한다</div>
    $$
    1=-2+a,\qquad a=3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_csat/common/q05": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 곱의 미분법을 쓴다</div>
    $$
    f'(x)=\left(2x^2-x-2\right)+(x+2)(4x-1).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=1\)을 대입한다</div>
    $$
    f'(1)=(2-1-2)+3\times3=-1+9=8.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_csat/common/q06": { answer: 2, html: String.raw`
  <div class="sol-box">\(b=a^3\)이므로 모든 로그를 \(\log_3a\) 하나로 바꿀 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\log_3a\)를 구한다</div>
    <p>\(\log_ab=3\)에서 \(b=a^3\)이므로</p>
    $$
    \log_3\frac ba=\log_3a^2=2\log_3a=\frac12,\qquad \log_3a=\frac14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 구하는 값을 정리한다</div>
    $$
    \log_9ab=\log_{3^2}a^4=\frac42\log_3a=2\times\frac14=\frac12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_csat/common/q07": { answer: 5, html: String.raw`
  <div class="sol-box">두 곡선은 \(x=0\)에서만 만나고 상수항이 같으므로, 차를 만들면 \(x^2\)항만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 위아래를 가린다</div>
    <p>모든 실수 \(x\)에서 \(x^2+3\ge-\dfrac15x^2+3\)이므로 \(y=x^2+3\)이 위에 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 차를 적분한다</div>
    $$
    \int_0^{2}\left\{\left(x^2+3\right)-\left(-\frac15x^2+3\right)\right\}dx=\int_0^{2}\frac65x^2\,dx=\left[\frac25x^3\right]_0^{2}=\frac{16}{5}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_csat/common/q08": { answer: 1, html: String.raw`
  <div class="sol-box">\(\sin\theta=-3\cos\theta\)를 제곱해 \(\sin^2\theta+\cos^2\theta=1\)에 넣으면 \(\sin\theta\)만 남는다. 부호는 \(\cos(\pi-\theta)&gt;0\)에서 결정된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부호를 정한다</div>
    <p>\(\cos(\pi-\theta)=-\cos\theta&gt;0\)이므로 \(\cos\theta&lt;0\)이고, \(\sin\theta=-3\cos\theta&gt;0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 제곱하여 \(\sin\theta\)만 남긴다</div>
    $$
    \sin^2\theta=9\cos^2\theta=9\left(1-\sin^2\theta\right),\qquad 10\sin^2\theta=9,\qquad \sin^2\theta=\frac9{10}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부호를 붙인다</div>
    $$
    \sin\theta=\frac3{\sqrt{10}}=\frac{3\sqrt{10}}{10}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_csat/common/q09": { answer: 4, html: String.raw`
  <div class="sol-box">\(x\)축에 평행한 직선이 삼차함수의 그래프에 접하는 곳은 극값을 갖는 지점이다. \(f(0)=4&lt;5\)이므로 접하는 쪽은 극댓값이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극값을 갖는 \(x\)를 구한다</div>
    $$
    f'(x)=3x^2+6ax-9a^2=3(x+3a)(x-a)=0,\qquad x=-3a\ \text{또는}\ x=a.
    $$
    <p>\(a&gt;0\)이므로 \(x=-3a\)에서 극대, \(x=a\)에서 극소이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 접하는 조건을 쓴다</div>
    <p>\(f(0)=4&lt;5\)이므로 직선 \(y=5\)는 극댓값과 같아야 한다.</p>
    $$
    f(-3a)=-27a^3+27a^3+27a^3+4=27a^3+4=5,\qquad a^3=\frac1{27},\qquad a=\frac13.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(f(2)\)를 구한다</div>
    <p>\(f(x)=x^3+x^2-x+4\)이므로</p>
    $$
    f(2)=8+4-2+4=14.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_csat/common/q10": { answer: 3, html: String.raw`
  <div class="sol-box">\(y=a^{x}-2\)의 점근선이 \(y=-2\)이므로 \(\overline{\mathrm{BC}}=2\)이고, \(\overline{\mathrm{AB}}=\overline{\mathrm{BC}}\)에서 \(\mathrm A\)의 \(y\)좌표가 바로 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm A\)의 좌표를 잡는다</div>
    <p>\(\mathrm A(p,\ q)\)라 하면 \(\overline{\mathrm{BC}}=2\)이고 \(\overline{\mathrm{AB}}=\overline{\mathrm{BC}}\)이므로 \(q=2\)이다. \(\mathrm A\)가 곡선 위의 점이므로</p>
    $$
    2=a^{p}-2,\qquad a^{p}=4,\qquad p=\log_a4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 넓이 조건에서 \(p\)를 구한다</div>
    <p>\(\overline{\mathrm{AC}}=\overline{\mathrm{AB}}+\overline{\mathrm{BC}}=4\)이고 이것을 밑변으로 보면 높이가 \(\overline{\mathrm{OB}}=p\)이므로</p>
    $$
    \frac12\times4\times p=8,\qquad p=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)를 구해 곱한다</div>
    <p>\(\log_a4=4\)에서 \(a^4=4\)이고 \(a&gt;1\)이므로 \(a=\sqrt2\)이다.</p>
    $$
    a\times\overline{\mathrm{OB}}=\sqrt2\times4=2^{\frac12+2}=2^{\frac52}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_csat/common/q11": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> ㄱ을 확인한다</div>
    <p>\(k=0\)이면 \(v(t)=t^2+4\)이고 원점에서 출발했으므로</p>
    $$
    \int_0^{1}\left(t^2+4\right)dt=\left[\frac13t^3+4t\right]_0^{1}=\frac13+4=\frac{13}{3}.
    $$
    <p>ㄱ은 참이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄴ을 확인한다</div>
    <p>\(k=3\)이면 \(v(t)=t^2-3t+4=\left(t-\dfrac32\right)^2+\dfrac74&gt;0\)이므로 속도의 부호가 바뀌지 않는다. 즉 운동 방향이 바뀌지 않으므로 ㄴ은 거짓이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄷ을 확인한다</div>
    <p>\(k=5\)이면 \(v(t)=(t-1)(t-4)\)이므로 \(0&lt;t&lt;1\)에서 \(v&gt;0\), \(1&lt;t&lt;2\)에서 \(v&lt;0\)이다. 구간을 나누어 절댓값을 적분하면</p>
    $$
    s=\int_0^{1}v\,dt-\int_1^{2}v\,dt=\left(\frac13-\frac52+4\right)-\left\{\left(\frac83-10+8\right)-\left(\frac13-\frac52+4\right)\right\}=3.
    $$
    <p>ㄷ은 참이므로 옳은 것은 ㄱ, ㄷ이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_csat/common/q12": { answer: 2, html: String.raw`
  <div class="sol-box">두 조건의 좌변은 첨자가 정확히 \(3\)씩 밀린 같은 꼴이므로, 나누면 \(r^3\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 조건을 정리한다</div>
    $$
    2\left(a_1+a_4+a_7\right)=2a_1\left(1+r^3+r^6\right)=6,\qquad a_1\left(1+r^3+r^6\right)=3,
    $$
    $$
    a_4+a_7+a_{10}=a_1r^3\left(1+r^3+r^6\right)=6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 나누어 \(r\)를 구한다</div>
    <p>뒤 식을 앞 식으로 나누면 \(r^3=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a_1\)과 \(a_{10}\)을 구한다</div>
    $$
    a_1(1+2+4)=3,\qquad a_1=\frac37,
    $$
    $$
    a_{10}=a_1r^9=\frac37\times2^3=\frac{24}{7}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_csat/common/q13": { answer: 5, html: String.raw`
  <div class="sol-box">두 접선과 \(y\)축이 만드는 삼각형이므로, \(y\)축 위의 두 절편과 두 직선의 교점만 구하면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접선 \(l\)을 구한다</div>
    <p>\(f'(x)=2x-4\)이므로 \(f'(1)=-2\)이고, 점 \((1,\ -6)\)을 지나므로</p>
    $$
    l:\ y=-2(x-1)-6=-2x-4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 접선 \(m\)을 구한다</div>
    <p>\(g(x)=\left(x^3-2x\right)f(x)\)이므로 곱의 미분법에 의하여</p>
    $$
    g'(x)=\left(3x^2-2\right)f(x)+\left(x^3-2x\right)f'(x),
    $$
    $$
    g'(1)=1\times(-6)+(-1)\times(-2)=-4.
    $$
    <p>\(g(1)=(1-2)\times(-6)=6\)이므로</p>
    $$
    m:\ y=-4(x-1)+6=-4x+10.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 넓이를 구한다</div>
    <p>두 직선의 교점은 \(-2x-4=-4x+10\)에서 \(x=7\)이고, \(y\)절편은 각각 \(-4\), \(10\)이므로 밑변의 길이가 \(10-(-4)=14\), 높이가 \(7\)이다.</p>
    $$
    \frac12\times14\times7=49.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_csat/common/q14": { answer: 4, html: String.raw`
  <div class="sol-box">\(\overline{\mathrm{AD}}=\overline{\mathrm{AE}}=\overline{\mathrm{AG}}=2\)라는 것이 열쇠다. 작은 원의 반지름이 모두 같으므로 코사인법칙을 두 번 쓰면 \(\overline{\mathrm{GE}}\)가 나오고, 그다음 큰 원에서 사인법칙을 두 번 쓰면 \(\overline{\mathrm{GH}}\)가 나온다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sin(\angle\mathrm{BAC})\)를 구한다</div>
    <p>직각삼각형 \(\mathrm{ABC}\)에서 \(\overline{\mathrm{AC}}=\sqrt{3^2+4^2}=5\)이므로, \(\theta_1=\angle\mathrm{BAC}\)라 하면</p>
    $$
    \sin\theta_1=\frac{\overline{\mathrm{BC}}}{\overline{\mathrm{AC}}}=\frac45.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 삼각형 \(\mathrm{ACG}\)에서 \(\cos(\angle\mathrm{CAG})\)를 구한다</div>
    <p>\(\overline{\mathrm{AD}}=\dfrac23\times3=2\)이고 \(\mathrm E\), \(\mathrm G\)도 원 위의 점이므로 \(\overline{\mathrm{AE}}=\overline{\mathrm{AG}}=2\)이다. \(\theta_2=\angle\mathrm{CAG}\)라 하면</p>
    $$
    \cos\theta_2=\frac{2^2+5^2-\left(2\sqrt6\right)^2}{2\times2\times5}=\frac{4+25-24}{20}=\frac14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(\overline{\mathrm{GE}}\)를 구한다</div>
    <p>삼각형 \(\mathrm{AEG}\)는 두 변이 \(2\)이고 낀각이 \(\theta_2\)이므로</p>
    $$
    \overline{\mathrm{GE}}^{\,2}=4+4-2\times2\times2\times\frac14=6,\qquad \overline{\mathrm{GE}}=\sqrt6.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 큰 원의 반지름을 구한다</div>
    <p>\(\theta_3=\angle\mathrm{ECG}\)라 하면 삼각형 \(\mathrm{CGE}\)에서</p>
    $$
    \cos\theta_3=\frac{\left(2\sqrt6\right)^2+3^2-6}{2\times2\sqrt6\times3}=\frac{27}{12\sqrt6}=\frac{3\sqrt6}{8},
    $$
    $$
    \sin\theta_3=\sqrt{1-\frac{54}{64}}=\frac{\sqrt{10}}{8}.
    $$
    <p>세 점 \(\mathrm C\), \(\mathrm E\), \(\mathrm G\)를 지나는 원의 반지름을 \(R\)라 하면 사인법칙에 의하여</p>
    $$
    2R=\frac{\overline{\mathrm{GE}}}{\sin\theta_3}=\frac{\sqrt6}{\frac{\sqrt{10}}{8}}=\frac{8\sqrt{15}}{5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(\overline{\mathrm{GH}}\)를 구한다</div>
    <p>같은 원 위의 삼각형 \(\mathrm{CHG}\)에서 \(\angle\mathrm{HCG}=\theta_1\)이므로</p>
    $$
    \overline{\mathrm{GH}}=2R\sin\theta_1=\frac{8\sqrt{15}}{5}\times\frac45=\frac{32\sqrt{15}}{25}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_csat/common/q15": { answer: 4, html: String.raw`
  <div class="sol-box">\(h'(x)=g(x)-f(x)\)이므로 극값의 개수는 두 그래프가 <b>교차하며 위아래가 바뀌는</b> 횟수이다. \(x\ge0\) 쪽은 \(a\)와 무관하게 \(x=1\)에서 한 번 바뀌므로, \(x&lt;-1\)에서 더 바뀌지 않도록 \(a\)를 잡으면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(x\ge0\)에서 부호를 살핀다</div>
    <p>\(0\le x&lt;1\)에서 \(g(x)-f(x)=-\left(x^2-x\right)&gt;0\)이고, \(x\ge1\)에서는 두 그래프가 \((1,\ 0)\)을 함께 지난다. \(f'(1)=1\)이므로 \(a\le1\)이면 \(x&gt;1\)에서 \(f(x)&gt;g(x)\)가 되어 \(x=1\)에서 부호가 한 번 바뀐다.</p>
    <p>\(a&gt;1\)이면 \(x&gt;1\)에서 두 그래프가 다시 만나는 점 \(b\)가 생기지만, \(x=1\)에서는 부호가 바뀌지 않고 \(x=b\)에서 한 번 바뀐다. 어느 쪽이든 \(x&gt;0\)에서 극값은 하나다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x&lt;-1\)에서 부호가 바뀌지 않을 조건을 찾는다</div>
    <p>\(-1\le x&lt;0\)에서 \(g(x)-f(x)=x^2\ge0\)이므로 부호가 바뀌지 않는다. \(x&lt;-1\)에서는</p>
    $$
    g(x)-f(x)=(ax+a)+x^2
    $$
    <p>이므로, 이것이 부호를 바꾸지 않으려면 직선 \(y=ax+a\)가 곡선 \(y=-x^2\)보다 아래로 내려가지 않아야 한다. 즉 두 그래프가 접할 때 \(a\)가 최대가 된다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 접할 때의 \(a\)를 구한다</div>
    <p>접점을 \(\left(t,\ -t^2\right)\)라 하면 접선의 기울기가 \(-2t\)이므로 접선은 \(y+t^2=-2t(x-t)\)이고, 이 직선이 \((-1,\ 0)\)을 지나므로</p>
    $$
    t^2=-2t(-1-t),\qquad t(t+2)=0.
    $$
    <p>\(t&lt;-1\)이므로 \(t=-2\)이고, 기울기는 \(a=-2t=4\)이다. 따라서 \(k=4\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(h(3)\)을 구한다</div>
    <p>\(a=4\)일 때 \(x\ge1\)에서 \(g(x)=4x-4\)이므로</p>
    $$
    h(3)=\int_0^{1}\left(-t^2+t\right)dt+\int_1^{3}\left(-t^2+5t-4\right)dt=\frac16+\frac{10}{3}=\frac72.
    $$
    $$
    k+h(3)=4+\frac72=\frac{15}{2}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_csat/common/q16": { answer: 9, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 차례로 대입한다</div>
    <p>\(a_1=1\)이고 \(a_{n+1}=n^2a_n+1\)이므로</p>
    $$
    a_2=1^2\times1+1=2,\qquad a_3=2^2\times2+1=9.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{9}\)</div>
` },

"2026_csat/common/q17": { answer: 16, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부정적분을 구한다</div>
    $$
    F(x)=\int\left(4x^3-2x\right)dx=x^4-x^2+C.
    $$
    <p>\(F(0)=4\)이므로 \(C=4\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    F(2)=16-4+4=16.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{16}\)</div>
` },

"2026_csat/common/q18": { answer: 12, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\sin(\angle\mathrm{BAC})\)를 구한다</div>
    <p>삼각형의 내각이므로 \(\sin(\angle\mathrm{BAC})&gt;0\)이고</p>
    $$
    \sin(\angle\mathrm{BAC})=\sqrt{1-\left(-\frac35\right)^2}=\frac45.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 넓이를 구한다</div>
    $$
    \frac12\times5\times6\times\frac45=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{12}\)</div>
` },

"2026_csat/common/q19": { answer: 15, html: String.raw`
  <div class="sol-box">\(|f(x)|\le k\)가 주어진 구간에서 성립할 \(k\)의 최솟값은 그 구간에서 \(|f|\)의 최댓값이다. 극값과 양 끝값만 비교하면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 극값을 구한다</div>
    $$
    f'(x)=6x^2+6x-12=6(x+2)(x-1)=0,\qquad x=-2\ \text{또는}\ x=1.
    $$
    <p>\(x=-2\)에서 극대이고 \(f(-2)=12\), \(x=1\)에서 극소이고 \(f(1)=-15\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 끝값과 비교한다</div>
    <p>\(f(2)=16+12-24-8=-4\)이므로 \(-2\le x\le2\)에서</p>
    $$
    -15\le f(x)\le12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(k\)의 최솟값을 구한다</div>
    <p>\(|f(x)|\)의 최댓값이 \(15\)이므로 \(k\)의 최솟값은 \(15\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{15}\)</div>
` },

"2026_csat/common/q20": { answer: 130, html: String.raw`
  <div class="sol-box">\(a_{n+1}=S_{n+1}-S_n\)으로 점화식을 만들면 \(2a_n+a_{n+1}=n\)이라는 짧은 식이 나온다. 마지막 합은 이 꼴이 그대로 보이도록 항을 묶는 것이 핵심이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> (가)를 구한다</div>
    <p>주어진 식에서 \(n\) 대신 \(n+1\)을 넣은 것과의 차를 만들면</p>
    $$
    a_{n+1}=\frac23\left(a_{n+1}-a_n\right)+\frac16\left\{(n+1)^2-n^2\right\}-\frac16
    =\frac23\left(a_{n+1}-a_n\right)+\frac13n.
    $$
    <p>따라서 \(f(n)=\dfrac13n\)이고, 정리하면</p>
    $$
    2a_n+a_{n+1}=3\times\frac13n=n.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> (나)를 구한다</div>
    <p>주어진 식에 \(n=2\)를 넣으면</p>
    $$
    a_1+a_2=\frac23a_2+\frac16\times4-\frac16\times2+10,\qquad a_1+\frac13a_2=\frac{31}{3}.
    $$
    <p>\(a_1=7\)이므로 \(\dfrac13a_2=\dfrac{31}{3}-7=\dfrac{10}{3}\), 즉 \(p=a_2=10\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> (다)를 구한다</div>
    <p>\(a_3\)부터 \(a_{12}\)까지를 \(\left(2a_{2k+1}+a_{2k+2}\right)\) 꼴로 다섯 덩어리로 묶으면 \(n=2k+1\)일 때의 점화식이 그대로 쓰인다.</p>
    $$
    \sum_{k=1}^{12}a_k+\sum_{k=1}^{5}a_{2k+1}=a_1+a_2+\sum_{k=1}^{5}(2k+1)=7+10+35=52.
    $$
    <p>따라서 \(q=52\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 값을 구한다</div>
    $$
    \frac{p\times q}{f(12)}=\frac{10\times52}{4}=130.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{130}\)</div>
` },

"2026_csat/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 중복순열의 수를 쓴다</div>
    <p>네 문자에서 중복을 허락하여 \(3\)개를 택해 일렬로 나열하므로</p>
    $$
    {}_4\Pi_3=4^3=64.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_csat/prob_stat/q24": { answer: 1, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(A\cap B)\)를 구한다</div>
    $$
    \mathrm P(B\,|\,A)=\frac{\mathrm P(A\cap B)}{\mathrm P(A)}=\frac14
    \ \Longrightarrow\ \mathrm P(A\cap B)=\frac14\times\frac25=\frac1{10}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 덧셈정리를 쓴다</div>
    $$
    \frac25+\mathrm P(B)-\frac1{10}=1,\qquad \mathrm P(B)=1-\frac25+\frac1{10}=\frac7{10}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_csat/prob_stat/q25": { answer: 2, html: String.raw`
  <div class="sol-box">"같은 색"과 "같은 수"는 동시에 일어날 수 없다. 흰 공과 검은 공에 적힌 수가 겹치는 것은 \(2,3,4,5\)뿐이고 같은 색이면 수가 다르기 때문이다. 그래서 두 확률을 그냥 더하면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 구한다</div>
    $$
    {}_{10}\mathrm C_2=45.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 같은 색일 확률을 구한다</div>
    <p>흰 공끼리 또는 검은 공끼리 뽑는 경우이므로</p>
    $$
    \frac{2\times{}_5\mathrm C_2}{45}=\frac{20}{45}=\frac49.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 적힌 수가 같을 확률을 구한다</div>
    <p>흰 공은 \(1\)부터 \(5\), 검은 공은 \(2\)부터 \(6\)이므로 수가 같은 짝은 \(2,3,4,5\)의 네 쌍이다.</p>
    $$
    \frac4{45}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 더한다</div>
    <p>두 사건은 서로 배반이므로</p>
    $$
    \frac49+\frac4{45}=\frac{20+4}{45}=\frac{24}{45}=\frac8{15}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_csat/prob_stat/q26": { answer: 5, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 신뢰구간을 쓴다</div>
    $$
    \overline x-2.58\times\frac5{\sqrt{36}}\le m\le\overline x+2.58\times\frac5{\sqrt{36}},
    $$
    <p>즉 \(\overline x-2.15\le m\le\overline x+2.15\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 폭을 비교한다</div>
    <p>주어진 신뢰구간이 \(1.2\le m\le a\)이므로 두 구간의 길이가 같다.</p>
    $$
    a-1.2=2\times2.15=4.3,\qquad a=5.5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_csat/prob_stat/q27": { answer: 4, html: String.raw`
  <div class="sol-box">\(\mathrm V(cX)=c^2\mathrm V(X)\)이므로 \(a\)를 먼저 구해 \(\dfrac1a\)가 정수임을 확인하면 계산이 간단해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(a\)를 구한다</div>
    <p>확률의 총합이 \(1\)이므로</p>
    $$
    \frac1{12}+\frac1{12}+\frac3{12}+\frac5{12}+a=1,\qquad a=\frac{2}{12}=\frac16.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 평균과 \(\mathrm E(X^2)\)을 구한다</div>
    $$
    \mathrm E(X)=\frac{0+1+2\times3+3\times5+4\times2}{12}=\frac{30}{12}=\frac52,
    $$
    $$
    \mathrm E(X^2)=\frac{0+1+4\times3+9\times5+16\times2}{12}=\frac{90}{12}=\frac{15}{2}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 분산을 구한다</div>
    $$
    \mathrm V(X)=\frac{15}{2}-\frac{25}{4}=\frac54,
    $$
    $$
    \mathrm V\left(\frac1aX\right)=\mathrm V(6X)=36\times\frac54=45.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_csat/prob_stat/q28": { answer: 2, html: String.raw`
  <div class="sol-box">한 번의 시행에서 들어가는 공의 개수는 \(k\)가 홀수면 \(3\), \(k=2\)면 \(2\), \(k=4\)면 \(3\), \(k=6\)이면 \(4\)이다. 즉 <b>홀수 개가 들어가는 것은 \(k\)가 홀수일 때와 \(k=4\)일 때뿐</b>이므로, 총합의 홀짝은 이 두 종류가 몇 번 나오는지로만 정해진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 한 번의 시행을 정리한다</div>
    <p>\(k\)가 홀수면 상자 \(1,3,5\)에 한 개씩 들어가 \(3\)개, \(k=2\)면 \(1,2\)에 들어가 \(2\)개, \(k=4\)면 \(1,2,4\)에 들어가 \(3\)개, \(k=6\)이면 \(1,2,3,6\)에 들어가 \(4\)개이다. 각 경우의 확률은 차례로 \(\dfrac36\), \(\dfrac16\), \(\dfrac16\), \(\dfrac16\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 사건 \(A\)의 확률을 구한다</div>
    <p>\(4\)번의 시행에서 홀수인 눈이 나온 횟수를 \(a\), \(k=4\)인 횟수를 \(b\)라 하면 총합이 홀수일 조건은 \(a+b\)가 홀수인 것이다. 나머지(\(k=2\) 또는 \(6\))의 확률은 \(\dfrac26\)이다.</p>
    $$
    \mathrm P(A)=\frac{216+216+168+40}{6^4}=\frac{640}{6^4}.
    $$
    <p>여기서 각 항은 \(a=3\), \(a=2\), \(a=1\), \(a=0\)인 경우를 모은 것이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 사건 \(A\cap B\)를 정리한다</div>
    <p>상자 \(3\)에는 \(k\)가 홀수일 때와 \(k=6\)일 때 공이 들어가고, 상자 \(2\)에는 \(k=2,4,6\)일 때 들어간다. \(k=2\), \(k=4\), \(k=6\)인 횟수를 각각 \(p\), \(b\), \(r\)라 하면 조건은</p>
    $$
    a+r=(p+b+r)+1,\qquad a=p+b+1.
    $$
    <p>\(a+p+b+r=4\)와 함께 풀면 \(r=5-2a\)이므로 \(a\le2\)이고, 총합이 홀수라는 조건(\(a+b\)가 홀수)까지 쓰면</p>
    $$
    (a,\ p,\ b,\ r)=(2,\ 0,\ 1,\ 1)\quad\text{또는}\quad(1,\ 0,\ 0,\ 3)
    $$
    <p>뿐이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 확률을 계산한다</div>
    $$
    \mathrm P(A\cap B)=\frac{4!}{2!}\left(\frac36\right)^2\left(\frac16\right)\left(\frac16\right)+\frac{4!}{3!}\left(\frac36\right)\left(\frac16\right)^3=\frac{108+12}{6^4}=\frac{120}{6^4},
    $$
    $$
    \mathrm P(B\,|\,A)=\frac{120}{640}=\frac3{16}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_csat/prob_stat/q29": { answer: 977, html: String.raw`
  <div class="sol-box">한 번의 시행에서 "기록한 수가 \(3\)"일 확률을 \(a\)로 나타내면, \(X\)가 그 확률의 이항분포를 따른다. 평균 조건이 \(a\)를 정해 준다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 한 번의 시행에서 \(3\)을 기록할 확률을 구한다</div>
    <p>눈의 수가 \(a\) 이하일 확률은 \(\dfrac a6\)이고 이때 동전을 \(5\)번 던져 앞면이 \(3\)번 나와야 하며, \(a\)보다 클 확률은 \(\dfrac{6-a}{6}\)이고 이때는 \(3\)번 던져 모두 앞면이어야 한다.</p>
    $$
    \frac a6\times{}_5\mathrm C_3\left(\frac12\right)^5+\frac{6-a}{6}\times\left(\frac12\right)^3
    =\frac{10a}{6\times32}+\frac{6-a}{48}=\frac{a+4}{32}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 평균 조건에서 \(a\)를 구한다</div>
    <p>\(X\)는 이항분포 \(\mathrm B\left(19200,\ \dfrac{a+4}{32}\right)\)를 따르므로</p>
    $$
    19200\times\frac{a+4}{32}=4800,\qquad a+4=8,\qquad a=4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 정규분포로 근사한다</div>
    <p>\(X\sim\mathrm B\left(19200,\ \dfrac14\right)\)이므로</p>
    $$
    \mathrm V(X)=19200\times\frac14\times\frac34=3600,\qquad \sigma=60,
    $$
    <p>즉 \(X\)는 근사적으로 \(\mathrm N\left(4800,\ 60^2\right)\)을 따른다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 확률을 구한다</div>
    $$
    k=\mathrm P(X\le4800+120)=\mathrm P\left(Z\le\frac{120}{60}\right)=\mathrm P(Z\le2)=0.5+0.477=0.977,
    $$
    $$
    1000k=977.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{977}\)</div>
` },

"2026_csat/calculus/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 분모를 각의 크기에 맞춘다</div>
    $$
    \lim_{x\to0}\frac{\tan6x}{2x}=\lim_{x\to0}\left(\frac{\tan6x}{6x}\times3\right).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    $$
    3\times1=3.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_csat/calculus/q24": { answer: 4, html: String.raw`
  <div class="sol-box">근호 안을 인수분해하면 \(\sin x\cos^2x\)가 되어 근호가 절반 벗겨진다. 남는 \(\cos x\)가 \(\sin x\)의 도함수라 치환이 바로 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 근호 안을 정리한다</div>
    $$
    \sin x-\sin^3x=\sin x\left(1-\sin^2x\right)=\sin x\cos^2x,
    $$
    <p>\(0\le x\le\dfrac\pi2\)에서 \(\cos x\ge0\)이므로</p>
    $$
    \sqrt{\sin x-\sin^3x}=\sqrt{\sin x}\times\cos x.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 치환한다</div>
    <p>\(\sin x=t\)로 놓으면 \(\cos x=\dfrac{dt}{dx}\)이고 \(x=0\)일 때 \(t=0\), \(x=\dfrac\pi2\)일 때 \(t=1\)이므로</p>
    $$
    \int_0^{\frac\pi2}\sqrt{\sin x}\,\cos x\,dx=\int_0^{1}\sqrt t\,dt=\left[\frac23t^{\frac32}\right]_0^{1}=\frac23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2026_csat/calculus/q25": { answer: 3, html: String.raw`
  <div class="sol-box">부등식의 양 끝을 \(n\)으로 나누면 둘 다 \(5\)로 가므로 \(\dfrac{a_n}{n}\to5\)이다. 구하는 극한도 분자·분모를 \(n^2\)으로 나누면 \(\dfrac{a_n}{n}\)만으로 쓰인다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 대소관계로 \(\dfrac{a_n}{n}\)의 극한을 구한다</div>
    $$
    \frac{\sqrt{9n^2-5}+2n}{n}=\sqrt{9-\frac5{n^2}}+2\ \to\ 5,\qquad \frac{5n+1}{n}=5+\frac1n\ \to\ 5
    $$
    <p>이므로 수열의 극한의 대소관계에 의하여 \(\displaystyle\lim_{n\to\infty}\frac{a_n}{n}=5\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 분자·분모를 \(n^2\)으로 나눈다</div>
    $$
    \frac{\left(a_n+2\right)^2}{na_n+5n^2-2}
    =\frac{\left(\dfrac{a_n}{n}+\dfrac2n\right)^2}{\dfrac{a_n}{n}+5-\dfrac2{n^2}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 극한값을 구한다</div>
    $$
    \frac{(5+0)^2}{5+5-0}=\frac{25}{10}=\frac52.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2026_csat/calculus/q26": { answer: 1, html: String.raw`
  <div class="sol-box">단면이 정삼각형이므로 넓이는 \(\dfrac{\sqrt3}{4}\times(\text{한 변})^2\)이고, 제곱하면 근호가 벗겨져 \(x+x\ln x\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 부피를 적분으로 쓴다</div>
    $$
    \int_1^{2}\frac{\sqrt3}{4}\left(\sqrt{x+x\ln x}\right)^2dx=\frac{\sqrt3}{4}\int_1^{2}x(1+\ln x)\,dx.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부분적분한다</div>
    $$
    \int_1^{2}x(1+\ln x)\,dx=\left[\frac{x^2}{2}(1+\ln x)\right]_1^{2}-\int_1^{2}\frac x2\,dx
    $$
    $$
    =2(1+\ln2)-\frac12-\left[\frac{x^2}{4}\right]_1^{2}=\frac{3+4\ln2}{2}-\frac34=\frac{3+8\ln2}{4}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부피를 구한다</div>
    $$
    \frac{\sqrt3}{4}\times\frac{3+8\ln2}{4}=\frac{\sqrt3\left(3+8\ln2\right)}{16}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2026_csat/calculus/q27": { answer: 2, html: String.raw`
  <div class="sol-box">\(\cos^2\pi t+\sin^2\pi t=1\)을 쓰면 직선의 방정식에 대입했을 때 삼각함수가 통째로 사라져 \(e^{4t}\)만 남는다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 교점의 매개변수를 구한다</div>
    <p>\(y=3x-5e\)에 대입하면</p>
    $$
    e^{4t}\left(1-3\cos^2\pi t\right)=3e^{4t}\left(1+\sin^2\pi t\right)-5e,
    $$
    $$
    e^{4t}\left\{-2-3\left(\cos^2\pi t+\sin^2\pi t\right)\right\}=-5e,\qquad -5e^{4t}=-5e.
    $$
    <p>따라서 \(4t=1\), 즉 \(t=\dfrac14\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 매개변수로 나타낸 도함수를 쓴다</div>
    $$
    \frac{dx}{dt}=e^{4t}\left(4+4\sin^2\pi t+2\pi\sin\pi t\cos\pi t\right),
    $$
    $$
    \frac{dy}{dt}=e^{4t}\left(4-12\cos^2\pi t+6\pi\cos\pi t\sin\pi t\right),
    $$
    $$
    \frac{dy}{dx}=\frac{4-12\cos^2\pi t+6\pi\cos\pi t\sin\pi t}{4+4\sin^2\pi t+2\pi\sin\pi t\cos\pi t}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=\dfrac14\)을 대입한다</div>
    <p>\(\sin\dfrac\pi4=\cos\dfrac\pi4=\dfrac{\sqrt2}{2}\)이므로</p>
    $$
    \frac{4-6+3\pi}{4+2+\pi}=\frac{3\pi-2}{\pi+6}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2026_csat/calculus/q28": { answer: 5, html: String.raw`
  <div class="sol-box">두 점의 거리를 \(s\)로 나타내면 \(t=\dfrac{s^3}{s+1}\)이라는 관계가 나온다. \(g\)는 이 대응의 역이므로, 부분적분으로 \(\displaystyle\int g\,dt\)를 \(\displaystyle\int t\,ds\) 꼴로 바꾸면 유리함수 적분이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(t\)를 \(s\)로 나타낸다</div>
    <p>\(f'(x)=x-1+\dfrac1{1+x}=\dfrac{x^2}{x+1}\)이므로 점 \((s,\ f(s))\)에서의 접선은</p>
    $$
    y-f(s)=\frac{s^2}{s+1}(x-s).
    $$
    <p>\(y\)축에 내린 수선의 발은 \(\mathrm H(0,\ f(s))\)이고, 접선의 \(y\)절편은 \(\mathrm I\left(0,\ -\dfrac{s^3}{s+1}+f(s)\right)\)이므로</p>
    $$
    t=\overline{\mathrm{HI}}=\frac{s^3}{s+1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 적분구간의 끝을 \(s\)로 옮긴다</div>
    <p>\(t=\dfrac12\)에서 \(2s^3-s-1=(s-1)\left(2s^2+2s+1\right)=0\), \(s&gt;0\)이므로 \(s=1\)이다. \(t=\dfrac{27}{4}\)에서 \(4s^3-27s-27=(s-3)(2s+3)^2=0\), \(s&gt;0\)이므로 \(s=3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부분적분으로 바꾼다</div>
    $$
    \int_{\frac12}^{\frac{27}{4}}g(t)\,dt=\Big[t\,g(t)\Big]_{\frac12}^{\frac{27}{4}}-\int_{\frac12}^{\frac{27}{4}}t\,g'(t)\,dt
    =\left(\frac{27}{4}\times3-\frac12\times1\right)-\int_1^{3}\frac{s^3}{s+1}\,ds,
    $$
    <p>앞항은 \(\dfrac{79}{4}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 남은 적분을 계산한다</div>
    $$
    \int_1^{3}\frac{s^3}{s+1}\,ds=\int_1^{3}\left(s^2-s+1-\frac1{s+1}\right)ds
    =\left[\frac13s^3-\frac12s^2+s-\ln|s+1|\right]_1^{3}=\frac{20}{3}-\ln2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 값을 구한다</div>
    $$
    \frac{79}{4}-\left(\frac{20}{3}-\ln2\right)=\frac{237-80}{12}+\ln2=\frac{157}{12}+\ln2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2026_csat/calculus/q29": { answer: 97, html: String.raw`
  <div class="sol-box">첫째항과 공차가 같으므로 \(a_n=nd\)로 아주 단순해진다. 그러면 \(b_{k+1}\), \(b_{k+2}\), \(b_{k+3}\)이 등비를 이룬다는 조건이 \(d\)를 결정한다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(d\)를 구한다</div>
    <p>\(a_n=d+(n-1)d=nd\)이므로 \(b_{k+i}=\dfrac1{id}-1\ (i=1,2,3)\)이고, 이 셋이 등비수열의 연속한 세 항이므로</p>
    $$
    \left(\frac1{2d}-1\right)^2=\left(\frac1d-1\right)\left(\frac1{3d}-1\right),\qquad \frac1{12d^2}=\frac1{3d},\qquad d=\frac14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 공비와 \(b_1\)의 꼴을 정한다</div>
    <p>\(b_{k+1}=3\), \(b_{k+2}=1\), \(b_{k+3}=\dfrac13\)이므로 공비는 \(\dfrac13\)이고, \(b_1=3\times3^{k}\)이므로 \(b_1\)은 \(3\)의 거듭제곱이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 부등식으로 \(b_1\)을 확정한다</div>
    <p>\(a_n=\dfrac n4\)이므로</p>
    $$
    \sum_{n=1}^{\infty}\frac1{a_na_{n+1}}=\sum_{n=1}^{\infty}\frac{16}{n(n+1)}=16\lim_{n\to\infty}\left(1-\frac1{n+1}\right)=16,
    $$
    $$
    \sum_{n=1}^{\infty}b_n=\frac{b_1}{1-\frac13}=\frac32b_1.
    $$
    <p>따라서 \(0&lt;\dfrac32b_1-16&lt;30\)에서 \(\dfrac{32}{3}&lt;b_1&lt;\dfrac{92}{3}\)이고, \(3\)의 거듭제곱 중 이 범위에 있는 것은 \(b_1=27\)뿐이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답을 구한다</div>
    <p>\(\{b_{2n}\}\)은 첫째항이 \(b_2=27\times\dfrac13=9\), 공비가 \(\left(\dfrac13\right)^2=\dfrac19\)인 등비수열이므로</p>
    $$
    a_2\times\sum_{n=1}^{\infty}b_{2n}=\frac24\times\frac{9}{1-\frac19}=\frac12\times\frac{81}{8}=\frac{81}{16}.
    $$
    <p>\(p=16\), \(q=81\)이므로 \(p+q=97\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{97}\)</div>
` },

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

"2027_mock06/common/q13": { answer: 5, html: String.raw`
  <div class="sol-box">모든 실수에서 \(f&gt;g\)이므로 절댓값이 벗겨져 \(S(t)=\displaystyle\int_0^{t}\{f(x)-g(x)\}dx\)이고, 따라서 \(S'(t)=f(t)-g(t)\)이다. 즉 주어진 식이 곧 \(f-g\)의 정체다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> ㄱ을 확인한다</div>
    <p>\(f(1)=g(1)+1\)이므로 \(S'(1)=f(1)-g(1)=1\)이고</p>
    $$
    1-2+a=1,\qquad a=2.
    $$
    <p>따라서 ㄱ은 거짓이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄴ을 확인한다</div>
    <p>\(f(x)-g(x)=x^2-2x+2\)이므로</p>
    $$
    S(3)=\int_0^{3}\left(x^2-2x+2\right)dx=\left[\frac13x^3-x^2+2x\right]_0^{3}=9-9+6=6.
    $$
    <p>ㄴ은 참이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄷ을 확인한다</div>
    <p>\(h(x)=f(x)-g(x)=(x-1)^2+1\)이므로 \(y=h(x)\)의 그래프는 직선 \(x=1\)에 대하여 대칭이다. 구간 \([-2,\ 0]\)을 이 축에 대하여 대칭이동하면 \([2,\ 4]\)가 되므로</p>
    $$
    \int_{-2}^{0}h(x)\,dx=\int_2^{4}h(x)\,dx,
    $$
    $$
    \int_{-2}^{2}h(x)\,dx=\int_{-2}^{0}h+\int_0^{2}h=\int_2^{4}h+\int_0^{2}h=\int_0^{4}h(x)\,dx=S(4).
    $$
    <p>따라서 ㄷ도 참이고, 옳은 것은 ㄴ, ㄷ이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2027_mock06/common/q14": { answer: 3, html: String.raw`
  <div class="sol-box">방정식이 두 인수의 곱이므로 \(\cos(b\pi x)\)의 값이 두 가지로 갈린다. 하나는 항상 \(\dfrac12\)로 고정이고, 다른 하나는 \(-\left(\dfrac12+\dfrac1a\right)\)로 \(a\)에 따라 \(-1\)보다 큰지 작은지가 달라진다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 갈래로 나눈다</div>
    $$
    \cos(b\pi x)=\frac12\qquad\text{또는}\qquad \cos(b\pi x)=-\left(\frac12+\frac1a\right).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 한 주기 안의 근을 센다</div>
    <p>\(y=\cos(b\pi x)\)의 주기는 \(\dfrac{2\pi}{b\pi}=\dfrac2b\)이고 \(b\)가 자연수이므로 \(0\le x\le2\)에는 주기가 정확히 \(b\)번 들어간다. 한 주기 \(0\le x\le\dfrac2b\)에서 \(\cos(b\pi x)=\dfrac12\)의 근은 \(2\)개이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(a\)의 범위로 경우를 나눈다</div>
    <p>ⅰ) \(a&gt;2\)이면 \(\dfrac12&lt;\dfrac12+\dfrac1a&lt;1\)이므로 둘째 방정식의 근도 한 주기에 \(2\)개, 합쳐서 \(4\)개다. 전체로는 \(4b\)개인데 \(4b=15\)를 만족시키는 자연수 \(b\)는 없다.</p>
    <p>ⅱ) \(a=2\)이면 \(\dfrac12+\dfrac1a=1\)이므로 둘째 방정식은 \(\cos(b\pi x)=-1\)이 되어 한 주기에 근이 \(1\)개, 합쳐서 \(3\)개다. 전체로는 \(3b\)개이므로 \(3b=15\)에서 \(b=5\)이다.</p>
    <p>ⅲ) \(0&lt;a&lt;2\)이면 \(\dfrac12+\dfrac1a&gt;1\)이므로 둘째 방정식은 근이 없고, 한 주기에 \(2\)개, 전체 \(2b\)개다. \(2b=15\)인 자연수 \(b\)는 없다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 답을 구한다</div>
    $$
    a+b=2+5=7.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2027_mock06/common/q15": { answer: 4, html: String.raw`
  <div class="sol-box">\(\displaystyle\int|F|\ne\left|\int F\right|\)라는 것은 그 구간에서 \(F\)의 <b>부호가 바뀐다</b>는 뜻이다. 그러면 두 조건은 "부호가 바뀌는 구간이 언제인지"를 말하고 있는 셈이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 조건 (가)를 읽는다</div>
    <p>상수항이 \(0\)이므로 \(f(0)=0\)이다. 조건 (가)는 열린구간 \((p,\ p+3)\)에서 \(f\)의 부호가 바뀌는 \(p\)의 범위가 \(0&lt;p&lt;3\)이라는 뜻이다.</p>
    <p>부호가 바뀌는 점을 \(a\)라 하면 \(p&lt;a&lt;p+3\), 즉 \(a-3&lt;p&lt;a\)이므로 이 범위가 \(0&lt;p&lt;3\)과 같아야 한다. 따라서 \(a=3\), 즉 \(f(3)=0\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(x=0\)에서 접함을 확인한다</div>
    <p>만약 \(x=0\)에서 그래프가 \(x\)축과 접하지 않으면 \(x=0\)에서도 부호가 바뀌므로, \(0\)이 구간 안에 들어가는 \(-3&lt;p&lt;0\)에서도 조건이 성립해 (가)와 어긋난다. 따라서 \(x=0\)에서 접해야 하고 \(f'(0)=0\)이다.</p>
    $$
    f(x)=ax^2(x-3).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 조건 (나)에서 \(a\)의 부호를 정한다</div>
    $$
    f'(x)=2ax(x-3)+ax^2=3ax(x-2).
    $$
    <p>\(a&lt;0\)이면 \([0,\ 3]\)에서 \(f(x)\ge0\)이므로 \(0&lt;q&lt;1\)인 어떤 \(q\)에 대해서도 \(f(x)+q&gt;0\)이 되어 부호가 바뀌지 않는다. 따라서 \(a&gt;0\)이고, 이때 \([0,\ 3]\)에서 \(f(x)\le0\)이며 \(x=2\)에서 최솟값을 갖는다.</p>
    $$
    f(2)=a\times4\times(-1)=-4a.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(a\)를 구한다</div>
    <p>\(-4a\le f(x)\le0\)이므로 \(-4a+q\le f(x)+q\le q\)이고, \(f(x)+q\)의 부호가 바뀌려면 \(-4a+q&lt;0\)과 \(q&gt;0\)이 필요하다. 즉 조건을 만족시키는 \(q\)의 범위가 \(0&lt;q&lt;4a\)인데 이것이 \(0&lt;q&lt;1\)과 같아야 하므로</p>
    $$
    4a=1,\qquad a=\frac14.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> \(f(6)\)을 구한다</div>
    $$
    f(6)=\frac14\times36\times3=27.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2027_mock06/common/q16": { answer: 2, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 밑을 맞춘다</div>
    $$
    3^{\,x-6}=3^{-2x}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 지수를 비교한다</div>
    $$
    x-6=-2x,\qquad 3x=6,\qquad x=2.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{2}\)</div>
` },

"2027_mock06/common/q17": { answer: 10, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 적분해서 \(f\)를 구한다</div>
    $$
    f(x)=\int\left(6x^2+5\right)dx=2x^3+5x+C.
    $$
    <p>\(f(0)=3\)이므로 \(C=3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 대입한다</div>
    $$
    f(1)=2+5+3=10.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{10}\)</div>
` },

"2027_mock06/common/q18": { answer: 15, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 공차를 구한다</div>
    <p>\(a_5=a_2-6\)에서 \(a_5-a_2=3d=-6\)이므로 \(d=-2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 첫째항을 구한다</div>
    $$
    a_1=a_6-5d=5-5\times(-2)=15.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{15}\)</div>
` },

"2027_mock06/common/q19": { answer: 9, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 접선의 기울기를 구한다</div>
    <p>\(f'(x)=3x^2-10x+3\)이므로</p>
    $$
    f'(1)=3-10+3=-4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 접선을 구한다</div>
    <p>점 \((1,\ 5)\)를 지나므로</p>
    $$
    y-5=-4(x-1),\qquad y=-4x+9.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(y\)절편을 구한다</div>
    <p>\(x=0\)을 넣으면 \(y=9\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{9}\)</div>
` },

"2027_mock06/common/q20": { answer: 48, html: String.raw`
  <div class="sol-box">\(\mathrm P\)가 두 곡선 위의 점이라는 조건을 로그로 바꾸면 \(\alpha=\log_b\beta\)이다. 그러면 \(\alpha\beta^3=1\)이 \(3\alpha-\beta=0\)이라는 아주 단순한 관계로 바뀐다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> (가)를 구한다</div>
    <p>\(\beta=b^{\alpha}\)에서 \(\alpha=\log_b\beta\)이고 \(\beta=-\log_b\alpha\)이므로</p>
    $$
    3\alpha-\beta=3\log_b\beta+\log_b\alpha=\log_b\left(\alpha\beta^3\right)=\log_b1=0.
    $$
    <p>따라서 \(\beta=3\alpha\)이고 직선 \(\mathrm{OP}\)의 기울기는</p>
    $$
    m=\frac\beta\alpha=3,\qquad p=3.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> (나)를 구한다</div>
    <p>\(\beta^4=(3\alpha)\beta^3=m\alpha\beta^3=m=3\)이므로</p>
    $$
    \beta=3^{\frac14},\qquad q=3^{\frac14}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> (다)를 구한다</div>
    <p>\(\beta=-\log_b\alpha\)에서 \(b=\alpha^{-\frac1\beta}\)이고 \(\alpha=\dfrac\beta m\)이므로</p>
    $$
    g(m)=-\log_bm=\frac{\beta}{\log_m\alpha}=\frac{\beta}{-1+\log_m\beta}
    =\frac{3^{\frac14}}{-1+\log_33^{\frac14}}=\frac{3^{\frac14}}{-\frac34}=-4\times3^{-\frac34}.
    $$
    <p>따라서 \(r=-4\times3^{-\frac34}\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 값을 구한다</div>
    $$
    (p\times q\times r)^2=\left(3\times3^{\frac14}\times\left(-4\times3^{-\frac34}\right)\right)^2=\left(-4\times3^{\frac12}\right)^2=48.
    $$
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{48}\)</div>
` },

"2027_mock06/prob_stat/q23": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 같은 것이 있는 순열의 수를 쓴다</div>
    <p>네 문자 중 \(z\)가 \(2\)개이므로</p>
    $$
    \frac{4!}{2!}=12.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2027_mock06/prob_stat/q24": { answer: 2, html: String.raw`
  <div class="sol-box">\(A\)는 \(A\cap B\)와 \(A\cap B^{C}\)로 정확히 두 조각으로 나뉜다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(\mathrm P(A)\)를 구한다</div>
    $$
    \mathrm P(A)=\mathrm P(A\cap B)+\mathrm P\left(A\cap B^{C}\right)=\frac13+\frac38=\frac{8+9}{24}=\frac{17}{24}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건의 확률을 구한다</div>
    $$
    \mathrm P\left(A^{C}\right)=1-\frac{17}{24}=\frac7{24}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2027_mock06/prob_stat/q25": { answer: 1, html: String.raw`
  <div class="sol-box">\(x^6\)이 되는 길은 두 가지뿐이다. \((x+4)^6\)의 \(x^5\)항에 \(3x\)를 곱하거나, \(x^6\)항에 \(2\)를 곱하는 것이다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 일반항을 쓴다</div>
    $$
    {}_6\mathrm C_r\,x^{r}4^{\,6-r}\qquad(r=0,1,\dots,6).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 경우를 계산한다</div>
    <p>\(x^5\)항에 \(3x\)를 곱하는 경우는 \(r=5\)이므로</p>
    $$
    {}_6\mathrm C_5\times4\times3=6\times4\times3=72,
    $$
    <p>\(x^6\)항에 \(2\)를 곱하는 경우는 \(r=6\)이므로</p>
    $$
    {}_6\mathrm C_6\times1\times2=2.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 더한다</div>
    $$
    72+2=74.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2027_mock06/prob_stat/q26": { answer: 5, html: String.raw`
  <div class="sol-box">곱이 \(5\)의 배수이려면 \(5\) 또는 \(10\)이 적힌 공이 적어도 하나 있어야 한다. 여사건은 그 두 개를 모두 피하는 경우다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 경우의 수를 구한다</div>
    $$
    {}_{10}\mathrm C_4=210.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 여사건을 센다</div>
    <p>\(5\)와 \(10\)이 적힌 공을 뺀 \(8\)개에서 \(4\)개를 뽑으면 되므로</p>
    $$
    {}_8\mathrm C_4=70,\qquad \mathrm P\left(A^{C}\right)=\frac{70}{210}=\frac13.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 확률을 구한다</div>
    $$
    \mathrm P(A)=1-\frac13=\frac23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2027_mock06/prob_stat/q27": { answer: 4, html: String.raw`
  <div class="sol-box">공역의 원소가 \(1,2,3\)뿐이므로 곱이 \(4\)가 되는 경우는 \(2\times2\) 하나뿐이다. 그 하나만 전체에서 빼면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 전체 함수의 개수를 구한다</div>
    $$
    {}_3\Pi_5=3^5=243.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 제외할 경우를 센다</div>
    <p>\(f(1)\times f(2)=4\)가 되려면 \(f(1)=f(2)=2\)여야 하고, 나머지 세 원소의 함숫값은 자유이므로</p>
    $$
    {}_3\Pi_3=3^3=27.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 빼서 구한다</div>
    $$
    243-27=216.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2027_mock06/prob_stat/q29": { answer: 98, html: String.raw`
  <div class="sol-box">곱이 홀수이려면 다섯 눈이 <b>모두 홀수</b>여야 한다. 그러면 눈은 \(1,3,5\)뿐이고, 그중 합이 \(15\)가 되는 조합은 몇 개 안 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 사건 \(A\)의 확률을 구한다</div>
    <p>한 개의 주사위에서 홀수가 나올 확률이 \(\dfrac36\)이므로</p>
    $$
    \mathrm P(A)=\left(\frac36\right)^5=\frac{3^5}{6^5}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 합이 \(15\)인 조합을 찾는다</div>
    <p>\(1,3,5\) 다섯 개를 더해 \(15\)가 되는 경우는</p>
    $$
    (3,3,3,3,3),\qquad (1,1,3,5,5),\qquad (1,3,3,3,5)
    $$
    <p>의 세 가지이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 나열 방법을 센다</div>
    <p>서로 다른 주사위이므로 순서를 구별해서 센다.</p>
    $$
    1+\frac{5!}{2!\,2!}+\frac{5!}{3!}=1+30+20=51.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 조건부확률을 구한다</div>
    $$
    \mathrm P(B\,|\,A)=\frac{\frac{51}{6^5}}{\frac{3^5}{6^5}}=\frac{51}{243}=\frac{17}{81}.
    $$
    <p>\(p=81\), \(q=17\)이므로 \(p+q=98\)이다.</p>
  </div>
  <div class="sol-final">답 &nbsp;\(\mathbf{98}\)</div>
` },

"2027_mock06/calculus/q23": { answer: 4, html: String.raw`
  <div class="sol-box">밑이 큰 \(5^{n}\)이 지배하므로 분자·분모를 \(5^{n}\)으로 나눈다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(5^{n}\)으로 나눈다</div>
    $$
    \frac{4\times5^{n}-2^{\,n+1}}{5^{n}+2^{n}}=\frac{4-2\times\left(\frac25\right)^{n}}{1+\left(\frac25\right)^{n}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 극한값을 구한다</div>
    <p>\(\left(\dfrac25\right)^{n}\to0\)이므로</p>
    $$
    \frac{4-0}{1+0}=4.
    $$
  </div>
  <div class="sol-final">답 &nbsp;④</div>
` },

"2027_mock06/calculus/q24": { answer: 3, html: String.raw`
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 음함수의 미분법을 쓴다</div>
    <p>\(2x+\sqrt y=xy\)의 양변을 \(x\)에 대하여 미분하면</p>
    $$
    2+\frac1{2\sqrt y}\frac{dy}{dx}=y+x\frac{dy}{dx}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(\dfrac{dy}{dx}\)에 대해 푼다</div>
    $$
    \left(x-\frac1{2\sqrt y}\right)\frac{dy}{dx}=2-y,\qquad
    \frac{dy}{dx}=\frac{2-y}{x-\frac1{2\sqrt y}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 점 \((-1,\ 1)\)을 대입한다</div>
    $$
    \frac{2-1}{-1-\frac12}=\frac{1}{-\frac32}=-\frac23.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },

"2027_mock06/calculus/q25": { answer: 2, html: String.raw`
  <div class="sol-box">\(\dfrac1{a_nb_n}\)을 부분분수로 쪼개면 이웃한 항이 소거된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 일반항을 구한다</div>
    $$
    a_n=4+3(n-1)=3n+1,\qquad b_n=7+3(n-1)=3n+4.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 부분분수로 쪼갠다</div>
    $$
    \frac1{(3n+1)(3n+4)}=\frac13\left(\frac1{3n+1}-\frac1{3n+4}\right).
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 소거하여 합을 구한다</div>
    $$
    \sum_{n=1}^{\infty}\frac1{a_nb_n}=\lim_{n\to\infty}\frac13\left(\frac14-\frac1{3n+4}\right)=\frac13\times\frac14=\frac1{12}.
    $$
  </div>
  <div class="sol-final">답 &nbsp;②</div>
` },

"2027_mock06/calculus/q26": { answer: 5, html: String.raw`
  <div class="sol-box">두 접선의 기울기를 구한 뒤, 두 직선이 이루는 예각의 탄젠트 공식 \(\tan\alpha=\left|\dfrac{m-m'}{1+mm'}\right|\)에 넣으면 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 두 점의 \(x\)좌표를 구한다</div>
    <p>\(0&lt;x&lt;\pi\)에서 \(\sin x=\dfrac{\sqrt3}{2}\)의 해는 \(x=\dfrac\pi3\), \(x=\dfrac23\pi\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> 두 접선의 기울기를 구한다</div>
    <p>\(y=\sin x\)에서 \(y'=\cos x\)이므로</p>
    $$
    m=\cos\frac\pi3=\frac12,\qquad m'=\cos\frac23\pi=-\frac12.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> 예각의 탄젠트를 구한다</div>
    $$
    \tan\theta=\left|\frac{\frac12-\left(-\frac12\right)}{1+\frac12\times\left(-\frac12\right)}\right|
    =\left|\frac{1}{1-\frac14}\right|=\frac43.
    $$
  </div>
  <div class="sol-final">답 &nbsp;⑤</div>
` },

"2027_mock06/calculus/q27": { answer: 1, html: String.raw`
  <div class="sol-box">속력은 \(\sqrt{\left(\dfrac{dx}{dt}\right)^2+\left(\dfrac{dy}{dt}\right)^2}\)이다. 두 시각의 값을 각각 구해 같다고 놓으면 \(a\)에 대한 일차방정식이 된다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> 속도 성분을 구한다</div>
    $$
    \frac{dx}{dt}=a+\sec^2t,\qquad \frac{dy}{dt}=\sec t\tan t.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(t=\dfrac{3\pi}{4}\)에서의 속력을 구한다</div>
    <p>\(\sec\dfrac{3\pi}{4}=-\sqrt2\), \(\tan\dfrac{3\pi}{4}=-1\)이므로</p>
    $$
    \frac{dx}{dt}=a+2,\qquad \frac{dy}{dt}=\sqrt2,
    $$
    $$
    \sqrt{(a+2)^2+2}=\sqrt{a^2+4a+6}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=\pi\)에서의 속력을 구한다</div>
    <p>\(\sec\pi=-1\), \(\tan\pi=0\)이므로</p>
    $$
    \frac{dx}{dt}=a+1,\qquad \frac{dy}{dt}=0,\qquad \sqrt{(a+1)^2}=\sqrt{a^2+2a+1}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 같게 놓고 푼다</div>
    $$
    a^2+4a+6=a^2+2a+1,\qquad 2a=-5,\qquad a=-\frac52.
    $$
  </div>
  <div class="sol-final">답 &nbsp;①</div>
` },

"2027_mock06/calculus/q28": { answer: 3, html: String.raw`
  <div class="sol-box">\(\mathrm Q\) 쪽은 \(e^{2q}=t\)라서 \(g\)를 \(t\)의 식으로 바로 쓸 수 있다. \(\mathrm P\) 쪽은 그게 안 되지만, \(9f'(1)=4g'(1)=6\)임을 알면 극한을 두 조각으로 쪼갤 수 있다.</div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">1</span> \(f'\)를 \(p(t)\)로 나타낸다</div>
    <p>\(\mathrm P\)의 \(x\)좌표를 \(p(t)\)라 하면 \(e^{2p(t)}-e^{-p(t)}+1=t\)이고, 양변을 \(t\)에 대하여 미분하면</p>
    $$
    p'(t)\left(2e^{2p(t)}+e^{-p(t)}\right)=1,\qquad p'(t)=\frac1{2e^{2p(t)}+e^{-p(t)}}.
    $$
    <p>\(f(t)=e^{2p(t)}\)이므로</p>
    $$
    f'(t)=2p'(t)e^{2p(t)}=\frac{2e^{2p(t)}}{2e^{2p(t)}+e^{-p(t)}}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> \(g\)를 \(t\)의 식으로 쓴다</div>
    <p>\(\mathrm Q\)의 \(x\)좌표를 \(q(t)\)라 하면 \(e^{2q(t)}=t\)이므로 \(e^{-q(t)}=t^{-\frac12}\)이고</p>
    $$
    g(t)=e^{2q(t)}-e^{-q(t)}+1=t-t^{-\frac12}+1,\qquad
    g'(t)=1+\frac12t^{-\frac32}.
    $$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> \(t=1\)에서의 값을 확인한다</div>
    <p>\(t=1\)을 넣으면 \(e^{2p(1)}=e^{-p(1)}\)에서 \(e^{3p(1)}=1\), 즉 \(p(1)=0\)이므로</p>
    $$
    f'(1)=\frac{2}{2+1}=\frac23,\qquad g'(1)=1+\frac12=\frac32.
    $$
    <p>따라서 \(9f'(1)=4g'(1)=6\)이고, 구하는 극한을 두 조각으로 나눌 수 있다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> 앞 조각을 계산한다</div>
    <p>\(t\to1\)일 때 \(p(t)\to0\)이고 \(t-1=e^{2p(t)}-e^{-p(t)}\)이므로, \(p(t)=p\)로 줄여 쓰면</p>
    $$
    \frac{9f'(t)-6}{t-1}=\frac{\frac{18e^{2p}}{2e^{2p}+e^{-p}}-6}{e^{2p}-e^{-p}}
    =\frac{6\left(e^{2p}-e^{-p}\right)}{\left(e^{2p}-e^{-p}\right)\left(2e^{2p}+e^{-p}\right)}=\frac6{2e^{2p}+e^{-p}},
    $$
    <p>이므로 극한값은 \(\dfrac6{2+1}=2\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> 뒤 조각을 계산한다</div>
    <p>이 조각은 \(g'\)의 미분계수 꼴이다.</p>
    $$
    \lim_{t\to1}\frac{4g'(t)-6}{t-1}=4\lim_{t\to1}\frac{g'(t)-g'(1)}{t-1}=4g''(1).
    $$
    <p>\(g''(t)=-\dfrac34t^{-\frac52}\)이므로 \(4g''(1)=-3\)이다.</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">6</span> 빼서 구한다</div>
    $$
    2-(-3)=5.
    $$
  </div>
  <div class="sol-final">답 &nbsp;③</div>
` },
};
