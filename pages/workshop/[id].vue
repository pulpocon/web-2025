<template>
  <article class="page page--workshop">
    <header class="page__header">
      <h1 class="heading-1">
        {{ workshop.getTitle() }}
      </h1>
      <h3 class="workshop__track">Track {{ workshop.getTrack() }} - {{ workshop.schedule }}</h3>
    </header>
    <section v-if="workshop.getSpeakers().length > 0" class="workshop__speakers workshop__subsection">
      <h2 class="heading-3">{{ workshop.getSpeakers().length > 1 ? 'Speakers' : 'Speaker' }}</h2>
      <ul>
        <li v-for="speaker in workshop.getSpeakers()">
          <a :href="speaker.social?.linkedin" class="workshop__speaker" rel="noopener noreferrer" target="_blank">
            <img :alt="speaker.name" :src="speaker.image" class="workshop__speaker-image">
            {{ speaker.name }}<br/> {{ speaker.position }} @ {{ speaker.company }}
          </a>
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
import speakersList from "~/data/speakers-map";

const route = useRoute()

const slot = slots.get(route.params.id as string);

let workshop: DetailModel


if (!slot) {
  workshop = new DetailModel(
      'Not Defined',
      'xx',
      [{
        name: 'Not Defined',
        image: '/i/speakers/your-photo.jpg',
        position: 'Developer',
        company: 'Acme Inc.',
        bio: 'Unknown',
        social:
            {linkedin: 'https://www.not-defined.com'}
      }],
      ['Content to be defined'],
      '',
      ''
  )
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
