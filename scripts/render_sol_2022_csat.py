# -*- coding: utf-8 -*-
"""2022 수능 해설 그래프 렌더 (SelecQ 자체 제작)."""
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


# ── 공통 8: 포물선·직선이 둘러싼 넓이를 x=k 가 이등분 ───────────
fig, ax = plt.subplots(figsize=(5.0, 3.6))
x = np.linspace(-0.6, 6.8, 500)
ax.plot(x, x**2 - 5 * x, color=BLUE, lw=2, label=r"$y=x^{2}-5x$")
ax.plot(x, x, color=RED, lw=1.8, label=r"$y=x$")
xa = np.linspace(0, 3, 200); xb = np.linspace(3, 6, 200)
ax.fill_between(xa, xa, xa**2 - 5 * xa, color=GREEN, alpha=0.22)
ax.fill_between(xb, xb, xb**2 - 5 * xb, color=GREEN, alpha=0.10)
ax.axvline(3, color=GREEN, ls="--", lw=1.4)
ax.text(2.85, 9.4, r"$x=k$", color=GREEN, fontsize=11, ha="right")
for xx in (1.35, 4.6):
    ax.text(xx, -3.2, r"$18$", color=GREEN, fontsize=12, ha="center")
for p in ((0, 0), (6, 6)):
    ax.plot(*p, "o", color="#0f172a", ms=5)
ax.set_xticks([0, 3, 6]); ax.set_yticks([0, 6])
ax.set_xlim(-0.8, 7.0); ax.set_ylim(-8, 11)
axes(ax); ax.legend(loc="upper left", fontsize=10, frameon=False)
fig.tight_layout(); fig.savefig(OUT / "2022_csat_common_q08.png"); plt.close(fig)


# ── 공통 11: 정의역이 제한된 tan 그래프와 정삼각형 ABC ───────────
t = 1 / np.sqrt(3)
a = 4 * t
fig, ax = plt.subplots(figsize=(4.5, 4.5))
for lo, hi in ((-a / 2, a / 2), (a / 2, a)):
    xs = np.linspace(lo + 1e-3, hi - 1e-3, 400)
    xs = xs[np.abs(np.tan(np.pi * xs / a)) < 2.4]
    ax.plot(xs, np.tan(np.pi * xs / a), color=BLUE, lw=2)
ax.axvline(a / 2, color="#cbd5e1", ls=":", lw=1.2)
A, B, C = (-t, -np.sqrt(3) * t), (t, np.sqrt(3) * t), (3 * t, -np.sqrt(3) * t)
ax.plot(*zip(A, B, C, A), color=GREEN, lw=1.6)
ax.fill(*zip(A, B, C), color=GREEN, alpha=0.13)
for p, name, off in ((A, "A", (-0.16, -0.3)), (B, "B", (-0.05, 0.32)),
                     (C, "C", (0.18, -0.3))):
    ax.plot(*p, "o", color=RED, ms=6)
    ax.text(p[0] + off[0], p[1] + off[1], name, fontsize=13, color=RED, ha="center")
ax.plot(0, 0, "o", color="#0f172a", ms=4)
ax.text(-0.27, 0.13, "O", fontsize=11)
ax.set_xticks([-t, 0, t, 3 * t], [r"$-t$", "", r"$t$", r"$3t$"])
ax.set_yticks([-1, 0, 1])
ax.set_xlim(-1.6, 2.8); ax.set_ylim(-2.2, 2.2)
ax.set_aspect("equal")
axes(ax)
ax.text(a / 2 + 0.07, 1.85, r"$x=\frac{a}{2}$", color="#64748b", fontsize=10)
ax.text(-1.52, 1.85, r"$y=\tan\frac{\pi x}{a}$", color=BLUE, fontsize=11)
fig.tight_layout(); fig.savefig(OUT / "2022_csat_common_q11.png"); plt.close(fig)


# ── 공통 12: |x|<=1 에서 y=|x|, |x|>1 에서 y=1 ────────────────
fig, ax = plt.subplots(figsize=(4.8, 2.9))
x = np.linspace(-2.6, 2.6, 600)
ax.plot(x, np.where(np.abs(x) <= 1, np.abs(x), 1), color=BLUE, lw=2.2,
        label=r"$y=f(x)$")
for xv, yv, lab in ((-4 / 3, 1, r"$-\frac{4}{3}$"), (0, 0, "O"), (0.5, 0.5, r"$\frac{1}{2}$")):
    ax.plot(xv, yv, "o", color=RED, ms=6)
ax.plot([-4 / 3, -4 / 3], [0, 1], color=RED, ls=":", lw=1.1)
ax.plot([0.5, 0.5], [0, 0.5], color=RED, ls=":", lw=1.1)
ax.set_xticks([-2, -4 / 3, -1, 0, 0.5, 1, 2],
              ["-2", r"$-\frac{4}{3}$", "-1", "O", r"$\frac{1}{2}$", "1", "2"])
ax.set_yticks([0, 0.5, 1], ["0", r"$\frac{1}{2}$", "1"])
ax.set_xlim(-2.7, 2.7); ax.set_ylim(-0.35, 1.5)
axes(ax); ax.legend(loc="upper right", fontsize=10, frameon=False)
fig.tight_layout(); fig.savefig(OUT / "2022_csat_common_q12.png"); plt.close(fig)


# ── 미적 28: y=3-4 sin t 의 부호 변화 (0<t<6π) ──────────────────
fig, ax = plt.subplots(figsize=(6.2, 2.9))
t = np.linspace(0, 6 * np.pi, 1500)
y = 3 - 4 * np.sin(t)
ax.plot(t, y, color=BLUE, lw=1.8)
ax.text(2 * np.pi + 0.3, 6.4, r"$y=3-4\sin t$", color=BLUE, fontsize=11)
ax.fill_between(t, y, 0, where=(y < 0), color=RED, alpha=0.18)
s = np.arcsin(0.75)
for k in range(3):
    x0, x1 = 2 * k * np.pi + s, (2 * k + 1) * np.pi - s
    ax.plot(x1, 0, "o", color=RED, ms=6)
    ax.annotate("", xy=(x1, 0), xytext=(x1, -1.6),
                arrowprops=dict(arrowstyle="->", color=RED, lw=1.1))
    ax.text(x1, -2.4, "극소", color=RED, fontsize=10, ha="center")
ax.set_xticks([0, 2 * np.pi, 4 * np.pi, 6 * np.pi],
              ["0", r"$2\pi$", r"$4\pi$", r"$6\pi$"])
ax.set_yticks([-1, 0, 3, 7])
ax.set_xlim(-0.4, 6 * np.pi + 0.4); ax.set_ylim(-3.2, 8)
axes(ax)
fig.tight_layout(); fig.savefig(OUT / "2022_csat_calculus_q28.png"); plt.close(fig)

print("완료:", *(p.name for p in sorted(OUT.glob("2022_csat_*"))))
