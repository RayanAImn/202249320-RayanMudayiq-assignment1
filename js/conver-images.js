const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const heicConvert = require("heic-convert");

// Target project images for this assignment.
const IMAGE_ROOT = path.join(process.cwd(), "assets", "images");
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".heic"];
const QUALITY = 80;

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
}

async function convertImages() {
  console.log(`Starting image conversion in: ${IMAGE_ROOT}`);

  if (!fs.existsSync(IMAGE_ROOT)) {
    console.log(`Directory not found: ${IMAGE_ROOT}`);
    return;
  }

  const entries = fs.readdirSync(IMAGE_ROOT, { withFileTypes: true });
  let totalOriginal = 0;
  let totalWebp = 0;
  let convertedCount = 0;

  for (const entry of entries) {
    if (!entry.isFile()) continue;

    const ext = path.extname(entry.name).toLowerCase();
    if (!EXTENSIONS.includes(ext)) continue;

    const inputPath = path.join(IMAGE_ROOT, entry.name);
    const baseName = path.basename(entry.name, ext);
    const outputPath = path.join(IMAGE_ROOT, `${baseName}.webp`);

    if (fs.existsSync(outputPath)) {
      console.log(`Skipping: ${entry.name} (already has ${baseName}.webp)`);
      continue;
    }

    console.log(`Converting: ${entry.name} -> ${baseName}.webp`);

    try {
      let pipeline;
      if (ext === ".heic") {
        const inputBuffer = fs.readFileSync(inputPath);
        const pngBuffer = await heicConvert({ buffer: inputBuffer, format: "PNG" });
        pipeline = sharp(pngBuffer);
      } else {
        pipeline = sharp(inputPath);
      }

      await pipeline.webp({ quality: QUALITY }).toFile(outputPath);

      const originalBytes = fs.statSync(inputPath).size;
      const webpBytes = fs.statSync(outputPath).size;
      const reductionPct = Math.round((1 - webpBytes / originalBytes) * 100);

      totalOriginal += originalBytes;
      totalWebp += webpBytes;
      convertedCount += 1;

      console.log(
        `  ${formatBytes(originalBytes)} -> ${formatBytes(webpBytes)} (${reductionPct}% smaller)`
      );
    } catch (error) {
      console.error(`  Error converting ${entry.name}: ${error.message}`);
    }
  }

  if (convertedCount === 0) {
    console.log("No new images were converted.");
    return;
  }

  const totalReduction = Math.round((1 - totalWebp / totalOriginal) * 100);
  console.log("\nConversion complete.");
  console.log(`Converted files: ${convertedCount}`);
  console.log(`Total original size: ${formatBytes(totalOriginal)}`);
  console.log(`Total webp size: ${formatBytes(totalWebp)}`);
  console.log(`Overall reduction: ${totalReduction}%`);
}

convertImages();
