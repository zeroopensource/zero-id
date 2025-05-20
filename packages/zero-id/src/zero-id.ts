type GenerateZeroIdOptions = {
  prefix?: string
  suffix?: string
  divider?: string
  hexLength?: number
  hexNum?: number
}

/**
 * generate random hexadecimal id
 * @param opts.hexLength - limit length of each hex (default: 6)
 * @param opts.hexNum - specify number of hexes (default: 6)
 * @param opts.prefix - add prefix
 * @param opts.suffix - add suffix
 * @param opts.divider - change divider (default: '-')
 * @returns res.hexes - return hexes array
 * @returns res.joined - return joined string
 * @example generateZeroId({ prefix: 'uid1', hexNum: 4, hexLength: 6 })
 * ```
 * {
 *  hexes: [ "d596", "9fa3", "a415", "50ea" ],
 *  joined: "uid1-2fe4b7-d55a55-f13ced-2c1a82"
 * }
 * ```
 */
export const generateZeroId = (opts?: GenerateZeroIdOptions) => {
  const defaultOpts: GenerateZeroIdOptions = {
    prefix: '',
    suffix: '',
    divider: '-',
    hexLength: 6,
    hexNum: 6,
  }

  const { prefix, suffix, divider, hexLength, hexNum } = {
    ...defaultOpts,
    ...opts,
  }

  const hexes = [...Array(hexNum)].map(() =>
    [...Array(hexLength)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('')
  )
  const joined = [prefix, ...hexes, suffix]
    .filter(e => Boolean(e)) // Filters out falsy values [false, null, undefined, 0, ""]
    .join(divider)
  return { hexes, joined }
}
