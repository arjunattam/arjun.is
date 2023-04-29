# arjun.is

This repo powers arjun.is. Built with Eleventy and hosted on Vercel.

## Usage

```bash
npm install
npm run build
```

For local setup, run the following (`fetchPosts.js` fetches posts from GitHub Issues).

```bash
node scripts/fetchPosts.js
npm run serve
```

Pre-requisites for local:
- Setup a [PAT](https://github.com/settings/tokens?type=beta) in `GITHUB_TOKEN=xyz` in .env
- (Note to self) While committing changes, don't stage `.md` changes in `.gitignore`

## How it works

The current version supports two sources of content (blog posts): markdown files and GitHub Issues. Effectively, this makes GitHub Issues the CMS for my blog. My intent was to move over to GitHub Issues completely, but given that I had existing posts in markdown, I went ahead with this approach (instead of neater? [approaches](https://github.com/NickColley/website-from-github-issues) that build on 11ty magic.)

![Website arch](https://user-images.githubusercontent.com/284612/235308166-b4c21da4-a004-44fb-95eb-8af8e6d0b4aa.png)

### Issue tag convention

- All tags are passthrough — except ones prefixed with `meta:`
- For example
    - `meta:internal` for issues related to site fixes
    - `meta:published` for issues that are published
