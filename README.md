# PA site template

This is a modern, high-performance website template built with Astro and powered by DatoCMS for seamless content management. It's designed to be lightweight, SEO-friendly, and easy to deploy.

## Tech Stack

| Tool               | Purpose                                     |
| :----------------- | :------------------------------------------ |
| Astro              | Static Site Generator / Web Framework       |
| DatoCMS            | Headless Content Management System          |
| gql.tada           | High-performance, type-safe GraphQL queries |
| Bootstrap Italia 2 | Styling                                     |

## Project Architecture: Atomic Design

This project follows the Atomic Design methodology to organize the UI components. This ensures a clear separation of concerns and promotes component reusability across the entire site.

You will find the components structured in `src/components/` as follows:

- Atoms: The smallest functional units (e.g., buttons, inputs, typography, icons). They cannot be broken down further without losing their function.

- Molecules: Groups of atoms bonded together (e.g., a search bar with a button, a form field with a label).

- Organisms: Complex UI sections composed of groups of molecules and/or atoms (e.g., a Navbar, a Footer, or a Product Card Grid).

- Layout: Page-level objects that articulate the layout structure (where the organisms sit).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                                    |
| :--------------------- | :-------------------------------------------------------- |
| `bun install`          | Installs dependencies                                     |
| `bun staging`          | Starts dev server using `--mode staging`                  |
| `bun production`       | Starts dev server using `--mode production`               |
| `bun build:staging`    | Build using `--mode staging`                              |
| `bun build:production` | Build using `--mode production`                           |
| `bun astro ...`        | Run CLI commands like `astro add`, `astro check`          |
| `bun astro -- --help`  | Get help using the Astro CLI                              |
| `bun generate-output`  | Generate GraphQL output types                             |
| `bun tada-doctor`      | Check GraphQL setup with gql-tada                         |
| `bun tada-check`       | Validate GraphQL documents with gql-tada                  |
| `bun format`           | Format files with Prettier                                |
| `bun index:staging`    | Manually syncs DatoCMS content to OpenSearch (Staging)    |
| `bun index:production` | Manually syncs DatoCMS content to OpenSearch (Production) |

## 🌱 Environment files

Create a .env file in the root of your project and fill in the following values. This project uses a mix of private (server-side) and public (client-side) variables.

### Configuration Breakdown

```
SITE_URL: The full URL of your production site (e.g., https://your-site.com).
SECRET_API_TOKEN: A secure random string for protecting internal API routes.
DATOCMS_ENVIRONMENT: The name of your DatoCMS environment (usually main).
DATOCMS_API_TOKEN: Your read-only API token for production content.
DATOCMS_DRAFT_API_TOKEN: API token used to preview draft content.
DATOCMS_MANAGEMENT_API_TOKEN: Required for administrative tasks or content migrations.
DRAFT_MODE_COOKIE_NAME: The name of the cookie that triggers the preview mode.
SIGNED_COOKIE_JWT_SECRET: A secret key used to sign and verify cookies securely.
OPENSEARCH_HOST: The endpoint of your OpenSearch cluster.
OPENSEARCH_USERNAME: Credentials for cluster authentication.
OPENSEARCH_PASSWORD: Credentials for cluster authentication.
OPENSEARCH_INDEX_NAME: "name_project_", the specific index where your site's content is stored.
PUBLIC_WAI_URL: Configuration for WAI (Web Accessibility/Analytics).
PUBLIC_SITE_ID: Configuration for WAI (Web Accessibility/Analytics).
PUBLIC_SENDPORTAL_SUBSCRIBE_URL: Endpoint for newsletter subscriptions via Sendportal.
PUBLIC_FEEDBACK_URL: Link or API for the user feedback system.
```

Astro (via Vite) loads environment files in this order:

- `./.env` base defaults
- `./.env.local` local overrides (not committed)
- `./.env.<mode>` mode-specific values (for example `./.env.staging`, `./.env.production`)
- `./.env.<mode>.local` local mode-specific overrides

Use `bun staging` or `bun build:staging` to activate `--mode staging`.

## 📦 DatoCMS Migrations

Migrations are used to manage DatoCMS schema changes (models, fields, settings) in a versioned and reproducible way.

### Running Migrations

To apply the migrations located in the `./migrations` folder to the current environment, run:

```sh
bun run migrate
```

This command should be executed every time new migrations are downloaded from the repository or whenever you want to align a local/new environment with the current schema state.

### Auto-generating a Migration

If you have made manual changes to the schema in a sandbox environment (e.g., `staging`) and want to generate a migration that applies these changes to the primary environment (`main`), you can use the auto-generate command:

```sh
bunx datocms migrations:new "migration-description" --autogenerate=<source_environment>:<destination_environment> --api-token={DATOCMS_MANAGEMENT_API_TOKEN}
```

**Example:**
To generate a migration that carries changes from `staging` to `main`:

```sh
bunx datocms migrations:new "init-migrations" --autogenerate=staging:main --api-token={DATOCMS_MANAGEMENT_API_TOKEN}
```

This operation will create a new JavaScript file in the `migrations` folder that programmatically describes the changes to be applied.

## Search & Indexing (OpenSearch)

This template includes a built-in integration with OpenSearch for full-text search capabilities. Content is automatically indexed and synchronized with DatoCMS.

### Multilingual Indexing Strategy

To support internationalization (i18n), the project uses a dynamic indexing naming convention. You don't need to create separate indices manually; the system handles it as follows:

```
Base Name: Defined in your .env as OPENSEARCH_INDEX_NAME (e.g., my_project_).

Dynamic Suffix: The application automatically appends the ISO language code.

Result: my_project_it, my_project_en, etc.
```

This ensures that search results are always relevant to the user's current language context and improves query performance.

##### 🏗️ How it works

```
Syncing: During the bun run build process, Astro fetches all localized content from DatoCMS.

Processing: The data is cleaned, mapped, and sent to the specific OpenSearch index based on the locale.

Querying: The frontend uses the OPENSEARCH_HOST credentials to perform high-speed searches across the specific language index.
```

## 🔍 SEO, Sitemap & Redirect Management

This project handles SEO assets dynamically to ensure search engines only index relevant, canonical content.

### Smart Sitemap Generation

We use `@astrojs/sitemap` with a custom filter logic. The sitemap automatically excludes:

- Search pages: `/search` and `/ricerca` are filtered out to avoid indexing empty or query-based results.

- Development tools: Internal routes like component-inventory are hidden from crawlers.

- Non-canonical URLs: By using the redirects object in `astro.config.ts`, Astro knows these are 301s. Since the sitemap integration only picks up actual generated pages (status 200), your redirects never appear in the sitemap.xml.

### Dynamic robots.txt

Instead of a static file, we use an API Route (src/pages/robots.txt.ts) to generate the file dynamically.

- It automatically pulls the SITE_URL from the environment.

- It explicitly tells crawlers to stay away from search result pages (Disallow: /it/ricerca/, etc.) to save "crawl budget".

### Redirects (301)

Redirects are centralized in the `astro.config.ts`.
