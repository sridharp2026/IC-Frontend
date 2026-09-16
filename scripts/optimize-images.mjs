// Downscales and recompresses images under public/images in place. Several
// source photos were dropped in at camera/export resolution (up to 4096px
// wide) despite never rendering above ~1400px in the layout, which is why
// public/ ballooned to 100+MB. Run with `npm run optimize-images` after
// adding new images — it skips anything already under SIZE_THRESHOLD so it's
// safe to re-run.
import sharp from "sharp";
import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../public/images", import.meta.url));
const MAX_DIMENSION = 1600;
const SIZE_THRESHOLD = 150 * 1024; // skip anything already small (icons, small logos)

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = walk(ROOT).filter((f) =>
  [".png", ".jpg", ".jpeg"].includes(extname(f).toLowerCase()),
);

let totalBefore = 0;
let totalAfter = 0;
let touched = 0;

for (const file of files) {
  const before = statSync(file).size;
  if (before < SIZE_THRESHOLD) continue;

  const ext = extname(file).toLowerCase();
  const input = readFileSync(file);
  let pipeline = sharp(input).resize({
    width: MAX_DIMENSION,
    height: MAX_DIMENSION,
    fit: "inside",
    withoutEnlargement: true,
  });
  pipeline =
    ext === ".png"
      ? pipeline.png({ compressionLevel: 9, effort: 10, adaptiveFiltering: true })
      : pipeline.jpeg({ quality: 80, mozjpeg: true });

  const buffer = await pipeline.toBuffer();
  if (buffer.length >= before) continue; // never make a file bigger

  writeFileSync(file, buffer);
  totalBefore += before;
  totalAfter += buffer.length;
  touched++;
  console.log(
    `${file.replace(ROOT, "images")}  ${(before / 1024 / 1024).toFixed(2)}MB -> ${(buffer.length / 1024 / 1024).toFixed(2)}MB`,
  );
}

console.log(
  `\n${touched} file(s) optimized: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB` +
    (totalBefore ? ` (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)` : ""),
);
