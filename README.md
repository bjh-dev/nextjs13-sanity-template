# A Next.js 13 and Sanity CMS Starter Template
This is a template for quickly getting started with Next.js 13 using the new App Directory. It also includes some helpful starter code for Sanity CMS.

* 📦 Next.js 13.4.0 with the new App Directory.
* 📚 Sanity CMS studio embedded in the Next site (located at `/studio`).
* 📝 ESLint for formating and linting code
* 🖌 Prettier code formatting.
* 📦 Lint Staged to run commands on staged files
* 🐶 Husky for ESLint and Prettier checks before commiting code.
* 📄 TypeScript
* 📦 PNPM for package management
* 📝 Tailwind CSS is a utility-first CSS framework.

## Next.js 13
Next.js 13 is the latest version of Next.js. It includes a new App Directory that lets you quickly add features to your app. This template uses the App Directory. We use Tailwind CSS, ESLint, Prettier, and TypeScript.

## Sanity CMS
Sanity CMS is included as part of this template. We have included schema for home, page and post schemas. Live previews are available for these schema types so you can see how your content will appear in your Next.js site.

# Getting Started
## 1. Clone the repository
To get started, create a new project using this template. You can do this by clicking the green "Use this template" button at the top of this page.

## 2. Copy `.env.example` to `.env.local`
Next, copy the `.env.example` file to `.env.local`. You can do this by running the following command in your terminal:

```bash
cp .env.example .env.local
```

Then add you existing Sanity Project ID and Dataset to the `.env.local` file.

If you don't have an existing Sanity project, you can create one at [https://www.sanity.io/get-started/](https://www.sanity.io/get-started/).

You will also need to provide a read and write token for your Sanity project. You can create these in your Sanity project settings. You will also need to add your URL for CORS security in your Sanity project settings. For local development this will be `http://localhost:3000`.

## 3. Install dependencies
Next, install the dependencies for the project. You can do this by running the following command in your terminal:

```bash
pnpm install
```

## 4. Start the development server
Finally, start the development server. You can do this by running the following command in your terminal:

```bash
turbo dev
```

Your Next.js site is at [http://localhost:3000](http://localhost:3000).
Your Sanity Studio is at [http://localhost:3000/studio](http://localhost:3000/studio).

## 5 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

