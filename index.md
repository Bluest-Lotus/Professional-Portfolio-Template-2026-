---
title: Home
layout: default
---

# Welcome

This is my minimalist portfolio and blog.  
Explore my work, read my thoughts, and connect with me.

## Featured Projects
{% for project in site.projects %}
- [{{ project.title }}]({{ project.url }})
{% endfor %}

## Latest Blog Posts
{% for post in site.blog limit:3 %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}