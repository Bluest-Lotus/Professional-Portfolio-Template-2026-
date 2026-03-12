---
title: Tags
layout: default
---

# Tags

{% assign all_tags = "" | split: "" %}

{% for post in site.projects %}
  {% assign all_tags = all_tags | concat: post.tags %}
{% endfor %}

{% for post in site.blog %}
  {% assign all_tags = all_tags | concat: post.tags %}
{% endfor %}

{% assign unique_tags = all_tags | uniq | sort %}

{% for tag in unique_tags %}
## <a id="{{ tag }}"></a>{{ tag }}

### Projects
{% for item in site.projects %}
  {% if item.tags contains tag %}
  - [{{ item.title }}]({{ item.url }})
  {% endif %}
{% endfor %}

### Blog Posts
{% for item in site.blog %}
  {% if item.tags contains tag %}
  - [{{ item.title }}]({{ item.url }})
  {% endif %}
{% endfor %}

---

{% endfor %}