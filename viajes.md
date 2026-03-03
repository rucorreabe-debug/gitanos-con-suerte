---
title: Paquetes de viajes
layout: base.njk
---

<header>
  <h1>Paquetes de viajes</h1>
</header>

<div class="container">
  <h2>Nuestros paquetes de viajes destacados</h2>

  {% for viaje in viajes %}
    {% if viaje.Activo == 'SI' %}
      <div style="background:white; padding:1.5rem; margin-bottom:1rem; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
        <h3>{{ viaje.Título }}</h3>
        <p>{{ viaje.Descripción }}</p>
        <p><strong>Fecha o temporada:</strong> {{ viaje.Fecha }}</p>
        {% if viaje['Imagen URL'] %}
          <img src="{{ viaje['Imagen URL'] }}" alt="{{ viaje.Título }}" style="max-width:100%; border-radius:8px;">
        {% endif %}
      </div>
    {% endif %}
  {% else %}
    <p>Aún no hay paquetes de viajes publicados.</p>
  {% endfor %}
</div>