#!/usr/bin/env bash
# 將 assets/ 內所有 .png 轉成同名 .webp（品質 88）
set -euo pipefail
cd "$(dirname "$0")/../assets"
shopt -s nullglob
count=0
for f in *.png; do
  out="${f%.png}.webp"
  cwebp -q 88 -m 6 "$f" -o "$out"
  echo "→ $out"
  count=$((count + 1))
done
if [ "$count" -eq 0 ]; then
  echo "assets/ 內沒有 .png 檔"
else
  echo "完成，共 $count 張"
fi
