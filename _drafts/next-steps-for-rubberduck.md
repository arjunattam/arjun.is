---
layout: post
title: Next steps for Rubberduck
date: 2019-05-30 07:00:00 +0000

---
I built the [Rubberduck](https://www.rubberduck.io/) browser extension to improve my code review experience on GitHub. With changes in the market and [my life](/2019/microsoft), I've been thinking about what changes for Rubberduck and it's users, and I think I have an answer now.

## Background

Rubberduck was made possible by Microsoft's [Language Server Protocol](https://microsoft.github.io/language-server-protocol/), or LSP. LSP standardizes the protocol for how editors can communicate with language tools. For example, the editor action for find-all-references (usages) is represented by the [textDocument/references](https://microsoft.github.io/language-server-protocol/specification#textDocument_references) request/response.

Before LSP, making an editor that supports _n_ languages would have required different integrations with _n_ language tools. If _m_ editors were to support _n_ languages, that would imply _m_ × _n_ integrations. With LSP, this work can be reduced to _m_ + _n_, with _m_ editors and _n_ language tools conforming to LSP, and the same language tools can be used across editors.

The beauty of LSP is that it is **language agnostic**: the protocol itself does not know about any language specific constructs. It only defines requests/responses in terms of positions in a text document.

VS Code was the first LSP client, but now other editors like Sublime Text and Vim also support LSP. Interestingly, language intelligence is not restricted to editing scenarios. If I want to run find-all-references in the context of a code review, I could send an LSP request for references to the same language tooling and get answers.

LSP enabled a solo developer (me, in this case) to build a code review tool that support multiple languages, since it was possible to leverage existing language tooling ("language servers").

_Sidenote_: Almost all VCs that I pitched to asked me "why now?", or to be more verbose, "what has changed that makes Rubberduck a good idea now?", or "why hasn't this already been built?" My answer was the rise of LSP (and it worked quite well).

## Running language servers

Using language servers implied replicating how editors work: when VS Code loads a Java file, it spawns a process that runs the Java language server. Rubberduck does the same: when you open a PR for Python, it spawns an instance of the Python language server for that PR. If a PR happens to have both Python and TypeScript, that means 2 server processes. If a 100 PRs are opened at the same time, more processes.

Managing this architecture was way above my pay grade, and I started questioning if LSP was the right decision. Sure it gives me the ability to scale to other languages, but wouldn't I rather get to product-market fit for a single language?

This is when I discovered [ctags](https://en.wikipedia.org/wiki/Ctags) and [cscope](https://en.wikipedia.org/wiki/Cscope), old tools that pack all language intelligence into a "tags file", which is portable. So if 

ctags/cscope use a lexical understanding of the codebase, which means inaccurate intelligence. If 2 Java classes have the same method name, a find-all-references on the method will show both classes (which is wrong).

## LSIF

It felt like I had hit a roadblock. 

This is when I had the Deus ex Machina moment: the authors of LSP at Microsoft had announced the [Language Server Index Format](https://github.com/Microsoft/language-server-protocol/blob/master/indexFormat/specification.md) (LSIF, pronounced "else-if").

## Rich code navigation

The launch of LSIF was around the time I was thinking of taking up the Microsoft offer (add link). Fast forward a few months, I'm a product manager on Rich code navigation, where we are building 

If you're a Rubberduck user, you should consider signing up for [our private preview](https://aka.ms/vsfutures-signup).

## Rubberduck on LSIF

If rich code navigation exists, what does Rubberduck stand for?

Rubberduck as designed right now, replicates how VS Code works: it spawns a new process to run the language server for a pull request.

Among other languages, LSIF is supported by the TypeScript language server

How would this look like for Rubberduck is unclear: it could potentially be served off an Indexed

## Built in the open

Rubberduck is now open-source, and MIT licensed.