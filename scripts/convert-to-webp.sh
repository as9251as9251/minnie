#!/usr/bin/env bash
# 在 assets/ 將 01.png～99.png 轉成同名 .webp（品質 88）
set -euo pipefail
cd "$(dirname "$0")/../assets"
for f in [0-9][0-9].png; do
  [ -f "$f" ] || continue
  out="${f%.png}.webp"
  cwebp -q 88 -m 6 "$f" -o "$out"
  echo "→ $out"
done
