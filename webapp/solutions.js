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
` }

};
