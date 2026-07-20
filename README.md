This is the **Out of Box Tools** website — a [Next.js](https://nextjs.org) site statically exported and deployed to a cPanel host (HostPinnacle) over FTP.

## ⚠️ Before you start: the product catalogue is NOT in this repo

All product images, spec sheets and prices live in `public/Website Products/` — and that folder is **gitignored** (see `.gitignore`). It's large (hundreds of product folders) and was never intended to go through git.

Cloning this repo alone gives you the code but **zero products**. You must obtain the `public/Website Products/` folder separately (ask whoever is handing off the project for a zip/cloud-drive copy, or pull it from the live server), place it at `public/Website Products/`, then run:

```bash
npm run sync
```

Without that folder, `npm run sync` will run but produce an almost-empty `src/lib/catalogue.ts`, and the site will look broken.

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in real values, see below
npm run sync                 # generates src/lib/catalogue.ts from public/Website Products/
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How the product catalogue works

There is no database. `scripts/sync-catalogue.js` walks `public/Website Products/` and generates `src/lib/catalogue.ts` from the folder structure:

- **Categories** are top-level folders (e.g. `Power Tools`, `Hand Tools`).
- Inside a category, a folder either contains **product folders directly**, or a **subcategory** folder that then contains product folders.
- Each **product folder** should contain:
  - One or more image files (anything not in the non-image extension list counts as an image).
  - A spec/description file (`specs.txt`, `specs.docx`, `description.txt`, etc.) with plain-text content, plus optional price lines:
    ```
    PRICE 5490
    OFFER PRICE 5000
    - bullet point specs...
    ```
    `PRICE` and `OFFER PRICE` lines are extracted and stripped from the description; everything else becomes the product description.
- Two special top-level folders drive site features by **matching folder name to product folder name**:
  - `Best Sellers/<product folder>` — marks a product as `isBestseller`.
  - `Monthly Offers/<product folder>` — marks a product as `isOnOffer` and is the source of truth for `originalPrice` / `offerPrice`, which get copied onto the matching product wherever else it also appears in the catalogue.

Run `npm run sync` any time products are added/changed. It writes:
- `src/lib/catalogue.ts` — the generated catalogue consumed by the whole site.
- `missing-images-report.txt` — product folders with zero images found.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in real values. Never commit `.env.local`.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID. **Required** — `next.config.ts` fails production builds without it. |
| `FTP_HOST`, `FTP_USER`, `FTP_PASS`, `FTP_PORT` | HostPinnacle cPanel FTP credentials used by `npm run deploy`. |
| `GITHUB_TOKEN` | A GitHub Personal Access Token with write access to this repo. Not read from `.env.local` by the app — it's meant to be pasted into the `/admin` dashboard's login screen (see below). |
| `ADMIN_PASSWORD` | Currently unused by the app code — the `/admin` route authenticates purely via a valid GitHub token, not this password. Kept here for reference only. |

## Build & Deploy

The site is a static export (`output: "export"` in `next.config.ts`) — the build produces plain HTML/CSS/JS in `out/`, with no Node server required in production.

```bash
npm run build      # outputs static site to out/
npm run deploy      # uploads out/ to HostPinnacle via FTP (uses FTP_* env vars)
```

`deploy.js` connects over FTP, verifies it's operating inside `/public_html` as a safety check, purges old files (preserving `.htaccess`, `.well-known`, `cgi-bin`), and uploads the fresh build.

If you don't want to use the automated FTP deploy, zip the `out/` folder and upload it manually through the HostPinnacle cPanel File Manager instead.

> `server.js` in the repo root is a leftover Node entry point from an earlier HostPinnacle "Node.js App" hosting setup. It is **not** part of the current deploy path — the site ships as a static export, not a running Node server.

## Admin Dashboard (`/admin`)

There's a client-side product editor at `/admin` for quick price/offer edits without touching code. It authenticates with a GitHub Personal Access Token (pasted in, stored in the browser's `localStorage`) and commits an updated `src/lib/catalogue.ts` straight to GitHub via the REST API — no backend involved.

Important caveats:
- It always commits to the `admin-staging` branch, not `main`.
- Committing through `/admin` does **not** trigger a live deployment — the site still needs a `npm run build && npm run deploy` (or manual FTP upload) to actually go live on HostPinnacle. The in-app message about a refresh happening automatically refers to an earlier Vercel-based setup and doesn't apply to the current HostPinnacle/FTP pipeline.

## Branches

- `main` — default branch.
- `admin-staging` — active development branch; also the branch the `/admin` dashboard commits to. `main` is currently an ancestor of `admin-staging` (a fast-forward merge is safe).

## Learn More

This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). See the [Next.js documentation](https://nextjs.org/docs) for framework-level questions.
