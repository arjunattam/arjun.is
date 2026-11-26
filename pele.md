---
title: "Diagrams with Pele"
layout: layouts/post.njk
permalink: /pele/
eleventyExcludeFromCollections: true
---

<style>
  pre.mermaid, .pele {
    --pele-bg: var(--bg-black);
    --pele-fg: var(--white);
    --pele-muted: var(--text-gray);
    --pele-line: var(--text-gray);
    --pele-surface: var(--bg-gray);
    --pele-surface-alt: var(--dark-green);
    --pele-border: var(--text-gray);
    background: transparent;
    padding: 0;
    margin: 2rem 0;
  }
</style>

These diagrams are written in [Mermaid](https://mermaid.js.org) and rendered to SVG in the browser by [Pele](https://pele.run/).

<pre class="mermaid">
flowchart LR
  A[Write post] --> B[git push]
  B --> C[Vercel build]
  C --> D([arjun.is])
</pre>

<pre class="mermaid">
sequenceDiagram
  participant Browser
  participant Pele
  Browser->>Pele: Mermaid text
  Pele-->>Browser: SVG
</pre>

<script src="https://cdn.jsdelivr.net/npm/pele@1.13.0/dist/pele.global.js"></script>
<script>
  for (const el of document.querySelectorAll('pre.mermaid')) pele.mount(el, el.textContent);
</script>
