---
title: Home
layout: default
---

# Welcome

A minimalist portfolio showcasing my engineering work, writing, and long-term projects.

---

## Featured Projects

<div class="grid">
{% for project in site.projects %}
<div class="card">
  {% if project.thumbnail %}
  <img src="{{ project.thumbnail }}" alt="{{ project.title }}">
  {% endif %}
  <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
</div>
{% endfor %}
</div>

---

## Latest Blog Posts

<div class="grid">
{% for post in site.blog limit:3 %}
<div class="card">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p>{{ post.date | date: "%B %d, %Y" }}</p>
</div>
{% endfor %}
</div>