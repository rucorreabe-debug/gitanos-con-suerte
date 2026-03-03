---
title: sorteos
layout: base.njk
---

<header>
  <h1>sorteos</h1>
</header>

<div class="container">
  <h2>Nuestros sorteos disponibles</h2>

  {% for sorteos in sorteos %}
    {% if sorteos.Activo == 'SI' %}
      <div style="background:white; padding:1.5rem; margin-bottom:1rem; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
        <h3>{{ sorteos.Título }}</h3>
        <p>{{ sorteos.Descripción }}</p>
        <p><strong>Fecha:</strong> {{ sorteos.Fecha }}</p>
        {% if sorteos['Imagen URL'] %}
          <img src="{{ sorteos['Imagen URL'] }}" alt="{{ sorteos.Título }}" style="max-width:100%; border-radius:8px;">
        {% endif %}
      </div>
    {% endif %}
  {% else %}
    <p>Aún no hay sorteos publicados. ¡Vuelve pronto!</p>
  {% endfor %}
</div>