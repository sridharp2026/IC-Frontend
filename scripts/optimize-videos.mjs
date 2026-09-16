// Re-encodes public/images/**/*.mp4 in place at a web-appropriate bitrate.
// The portfolio preview clips were dropped in straight from a camera/export
// pipeline at ~5 Mbps; they only ever play muted, looping, and small in the
// UI, so a CRF-based re-encode with audio stripped cuts size by ~70% with no
// visible quality loss. Run with `npm run optimize-videos` after adding new
// clips — it skips anything already under SIZE_THRESHOLD so it's safe to
// re-run.
import ffmpegPath from "ffmpeg-static";
import { execFileSync } from "node:child_process";
import { readdirSync, statSync, renameSync, unlinkSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../public/images", import.meta.url));
const SIZE_THRESHOLD = 500 * 1024; // skip anything already small

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = walk(ROOT).filter((f) => extname(f).toLowerCase() === ".mp4");

let totalBefore = 0;
let totalAfter = 0;
let touched = 0;

for (const file of files) {
  const before = statSync(file).size;
  if (before < SIZE_THRESHOLD) continue;

  const tmp = `${file}.tmp.mp4`;
  execFileSync(ffmpegPath, [
    "-y",
    "-i",
    file,
    "-an",
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    "28",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    tmp,
  ]);

  const after = statSync(tmp).size;
  if (after >= before) {
    unlinkSync(tmp);
    continue;
  }

  unlinkSync(file);
  renameSync(tmp, file);
  totalBefore += before;
  totalAfter += after;
  touched++;
  console.log(
    `${file.replace(ROOT, "images")}  ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`,
  );
}

console.log(
  `\n${touched} file(s) optimized: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB` +
    (totalBefore ? ` (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)` : ""),
);
