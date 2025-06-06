#!/usr/bin/env node

import { generateZeroId } from './zero-id'
import { program, InvalidArgumentError } from 'commander'
import packagejson from './../package.json'

const commanderParseInt = (value: string) => {
  const parsedValue = parseInt(value, 10)
  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError('not a number')
  }
  return parsedValue
}

program
  .name(Object.keys(packagejson.bin)[0] || 'undefined')
  .version(packagejson.version || 'undefined', '--version')
  .description(
    `${packagejson.name}@${packagejson.version}: generate random hexadecimal id`
  )

program
  .command('generateZeroId')
  .description('output random hexadecimal id')
  .option(
    '--hexLength <value>',
    'limit length of each hex (default: 6)',
    commanderParseInt
  )
  .option(
    '--hexNum <value>',
    'specify number of hexes (default: 6)',
    commanderParseInt
  )
  .option('--prefix <value>', 'add prefix')
  .option('--suffix <value>', 'add suffix')
  .option('--divider <value>', `change divider (default: '-')`)
  .action(options => {
    console.log(generateZeroId({ prefix: 'zero1', ...options }))
  })

program
  .command('generateId')
  .description('output random hexadecimal id')
  .option(
    '--hexLength <value>',
    'limit length of each hex (default: 6)',
    commanderParseInt
  )
  .option(
    '--hexNum <value>',
    'specify number of hexes (default: 6)',
    commanderParseInt
  )
  .option('--prefix <value>', 'add prefix')
  .option('--suffix <value>', 'add suffix')
  .option('--divider <value>', `change divider (default: '-')`)
  .action(options => {
    console.log(generateZeroId(options))
  })

const noSubCommand = process.argv.length <= 2
if (noSubCommand) {
  program.outputHelp()
  process.exit(0)
}

program.parse(process.argv)
