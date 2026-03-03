---
title: LA SUERTE TE ESTÁ ESPERANDO
layout: base.njk
---

<img src="images/logo.png" alt="Logo Suerte" style="width:100%; max-width:600px; height:auto; border-radius:10px; display:block; margin:0 auto 2rem;">

<header>
  <h1>LA SUERTE TE ESTÁ ESPERANDO</h1>
</header>

<div class="container">
  <div class="info">
    <p>Somos tu equipo en Paita para organizar <strong>sorteos</strong>, <strong>eventos corporativos y sociales</strong>, y <strong>agencia de viajes</strong>.</p>

    <h2>Horario de atención</h2>
    <ul>
      <li>Por internet (WhatsApp, email, etc.): 8:00 AM – 8:00 PM</li>
      <li>En oficina: 8:00 AM – 6:00 PM</li>
    </ul>

    <h2>Contacto</h2>
    <p><strong>Dirección:</strong> Ciudad Roja del Pescador Mz O-1 Lote 11, Paita, Piura, Perú</p>
    <p><strong>WhatsApp:</strong> +51 992 999 864</p>

    <a href="https://wa.me/51992999864?text=Hola!%20Quiero%20información%20sobre..." class="whatsapp-btn">
      Contáctanos por WhatsApp
    </a>
  </div>

  <h2>Nuestra ubicación en Paita</h2>
  <p><strong>Dirección física:</strong> Ciudad Roja del Pescador Mz O-1 Lote 11, Paita, Piura, Perú</p>

  <div style="max-width: 100%; overflow: hidden; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1747.3732215141545!2d-81.09859827613671!3d-5.09240378934202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9049e70074c12aa5%3A0x816e8bde4ec905a!2sCIUDAD%20ROJA%20DEL%20PESCADOR%20PIURA%20-%20PAITA%20-%20PAITA!5e0!3m2!1ses-419!2spe!4v1770084952584!5m2!1ses-419!2spe" 
      width="100%" 
      height="450" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>

  <h2>Nuestros servicios</h2>
  <ul>
    <li>sorteos de todo tipo</li>
    <li>Eventos corporativos</li>
    <li>Eventos sociales (bodas, cumpleaños, etc.)</li>
    <li>Paquetes de viajes</li>
  </ul>

  <p><strong>¡Contáctanos y hagamos realidad tu idea!</strong></p>

  <h2>Últimos sorteos</h2>
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

  <h2>Próximos eventos corporativos</h2>
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

  <h2>Eventos sociales recientes</h2>
  {% for evento in eventossociales %}
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
    <p>Aún no hay eventos sociales publicados.</p>
  {% endfor %}

  <h2>Paquetes de viajes destacados</h2>
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