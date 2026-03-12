---
title: Tags
layout: default
---

# Tags

{% assign all_tags = "" | split: "" %}

{% for item in site.projects %}
  {% assign all_tags = all_tags | concat: item.tags %}
{% endfor %}
{% for item in site.blog %}
  {% assign all_tags = all_tags | concat: item.tags %}
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

### Blog posts
{% for item in site.blog %}
  {% if item.tags contains tag %}
  - [{{ item.title }}]({{ item.url }})
  {% endif %}
{% endfor %}

---

{% endfor %}