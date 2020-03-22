---
title: "Lucked into Microsoft"
date: 2019-04-28
---

My 15 year old Linux fanboy self would have never believed it if he was told that one day he would work at Microsoft. Turns out that is exactly what happened. Here's how.

## Code reviews and Rubberduck

I remember a team discussion at [HyperTrack](http://hypertrack.com) on how to improve team culture and morale, and someone brought up doing better code reviews. It seemed like an odd idea at first, but it made sense and stuck with me. A healthy code review culture helps teams communicate, transfer knowledge, and every developer grows with every review.

At the same time, code reviews are a lot of work, and the tools don't make it any easier. I had time on my hand after leaving HyperTrack, and so I started building [Rubberduck](http://rubberduck.io) to fix this. Rubberduck brings editor-level navigation features to pull requests in the browser. With an easy way to find usages and peek definitions, it became faster to understand code changes.

Rubberduck grew well ([trended on Product Hunt](https://www.producthunt.com/posts/rubberduck) etc.), and it was fulfilling to see the early set of developers use it day in, day out. Scaling usage beyond the initial users became challenging, because:

1. Resistance to private code access: Only a few teams were comfortable with a small unknown startup touching their source code; "trust" did not scale.
2. Non-trivial infra: Beneath the surface, Rubberduck was like operating multiple IDE instances in the cloud. The service would break all the time, leaving new users with the impression that it never worked.

Rubberduck had quickly gone beyond the prototyping phase, and a team of one was not going to cut it anymore.

## Efficient collaboration and Team Chat

When Rubberduck was being used by a handful of teams, I noticed that these developers were constantly switching between their text editor (often VS Code), their code host (GitHub), and their team chat (Slack). Code was edited on VS Code, reviewed on GitHub, and talked about on Slack. Anecdotally, ~65% of pull requests had comments that led to chat threads ("let's move this to Slack"). My learnings were:

1. Boundaries between the editor/source control host/team chat needed to be questioned: each boundary is a context switch for developers, and things fall through cracks.
2. Developers collaborate in multiple ways, and code reviews are just one such way. Collaboration cannot be separated from developer communication.
3. Chat made it easier to collaborate in real-time, which in turn was driven by the need to ship things faster, and work with teammates who are working from home/remotely.

Extending these learnings led me to think that text editors had fallen behind with how teams work. Traditionally, editors have maximized the productivity of a solo developer writing code: with features like auto-completion, navigation, search. But shipping software requires more than just a solo developer writing code: software is built by teams that write code, review code, ask questions, help each other. What would an editor look like if it was built to maximize productivity of a team?

In an attempt to reduce context switches, I built the [Team Chat extension for VS Code](https://github.com/karigari/vscode-chat), which brings your Slack team to your editor ([read the product vision document](https://github.com/karigari/vscode-chat/blob/master/VISION.md)). Team Chat grew faster: it took just a week to get where Rubberduck was in 2 months.

## Next steps

It was amazing to see Rubberduck and Team Chat get user love and grow, and to find a vision statement that inspired me. I knew one potential route to take: fundraise and build a team, but for some reason it didn't feel right. I don't know which one of these it was: not having a co-founder, being burnt out from my last job in a venture backed startup, or just worrying that I had spent 3.5+ years in early stage with little to show for it.

Fortunately for me, my experiments caught the attention of my future manager at Microsoft (I've bookmarked the [issue comment on GitHub](https://github.com/MicrosoftDocs/live-share/issues/69#issuecomment-400335051) that triggered it). Over the following conversations I realized how aligned we were over the vision, and I found a team that wanted to build the best developer tools in the world. It felt like I had found my crowd.

## Microsoft

Two months ago, I joined Microsoft as a product manager on developer tools and services. There's a lot I'm ramping up on, not excluding the product manager role, and working in a large company. I'm constantly impressed by the people around me, and the agility with which we operate. And I'm incredibly excited to share what we have in store for you—give us [a week](https://www.microsoft.com/en-us/build).
