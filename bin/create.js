#! /usr/bin/env node

'use strict'

import { execSync } from 'child_process'
import path from 'path'
import fs from 'fs'

if (process.argv.length < 3) {
  console.log('You have to provide a name to your blueprint.')
  console.log('For example :')
  console.log('    npx create-xinjs-blueprint my-widget')
  process.exit(1)
}

const projectName = process.argv[2]
const currentPath = process.cwd()
const projectPath = path.join(currentPath, projectName)
const git_repo = 'https://github.com/tonioloewald/create-xinjs-blueprint.git'

try {
  fs.mkdirSync(projectPath)
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log(`"${projectName}" already exists.`)
  } else {
    console.log(error)
  }
  process.exit(1)
}

async function main() {
  try {
    console.log('Downloading files...')
    execSync(`git clone --depth 1 ${git_repo} ${projectPath}`)

    process.chdir(projectPath)

    fs.rmSync(path.join(projectPath, 'bin'), { recursive: true })

    console.log(
      'Done! Just install bun if you have to, `bun install`, and `bun start`'
    )
  } catch (error) {
    console.log(error)
  }
}
main()
