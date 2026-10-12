import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceImagePath = 'C:/Users/Sai/.gemini/antigravity-ide/brain/8519d146-e85b-4021-9023-9d41480e6ce7/.user_uploaded/media_1791818603059.png';
const publicDir = path.resolve('public');

function createIcoFromPngs(pngBuffers) {
  const numImages = pngBuffers.length;
  const headerLength = 6;
  const dirEntryLength = 16;
  let offset = headerLength + numImages * dirEntryLength;

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type (1 = icon)
  header.writeUInt16LE(numImages, 4); // count

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width === 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height === 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset of image data
    entries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)]);
}

async function generateAll() {
  if (!fs.existsSync(sourceImagePath)) {
    throw new Error(`Source image not found at ${sourceImagePath}`);
  }

  console.log(`Processing source image: ${sourceImagePath}`);

  // 1. Remove old SVG favicon if exists
  const oldSvg = path.join(publicDir, 'favicon.svg');
  if (fs.existsSync(oldSvg)) {
    fs.unlinkSync(oldSvg);
    console.log('Deleted old public/favicon.svg');
  }

  // 2. Generate 16x16 PNG
  await sharp(sourceImagePath)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('Generated public/favicon-16x16.png');

  // 3. Generate 32x32 PNG
  await sharp(sourceImagePath)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Generated public/favicon-32x32.png');

  // 4. Generate Apple Touch Icon (180x180)
  await sharp(sourceImagePath)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated public/apple-touch-icon.png');

  // 5. Generate Android Chrome 192x192 PNG
  await sharp(sourceImagePath)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  console.log('Generated public/android-chrome-192x192.png');

  // 6. Generate Android Chrome 512x512 PNG
  await sharp(sourceImagePath)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  console.log('Generated public/android-chrome-512x512.png');

  // 7. Generate favicon.ico (containing 16x16 and 32x32 and 48x48)
  const ico16 = await sharp(sourceImagePath)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const ico32 = await sharp(sourceImagePath)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const ico48 = await sharp(sourceImagePath)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const icoBuffer = createIcoFromPngs([
    { width: 16, height: 16, buffer: ico16 },
    { width: 32, height: 32, buffer: ico32 },
    { width: 48, height: 48, buffer: ico48 }
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated public/favicon.ico (multi-res 16, 32, 48)');

  console.log('All favicon assets successfully generated from the user-uploaded AS monogram!');
}

generateAll().catch(err => {
  console.error('Failed to generate favicons:', err);
  process.exit(1);
});
