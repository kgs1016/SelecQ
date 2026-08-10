# -*- coding: utf-8 -*-
"""2023 6월 모평 해설 그래프 렌더 (SelecQ 자체 제작)."""
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

# ── 미적 28: f(x)=½(x-1)(x²-6x+10) 과 직선 y=1, y=-1 ─────────────
fig, ax = plt.subplots(figsize=(5.4, 3.8))
x = np.linspace(-0.9, 4.3, 700)
f = 0.5 * (x - 1) * (x**2 - 6 * x + 10)
ax.plot(x, f, color=BLUE, lw=2, label=r"$y=f(x)$")
for lv, col in ((1, RED), (-1, GREEN)):
    ax.axhline(lv, color=col, ls="--", lw=1.2)
ax.text(4.25, 1.18, r"$y=1$", color=RED, fontsize=10, ha="right")
ax.text(4.25, -1.5, r"$y=-1$", color=GREEN, fontsize=10, ha="right")

for px, py, lab, dx, dy in ((2, 1, r"$(2,\,1)$", 0.0, 0.42),
                            (8 / 3, 25 / 27, r"$\left(\frac{8}{3},\,\frac{25}{27}\right)$", 0.62, -0.95)):
    ax.plot(px, py, "o", color=RED, ms=6)
    ax.text(px + dx, py + dy, lab, color=RED, fontsize=10.5, ha="center")

# g(x)=0 인 세 점 = |f(x)|=1.  f(x)=½x³-7/2x²+8x-5
roots = [r for r in np.roots([0.5, -3.5, 8, -6]) if abs(r.imag) < 1e-9]      # f(x)=1
roots += [r for r in np.roots([0.5, -3.5, 8, -4]) if abs(r.imag) < 1e-9]     # f(x)=-1
for r in sorted({round(float(r.real), 6) for r in roots}):
    ax.plot(r, 0.5 * (r - 1) * (r**2 - 6 * r + 10), "o", color="#0f172a", ms=5)
ax.text(0.02, 0.06, r"● : $g(x)=0$ 인 점 (3개)", transform=ax.transAxes,
        fontsize=10, color="#0f172a")

ax.axhline(0, color="#94a3b8", lw=0.9)
ax.axvline(0, color="#94a3b8", lw=0.9)
ax.grid(alpha=0.25)
for s in ("top", "right"):
    ax.spines[s].set_visible(False)
ax.set_xticks([0, 1, 2, 8 / 3], ["O", "1", "2", r"$\frac{8}{3}$"])
ax.set_yticks([-1, 0, 1])
ax.set_xlim(-1.0, 4.35); ax.set_ylim(-3.2, 3.2)
ax.legend(loc="upper left", fontsize=10, frameon=False)
fig.tight_layout(); fig.savefig(OUT / "2023_mock06_calculus_q28.png"); plt.close(fig)

print("완료:", *(p.name for p in sorted(OUT.glob("2023_mock06_*"))))
