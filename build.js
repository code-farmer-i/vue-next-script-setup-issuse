const { join } = require('path');
const { parse, compileScript } = require('@vue/compiler-sfc');
const { readFileSync, writeFileSync } = require('fs-extra');
const execa = require('execa');

function parseSfc(filename) {
  const source = readFileSync(filename, 'utf-8');
  const { descriptor } = parse(source, {
    filename,
  });

  return descriptor;
}

async function compileSfc(filePath) {
  const descriptor = parseSfc(filePath);

  const scriptFilePath = filePath.replace('.vue', '.ts');

  const compiled = compileScript(descriptor, {
    id: 'xx',
    inlineTemplate: true,
  });

  let script = compiled.content;

  writeFileSync(scriptFilePath, script);
}

compileSfc(join(process.cwd(), 'example/withDefaults.vue'));
