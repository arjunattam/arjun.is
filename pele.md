---
title: "Diagrams with Pele"
layout: layouts/post.njk
permalink: /pele/
eleventyExcludeFromCollections: true
---

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
