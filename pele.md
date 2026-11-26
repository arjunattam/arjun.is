---
title: "Diagrams with Pele"
layout: layouts/post.njk
permalink: /pele/
eleventyExcludeFromCollections: true
---

<style>
  figure.diagram {
    margin: 2.25rem 0;
  }
  figure.diagram pre.mermaid {
    --pele-font: var(--sans-fonts);
    --pele-font-mono: var(--mono-fonts);
    --pele-bg: var(--bg-black);
    --pele-fg: var(--white);
    --pele-muted: var(--text-gray);
    --pele-line: #5c6266;
    --pele-surface: #151d22;
    --pele-surface-alt: #11181c;
    --pele-border: #2f3a40;
    --pele-accent: var(--green);
    --pele-radius: 6px;
    --pele-title-weight: 500;
    --pele-heading-weight: 500;
    font-family: var(--sans-fonts);
    background: transparent;
    color: transparent;
    padding: 0;
    margin: 0;
    overflow: visible;
    display: flex;
    justify-content: center;
  }
  figure.diagram figcaption {
    margin-top: 0.75rem;
    text-align: center;
    font-size: 13px;
    color: var(--text-gray);
  }
</style>

[Pele](https://pele.run/) is a small library that draws [Mermaid](https://mermaid.js.org) diagrams as SVG. Obsidian built it, it has no dependencies, and you theme it with CSS variables. The diagrams below are plain Mermaid text in this page's source, and the browser turns them into SVG when the page loads.

Here is how a post gets from my editor to this site:

<figure class="diagram">
<pre class="mermaid">
flowchart LR
  A[Write post] --> B[git push]
  B --> C[Vercel build]
  C --> D([arjun.is])
</pre>
<figcaption>Publishing a post</figcaption>
</figure>

The colors and fonts come from the blog's own stylesheet, so a diagram reads as part of the page and not as an embedded image. The text above the diagram and the text below it use the same font.

Sequence diagrams work too. This is the whole exchange between the page and Pele:

<figure class="diagram">
<pre class="mermaid">
sequenceDiagram
  participant Page
  participant Pele
  Page->>Pele: Mermaid text
  Pele-->>Page: SVG
</pre>
<figcaption>Rendering in the browser</figcaption>
</figure>

<script src="https://cdn.jsdelivr.net/npm/pele@1.13.0/dist/pele.global.js"></script>
<script>
  for (const el of document.querySelectorAll('pre.mermaid')) pele.mount(el, el.textContent, { fontSize: 13 });
</script>
