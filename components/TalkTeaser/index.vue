<template>
  <nuxt-link v-if="talk" :to="`/talk/${id}`">
    <div class="speaker-info">
      <div class="speaker-info__image-group"><img v-for="speaker in (talk.speaker || [])"
           :key="speaker.name"
           :src="speaker.image"
           :alt="speaker.name"
           class="speaker-image"></div>
      
      {{ makeList((talk.speaker || []).map((speaker: Speaker) => speaker.name)) }}:
      <strong>{{ talk.title }}</strong>
    </div>
  </nuxt-link>
</template>
<script lang="ts" setup>
import talks from '../../data/talks'
import {makeList} from "~/utils/getList";

type Speaker = {
  image: string
  name: string
  link?: string
}

type Talk = {
  title: string
  speaker: Speaker[]
  description: string[]
  schedule: string
  twitter: string
}

const props = defineProps({
  id: { type: String, required: true }
})

const talk: ComputedRef<Talk | undefined> = computed(() => talks[props.id])
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
}
</style>
