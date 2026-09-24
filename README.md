# Knowledge Base

A MkDocs Material site for security notes, writeups and tooling references —
built as a self-hosted alternative to GitBook.

## Local setup

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# live preview at http://127.0.0.1:8000
mkdocs serve
```

## Project layout

```
docs/               # all content — one .md file per page
  web/               # web app security
  api/               # API security
  android/           # mobile / Android security
  network/           # network security
  bug-bounty/        # public bug bounty writeups
  tools/             # cheatsheets, command references
  stylesheets/       # extra.css — visual tweaks
  javascripts/       # extra JS (currently unused, giscus loads via override)
overrides/
  partials/comments.html   # injects giscus comments on opted-in pages
mkdocs.yml           # site config, nav, theme
.github/workflows/deploy.yml   # auto-deploys to GitHub Pages on push to main
```

## Deploying to GitHub Pages

1. Create a new GitHub repo (e.g. `knowledge-base`) and push this project to it.
2. In `mkdocs.yml`, replace `YOUR-USERNAME` (site_url, repo_url, socials)
   with your actual GitHub username/handle.
3. In repo **Settings → Pages**, set the source to
   **Deploy from a branch → `gh-pages` / root** (this branch is created
   automatically the first time the workflow runs).
4. Push to `main` — the included GitHub Action builds and deploys
   automatically. Your site will be live at
   `https://YOUR-USERNAME.github.io/knowledge-base/`.

## Adding a new page

1. Create a new `.md` file under the relevant `docs/<section>/` folder.
2. Add it to the `nav:` block in `mkdocs.yml` so it shows up in the sidebar.
3. Use `docs/web/example-sqli-writeup.md` as a formatting template
   (admonitions, tabbed code blocks, tables — all supported).

## Enabling comments (community feature)

Comments are powered by [giscus](https://giscus.app), which stores comments
as GitHub Discussions on your repo — no separate backend needed.

1. Enable **Discussions** on your repo: Settings → General → Features → check "Discussions".
2. Go to [giscus.app](https://giscus.app), enter your repo, choose a
   discussion category (e.g. create one called "Comments").
3. Copy the generated `data-repo-id` and `data-category-id` values.
4. Paste them into `overrides/partials/comments.html`, replacing the two
   `REPLACE_ME` placeholders.
5. On any page you want comments enabled, add this to the top of the file:
   ```markdown
   ---
   comments: true
   ---
   ```

## Custom domain (optional)

Add a `docs/CNAME` file containing your domain (e.g. `notes.yourdomain.com`)
and point a CNAME DNS record at `YOUR-USERNAME.github.io`.
