# My Dev Blog

📹 Youtube Video Pt 1: [Building A Dev Blog With Neovim, SvelteKit, TS & Tailwindcss](https://youtu.be/cxNDZHwln1w)

This repo is very similar to my live production blog found here: [josean.com](https://josean.com)

## Running this locally

Clone the repo first and navigate to the `sveltekit-blog-walkthrough` directory.

Make sure you nave node (tested with v18.17.1) and npm (tested with 10.0.0) installed.

```bash
# Install the dependencies
npm install
```

## Developing

```bash
# Start the dev server
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
