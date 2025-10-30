# saltsync-dashboard

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Environment Variables

This project uses environment variables to control mock behavior and API switching.

Create a `.env` file in the root directory with the following variables:

- `VITE_MOCK_LATENCY=false` - Disable random latency in mock API calls (default: enabled with 300-800ms delay)
- `VITE_MOCK_ERROR=true` - Enable random errors in mock API calls (20% chance of 500 error, default: disabled)
- `VITE_USE_REAL_API=true` - Switch to real API endpoints (default: false, uses mock data)

Example `.env` file:

```
VITE_MOCK_LATENCY=false
VITE_MOCK_ERROR=false
VITE_USE_REAL_API=false
```

Note: When `VITE_USE_REAL_API=true`, the real API calls are not yet implemented and will throw an error. Update the API service in `src/services/api.service.ts` to integrate with your actual backend.

Live Preview: https://saltsync.anis-web.me
