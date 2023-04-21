---
layout: layouts/issue.njk
pagination:
  data: collections.githubIssues
  alias: issue
  size: 1
permalink: "/posts/{{ issue.data.year }}/{{ issue.data.slug }}/index.html"
---
