---
title: "There would be no Hey without Gmail"
date: 2020-09-22
tags:
  - email
  - product
---

In [my previous post][prev-post] I mentioned how the ideas behind [Hey](https://hey.com) seem so obviously good, and I explored how well they work. In this post, I attempt to answer why no one has ever done this before. This can be broken down into **1. Timing** ("why this is the right time for Hey") and **2. Team** ("how was Basecamp uniquely positioned?").

**Epistemic status**: This is all retrospective guesswork, with the intent of identifying drivers of tech shifts.

Historically, email has been built of two distinct products: [mail servers][servers] and desktop [mail clients][clients]. Servers communicate with other mail servers and frontend clients enable users to interact with their mail servers. Web-based email clients provided by mail servers (starting with Hotmail) attacked this dichotomy.

Mail services today offer first-party web clients and continue to support IMAP/POP3 protocols for other mail clients (how Apple Mail works as a frontend for Gmail). While this enabled users to use their preferred clients, mail servers had to conform to these protocols—limiting what they could build. The last spurt of innovation in the consumer email space came with mobile, as developers built mobile-first frontend clients. But these apps did not have standalone business success: [Acompli](https://en.wikipedia.org/wiki/Acompli) (acquired by Microsoft), [Mailbox](https://en.wikipedia.org/wiki/Mailbox_(application)) (acquired by Dropbox) and [Sparrow](https://en.wikipedia.org/wiki/Sparrow_(email_client)) (acquired by Google).

The key insight behind Hey is that existing mail clients need not be supported. Hey does not expose IMAP/POP3 access, which gives them a lot more room to play with. Gmail made this possible.

## Gmail killed mail clients
Gmail made [Ajax][ajax] mainstream, bridging the gap between web and desktop email clients. The Gmail web client was slow to load, but once loaded, it could send and receive emails without page reloads. A fast web client gave little reasons for users to rely on desktop clients. Gmail was the original [single page app][spa].

A large audience on the web client meant Gmail could push features that worked only on the web (chat, categories). The mail server and mail client were unified, and this trend continued with mobile. Gmail continued its dominance on mobile, closely [followed by Apple Mail][market-share]. Web and mobile clients now form [>80% of the email market][market-share], effectively killing the traditional mail client. Apple Mail is the last bastion of the mail client with its popularity on iOS.

## Gmail had blind spots
The first one was privacy. [DeGoogle](https://www.reddit.com/r/degoogle/) is the latest in the list of Google-related colloquial verbs. To "degoogle" yourself is to expel Google from your life and regain privacy.

The second is not building network effects. Email has inherent network effects: being able to email a new user increases the value of email for everyone. But the new user could be using any email service. Despite its large user base, Gmail does not have any network effects on top of email. They used to: built-in chat was once popular, but is now dead. With no network effects and with the ability to forward email, users are not locked into Gmail.

By killing IMAP clients and giving users reason to switch, Gmail has created an opportunity.

## Basecamp was uniquely positioned
The total addressable market for privacy is not large enough for the typical Silicon Valley/VC model. But given it's email, it had to someone with existing credibility. Basecamp fulfilled this criteria. From [their FAQs][faqs]:

> Why should I trust you with my email? Great question. We’ve been in business for 21 years, have a widely-respected reputation for building great products, our uptime record is exceptional, we’re completely independent and don’t answer to the whims of investors or corporate overlords, and we’re financially stable with 21 profitable years in a row.

How many tech companies can say this? It might be more than just coincidental that Basecamp builds collaboration software, with jobs-to-be-done that overlap with email. But that might be taking my retrospective guesswork too far.

[prev-post]: /posts/2020/hey-review
[servers]: https://en.wikipedia.org/wiki/Comparison_of_mail_servers
[clients]: https://en.wikipedia.org/wiki/Comparison_of_email_clients
[faqs]: https://hey.com/faqs/
[ajax]: https://en.wikipedia.org/wiki/Ajax_(programming)
[spa]: https://en.wikipedia.org/wiki/Single-page_application
[market-share]: https://www.litmus.com/blog/infographic-the-2019-email-client-market-share/