---
layout: layouts/post.njk
pagination:
  data: collections.githubIssues
  alias: issue
  size: 1
permalink: "/issues/{{ issue.data.id }}/index.html"
---

[Back]({{ '/' | url }})

# {{ issue.data.title }}

{{ issue.data.body }}
