<template>
  <nuxt-link v-if="talk" :to="`/talk/${id}`">
    <div class="speaker-info">
      <div class="speaker-info__image-group"><img v-for="speaker in (talk.getSpeakers())"
                                                  :key="speaker.name"
                                                  :src="speaker.image"
                                                  :alt="speaker.name"
                                                  class="speaker-image"></div>

      {{ talk.speakersNames() }}:
      <strong>{{ talk.getTitle() }}</strong>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>

import type {Slot} from "~/model";
import {slots} from "~/data/slots";
import {TeaserModel} from "~/model/TeaserModel";
import speakersList from "~/data/speakers";


const props = defineProps({
  id: {type: String, required: true}
})

const slot: Slot | undefined = slots.get(props.id)

const talk: TeaserModel = !slot
    ? TeaserModel.placeholder()
    : TeaserModel.fromSlot(slot, speakersList)

</script>

<style scoped lang="scss">
.workshop-teaser {
  display: block;
  text-decoration: none;
}

.speaker-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  &__image-group {
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
}

.speaker-image {
  width: 128px;
  height: auto;
  max-width: calc((100% - 16px) / 2); /* Allow up to 2 images per row with gaps */
  aspect-ratio: 1/1;
  flex-shrink: 1;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #a81d88;
  background: #fff;
}
</style>
