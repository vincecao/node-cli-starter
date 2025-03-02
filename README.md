# Express + TypeScript Starter Kit

- Express 4.x with TypeScript 5.x configured
- ES Modules (ESM) support
- Hot reloading with `nodemon`
- `.env` file support
- Tested under `Nodejs` version 22 and `pnpm` version 10

If you are using different node version, please adjust accordingly in `nodemon.json` exec field. There are some compatibility issues across different `node version`, `module` and `ts-node`. [Reference](https://stackoverflow.com/a/77993035).

## Production Build

Start the development server:

```bash
pnpm i

# Add .env based on sample

pnpm run dev
```

Compile TypeScript to production build:

```bash
pnpm run build
```
