---
title: Eventos Sociales
layout: base.njk
---

<header>
  <h1>Eventos Sociales - PRUEBA DEBUG</h1>
</header>

<div class="container">
  <h2>DEBUG: Datos que llegaron de Sheets</h2>

  {% if eventossociales %}
    <p>DEBUG: La variable eventossociales SÍ existe</p>
    <p>DEBUG: Cantidad de eventos: {{ eventossociales | size }}</p>

    {% for evento in eventossociales %}
      <p><strong>DEBUG Activo crudo:</strong> "{{ evento.Activo }}"</p>

      {% if evento.Activo | trim | upcase == 'SI' %}
        <div style="background: #d4edda; padding: 1.5rem; margin-bottom: 1rem; border: 2px solid #28a745; border-radius: 10px;">
          <h3>{{ evento.Título | default: 'No hay título' }}</h3>
          <p>{{ evento.Descripción | default: 'No hay descripción' }}</p>
          <p><strong>Fecha:</strong> {{ evento.Fecha | default: 'No hay fecha' }}</p>
          <p><strong>Imagen URL:</strong> {{ evento['Imagen URL'] | default: 'No hay imagen' }}</p>

          {% if evento['Imagen URL'] %}
            <img src="{{ evento['Imagen URL'] }}" alt="Imagen debug" style="max-width:100%; border-radius:8px;">
          {% endif %}
        </div>
      {% endif %}
    {% endfor %}

  {% else %}
    <p>DEBUG: La variable eventossociales NO existe o está vacía</p>
  {% endif %}
</div>
