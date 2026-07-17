#!/usr/bin/env bash
# Applies the branch-protection + repo settings described in BRANCHING.md §9.
# Run once (re-runnable). Requires the GitHub CLI, authenticated as a repo admin:
#   gh auth login        # then re-run this script
#
# Usage: ./scripts/setup-branch-protection.sh
set -euo pipefail

REPO="TCP-ENG/TCP-ENG_Website"

echo "==> Checking gh auth..."
gh auth status >/dev/null 2>&1 || { echo "Not logged in. Run: gh auth login"; exit 1; }

echo "==> Protecting 'main' (PR required, 'build' check required, no force-push/delete)..."
gh api -X PUT "repos/${REPO}/branches/main/protection" --input - <<'JSON'
{
  "required_status_checks": { "strict": true, "contexts": ["build"] },
  "enforce_admins": false,
  "required_pull_request_reviews": { "required_approving_review_count": 0 },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "required_linear_history": true
}
JSON

echo "==> Repo merge settings: squash-only + auto-delete merged branches..."
gh api -X PATCH "repos/${REPO}" \
  -F allow_squash_merge=true \
  -F allow_merge_commit=false \
  -F allow_rebase_merge=false \
  -F delete_branch_on_merge=true \
  -F allow_auto_merge=true >/dev/null

echo "==> Done. 'main' now requires a PR + a green 'build' check to merge."
echo "    (enforce_admins is off, so the owner can bypass for emergency hotfixes.)"
