import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const sourceDir = path.join(projectRoot, 'src', 'assets', 'images');
const outputDir = path.join(sourceDir, 'optimized');

const rasterPattern = /\.(jpe?g|png|webp|avif)$/i;
const maxSide = 1800;

async function ensureDirectory(directoryPath) {
  await fs.mkdir(directoryPath, { recursive: true });
}

async function cleanOptimizedFolder() {
  await ensureDirectory(outputDir);
  const entries = await fs.readdir(outputDir, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(outputDir, entry.name);
      if (entry.isFile()) {
        await fs.unlink(fullPath);
      }
    }),
  );
}

async function optimizeImage(fileName) {
  const sourcePath = path.join(sourceDir, fileName);
  const baseName = path.parse(fileName).name;
  const outputPath = path.join(outputDir, `${baseName}.webp`);

  await sharp(sourcePath)
    .rotate()
    .resize(maxSide, maxSide, {
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({
      quality: 78,
      effort: 5,
    })
    .toFile(outputPath);
}

async function run() {
  const entries = await fs.readdir(sourceDir, { withFileTypes: true });

  const imageFiles = entries
    .filter((entry) => entry.isFile() && rasterPattern.test(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true, sensitivity: 'base' }));

  if (imageFiles.length === 0) {
    console.log('Nenhuma imagem raster encontrada para otimizar.');
    return;
  }

  await cleanOptimizedFolder();
  await Promise.all(imageFiles.map((fileName) => optimizeImage(fileName)));

  console.log(`Imagens otimizadas: ${imageFiles.length}`);
  console.log(`Saida: ${path.relative(projectRoot, outputDir)}`);
}

run().catch((error) => {
  console.error('Falha ao otimizar a galeria:', error);
  process.exitCode = 1;
});
