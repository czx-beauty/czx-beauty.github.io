import { readFile, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const allowed = new Set(['classic', 'creative', 'developer']);
const chosen = process.argv[2];

if (!allowed.has(chosen)) {
  console.error('用法：node scripts/select-template.mjs classic|creative|developer');
  process.exitCode = 1;
} else {
  const gallery = join(root, 'gallery.html');
  try {
    await access(gallery);
  } catch {
    await writeFile(gallery, await readFile(join(root, 'index.html')));
  }

  const source = await readFile(join(root, 'templates', `${chosen}.html`), 'utf8');
  let homepage = source
    .replaceAll('../assets/', 'assets/')
    .replaceAll('../index.html', 'gallery.html');
  if (chosen === 'classic') {
    homepage = homepage.replace('<a href="gallery.html">← 查看其他模板</a>', '<span>常支鑫 · 深圳大学</span>');
  }
  await writeFile(join(root, 'index.html'), homepage);
  console.log(`已把 ${chosen} 模板设为首页。模板选择页仍可通过 gallery.html 打开。`);
}
