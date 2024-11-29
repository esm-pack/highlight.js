import path from 'path'
import fs from 'fs'
import esbuild from 'esbuild'
import { glob } from 'glob'

const license = fs.readFileSync('./LICENSE', 'utf-8')

export const buildEsm = async (inputPath, outputPath, mark = true) => {
  const input = path.resolve(import.meta.dirname, '../', inputPath)
  const output = path.resolve(import.meta.dirname, outputPath)

  await esbuild.build({
    entryPoints: [input],
    outfile: output,
    bundle: true,
    minify: true,
    legalComments: 'none',
    sourcemap: false,
    format: 'esm',
    target: 'esnext',
    banner: {
      js: mark ? `/**\n${license.trim()}\n*/` : ''
    },
    footer: {
      js: mark ? `/* build by esm pack */` : ''
    }
  })
}

await buildEsm('src/highlight.js', 'lib/core.mjs')

const languages = await glob(path.resolve(import.meta.dirname, '../src/languages/*.js'))

for (const each of languages) {
  const iPath = path.relative(import.meta.dirname, each).replace('../', '')
  const oPath = iPath.replace('src', 'lib').replace('.js', '.mjs')
  await buildEsm(iPath, oPath, false)
}

const allName = languages.map(each => each.split('/').pop().split('.').shift()).map(e => ['a' + e.replaceAll('-', '_'), e])
const indexPath = path.resolve(import.meta.dirname, 'lib/index.mjs')
fs.writeFileSync(indexPath, `import hljs from './core.mjs';
${allName.map(([n, p]) => `import ${n} from './languages/${p}.mjs';`).join('\n')}

${allName.map(([n, p]) => `hljs.registerLanguage('${p}', ${n});`).join('\n')}

hljs.HighlightJS = hljs;
export default hljs;
`)

const common = ['xml', 'bash', 'c', 'cpp', 'csharp', 'css', 'markdown', 'diff', 'ruby', 'go', 'graphql', 'ini', 'java', 'javascript', 'json', 'kotlin', 'less', 'lua', 'makefile', 'perl', 'objectivec', 'php', 'php-template', 'plaintext', 'python', 'python-repl', 'r', 'rust', 'scss', 'shell', 'sql', 'swift', 'yaml', 'typescript', 'vbnet', 'wasm',]
const commonName = allName.filter(e => common.includes(e[1]))
const commonPath = path.resolve(import.meta.dirname, 'lib/common.mjs')
fs.writeFileSync(commonPath, `import hljs from './core.mjs';
${commonName.map(([n, p]) => `import ${n} from './languages/${p}.mjs';`).join('\n')}

${commonName.map(([n, p]) => `hljs.registerLanguage('${p}', ${n});`).join('\n')}

hljs.HighlightJS = hljs;
export default hljs;
`)

fs.cpSync(path.resolve(import.meta.dirname, '../src/styles'), path.resolve(import.meta.dirname, 'styles'), { recursive: true })