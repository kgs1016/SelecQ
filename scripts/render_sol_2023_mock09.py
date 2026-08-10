# -*- coding: utf-8 -*-
"""2023 9월 모평 해설 그래프 렌더 (SelecQ 자체 제작)."""
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


# ── 공통 19: y=3x⁴-4x³-12x² 와 수평선 y=-k ─────────────────────
fig, ax = plt.subplots(figsize=(5.2, 3.8))
x = np.linspace(-1.9, 3.05, 700)
ax.plot(x, 3 * x**4 - 4 * x**3 - 12 * x**2, color=BLUE, lw=2)
ax.axhspan(-5, 0, color=GREEN, alpha=0.15)
for y0 in (-5, 0):
    ax.axhline(y0, color=GREEN, ls="--", lw=1.1)
for p, lab, off in (((-1, -5), r"$(-1,\,-5)$", (-0.12, 3.2)),
                    ((0, 0), r"$(0,\,0)$", (0.62, 2.6)),
                    ((2, -32), r"$(2,\,-32)$", (0.05, -6.5))):
    ax.plot(*p, "o", color=RED, ms=6)
    ax.text(p[0] + off[0], p[1] + off[1], lab, color=RED, fontsize=10.5, ha="center")
ax.text(3.0, -2.6, r"$-5<-k<0$", color=GREEN, fontsize=11, ha="right")
ax.text(0.03, 0.95, r"$y=3x^{4}-4x^{3}-12x^{2}$", transform=ax.transAxes,
        color=BLUE, fontsize=11, va="top")
ax.set_xticks([-1, 0, 2]); ax.set_yticks([-32, -5, 0])
ax.set_xlim(-2.0, 3.1); ax.set_ylim(-42, 22)
axes(ax)
fig.tight_layout(); fig.savefig(OUT / "2023_mock09_common_q19.png"); plt.close(fig)


# ── 공통 20: f(x)=x³+x²-x 와 g(x)=4|x|-3 ──────────────────────
fig, ax = plt.subplots(figsize=(5.2, 3.8))
x = np.linspace(-2.15, 2.05, 800)
f = x**3 + x**2 - x
g = 4 * np.abs(x) - 3
ax.plot(x, f, color=BLUE, lw=2, label=r"$y=f(x)$")
ax.plot(x, g, color=RED, lw=1.8, label=r"$y=g(x)=4|x|-3$")
m = (x >= -1) & (x <= 1)
ax.fill_between(x[m], f[m], g[m], color=GREEN, alpha=0.22)
for p, lab, off in (((-1, 1), r"$(-1,\,1)$", (-0.42, 0.55)),
                    ((1, 1), r"$(1,\,1)$", (0.40, 0.55))):
    ax.plot(*p, "o", color="#0f172a", ms=6)
    ax.text(p[0] + off[0], p[1] + off[1], lab, fontsize=10.5, ha="center")
ax.text(0, -1.55, r"$S$", color=GREEN, fontsize=13, ha="center")
ax.set_xticks([-1, 0, 1]); ax.set_yticks([-3, 0, 1])
ax.set_xlim(-2.25, 2.15); ax.set_ylim(-6.5, 11)
axes(ax); ax.legend(loc="upper left", fontsize=9.5, frameon=False)
fig.tight_layout(); fig.savefig(OUT / "2023_mock09_common_q20.png"); plt.close(fig)

print("완료:", *(p.name for p in sorted(OUT.glob("2023_mock09_*"))))
