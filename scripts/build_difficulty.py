"""메가스터디 정답률(data/meta/megastudy_rates.json)을 문항별 난이도로 매핑.
- 공통 1~22: 확통/미적/기하 3개 응시그룹 정답률 평균(megastudy_rates.json에서 이미 평균됨).
- 선택 23~30: 해당 과목 정답률.
- 정답률(%) → 상/중/하 3구간.
출력: data/meta/difficulty.json  { "<exam_id>/<subject>/q<NN>": {"rate":int, "level":"상|중|하"} }
"""
import json, sys, collections
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
META = ROOT / "data" / "meta"

# 정답률 컷: 높을수록 쉬움
#   하(쉬움):  rate >= HI
#   중(보통):  MID <= rate < HI
#   상(어려움): rate < MID
HI, MID = 82, 50

def level(rate):
    if rate is None:
        return None
    if rate >= HI:
        return "하"
    if rate >= MID:
        return "중"
    return "상"

def main():
    rates = json.loads((META / "megastudy_rates.json").read_text(encoding="utf-8"))
    qindex = json.loads((META / "questions_index.json").read_text(encoding="utf-8"))

    out = {}
    dist = collections.Counter()
    missing = []
    for q in qindex:
        eid, subj, no = q["exam_id"], q["subject"], q["question_no"]
        node = rates.get(eid, {}).get(subj, {}).get(str(no))
        if not node:
            missing.append(f"{eid}/{subj}/q{no:02d}")
            continue
        rate = node.get("rate")
        lv = level(rate)
        out[f"{eid}/{subj}/q{no:02d}"] = {"rate": rate, "level": lv}
        dist[lv] += 1

    (META / "difficulty.json").write_text(
        json.dumps(out, ensure_ascii=False, indent=0), encoding="utf-8")

    print(f"난이도 매핑: {len(out)}/{len(qindex)} 문항")
    print(f"분포 → 하:{dist['하']}  중:{dist['중']}  상:{dist['상']}")
    if missing:
        print(f"WARN 정답률 없음 {len(missing)}건: {missing[:10]}")
    # 배점별 난이도 교차(정합성 확인)
    by_pts = collections.defaultdict(collections.Counter)
    for q in qindex:
        k = f"{q['exam_id']}/{q['subject']}/q{q['question_no']:02d}"
        if k in out:
            by_pts[q["points"]][out[k]["level"]] += 1
    print("배점별 난이도 분포:")
    for p in sorted(by_pts):
        c = by_pts[p]
        print(f"  {p}점: 하{c['하']} 중{c['중']} 상{c['상']}")

if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
