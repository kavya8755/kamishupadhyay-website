# kamishupadhyay.com

Personal site for Kamish Upadhyay — Senior GenAI / AI Architect.

## What's on the site

- **Home** — bio, tagline, résumé download, links.
- **Work** (`/work/`) — experience timeline, skills, consulting/sourcing contact CTA.
- **Books** (`/books/`) — your 3 books (`From Prototype to Autonomous Enterprise`,
  `Quantum Computing for AI Engineers`, `The AI CEO`), each with a PDF download.
- **Mini Courses** (`/courses/`) — downloadable PPTX slide decks (Agentic RAG,
  storage selection for AI, agentic frameworks, MCP, LLM evaluation, fine-tuning).
- **Blog** (`/blog/`) — Markdown posts, with an RSS feed at `/rss.xml`.
- **Contact** (`/contact/`) — email, LinkedIn, GitHub.

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to dist/
npm run preview   # serve the built dist/ locally
```

Requires Node 22.12+ (Astro 7).

## How to update things (no code knowledge needed for most of this)

- **Add a blog post**: create a new file in `src/content/blog/your-slug.md`
  with this frontmatter, then write Markdown below it:

  ```markdown
  ---
  title: "Your Post Title"
  description: "One-sentence summary for the blog index and SEO."
  pubDate: 2026-10-01
  tags: ["rag", "llm"]
  ---

  Your post content here.
  ```

- **Add a book**: drop the PDF into `public/books/`, then add an entry to
  the `books` array in `src/data/books.ts` (title, subtitle, description,
  page count, file path). No page templates to touch.

- **Add a mini course**: drop the `.pptx` into `public/courses/`, then add an
  entry to the `courses` array in `src/data/courses.ts`.

- **Update your bio, email, or social links**: edit `src/data/site.ts`.

- **Update your experience/skills**: edit `src/data/experience.ts`.

- **Replace your résumé**: overwrite `public/resume/Resume_Kamish_9Yrs_GenAI.pdf`
  with a new file of the same name (or update the filename in `src/data/site.ts`).

Commit and push to `main` — the site rebuilds and redeploys automatically
(see CI/CD below). No manual deploy step, ever.

## One-time setup: hosting + CI/CD (Cloudflare Pages, free tier)

You already registered `kamishupadhyay.com` through Cloudflare, so the
domain and hosting live in the same account — attaching the domain is a
few clicks, not a DNS migration.

1. **Push this code to a new GitHub repository** (e.g. `kavya8755/kamishupadhyay-com`).

2. **Create a Cloudflare Pages project**:
   - Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
   - Select your new repo.
   - Build settings: Framework preset **Astro**, build command `npm run build`,
     output directory `dist`.
   - Deploy once from the dashboard to confirm it builds (this also creates
     the Pages project named `kamish-upadhyay-site` — if you name it
     differently, update `--project-name` in `.github/workflows/deploy.yml`
     to match).

3. **Attach your domain**: in the Pages project → Custom domains → Add
   `kamishupadhyay.com` (and `www.kamishupadhyay.com` if you want the www
   version too). Since the domain is already on Cloudflare, DNS records are
   added automatically — no manual DNS editing.

4. **Set up the GitHub Actions secrets** (this is what makes future pushes
   deploy automatically without opening the Cloudflare dashboard again):
   - Create a Cloudflare API token: My Profile → API Tokens → Create Token →
     use the **"Edit Cloudflare Workers"** template (it covers Pages) or a
     custom token with `Account.Cloudflare Pages: Edit` permission.
   - In your GitHub repo → Settings → Secrets and variables → Actions, add:
     - `CLOUDFLARE_API_TOKEN` — the token from above.
     - `CLOUDFLARE_ACCOUNT_ID` — found on the right sidebar of any page in
       your Cloudflare dashboard.

5. **Done.** From here on: `git push` to `main` → GitHub Actions builds the
   site and deploys it to Cloudflare Pages → live at kamishupadhyay.com,
   usually within a minute. Check the Actions tab in GitHub if a deploy
   ever fails — the log will point at the exact build error.

### Why this stack (cost/effort reasoning)

- **Astro over Next.js/Gatsby**: this site has no need for a backend,
  auth, or server-side rendering — it's content plus a handful of static
  pages. Astro outputs plain HTML/CSS with near-zero JavaScript, which
  means less to secure, less to upgrade, and faster pages.
- **Cloudflare Pages over AWS S3+CloudFront**: functionally similar
  (global CDN, HTTPS, custom domain), but Pages has no egress/bandwidth
  charges and no IAM/bucket-policy setup — relevant here since PDF
  downloads (books, résumé) are repeat-bandwidth costs on S3 but free on
  Pages.
- **PDFs bundled in `public/`, not object storage**: all four PDFs
  together are under 1MB combined, well within what a static site can
  serve directly — a separate storage bucket (S3/R2) would only add
  moving parts for no benefit at this size. If your book collection grows
  much larger (dozens of MB+), move `public/books/` content to Cloudflare
  R2 and link to it instead.
- **GitHub Actions + `wrangler` over Cloudflare's dashboard-only Git
  integration**: slightly more setup (one API token), but keeps the
  deploy process versioned in the repo rather than hidden in dashboard
  settings — easier to audit or migrate later.

## Ongoing cost

| Item | Cost |
|---|---|
| Cloudflare Pages hosting | $0/month |
| Cloudflare CDN bandwidth | $0/month (unlimited on free tier) |
| Domain (`kamishupadhyay.com`) | ~$10–13/year, paid at renewal |
| GitHub Actions build minutes | $0 (public repo = unlimited; private repo has a generous free quota) |

**Total: effectively free**, aside from the annual domain renewal.
