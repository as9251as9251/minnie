#!/usr/bin/env bash
# 將 assets/ 內 .png / .jpg / .jpeg / .tiff 轉成同名 .webp（品質 88）
set -euo pipefail
cd "$(dirname "$0")/../assets"
shopt -s nullglob
count=0
for f in *.png *.jpg *.jpeg *.tiff; do
  [ -f "$f" ] || continue
  base="${f%.*}"
  out="${base}.webp"
  cwebp -q 88 -m 6 "$f" -o "$out"
  echo "→ $out"
  count=$((count + 1))
done
if [ "$count" -eq 0 ]; then
  echo "assets/ 內沒有可轉檔的圖片"
else
  echo "完成，共 $count 張"
fi
