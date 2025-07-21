<template>
  <article class="page page--workshop">
    <header class="page__header">
      <h1 class="heading-1">
        {{ workshop.getTitle() }}
      </h1>
      <h3 class="workshop__track">Track {{ workshop.getTrack() }} - {{ workshop.schedule }}</h3>
      <h3 class="workshop__lang">{{ workshop.getLangAsFlag() }}</h3>
    </header>
    <section v-if="workshop.getSpeakers().length > 0" class="workshop__speakers workshop__subsection">
      <h2 class="heading-3">{{ workshop.getSpeakers().length > 1 ? 'Speakers' : 'Speaker' }}</h2>
      <ul>
        <li v-for="speaker in workshop.getSpeakers()" class="workshop__speaker-card">
          <img :alt="speaker.name" :src="speaker.image" class="workshop__speaker-image">
          <div class="workshop__speaker-details">
            <span class="workshop__speaker-details-name">{{ speaker.name }}</span>
            <span class="workshop__speaker-details-position"><a :href="speaker.social?.linkedin" class="workshop"
                                               rel="noopener noreferrer" target="_blank">
              {{ speaker.position }} @ {{ speaker.company }}
            </a></span>
          </div>
        </li>
      </ul>
    </section>

    <div class="workshop__description  workshop__subsection">
      <h2 class="heading-3">Description</h2>
      <p v-for="description in workshop.description">
        {{ description }}
      </p>
    </div>

    <footer class="workshop__footer">
      <nuxt-link class="btn" to="/program">Back to the Schedule</nuxt-link>
    </footer>

  </article>
</template>
<script lang="ts" setup>
import {useRoute} from '#app'
import {slots} from "~/data/slots";
import {DetailModel} from "~/model/DetailModel";
import type {Speaker} from "~/model";
import speakersList from "~/data/speakers";

const route = useRoute()

const slot = slots.get(route.params.id as string);

let workshop: DetailModel

if (!slot) {
  workshop = DetailModel.placeholder()
} else {
  const speakers: Speaker[] = slot.speakers.map((id: string) => speakersList.get(id)!)!

  workshop = new DetailModel(
      slot.content.title,
      slot.content.lang,
      speakers,
      slot.content.description,
      slot.schedule,
      slot.track
  )
}

</script>
<style src="./workshop.scss"></style>
