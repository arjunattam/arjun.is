---
title: "Introducing decks.lol"
date: 2026-11-25
tags: []
description: "Decks is an MCP server to craft presentations that look great on desktop and mobile"
---

I made a bunch of slides during my brief stint at McKinsey. I'd draw most of them on
paper and send a photo to our "visual aids" team, who would turn it into a slick
presentation that I could iterate on. I think AI agents + presentation tools should have
delivered this loop by now, but they've all been disappointing.

So I built Decks, at [decks.lol](https://decks.lol/), an MCP server to build
presentations. I've been using it for my own presentations, and it is now available
for anyone to use for free.

Decks is fairly opinionated: it's MCP-first, optimized for mobile viewing, and supports (some)
non-linear flows. Read more on these below, or point your preferred AI agent at
[decks.lol/mcp](https://decks.lol/mcp) to set it up.

## MCP-first

Last year I thought MCP, which incidentally is two years old today, was more hype
than utility. Especially for developer products, where CLIs existed, and happened
to be well suited for agents: progressive disclosure with help commands and man pages, 
easily composable with bash ("code mode" is built in), works on any box (independent of
MCP client support). This is why Empirical has a [CLI](https://empirical.run/docs/cli)
which we've optimized as the primary interface.

MCP also seemed to optimize for "spec adherence", which agents don't actually
need. Changing an API might break "traditional" consumers, but agents can adapt to
new changes, and a CLI can adapt to what the use-case needs, regardless of a spec.

But year 2 has been great for MCP. The new stateless protocol simplifies implementation,
and extensions like UI apps and auth provide deeper harness integration. Turns out, the
"spec" was not for the agent to use, but for the harness around it (e.g. Claude's desktop app)
to render UI elements, etc, to complete the use case.

Optimizing how my local Claude worked with my presentation tool was the first reason for
Decks to exist, but over time it has become a side project to go deeper on MCP, and
build an MCP-first app.

MCP powers my current iteration loop with Decks today:
1. Ask Claude to create a new deck based on outline and share a draft link
2. Use my web browser to leave comments on text copy, layout or create new slides
3. Ask Claude to run in the background, reading and resolving comments as they come
4. Ask Claude to publish the deck

I'll integrate MCP's UI extensions to tighten this up in the future.

## Optimized for mobile

It seems everything became mobile first over the last decade, except for presentations and 
[Daring Fireball](https://daringfireball.net/). Presentations have been built to be 
"presented" on projectors, not consumed async on mobile. But those two are _not_ a 
dichotomy with responsive CSS, which is how Decks builds presentations.

Decks render as 16:9 on desktops, but as stories on mobile. Try this
out on your phone: [decks.lol/why](https://decks.lol/why).

## Non-linear flows

Or Prezi, without the motion sickness. Every serious presentation I've built has an 
"appendix" at the end to double-click on stats with charts, keep content that "does 
not make the cut", but might still be useful for Q&A. I find this dumb.

What solves this is some tasteful non-linearity in the content flow. Decks supports
branching and side tracks that show more content if needed. By "tasteful", I actually mean
minimum: balance what I've needed to add, but does not compromise my viewer's viewing flow.

Under the hood, all decks are code, and that means they can render a lot of stuff. Like this
plain SVG version of the Stripe homepage ribbon, embedded in this blog post.

[Link to deck](https://decks.lol/ribbon-rrip)

<div style="position: relative; aspect-ratio: 16 / 9; margin: 2em 0;">
  <iframe src="https://decks.lol/ribbon-rrip" title="Ribbon slide" loading="lazy" style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0; border-radius: 8px;" allowfullscreen></iframe>
</div>

I plan to keep iterating on Decks as a side project. It's caused some heads to turn for the
presentations I've made on it, and you might find some value too. Ask your agent to set
it up with [decks.lol/mcp](https://decks.lol/mcp), and if you, or your agent, find something
lacking, ask your agent to send it to the [public roadmap](https://decks.lol/roadmap).
