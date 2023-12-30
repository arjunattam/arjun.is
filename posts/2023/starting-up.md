---
title: "Building for the AI engineer"
description: "Testing description field"
date: 2023-12-30
tags: ["career"]
recommended: true
headerImage: "/img/2001-monolith-1.webp"
---

![Monolith from 2001: A Space Odyssey](/img/2001-monolith-1.webp)

Using an LLM reminds me of apes discovering the monolith in 2001: A Space Odyssey. It’s a fitting metaphor since we don’t quite know what goes on inside the black box, and like in the movie, touching it reveals new possibilities.

LLMs are undoubtedly capable, but the fact that they are also accessible makes them even more compelling. The capability is only an API call away, which means that anyone who can code can build an AI feature—without any ML expertise.

This enables the 30 million app devs in the world to build highly capable AI features. They will all become [AI engineers](https://www.latent.space/p/ai-engineer)—as they build demos, followed by production-ready apps, for their vertical, geography, and use-case.

Enabling this persona to be successful is an opportunity for new dev tools, and that will be my focus in 2024. I loved working with [Saikat](https://www.linkedin.com/in/saikat-mitra-5b168924/) at 100ms in 2022-23, and I’m excited about partnering up with him to build this startup. We bonded on building products for developers (since they are a fast-moving audience with high standards), and we want to build a company around our shared values.

It’s early days for us, and I want to share some of beliefs going into this.

## App devs will lead the way

As an industry, we quite don’t know how the raw capabilities of an LLM will translate into ubiquitous, reliable production-ready applications.

We have promising ideas: the chat interface works for some use-cases, but loses the affordances of a GUI. [Ask and adjust](https://thezbook.com/ask-adjust-the-future-of-productivity-interfaces) with a human-in-the-loop makes sense, but the productivity promise of “delegate and forget” to an agent is too powerful to ignore.

“People overestimate what they can do in a year and underestimate what they can do in ten”. We believe [this quote](https://www.goodreads.com/quotes/302999-most-people-overestimate-what-they-can-do-in-one-year) applies well to this context. In 2023, we saw LLM app demos that overpromised and underdelivered, but at the same time, the next decade will overdeliver—as both AI models and our mental models of using AI get better.

We believe that app developers will lead the way forward, given their proximity to the customer and their ability to iterate on implementations. ML expertise is secondary.

## App devs need fast vibe checks

While working on automated testing in the [Playwright](https://github.com/microsoft/playwright) team at Microsoft, I counter-intuitively realised the importance of manual testing. For app devs building new features, a fast inner loop between coding and eyeballing outputs (e.g. via hot reloads) adds more value than automated testing—which is more valuable later on to prevent regressions.

In the ML world, eyeballing has been disparagingly refered to as “vibe checks” that are not systematic. ML research prefers objective evaluation metrics (e.g. Mixtral scores [70.6% on MMLU](https://mistral.ai/news/mixtral-of-experts/)!)

We think vibe checks, and other subjective evaluation is critical for app devs to build intuition. This is especially relevant for LLM use-cases since they involve unstructured data (natural language).

Fast vibe checking is how app devs learnt CSS flexbox and JavaScript, through tools like [JS Fiddle](https://jsfiddle.net/) that shortened the feedback loop between coding and eyeballing. Playground tools (like ChatGPT or [nat.dev](https://github.com/nat/openplayground)) are a great start, but there's lot to build on top for an app dev to be successful.

## The community gets it

[Screenshots in a blog post](https://blog.roboflow.com/first-impressions-with-google-gemini/) say more about model capabilities to an app dev than scientific benchmarks. Twitter, Reddit are full of examples where devs show what a model can do and how it stacks up against alternatives. These forums have become the focal point for discovering the capabilities of this black box together, like apes around the monolith.

We believe content creators can leverage more powerful tools that go beyond screenshots, and provide content consumers the opportunity to start their own experiments from where they left off.

## Our focus for 2024

We're building tools for app devs to do faster vibe checks, reduce feedback cycles between coding and testing, and ultimately, ship production-ready LLM apps.

I believe there's plenty of opportunity for product innovation here, and the blank canvas is both exciting and intimidating. Saikat and I are giving ourselves the space to explore, make mistakes, look stupid—while keeping our eyes on market truth, and apply everything we’ve learnt about early stage and dev tools.

If you're building on top of LLMs, please do hit us up ([DM](https://twitter.com/arjunattam) or [email](mailto:arjun@attam.in)), and we'd love to give you a sneak peek of what's coming.
