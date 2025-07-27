<template>
  <section class="location-section">
    <iframe
        frameborder="0"
        height="100%"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=Sede%20Afundacion%20Vigo+(PulpoCon)&ie=UTF8&t=&z=17&iwloc=B&output=embed"
        width="100%"
    ></iframe>
    <a href="https://www.mapsdirections.info/calcular-ruta.html">mapas y direcciones</a>

    <aside class="location-section__content">
      <div class="location-section__venue">
        <h2>
          Venue
        </h2>
        <a ref="nofollow, noopener"
           href="https://www.afundacion.org/es/centros/centro/centro_social_afundacion_vigo"
           target="_blank">
          <i class="fa fa-info-circle"></i> Auditorio Sede Afundación Vigo
        </a>
        <address>c/ Policarpo Sanz, 24 - 26, Vigo. 36202, Pontevedra. Spain</address>
      </div>

      <h2>
        Transportation
      </h2>
      <ul class="location-section__transports">
        <li class="transport-info">
          <h4 class="transport-info__title">
            <i class="fa fa-bus"></i> City Buses
          </h4>
          <div class="transport-info__content">
            Lines: C3, CAC, C7, L11, 12B, C4A, C5A, C4B, L8, C5B, 12A, C9A. L17, C9A, C15C.
            <a
                ref="nofollow, noopener"
                href="https://moovitapp.com/?to=R%C3%BAa%20Policarpo%20Sanz%2024&tll=42.237556_-8.722738&customerId=5546&metroId=3841&lang=es"
                target="_blank">Route Calculator</a>
          </div>
        </li>
        <li class="transport-info">
          <h4 class="transport-info__title">
            <i class="fa fa-plane-arrival"></i> Flights
          </h4>
          <div class="transport-info__content">
            Peinador Airport: 17 km distance. <a
              href="https://www.aena.es/es/vigo.html"
              target="_blank">More information</a>
          </div>
        </li>
        <li class="transport-info">
          <h4 class="transport-info__title">
            <i class="fa fa-train"></i> Train
          </h4>
          <div class="transport-info__content">
            <p>Train Station Urzáiz: R/ Norte, s/n Vigo. <a
                href="https://www.adif.es/w/08223-vigo-urz%C3%A1iz"
                target="_blank">
              Train Station Vigo-Urzáiz Info.
            </a>
            </p>
          </div>
        </li>
        <li class="transport-info">
          <h4 class="transport-info__title">
            <i class="fa fa-train"></i> Train
          </h4>
          <div class="transport-info__content">
            <p>Train Station Guixar: R/ Areal, s/n Vigo. <a
                href="https://www.adif.es/w/22308-vigo-guixar"
                target="_blank">
              Train Station Vigo-Guixar Info.
            </a>
            </p>
          </div>
        </li>
      </ul>
    </aside>
  </section>
</template>

<script lang="ts" setup>

defineProps({})
defineEmits([])


</script>
<style src="./LocationSection.scss"></style>
