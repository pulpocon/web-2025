<template>
  <section class="speakers-section" id="speakers">
    <div class="container-fluid-1440">
      <header class="speakers-section__header">
        <h2 class="speakers-section__title" data-aos="fade-up">Confirmed Speakers</h2>
        <p class="speakers-section__description" data-aos="fade-up" data-aos-delay="200">
          #pulpoCon25 is thrilled to announce the speakers that had confirmed participation
        </p>
      </header>

      <div class="speakers-section__content">
        <div class="speakers-section__speakers-content">
          <speaker-person
              v-for="(speaker, index) in speakers"
              :key="speaker.name"
              :data-aos-delay="index * 200"
              :speaker="speaker"
              data-aos="fade-up"
          ></speaker-person>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>

import speakers from "~/data/speakers";

defineProps()

defineEmits()

</script>
<style src="./SpeakersSection.scss"></style>
