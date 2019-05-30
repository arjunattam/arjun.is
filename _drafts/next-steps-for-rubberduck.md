---
layout: post
title: Next steps for Rubberduck
date: 2019-05-30 07:00:00 +0000

---
This post is long time due for users of the Rubberduck browser extension. 

## Rich code navigation

Sign up for the private preview

## Rubberduck on LSIF

Rubberduck as designed right now, replicates how VS Code works: it spawns a new process to run the language server for a pull request.

Which is what excites me about LSIF, or the "Language Server Index Format", is that converts this problem from "running a container for pull request" to a simpler "query a database for queries", which is lot leaner for this use-case.

Among other languages, LSIF is supported by the TypeScript language server

How would this look like for Rubberduck is unclear: it could potentially be served off an Indexed 

## Built in the open

Rubberduck is developed