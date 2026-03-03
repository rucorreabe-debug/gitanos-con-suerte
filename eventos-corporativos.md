---
title: Eventos Corporativos
layout: base.njk
---

<header>
  <h1>Eventos Corporativos</h1>
</header>

<div class="container">
  <h2>Nuestros eventos corporativos</h2>

  {% for evento in eventoscorporativos %}
    {% if evento.Activo == 'SI' %}
      <div style="background:white; padding:1.5rem; margin-bottom:1rem; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
        <h3>{{ evento.Título }}</h3>
        <p>{{ evento.Descripción }}</p>
        <p><strong>Fecha:</strong> {{ evento.Fecha }}</p>
        {% if evento['Imagen URL'] %}
          <img src="{{ evento['Imagen URL'] }}" alt="{{ evento.Título }}" style="max-width:100%; border-radius:8px;">
        {% endif %}
      </div>
    {% endif %}
  {% else %}
    <p>Aún no hay eventos corporativos publicados.</p>
  {% endfor %}
</div>