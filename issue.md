---
layout: layouts/post.njk
pagination:
  data: collections.githubIssues
  alias: issue
  size: 1
permalink: "/posts/{{ issue.data.year }}/{{ issue.data.slug }}/index.html"
---

[Back]({{ '/' | url }})

# {{ issue.data.title }}

{{ issue.data.body }}
