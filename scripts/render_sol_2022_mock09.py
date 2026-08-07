# -*- coding: utf-8 -*-
"""2022 9월 모평 해설 그래프 렌더 (SelecQ 자체 제작)."""
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from pathlib import Path

plt.rcParams.update({
    "font.family": "Malgun Gothic",
    "mathtext.fontset": "cm",
    "axes.unicode_minus": False,
    "figure.dpi": 150,
})
OUT = Path(__file__).resolve().parent.parent / "webapp" / "sol"
BLUE, RED, GREEN = "#2563eb", "#e11d48", "#059669"


def axes(ax):
    ax.axhline(0, color="#94a3b8", lw=0.9)
    ax.axvline(0, color="#94a3b8", lw=0.9)
    ax.grid(alpha=0.25)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)


# ── 공통 10: y=a sin(bπx) 와 직선 y=a, 삼각형 OAB ────────────────
fig, ax = plt.subplots(figsize=(5.0, 3.4))
x = np.linspace(0, 3, 500)
ax.plot(x, np.sin(np.pi * x), color=BLUE, lw=2, label=r"$y=a\sin(b\pi x)$")
ax.axhline(1, color=RED, ls="--", lw=1.2)
A, B = (0.5, 1), (2.5, 1)
ax.fill([0, A[0], B[0]], [0, A[1], B[1]], color=GREEN, alpha=0.13)
ax.plot([0, A[0], B[0], 0], [0, A[1], B[1], 0], color=GREEN, lw=1.4)
for p, name, ha in ((A, "A", "right"), (B, "B", "left")):
    ax.plot(*p, "o", color=RED, ms=6)
    ax.text(p[0], p[1] + 0.13, name, fontsize=12, ha=ha, color=RED)
ax.text(2.9, 1.12, r"$y=a$", color=RED, fontsize=11, ha="right")
ax.set_xticks([0, 0.5, 2.5], ["O", r"$\frac{1}{2b}$", r"$\frac{5}{2b}$"])
ax.set_yticks([0, 1], ["", r"$a$"])
ax.set_xlim(-0.12, 3.05); ax.set_ylim(-1.3, 1.5)
axes(ax); ax.legend(loc="lower right", fontsize=10, frameon=False)
fig.tight_layout(); fig.savefig(OUT / "2022_mock09_common_q10.png"); plt.close(fig)


# ── 공통 12: 원에 내접한 삼각형 ABC 와 호 BC 위의 점 D ────────────
R = 2 * np.sqrt(7)
th = np.linspace(0, 2 * np.pi, 400)
fig, ax = plt.subplots(figsize=(4.4, 4.4))
ax.plot(R * np.cos(th), R * np.sin(th), color="#94a3b8", lw=1.2)
pt = lambda d: np.array([R * np.cos(np.radians(d)), R * np.sin(np.radians(d))])
aA, aB, aC = 90, 210, -30
aD = aC - 2 * np.degrees(np.arcsin(1 / (2 * np.sqrt(7))))   # 현 CD = 2
P = {"A": pt(aA), "B": pt(aB), "C": pt(aC), "D": pt(aD)}
for u, v, col in (("A", "B", BLUE), ("A", "C", BLUE), ("B", "C", BLUE),
                  ("B", "D", RED), ("C", "D", RED)):
    ax.plot(*zip(P[u], P[v]), color=col, lw=1.8)
for k, (dx, dy) in (("A", (0, .8)), ("B", (-.9, -.5)), ("C", (.7, -.6)), ("D", (.8, -.4))):
    ax.plot(*P[k], "o", color="#0f172a", ms=5)
    ax.text(P[k][0] + dx, P[k][1] + dy, k, fontsize=13, ha="center", va="center")
