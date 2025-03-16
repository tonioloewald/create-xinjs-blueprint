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

if (!projectName.match(/\w+-\w+/)) {
  console.log('Your project name is used as a custom-element tagName')
  console.log('It should be something like "my-tag" or "some-other-tag"')
  process.exit(1)
}

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

function customizePackage() {
  const filePath = path.join(projectPath, 'package.json')
  const rawData = fs.readFileSync(filePath, 'utf8')
  const packageData = JSON.parse(rawData)

  console.log(`create-xinjs-blueprint ${packageData.version}`)

  packageData.name = projectName
  packageData.version = '0.0.1'
  delete packageData.bin

  fs.writeFileSync(filePath, JSON.stringify(packageData, null, 2), 'utf8')
}

function replaceText(filename, pattern, replacement) {
  const filePath = path.join(projectPath, filename)
  const text = fs.readFileSync(filePath, 'utf8')
  fs.writeFileSync(filePath, text.replace(pattern, replacement), 'utf8')
}

async function main() {
  try {
    console.log('Downloading files...')
    execSync(`git clone --depth 1 ${git_repo} ${projectPath}`)

    process.chdir(projectPath)

    console.log('Customizing package.json...')
    customizePackage()

    console.log('Cleaning up...')
    fs.rmSync(path.join(projectPath, 'bin'), { recursive: true })
    fs.rmSync(path.join(projectPath, '.git'), { recursive: true })
    replaceText(
      'index.html',
      /\b(xin-toggle|create-xinjs-blueprint)\b/g,
      projectName
    )
    replaceText('src/blueprint.ts', /\bxin-toggle\b/g, projectName)
    replaceText('README.md', /\bcreate-xinjs-blueprint\b/g, projectName)
    replaceText('package.json', /\bcreate-xinjs-blueprint\b/g, projectName)

    console.log('Done! Next steps…')
    console.log('- cd ' + projectName)
    console.log('- install bun if needed')
    console.log('- bun install')
    console.log('- bun start')
    console.log(
      '- got to http://localhost:8021 in browser to view the live demo'
    )
    console.log('- create a [PUBLIC] github repo for the project')
    console.log('- switch on Github Pages for the live demo to work')
    console.log('- publish on npm for the npm link to work')
  } catch (error) {
    console.log(error)
  }
}
main()
