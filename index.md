---
layout: page
title: "Welcome"
---

# Hi, I'm Your Name 👋

I build clean, modern engineering and software projects.

## Featured Projects
{% for project in site.projects %}
- **[{{ project.title }}]({{ project.url }})** — {{ project.description }}
{% endfor %}

## Latest Blog Posts
{% for post in site.posts limit:3 %}
- **[{{ post.title }}]({{ post.url }})** — {{ post.date | date: "%b %d, %Y" }}
{% endfor %}