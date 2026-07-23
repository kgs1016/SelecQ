# -*- coding: utf-8 -*-
"""
1차 자동 유형 분류 (키워드 규칙) -> data/meta/tags_auto.json

- 과목(subject)이 이미 확정돼 있어 후보 유형이 좁음 (공통 17 / 확통 8 / 미적 7 / 기하 7)
- 확신도: high(단독 강신호) / med(약한 우세) / low(신호 없음·동점) — low는 이미지 판독 대상
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
META = ROOT / "data" / "meta"

# (type_code, [(regex, weight), ...])
RULES = {
    "common": [
        ("su1_explog_calc", [(r"\blog\b", 3), (r"거듭제곱근", 4), (r"상용로그", 4)]),
        ("su1_explog_func", [(r"지수함수", 4), (r"로그함수", 4), (r"곡선.*log", 3)]),
        ("su1_trig_basic", [(r"\bsin\b|\bcos\b|\btan\b", 3), (r"삼각함수", 3), (r"주기", 3)]),
        ("su1_trig_apply", [(r"사인법칙|코사인법칙", 5), (r"삼각형.*외접원|외접원.*삼각형", 4), (r"삼각형 ABC", 3)]),
        ("su1_seq_arith_geo", [(r"등차수열", 5), (r"등비수열", 5), (r"공차", 4), (r"공비", 4)]),
        ("su1_seq_sum", [(r"첫째항부터.*까지의 합", 4), (r"수열의 합", 4)]),
        ("su1_seq_induction", [(r"수학적 귀납법", 5), (r"모든 자연수.*만족시", 3), (r"귀납", 4)]),
        ("su2_limit_calc", [(r"극한값|극한", 4), (r"\blim\b", 3)]),
        ("su2_continuity", [(r"연속", 4), (r"불연속", 4)]),
        ("su2_diff_basic", [(r"미분계수", 4), (r"평균변화율", 4), (r"′", 3), (r"미분가능", 5)]),
        ("su2_diff_tangent", [(r"접선", 5), (r"접하", 2)]),
        ("su2_diff_graph", [(r"극댓값|극솟값|극대|극소", 4), (r"증가|감소", 1), (r"최댓값|최솟값", 1)]),
        ("su2_diff_eq", [(r"(방정식|부등식).{0,20}(실근|근의 개수|성립)", 4), (r"실근의 개수", 4)]),
        ("su2_diff_motion", [(r"수직선 위를 움직이는 점", 4), (r"속도", 3), (r"가속도", 3), (r"시각.{0,6}에서", 2)]),
        ("su2_int_basic", [(r"부정적분", 5), (r"정적분", 3), (r"적분", 2)]),
        ("su2_int_area", [(r"둘러싸인", 5), (r"곡선.{0,30}넓이|넓이.{0,15}곡선", 4), (r"넓이", 1)]),
        ("su2_int_motion", [(r"움직인 거리", 5), (r"위치", 3)]),
    ],
    "prob_stat": [
        ("ps_perm", [(r"일렬로", 4), (r"나열", 3), (r"순열", 4), (r"이웃하", 3)]),
        ("ps_combination", [(r"중복조합", 5), (r"택하", 2), (r"조합", 3)]),
        ("ps_binomial", [(r"전개식", 5), (r"계수", 3), (r"이항정리", 5)]),
        ("ps_prob_basic", [(r"확률", 1), (r"임의로", 2), (r"꺼내", 2), (r"주사위|동전", 2)]),
        ("ps_prob_cond", [(r"조건부확률", 5), (r"독립", 4), (r"사건", 2), (r"[을일] 때.{0,40}확률", 4)]),
        ("ps_dist_discrete", [(r"확률변수", 3), (r"확률질량함수", 4), (r"이항분포", 5), (r"기댓값", 3)]),
        ("ps_dist_normal", [(r"정규분포", 5), (r"확률밀도함수", 4), (r"표준정규분포", 4)]),
        ("ps_estimation", [(r"표본평균", 5), (r"신뢰구간", 5), (r"모평균|모표준편차", 4), (r"임의추출", 3)]),
    ],
    "calculus": [
        ("calc_seq_limit", [(r"수열.{0,20}극한|극한.{0,20}수열", 4), (r"\blim\b", 1)]),
        ("calc_series", [(r"급수", 5), (r"등비급수", 5), (r"얻은 그림", 4), (r"이와 같은 과정을", 4)]),
        ("calc_diff_func", [(r"\bln\b", 3), (r"\bsin\b|\bcos\b|\btan\b", 2), (r"지수함수|로그함수", 2),
                            (r"부채꼴", 5), (r"극한값", 3)]),
        ("calc_diff_rules", [(r"역함수", 4), (r"음함수", 5), (r"매개변수", 5), (r"합성함수", 4)]),
        ("calc_diff_apply", [(r"극댓값|극솟값|극대|극소", 4), (r"변곡점", 5), (r"최댓값|최솟값", 3), (r"접선", 3)]),
        ("calc_int_rules", [(r"치환", 4), (r"부분적분", 5), (r"부정적분", 4), (r"정적분", 2)]),
        ("calc_int_apply", [(r"둘러싸인", 5), (r"부피", 5), (r"곡선.{0,30}넓이|넓이.{0,15}곡선", 4),
                            (r"움직인 거리", 4), (r"넓이", 1)]),
    ],
    "geometry": [
        ("geo_parabola", [(r"포물선", 5), (r"준선", 5)]),
        ("geo_ellipse", [(r"타원", 5)]),
        ("geo_hyperbola", [(r"쌍곡선", 5), (r"점근선", 4)]),
        ("geo_vector_op", [(r"벡터", 2)]),
        ("geo_vector_dot", [(r"내적", 5), (r"•|·", 1)]),
        ("geo_space_figure", [(r"정사영", 5), (r"이면각", 5), (r"평면.{0,10}수직|수직인 평면", 3), (r"직선.{0,10}평면", 3)]),
        ("geo_space_coord", [(r"좌표공간", 5), (r"구의 방정식", 5), (r"중심이.{0,20}구", 4)]),
    ],
}

# 매우 안정적인 슬롯 프라이어 (2022~2027 전 시험 공통): 공통 1번 = 지수·로그 계산
PRIORS = {("common", 1): ("su1_explog_calc", 3)}

UNIT_OF = {}


def load_units():
    tax = json.loads((META / "taxonomy.json").read_text(encoding="utf-8"))
    for subj, sdata in tax["subjects"].items():
        for unit in sdata["units"]:
            for t in unit["types"]:
                UNIT_OF[t["code"]] = unit["code"]


def classify(subject: str, qno: int, text: str):
    scores = {}
    evidence = {}
    for type_code, patterns in RULES[subject]:
        s = 0
        ev = []
        for pat, w in patterns:
            if re.search(pat, text):
                s += w
                ev.append(pat)
        if s:
            scores[type_code] = s
            evidence[type_code] = ev
    pr = PRIORS.get((subject, qno))
    if pr:
        scores[pr[0]] = scores.get(pr[0], 0) + pr[1]
        evidence.setdefault(pr[0], []).append("slot_prior")
    if not scores:
        return None, None, "low", []
    ranked = sorted(scores.items(), key=lambda kv: -kv[1])
    top, top_s = ranked[0]
    second_s = ranked[1][1] if len(ranked) > 1 else 0
    if top_s >= 4 and top_s - second_s >= 3:
        conf = "high"
    elif top_s >= 2 and top_s > second_s:
        conf = "med"
    else:
        conf = "low"
    return top, UNIT_OF.get(top), conf, evidence.get(top, [])


def main():
    load_units()
    texts = json.loads((META / "question_texts.json").read_text(encoding="utf-8"))
    out = []
    stats = {}
    for key, text in texts.items():
        exam_id, subject, qtag = key.split("/")
        qno = int(qtag[1:])
        type_code, unit, conf, ev = classify(subject, qno, text)
        out.append({
            "key": key,
            "exam_id": exam_id,
            "subject": subject,
            "question_no": qno,
            "type": type_code,
            "unit": unit,
            "confidence": conf,
            "evidence": ev,
            "method": "keyword_rules_v1",
            "needs_review": conf != "high",
        })
        stats.setdefault(subject, {}).setdefault(conf, 0)
        stats[subject][conf] += 1
    dest = META / "tags_auto.json"
    dest.write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    total = len(out)
    print(f"{total} questions tagged -> {dest}\n")
    for subj, cs in stats.items():
        n = sum(cs.values())
        line = ", ".join(f"{c}: {cs.get(c,0)}" for c in ("high", "med", "low"))
        print(f"{subj:10s} (n={n}): {line}")
    n_img = sum(1 for r in out if r["confidence"] != "high")
    print(f"\n이미지 판독 필요(비-high): {n_img} / {total}")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
