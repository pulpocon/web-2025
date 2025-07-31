<template>
  <article class="speaker">
    <header>
      <img :alt="speaker.name" :src="speaker.image" class="speaker__image">
      <h2 class="speaker__name">
        {{ speaker.name }}
      </h2>
    </header>
    <h3 class="speaker__position">{{ speaker.position }} <br />@ {{ speaker.company }}</h3>

    <ul class="speaker__social">
      <li v-if="speaker.country" class="speaker__social-link">
        {{ speaker.country }}
      </li>

      <li v-if="speaker.social?.twitter" class="speaker__social-link">
        <a :href="speaker.social?.twitter" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
      </li>

      <li v-if="speaker.social?.linkedin" class="speaker__social-link">
        <a :href="speaker.social?.linkedin" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
    </ul>

  </article>
</template>

<script lang="ts" setup>


import type {Speaker} from "~/model";

defineProps({
  speaker: { type: Object as () => Speaker, required: true }
})

</script>
<style src="./SpeakerPerson.scss"></style>
