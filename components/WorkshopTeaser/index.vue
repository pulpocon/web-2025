<template>
  <nuxt-link v-if="workshop" :to="`/workshop/${id}`" class="workshop-teaser">
    <div class="speaker-info">
      <div class="speaker-info__image-group"><img v-for="speaker in (workshop.speaker || [])"
           :key="speaker.name"
           :src="speaker.image"
           :alt="speaker.name"
           class="speaker-image"></div>
      {{ makeList((workshop.speaker || []).map((speaker) => speaker.name)) }}:
      <strong>{{ workshop.title }}</strong>
    </div>
  </nuxt-link>
</template>
<script lang="ts" setup>
import workshops from '../../data/workshops'
import {makeList} from "~/utils/getList";

type Speaker = {
  image: string
  name: string
  link?: string
}

type Workshop = {
  title: string
  speaker: Speaker[]
  description: string[]
  schedule: string
  track: string
  twitter: string[]
}

const props = defineProps({
  id: { type: String, required: true }
})

const workshop: ComputedRef<Workshop | undefined> = computed(() => workshops[props.id])
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
}
</style>
