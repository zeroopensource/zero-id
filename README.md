# zero-id

A lightweight utility for generating random hexadecimal IDs with customizable formats. Perfect for creating unique identifiers with configurable prefixes, suffixes, and dividers.

## Installation

```bash
npm install @zeroopensource/zero-id
# or
pnpm add @zeroopensource/zero-id
# or
yarn add @zeroopensource/zero-id
```

## Features

- Generate random hexadecimal IDs
- Customize hex length and number of hex segments
- Add optional prefixes and suffixes
- Configure custom dividers
- Available as both CLI and programmatic API

## Usage

### API Usage

```typescript
import { generateZeroId } from '@zeroopensource/zero-id'

// Basic usage
const result = generateZeroId()
console.log(result.joined) // Example: "2fe4b7-d55a55-f13ced-2c1a82-9fa3d5-50ea96"

// With custom options
const customResult = generateZeroId({
  prefix: 'uid1',
  hexNum: 4,
  hexLength: 6,
})
console.log(customResult.joined) // Example: "uid1-2fe4b7-d55a55-f13ced-2c1a82"
```

### CLI Usage

```bash
# Basic usage
npx zero-id generateZeroId

# With options
npx zero-id generateZeroId --prefix uid1 --hexNum 4 --hexLength 6

# Show help
npx zero-id --help

# local
pnpm zero id generate

```

### Options

- `hexLength` - Length of each hex segment (default: 6)
- `hexNum` - Number of hex segments (default: 6)
- `prefix` - Optional prefix to add to the ID
- `suffix` - Optional suffix to add to the ID
- `divider` - Character to use between segments (default: '-')

## Development

This project uses pnpm as the package manager and Turbo for build orchestration.

```bash
# Install dependencies
pnpm install

# Build
pnpm build

# Run linting
pnpm lint
```

## Requirements

- Node.js >= 18

## License

MIT © 2025 Zero Open Source™ (aka ZeroOpenSource™; "Zero")

See [LICENSE](LICENSE) for more details.
