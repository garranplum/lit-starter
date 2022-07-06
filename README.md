# lit-starter
By Garran Plum

## Overview
This Lit starter pack contains everything you need to develop web components with Lit, test them locally, and publish them to a static hosting website like Firebase Hosting.

For more information on using this setup, see my article [Getting Started with Web Components & Lit: Part 2](https://levelup.gitconnected.com/getting-started-with-web-components-lit-part-2-3cd878aeca73).

## What's Inside
This is a minimum scaffold with two sample web components to play with. Each has minimal text and CSS output to demonstrate the shadow DOM. The components are built with [Lit](https://lit.dev). The development server is [Vite](https://vitejs.dev). Both are installed automatically.

## Installation with NPM
Place the entire contents of this repo in what will become the **root folder** of your application. From the command line *in that folder*, run:

```npm install```

## Usage
Edit the sample components in the *components* folder. Add your own new components to the `component-loader.ts` file in the *global* folder.

## Running the App
From the command line in your *root folder*, to start the webserver, run:

```npm run dev```

Then visit `http://localhost:3000` in your browser to view your app.

