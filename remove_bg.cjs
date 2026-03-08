const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');

async function processImage(inputPath, outputPath) {
  try {
    console.log("Processing " + inputPath + "...");
    const blob = await removeBackground(inputPath);
    const buffer = Buffer.from(await blob.arrayBuffer());
    fs.writeFileSync(outputPath, buffer);
    console.log("Saved to " + outputPath);
  } catch (error) {
    console.error("Error processing " + inputPath + ":", error);
  }
}

async function main() {
  const images = [
    { in: 'file:///C:/Users/paulo/.gemini/antigravity/brain/d31a905e-b4f5-49ad-a800-969f11aff7c0/media__1772905838785.jpg', out: './assets/logo.png' }
  ];

  for (const img of images) {
    await processImage(img.in, img.out);
  }
}
main();