mid = lambda u, v: (P[u] + P[v]) / 2
ax.text(*(mid("B", "D") + [-0.2, -0.85]), r"$8$", color=RED, fontsize=12, ha="center")
ax.text(*(mid("C", "D") + [1.05, -0.75]), r"$2$", color=RED, fontsize=12, ha="center")
ax.text(*(mid("B", "C") + [0, 0.45]), r"$2\sqrt{21}$", color=BLUE, fontsize=12, ha="center")
ax.text(P["A"][0], P["A"][1] - 1.5, r"$\frac{\pi}{3}$", color=BLUE, fontsize=13, ha="center")
ax.set_aspect("equal"); ax.axis("off")
ax.set_xlim(-6.6, 6.6); ax.set_ylim(-6.9, 7.1)
fig.tight_layout(); fig.savefig(OUT / "2022_mock09_common_q12.png"); plt.close(fig)


# ── 공통 15: 점화식의 y=f(x) 와 역상 추적 ────────────────────────
fig, ax = plt.subplots(figsize=(4.6, 4.2))
xs = [-1, -0.5, 0.5, 1]
ys = [0, -1, 1, 0]
ax.plot(xs, ys, color=BLUE, lw=2.2, label=r"$y=f(x)$")
for lv, col in ((1, RED), (0.5, GREEN)):
    ax.axhline(lv, color=col, ls="--", lw=1.1)
pre = {1: [0.5], 0.5: [0.25, 0.75]}
for lv, col in ((1, RED), (0.5, GREEN)):
    for x0 in pre[lv]:
        ax.plot([x0, x0], [0, lv], color=col, ls=":", lw=1.1)
        ax.plot(x0, lv, "o", color=col, ms=6)
ax.text(1.06, 1.0, r"$y=1$", color=RED, fontsize=10, va="center")
ax.text(1.06, 0.5, r"$y=\frac{1}{2}$", color=GREEN, fontsize=10, va="center")
ax.set_xticks([-1, -0.5, 0, 0.25, 0.5, 0.75, 1],
              ["-1", r"$-\frac{1}{2}$", "O", r"$\frac{1}{4}$", r"$\frac{1}{2}$",
               r"$\frac{3}{4}$", "1"])
ax.set_yticks([-1, 0, 1])
ax.set_xlim(-1.25, 1.62); ax.set_ylim(-1.35, 1.35)
axes(ax); ax.legend(loc="upper left", fontsize=10, frameon=False)
fig.tight_layout(); fig.savefig(OUT / "2022_mock09_common_q15.png"); plt.close(fig)


# ── 공통 20: y=g(x) 와 수평선 y=k ──────────────────────────────
fig, ax = plt.subplots(figsize=(5.0, 3.8))
xl = np.linspace(-3.2, 0, 200)
xr = np.linspace(0, 7.2, 500)
ax.plot(xl, -7 * xl, color=BLUE, lw=2)
ax.plot(xr, xr**3 - 9 * xr**2 + 15 * xr, color=BLUE, lw=2)
ax.axhspan(0, 7, color=GREEN, alpha=0.13)
for y0 in (0, 7):
    ax.axhline(y0, color=GREEN, ls="--", lw=1.1)
for p, lab, off in (((1, 7), r"$(1,\,7)$", (0.35, 2.6)), ((5, -25), r"$(5,\,-25)$", (-1.6, -4.6))):
    ax.plot(*p, "o", color=RED, ms=6)
    ax.text(p[0] + off[0], p[1] + off[1], lab, color=RED, fontsize=10.5, ha="right")
ax.text(3.4, 2.6, r"$0<k<7$", color=GREEN, fontsize=11, ha="center")
ax.text(0.04, 0.95, r"$y=g(x)$", transform=ax.transAxes, color=BLUE, fontsize=11, va="top")
ax.set_xticks([0, 1, 5]); ax.set_yticks([-25, 0, 7])
ax.set_xlim(-3.3, 7.3); ax.set_ylim(-33, 26)
axes(ax)
fig.tight_layout(); fig.savefig(OUT / "2022_mock09_common_q20.png"); plt.close(fig)

print("완료:", *(p.name for p in sorted(OUT.glob("2022_mock09_*"))))
