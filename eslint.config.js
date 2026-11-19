import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

var require = createRequire(import.meta.url);
var module = { exports: {} };

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

export default compat.extends('next/core-web-vitals', 'next/typescript');
