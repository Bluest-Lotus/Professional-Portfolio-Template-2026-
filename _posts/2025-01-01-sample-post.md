---
layout: default
---
<h1>{{ page.title }}</h1>
<p><small>{{ page.date | date: "%B %d, %Y" }}</small></p>

{% if page.tags %}
  <p>
    {% for tag in page.tags %}
      <span class="tag">{{ tag }}</span>
    {% endfor %}
  </p>
{% endif %}

{{ content }}