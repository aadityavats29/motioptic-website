const sharp = require('sharp');
const path = require('node:path');
const fs = require('node:fs/promises');
const root = path.join(__dirname, '..');
const target = path.join(root, 'public/media/covers');
const logos = {
  'content-army': { background: '#151515', width: 900, file: 'content-army.svg' },
  markovate: { background: '#151515', width: 1120, file: 'markovate.svg' },
  duradry: { background: '#151515', width: 1120, file: 'duradry.png' },
  biov8: { background: '#1e1e1e', width: 1000 },
  monkeflow: { background: '#ffffff', width: 900 },
};

async function exportSize(slug, width, height, filename) {
  const logo = logos[slug];
  const source = logo?.file
    ? path.join(root, 'public/media/logos', logo.file)
    : path.join(root, 'design/covers', slug + '.png');
  let result;
  if (logo) {
    const mark = await sharp(source).resize({width: Math.round(logo.width * width / 1920)}).png().toBuffer();
    result = sharp({create: {width, height, channels: 3, background: logo.background}})
      .composite([{input: mark, gravity: 'centre'}]);
  } else {
    result = sharp(source).resize(width, height, {fit: 'cover'});
  }
  const encoded = filename.endsWith('.jpg') ? result.jpeg({quality: 92}) : result.webp({quality: 92});
  await encoded.toFile(path.join(target, filename));
}

async function main() {
  await fs.mkdir(target, { recursive: true });
  for (const slug of ['content-army', 'biov8', 'monkeflow', 'duradry', 'littledata', 'elvis', 'markovate']) {
    await exportSize(slug, 1920, 1080, slug + '.webp');
    await exportSize(slug, 768, 432, slug + '-768.webp');
    await exportSize(slug, 1200, 630, slug + '-share.jpg');
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
