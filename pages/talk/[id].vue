<template>
  <article class="page page--talk">
    <header class="page__header">
      <h1 class="heading-1">
        {{ talk.getTitle() }}
      </h1>
      <h3 class="talk__track">{{ talk.schedule }}</h3>
    </header>
    <section v-if="talk.getSpeakers().length > 0" class="talk__speakers talk__subsection">
      <h2 class="heading-3">{{ talk.getSpeakers().length > 1 ? 'Speakers' : 'Speaker' }}</h2>
      <ul>
        <li v-for="speaker in talk.getSpeakers()">
          <a :href="speaker.social?.linkedin" class="talk__speaker" rel="noopener noreferrer" target="_blank">
            <img :alt="speaker.name" :src="speaker.image" class="talk__speaker-image">
            {{ speaker.name }}<br /> {{ speaker.position }} @ {{ speaker.company }}
          </a>
        </li>
      </ul>
    </section>

    <div class="talk__description  talk__subsection">
      <h2 class="heading-3">Description</h2>
      <p v-for="description in talk.description">
        {{ description }}
      </p>
    </div>

    <footer class="talk__footer">
      <nuxt-link class="btn" to="/program">Back to the Schedule</nuxt-link>
    </footer>

  </article>
</template>
<script lang="ts" setup>
import { useRoute } from '#app'

import {slots} from '~/data/slots'
import speakersList from '~/data/speakers-map'
import {DetailModel} from "~/model/DetailModel";
import type {Speaker} from "~/model";

const route = useRoute()

const slot = slots.get(route.params.id as string);

let talk: DetailModel



if (!slot) {
  talk = new DetailModel(
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

  talk = new DetailModel(
      slot.content.title,
      slot.content.lang,
      speakers,
      slot.content.description,
      slot.schedule,
      ''
  )
}
</script>
<style src="./talk.scss"></style>
