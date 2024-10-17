# RelaySMS

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

Make sure all dependencies are installed by running:

```sh
pnpm install
```

## Local Development

To start a local development server and open a browser window, run:

```sh
pnpm start
```

Most changes are reflected live without having to restart the server.

## Build

To generate static content into the `build` directory, run:

```sh
pnpm run build
```

This static content can be served using any static content hosting service.

## Deployment

Using SSH:

```sh
USE_SSH=true pnpm run deploy
```

Not using SSH:

```sh
GIT_USER=<Your GitHub username> pnpm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# Translation to Different Languages

Docusaurus supports internationalization (i18n) to translate your site into different languages.

### Setting Up Translations

1. Ensure your `docusaurus.config.js` is properly configured for i18n:

   ```javascript
   module.exports = {
     i18n: {
       defaultLocale: "en",
       locales: ["en", "fr", "fa"],
       localeConfigs: {
         en: {
           label: "English",
           direction: "ltr",
           htmlLang: "en-US",
           calendar: "gregory",
           path: "en"
         },
         fr: {
           label: "French",
           direction: "ltr",
           htmlLang: "fr-FR",
           calendar: "gregory",
           path: "fr"
         },
         fa: {
           label: "فارسی",
           direction: "rtl",
           htmlLang: "fa-IR",
           calendar: "persian",
           path: "fa"
         }
       }
     }
   };
   ```

2. Run the write-translations command:

   - For English:
     ```sh
     pnpm docusaurus write-translations --locale en
     ```
   - For French:
     ```sh
     pnpm docusaurus write-translations --locale fr
     ```
   - For Farsi/Persian:
     ```sh
     pnpm docusaurus write-translations --locale fa
     ```

**Note:** When working with translations, ensure that the `i18n` configuration in your `docusaurus.config.js` file is correctly set up.

To see your translated files on your local server, follow these steps:

1. Build your project:

   ```sh
   pnpm run build
   ```

2. Serve the built project:
   ```sh
   npm run serve
   ```

This will serve the static content generated in the `build` directory.
