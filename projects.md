---
layout: page
title: "Projects"
---

# Projects

Browse by tag:

{% assign tags = site.projects | map: "tags" | join: "," | split: "," | uniq %}
{% for tag in tags %}
- [{{ tag }}](#{{ tag | slugify }})
{% endfor %}

---

{% for project in site.projects %}
## {{ project.title }}
{{ project.description }}

**Tags:**  
{% for tag in project.tags %}
<span class="tag">{{ tag }}</span>
{% endfor %}

[View Project]({{ project.url }})

---
{% endfor %}