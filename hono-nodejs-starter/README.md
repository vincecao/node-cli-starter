# Hono NodeJS Starter

A starter template for building web applications with Hono and Node.js.

## Getting Started

### Prerequisites

- Node.js (v20 or later recommended)
- pnpm

### Installation

Install dependencies:

```bash
pnpm install
```

### Development

Start the development server with hot reloading:

```bash
pnpm run dev
```

Then access the application:

```bash
open http://localhost:3000
```

### Building for Production

Build the TypeScript code:

```bash
pnpm run build
```

The compiled output will be in the `dist` directory.

## Docker Support

### One-time Setup

```bash
pnpm run docker:setup
```

### Build & Run

1. Build the Docker image:

   ```bash
   pnpm run docker:build
   ```

2. Run the container:

   ```bash
   pnpm run docker:run
   ```

3. Access the app:
   ```bash
   open http://localhost:3000
   ```

### Production Deployment

1. Build the image:

   ```bash
   pnpm run docker:build
   ```

2. Push to your registry:

   ```bash
   docker tag my-hono-app your-registry/my-hono-app
   docker push your-registry/my-hono-app
   ```

3. Run on your server:
   ```bash
   docker run -p 3000:3000 your-registry/my-hono-app
   ```

## Dependencies

- [Hono](https://hono.dev/) - Fast, Lightweight, Web-standards HTTP Framework
- [@hono/node-server](https://github.com/honojs/node-server) - Node.js server adapter for Hono
