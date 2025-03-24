# Node CLI Starter

A simple command-line interface tool template for greeting users, with [commander](https://github.com/tj/commander.js) and typescript

## Development

```bash
pnpm i

pnpm run dev hello [name]

pnpm run test
```

## Installation

Install the package globally using npm, make sure build before install:

```bash
pnpm run build

npm install -g .
```

## Uninstallation

```bash
npm remove -g commander-ink-cli
```

## Usage

### Basic Command

#### To greet someone:

```bash
mycli hello [name]
```

Example:

```bash
mycli hello John
```

### Language Option

You can specify the greeting language using the `-l` or `--language` option. Currently supports:

- `en` (default) - English
- `es` - Spanish

Example:

```bash
mycli hello Maria --language es
```

#### To view author with ink component:

``` bash
mycli whoami
```

Example:



## Commands

| Command        | Description                          | Options                 |
|----------------|--------------------------------------|-------------------------|
| `hello <name>` | Greets the specified person          | `-l, --language <lang>` |
| `whoami`       | Display author name with Ink styling | -                       |

## Version

Current version: 1.0.1

## License

[MIT](LICENSE)
