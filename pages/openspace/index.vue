<template>
  <article class="page page--openspace">
    <header class="page__header">
      <h1 class="heading-1">
        {{ openspace.getTitle() }}
      </h1>
      <h3 class="openspace__track">Track {{ openspace.getTrack() }} - {{ openspace.schedule }}</h3>
    </header>
    <section v-if="openspace.getSpeakers().length > 0" class="openspace__speakers openspace__subsection">
      <h2 class="heading-3">{{ openspace.getSpeakers().length > 1 ? 'Speakers' : 'Speaker' }}</h2>
      <ul>
        <li v-for="speaker in openspace.getSpeakers()">
          <a :href="speaker.social?.linkedin" class="openspace__speaker" rel="noopener noreferrer" target="_blank">
            <img :alt="speaker.name" :src="speaker.image" class="openspace__speaker-image">
            {{ speaker.name }}<br/> {{ speaker.position }} @ {{ speaker.company }}
          </a>
        </li>
      </ul>
    </section>

    <div class="openspace__description  openspace__subsection">
      <h2 class="heading-3">Descripción</h2>
      <p v-for="description in openspace.description">
        {{ description }}
      </p>
    </div>

    <footer class="openspace__footer">
      <nuxt-link class="btn" to="/program">Back to the Schedule</nuxt-link>
    </footer>

  </article>
</template>

<script lang="ts" setup>
import {slots} from "~/data/slots";
import {DetailModel} from "~/model/DetailModel";
import type {Speaker} from "~/model";
import speakersList from "~/data/speakers";

const openspace = computed(() => {
  const slot = slots.get('openspace');

  if (!slot) {
    return DetailModel.placeholder()
  }

  const speakers: Speaker[] = slot.speakers.map((id: string) => speakersList.get(id)!)!
  return new DetailModel(
      slot.content.title,
      slot.content.lang,
      speakers,
      slot.content.description,
      slot.schedule,
      slot.track
  )
})

console.log(openspace)

</script>
<style src="./openspace.scss"></style>
