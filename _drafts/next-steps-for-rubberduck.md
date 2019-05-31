---
layout: post
title: Next steps for Rubberduck
date: 2019-05-30 07:00:00 +0000

---
I built the [Rubberduck](https://www.rubberduck.io/) browser extension to improve my code review experience on GitHub. With changes in the market and [my life](/2019/microsoft), I've been thinking about what changes for Rubberduck and it's users, and I think I have an answer now.

## Background

Rubberduck was made possible by the Language Server Protocol, or LSP.

LSP standardizes the protocol for how language tools and editors communicate, thereby solving the n x m problem (n different languages, m different languages, hence worked required to support them all is n x m).

VS Code was the first LSP client, but now other editors like Sublime Text and Vim also support LSP, thereby making it possible to leverage existing language tooling across editors.

Language intelligence is not restricted to editing however.

LSP made it possible for a solo developer to build a developer tool that

While pitching to VCs, I would often get asked "why now"—and LSP made for a compelling answer.

## Rich code navigation

Sign up for the private preview

I work on this, and we started onboarindg

## Rubberduck on LSIF

Rubberduck as designed right now, replicates how VS Code works: it spawns a new process to run the language server for a pull request.

[https://github.com/Microsoft/language-server-protocol/blob/master/indexFormat/specification.md](https://github.com/Microsoft/language-server-protocol/blob/master/indexFormat/specification.md "https://github.com/Microsoft/language-server-protocol/blob/master/indexFormat/specification.md")

Which is what excites me about LSIF, or the "Language Server Index Format", is that converts this problem from "running a container for pull request" to a simpler "query a database for queries", which is lot leaner for this use-case.

Among other languages, LSIF is supported by the TypeScript language server

How would this look like for Rubberduck is unclear: it could potentially be served off an Indexed

## Built in the open

Rubberduck is developed