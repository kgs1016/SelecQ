# -*- coding: utf-8 -*-
"""2022 6월 모평 해설 그래프 렌더 (SelecQ 자체 제작)."""
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
OUT.mkdir(parents=True, exist_ok=True)
BLUE, RED, GREEN = "#2563eb", "#e11d48", "#059669"


def axes(ax):
    ax.axhline(0, color="#94a3b8", lw=0.9)
    ax.axvline(0, color="#94a3b8", lw=0.9)
    ax.grid(alpha=0.25)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)


# ── 공통 10: y = x^2+3x (x>0) 와 y = n ──────────────────────────
fig, ax = plt.subplots(figsize=(4.6, 3.4))
x = np.linspace(0, 2.7, 400)
ax.plot(x, x**2 + 3*x, color=BLUE, lw=2, label=r"$y=x^{2}+3x\ (x>0)$")
ax.axhspan(4, 10, color=GREEN, alpha=0.12)
for y0, xa in ((4, 1), (10, 2)):
    ax.plot([0, xa], [y0, y0], color=RED, ls="--", lw=1.2)
    ax.plot([xa, xa], [0, y0], color=RED, ls="--", lw=1.2)
    ax.plot(xa, y0, "o", color=RED, ms=6)
ax.text(2.72, 6.6, r"$4<n<10$", color=GREEN, fontsize=11, ha="right")
ax.set_xticks([0, 1, 2]); ax.set_yticks([0, 4, 10])
ax.set_xlim(-0.15, 2.75); ax.set_ylim(-1.2, 16)
axes(ax); ax.legend(loc="upper left", fontsize=9, frameon=False)
fig.tight_layout(); fig.savefig(OUT / "2022_mock06_common_q10.png"); plt.close(fig)


# ── 공통 14: 두 경우의 y=g(x) 개형 비교 ─────────────────────────
fig, axs = plt.subplots(1, 2, figsize=(7.6, 3.3), sharey=True)
x = np.linspace(-1.2, 7.6, 800)

g1 = x * (x - 6)**2                      # p=3, q=39
axs[0].plot(x, g1, color=BLUE, lw=2)
axs[0].plot(6, 0, "o", color=GREEN, ms=6)
axs[0].set_title(r"( i )  $p=3,\ q=39$ — 모든 점에서 미분가능", fontsize=10)

g2 = np.where(x < 0, x**2 * (x - 6),
     np.where(x <= 6, x**2 * (6 - x), x**2 * (x - 6)))   # p=1, q=7
axs[1].plot(x, g2, color=BLUE, lw=2)
axs[1].plot(6, 0, "o", color=RED, ms=7)
axs[1].annotate("첨점", xy=(6, 0), xytext=(4.4, -34), color=RED, fontsize=10,
                arrowprops=dict(arrowstyle="->", color=RED, lw=1.2))
axs[1].set_title(r"( ii )  $p=1,\ q=7$ — $x=6$ 에서만 미분불가능", fontsize=10)

for ax in axs:
    ax.set_xticks([0, 6]); ax.set_yticks([0])
    ax.set_xlim(-1.3, 7.7); ax.set_ylim(-60, 60)
    axes(ax)
    ax.text(0.04, 0.93, r"$y=g(x)$", transform=ax.transAxes,
            color=BLUE, fontsize=11, va="top")
fig.tight_layout(); fig.savefig(OUT / "2022_mock06_common_q14.png"); plt.close(fig)


# ── 미적 25: y=e^|x| 와 원점에서 그은 두 접선 ────────────────────
fig, ax = plt.subplots(figsize=(3.8, 4.4))
x = np.linspace(-1.75, 1.75, 500)
ax.plot(x, np.exp(np.abs(x)), color=BLUE, lw=2, label=r"$y=e^{|x|}$")
xt = np.array([-1.72, 1.72])
ax.plot(xt, np.e * xt, color=RED, lw=1.5)
ax.plot(xt, -np.e * xt, color=RED, lw=1.5)
for s, ha, dx in ((1, "left", 0.16), (-1, "right", -0.16)):
    ax.plot(s, np.e, "o", color=RED, ms=6)
    ax.text(s + dx, np.e - 0.05, rf"$({s},\,e)$", fontsize=10, ha=ha, color=RED)
a = np.arctan(np.e)                       # 두 접선이 x축 양의 방향과 이루는 각
th = np.linspace(a, np.pi - a, 60)
ax.plot(0.5 * np.cos(th), 0.5 * np.sin(th), color=GREEN, lw=1.4)
ax.text(0, 0.63, r"$\theta$", color=GREEN, fontsize=13, ha="center")
ax.set_xticks([-1, 0, 1]); ax.set_yticks([0, 1])
ax.set_xlim(-2.4, 2.4); ax.set_ylim(-1.1, 5.4)
ax.set_aspect("equal")
axes(ax); ax.legend(loc="upper left", fontsize=10, frameon=False)
fig.tight_layout(); fig.savefig(OUT / "2022_mock06_calculus_q25.png"); plt.close(fig)

print("완료:", *(p.name for p in sorted(OUT.glob("2022_mock06_*"))))
