# Branching Strategy — TCP ENG Website

This repo is a small **Next.js static-export marketing site** for TCP ENG, deployed
to **Cloudflare Pages**. It's maintained by one engineer (occasionally with help), so
the strategy is deliberately lightweight: **trunk-based development / GitHub Flow**,
not GitFlow.

> **Why not GitFlow?** GitFlow's `develop`, `release`, and parallel long-lived
> branches solve versioned-software problems (multiple supported releases, scheduled
> release trains). A marketing site has exactly one "version" — whatever is live at
> `tcp-eng.com`. Long-lived branches would just drift and create merge pain. Keep
> `main` always-deployable and use short-lived branches off it.

---

## 1. Branches

### `main` — production (protected)
- **Always deployable.** Every commit on `main` auto-builds and deploys to the
  **Cloudflare Pages production** environment → `tcp-eng.com`.
- Never commit directly to `main` for anything non-trivial — open a PR.
- The build must be green (`npm run build` succeeds) before merge.

### Short-lived working branches
- Branch off `main`, do focused work, open a PR, merge, delete. Aim for a **lifespan
  of hours to a few days** — the longer a branch lives, the harder the merge.
- Each branch/PR gets its own **Cloudflare preview URL** (see §4) for review.

There is **no permanent `develop`/`staging` branch.** Preview deployments replace it.

---

## 2. Branch naming

`<type>/<short-kebab-summary>` — lowercase, hyphenated, descriptive.

| Prefix | Use for | Example |
|--------|---------|---------|
| `feat/` | new page, section, or feature | `feat/blog-page` |
| `fix/` | bug / layout / broken link | `fix/mobile-nav-overlap` |
| `content/` | copy, projects, resume, images | `content/add-lora-project` |
| `chore/` | deps, config, tooling, refactor | `chore/bump-next-14` |
| `seo/` | metadata, sitemap, structured data | `seo/per-page-og-images` |
| `hotfix/` | urgent production fix (see §7) | `hotfix/broken-resume-link` |

Keep summaries short: `feat/contact-formspree`, not `feat/add-the-new-contact-form-with-formspree`.

---

## 3. Content vs. code

Because much of this site is content in `lib/site.js` and assets in `public/`, most
changes are **content, not code**. Use `content/` branches for those — they still get
a preview deploy, so you can proofread the rendered page before it goes live.

Trivial typo fixes are the one acceptable exception to the PR rule: a one-word copy fix
committed straight to `main` is fine. Anything that changes layout, structure, or more
than a couple of words → branch + PR.

---

## 4. Workflow (the normal loop)

```bash
# 1. Start from an up-to-date main
git checkout main
git pull

# 2. Branch
git checkout -b content/add-usb-switch-project

# 3. Work + verify locally
npm run dev            # http://localhost:3000
npm run build          # must succeed (static export to ./out)

# 4. Commit (see §6) and push
git add -A
git commit
git push -u origin content/add-usb-switch-project

# 5. Open a PR on GitHub → Cloudflare posts a PREVIEW URL on the PR
#    Review the preview, not just the diff.

# 6. Merge (squash) into main → auto-deploys to production
#    Delete the branch.
```

**Cloudflare Pages mapping**
- **Production branch:** `main` → `tcp-eng.com`
- **Preview deployments:** every other branch / PR → a unique
  `https://<hash>.tcp-eng-website.pages.dev` URL. Review there before merging.

---

## 5. Feature flags — ship unfinished work "dark"

Prefer **flags on `main`** over long-lived feature branches for work that spans several
sessions. This repo already does this: `showProjects` in `lib/site.js` hides the
Projects nav link, home grid, and buttons while the section is being finished — the code
lives on `main` and deploys, but stays invisible until the flag flips to `true`.

Use the same pattern for any half-built section (a future Blog, a new service, etc.):
merge it behind a `false` flag, then flip the flag in a tiny follow-up PR when ready.
This keeps branches short and avoids big-bang merges.

---

## 6. Commit messages

- **Imperative, present tense:** "Add USB switch project", not "Added" / "Adds".
- Short subject (≤ ~70 chars); add a body when the *why* isn't obvious.
- One logical change per commit where practical.
- **Squash-merge PRs** so `main` history stays one clean commit per change.
- Agent-assisted commits end with the co-author trailer:

  ```
  Co-Authored-By: Claude <noreply@anthropic.com>
  ```

---

## 7. Hotfixes

Same flow, faster lane:

```bash
git checkout main && git pull
git checkout -b hotfix/broken-resume-link
# fix, npm run build to confirm
git commit && git push -u origin hotfix/broken-resume-link
```

Open the PR, glance at the preview, merge. For a genuine emergency (site broken for
visitors), it's acceptable to commit the fix directly to `main` and let it deploy — the
preview step is a safety net, not a gate you can never bypass.

To roll back instead of fixing forward: in the Cloudflare Pages dashboard, promote the
last known-good deployment, then fix the repo afterward.

---

## 8. Releases & tags (optional, lightweight)

A marketing site doesn't need semantic version releases, but tagging notable states is
useful for rollback reference:

```bash
git tag -a v1.0-launch -m "Public launch"
git push origin v1.0-launch
```

Tag on `main` only, at meaningful milestones (launch, major redesign). Skip per-change
versioning.

---

## 9. Recommended GitHub settings

Enable on the `main` branch (Settings → Branches → Add rule):
- ✅ **Require a pull request before merging**
- ✅ **Require status checks to pass** (once a CI build check exists — see below)
- ✅ **Require branches to be up to date before merging**
- ✅ **Automatically delete head branches** after merge (Settings → General)
- Default merge method: **Squash and merge**

Optional CI: a GitHub Action that runs `npm ci && npm run build` on every PR gives a
required green check before merge. (Cloudflare's own preview build also effectively
validates the build.)

---

## 10. Cheat sheet

```
main                      always live at tcp-eng.com — protected, PR-only
feat/…  fix/…  content/…  short-lived; one PR each; auto preview URL
chore/… seo/…  hotfix/…

start   git checkout main && git pull && git checkout -b <type>/<summary>
verify  npm run dev   +   npm run build   (must pass)
ship    push → PR → review preview → squash-merge → branch auto-deleted
dark    merge unfinished work behind a false flag (see showProjects)
```

**Golden rule:** `main` is always green and always deployable. Everything else is a
short detour that ends in a squash-merge back to `main`.
