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
` }

};
