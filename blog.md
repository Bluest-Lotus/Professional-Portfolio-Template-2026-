---
layout: page
title: "Blog"
---

# Blog

Browse by tag:

{% assign tags = site.tags %}
{% for tag in tags %}
- [{{ tag[0] }}](#{{ tag[0] | slugify }})
{% endfor %}

---

{% for post in site.posts %}
## {{ post.title }}
**Date:** {{ post.date | date: "%B %d, %Y" }}

**Tags:**  
{% for tag in post.tags %}
<span class="tag">{{ tag }}</span>
{% endfor %}

[Read More]({{ post.url }})

---
{% endfor %}