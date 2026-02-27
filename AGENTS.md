# AGENTS

## Session Continuity

### Current State (as of 2026-02-27)
- Production branch: `master`
- `master` now contains the hardened site updates at commit `7cf607a`.
- Backup of old pre-hardened master: `codex/master-backup-20260227` (old `master` at `f08376e`).

### Branches
- Hardened work branch: `codex/hardening-pass`
- Backup branch (pre-hardened master): `codex/master-backup-20260227`

### Pages / Domain
- GitHub Pages test URL: `https://lateralus11235.github.io/commit.ca/#/`
- Custom domain `commit.ca` currently has DNS issues (`DeprecatedIPError`) and may return 404 until DNS is corrected.
- `CNAME` was removed during branch testing. Restore it on `master` when ready for custom domain routing.

### Content / UX Decisions Already Applied
- Blog is disabled (`blogReady: false`).
- Partners list reduced to one partner: `Tidal`.
- Tidal link points to `//tidalcloud.com`.
- Tidal logo replaced with `https://tidalcloud.com/assets/img/logo/logo.svg` (stored in repo assets as `logo-tidalcloud.svg` / `colored-tidalcloud.svg`).
- Removed billing sentence from contact section (`lastLine` empty).
- Removed "Join our team" block (`about.join` is empty).
- Footer now shows copyright with auto-updating year and no designer attribution.
- Partners spacing adjusted for single-partner layout.

### Local Workspace Notes
- Unrelated local files observed and intentionally not modified in prior work:
  - `.DS_Store` (modified)
  - `commitgit` (untracked)
  - `commitgit.pub` (untracked)

### Next Actions (when ready)
1. Restore custom domain file on `master`:
   - Create `CNAME` with `commit.ca`
   - Commit and push
2. Update DNS records for `commit.ca` to current GitHub Pages requirements.
3. Re-enable HTTPS enforcement in GitHub Pages after DNS is valid.
4. Decide future blog approach (static content, Jekyll posts, or CMS with `/admin`).
