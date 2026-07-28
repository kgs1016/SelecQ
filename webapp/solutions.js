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
       \(g(\cdots)=2\)를 만들 수 없다. 따라서 서로 다른 두 극점 \(\alpha<\beta\)를 가지며,
       \(d=\beta-\alpha\)라 하면</p>
    <ul>
      <li>\(d>2\) : 길이 2인 창에 둘 다 못 들어와 \(g\le 1\) &rarr; <span class="sol-no">(나) 위배</span></li>
      <li>\(d<2\) : \(t=\beta-2\)에서 \(g\)가 \(1\to2\)로 점프하여
          \(\displaystyle\lim_{t\to a^+}g(t)+\lim_{t\to a^-}g(t)=3>2\) &rarr;
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
    <p>이 곧 \(y=x-\alpha\) 꼴이므로 \(\alpha=-3\). (\(f'(0)>1\)은 이 접선 구성이 유일함을 보장.)</p>
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> \(f(x)\) 세우기</div>
    <p>접선 \(y=x+3\)은 \(f\)와 \(x=1\)(접점)·\(x=-3\)에서 만나므로</p>
    $$f(x)-(x+3)=a(x-1)^2(x+3)\quad(a<0)\ \Rightarrow\ f(x)=(x+3)\{a(x-1)^2+1\}$$
  </div>
  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">5</span> (가) 서로 다른 실근 2개 &rArr; \(a\) 결정</div>
    <p>\(f(x)=0 \Rightarrow x=-3\) 또는 \((x-1)^2=-\dfrac1a\). 실근이 2개가 되려면 이 근이 \(-3\)과 겹쳐야 하므로</p>
    $$1-\sqrt{-\tfrac1a}=-3\ \Rightarrow\ \sqrt{-\tfrac1a}=4\ \Rightarrow\ a=-\tfrac1{16}$$
    $$\therefore\ f(x)=-\tfrac1{16}(x+3)^2(x-5)$$
    <p>검토: 계수 \(-\tfrac1{16}<0\) ✓, \(\ f'(0)=\tfrac{21}{16}>1\) ✓, 근은 \(-3\)(중근)·\(5\).</p>
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
    <p>\(0\le x<4\)에서 두 곡선 \(y=\sin\dfrac{\pi x}{2}\), \(y=\cos\dfrac{\pi x}{2}\)와 직선 \(y=t\)의
       교점의 \(x\)좌표가 실근이다. 그중 최소가 \(\alpha(t)\), 최대가 \(\beta(t)\).</p>
  </div>
  <figure class="sol-fig"><img src="sol/2022_mock06_common_q15.png" alt="sin·cos 그래프와 y=t">
    <figcaption>\(y=\sin\frac{\pi x}{2}\)(파랑) · \(y=\cos\frac{\pi x}{2}\)(초록)와 \(y=t\)의 교점</figcaption></figure>

  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">2</span> ㄱ. \(-1\le t<0\)에서 \(\alpha+\beta=5\) &nbsp;<span class="sol-ok">참</span></div>
    <p>\(y=\cos\dfrac{\pi x}{2}\)는 \(x=2\)에 대칭 → \(\cos\dfrac{\pi x}{2}=t\)의 두 근은 \(2-p,\ 2+p\).
       \(y=\sin\dfrac{\pi x}{2}\)는 \(x=3\)에 대칭 → \(\sin\dfrac{\pi x}{2}=t\,(t<0)\)의 두 근은 \(3-q,\ 3+q\).</p>
    <p>\(t<0\)이면 최소 \(\alpha=2-p\), 최대 \(\beta=3+q\). 대입하면 \(\cos\dfrac{\pi p}{2}=-t=\cos\dfrac{\pi q}{2}\)이므로 \(p=q\).</p>
    $$\therefore\ \alpha+\beta=(2-p)+(3+q)=5$$
  </div>

  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">3</span> ㄴ. \(\beta-\alpha=\beta(0)-\alpha(0)\)인 \(t\)는 \(0\le t\le\dfrac{\sqrt2}{2}\) &nbsp;<span class="sol-ok">참</span></div>
    <p>\(t=0\)이면 근이 \(0,1,2,3\)이라 \(\beta(0)-\alpha(0)=3\).</p>
    <p>\(0&lt;t<1\)에서 \((0,1)\) 안의 근을 \(\sin\dfrac{\pi x_1}{2}=t\), \(\cos\dfrac{\pi x_2}{2}=t\)로 두면,
       \(\cos\dfrac{\pi x_2}{2}=\sin\dfrac{\pi(1-x_2)}{2}\)이고 \((0,1)\)에서 \(\sin\)이 일대일이므로 \(x_1=1-x_2\), 즉 \(x_1+x_2=1\).</p>
    <p>최대 근은 \(\beta=4-x_2\). \(0&lt;t\le\dfrac{\sqrt2}{2}\)이면 최소 근이 \(\alpha=x_1\)이므로</p>
    $$\beta-\alpha=(4-x_2)-x_1=4-(x_1+x_2)=3$$
    <p>\(\dfrac{\sqrt2}{2}&lt;t&lt;1\)이면 \(\alpha=x_2\)라 \(\beta-\alpha=4-2x_2&gt;3\), \(t<0\)이면 \(\beta-\alpha<3\).
       따라서 \(\beta-\alpha=3\)인 범위는 \(0\le t\le\dfrac{\sqrt2}{2}\).</p>
  </div>

  <div class="sol-step">
    <div class="sol-h"><span class="sol-num">4</span> ㄷ. \(t_2-t_1=\dfrac12\)이면 \(t_1t_2=\dfrac13\)? &nbsp;<span class="sol-no">거짓</span></div>
    <p>\(0&lt;t<1\)에서 \(\alpha(t)\)는 \(t=\dfrac{\sqrt2}{2}\)에서 최대인 <b>텐트 모양</b>(그 전엔 \(\sin\)쪽, 그 후엔 \(\cos\)쪽 근이 최소).
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

};
