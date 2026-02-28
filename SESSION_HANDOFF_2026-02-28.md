# Session Handoff (2026-02-28)

## Current Production State
- Live site: `https://commit.ca`
- HTTPS: enabled and enforcing redirect from `http://` to `https://`
- GitHub Pages source: `master` branch, `/(root)`
- Custom domain in repo: `CNAME` = `commit.ca`

## Git Status / Branches
- Current local branch: `master`
- Local and remote `master` are in sync at:
  - `a56155d` Remove yarn.lock to standardize on npm lockfile
- Feature branch still exists locally:
  - `codex/phase2-vue3-webpack5`

## Key Commits Pushed to master
1. `280893a` Phase 2: migrate to Vue 3/Webpack 5 and fix hero layer assets
2. `91b2e82` SEO: align branding metadata and add OG/Twitter/Schema markup
3. `a56155d` Remove yarn.lock to standardize on npm lockfile

## What Was Completed
- Pipeline modernization landed on production:
  - Vue 3 + Vuex 4
  - Webpack 5 build configs
  - Babel 7 preset config
- Hero/layer asset regression fixed (sky/reef paths)
- Site content updates previously requested are retained (services, partner edits, footer updates)
- SEO baseline hardened:
  - canonical URL
  - robots meta
  - Open Graph + Twitter image metadata
  - basic Organization schema JSON-LD
  - sitemap + robots configured
- GA4 script present with measurement ID:
  - `G-7D5ETBXWCH`
- Google Search Console sitemap submission completed by user
- DNS/HTTPS corrected for GitHub Pages

## Verified Config Files
- `_config.yml`
  - `url: "https://commit.ca"`
  - `baseurl: ""`
  - `google_analytics_id: "G-7D5ETBXWCH"`
- `_includes/head.html`
  - canonical, OG/Twitter metadata, JSON-LD, GA snippet
- `robots.txt`
  - points to `https://commit.ca/sitemap.xml`

## DNS Notes (Now Working)
- Apex A records should be GitHub Pages IPs (`185.199.108/109/110/111.153`)
- `www` CNAME to `lateralus11235.github.io`
- AAAA records were added/validated during session

## Open Items / Follow-up
1. Dependabot/security alerts:
   - Some may be stale and should clear after graph refresh.
   - Since `yarn.lock` is removed, noise from mixed lockfiles should reduce.
2. Optional security hardening:
   - GitHub Pages limits response-header control (CSP/HSTS tuning).
   - Use Cloudflare/proxy if advanced headers are required.
3. Optional cleanup:
   - Configure global git identity to remove committer warning:
     - `git config --global user.name "..."`
     - `git config --global user.email "..."`

## Local Environment Notes
- Repo path: `/Users/michaeloas/commitca site/commit.ca`
- Ruby/Jekyll toolchain used locally:
  - rbenv Ruby `3.2.4`
- Typical local commands:
  - `npm run build:assets`
  - `RBENV_VERSION=3.2.4 jekyll build`
  - `RBENV_VERSION=3.2.4 jekyll serve --host 127.0.0.1 --port 4000`

## Important Local Files Not Committed
- `commitgit`
- `commitgit.pub`

