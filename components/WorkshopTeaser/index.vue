<template>
  <nuxt-link v-if="workshop" :to="`/workshop/${id}`" class="workshop-teaser">
    <div class="speaker-info">
      <div class="speaker-info__image-group"><img v-for="speaker in (workshop.getSpeakers())"
                                                  :key="speaker.name"
                                                  :src="speaker.image"
                                                  :alt="speaker.name"
                                                  class="speaker-image"></div>
      {{ workshop.speakersNames() }}:
      <strong>{{ workshop.getTitle() }}</strong>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>

import {slots} from "~/data/slots";
import {TeaserModel} from "~/model/TeaserModel";
import speakersList from "~/data/speakers";
import type {Slot} from "~/model";

const props = defineProps({
  id: {type: String, required: true}
})

const slot: Slot | undefined = slots.get(props.id)

const workshop: TeaserModel = !slot
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
    gap: 32px;
    justify-content: center;
  }
}

.speaker-image {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 3px solid #a81d88;
}
</style>
