---
title: Home
layout: default
---

<div class="hero">
  <div>
    <p class="hero-pill">Engineering · Systems · Modularity</p>
    <h1 class="hero-title">Designing calm, modular systems for real‑world engineering.</h1>
    <p class="hero-subtitle">
      A portfolio of embedded platforms, robotics, and scalable technical ecosystems — built with an eye for clarity and longevity.
    </p>
    <div class="hero-meta">
      <span>Based in Windsor, Ontario</span>
      <span>·</span>
      <span>Electromechanical Engineering</span>
      <span>·</span>
      <span>LayerZero / IteronOS</span>
    </div>
  </div>
  <div class="hero-visual">
    <div class="hero-card">
      <div class="hero-grid">
        <div class="hero-cell"></div>
        <div class="hero-cell"></div>
        <div class="hero-cell"></div>
        <div class="hero-cell"></div>
        <div class="hero-cell"></div>
        <div class="hero-cell"></div>
      </div>
    </div>
  </div>
</div>

<div class="section-header">
  <div>
    <h2 class="section-title">Featured Projects</h2>
    <p class="section-subtitle">Selected work across embedded systems, robotics, and modular platforms.</p>
  </div>
  <div class="controls-row">
    <input id="project-search" class="search-input" type="search" placeholder="Search projects by name or tag">
    <div class="segmented-control">
      <button type="button" class="active" data-filter-tag="all">All</button>
      <button type="button" data-filter-tag="embedded">Embedded</button>
      <button type="button" data-filter-tag="robotics">Robotics</button>
      <button type="button" data-filter-tag="systems">Systems</button>
    </div>
  </div>
</div>

<div class="grid">
{% for project in site.projects %}
<div class="card"
     data-project-card
     data-title="{{ project.title | escape }}"
     data-tags="{{ project.tags | join: ',' }}">
  {% if project.thumbnail %}
  <img src="{{ project.thumbnail }}" alt="{{ project.title }}" class="card-thumb">
  {% endif %}
  <h3 class="card-title"><a href="{{ project.url }}">{{ project.title }}</a></h3>
  {% if project.summary %}
  <p class="card-meta">{{ project.summary }}</p>
  {% endif %}
  <div class="tags">
    {% for tag in project.tags %}
      <span class="tag">{{ tag }}</span>
    {% endfor %}
  </div>
</div>
{% endfor %}
</div>

<div style="height:2.5rem;"></div>

<div class="section-header">
  <div>
    <h2 class="section-title">Latest Writing</h2>
    <p class="section-subtitle">Notes on design, engineering, and building modular ecosystems.</p>
  </div>
</div>

<div class="grid">
{% for post in site.blog limit:3 %}
<div class="card">
  <h3 class="card-title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p class="card-meta">
    {{ post.date | date: "%B %d, %Y" }}
  </p>
  <div class="tags">
    {% for tag in post.tags %}
      <span class="tag">{{ tag }}</span>
    {% endfor %}
  </div>
</div>
{% endfor %}
</div>